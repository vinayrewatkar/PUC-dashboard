import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function CarouselDemo() {
  const [carouselApi, setCarouselApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['banner-fancy-number-4.png', 'banner-mparivahan-1.png', 'banner-vltd-1.png']; // Replace with your image paths

  useEffect(() => {
    let interval;
  
    const startCarousel = () => {
      interval = setInterval(() => {
        carouselApi && carouselApi.scrollNext();
      }, 3000); // Change slide every 3 seconds
    };
  
    const stopCarousel = () => {
      clearInterval(interval);
    };
  
    startCarousel();
  
    return () => stopCarousel();
  }, [carouselApi]);
  
  useEffect(() => {
    if (carouselApi) {
      carouselApi.on("select", () => {
        setActiveIndex(carouselApi.selectedScrollSnap());
      });
    }
  }, [carouselApi]);
  
  useEffect(() => {
    if (activeIndex === images.length - 1) {
      setTimeout(() => {
        setActiveIndex(0);
        carouselApi && carouselApi.scrollTo(0);
      }, 3000); // Jump back to the first card after 3 seconds
    }
  }, [activeIndex, carouselApi, images.length]);
  

  return (
    <div className="flex items-center justify-center w-full mt-4 mb-4 h-100">
      <Carousel
        setApi={setCarouselApi}
        className="w-full h-auto flex items-center justify-center bg-gray-200"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
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