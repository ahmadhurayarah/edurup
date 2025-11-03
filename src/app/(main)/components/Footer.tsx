import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const courses = [
  {
    label: "Full Stack Developer",
    href: "/full-stack-developer-course-bangalore",
  },
  { label: "Data Science & AI", href: "/data-science-and-ai-course-bangalore" },
  { label: "Digital Marketing", href: "/digital-marketing-course-bangalore" },
  { label: "Data Analyst", href: "/data-analytics-course-bangalore" },
  // { label: "Finance Analyst", href: "/finance-analyst" },
  { label: "Python", href: "/python-course-bangalore" },

  

 


];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Hire Us", href: "/hire" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/edurup", icon: faFacebook },
  { label: "Instagram", href: "https://instagram.com/edurup", icon: faInstagram },
  { label: "Twitter", href: "https://twitter.com/edurup", icon: faTwitter },
  { label: "Linkedin", href: "https://linkedin.com/company/edurup", icon: faLinkedin },
  { label: "Youtube", href: "https://youtube.com/@edurup", icon: faYoutube },
];

const Footer = () => {
  return (
    <>
      <div className="p-6 sm:p-12 dark:bg-dark bg-primary grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Company Info Section */}
        <div className="space-y-6">
          <h4 className="font-bold text-2xl mb-6">Edurup</h4>
          <div className="space-y-3">
            <p className="text-lg leading-relaxed">
              Briadge Archade,
              <br />
              Mahadevpura Bangalore - 560048
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
            <h5 className="text-xl font-semibold whitespace-nowrap">Queries ?</h5>
            <Button
              type="submit"
              variant="fg"
              className="border h-11 px-8 rounded-md text-base border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors whitespace-nowrap"
            >
              Contact us
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-bold text-xl mb-4">Program</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.href}>
                  <Link
                    href={course.href}
                    className="text-lg hover:text-fg transition-colors duration-200 block py-1"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-xl mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-lg hover:text-fg transition-colors duration-200 block py-1"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-xl mb-4">Follow us</h4>
            <ul className="space-y-3">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-lg hover:text-fg transition-colors duration-200 flex items-center py-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={s.icon} className="h-5 w-5 mr-3" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Copyright Section */}
      <div className="p-6 sm:p-12 dark:bg-dark bg-primary py-6">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-lg">
                &copy; Copyright 2025 Edurup. All Rights Reserved
              </p>
            </div>
            <div className="text-center sm:text-right">
              {/* Uncomment if needed
              <p className="text-lg">
                Developed with ❤️ by{" "}
                <strong>
                  <Link
                    href="https://www.linkedin.com/in/ahmadhurayarah/"
                    className="hover:text-fg transition-colors"
                  >
                    Ahmad Hurayarah
                  </Link>
                </strong>
              </p>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;