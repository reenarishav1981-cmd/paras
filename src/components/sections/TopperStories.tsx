"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle, Quote } from "lucide-react";
import Image from "next/image";

const TOPPERS = [
  { id: 1, name: "Aditya Srivastava", rank: "AIR 1", year: "2023", quote: "Consistency and strategy were my only anchors.", src: "/aditya.jpg.png" },
  { id: 2, name: "Shruti Sharma", rank: "AIR 1", year: "2021", quote: "Focus on limited resources, but revise them infinitely.", src: "/shruti.jpg.png" },
  { id: 3, name: "Kanishak Kataria", rank: "AIR 1", year: "2018", quote: "Self-belief and analyzing own mistakes changed the game.", src: "/kanishk.jpg.png" },
];

export function TopperStories() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="relative w-full py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOPPERS.map((topper, i) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2 border border-slate-200"
              onClick={() => setSelected(topper)}
            >
              {/* Background Image (Mock Unsplash) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${topper.src})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-orange-500 text-white font-black text-sm rounded-full tracking-widest uppercase shadow-md backdrop-blur-md">
                {topper.rank}
              </div>
              <div className="absolute top-6 right-6 px-3 py-1.5 border border-white/50 text-white rounded-full text-xs font-bold backdrop-blur-md">
                CSE {topper.year}
              </div>

              <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold text-white mb-2">{topper.name}</h3>
                <p className="text-slate-300 text-sm font-medium line-clamp-2 max-w-[90%] mb-4 italic leading-relaxed">"{topper.quote}"</p>
                <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <PlayCircle size={14} /> Watch Strategy
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/50 backdrop-blur-md text-slate-900 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors shadow-sm"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-900">
                 <div 
                   className="absolute inset-0 bg-cover bg-center opacity-80"
                   style={{ backgroundImage: `url(${selected.src})` }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-orange-500 border border-white/50 shadow-xl group">
                       <PlayCircle size={32} className="relative z-10 ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                 </div>
              </div>
              
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-slate-50 relative">
                 <div className="absolute top-0 right-0 p-8 text-orange-200 opacity-30"><Quote size={80} /></div>
                 <span className="px-4 py-1.5 bg-orange-100 text-orange-700 font-bold tracking-widest uppercase text-xs rounded-full w-max mb-6">
                   {selected.rank} • CSE {selected.year}
                 </span>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{selected.name}</h2>
                 <p className="text-slate-600 text-lg italic mb-10 leading-relaxed font-medium relative z-10">
                   "{selected.quote}"
                 </p>
                 <div className="space-y-4">
                   <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">Key Strategy</h4>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-bold shadow-sm">Limited Sources</span>
                     <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-bold shadow-sm">Daily Answer Writing</span>
                     <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-bold shadow-sm">Mock Tests</span>
                   </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
