import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

const curriculum = [
  {
    title: "Start Learning",
    description: ["Pay 9999 and join the course", "Live Classes by Experts"],
  },
  {
    title: "Get Asssesed",
    description: [
      "Write Online Assessment",
      "Get a Eligibility for placements",
    ],
  },
  {
    title: "Apply for jobs",
    description: [
      "Access Placement videos",
      "Apply for Jobs ",
      " Get a offer letter",
    ],
  },
];

const Learning_2 = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center ">
        <div className=" flex flex-col">
          <h3 className="text-xl sm:text-5xl font-semibold text-center text-primary dark:text-white">
            The New Immersive
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-xl sm:text-5xl dark:text-fg font-semibold text-primary">
            Learning Experience
          </h3>
        </div>{" "}
        <div className="relative">
          <Accordion
            type="single"
            collapsible
            className="px-[1rem] sm:px-[20rem] space-y-2 "
          >
            <AccordionItem key={0} value="item-0" className="px-[1rem] ">
              <AccordionTrigger showIcon={false} className="py-1">
                <div className=" flex flex-row items-center justify-center gap-x-3">
                  <h4
                    className={`z-20 before:dark:text-dark before:content-['1'] before:font-normal before:bg-white text-lg before:border before:border-gray-300 before:rounded-full before:w-9 before:h-9 before:flex before:items-center before:justify-center before:left-0`}
                  ></h4>
                  <h4 className="text-lg">{curriculum[0].title}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-[3rem] space-y-1">
                {curriculum[0].description.map((desc, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-x-2">
                    <CheckCircle2
                      className="text-r"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <h4 className="text-[1rem]">{desc}</h4>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={1} value="item-1" className="px-[1rem]">
              <AccordionTrigger showIcon={false} className="py-1">
                <div className=" flex flex-row items-center justify-center gap-x-3">
                  <h4
                    className={`z-20 before:dark:text-dark before:content-['2'] before:font-normal before:bg-white text-lg before:border before:border-gray-300 before:rounded-full before:w-9 before:h-9 before:flex before:items-center before:justify-center before:left-0`}
                  ></h4>
                  <h4 className="text-lg">{curriculum[1].title}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-[3rem] space-y-1">
                {curriculum[1].description.map((desc, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-x-2">
                    <CheckCircle2
                      className="text-r"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <h4 className="text-[1rem]">{desc}</h4>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={2} value="item-2" className="px-[1rem]">
              <AccordionTrigger showIcon={false} className="py-1">
                <div className=" flex flex-row items-center justify-center gap-x-3">
                  <h4
                    className={`z-20 before:dark:text-dark before:content-['3'] before:font-normal before:bg-white text-lg before:border before:border-gray-300 before:rounded-full before:w-9 before:h-9 before:flex before:items-center before:justify-center before:left-0`}
                  ></h4>
                  <h4 className="text-lg">{curriculum[2].title}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-[3rem] space-y-1">
                {curriculum[2].description.map((desc, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-x-2">
                    <CheckCircle2
                      className="text-r"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <h4 className="text-[1rem]">{desc}</h4>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Learning_2;
