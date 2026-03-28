"use client";

import { TopperStories } from "@/components/sections/TopperStories";
import { Award } from "lucide-react";

export default function ToppersPage() {
  return (
    <div className="pt-0 flex flex-col min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16 mt-0">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex justify-center items-center p-4 bg-orange-100 rounded-3xl mb-8 text-orange-600 shadow-sm border border-orange-200">
               <Award size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Wall of <span className="text-orange-600">Fame</span></h1>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed">Discover the rigorous journeys of our shining stars who cracked the toughest exam in the world.</p>
        </div>
      </div>
      
      <div className="bg-slate-50 relative pb-24">
         <TopperStories />
      </div>
    </div>
  )
}
