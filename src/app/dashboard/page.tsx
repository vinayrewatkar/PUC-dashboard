"use client"

import CarouselDemo from "../home/components/Carosaldemo";
import VehicleCounterCard from "../home/components/VehicleCounterCard";
import AlertsIssuedCard from "../home/components/AlertsIssuedCard";
import RegionsCard from "../home/components/RegionsCard";

import BarChart from "../home/components/BarChart";
import PieChart from "../home/components/PieChart";
export default function Home() {
  return (
    <main>
      {/* only for large screen */}
      <div className =" hidden md:block lg:block">
        <div className="my-16">
        <CarouselDemo />
        </div>
     
      <div className="grid grid-cols-2 gap-6">
      <div className="grid grid-row-2 gap-6 py-8 md:py-10">
      <div className="pb-4 md:pb-0"><BarChart /></div>
      <div><PieChart /></div>
      </div>
      
      <div className="grid grid-row-3 gap-6 py-8 md:py-10">
      <VehicleCounterCard />
      <AlertsIssuedCard />
      <RegionsCard />
    </div>
    </div>
</div>


{/* only for small screens */}
 <div className ="md:hidden  ">
 <div className="my-8">
        <CarouselDemo />
        </div>
     <div className="grid grid-row-2 gap-6">     
      <div className="grid grid-cols-2 gap-2 py-7">
      <div className="ml-4"><VehicleCounterCard /></div>
      <div className="mr-4"><AlertsIssuedCard /></div>
      <div className="ml-4"><RegionsCard /></div>
    </div>
    <div className="grid  gap-6 py-8 md:py-10">
        <div className="pb-4 md:pb-0 mx-5"><BarChart /></div>
        <div><PieChart /></div>
      </div>
    </div>
 </div>
    </main>
  );
}
