"use client";
import { Clock, Eye, FileText, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { fullStackDeveloperCourseData } from "./data";

const curriculum = fullStackDeveloperCourseData.curriculum || [
  {
    title: "HTML, CSS, and Git Basics",
    duration: "2 weeks",
    lessons: "8 lessons",
    projects: "2 projects",
    description: [
      "HTML5: Structure, tags, semantic elements",
      "CSS3: Selectors, Flexbox, Grid, Responsive Design",
      "CSS Frameworks: Tailwind / Bootstrap",
      "Git & GitHub: version control, repository, branching, commits",
      "Mini Project: “Personal Portfolio Website",
    ]
  },
  {
    title: "JavaScript Fundamentals",
    duration: "3 weeks",
    lessons: "12 lessons",
    projects: "3 projects",
    description: [
      "Variables, Data Types, Operators",
      "Functions, Loops, Conditional statements",
      "Arrays, Objects, ES6+ features (let/const, arrow functions, template literals)",
      "DOM Manipulation & Events",
      "Async JS: Promises, Async/Await",
      "Mini Project: “Todo List App” (Vanilla JS)",
    ]
  },
  {
    title: "React.js Basics",
    duration: "4 weeks",
    lessons: "16 lessons",
    projects: "4 projects",
    description: [
      "React.js Basics",
      "Functional Components & Hooks (useState, useEffect)",
      "Event Handling, Lists, Conditional Rendering",
      "Folder structure & environment setup",
      "Mini Project: “Weather App using API",
    ]
  },
  {
    title: "Advanced React",
    duration: "3 weeks",
    lessons: "14 lessons",
    projects: "3 projects",
    description: [
      "Advanced React",
      "State Management with Redux Toolkit (optional)",
      "API Integration with Axios / Fetch",
      "Reusable components & UI design systems",
      "Project 1: “E-commerce Frontend with React",
      
    ]
  },
  {
    title: "Node.js Fundamentals",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "2 projects",
    description: [
      "Node.js Fundamentals",
      "File System, Event Loop, Async Programming",
      "Express.js introduction, Routes & Middleware",
      "REST API basics",
      "Mini Project: “Simple CRUD API",
    ]
  },
  {
    title: "MongoDB & Mongoose",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "NoSQL vs SQL databases",
      "MongoDB CRUD Operations",
      "Mongoose Schema, Models, and Validation",
      "Relationship between collections (One-to-Many)",
      "Mini Project: “Student Management API",
    ]
  },
  {
    title: "Authentication & Authorization",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "JWT Authentication & Security concepts",
      "Password Hashing (bcrypt)",
      "Login/Signup functionality",
      "Protecting routes & middleware authentication",
      "Project 2: “User Auth System with JWT",
    ]
  },
  {
    title: "Advanced Backend",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
       "File uploads (Multer/Cloudinary)",
 "Error handling & validation",
" Environment variables (.env)",
 "API documentation using Postman / Swagger",
" Deploying backend on Render / Railway",
"Project 3: “Blog API”",
    ]
  },
  {
    title: "MERN Integration",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "Connecting React frontend with Node.js backend",
 "Using Axios for API calls",
"Handling CORS & environment setup",
 "Authentication flow (Login/Logout on both sides)",
" Mini Project: “Notes App (Full Stack)”",
    ]
  },
  {
    title: "Real-World Full Stack Project",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "Project planning & folder structuring",
"Role-based authentication",
 "CRUD Operations on both sides",
 "Integrating image uploads, pagination, filters",
" Project 4: “Job Portal / Task Manager / E-Commerce App”",
    ]
  },
  {
    title: "Deployment & DevOps Basics",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "Deploying React app on Netlify/Vercel",
" Deploying backend on Render/Railway",
 "Connecting MongoDB Atlas",
 "Environment management, SSL, Domain setup",
-"CI/CD overview (GitHub Actions intro)",
    ]
  },
  {
    title: "Interview & Placement Preparation",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      " Resume & LinkedIn optimization",
       "GitHub Portfolio & Projects review",
      "Common MERN interview questions",
       "Mock interviews, coding tests, and DSA basics",
        "Final Project Presentation & Demo Day",
    ]
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
    collapsed: { rotate: 0 }
  };

  const contentVariants = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const listItemVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    collapsed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
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
              Comprehensive <span className="text-orange-500">Learning Path</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to industry-ready digital marketer
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Modules */}
            <div className="lg:col-span-2 space-y-4"> 
              {curriculum.map((module, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Module Header - Clickable */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Module Number */}
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
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
                            animate={expandedModule === index ? "expanded" : "collapsed"}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
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
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">What you&apos;ll learn:</h4>
                            <motion.ul 
                              className="space-y-2"
                              variants={{
                                expanded: {
                                  transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                  }
                                }
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
                                  <span className="text-sm text-gray-600">{item}</span>
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
                  <h3 className="text-xl font-bold text-white">Course Highlights</h3>
                </div>
                
                {/* Highlights List */}
                <div className="px-6 py-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                      <div className="text-sm text-teal-200">Duration</div>
                      <div className="font-semibold">8 weeks</div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Format</div>
                      <div className="font-semibold">Live + Recorded</div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Projects</div>
                      <div className="font-semibold">15+ Real-world</div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Mentorship</div>
                      <div className="font-semibold">1:1 Support</div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Placement</div>
                      <div className="font-semibold">1 Year Support</div>
                    </div>
                    <div>
                      <div className="text-sm text-teal-200">Certificate</div>
                      <div className="font-semibold">Industry Recognized</div>
                    </div>
                  </div>
                </div>

                {/* Course Rating */}
                <div className="bg-teal-500 px-6 py-4">
                  <div className="text-white">
                    <div className="text-sm text-teal-200 mb-2">Course Rating</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">4.8/5 (1,250 reviews)</span>
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
