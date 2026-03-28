import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-0 flex flex-col min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24 mt-0">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex justify-center items-center p-4 bg-orange-100 rounded-3xl mb-8 text-orange-600 shadow-sm border border-orange-200">
               <Award size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">About <span className="text-orange-600">Ravindras IAS</span></h1>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed">Pioneering excellence in Civil Services Examination coaching with an uncompromising commitment to student success since 2010.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Vision & Mission</h2>
            <p className="text-slate-600 mb-6 font-medium leading-relaxed">
              At Ravindras IAS Academy, our mission is to empower aspirants with the precise knowledge, critical thinking, and ethical mooring required to become exceptional administrators. 
            </p>
            <p className="text-slate-600 mb-8 font-medium leading-relaxed">
              We transcend traditional rote learning by focusing on conceptual clarity, interdisciplinary understanding, and highly personalized mentorship, ensuring our students are not just exam-ready, but service-ready.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-800 font-bold"><CheckCircle className="text-orange-500" size={24} /> 10,000+ Aspirants Mentored</li>
              <li className="flex items-center gap-4 text-slate-800 font-bold"><CheckCircle className="text-orange-500" size={24} /> 500+ Selections in Civil Services</li>
              <li className="flex items-center gap-4 text-slate-800 font-bold"><CheckCircle className="text-orange-500" size={24} /> Highly Experienced Academic Faculty</li>
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-200 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <h3 className="text-2xl font-bold text-slate-900 mb-8">Pedagogical Pillars</h3>
             
             <div className="space-y-8 relative z-10">
               <div className="flex gap-5">
                 <div className="w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-sm"><BookOpen size={24} /></div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-1">Structured Curriculum</h4>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">Strict adherence to the UPSC syllabus with dynamic updates for current affairs alignment.</p>
                 </div>
               </div>
               <div className="flex gap-5">
                 <div className="w-14 h-14 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm"><Award size={24} /></div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-1">Excellence in Evaluation</h4>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">Multi-tier answer sheet evaluation to identify microscopic areas of improvement.</p>
                 </div>
               </div>
               <div className="flex gap-5">
                 <div className="w-14 h-14 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm"><Users size={24} /></div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-1">Peer & Mentor Support</h4>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">A thriving ecosystem of serious aspirants and dedicated mentors pushing each other.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
