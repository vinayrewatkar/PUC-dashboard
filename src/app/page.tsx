"use client";


import { Carousel } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import CarouselDemo from "./home/components/Carosaldemo";

import Navbar from "./components/ui/navigation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CarouselDemo />


    </main>
  );
}
