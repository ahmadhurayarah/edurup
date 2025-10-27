import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Download, Flame } from "lucide-react";

import React from "react";

const FeaturedCourses1 = () => {
  const allCourses = [
    // Software Courses
    {
      title: "Data Science",
      duration: "8 MONTHS",
      batchStart: "Nov 15, 2025",
      scholarship: "Yes",
      emi: "Rs. 9,900",
      eligibility: "Open for All",
      enrolled: "400+",
      color: "blue",
      category: "software",
      features: [
        "Get a post Graduate certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
    {
      title: "PGP-Advanced Full Stack Development",
      duration: "6-8 MONTHS",
      batchStart: "Nov 5, 2025",
      scholarship: "Yes",
      emi: "Rs. 9,900",
      eligibility: "Open for All",
      enrolled: "300+",
      color: "green",
      category: "software",
      features: [
        "Get a post Graduate certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
    {
      title: "PGP - Data Analyst",
      duration: "3 MONTHS",
      batchStart: "Dec 15, 2025",
      scholarship: "Yes",
      emi: "Rs. 5,500",
      eligibility: "Open for All",
      enrolled: "850+",
      color: "purple",
      category: "software",
      features: [
        "Get a post Graduate certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
    // Business Courses
    {
      title: "Advanced Digital Marketing",
      duration: "3 MONTHS",
      batchStart: "Oct 20, 2025",
      scholarship: "Yes",
      emi: "Rs. 4,500",
      eligibility: "Open for All",
      enrolled: "2,100+",
      color: "orange",
      category: "business",
      features: [
        "Get a professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
    {
      title: "Financial Analyst Certification",
      duration: "4 MONTHS",
      batchStart: "Jan 10, 2026",
      scholarship: "Yes",
      emi: "Rs. 5,200",
      eligibility: "Open for All",
      enrolled: "1,500+",
      color: "red",
      category: "business",
      features: [
        "Get a professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
    {
      title: "Business Development Mastery",
      duration: "2 MONTHS",
      batchStart: "Feb 5, 2026",
      scholarship: "Yes",
      emi: "Rs. 3,800",
      eligibility: "Open for All",
      enrolled: "950+",
      color: "teal",
      category: "business",
      features: [
        "Get a professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required"
      ]
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        primary: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        check: "text-blue-600"
      },
      green: {
        primary: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
        check: "text-green-600"
      },
      purple: {
        primary: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
        check: "text-purple-600"
      },
      orange: {
        primary: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
        check: "text-orange-600"
      },
      red: {
        primary: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        button: "bg-red-600 hover:bg-red-700",
        check: "text-red-600"
      },
      teal: {
        primary: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-200",
        button: "bg-teal-600 hover:bg-teal-700",
        check: "text-teal-600"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const renderCourseCard = (course: any, index: number) => {
    const colors = getColorClasses(course.color);
    return (
      <Card
        key={index}
        className="w-[420px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex-shrink-0"
      >
        <CardHeader className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.primary}`}>
              ONLINE
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.primary}`}>
              {course.duration}
            </span>
          </div>
          <CardTitle className={`text-xl font-bold ${colors.primary} leading-tight`}>
            {course.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6 pt-0">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 rounded-lg p-1">
              <p className="text-sm text-gray-700 mb-1">NEW BATCH START FROM</p>
              <p className="text-sm font-medium text-gray-900">{course.batchStart}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-1">
              <p className="text-sm text-gray-700 mb-1">SCHOLARSHIP AVAILABLE</p>
              <p className="text-sm font-medium text-gray-900">{course.scholarship}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-1">
              <p className="text-sm text-gray-700 mb-1">EMI STARTS FROM</p>
              <p className="text-sm font-medium text-gray-900">{course.emi}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-1">
              <p className="text-sm text-gray-700 mb-1">ELIGIBILITY</p>
              <p className="text-sm font-medium text-gray-900">{course.eligibility}</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {course.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className={`w-5 h-5 mt-0.5 ${colors.check}`} />
                <p className="text-sm text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3 mb-4">
            <Button className={`flex-1 ${colors.button} text-white`}>
              Explore Course
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{course.enrolled} Students already enrolled</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <div className="pt-[1.3rem] sm:pt-[2rem] pb-[4rem] flex flex-col items-center justify-center dark:bg-dark">
        <h1 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-gray-900 dark:text-white">
          Featured <span className="text-blue-600 dark:text-blue-400">Courses</span>
        </h1>
        <Tabs
          defaultValue="sc"
          className="w-[270px] sm:w-[400px] flex flex-col items-center justify-center"
        >
          <TabsList className="mb-5 hidden sm:grid w-auto sm:w-full grid-cols-2 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <TabsTrigger 
              value="sc" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:bg-blue-50 transition-colors rounded-md"
            >
              Software Courses
            </TabsTrigger>
            <TabsTrigger 
              value="bc" 
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-700 hover:bg-green-50 transition-colors rounded-md"
            >
              Business Courses
            </TabsTrigger>
          </TabsList>
          <TabsList className="mb-5 sm:hidden h-11 grid grid-cols-2 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <TabsTrigger 
              value="sc" 
              className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:bg-blue-50 transition-colors rounded-md"
            >
              Software Courses
            </TabsTrigger>
            <TabsTrigger 
              value="bc" 
              className="text-sm data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-700 hover:bg-green-50 transition-colors rounded-md"
            >
              Business Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="sc"
            className="w-full hidden min-[1200px]:block"
          >
            <div className="flex items-center justify-center gap-6 px-8">
              {allCourses
                .filter(course => course.category === "software")
                .map((course, index) => renderCourseCard(course, index))}
                    </div>
          </TabsContent>

          <TabsContent
            value="bc"
            className="w-full hidden min-[1200px]:block"
          >
            <div className="flex items-center justify-center gap-6 px-8">
              {allCourses
                .filter(course => course.category === "business")
                .map((course, index) => renderCourseCard(course, index))}
            </div>
          </TabsContent>

          <TabsContent
            value="sc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allCourses
                  .filter(course => course.category === "software")
                  .map((course, index) => (
                <Card
                  key={index}
                      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            ONLINE
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            {course.duration}
                          </span>
                        </div>
                        <CardTitle className={`text-xl font-bold ${getColorClasses(course.color).primary} leading-tight`}>
                          {course.title}
                        </CardTitle>
                  </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">NEW BATCH START FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.batchStart}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">SCHOLARSHIP AVAILABLE</p>
                            <p className="text-sm font-medium text-gray-900">{course.scholarship}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">EMI STARTS FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.emi}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">ELIGIBILITY</p>
                            <p className="text-sm font-medium text-gray-900">{course.eligibility}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 mt-0.5 ${getColorClasses(course.color).check}`} />
                              <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                          ))}
                    </div>
                        
                        <div className="flex gap-3 mb-4">
                          <Button className={`flex-1 ${getColorClasses(course.color).button} text-white`}>
                            Explore Course
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
                            <Download className="w-4 h-4 mr-2" />
                            Download Brochure
                          </Button>
                    </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span>{course.enrolled} Students already enrolled</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="bc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allCourses
                  .filter(course => course.category === "business")
                  .map((course, index) => (
                  <Card
                    key={index}
                      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            ONLINE
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            {course.duration}
                          </span>
                        </div>
                        <CardTitle className={`text-xl font-bold ${getColorClasses(course.color).primary} leading-tight`}>
                          {course.title}
                        </CardTitle>
                    </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">NEW BATCH START FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.batchStart}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">SCHOLARSHIP AVAILABLE</p>
                            <p className="text-sm font-medium text-gray-900">{course.scholarship}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">EMI STARTS FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.emi}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">ELIGIBILITY</p>
                            <p className="text-sm font-medium text-gray-900">{course.eligibility}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 mt-0.5 ${getColorClasses(course.color).check}`} />
                              <p className="text-sm text-gray-700">{feature}</p>
                      </div>
                          ))}
                      </div>
                        
                        <div className="flex gap-3 mb-4">
                          <Button className={`flex-1 ${getColorClasses(course.color).button} text-white`}>
                            Explore Course
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
                            <Download className="w-4 h-4 mr-2" />
                            Download Brochure
                          </Button>
                      </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span>{course.enrolled} Students already enrolled</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sc" className="block min-[700px]:hidden">
            <div className="w-full px-4">
              <div className="flex flex-col space-y-6">
                {allCourses
                  .filter(course => course.category === "software")
                  .map((course, index) => (
                  <Card
                    key={index}
                      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            ONLINE
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            {course.duration}
                          </span>
                        </div>
                        <CardTitle className={`text-xl font-bold ${getColorClasses(course.color).primary} leading-tight`}>
                          {course.title}
                        </CardTitle>
                    </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">NEW BATCH START FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.batchStart}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">SCHOLARSHIP AVAILABLE</p>
                            <p className="text-sm font-medium text-gray-900">{course.scholarship}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">EMI STARTS FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.emi}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">ELIGIBILITY</p>
                            <p className="text-sm font-medium text-gray-900">{course.eligibility}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 mt-0.5 ${getColorClasses(course.color).check}`} />
                              <p className="text-sm text-gray-700">{feature}</p>
                      </div>
                          ))}
                      </div>
                        
                        <div className="flex gap-3 mb-4">
                          <Button className={`flex-1 ${getColorClasses(course.color).button} text-white`}>
                            Explore Course
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
                            <Download className="w-4 h-4 mr-2" />
                            Download Brochure
                          </Button>
                      </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span>{course.enrolled} Students already enrolled</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bc" className="block min-[700px]:hidden">
            <div className="w-full px-4">
              <div className="flex flex-col space-y-6">
                {allCourses
                  .filter(course => course.category === "business")
                  .map((course, index) => (
                <Card
                  key={index}
                      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            ONLINE
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(course.color).bg} ${getColorClasses(course.color).primary}`}>
                            {course.duration}
                          </span>
                        </div>
                        <CardTitle className={`text-xl font-bold ${getColorClasses(course.color).primary} leading-tight`}>
                          {course.title}
                        </CardTitle>
                  </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">NEW BATCH START FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.batchStart}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">SCHOLARSHIP AVAILABLE</p>
                            <p className="text-sm font-medium text-gray-900">{course.scholarship}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">EMI STARTS FROM</p>
                            <p className="text-sm font-medium text-gray-900">{course.emi}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">ELIGIBILITY</p>
                            <p className="text-sm font-medium text-gray-900">{course.eligibility}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 mt-0.5 ${getColorClasses(course.color).check}`} />
                              <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                          ))}
                    </div>
                        
                        <div className="flex gap-3 mb-4">
                          <Button className={`flex-1 ${getColorClasses(course.color).button} text-white`}>
                            Explore Course
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
                            <Download className="w-4 h-4 mr-2" />
                            Download Brochure
                          </Button>
                    </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span>{course.enrolled} Students already enrolled</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
      <Separator />
    </>
  );
};

export default FeaturedCourses1;