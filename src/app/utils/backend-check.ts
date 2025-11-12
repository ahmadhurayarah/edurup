// Check if backend is available
export async function isBackendAvailable(): Promise<boolean> {
  try {
    // Try multiple backend URLs
    const backendUrls = [
      'http://localhost:3001',
      process.env.NEXT_PUBLIC_BACKEND_URL,
      'https://your-production-backend-url.com' // Add your production backend URL
    ].filter(Boolean);

    for (const baseUrl of backendUrls) {
      try {
        const response = await fetch(`${baseUrl}/health`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Short timeout for quick fallback
          signal: AbortSignal.timeout(3000),
        });

        if (response.ok) {
          return true;
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        continue;
      }
    }

    return false;
  } catch (error) {
    return false;
  }
}

// Unified submit function that tries backend first, then falls back to server action
export async function submitLiveDemoWithFallback(formData: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) {
  try {
    // First try backend
    const backendAvailable = await isBackendAvailable();
    
    if (backendAvailable) {
      try {
        const backendUrls = [
          'http://localhost:3001/api/liveDemo',
          process.env.NEXT_PUBLIC_BACKEND_URL ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/liveDemo` : null,
          'https://your-production-backend-url.com/api/liveDemo' // Add your production backend URL
        ].filter((url): url is string => typeof url === 'string');

        for (const url of backendUrls) {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
              signal: AbortSignal.timeout(5000),
            });

            if (response.ok) {
              const result = await response.json();
              return result;
            }
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            continue;
          }
        }
      } catch (error) {
      }
    }

    // Fallback to server action
    console.log('🔄 Using server action fallback');
    const { submitLiveDemoForm } = await import('../actions/live-demo');
    return await submitLiveDemoForm(formData);
    
  } catch (error) {
    throw new Error('Submission failed. Please try again.');
  }
}

// Admission form backend check and submission
export async function submitAdmissionWithFallback(formData: {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  mode: string;
  dob: string;
  gender: string;
  emergencyContact: string;
  address: string;
  courseName: string;
}) {
  try {
    // First try backend (same pattern as live demo)
    const backendAvailable = await isBackendAvailable();
    
    if (backendAvailable) {
      try {
        const backendUrls = [
          'http://localhost:3001/api/admissions',
          process.env.NEXT_PUBLIC_BACKEND_URL ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admissions` : null,
        ].filter((url): url is string => typeof url === 'string');

        for (const url of backendUrls) {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
              signal: AbortSignal.timeout(5000),
            });

            if (response.ok) {
              const result = await response.json();
              return result;
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // Continue to fallback
      }
    }

    // Fallback to server action
    console.log('🔄 Using server action fallback for admission');
    const { submitAdmissionForm } = await import('../actions/admission');
    return await submitAdmissionForm(formData);
    
  } catch (error) {
    throw new Error('Admission submission failed. Please try again.');
  }
}