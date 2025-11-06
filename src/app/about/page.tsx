import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target, BookOpen, Briefcase, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import WhatsAppCTA from "../../components/WhatsAppCTA";


const AboutUsPage = () => {
  const stats = [
    { number: "500+", label: "Companies", description: "Hired our graduates" },
    { number: "2000+", label: "Students", description: "Successfully placed" },
    { number: "95%", label: "Placement Rate", description: "Job guarantee success" },
    { number: "4.8/5", label: "Rating", description: "Student satisfaction" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-fg" />,
      title: "Industry-Ready Training",
      description: "Our curriculum is designed by industry experts to ensure you learn exactly what companies need."
    },
    {
      icon: <Users className="h-8 w-8 text-fg" />,
      title: "Expert Mentorship",
      description: "Learn from professionals who work at top tech companies like Google, Amazon, and Microsoft."
    },
    {
      icon: <Award className="h-8 w-8 text-fg" />,
      title: "Job Guarantee",
      description: "We're so confident in our training that we guarantee job placement or your money back."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-fg" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world case studies to build your portfolio."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Learning Officer",
      expertise: "Data Science & AI",
      experience: "15+ years at Google, Microsoft"
    },
    {
      name: "Michael Chen",
      role: "Head of Digital Marketing",
      expertise: "Digital Marketing Strategy",
      experience: "12+ years at Facebook, Amazon"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Development Lead",
      expertise: "MERN Stack, Cloud Computing",
      experience: "10+ years at Netflix, Uber"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#6ed290] text-black py-16 px-4 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-6">
                Empowering Careers in 
                <span className="block text-black/80">Technology</span>
              </h1>
              <p className="text-lg sm:text-xl text-black/80 mb-8">
                At Edurup, we believe that everyone deserves access to quality tech education 
                that leads to meaningful careers. Our mission is to bridge the gap between 
                education and industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 py-3 px-6">
                  Explore Our Courses
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 py-3 px-6">
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-black">{stat.number}</div>
                      <div className="text-sm text-black/80">{stat.label}</div>
                      <div className="text-xs text-black/60">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-primary/80 dark:text-white/80">
                <p>
                  Founded in 2020, Edurup was born out of a simple observation: there was a 
                  massive gap between what traditional education taught and what the tech industry 
                  actually needed.
                </p>
                <p>
                  Our founders, having worked at top tech companies, saw firsthand how talented 
                  individuals were being overlooked simply because they lacked the right skills or 
                  didn't know how to break into the industry.
                </p>
                <p>
                  Today, we've helped over 2000 students transition into successful tech careers, 
                  with 95% of our graduates finding jobs within 6 months of completing our programs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-fg/10 to-fg/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-primary/80 dark:text-white/80 mb-6">
                  To democratize access to quality tech education and create pathways for 
                  career transformation in the digital economy.
                </p>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  A world where anyone, regardless of their background, can build a 
                  successful career in technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-primary/80 dark:text-white/80">
              Our core values drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 sm:px-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-primary/80 dark:text-white/80">
              Industry veterans who are passionate about your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="bg-fg/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-fg" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-fg font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-primary/80 dark:text-white/80 mb-2">
                    {member.expertise}
                  </p>
                  <p className="text-xs text-primary/60 dark:text-white/60">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Edurup Section */}
      <section className="py-16 px-4 sm:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
              Why Students Choose Edurup
            </h2>
            <p className="text-lg text-primary/80 dark:text-white/80">
              Here's what makes us different
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    100% Job Guarantee
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    We're so confident in our training that we guarantee job placement 
                    or your money back. No questions asked.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    Industry-Designed Curriculum
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    Our courses are designed by industry experts to match real-world 
                    job requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    Live Project Experience
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    Work on real projects from day one to build your portfolio 
                    and gain practical experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    Expert Mentorship
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    Get 1:1 mentorship from industry professionals who work at 
                    top tech companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    Lifetime Support
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    Our support doesn't end when you get a job. We provide lifetime 
                    career guidance and upskilling opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-fg/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-fg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    Flexible Learning
                  </h3>
                  <p className="text-primary/80 dark:text-white/80">
                    Learn at your own pace with flexible schedules that fit your 
                    lifestyle and commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-16 bg-[#6ed290] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Join thousands of students who have successfully transitioned into tech careers with Edurup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 py-3 px-8">
              Explore Our Courses
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 py-3 px-8">
              Talk to a Counselor
            </Button>
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
};

export default AboutUsPage;