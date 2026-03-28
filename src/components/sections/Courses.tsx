"use client";

import { motion } from "framer-motion";
import { BookOpen, Presentation, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const COURSES = [
  { 
    id: "gs-foundation", 
    title: "GS Foundation Zero to Zenith", 
    icon: <BookOpen size={28} />, 
    desc: "Complete 18-month interactive coverage from scratch. Engaging lectures, comprehensive study material, and regular test series.", 
    tag: "Most Popular",
    color: "text-orange-600 bg-orange-50 border-orange-200"
  },
  { 
    id: "prelims-test-series", 
    title: "Prelims Test Series X", 
    icon: <CheckCircle size={28} />, 
    desc: "10,000+ curated MCQs with advanced analytics predicting your weak topics and suggesting targeted revisions.", 
    tag: "High Success Rate",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200"
  },
  { 
    id: "mains-masterclass", 
    title: "Mains Masterclass Pro", 
    icon: <Presentation size={28} />, 
    desc: "Live daily answer writing sessions, structural formatting frameworks, and personalized feedback from past toppers.", 
    tag: "Rank Decider",
    color: "text-blue-600 bg-blue-50 border-blue-200"
  }
];

export function Courses() {
  return (
    <section className="relative w-full py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              Flagship <span className="text-orange-600">Classroom</span> Programs
            </h2>
            <p className="text-slate-600 text-lg font-medium">Not just courses, but fully immersive training programs designed to forge administrators step by step.</p>
          </div>
          <Link href="/courses" className="text-sm font-bold text-orange-600 uppercase tracking-widest border-b-2 border-orange-500 pb-1 hover:text-orange-700 transition-colors flex items-center gap-2 group">
            View All Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, delay }: any) {
  return (
    <Link href={`/courses/${course.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        className="group relative h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:border-orange-200 overflow-hidden"
      >
        <div className={`mb-8 p-4 rounded-2xl border ${course.color} transition-transform duration-500 group-hover:scale-110`}>
          {course.icon}
        </div>

        <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-4 inline-block">
          {course.tag}
        </span>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
          {course.desc}
        </p>

        <div className="w-full mt-auto py-3.5 rounded-xl font-bold text-sm bg-slate-50 border border-slate-200 group-hover:bg-orange-600 group-hover:border-orange-500 group-hover:text-white text-slate-700 transition-all flex items-center justify-center gap-2">
          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
