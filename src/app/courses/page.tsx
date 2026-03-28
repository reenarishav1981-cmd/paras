import { BookOpen, Presentation, CheckCircle, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ALL_COURSES = [
  { 
    id: "gs-foundation", 
    title: "GS Foundation Zero to Zenith", 
    icon: <BookOpen size={28} />, 
    desc: "Complete 18-month interactive coverage from scratch. Engaging lectures, comprehensive study material, and regular test series.", 
    tag: "Most Popular",
    color: "text-orange-600 bg-orange-50 border-orange-200",
    duration: "18 Months",
    mode: "Offline & Online"
  },
  { 
    id: "prelims-test-series", 
    title: "Prelims Test Series X", 
    icon: <CheckCircle size={28} />, 
    desc: "10,000+ curated MCQs with advanced analytics predicting your weak topics and suggesting targeted revisions.", 
    tag: "High Success Rate",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    duration: "12 Months",
    mode: "Online Portal"
  },
  { 
    id: "mains-masterclass", 
    title: "Mains Masterclass Pro", 
    icon: <Presentation size={28} />, 
    desc: "Live daily answer writing sessions, structural formatting frameworks, and personalized feedback from past toppers.", 
    tag: "Rank Decider",
    color: "text-blue-600 bg-blue-50 border-blue-200",
    duration: "6 Months",
    mode: "Offline Classroom"
  },
  { 
    id: "sociology-optional", 
    title: "Sociology Optional Batch", 
    icon: <Users size={28} />, 
    desc: "In-depth coverage of Sociology for mains with current affairs linkages and thinker-based analysis.", 
    tag: "High Scoring",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    duration: "4 Months",
    mode: "Offline & Online"
  }
];

export default function CoursesPage() {
  return (
    <div className="pt-0 flex flex-col min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24 mt-0">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex justify-center items-center p-4 bg-orange-100 rounded-3xl mb-8 text-orange-600 shadow-sm border border-orange-200">
               <BookOpen size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Academic <span className="text-orange-600">Programs</span></h1>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed">Comprehensive offline and online classroom programs tailored meticulously for the Civil Services Examination.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16">
        {/* Filters UI (Static mockup as requested) */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
          <button className="px-5 py-2 rounded-full bg-slate-800 text-white font-bold text-sm shadow-md">All Programs</button>
          <button className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:border-orange-300 transition-colors">Foundation</button>
          <button className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:border-orange-300 transition-colors">Optional Subjects</button>
          <button className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:border-orange-300 transition-colors">Test Series</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ALL_COURSES.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="group relative bg-white rounded-3xl border border-slate-200 p-8 flex flex-col transition-all duration-300 hover-lift hover:border-orange-200 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                 <div className={`p-4 rounded-2xl border ${course.color} transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                   {course.icon}
                 </div>
                 <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
                   {course.tag}
                 </span>
              </div>
      
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors tracking-tight">
                {course.title}
              </h3>
      
              <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                {course.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1"><Clock size={12}/> Duration</span>
                    <span className="text-sm font-bold text-slate-800">{course.duration}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1"><ShieldCheck size={12}/> Mode</span>
                    <span className="text-sm font-bold text-slate-800">{course.mode}</span>
                 </div>
              </div>
      
              <div className="w-full mt-auto py-3.5 rounded-xl font-bold text-sm bg-slate-50 border border-slate-200 group-hover:bg-orange-600 group-hover:border-orange-500 group-hover:text-white text-slate-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                View Syllabus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
