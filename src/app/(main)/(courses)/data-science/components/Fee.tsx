import React from "react";
import { Dot } from "lucide-react";
const fee = [
  { description: "Learn at your convenience" },
  { description: "Spend only two hours/day" },
  { description: "One-on-one mentorship and doubt resolution" },
  { description: "Network with your peers and industry experts" },
  { description: "Job Guaranteed with Placement Services" },
];

const Fee = () => {
  return (
    <>
      <div className="w-full p-[2rem] flex flex-col items-center bg-primary">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary ">
            Program <span className="text-fg">Fee</span>
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-20">
          <div className="px-[2rem] py-[2rem] sm:px-[4rem] sm:py-[4rem] border border-fg rounded-3xl shadow-2xl dark:shadow-fg">
            <div className="mb-2">
              <h3 className="text-2xl sm:text-3xl text-primary ">
                ₹ 30,000 (+GST)
              </h3>
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Easy EMIs options available
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Starting from Rs.20,000/month
            </div>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-col ">
            {fee.map((item, index) => (
              <div
                key={index}
                className="text-black font-normal text-primary text-[1rem] sm:text-xl flex flex-row text-left sm:items-center"
              >
                <div>
                  <Dot size={37} />
                </div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fee;
