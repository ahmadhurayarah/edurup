import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock9, GraduationCap, Laptop, Trophy } from "lucide-react";

import React from "react";

const FeaturedCourses = () => {
  const softwareCourses = [
    {
      title: "",
      description:
        "Become a job-ready Frontend web professional in 20 weeks. Join the largest tech community in India. Pay only after you get a job above 3.6 LPA",
      duration: "4 Months",
      graduation: "For Final year",
      classes: "Part-time online live classes",
      job: "100% Job Assurance",
    },

    {
      title: "Certification in Automation Testing",
      description:
        "Become a job-ready Data Science professional in 16 weeks. Join the largest tech community in India. Pay only after you get a job above 3.6 LPA",
      duration: "3 Months",
      graduation: "For Final year",
      classes: "Part-time online live classes",
      job: "100% Job Assurance",
    },
  ];
  const businessCourses = [
    {
      title: "Certification in Advanced Digital Marketing",
      description:
        "Become a job-ready Data Science professional in 12 weeks. Join the largest tech community in India. Pay only after you get a job above 3 LPA",
      duration: "3 Months",
      graduation: "For Final year",
      classes: "Part-time online live classes",
      job: "100% Job Assurance",
    },
    {
      title: "Certification in Financial Analyst",
      description:
        "Become a job-ready Data Science professional in 12 weeks. Join the largest tech community in India. Pay only after you get a job above 3 LPA",
      duration: "3 Months",
      graduation: "For Final year",
      classes: "Part-time online live classes",
      job: "100% Job Assurance",
    },
    {
      title: "Certification in Business Development",
      description:
        "Become a job-ready Data Science professional in 8 weeks. Join the largest tech community in India. Pay only after you get a job above 2.4 LPA",
      duration: "2 Months",
      graduation: "For Final year",
      classes: "Part-time online live classes",
      job: "100% Job Assurance",
    },
  ];

  return (
    <>
      <div className="pt-[1.3rem] sm:pt-[2rem] pb-[4rem] flex flex-col items-center justify-center dark:bg-dark">
        <h1 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-primary ">
          Featured <span className="text-fg dark:text-fg">Courses</span>
        </h1>
        <Tabs
          defaultValue="sc"
          className="w-[270px] sm:w-[400px] flex flex-col items-center justify-center"
        >
          <TabsList className="mb-5 hidden sm:grid w-auto sm:w-full grid-cols-2 border-fg">
            <TabsTrigger value="sc">Software Courses</TabsTrigger>
            <TabsTrigger value="bc">Business Courses</TabsTrigger>
          </TabsList>
          <TabsList className="mb-5 sm:hidden h-11 grid grid-cols-2 border-fg">
            <TabsTrigger value="sc" className="text-sm">
              Software Courses
            </TabsTrigger>
            <TabsTrigger value="bc" className="text-sm">
              Business Courses
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="sc" className="hidden lg:block w-[1200px]">
            <div className="flex items-center justify-around">
              {softwareCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border shadow-re shadow-lg dark:border-gray-600 max-w-[350px] h-[410px]"
                >
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-2 text-lg text-primary">
                    <div className=" flex gap-x-3">
                      <Clock9 color="#ff3115" />
                      {course.duration}
                    </div>
                    <div className=" flex gap-x-3">
                      <GraduationCap color="#ff3115" />
                      {course.graduation}
                    </div>
                    <div className=" flex gap-x-3">
                      <Laptop color="#ff3115" />
                      {course.classes}
                    </div>
                    <div className=" flex gap-x-3">
                      <Trophy color="#ff3115" />
                      {course.job}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent> */}

          <TabsContent
            value="sc"
            className="w-[75rem] hidden min-[1200px]:block"
          >
            <div className="flex items-center justify-around">
              {softwareCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border shadow-fg shadow-lg dark:border-gray-600 max-w-[350px] h-[410px]"
                >
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-2 text-lg text-primary">
                    <div className=" flex gap-x-3">
                      <Clock9 color="#6ed290" />
                      {course.duration}
                    </div>
                    <div className=" flex gap-x-3">
                      <GraduationCap color="#6ed290" />
                      {course.graduation}
                    </div>
                    <div className=" flex gap-x-3">
                      <Laptop color="#6ed290" />
                      {course.classes}
                    </div>
                    <div className=" flex gap-x-3">
                      <Trophy color="#6ed290" />
                      {course.job}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent
            value="sc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-screen">
              <div className="grid grid-cols-2 items-center border  ">
                {softwareCourses.map((course, index) => (
                  <Card
                    key={index}
                    className="mx-6 mb-4 border flex flex-col justify-center shadow-fg shadow-lg dark:border-gray-600 max-w-screen h-auto"
                  >
                    <CardHeader className="">
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2 text-lg text-primary ">
                      <div className=" flex gap-x-3">
                        <Clock9 color="#6ed290" />
                        <div className="text-sm">{course.duration}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <GraduationCap color="#6ed290" />{" "}
                        <div className="text-sm">{course.graduation}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Laptop color="#6ed290" />{" "}
                        <div className="text-sm">{course.classes}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Trophy color="#6ed290" />{" "}
                        <div className="text-sm">{course.job}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sc" className="block min-[700px]:hidden">
            <div className="w-screen">
              <div className="flex flex-col space-y-6 items-center justify-around ">
                {softwareCourses.map((course, index) => (
                  <Card
                    key={index}
                    className="mx-4 border flex flex-col justify-center shadow-fg shadow-lg dark:border-gray-600 max-w-screen h-auto"
                  >
                    <CardHeader className="">
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2 text-lg text-primary ">
                      <div className=" flex gap-x-3">
                        <Clock9 color="#6ed290" />
                        <div className="text-sm">{course.duration}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <GraduationCap color="#6ed290" />{" "}
                        <div className="text-sm">{course.graduation}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Laptop color="#6ed290" />{" "}
                        <div className="text-sm">{course.classes}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Trophy color="#6ed290" />{" "}
                        <div className="text-sm">{course.job}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          {/* ******************************************************************* */}
          <TabsContent
            value="bc"
            className="w-[75rem] hidden min-[1200px]:block"
          >
            <div className="flex items-center justify-around">
              {businessCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border shadow-fg shadow-lg dark:border-gray-600 max-w-[350px] h-[410px]"
                >
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-2 text-lg text-primary">
                    <div className=" flex gap-x-3">
                      <Clock9 color="#6ed290" />
                      {course.duration}
                    </div>
                    <div className=" flex gap-x-3">
                      <GraduationCap color="#6ed290" />
                      {course.graduation}
                    </div>
                    <div className=" flex gap-x-3">
                      <Laptop color="#6ed290" />
                      {course.classes}
                    </div>
                    <div className=" flex gap-x-3">
                      <Trophy color="#6ed290" />
                      {course.job}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent
            value="bc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-screen">
              <div className="grid grid-cols-2 items-center border  ">
                {businessCourses.map((course, index) => (
                  <Card
                    key={index}
                    className="mx-6 mb-4 border flex flex-col justify-center shadow-fg shadow-lg dark:border-gray-600 max-w-screen h-auto"
                  >
                    <CardHeader className="">
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2 text-lg text-primary ">
                      <div className=" flex gap-x-3">
                        <Clock9 color="#6ed290" />
                        <div className="text-sm">{course.duration}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <GraduationCap color="#6ed290" />{" "}
                        <div className="text-sm">{course.graduation}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Laptop color="#6ed290" />{" "}
                        <div className="text-sm">{course.classes}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Trophy color="#6ed290" />{" "}
                        <div className="text-sm">{course.job}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bc" className="block min-[700px]:hidden ">
            <div className="w-screen">
              <div className="flex flex-col space-y-6 items-center justify-around ">
                {businessCourses.map((course, index) => (
                  <Card
                    key={index}
                    className="mx-4 border flex flex-col justify-center shadow-re shadow-lg dark:border-gray-600 max-w-screen h-auto"
                  >
                    <CardHeader className="">
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2 text-lg text-primary ">
                      <div className=" flex gap-x-3">
                        <Clock9 color="#6ed290" />
                        <div className="text-sm">{course.duration}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <GraduationCap color="#6ed290" />{" "}
                        <div className="text-sm">{course.graduation}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Laptop color="#6ed290" />{" "}
                        <div className="text-sm">{course.classes}</div>
                      </div>
                      <div className=" flex gap-x-3">
                        <Trophy color="#6ed290" />{" "}
                        <div className="text-sm">{course.job}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* <TabsContent value="bc" className="hidden lg:block w-[1200px]">
            <div className="flex items-center justify-around">
              {businessCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border shadow-re shadow-lg dark:border-gray-600 max-w-[350px] h-[410px]"
                >
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-2 text-lg text-primary">
                    <div className=" flex gap-x-3">
                      <Clock9 color="#ff3115" />
                      {course.duration}
                    </div>
                    <div className=" flex gap-x-3">
                      <GraduationCap color="#ff3115" />
                      {course.graduation}
                    </div>
                    <div className=" flex gap-x-3">
                      <Laptop color="#ff3115" />
                      {course.classes}
                    </div>
                    <div className=" flex gap-x-3">
                      <Trophy color="#ff3115" />
                      {course.job}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent> */}
        </Tabs>
      </div>
      <Separator />
    </>
  );
};

export default FeaturedCourses;
