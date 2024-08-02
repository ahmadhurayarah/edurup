import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const G = () => {
  const outcomes = [
    {
      title: "Personal guidance from mentors",
      description:
        "Get groomed by experienced software developers who are working in the top companies",
    },
    {
      title: "Dedicated placement team",
      description:
        "A team of warriors ensure your profile reaches top companies from our 500+ partner",
    },
    {
      title: "Unlimited interview practice",
      description:
        "Gain confidence with unlimited mock interviews before the real interview",
    },
    {
      title: "Lifelong alumni community",
      description:
        "Placement Booster does not end with the course Your journey with us goes beyond any course",
    },
  ];
  return (
    <>
      <div className="p-[2rem] flex flex-col items-center justify-center dark:bg-dark">
        <div className="hidden min-[1200px]:block">
          <h1 className=" text-5xl font-semibold text-center text-primary ">
            Welcome to the <span className="text-re"> outcome powerhouse!</span>
          </h1>
          <p className="mt-3 text-3xl text-center">
            Your recipe for a rockstar career
          </p>
        </div>
        <div className="hidden min-[700px]:block min-[1200px]:hidden">
          <h1 className=" text-3xl font-semibold text-center text-primary ">
            Welcome to the <span className="text-re"> outcome powerhouse!</span>
          </h1>
        </div>
        <div className="block min-[700px]:hidden w-screen">
          <h1 className="text-3xl font-semibold text-center text-primary">
            Welcome to the
          </h1>
          <h1 className="text-2xl font-semibold text-center text-primary text-re  ">
            outcome powerhouse!
          </h1>
          <p className="mt-3 text-lg text-center text-primary">
            Your recipe for a rockstar career
          </p>
        </div>

        <div className="hidden items-center justify-center w-[1100px] mt-6 min-[1120px]:flex">
          <div>
            <Image
              className="rounded-xl"
              src="/career.jpg"
              width={650}
              height={400}
              alt="career"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between">
            {outcomes.map((ot, index) => (
              <div
                key={index}
                className="mb-2 p-3 text-left border border-gray-300 dark:border-gray-600 w-96 rounded-xl "
              >
                <h3 className="ml-2 text-xl font-semibold leading-none tracking-tight">
                  {ot.title}
                </h3>
                <p className="ml-2 mt-2 text-sm text-muted-foreground">
                  {ot.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 hidden flex-col items-center justify-center w-screen mt-6 min-[700px]:flex min-[1120px]:hidden ">
          <div>
            <Image
              className="rounded-xl w-screen"
              src="/career.jpg"
              width={650}
              height={400}
              alt="career"
            />
          </div>
          <div>
            <div className=" grid grid-cols-2 gap-x-4  items-center justify-center">
              {outcomes.map((ot, index) => (
                <div
                  key={index}
                  className="mt-5 p-3 text-left border border-gray-300 dark:border-gray-600 w-auto h-auto rounded-xl"
                >
                  <h3 className="text-xl font-semibold leading-none tracking-tight">
                    {ot.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {ot.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col items-center justify-center w-screen min-[700px]:hidden">
          <div>
            <Image
              className="rounded-xl"
              src="/career.jpg"
              width={650}
              height={400}
              alt="career"
            />
          </div>
          <div className="p-4 w-screen flex flex-wrap items-center justify-between">
            {outcomes.map((ot, index) => (
              <div
                key={index}
                className="mb-2 p-3 w-full text-left border border-gray-300 dark:border-gray-600 rounded-xl "
              >
                <h3 className="text-xl font-semibold leading-none tracking-tight">
                  {ot.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {ot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default G;
