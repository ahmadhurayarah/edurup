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
          console.log('✅ Backend available at:', baseUrl);
          return true;
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.log(`❌ Backend not available at ${baseUrl}:`, errorMessage);
        continue;
      }
    }

    return false;
  } catch (error) {
    console.log('❌ Backend check failed:', error);
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
              console.log('✅ Request handled by backend');
              return result;
            }
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.log(`❌ Backend request failed at ${url}:`, errorMessage);
            continue;
          }
        }
      } catch (error) {
        console.log('❌ All backend attempts failed, falling back to server action');
      }
    }

    // Fallback to server action
    console.log('🔄 Using server action fallback');
    const { submitLiveDemoForm } = await import('../actions/live-demo');
    return await submitLiveDemoForm(formData);
    
  } catch (error) {
    console.error('❌ All submission methods failed:', error);
    throw new Error('Submission failed. Please try again.');
  }
}