"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import WhatsAppCTA from "../../components/WhatsAppCTA";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios.post("/api/liveDemo", {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
      }),
      {
        loading: "Sending message...",
        success: () => {
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
          return "Message sent successfully!";
        },
        error: "Failed to send message!",
      }
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#6ed290] text-black py-12 px-4 sm:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto">
            Ready to start your journey? Have questions about our courses? 
            We're here to help you succeed in your career.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-primary/80 dark:text-white/80 mb-8">
                  Reach out to us through any of these channels. We're always happy to help!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-2 border-fg/20 hover:border-fg/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fg/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-fg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary dark:text-white">Phone</h3>
                        <p className="text-primary/80 dark:text-white/80">+91-9100827810</p>
                        <p className="text-sm text-primary/60 dark:text-white/60">Mon-Fri 9AM-6PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-fg/20 hover:border-fg/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fg/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-fg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary dark:text-white">Email</h3>
                        <p className="text-primary/80 dark:text-white/80">info@edurup.in</p>
                        <p className="text-sm text-primary/60 dark:text-white/60">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-fg/20 hover:border-fg/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fg/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-fg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary dark:text-white">Address</h3>
                        <p className="text-primary/80 dark:text-white/80">
                          Bridge Arcade,<br />
                          Bangalore, Karnataka<br />
                          India - 560001
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-fg/20 hover:border-fg/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fg/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-fg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary dark:text-white">Business Hours</h3>
                        <p className="text-primary/80 dark:text-white/80">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/+919100827810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-fg/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary dark:text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-primary/80 dark:text-white/80">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-primary dark:text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 border-fg/30 focus:border-fg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-primary dark:text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 border-fg/30 focus:border-fg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phoneNumber" className="text-primary dark:text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="mt-1 border-fg/30 focus:border-fg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-primary dark:text-white">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Course inquiry, support, etc."
                          className="mt-1 border-fg/30 focus:border-fg"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary dark:text-white">
                        Message *
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1 w-full px-3 py-2 border border-fg/30 rounded-md focus:outline-none focus:ring-2 focus:ring-fg/20 focus:border-fg resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-fg hover:bg-fg/90 text-black font-semibold py-3"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
              Why Students Choose Edurup?
            </h2>
            <p className="text-lg text-primary/80 dark:text-white/80">
              We're committed to your success in the tech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  100% Placement Support
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  We provide complete placement assistance until you land your dream job.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  Industry Experts
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  Learn from professionals who work in top tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  Job Guarantee
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  Our courses come with job guarantee - if you don't get placed, we refund your money.
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
      </section>
      <WhatsAppCTA />
    </>
  );
};

export default ContactUsPage;