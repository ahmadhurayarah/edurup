"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import toast from "react-hot-toast";
import axios from "axios";

const students = [
  { src: "/person3.jpg", alt: "Student 1" },
  { src: "/person1.jpg", alt: "Student 2" },
  { src: "/person2.jpg", alt: "Student 3" },
];

const Banner = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios.post("/api/digitalMarketing", {
        fullName,
        email,
        phoneNumber,
        highestQualification: qualification,
      }),
      {
        loading: "Submitting...",
        success: () => {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setQualification("");
          setLoading(false);
          return "Message sent successfully!";
        },
        error: "Failed to submit",
      }
    );
  };

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden py-16 sm:py-24">
      {/* Animated Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 opacity-20 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 opacity-20 rounded-full animate-pulse-slow delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <p className="text-indigo-600 font-semibold text-lg sm:text-xl">
            Get a Job in 32 Weeks
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            PG in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Marketing</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            200+ Companies Hired Our Students
          </p>

          {/* Student Avatars */}
          <div className="flex items-center gap-4 mt-4">
            {students.map((s, idx) => (
              <Avatar key={idx} className="h-12 w-12 hover:scale-110 transition-transform duration-300">
                <AvatarImage src={s.src} />
                <AvatarFallback>Student</AvatarFallback>
              </Avatar>
            ))}
            <div className="flex flex-col text-gray-700 dark:text-gray-200 text-sm">
              <span>Join Over 1000+ Students</span>
              <span>Have a new idea every week</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-full sm:w-auto hover:from-indigo-700 hover:to-purple-700">
              Download Brochure
            </Button>
            <Button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 transition-colors">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Book A Free Live Demo
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              <Select onValueChange={setQualification} required>
                <SelectTrigger>
                  <SelectValue placeholder="Highest Qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Graduation Completed">Graduation (Completed)</SelectItem>
                  <SelectItem value="Graduation Ongoing">Graduation (Ongoing)</SelectItem>
                  <SelectItem value="Post Graduation Completed">Post Graduation (Completed)</SelectItem>
                  <SelectItem value="Post Graduation Ongoing">Post Graduation (Ongoing)</SelectItem>
                  <SelectItem value="12th/Diploma">12th/Diploma</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Get it now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Separator />
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(0.95); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Banner;
