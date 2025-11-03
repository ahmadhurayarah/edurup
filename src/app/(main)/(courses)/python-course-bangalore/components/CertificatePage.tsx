// pages/index.tsx

import React from 'react';

const CertificatePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        {/* ... (previous content) ... */}
        <div className="mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-1a5 5 0 100-10 5 5 0 000 10zm0-1a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">upGrad Alumni Status</span>
          </div>
          <p className="text-gray-600">
            Forge lasting connections with a global network of tech experts and
            experienced peers.
          </p>
        </div>
        {/* Certificate section */}
        <div className="mt-8 border-t border-gray-300 pt-4">
          <div className="text-xl font-bold mb-2">CERTIFICATION OF COMPLETION</div>
          <p className="text-gray-600">
            THIS IS TO CERTIFY THAT
          </p>
          <p className="text-purple-600 text-2xl font-semibold mb-4">
            Landon Reed
          </p>
          <p className="text-gray-600">
            has successfully completed the
          </p>
          <p className="text-purple-600 text-lg font-semibold mb-4">
            Full Stack Development Bootcamp
          </p>
          <p className="text-gray-600">
            Date: September, 2022
          </p>
          <p className="text-gray-600">
            Mayank Kumar
          </p>
          <p className="text-gray-600">
            Co-founder & MD, upGrad
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
