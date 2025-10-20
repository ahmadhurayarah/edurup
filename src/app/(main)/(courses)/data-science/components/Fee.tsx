import React from "react";
import { Dot } from "lucide-react";

const feePoints = [
  "Learn at your convenience",
  "Spend only two hours/day",
  "One-on-one mentorship and doubt resolution",
  "Network with peers and industry experts",
  "Job Guaranteed with Placement Services",
];

const Fee = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
        Program <span className="text-indigo-600">Fee</span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 w-full max-w-7xl px-4">
        {/* Fee Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center w-full sm:w-1/3">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">₹30,000 + GST</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-1">Easy EMI options available</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Starting from ₹20,000/month</p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
            Enroll Now
          </button>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col gap-6 w-full sm:w-2/3">
          {feePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <Dot size={28} className="text-indigo-600 mt-1 flex-shrink-0" />
              <p className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fee;
