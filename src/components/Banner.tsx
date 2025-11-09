"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Banner = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  try {
    await toast.promise(
      axios.post("http://localhost:3001/api/liveDemo", {
        fullName,
        email,
        phoneNumber,
      }),
      {
        loading: "Sending message...",
        success: () => {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          return "Message sent successfully! Check your email for confirmation.";
        },
        error: (error) => {
          const message = error.response?.data?.message || "Failed to send message!";
          return message;
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
    <>
      <div
        className="absolute inset-x-0 top-60 sm:-top-20 sm:ml-20 -z-10 transform-gpu overflow-hidden flex justify-center blur-lg sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] ml-[10rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="p-4 sm:p-10 dark:bg-dark bg-primary">
        <div className="flex flex-col sm:flex-row items-center justify-center ">
          <div className="flex flex-col justify-center w-screen sm:w-[40rem]">
            <div className="ml-0 sm:ml-10  w-auto">
              <div className="p-4 sm:p-0">
                <h1 className="text-sm sm:text-2xl text-primary">
                  LEARN WHAT THE INDUSTRY DEMANDS
                </h1>

                <h3 className="mt-2 font-semibold sm:mt-6 text-3xl sm:text-5xl  ">
                  Unlock Your <br />
                  <span className="border-b-2 border-fg">Dream Tech Job</span>
                </h3>
                <div className="mt-6 space-y-2 text-lg text-primary hidden sm:block">
                  <div className="flex gap-x-3">
                    <CheckCircle color="#6ed290" />
                    Top rated certification in Data Science & Artificial
                    Intelligence
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#6ed290" />
                    Live classes 3 days/week + bonus sessions
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#6ed290" />
                    No prior coding knowledge needed
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#6ed290" />
                    1:1 mentorship from industry experts
                  </div>
                </div>
                <div className="mt-3 flex flex-col space-y-1 text-sm text-primary sm:hidden">
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#6ed290" />
                    </div>
                    <div> 1:1 mentorship from industry experts</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#6ed290" />
                    </div>
                    <div> No prior coding knowledge needed</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#6ed290" />
                    </div>
                    <div> Live classes 4 days/week + bonus sessions</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#6ed290" />
                    </div>
                    <div>Top rated certification Bootcamps</div>
                  </div>
                </div>

                <div className="mt-3 hidden sm:block">
                  <Button
                    variant="fg"
                    className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] hover:border-fg hover:text-fg text-black hover:bg-dark transition-colors "
                  >
                    Download Brochure
                  </Button>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border border-fg dark:border-fg h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] text-fg hover:text-black hover:bg-fg transition-colors dark:hover:bg-fg
                    "
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
                <div className="my-2 flex items-center justify-center sm:hidden">
                  <Button
                    variant="fg"
                    className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors "
                  >
                    Download Brochure
                  </Button>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-fg hover:text-white hover:bg-fg transition-colors dark:hover:bg-fg"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 sm:px-0 w-screen sm:w-[40rem]">
            <div className="border border-fg dark:bg-dark bg-primary dark:border-fg hover:shadow-xl transition-shadow duration-400 shadow-2xl rounded-xl register-form py-2 px-6 sm:px-8 sm:py-8 ">
              <h4 className="text-lg sm:text-3xl text-center mb-2 sm:mb-6">
                Book A Live Demo For Free!
              </h4>
              <form onSubmit={handleSubmit}>
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />

                <div className="flex flex-row items-center mb-0 sm:mb-4 ">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="terms"
                      className="accent-fg mt-[0.2rem] sm:mt-0"
                      required
                    />
                  </div>
                  <div className="ml-2 hidden sm:block">
                    By clicking, you agree to our Terms & Conditions
                  </div>
                  <div className="ml-2 w-full text-[0.6rem] sm:hidden min-[499px]:text-[0.7rem]">
                    By clicking, you agree to our Terms & Conditions
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="fg"
                  className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors"
                  disabled={loading}
                >
                  Get it now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Banner;
