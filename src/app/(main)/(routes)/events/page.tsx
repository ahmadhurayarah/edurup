"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, PlayCircle, BookOpen, MessageCircle } from "lucide-react";
import WhatsAppCTA from "../../components/WhatsAppCTA";
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Full Stack Development Workshop",
      description: "Hands-on workshop covering React, Node.js, and MongoDB. Build a complete project from scratch.",
      date: "2024-12-15",
      time: "10:00 AM - 4:00 PM",
      type: "workshop",
      mode: "online",
      price: "Free",
      attendees: 45,
      maxAttendees: 50,
      speaker: "Priya Sharma",
      speakerRole: "Full Stack Development Lead",
      image: "/events/workshop-fsd.jpg"
    },
    {
      id: 2,
      title: "Data Science Career Webinar",
      description: "Learn how to break into Data Science industry. Live Q&A with industry experts.",
      date: "2024-12-18",
      time: "6:00 PM - 7:30 PM",
      type: "webinar",
      mode: "online",
      price: "Free",
      attendees: 120,
      maxAttendees: 500,
      speaker: "Dr. Sarah Johnson",
      speakerRole: "Chief Learning Officer",
      image: "/events/webinar-ds.jpg"
    },
    {
      id: 3,
      title: "Campus Placement Drive",
      description: "Exclusive placement drive for Edurup graduates. 20+ companies participating.",
      date: "2024-12-20",
      time: "9:00 AM - 5:00 PM",
      type: "placement",
      mode: "offline",
      price: "Free",
      attendees: 85,
      maxAttendees: 100,
      speaker: "Career Services Team",
      speakerRole: "Placement Cell",
      image: "/events/placement-drive.jpg"
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      description: "Advanced digital marketing strategies with live case studies and practical exercises.",
      date: "2024-12-22",
      time: "11:00 AM - 2:00 PM",
      type: "masterclass",
      mode: "online",
      price: "₹999",
      attendees: 35,
      maxAttendees: 40,
      speaker: "Michael Chen",
      speakerRole: "Head of Digital Marketing",
      image: "/events/masterclass-dm.jpg"
    },
    {
      id: 5,
      title: "AI & Machine Learning Demo",
      description: "Live demonstration of AI projects and machine learning models built by our students.",
      date: "2024-12-25",
      time: "3:00 PM - 5:00 PM",
      type: "demo",
      mode: "offline",
      price: "Free",
      attendees: 60,
      maxAttendees: 80,
      speaker: "AI Research Team",
      speakerRole: "AI & ML Department",
      image: "/events/ai-demo.jpg"
    },
    {
      id: 6,
      title: "Career Counseling Session",
      description: "One-on-one career guidance and roadmap planning with industry experts.",
      date: "2024-12-28",
      time: "10:00 AM - 6:00 PM",
      type: "counseling",
      mode: "both",
      price: "Free",
      attendees: 25,
      maxAttendees: 30,
      speaker: "Career Guidance Team",
      speakerRole: "Student Success",
      image: "/events/counseling.jpg"
    }
  ];

  const eventTypes = [
    { id: "all", label: "All Events" },
    { id: "workshop", label: "Workshops" },
    { id: "webinar", label: "Webinars" },
    { id: "placement", label: "Placement Drives" },
    { id: "masterclass", label: "Masterclasses" }
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: "bg-blue-500 text-white",
      webinar: "bg-green-500 text-white",
      placement: "bg-purple-500 text-white",
      masterclass: "bg-orange-500 text-white",
      demo: "bg-red-500 text-white",
      counseling: "bg-indigo-500 text-white"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500 text-white";
  };

  const getModeColor = (mode: string) => {
    return mode === "online" ? "border-green-500 text-green-700 bg-green-50" : 
           mode === "offline" ? "border-blue-500 text-blue-700 bg-blue-50" : 
           "border-purple-500 text-purple-700 bg-purple-50";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#6ed290] text-black py-16 px-4 sm:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Upcoming Events & Workshops
          </h1>
          <p className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto mb-8">
            Join our interactive sessions, workshops, and placement drives to accelerate 
            your career in technology. Learn from industry experts and connect with peers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 py-3 px-8">
              View All Events
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 py-3 px-8">
              Host an Event
            </Button>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-8 px-4 sm:px-16 bg-white dark:bg-dark border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventTypes.map((type) => (
              <Button
                key={type.id}
                variant={activeFilter === type.id ? "default" : "outline"}
                className={`${
                  activeFilter === type.id 
                    ? "bg-fg text-black" 
                    : "border-fg/30 text-primary dark:text-white"
                }`}
                onClick={() => setActiveFilter(type.id)}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card 
                key={event.id} 
                className="border-2 border-fg/20 hover:border-fg/40 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-fg/20 to-fg/10 rounded-lg mb-4 flex items-center justify-center">
                      <PlayCircle className="h-12 w-12 text-fg/60" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getModeColor(event.mode)}`}>
                        {event.mode === "both" ? "Online & Offline" : event.mode}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary dark:text-white line-clamp-2">
                      {event.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-primary/80 dark:text-white/80 line-clamp-2">
                    {event.description}
                  </CardDescription>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-primary/70 dark:text-white/70">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary/70 dark:text-white/70">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary/70 dark:text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {event.mode === "online" ? "Virtual Event" : 
                         event.mode === "offline" ? "Bridge Arcade, Bangalore" : 
                         "Hybrid Event"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary/70 dark:text-white/70">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}/{event.maxAttendees} registered</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-fg/20">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-semibold text-primary dark:text-white">{event.speaker}</p>
                        <p className="text-sm text-primary/60 dark:text-white/60">{event.speakerRole}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-fg">{event.price}</p>
                        <p className="text-xs text-primary/60 dark:text-white/60">
                          {event.price === "Free" ? "No cost" : "Per person"}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-fg hover:bg-fg/90 text-black font-semibold">
                        Register Now
                      </Button>
                      <Button variant="outline" size="icon" className="border-fg/30">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>

                    {event.attendees > event.maxAttendees * 0.8 && (
                      <div className="mt-3 p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-center">
                        <p className="text-xs text-orange-700 dark:text-orange-300">
                          🚀 Almost full! Limited seats remaining
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-fg" />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-primary/80 dark:text-white/80">
                There are no {activeFilter !== "all" ? activeFilter : ""} events scheduled at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Attend Our Events */}
      <section className="py-16 px-4 sm:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
              Why Attend Edurup Events?
            </h2>
            <p className="text-lg text-primary/80 dark:text-white/80">
              Get more than just knowledge from our events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  Network with Experts
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  Connect with industry professionals and like-minded peers to expand your professional network.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  Hands-on Learning
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  Practical sessions and live projects that give you real-world experience and portfolio pieces.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-fg/20 hover:border-fg/40 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-fg/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-fg" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  Career Opportunities
                </h3>
                <p className="text-primary/80 dark:text-white/80">
                  Direct access to job opportunities, placement drives, and recruitment events with top companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Featured Event */}
      <section className="py-16 px-4 sm:px-16 bg-[#6ed290] text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                Featured Event
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Annual Tech Career Fair 2024
              </h2>
              <p className="text-lg text-black/80 mb-6">
                Join India's largest virtual tech career fair with 50+ top companies 
                hiring for 1000+ positions. Meet recruiters, attend interviews, and 
                land your dream job.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">December 30, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Virtual Event - Live on Zoom</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">1000+ Expected Participants</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 py-3 px-8">
                  Register Now - Free
                </Button>
                <Button variant="outline" className="bg-white/20 border-black text-black hover:bg-white/30 py-3 px-8">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Participating Companies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Uber'].map((company) => (
                  <div key={company} className="bg-white/30 rounded-lg p-4">
                    <div className="font-semibold text-black/80">{company}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-black/70">...and 45+ more companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-16 bg-white dark:bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
            Want to Host an Event with Us?
          </h2>
          <p className="text-lg text-primary/80 dark:text-white/80 mb-8">
            Partner with Edurup to reach thousands of aspiring tech professionals and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fg hover:bg-fg/90 text-black font-semibold py-3 px-8">
              Become an Event Partner
            </Button>
            <Button variant="outline" className="border-fg text-fg hover:bg-fg/10 py-3 px-8">
              Contact Events Team
            </Button>
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
};

export default EventsPage;