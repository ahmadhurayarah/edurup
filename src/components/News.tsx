"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

const News = () => {
  const images = [
    {
      path: "/Carousel/business-standard.png",
      width: 130,
      height: 400,
      className: "",
    },
    {
      path: "/Carousel/zee5news-dark.png",
      width: 150,
      height: 400,
      className: "",
    },

    { path: "/Carousel/ani-news.png", width: 100, height: 300, className: "" },
    {
      path: "/Carousel/business-standard.png",
      width: 130,
      height: 400,
      className: "",
    },
    {
      path: "/Carousel/zee5news-dark.png",
      width: 150,
      height: 400,
      className: "",
    },

    { path: "/Carousel/ani-news.png", width: 100, height: 300, className: "" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="pt-[2rem] sm:pt-[2rem] flex flex-col items-center justify-center dark:bg-dark max-w-screen">
        <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary">
          We have been in the <span className="text-fg dark:text-fg">news</span>
        </h3>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-[20rem] md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex md:aspect-square items-center justify-center p-6">
                      <Image
                        className={image.className}
                        src={image.path}
                        width={image.width}
                        height={image.height}
                        alt={`Image ${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="shadow-xl hidden md:block" />
          <CarouselNext className="shadow-xl hidden md:block" />
        </Carousel>
      </div>
      <Separator />
    </>
  );
};

export default News;
