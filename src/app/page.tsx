"use client"

import CarouselDemo from "./home/components/Carosaldemo";
import VehicleCounterCard from "./home/components/VehicleCounterCard";
import AlertsIssuedCard from "./home/components/AlertsIssuedCard";
import RegionsCard from "./home/components/RegionsCard";
import NavLink from "./home/components/Navlink";
import BlueSection from "./home/components/BlueSection";
import BarChart from "./home/components/BarChart";
import PieChart from "./home/components/PieChart";
export default function Home() {
  return (
    <main>

      <BlueSection/>
      <NavLink/>
      <CarouselDemo />
      <div className="flex flex-wrap justify-center gap-6">
      <VehicleCounterCard />
      <AlertsIssuedCard />
      <RegionsCard />
    </div>
    <div className="grid grid-cols-2 gap-6 py-8 md:py-10">
  <div className="pb-4 md:pb-0"><BarChart /></div>
  <div><PieChart /></div>
</div>



    </main>
  );
}
