"use client"


import { Carousel } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import CarouselDemo from "./home/components/Carosaldemo";

import Navbar from "./components/ui/navigation";
import NavLink from "./home/components/Navlink";
import BlueSection from "./home/components/BlueSection";

export default function Home() {
  return (
    <main>
      <BlueSection/>
      <NavLink/>
      <CarouselDemo />



    </main>
  );
}
