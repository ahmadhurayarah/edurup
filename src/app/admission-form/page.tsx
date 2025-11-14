'use client';

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { submitAdmissionForm } from "../actions/admission";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

const AdmissionFormContent = () => {
  const searchParams = useSearchParams();
  const courseName = searchParams.get("course") || "Data Analytics";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // qualification: "",
    // mode: "",
    // dob: "",
    // gender: "",
    // emergencyContact: "",
    // address: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      await toast.promise(
        submitAdmissionForm({
          ...formData,
          courseName: courseName
        }),
        {
          loading: "Submitting your admission form...",
          success: (result) => {
            if (result.success) {
              setFormData({
                name: "",
                email: "",
                phone: "",
                // qualification: "",
                // mode: "",
                // dob: "",
                // gender: "",
                // emergencyContact: "",
                // address: ""
              });
              return result.message;
            } else {
              throw new Error(result.message);
            }
          },
          error: (error) => {
            return error.message || "Failed to submit form. Please try again.";
          },
        }
      );
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Section - Admission Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col h-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Admission Form
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Join our 10% Placement Assistance {courseName} Course
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full"
              />
            </div>

            {/* Qualification */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Highest Qualification *
              </label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select your qualification</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Mode *
              </label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

         
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Contact Number *
              </label>
              <Input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Enter emergency contact number"
                required
                className="w-full"
              />
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                required
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
              />
            </div> */}

            {/* Hidden button (not visible, triggered by Pay Now) */}
            <button type="submit" hidden></button>

            {/* Original Confirm Button */}
            {/* <Button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-semibold text-lg transition-colors duration-200"
            >
              {loading ? "Submitting..." : "Confirm Your Admission"}
            </Button> */}
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            We will contact you within 24 hours to confirm your admission.
          </p>
        </div>

        {/* Right Section - Fee Summary */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col h-full justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Program Fee</h2>

            {/* <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-green-700">DAF15KEARLYBIRD</p><br/>
                  <p className="text-green-600 text-sm">Save ₹15000</p><br/>
                  <p className="text-gray-500 text-xs">Valid Till : Sun, Nov 16 | 11:59 PM</p>
                </div>
                <span className="text-green-600 font-medium">Applied ✓</span>
              </div>
            </div> */}

            <div className="border-t border-gray-200 pt-4 text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Program Cost</span>
                <span className="font-medium">₹49,999</span>
              </div><br/>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span className="text-green-600 font-medium">-₹15,000</span>
              </div><br/>
              <hr className="my-3" />
              <div className="flex justify-between text-lg font-bold">
                <span>Amount Payable</span>
                <span className="text-purple-700">₹34,999</span>
              </div><br/>
              <p className="text-sm text-gray-500">EMI from ₹1,577/month</p>
            </div>

            <div className="mt-6">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" required />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 underline">
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Processing..." : "Pay Now →"}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default function AdmissionFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdmissionFormContent />
    </Suspense>
  );
}
