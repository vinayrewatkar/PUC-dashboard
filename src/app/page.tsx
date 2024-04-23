"use client"

import CarouselDemo from "./home/components/Carosaldemo";

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
