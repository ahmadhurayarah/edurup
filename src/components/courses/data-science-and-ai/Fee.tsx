import React from "react";
import { CheckCircle, Clock, Users, GraduationCap, Shield, Star, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { dataScienceAICourseData } from "./data";

const iconMap: Record<string, typeof Clock> = { Clock, Users, GraduationCap, Shield };

const Fee = () => {
  const { fee } = dataScienceAICourseData;
  const scholarship = fee.scholarship;
  return (
    <>
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Certified Data Science <span className="text-green-600">Fee</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              #1Data Scientist course for students, Job Seekers & Professionals
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Pricing Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>

                {/* Price */}
                <div className="text-center pt-4">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-6xl font-bold text-gray-900">₹{scholarship.discountedPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-gray-500 text-lg mb-6">{scholarship.gst ? "+ GST" : ""}</div>
                  
                  {/* EMI Banner */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 mb-8 text-white shadow-lg">
                    <div className="flex items-center justify-center gap-3">
                      <Star className="w-5 h-5" />
                      <span className="text-xl font-bold">EMI: ₹{scholarship.emi.toLocaleString("en-IN")}/month</span>
                      <Star className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Scholarship Info */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div className="text-left">
                        <span className="font-semibold">Pay only ₹{scholarship.discountedPrice.toLocaleString("en-IN")}</span> after {scholarship.percentage}% scholarship
                        <div className="text-sm text-gray-500 mt-1">
                          Original fee: <span className="line-through">₹{scholarship.originalPrice.toLocaleString("en-IN")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                  What's Included in Your Journey
                </h3>
                
                <div className="space-y-6">
                  {fee.features.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || Clock;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-lg text-gray-800 font-medium">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-emerald-700">
                  <div className="flex items-center justify-center gap-3">
                    <span>Enroll Now</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  ⚡ Scholarship applications closing soon
                </p>
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