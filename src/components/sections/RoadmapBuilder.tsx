"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Target, Brain, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export function RoadmapBuilder() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ year: "", level: "", weak: [] as string[] });
  const [loading, setLoading] = useState(false);

  const handleNext = (key: string, val: any) => {
    setData((prev) => ({ ...prev, [key]: val }));
    if (step < 3) {
      setStep((p) => p + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 1500);
    }
  };

  const toggleWeak = (subject: string) => {
    setData((prev) => {
      const isSelected = prev.weak.includes(subject);
      return {
        ...prev,
        weak: isSelected ? prev.weak.filter(s => s !== subject) : [...prev.weak, subject]
      };
    });
  };

  return (
    <section className="relative w-full py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-[#FF9933]">Roadmap</span> Builder
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">Generate your tailored preparation timeline based on your target year, current expertise, and focus areas.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative min-h-[450px]">
          {/* Progress Indicators */}
          {step < 4 && (
            <div className="flex gap-3 mb-12 w-full justify-center">
              {[1, 2, 3].map((num) => (
                <div key={num} className={`h-2 shadow-sm w-16 rounded-full transition-all duration-500 ${step >= num ? "bg-orange-500 shadow-orange-500/20" : "bg-slate-100"}`} />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center">
                <Target className="text-orange-500 mb-6 bg-orange-50 p-4 rounded-full" size={64} />
                <h3 className="text-2xl font-bold mb-8 text-slate-900">What is your Target Year?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                  {["2026", "2027", "2028"].map((year) => (
                    <button key={year} onClick={() => handleNext("year", year)} className="py-6 px-4 rounded-2xl border-2 border-slate-100 bg-slate-50 hover-lift hover:border-orange-500 text-xl font-bold text-slate-600 hover:text-orange-600 hover:bg-white group transition-colors">
                      {year}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center">
                <Brain className="text-orange-500 mb-6 bg-orange-50 p-4 rounded-full" size={64} />
                <h3 className="text-2xl font-bold mb-8 text-slate-900">What is your Current Level?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
                  <button onClick={() => handleNext("level", "Beginner")} className="py-8 px-6 text-left rounded-2xl border-2 border-slate-100 bg-slate-50 hover-lift hover:border-orange-500 hover:bg-white group transition-colors">
                    <span className="block text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">Beginner</span>
                    <span className="text-sm text-slate-500 font-medium leading-relaxed">Starting from scratch. Need basic NCERT guidance and foundational steps.</span>
                  </button>
                  <button onClick={() => handleNext("level", "Intermediate")} className="py-8 px-6 text-left rounded-2xl border-2 border-slate-100 bg-slate-50 hover-lift hover:border-orange-500 hover:bg-white group transition-colors">
                    <span className="block text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">Intermediate</span>
                    <span className="text-sm text-slate-500 font-medium leading-relaxed">Basics done. Need answer writing frameworks and advanced focus areas.</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center w-full">
                <Activity className="text-orange-500 mb-4 bg-orange-50 p-4 rounded-full" size={64} />
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Select Weak Subjects</h3>
                <p className="text-slate-500 mb-8 max-w-md text-center font-medium">Select subjects to allocate 30% more time in your study schedule.</p>
                <div className="flex flex-wrap gap-4 justify-center w-full max-w-2xl mb-10">
                  {["Polity", "Economy", "History", "Geography", "CSAT", "Ethics"].map((sub) => {
                    const isSelected = data.weak.includes(sub);
                    return (
                      <button key={sub} onClick={() => toggleWeak(sub)} className={`py-3 px-6 rounded-full border-2 transition-all font-bold ${isSelected ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm" : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"}`}>
                        {sub}
                      </button>
                    )
                  })}
                </div>
                <button 
                  onClick={() => handleNext("weak", data.weak)}
                  disabled={data.weak.length === 0}
                  className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white disabled:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full font-bold flex items-center gap-2 transition shadow-md hover:shadow-lg"
                >
                  Generate Roadmap <Sparkles size={18} />
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 pb-6 border-b border-slate-100">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 inline-flex mb-3">
                      <CheckCircle2 size={14} /> Roadmap Generated
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">Your Action Plan</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-bold text-slate-600 uppercase">Target: {data.year}</span>
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-bold text-slate-600 uppercase">{data.level}</span>
                  </div>
                </div>
                
                <div className="relative border-l-[3px] border-orange-100 ml-4 md:ml-10 pl-6 md:pl-12 space-y-12">
                  <RoadmapItem 
                    month="Months 1-3" 
                    title="Foundation & Concept Building" 
                    desc={data.level === "Beginner" ? "Focus purely on NCERTs and basic reading habits. Avoid heavy standard books." : "Quick NCERT revision and starting standard texts immediately."}
                    focusTags={data.weak.length > 0 ? [data.weak[0], "Current Affairs"] : ["Core subjects", "Newspaper"]}
                    delay={0.2}
                  />
                  <RoadmapItem 
                    month="Months 4-7" 
                    title="Standard Books & Note Making" 
                    desc="Deep dive into standard books. Start making crisp, revision-friendly notes."
                    focusTags={["Laxmikanth", "Spectrum", ...data.weak.slice(0,1)]}
                    delay={0.4}
                  />
                  <RoadmapItem 
                    month="Months 8-10" 
                    title="Answer Writing & Prelims Shift" 
                    desc="Daily answer writing. Shift to objective MCQ mindset in the last 2 months."
                    focusTags={["Mains Test Series", "CSAT Practice"]}
                    delay={0.6}
                  />
                  <RoadmapItem 
                    month="Month 11-12" 
                    title="Simulation & Execution" 
                    desc="Full length mock tests. Sleep cycle correction. Final revisions."
                    focusTags={["Mock Tests", "Revision", "Confidence"]}
                    delay={0.8}
                    isLast
                  />
                </div>
                <div className="mt-14 flex justify-center pt-8 border-t border-slate-100">
                   <button onClick={() => setStep(1)} className="text-slate-500 font-semibold hover:text-orange-600 transition-colors flex items-center gap-2 bg-slate-50 px-6 py-2 rounded-full border border-slate-200 hover:border-orange-200 hover:bg-orange-50">
                     Recalculate Roadmap
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Overlay */}
          <AnimatePresence>
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-3xl">
                 <div className="w-16 h-16 border-4 border-slate-100 border-t-orange-500 rounded-full animate-spin mb-6" />
                 <p className="text-slate-800 font-bold text-lg animate-pulse mb-2">Analyzing Data...</p>
                 <p className="text-slate-500 font-medium">Crafting the perfect strategy for {data.year}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function RoadmapItem({ month, title, desc, focusTags, delay, isLast = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative"
    >
      <div className="absolute -left-[38px] md:-left-[62px] top-1 w-6 h-6 rounded-full bg-white border-[5px] border-orange-500 z-10 shadow-sm" />
      <span className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-2 block">{month}</span>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 mb-4 text-sm md:text-base font-medium leading-relaxed max-w-xl">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {focusTags.map((tag: string, i: number) => (
          <span key={i} className="px-3 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded-md text-xs font-bold shadow-sm">{tag}</span>
        ))}
      </div>
      {!isLast && <div className="absolute -left-[35px] md:-left-[59px] top-8 bottom-[-48px] w-[3px] bg-gradient-to-b from-orange-400 to-orange-100" />}
    </motion.div>
  );
}
