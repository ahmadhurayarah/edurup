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
    label: "Frontend Web",
    href: "/front-end-web",
  },
  { label: "Data Science", href: "/data-science" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Business Development", href: "/business-development" },
  { label: "Finance Analyst", href: "/finance-analyst" },
  { label: "Python", href: "/python" },
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
      <div className="p-4 sm:p-12 dark:bg-dark bg-primary  grid justify-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 space-y-3 sm:space-y-0">
        <div className="pl-0 sm:pl-[3rem] ">
          <h4 className="font-bold text-lg mb-4">Edurup</h4>
          <p>
            Briadge Archade,
            <br />
            Mahadevpura Bangalore - 560048
          </p>
          <div className="flex flex-row items-center mt-5">
            <h5 className="mr-4 text-xl font-semibold">Queries ?</h5>
            <Button
              type="submit"
              variant="fg"
              className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors "
            >
              Contact us
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row justify-evenly space-y-5 sm:space-y-0">
          <div className="space-y-0 sm:space-y-3">
            <h4 className="font-bold text-xl mb-2 sm:mb-4">Program</h4>
            <ul className="">
              {courses.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  className=" hover:text-fg transition-colors"
                >
                  <li>{course.label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-y-0 sm:space-y-3">
            <h4 className="font-bold text-xl mb-2 sm:mb-4">Company</h4>
            <ul>
              {company.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className=" hover:text-fg transition-colors"
                >
                  <li>{c.label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-y-0 sm:space-y-3">
            <h4 className="font-bold text-xl mb-2 sm:mb-4">Follow us</h4>
            <div className="">
              <ul>
                {socialLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="hover:text-fg transition-colors"
                  >
                    <li>
                      <FontAwesomeIcon icon={s.icon} className="h-4 mr-3" />
                      {s.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />
      <div className="p-4 sm:p-12 dark:bg-dark bg-primary py-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 ">
          <div className=" col-span-1 text-center sm:text-left">
            <p className="sm:text-lg ">
              &copy; Copyright 2025 Edurup. All Rights Reserved{" "}
            </p>
          </div>
          <div className="block sm:hidden h-3"></div>
          <div className="col-span-1 text-center sm:text-right">
            {/* <p className="sm:text-lg">
              Developed with ❤️ by{" "}
              <strong>
                <Link
                  href="https://www.linkedin.com/in/ahmadhurayarah/"
                  className="hover:text-fg transition-colors"
                >
                  Ahmad Hurayarah
                </Link>
              </strong>{" "}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
