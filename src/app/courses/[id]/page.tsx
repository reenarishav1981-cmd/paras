export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
       {/* Background accents */}
       <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
       
       <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-10">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-200 shadow-xl shadow-slate-200/50">
              <span className="px-4 py-1.5 bg-orange-100 text-orange-700 font-bold tracking-widest uppercase text-[10px] rounded-full mb-6 inline-block shadow-sm">
                Course Detail
              </span>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight capitalize leading-tight">
                {id.split("-").join(" ")}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-3xl">
                Comprehensive and meticulously planned curriculum designed to cater to both foundational understanding and advanced analytical skills required for the UPSC examination.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-4">
                 <div className="lg:col-span-3 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                      <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div> Key Features
                    </h3>
                    <ul className="space-y-5 font-medium text-slate-700">
                      <li className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-sm flex-shrink-0"></div> 
                        <span className="leading-relaxed text-slate-600">Daily interactive classroom lectures mapped to the official UPSC syllabus patterns.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-sm flex-shrink-0"></div> 
                        <span className="leading-relaxed text-slate-600">Comprehensive printed core syllabus & current affairs compilation booklets.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-sm flex-shrink-0"></div> 
                        <span className="leading-relaxed text-slate-600">Weekly rigorous answer writing practice with AI-assisted quick evaluation and faculty feedback.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-sm flex-shrink-0"></div> 
                        <span className="leading-relaxed text-slate-600">Dedicated mentor allocation for psychological and strategic support throughout the journey.</span>
                      </li>
                    </ul>
                 </div>
                 
                 <div className="lg:col-span-2 bg-gradient-to-br from-orange-600 to-[#FF9933] p-8 md:p-10 rounded-3xl text-white flex flex-col justify-center items-start shadow-2xl shadow-orange-500/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
                    
                    <div className="relative z-10 w-full">
                      <span className="text-orange-100 font-extrabold uppercase tracking-widest text-[10px] mb-3 block">Next Batch Commences</span>
                      <h3 className="text-4xl font-black mb-1 tracking-tight">15th Oct</h3>
                      <p className="text-xl font-medium text-orange-200 mb-10">2026 Session</p>
                      
                      <button className="px-8 py-4 bg-white text-orange-600 font-black tracking-wide uppercase rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-slate-50 hover:-translate-y-1 w-full transition-all duration-300">
                        Enroll Now
                      </button>
                      <p className="text-[10px] font-bold text-orange-200/80 mt-5 text-center w-full uppercase tracking-widest">
                        * Limited Seats Output
                      </p>
                    </div>
                 </div>
              </div>
          </div>
       </div>
    </div>
  )
}
