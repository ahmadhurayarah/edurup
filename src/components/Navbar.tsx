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
import {
  Menu,
  Megaphone,
  BarChart3,
  BrainCircuit,
  Code2,
  ArrowRight,
} from "lucide-react";

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
    {
      label: "PG Digital Marketing",
      href: "/digital-marketing-course-bangalore",
      desc: "SEO, SEM, SMM, Google Ads, Analytics",
      icon: Megaphone,
      badge: "Popular",
    },
    {
      label: "PG Data Analytics",
      href: "/data-analytics-course-bangalore",
      desc: "SQL, Excel, Power BI, Tableau",
      icon: BarChart3,
    },
    {
      label: "PG Data Science & AI",
      href: "/data-science-and-ai-course-bangalore",
      desc: "Python, ML, DL, TensorFlow",
      icon: BrainCircuit,
    },
    {
      label: "PG Full Stack Developer",
      href: "/full-stack-developer-course-bangalore",
      desc: "MERN: MongoDB, Express, React, Node.js",
      icon: Code2,
    },
    {
      label: "PG Python",
      href: "/python-course-bangalore",
      desc: "Core to Advanced Python",
      icon: Code2,
      badge: "Upcoming",
      disabled: true,
    },
  ];
  return (
    <>
      <div
        className={cn(
          "z-50 sticky top-0 flex items-center justify-center sm:justify-around w-full sm:max-w-screen bg-white dark:bg-dark ",
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
                  <div className="p-3 sm:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-[20rem] sm:w-[36rem] md:w-[48rem]">
                      {courses.map((course) => (
                        <NavigationMenuLink asChild key={course.href}>
                          {course.disabled ? (
                            <div
                              role="link"
                              aria-disabled="true"
                              className={cn(
                                "group relative border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 bg-white dark:bg-dark transition-colors pointer-events-none cursor-not-allowed opacity-60",
                                {
                                  "ring-1 ring-fg": course.href === currentPath,
                                }
                              )}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-gray-700 dark:to-gray-800 text-emerald-600 dark:text-emerald-300">
                                  {course.icon && <course.icon size={18} />}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <div className="text-[0.95rem] font-semibold text-primary">
                                      {course.label}
                                    </div>
                                    {course.badge && (
                                      <span className="inline-flex items-center rounded-md bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-300">
                                        {course.badge}
                                      </span>
                                    )}
                                  </div>
                                  {course.desc && (
                                    <div className="mt-1 text-xs sm:text-[0.82rem] text-muted-foreground line-clamp-2">
                                      {course.desc}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={course.href}
                              className={cn(
                                "group relative border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 bg-white dark:bg-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fg",
                                {
                                  "ring-1 ring-fg": course.href === currentPath,
                                }
                              )}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-gray-700 dark:to-gray-800 text-emerald-600 dark:text-emerald-300">
                                  {course.icon && <course.icon size={18} />}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <div className="text-[0.95rem] font-semibold text-primary group-hover:text-fg">
                                      {course.label}
                                    </div>
                                    {course.badge && (
                                      <span className="inline-flex items-center rounded-md bg-emerald-100 dark:bg-emerald-900/40 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                                        {course.badge}
                                      </span>
                                    )}
                                  </div>
                                  {course.desc && (
                                    <div className="mt-1 text-xs sm:text-[0.82rem] text-muted-foreground line-clamp-2">
                                      {course.desc}
                                    </div>
                                  )}
                                </div>
                                <ArrowRight className="ml-auto mt-1 size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </Link>
                          )}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
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
