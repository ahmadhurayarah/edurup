import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";

const B = () => {
  return (
    <>
      <div className="p-4 sm:p-10 dark:bg-dark bg-primary">
        <div className="flex flex-col sm:flex-row items-center justify-center ">
          <div className="flex flex-col justify-center w-screen sm:w-[40rem]">
            <div className="ml-0 sm:ml-10  w-auto">
              <div className="p-4 sm:p-0">
                <h1 className="text-sm sm:text-2xl text-primary">
                  LEARN WHAT THE INDUSTRY DEMANDS
                </h1>

                <h3 className="mt-2 sm:mt-6 text-3xl sm:text-5xl  ">
                  Unlock Your <br />
                  <span className="border-b-2 border-re">Dream Tech Job</span>
                </h3>
                <div className="mt-6 space-y-2 text-lg text-primary hidden sm:block">
                  <div className="flex gap-x-3">
                    <CheckCircle color="#ff3115" />
                    Top rated certification in Data Science & Artificial
                    Intelligence
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#ff3115" />
                    Live classes 3 days/week + bonus sessions
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#ff3115" />
                    No prior coding knowledge needed
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle color="#ff3115" />
                    1:1 mentorship from industry experts
                  </div>
                </div>
                <div className="mt-3 flex flex-col space-y-1 text-sm text-primary sm:hidden">
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#ff3115" />
                    </div>
                    <div> 1:1 mentorship from industry experts</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#ff3115" />
                    </div>
                    <div> No prior coding knowledge needed</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#ff3115" />
                    </div>
                    <div> Live classes 3 days/week + bonus sessions</div>
                  </div>
                  <div className="flex gap-x-2">
                    <div>
                      <CheckCircle color="#ff3115" />
                    </div>
                    <div>
                      Top rated certification in Data Science & Artificial
                      Intelligence
                    </div>
                  </div>
                </div>

                <div className="mt-3 hidden sm:block">
                  <Button
                    variant="r"
                    className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-r hover:border-white hover:text-white hover:bg-dark transition-colors "
                  >
                    Download Brochure
                  </Button>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-r text-r hover:text-white hover:bg-r transition-colors dark:hover:bg-r"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
                <div className="my-2 flex items-center justify-center sm:hidden">
                  <Button
                    variant="r"
                    className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-r hover:border-white hover:text-white hover:bg-dark transition-colors "
                  >
                    Download Brochure
                  </Button>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-r text-r hover:text-white hover:bg-r transition-colors dark:hover:bg-r"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 sm:px-0 w-screen sm:w-[40rem]">
            <div className="border border-re dark:border-r shadow-2xl  rounded-xl register-form bg-primary py-2 px-6 sm:px-8 sm:py-8 ">
              <h4 className="text-lg sm:text-3xl text-center mb-2 sm:mb-6">
                Book A Live Demo For Free!
              </h4>
              <form>
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-lg p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="text"
                  placeholder="Full Name"
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-lg p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="email"
                  placeholder="Email"
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-lg p-2 w-full mb-2 sm:mb-4 rounded-md dark:cursor-r"
                  type="phone"
                  placeholder="Phone Number"
                />

                <div className="flex mb-0 sm:mb-4 ">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="terms"
                      className="accent-r mt-[0.2rem] sm:mt-0"
                      required
                    />
                  </div>
                  <div className="ml-2 hidden sm:block">
                    By clicking Sign Up, you agree to our Terms & Conditions
                  </div>
                  <div className="ml-2 text-sm text-right sm:hidden">
                    By clicking Sign Up, you agree to our Terms & Conditions
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="r"
                  className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-r hover:border-white hover:text-white hover:bg-dark transition-colors "
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

export default B;
