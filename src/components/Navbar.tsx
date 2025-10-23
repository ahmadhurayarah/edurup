"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useParams } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const scrolled = useScrollTop();

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "EVENTS", href: "/events" },
    { label: "BLOG", href: "/blogs" },
    { label: "CONTACT US", href: "/contact-us" },
  ];

  const courses = [
    // {
    //   label: "Full Stack Web Development",
    //   href: "/full-stack-web-development",
    // },
    // { label: "Data Science", href: "/data-science" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    // { label: "Mern Development", href: "/mern-stack-developer-course" },
    { label: "Full Stack Website", href: "/full-stack-website" },
    { label: "Data Analytics", href: "data-analytics" },
    // { label: "Finance Analyst", href: "/finance-analyst" },
    // { label: "Python", href: "/python" },
  ];
  return (
    <>
      <div
        className={cn(
          "z-50 fixed top-0 flex items-center justify-center sm:justify-around w-full sm:max-w-screen bg-white dark:bg-dark ",
          scrolled && "dark:border-gray-600 border-gray-600 shadow-lg"
        )}
      >
        <div className="flex items-center justify-center ">
          <div className="block h-[5.6rem] w-2 sm:hidden"></div>
          <Link href="/" className="mr-0 sm:mr-6">
            <div className="w-[8.5rem] sm:hidden">
              <Image
                src="/logo_dark.png"
                height="210"
                width="210"
                alt="logo"
                className="object-contain hidden dark:block"
              />
              <Image
                src="/logo_light.png"
                height="210"
                width="210"
                alt="logo"
                className="object-contain dark:hidden"
              />
            </div>
            <div className="hidden sm:block">
              <Image
                src="/logo_dark.png"
                height="150"
                width="150"
                alt="logo"
                className="object-contain hidden dark:block"
              />
              <Image
                src="/logo_light.png"
                height="150"
                width="150"
                alt="logo"
                className="object-contain dark:hidden"
              />
            </div>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 sm:h-10 font-semibold text-sm sm:text-[0.94rem] mr-4 sm:mr-0">
                  COURSES
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <NavigationMenuLink>
                    {courses.map((course) => (
                      <Link
                        className={cn(
                          "flex text-left ml-2 w-[13.1rem] hover:text-fg py-2 transition-colors",
                          {
                            "text-fg": course.href === currentPath,
                            "text-primary": course.href !== currentPath,
                            "hover:text-fg transition-colors": true,
                          }
                        )}
                        key={course.href}
                        href={course.href}
                      >
                        {course.label}
                      </Link>
                    ))}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block ">
          <ul className="space-x-6 lg:space-x-6 lg:text-[1rem] md:space-x-5">
            {links.map((link) => (
              <Link
                key={link.href}
                className={cn({
                  "text-fg": link.href === currentPath,
                  "text-primary": link.href !== currentPath,
                  "hover:text-fg transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex mr-5 items-center justify-center md:hidden ">
          <Dialog>
            <DialogTrigger>
              <div className="flex flex-col items-center justify-center w-[3rem] h-9 border border-fg  dark:bg-dark rounded-md">
                <Menu size={22} color="#6ed290" />
              </div>
            </DialogTrigger>
            <DialogContent>
              {links.map((link) => (
                <DialogClose asChild key={link.href}>
                  <Link
                    className={cn({
                      "text-fg": link.href === currentPath,
                      "text-primary": link.href !== currentPath,
                      "hover:text-fg transition-colors": true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </DialogClose>
              ))}
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex item-center justify-center ">
          <div className="flex gap-x-0 sm:gap-x-6 justify-center items-center">
            <Link href="https://wa.me/+919100827810" target="_blank">
              <Button
                variant="fg"
                size="lg"
                className="border text-[1.0rem] hover:border-fg hover:text-fg text-black hover:bg-dark transition-colors hidden xl:block"
              >
                Talk To A Counsellor ✆
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
