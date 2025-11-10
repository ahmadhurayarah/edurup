'use server';

import nodemailer from 'nodemailer';
import { MongoClient, ObjectId } from 'mongodb';

// MongoDB connection function
async function connectToDatabase() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI || 'mongodb+srv://edurupschool_db_user:nu1KOgmoTKbk31E9@cluster0.8ev0weu.mongodb.net/edurup?appName=Cluster0');
    await client.connect();
    console.log('✅ MongoDB connected in server action');
    return client;
  } catch (error) {
    console.error('❌ MongoDB connection failed in server action:', error);
    return null;
  }
}

// Save form data to MongoDB
async function saveToDatabase(formData: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) {
  let client = null;
  try {
    client = await connectToDatabase();
    if (!client) {
      console.log('❌ Database connection failed');
      return null;
    }

    const db = client.db('edurup');
    const collection = db.collection('livedemos');

    const demoRequest = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phoneNumber: formData.phoneNumber.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
      via: 'server-action'
    };

    // Check if email already exists
    const existingRequest = await collection.findOne({ email: demoRequest.email });
    if (existingRequest) {
      console.log('⚠️ Request with this email already exists:', demoRequest.email);
      return { exists: true, id: existingRequest._id.toString() }; // Convert to string
    }

    // Insert new request
    const result = await collection.insertOne(demoRequest);
    console.log('✅ Form data saved to database with ID:', result.insertedId);
    
    return { 
      success: true, 
      id: result.insertedId.toString(), // Convert ObjectId to string
      exists: false
    };

  } catch (error) {
    console.error('❌ Database save error:', error);
    return null;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function submitLiveDemoForm(formData: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) {
  let dbResult = null;
  let emailResults = { admin: false, user: false };

  try {
    console.log('📝 Processing live demo request via server action:', formData.email);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      return {
        success: false,
        message: 'All fields are required: fullName, email, phoneNumber',
      };
    }

    // Step 1: Save to database
    console.log('💾 Saving to database...');
    dbResult = await saveToDatabase(formData);

    if (dbResult && dbResult.exists) {
      return {
        success: false,
        message: 'A request with this email already exists',
      };
    }

    if (!dbResult) {
      console.log('⚠️ Database save failed, but continuing with email...');
    }

    // Step 2: Send emails
    console.log('📧 Sending emails...');
    emailResults = await sendEmailsServerAction(formData);

    if (!emailResults.admin && !emailResults.user) {
      return {
        success: false,
        message: 'Email service temporarily unavailable. Please try again later.',
      };
    }

    // Return plain JavaScript objects (no MongoDB objects)
    return {
      success: true,
      message: 'Live demo request submitted successfully! We\'ll contact you soon.',
      data: {
        id: dbResult?.id || 'temp', // This is now a string
        fullName: formData.fullName,
        email: formData.email,
      },
      emailResults: { // Ensure plain object
        admin: emailResults.admin,
        user: emailResults.user
      },
      dbSaved: !!dbResult
    };

  } catch (error) {
    console.error('❌ Error in server action:', error);
    return {
      success: false,
      message: 'Internal server error. Please try again later.',
    };
  }
}

async function sendEmailsServerAction(formData: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) {
  try {
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    const mailHost = process.env.MAIL_HOST || 'smtp.hostinger.com';
    const mailPort = parseInt(process.env.MAIL_PORT || '587');

    if (!mailUser || !mailPass) {
      console.log('❌ Email credentials missing in server action');
      return { admin: false, user: false };
    }

    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: mailPort,
      secure: false,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const adminPromise = transporter.sendMail({
      from: `"Edurup Leads" <${mailUser}>`,
      to: mailUser,
      subject: `New Live Demo Request - ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Live Demo Request</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Via:</strong> Server Action (Backend Fallback)</p>
          </div>
        </div>
      `,
    });

    const userPromise = transporter.sendMail({
      from: `"Edurup Team" <${mailUser}>`,
      to: formData.email,
      subject: 'Thank You for Your Interest in Our Live Demo!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You, ${formData.fullName}!</h2>
          <p>We've received your request for a live demo and we're excited to show you what we have to offer!</p>
          <p><strong>Our team will contact you within 24 hours to schedule your live demo.</strong></p>
          <p>If you have any immediate questions, feel free to reply to this email.</p>
          <br>
          <p>Best regards,<br><strong>Edurup Team</strong></p>
        </div>
      `,
    });

    const [adminResult, userResult] = await Promise.allSettled([adminPromise, userPromise]);

    return {
      admin: adminResult.status === 'fulfilled',
      user: userResult.status === 'fulfilled',
    };
  } catch (error) {
    console.error('❌ Email sending failed in server action:', error);
    return { admin: false, user: false };
  }
}