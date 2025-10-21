"use client";
import { Clock, Eye, FileText, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const curriculum = [
  {
    title: "Python for Data Science",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "2 projects",
    description: [
      "Python Basics: Variables, Loops, and Functions",
      "Data Structures for Data Science",
      "Working with NumPy and Pandas",
      "Data Cleaning and Manipulation",
      "Exploratory Data Analysis (EDA)"
    ]
  },
  {
    title: "Statistics & Probability for Data Science",
    duration: "2 weeks",
    lessons: "8 lessons",
    projects: "2 projects",
    description: [
      "Descriptive vs Inferential Statistics",
      "Probability Distributions",
      "Hypothesis Testing & Confidence Intervals",
      "Correlation & Regression Analysis"
    ]
  },
  {
    title: "Data Visualization",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "2 projects",
    description: [
      "Matplotlib and Seaborn Essentials",
      "Interactive Visuals with Plotly",
      "Data Storytelling Techniques",
      "Creating Dashboards with Streamlit"
    ]
  },
  {
    title: "Machine Learning Foundations",
    duration: "4 weeks",
    lessons: "18 lessons",
    projects: "4 projects",
    description: [
      "Supervised vs Unsupervised Learning",
      "Regression and Classification Models",
      "Model Evaluation Metrics",
      "Feature Engineering",
      "Model Deployment Concepts"
    ]
  },
  {
    title: "Deep Learning",
    duration: "4 weeks",
    lessons: "20 lessons",
    projects: "4 projects",
    description: [
      "Introduction to Neural Networks",
      "TensorFlow & Keras Basics",
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "Transfer Learning and Fine-Tuning",
      "Deploying Deep Learning Models"
    ]
  },
  {
    title: "Data Science Capstone Project",
    duration: "3 weeks",
    lessons: "6 lessons",
    projects: "1 major project",
    description: [
      "Problem Definition and Dataset Selection",
      "Model Building and Optimization",
      "Presentation and Documentation",
      "End-to-End Project Deployment"
    ]
  }
];

const Curriculum = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <>
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              <span className="mr-2">📊</span>
              Course Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Become a <span className="text-blue-500">Data Scientist</span> from Scratch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn Python, statistics, machine learning, and deep learning — all through hands-on projects and real-world applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Modules */}
            <div className="lg:col-span-2 space-y-4">
              {curriculum.map((module, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div
                    className="p-6 cursor-pointer flex justify-between items-start"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" /> {module.duration}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" /> {module.lessons}
                          </div>
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" /> {module.projects}
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedModule === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <h4 className="text-sm font-semibold text-gray-700 mt-4 mb-3">What you’ll learn:</h4>
                          <ul className="space-y-2">
                            {module.description.map((item, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Column - Highlights */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-blue-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Program Highlights</h3>
                </div>

                <div className="px-6 py-6 text-white space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-blue-200">Duration</div>
                      <div className="font-semibold">4–6 Months</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Format</div>
                      <div className="font-semibold">Live + Recorded</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Projects</div>
                      <div className="font-semibold">15+ Real-world</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Mentorship</div>
                      <div className="font-semibold">1:1 Expert Sessions</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Placement</div>
                      <div className="font-semibold">Guaranteed Support</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Certificate</div>
                      <div className="font-semibold">Industry Recognized</div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="bg-blue-500 px-6 py-4">
                  <div className="text-white">
                    <div className="text-sm text-blue-200 mb-2">Program Rating</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">4.9/5 (1,540 reviews)</span>
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
