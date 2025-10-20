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
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-24 px-4">
        {/* Fee Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 flex flex-col items-center text-center w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Post Graduate Program</h2>
          <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">₹1,00,000</p>
          <p className="text-green-600 font-semibold mb-1">Scholarship: ₹30,000</p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">Effective Fee: ₹70,000</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Loan Facility: ₹10,000/month</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition">
            Enroll Now
          </button>
        </div>

        {/* Benefits List */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Program Benefits
          </h3>
          {feePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <Dot size={24} className="text-indigo-600 mt-1 flex-shrink-0" />
              <p className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl">{point}</p>
