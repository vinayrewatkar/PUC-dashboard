import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function CarouselDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['banner-fancy-number-4.png', 'banner-mparivahan-1.png', 'banner-vltd-1.png']; // Replace with your image paths

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <div className="flex items-center justify-center w-full mt-4 mb-4 h-100">
      <Carousel className="w-full h-auto flex items-center justify-center bg-gray-200">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} active={index === activeIndex}>
              <img src={image} alt="" className="w-full h-auto" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10 bg-white bg-opacity-50">
          {/* Replace with left arrow icon */}
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 z-10 bg-white bg-opacity-50">
          {/* Replace with right arrow icon */}
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default CarouselDemo;
