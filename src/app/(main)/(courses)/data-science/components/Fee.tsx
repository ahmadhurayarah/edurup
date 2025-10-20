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
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-900 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-16 px-6">
        
        {/* Fee Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center w-full md:w-1/3 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-bold mb-4">Post Graduate Program</h2>
          <p className="text-5xl font-extrabold mb-2">₹1,00,000</p>
          <p className="text-green-300 font-semibold mb-1">Scholarship: ₹30,000</p>
          <p className="text-gray-200 mb-1">Effective Fee: ₹70,000</p>
          <p className="text-gray-200 mb-6">Loan Facility: ₹10,000/month</p>
          <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:shadow-xl transition duration-300">
            Enroll Now
          </button>
        </div>

        {/* Benefits List */}
        <div className="flex-1 flex flex-col justify-center gap-6 w-full">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Join This Program
          </h3>
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
