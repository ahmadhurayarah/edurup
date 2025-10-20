import { Separator } from "@/components/ui/separator";
import { Code } from "lucide-react";
import Image from "next/image";
import React from "react";

const logos = ["/netflix.png", "/uber.png", "/amazon.png", "/dominos.png"];

const Language = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:flex w-full flex-col items-center bg-white py-16">
        <h3 className="text-3xl sm:text-5xl font-semibold text-center text-black mb-12">
          Language and Tools Covered
        </h3>

        <div className="w-full max-w-6xl px-8">
          <Image
            src="/language.png"
            alt="Languages"
            width={3424}
            height={64}
            className="object-contain w-full"
          />
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-6xl px-8">
          {/* Left Column */}
          <div className="flex flex-col gap-10 text-black">
            <div>
              <h3 className="text-3xl font-semibold mb-2">Hands-on Practice</h3>
              <p>Data sets from the industry</p>
            </div>
            <div className="flex flex-row gap-6">
              {logos.map((logo, idx) => (
                <Image key={idx} src={logo} alt={logo} height={100} width={100} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center justify-center bg-fg h-40 w-40 rounded-xl p-4">
              <Code size={40} className="dark:text-black mb-2" />
              <h3 className="text-lg font-medium text-center">200+ Projects Completed</h3>
            </div>
            <div className="flex flex-col items-center justify-center bg-fg h-40 w-40 rounded-xl p-4">
              <Code size={40} className="dark:text-black mb-2" />
              <h3 className="text-lg font-medium text-center">50+ Domains</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full flex flex-col items-center bg-white py-16">
        <h3 className="text-2xl font-semibold text-center text-black mb-8">
          Language and Tools Covered
        </h3>

        {/* Marquee */}
        <div className="w-full overflow-x-hidden mb-6">
          <div className="flex animate-marquee gap-8">
            <Image src="/language.png" alt="Languages" width={3424} height={64} className="h-12 object-contain" />
            <Image src="/language.png" alt="Languages" width={3424} height={64} className="h-12 object-contain" />
          </div>
        </div>

        {/* Practice Info */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-lg font-semibold text-black">Hands-on Practice</h3>
          <p className="text-sm text-black">Data sets from the industry</p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-row gap-6 mb-6">
          <div className="flex flex-col items-center justify-center bg-fg h-36 w-36 rounded-xl p-4">
            <Code size={32} className="dark:text-black mb-2" />
            <h3 className="text-sm font-medium text-center">200+ Projects Completed</h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-fg h-36 w-36 rounded-xl p-4">
            <Code size={32} className="dark:text-black mb-2" />
            <h3 className="text-sm font-medium text-center">50+ Domains</h3>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-row gap-4">
          {logos.map((logo, idx) => (
            <Image key={idx} src={logo} alt={logo} height={60} width={60} className="object-contain" />
          ))}
        </div>
      </div>

      <Separator />
    </>
  );
};

export default Language;

