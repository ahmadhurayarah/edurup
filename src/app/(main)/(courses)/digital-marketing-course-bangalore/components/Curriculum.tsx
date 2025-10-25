"use client";
import { Clock, Eye, FileText, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const curriculum = [
  {
    title: "Introduction to Digital Marketing",
    duration: "2 weeks",
    lessons: "8 lessons",
    projects: "1 project",
    description: [
      "What is Digital Marketing? Scope & Career Opportunities",
      "Traditional vs Digital Marketing",
      "Understanding Marketing Funnel (TOFU, MOFU, BOFU)",
      "Overview of Marketing Channels: SEO, SEM, SMM, Email, Content, Performance",
      "Tools Overview: Google Workspace, ChatGPT, Canva",
      "Mini Project: Create a Digital Strategy for a Local Brand",
    ],
  },
  {
    title: "Website Planning & WordPress Development",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "1 project",
    description: [
      "Domain, Hosting, SSL Setup",
      "WordPress Installation, Themes, Plugins",
      "Page Builders (Elementor, Astra)",
      "Landing Pages & Lead Form Integration",
      "SEO Basics for Websites",
      "Project: Create a Business Landing Page",
    ],
  },
  {
    title: "SEO (Search Engine Optimization)",
    duration: "3 weeks",
    lessons: "12 lessons",
    projects: "1 project",
    description: [
      "Keyword Research (Ubersuggest, Google Keyword Planner)",
      "On-Page SEO: Title, Meta Tags, Schema, Internal Linking",
      "Off-Page SEO: Link Building, Backlinks, Citations",
      "Google Search Console & Page Speed Optimization",
      "Project: Optimize a Website for Google Rankings",
    ],
  },
  {
    title: "Content Marketing & Blogging",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "1 project",
    description: [
      "Copywriting Techniques for Digital Ads & Blogs",
      "Content Strategy: Blog Calendar, SEO Blogs",
      "Tools: Grammarly, Canva, SurferSEO, ChatGPT for content generation",
      "YouTube Content Planning & Repurposing",
      "Project: Create a Content Strategy & SEO Blog",
    ],
  },
  {
    title: "Social Media Marketing (Organic)",
    duration: "3 weeks",
    lessons: "14 lessons",
    projects: "1 project",
    description: [
      "Social Media Strategy & Content Planning",
      "Platforms Overview: Instagram, Facebook, LinkedIn, YouTube, X (Twitter)",
      "Brand Positioning, Tone, and Audience Targeting",
      "Hashtag Research & Content Calendar Creation",
      "Canva Design Mastery (Reels, Stories, Carousels)",
      "Scheduling Tools: Meta Planner, Buffer, Later",
      "Project: Create 15-Day Social Media Calendar for a Brand",
    ],
  },
  {
    title: "Social Media Advertising (Meta Ads)",
    duration: "3 weeks",
    lessons: "12 lessons",
    projects: "1 project",
    description: [
      "Meta Business Suite Setup (Facebook & Instagram)",
      "Campaign Objectives: Awareness, Leads, Conversions",
      "Audience Targeting: Demographics, Interests, Custom, Lookalike",
      "Creative Strategy: Copy, Visuals, CTA",
      "Pixel Setup & Conversion Tracking",
      "A/B Testing, CPL Optimization",
      "Project: Run a Real Meta Lead Generation Campaign",
    ],
  },
  {
    title: "Google Ads & YouTube Marketing",
    duration: "3 weeks",
    lessons: "12 lessons",
    projects: "1 project",
    description: [
      "Google Ads Overview (Search, Display, Video)",
      "Keyword Targeting, Match Types, Ad Rank",
      "YouTube Channel Optimization & Monetization",
      "Video Ads Setup & Targeting",
      "Remarketing & Performance Tracking",
      "Project: Run a Google Search & YouTube Video Campaign",
    ],
  },
  {
    title: "LinkedIn & Performance Marketing",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "1 project",
    description: [
      "LinkedIn Profile Optimization for B2B",
      "LinkedIn Ads: Sponsored Content, InMail, Carousel Ads",
      "B2B Lead Generation Strategy",
      "Understanding Performance Metrics: ROI, ROAS, CAC, LTV",
      "Retargeting & Funnel Marketing",
      "Project: B2B Campaign using LinkedIn + Google Ads",
    ],
  },
  {
    title: "Email & Marketing Automation",
    duration: "2 weeks",
    lessons: "8 lessons",
    projects: "1 project",
    description: [
      "Email Marketing Tools (Mailchimp, HubSpot)",
      "Drip Campaigns, Segmentation, Personalization",
      "WhatsApp Marketing Tools",
      "Chatbots for Lead Nurturing (ManyChat, BotPress)",
      "Project: Automate Email Campaign for a Local Business",
    ],
  },
  {
    title: "Web Analytics & Google Tag Manager",
    duration: "2 weeks",
    lessons: "8 lessons",
    projects: "1 project",
    description: [
      "Google Analytics 4 (GA4) Setup & Reporting",
      "UTM Tracking, Event & Conversion Setup",
      "Google Tag Manager Integration",
      "Data Studio Dashboards",
      "Project: Create Analytics Dashboard for an Ad Campaign",
    ],
  },
  {
    title: "AI Tools for Marketing",
    duration: "1 week",
    lessons: "6 lessons",
    projects: "1 project",
    description: [
      "AI Copywriting Tools (ChatGPT, Jasper, Writesonic)",
      "AI Design Tools (Canva AI, Leonardo, Pika Labs)",
      "AI SEO Tools (NeuronWriter, SurferSEO)",
      "Video Creation Tools (Pictory, Synthesia)",
      "Project: AI-Powered Marketing Campaign Strategy",
    ],
  },
  {
    title: "Personal Branding, Freelancing & Placement Prep",
    duration: "2 weeks",
    lessons: "10 lessons",
    projects: "1 project",
    description: [
      "Resume & LinkedIn Optimization",
      "Building a Freelance Portfolio (Behance / Notion / Canva)",
      "Upwork, Fiverr, and Client Proposal Writing",
      "50+ Interview Questions in Digital Marketing",
      "Final Project Presentation & Certification",
    ],
  },
  {
    title: "Final Projects (Choose Any 2–3)",
    duration: "—",
    lessons: "—",
    projects: "3 projects",
    description: [
      "SEO Optimized Business Website",
      "Meta & Google Ads Campaign",
      "Social Media Content Strategy + 15-Day Plan",
      "YouTube Ad Campaign",
      "Marketing Automation Funnel",
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
                      <div className="font-semibold">3 months</div>
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
                      <div className="font-semibold">Guaranteed</div>
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
