import { Hero } from "@/components/sections/Hero";
import { InteractiveJourney } from "@/components/sections/InteractiveJourney";
import { RoadmapBuilder } from "@/components/sections/RoadmapBuilder";
import { TopperStories } from "@/components/sections/TopperStories";
import { Courses } from "@/components/sections/Courses";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      <div className="bg-[#0B0F1A] relative z-20 shadow-[0_-20px_50px_rgba(11,15,26,1)] rounded-t-[50px]">
        <InteractiveJourney />
        <RoadmapBuilder />
        <TopperStories />
        <Courses />
      </div>
    </div>
  );
}
