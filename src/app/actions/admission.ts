'use server';

import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

// MongoDB connection function (same as live demo)
async function connectToDatabase() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI || 'mongodb+srv://edurupschool_db_user:nu1KOgmoTKbk31E9@cluster0.8ev0weu.mongodb.net/edurup?appName=Cluster0');
    await client.connect();
    console.log('✅ MongoDB connected for admission form');
    return client;
  } catch (error) {
    console.error('❌ MongoDB connection failed for admission form:', error);
    return null;
  }
}

// Save admission data to MongoDB
async function saveAdmissionToDatabase(formData: {
  name: string;
  email: string;
  phone: string;
 
  courseName: string;
}) {
  let client = null;
  try {
    client = await connectToDatabase();
    if (!client) {
      console.log('❌ Database connection failed for admission');
      return null;
    }

    const db = client.db('edurup');
    const collection = db.collection('admissions');

    const admissionData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      // qualification: formData.qualification,
      // mode: formData.mode,
      // dob: formData.dob,
      // gender: formData.gender,
      // emergencyContact: formData.emergencyContact.trim(),
      // address: formData.address.trim(),
      courseName: formData.courseName,
      createdAt: new Date(),
      updatedAt: new Date(),
      via: 'server-action'
    };

    // Check if email already exists for this course
    const existingAdmission = await collection.findOne({ 
      email: admissionData.email,
      courseName: admissionData.courseName 
    });
    
    if (existingAdmission) {
      console.log('⚠️ Admission request with this email already exists for course:', admissionData.courseName);
      return { exists: true, id: existingAdmission._id };
    }

    // Insert new admission request
    const result = await collection.insertOne(admissionData);
    console.log('✅ Admission data saved to database with ID:', result.insertedId);
    
    return { 
      success: true, 
      id: result.insertedId,
      exists: false
    };

  } catch (error) {
    console.error('❌ Database save error for admission:', error);
    return null;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function submitAdmissionForm(formData: {
  name: string;
  email: string;
  phone: string;
  // qualification: string;
  // mode: string;
  // dob: string;
  // gender: string;
  // emergencyContact: string;
  // address: string;
  courseName: string;
}) {
  let dbResult = null;
  let emailResults = { admin: false, user: false };

  try {
    console.log('📝 Processing admission request via server action:', formData.email);

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'courseName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      return {
        success: false,
        message: `All fields are required. Missing: ${missingFields.join(', ')}`,
      };
    }

    // Step 1: Save to database
    console.log('💾 Saving admission to database...');
    dbResult = await saveAdmissionToDatabase(formData);

    if (dbResult && dbResult.exists) {
      return {
        success: false,
        message: 'You have already submitted an admission request for this course.',
      };
    }

    if (!dbResult) {
      console.log('⚠️ Database save failed, but continuing with email...');
    }

    // Step 2: Send emails
    console.log('📧 Sending admission emails...');
    emailResults = await sendAdmissionEmails(formData);

    if (!emailResults.admin && !emailResults.user) {
      return {
        success: false,
        message: 'Email service temporarily unavailable. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Admission form submitted successfully! We will contact you within 24 hours.',
      data: {
        id: dbResult?.id || 'temp',
        name: formData.name,
        email: formData.email,
        courseName: formData.courseName
      },
      emailResults,
      dbSaved: !!dbResult
    };

  } catch (error) {
    console.error('❌ Error in admission server action:', error);
    return {
      success: false,
      message: 'Internal server error. Please try again later.',
    };
  }
}

async function sendAdmissionEmails(formData: any) {
  try {
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    const mailHost = process.env.MAIL_HOST || 'smtp.hostinger.com';
    const mailPort = parseInt(process.env.MAIL_PORT || '587');

    console.log('🔧 Admission Email - Using EXACT live demo pattern');
    console.log('MAIL_USER:', mailUser);
    console.log('MAIL_HOST:', mailHost);

    if (!mailUser || !mailPass) {
      console.log('❌ Email credentials missing in admission');
      return { admin: false, user: false };
    }

    // EXACT same transporter as live demo
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

    // Test connection first
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError) {
      console.error('❌ SMTP connection failed:', verifyError);
      return { admin: false, user: false };
    }

    // EXACT same pattern as live demo
    const adminPromise = transporter.sendMail({
      from: `"Edurup Admissions" <${mailUser}>`,
      to: mailUser,
      subject: `New Admission Form - ${formData.courseName} - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Admission Form</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Course:</strong> ${formData.courseName}</p>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    const userPromise = transporter.sendMail({
      from: `"Edurup Team" <${mailUser}>`,
      to: formData.email,
      subject: `Thank You for Your Admission Application - ${formData.courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You, ${formData.name}!</h2>
          <p>We've received your admission application for <strong>${formData.courseName}</strong>.</p>
          <p><strong>We'll contact you within 24 hours.</strong></p>
          <p>Best regards,<br><strong>Edurup Team</strong></p>
        </div>
      `,
    });

    const [adminResult, userResult] = await Promise.allSettled([adminPromise, userPromise]);

    console.log('📧 Admission Email Results:');
    console.log('Admin:', adminResult.status);
    console.log('User:', userResult.status);

    // Show actual errors
    if (adminResult.status === 'rejected') {
      console.error('❌ Admin email failed:', adminResult.reason);
    }
    if (userResult.status === 'rejected') {
      console.error('❌ User email failed:', userResult.reason);
    }

    return {
      admin: adminResult.status === 'fulfilled',
      user: userResult.status === 'fulfilled',
    };
  } catch (error) {
    console.error('❌ Admission email error:', error);
    return { admin: false, user: false };
  }
}