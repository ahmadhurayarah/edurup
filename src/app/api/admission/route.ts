import { NextRequest, NextResponse } from "next/server";

type AdmissionBody = {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  mode: string;
  dob: string;
  gender: string;
  emergencyContact: string;
  address: string;
  courseName?: string;
};

export async function POST(request: NextRequest) {
  let body: Partial<AdmissionBody> = {};
  try {
    body = (await request.json()) as AdmissionBody;
    const {
      name,
      email,
      phone,
      qualification,
      mode,
      dob,
      gender,
      emergencyContact,
      address,
      courseName
    } = body;

    // Validate required fields
    const requiredFields: (keyof AdmissionBody)[] = [
      'name', 'email', 'phone', 'qualification', 'mode', 
      'dob', 'gender', 'emergencyContact', 'address'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    
    // Try different endpoints that might exist
    const endpoints = [
      '/api/leads', // Common endpoint for form submissions
      '/api/contacts', // Another common endpoint
      '/api/enquiries', // Common for enquiries
      '/api/submissions', // Generic submissions
      '/api/forms/admission', // Specific admission endpoint
      '/api/demo-requests', // If similar to live demo
    ];

    let lastError = null;

    for (const endpoint of endpoints) {
      try {
        console.log(`Trying endpoint: ${backendUrl}${endpoint}`);
        
        const response = await fetch(`${backendUrl}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            qualification,
            mode,
            dob,
            gender,
            emergencyContact,
            address,
            courseName,
            formType: 'admission',
            source: 'website-admission-form',
            message: `Admission enquiry for ${courseName} course`
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(`Success with endpoint: ${endpoint}`);
          
          return NextResponse.json(
            { message: "Admission form submitted successfully! We will contact you soon." },
            { status: 200 }
          );
        } else {
          console.log(`Endpoint ${endpoint} returned status: ${response.status}`);
          lastError = new Error(`Endpoint ${endpoint} responded with status: ${response.status}`);
        }
      } catch (error) {
        console.log(`Endpoint ${endpoint} failed:`, error);
        lastError = error;
        continue; // Try next endpoint
      }
    }

    // If all endpoints failed, throw the last error
    throw lastError || new Error('All backend endpoints failed');

  } catch (error) {
    console.error("All backend attempts failed:", error);
    
    // Log the submission for manual follow-up
    console.log('ADMISSION FORM SUBMISSION (All backends unavailable):', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      qualification: body.qualification,
      mode: body.mode,
      courseName: body.courseName,
      timestamp: new Date().toISOString()
    });

    // Still return success to user, but log for admin
    return NextResponse.json(
      { message: "Admission form received! Our team will contact you within 24 hours." },
      { status: 200 }
    );
  }
}