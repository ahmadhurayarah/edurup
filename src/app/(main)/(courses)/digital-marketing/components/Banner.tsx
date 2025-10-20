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

const images = [
  { src: "/person3.jpg", alt: "student" },
  { src: "/person1.jpg", alt: "student" },
  { src: "/person2.jpg", alt: "student" },
];

const Banner = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios.post("/api/digitalMarketing", {
        fullName,
        email,
        phoneNumber,
        highestQualification,
      }),
      {
        loading: "Sending...",
        success: () => {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setHighestQualification("");
          setLoading(false);
          return "Message sent successfully!";
        },
        error: "Failed to send message",
      }
    );
  };

  return (
    <section className="relative bg-primary dark:bg-dark py-16 sm:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-[60rem] aspect-[1155/678] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 rotate-[30deg]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <p className="text-sm sm:text-lg text-primary font-medium">
            Get a job in 32 Weeks
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            PG in Digital <br />
            <span className="border-b-4 border-fg pb-1">Marketing</span>
          </h1>
          <p className="text-sm sm:text-lg text-primary mt-2">
            200+ Companies Hired Our Students
          </p>

          {/* Avatars */}
          <div className="flex items-center gap-4 mt-4">
            {images.map((img, idx) => (
              <Avatar
                key={idx}
                className="h-10 w-10 sm:h-12 sm:w-12 hover:scale-125 transition-transform duration-300"
              >
                <AvatarImage src={img.src} />
                <AvatarFallback>Student</AvatarFallback>
              </Avatar>
            ))}
            <div className="flex flex-col text-primary text-left text-xs sm:text-sm">
              <span>Join Over 1000+ Students</span>
              <span>Have a new idea every week</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button variant="fg" className="w-full sm:w-auto">
              Download Brochure
            </Button>
            <Button variant="bg" className="w-full sm:w-auto flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white dark:bg-dark border border-fg rounded-xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
              Book A Free Live Demo
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <Select onValueChange={setHighestQualification} required>
                <SelectTrigger>
                  <SelectValue placeholder="Highest Qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Graduation (Completed)">Graduation (Completed)</SelectItem>
                  <SelectItem value="Graduation (Ongoing)">Graduation (Ongoing)</SelectItem>
                  <SelectItem value="Post Graduation (Completed)">Post Graduation (Completed)</SelectItem>
                  <SelectItem value="Post Graduation (Ongoing)">Post Graduation (Ongoing)</SelectItem>
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
    </section>
  );
};

export default Banner;
