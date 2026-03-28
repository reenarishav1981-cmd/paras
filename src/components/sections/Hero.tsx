"use client";

import { motion } from "framer-motion";
import { ChevronDown, PlayCircle, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Light subtle particles / background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-orange-50/50 to-white/90">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100 rounded-full blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100 rounded-full blur-[100px] opacity-30 -translate-x-1/2 translate-y-1/4 pointer-events-none" />
         
         {/* Very subtle grid pattern */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            Admissions Open for 2026-27 Batch
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 drop-shadow-sm leading-[1.1] max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          India's Premier Institute for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-[#FF9933] drop-shadow-none p-1">Civil Services Examination</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming aspirants into administrators with discipline, structured guidance, and an unwavering commitment to excellence.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-5 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/courses" className="group relative px-8 py-4 bg-orange-600 rounded-full font-bold text-white transition-all duration-300 hover-lift flex items-center gap-3 border border-orange-500 hover:bg-orange-700 shadow-xl shadow-orange-500/20">
            <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
            Explore Courses
          </Link>
          
          <Link href="/toppers" className="group px-8 py-4 rounded-full font-bold text-slate-700 transition-all duration-300 hover-lift glass-light border border-slate-200 hover:border-orange-300 hover:bg-orange-50 flex items-center gap-3">
            <PlayCircle size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
            Watch Success Stories
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="uppercase text-[10px] tracking-[0.2em] font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
