"use client";
import {
  Clock,
  Eye,
  FileText,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { dataScienceAICourseData } from "./data";

const curriculum = dataScienceAICourseData.curriculum.length
  ? dataScienceAICourseData.curriculum
  :[
    {
      "title": "Week 1: Introduction to Data Science & Python Basics",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Simple data calculator using Python",
      "description": [
        "What is Data Science? Industry scope & career paths",
        "Installing Python & Jupyter Notebook",
        "Python fundamentals: Data types, operators, loops, and conditions",
        "Functions and libraries (NumPy, Pandas intro)",
        "Mini Project: Simple data calculator using Python"
      ]
    },
    {
      "title": "Week 2: Data Handling with Python",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Clean and organize real-world eCommerce dataset",
      "description": [
        "Working with NumPy arrays and Pandas DataFrames",
        "Importing/exporting data (CSV, Excel, JSON)",
        "Data cleaning and transformation",
        "Handling missing data and duplicates",
        "Mini Project: Clean and organize real-world eCommerce dataset"
      ]
    },
    {
      "title": "Week 3: Exploratory Data Analysis (EDA) & Visualization",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "EDA on employee performance dataset",
      "description": [
        "Descriptive analysis and summary statistics",
        "Correlation and feature relationships",
        "Data visualization using Matplotlib & Seaborn",
        "Identifying trends and outliers",
        "Mini Project: EDA on employee performance dataset"
      ]
    },
    {
      "title": "Week 4: Statistics & Probability for Data Science",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Data-driven business decision-making case study",
      "description": [
        "Mean, Median, Mode, Variance, Standard Deviation",
        "Probability, distributions, and sampling",
        "Hypothesis testing (t-test, chi-square)",
        "Case Study: Data-driven business decision-making"
      ]
    },
    {
      "title": "Week 5: Machine Learning Foundations",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Predict student exam results using regression",
      "description": [
        "What is Machine Learning?",
        "Linear & Logistic Regression",
        "Data splitting (train/test), accuracy metrics",
        "Mini Project: Predict student exam results using regression"
      ]
    },
    {
      "title": "Week 6: Advanced Machine Learning",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Predict customer churn using classification",
      "description": [
        "Decision Trees, Random Forest, KNN",
        "Overfitting, model optimization",
        "Feature engineering & scaling",
        "Mini Project: Predict customer churn using classification"
      ]
    },
    {
      "title": "Week 7: SQL for Data Analysis",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Analyze company sales and profit data using SQL",
      "description": [
        "SQL basics: SELECT, WHERE, GROUP BY, ORDER BY",
        "JOINS, Subqueries, and Aggregations",
        "Querying large datasets efficiently",
        "Mini Project: Analyze company sales and profit data using SQL"
      ]
    },
    {
      "title": "Week 8: Real-World Case Studies & Projects",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Final mini projects submission",
      "description": [
        "End-to-End data workflow with Python and SQL",
        "Real-world data cleaning and prediction exercises",
        "Evaluation & feedback by mentor",
        "Submission of final mini projects"
      ],
    },
];

const Curriculum = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  // Animation variants
  const chevronVariants = {
    expanded: { rotate: 180 },
    collapsed: { rotate: 0 },
  };

  const contentVariants = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const listItemVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    collapsed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <>
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              <span className="mr-2">&lt; /&gt;</span>
              Course Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="text-orange-500">Learning Path</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to
              industry-ready digital marketer
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Modules */}
            <div className="lg:col-span-2 space-y-4">
              {curriculum.map((module, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Module Header - Clickable */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Module Number */}
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>

                      {/* Module Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {module.title}
                          </h3>
                          <motion.div
                            className="text-gray-400"
                            variants={chevronVariants}
                            animate={
                              expandedModule === index
                                ? "expanded"
                                : "collapsed"
                            }
                            transition={{
                              duration: 0.2,
                              ease: [0.4, 0, 0.2, 1] as const,
                            }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {module.lessons}
                          </div>
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {module.projects}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Module Details - Expandable */}
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        className="overflow-hidden"
                        variants={contentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">
                              What you&apos;ll learn:
                            </h4>
                            <motion.ul
                              className="space-y-2"
                              variants={{
                                expanded: {
                                  transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1,
                                  },
                                },
                              }}
                              initial="collapsed"
                              animate="expanded"
                            >
                              {module.description.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start"
                                  variants={listItemVariants}
                                >
                                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">
                                    {item}
                                  </span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Column - Course Highlights */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className="bg-teal-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    Course Highlights
                  </h3>
                </div>

                {/* Highlights List */}
                <div className="px-6 py-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                      <div className="text-sm text-teal-200">Duration</div>
                      <div className="font-semibold">
                        {dataScienceAICourseData.curriculumHighlights.duration}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Format</div>
                      <div className="font-semibold">
                        {dataScienceAICourseData.curriculumHighlights.format}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Projects</div>
                      <div className="font-semibold">
                        {dataScienceAICourseData.curriculumHighlights.projects}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Mentorship</div>
                      <div className="font-semibold">
                        {
                          dataScienceAICourseData.curriculumHighlights
                            .mentorship
                        }
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Placement</div>
                      <div className="font-semibold">
                        {dataScienceAICourseData.curriculumHighlights.placement}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Certificate</div>
                      <div className="font-semibold">
                        {
                          dataScienceAICourseData.curriculumHighlights
                            .certificate
                        }
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Rating */}
                <div className="bg-teal-500 px-6 py-4">
                  <div className="text-white">
                    <div className="text-sm text-teal-200 mb-2">
                      Course Rating
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-semibold">
                        {
                          dataScienceAICourseData.curriculumHighlights.rating
                            .value
                        }
                        /5 (
                        {dataScienceAICourseData.curriculumHighlights.rating.reviews.toLocaleString()}{" "}
                        reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Curriculum;
