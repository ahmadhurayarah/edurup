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
      
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Post Graduate Program Fee
      </h2>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-12 px-4">
        
        {/* Fee Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full md:w-1/3 hover:scale-105 transition-transform duration-300">
          <p className="text-sm sm:text-base mb-2">PGP – 8 Months</p>
          <p className="text-3xl sm:text-4xl font-bold mb-1">
            ₹10,000 <span className="text-base font-medium">/month</span>
          </p>
          <p className="text-sm sm:text-base text-green-200 font-medium mb-2">Flexible EMI options</p>
          <p className="text-sm text-gray-200 mb-1">Total Fee: ₹1,00,000</p>
          <p className="text-sm text-green-300 font-semibold mb-4">Scholarship: ₹30,000</p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full hover:shadow-md transition duration-300 text-sm sm:text-base">
            Enroll Now
          </button>
        </div>

        {/* Benefits List */}
        <div className="flex-1 flex flex-col justify-start gap-4 w-full">
          {feePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Dot size={20} className="text-indigo-600 mt-1 flex-shrink-0" />
              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium">{point}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fee;
