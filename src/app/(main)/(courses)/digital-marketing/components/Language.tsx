import { Separator } from "@/components/ui/separator";
import { Code } from "lucide-react";
import Image from "next/image";
import React from "react";

const Language = () => {
  return (
    <>
      <div className="hidden sm:block w-full bg-white py-[2rem] flex-col justify-center ">
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-5xl font-semibold text-center text-black">
            Language and Tools covered
          </h3>
        </div>
        <div className="px-[15rem]">
          <Image
            src="/language.png"
            alt="language"
            width={3424}
            height={64}
            className="object-cover"
          />
        </div>
        <div className=" flex flex-row justify-evenly items-center">
          <div className=" flex flex-col text-black justify-center items-start gap-y-10">
            <div className="flex flex-col">
              <h3 className="text-3xl">Hands on Practice</h3>
              <div>Data sets from the industry</div>
            </div>
            <div className="flex flex-row justify-center gap-x-5">
              <Image
                src="/netflix.png"
                alt="netflix"
                height={100}
                width={100}
              />
              <Image src="/uber.png" alt="uber" height={100} width={100} />
              <Image src="/amazon.png" alt="amazon" height={100} width={100} />
              <Image
                src="/dominos.png"
                alt="dominos"
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className=" flex flex-row justify-center items-center gap-x-6 text-black ">
            <div className="gap-y-5 flex flex-col items-center justify-center bg-fg h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] rounded-xl p-2 sm:p-4">
              <div className="">
                <Code size={40} className="dark:text-black" />
              </div>
              <div className="h-10 flex flex-row items-center justify-center ">
                <h3 className="ml-4 text-sm sm:text-lg">
                  200+ Projects Completed
                </h3>
              </div>
            </div>
            <div className="gap-y-5 flex flex-col items-center justify-center bg-fg h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] rounded-xl p-2 sm:p-4">
              <div className="flex flex-row items-center justify-center">
                <Code size={40} className="dark:text-black" />
              </div>
              <div className="h-10 flex flex-row items-center justify-center ">
                <h3 className="text-sm sm:text-lg">50+ Domains</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden w-full bg-white py-[2rem] flex-col justify-center items-center">
        <h3 className="text-xl sm:text-5xl font-semibold text-center text-black">
          Language and Tools covered
        </h3>

        <div className="mb-1 px-[2rem] ">
          <div className="relative flex overflow-x-hidden gap-x-10">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap">
              <Image
                src="/language.png"
                alt="Marquee Image"
                width={3424}
                height={80}
                className="h-[3rem] object-cover"
              />
            </div>

            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap">
              <Image
                src="/language.png"
                alt="Marquee Image"
                width={3424}
                height={80}
                className="h-[3rem] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center">
          <h3 className="text-lg text-black">Hands on Practice</h3>
          <div className="text-sm text-black">Data sets from the industry</div>
        </div>
        <div className="mt-5 flex flex-row justify-center items-center gap-x-6 text-black ">
          <div className="gap-y-5 flex flex-col items-center justify-center bg-fg h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] rounded-xl p-2 sm:p-4">
            <div className="">
              <Code size={40} className="dark:text-black" />
            </div>
            <div className="h-10 flex flex-row items-center justify-center ">
              <h3 className="ml-4 text-sm sm:text-lg">
                200+ Projects Completed
              </h3>
            </div>
          </div>
          <div className="gap-y-5 flex flex-col items-center justify-center bg-fg h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] rounded-xl p-2 sm:p-4">
            <div className="flex flex-row items-center justify-center">
              <Code size={40} className="dark:text-black" />
            </div>
            <div className="h-10 flex flex-row items-center justify-center ">
              <h3 className="text-sm sm:text-lg">50+ Domains</h3>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-center items-center gap-x-2">
          <Image src="/netflix.png" alt="netflix" height={100} width={50} />
          <Image src="/uber.png" alt="uber" height={100} width={50} />
          <Image src="/amazon.png" alt="amazon" height={100} width={50} />
          <Image src="/dominos.png" alt="dominos" height={100} width={50} />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Language;
