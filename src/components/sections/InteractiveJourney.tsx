"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HelpCircle, CheckSquare, PenTool, Users, Award, Timer } from "lucide-react";

export function InteractiveJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-[#FF9933] drop-shadow-none">Transformation</span> Journey
           </h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">A structured, proven pedagogy to navigate the UPSC civil services examination.</p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[30px] md:left-1/2 top-10 bottom-10 w-1 bg-slate-200 rounded-full -translate-x-1/2 z-0 hidden md:block">
            <motion.div 
              className="w-full bg-orange-500 rounded-full"
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            />
          </div>

          {/* Stage 1: Beginner */}
          <StageCard 
            index={1}
            title="Foundation Phase" 
            desc="Syllabus decoding and NCERT basics. Establishing a strong conceptual bedrock and reading habits."
            icon={<HelpCircle size={24} />}
            align="left"
            theme="slate"
            visual={
              <div className="relative w-full h-full flex items-center justify-center p-6 bg-slate-100 rounded-2xl group-hover:bg-slate-50 transition-colors">
                 <motion.div 
                    animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center bg-white shadow-sm"
                 >
                   <span className="text-slate-400 font-mono font-bold text-lg">? ? ?</span>
                 </motion.div>
              </div>
            }
          />

          {/* Stage 2: Prelims */}
          <StageCard 
            index={2}
            title="Prelims Simulator" 
            desc="Precision is key. Master objective MCQs with negative marking through timed mock tests."
            icon={<CheckSquare size={24} />}
            align="right"
            theme="orange"
            visual={
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-orange-50 rounded-2xl">
                 <motion.div 
                   initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                   className="w-full bg-white border border-orange-100 p-5 rounded-xl flex flex-col gap-3 shadow-md relative overflow-hidden"
                 >
                   <div className="absolute top-0 left-0 w-full h-1 bg-orange-100"><motion.div className="h-full bg-orange-500" initial={{ width: "100%" }} whileInView={{ width: "0%" }} transition={{ duration: 5 }} /></div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs text-orange-600 font-bold font-mono flex items-center gap-1"><Timer size={14}/> 00:00:45</span>
                     <span className="text-xs text-slate-400 font-bold">Q.42</span>
                   </div>
                   <div className="h-4 bg-slate-100 rounded w-full"></div>
                   <div className="h-4 bg-slate-100 rounded w-4/5 mb-4"></div>
                   <div className="h-10 bg-orange-50 border-2 border-orange-200 rounded-lg flex items-center px-3"><div className="w-4 h-4 rounded-full bg-orange-500 mr-3 shadow-sm"></div><div className="h-2.5 bg-slate-300 rounded w-1/2"></div></div>
                   <div className="h-10 bg-white border border-slate-200 rounded-lg flex items-center px-3"><div className="w-4 h-4 rounded-full border-2 border-slate-300 mr-3"></div><div className="h-2 bg-slate-200 rounded w-2/3"></div></div>
                 </motion.div>
              </div>
            }
          />

          {/* Stage 3: Mains */}
          <StageCard 
            index={3}
            title="Mains Masterclass" 
            desc="Structure your thoughts. Write like an administrator. Focus on content, presentation, and time management."
            icon={<PenTool size={24} />}
            align="left"
            theme="blue"
            visual={
              <div className="relative w-full h-full flex items-center justify-center bg-blue-50/50 rounded-2xl p-6">
                 <motion.div 
                   initial={{ rotate: -8, x: -15, opacity: 0 }} whileInView={{ rotate: -4, x: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                   className="absolute w-48 h-64 bg-slate-50 border border-slate-200 rounded-xl p-5 rotate-[-4deg] z-0 shadow-sm"
                 />
                 <motion.div 
                   initial={{ rotate: 8, x: 15, opacity: 0 }} whileInView={{ rotate: 4, x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                   className="absolute w-48 h-64 bg-white border border-slate-200 rounded-xl p-5 rotate-[4deg] z-10 shadow-xl"
                 >
                   <div className="w-full border-b-2 border-slate-100 pb-3 mb-4 relative flex justify-between">
                     <div className="w-16 h-3 bg-slate-200 rounded"></div>
                     <div className="text-[10px] text-slate-400 font-mono font-bold">1/20</div>
                   </div>
                   <div className="space-y-4">
                     <div className="w-full h-2.5 bg-slate-200 rounded"></div>
                     <div className="w-5/6 h-2.5 bg-slate-200 rounded"></div>
                     <div className="w-full h-2.5 bg-slate-200 rounded mt-5"></div>
                     <div className="w-full h-2.5 bg-slate-200 rounded"></div>
                     <div className="w-4/6 h-2.5 bg-blue-200 rounded mt-5"></div>
                   </div>
                 </motion.div>
              </div>
            }
          />

          {/* Stage 4: Interview */}
          <StageCard 
            index={4}
            title="Interview Panel" 
            desc="Build confidence, honesty, and analytical depth. Prepare for the ultimate personality test."
            icon={<Users size={24} />}
            align="right"
            theme="emerald"
            visual={
              <div className="relative w-full h-full flex flex-col items-center justify-end pb-8 bg-emerald-50/50 rounded-2xl pt-16">
                 <div className="flex gap-6 mb-10">
                   <div className="w-12 h-16 bg-slate-200 rounded-t-full border border-slate-300 shadow-sm" />
                   <div className="w-14 h-20 bg-slate-300 rounded-t-full border border-slate-400 shadow-md scale-110" />
                   <div className="w-12 h-16 bg-slate-200 rounded-t-full border border-slate-300 shadow-sm" />
                 </div>
                 <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}
                   className="w-full max-w-[220px] h-2 bg-slate-200 rounded-full overflow-hidden mb-3 border border-slate-300"
                 >
                    <motion.div 
                      initial={{ width: "20%" }} whileInView={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                 </motion.div>
                 <span className="text-[10px] text-emerald-700 font-bold tracking-widest uppercase">Confidence Profile</span>
              </div>
            }
          />

          {/* Stage 5: Success */}
          <StageCard 
            index={5}
            title="Final Selection" 
            desc="The PDF arrives. Your name is on the list. The journey transforms into reality."
            icon={<Award size={32} />}
            align="center"
            theme="gold"
            visual={
              <div className="relative w-full h-full flex items-center justify-center py-10 bg-[#FF9933]/5 rounded-2xl overflow-hidden">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2),transparent_70%)] rounded-full blur-2xl" 
                 />
                 <motion.div
                   initial={{ scale: 0.5, y: 30 }} whileInView={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 12 }}
                   className="relative w-40 h-40 rounded-full border-[6px] border-[#F59E0B] flex flex-col items-center justify-center bg-white shadow-[0_20px_50px_rgba(245,158,11,0.2)] z-10"
                 >
                   <Award size={48} className="text-[#F59E0B] mb-2" />
                   <span className="text-xs text-slate-800 font-black uppercase tracking-widest">A.I.R. 01</span>
                 </motion.div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
}

function StageCard({ index, title, desc, icon, align, visual, theme }: any) {
  const isLeft = align === "left";
  const isCenter = align === "center";
  
  const themeColors: Record<string, string> = {
    slate: "text-slate-600 bg-slate-100 border-slate-200 group-hover:bg-slate-200 group-hover:text-slate-800",
    orange: "text-orange-600 bg-orange-100 border-orange-200 group-hover:bg-orange-200 group-hover:text-orange-800",
    blue: "text-blue-600 bg-blue-100 border-blue-200 group-hover:bg-blue-200 group-hover:text-blue-800",
    emerald: "text-emerald-600 bg-emerald-100 border-emerald-200 group-hover:bg-emerald-200 group-hover:text-emerald-800",
    gold: "text-[#F59E0B] bg-[#FFFBEB] border-[#FCD34D] group-hover:bg-[#FEF3C7]"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group relative grid grid-cols-1 ${isCenter ? "md:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-2"} gap-8 md:gap-16 items-center z-10 w-full`}
    >
      <div className={`md:col-span-1 space-y-4 ${isLeft || isCenter ? "order-1" : "order-2 md:order-2"} ${isCenter ? "text-center flex flex-col items-center" : ""}`}>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors duration-300 ${themeColors[theme]} mb-4 shadow-sm`}>
          {icon}
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-black text-slate-200 tracking-tighter">0{index}</span>
          <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      
      <div className={`md:col-span-1 w-full max-w-md mx-auto aspect-square rounded-[2rem] bg-white border border-slate-200 p-2 shadow-xl shadow-slate-200/50 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 ${isLeft || isCenter ? "order-2" : "order-1 md:order-1"}`}>
        {visual}
      </div>
    </motion.div>
  );
}
