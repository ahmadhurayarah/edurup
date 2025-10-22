import React from "react";
import { CheckCircle, Clock, Users, GraduationCap, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const fee = [
  { 
    description: "Spend only two hours/day",
    icon: Clock,
    color: "text-blue-600"
  },
  { 
    description: "One-on-one mentorship and doubt resolution",
    icon: Users,
    color: "text-green-600"
  },
  { 
    description: "Network with your peers and industry experts",
    icon: GraduationCap,
    color: "text-purple-600"
  },
  { 
    description: "Job Guaranteed with Placement Services",
    icon: Shield,
    color: "text-orange-600"
  },
];

const Fee = () => {
  return (
    <>
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Course Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Post Graduate Program <span className="text-green-500">Fee</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              30% Scholarship Avaliable for students
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  ₹70,000
                </div>
                <div className="text-gray-600 mb-6">+ GST</div>
                
                <div className="bg-green-100 rounded-lg p-4 mb-6">
                  <div className="text-green-600 font-semibold text-lg">
                    EMI: ₹10,000/month
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pay only ₹50,000 upfront fee now
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pay the remaining ₹50,000 after receiving your Placement Offer Letter.
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What&apos;s Included
              </h3>
              
              <div className="space-y-4">
                {fee.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Enroll Now - Pay Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Fee;
