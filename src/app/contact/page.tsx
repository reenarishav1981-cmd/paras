import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-0 flex flex-col min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24 mt-0">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex justify-center items-center p-4 bg-orange-100 rounded-3xl mb-8 text-orange-600 shadow-sm border border-orange-200">
               <Phone size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Contact <span className="text-orange-600">Us</span></h1>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed">Have questions about our syllabus, admission, or fees? Our dedicated faculty is here to support you at every step.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h2>
            <p className="text-slate-500 font-medium mb-8">Reach out via any of the channels below.</p>
            
            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-orange-100"><Phone size={24} /></div>
              <div><p className="font-bold text-slate-900">+91 98765 43210</p><p className="text-sm font-medium text-slate-500">Mon - Sat, 9am - 7pm</p></div>
            </div>
            
            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100"><Mail size={24} /></div>
              <div><p className="font-bold text-slate-900">admissions@ravindrasias.com</p><p className="text-sm font-medium text-slate-500">24/7 Support Desk</p></div>
            </div>
            
            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100"><MapPin size={24} /></div>
              <div><p className="font-bold text-slate-900">Ravindras Tower, Old Rajinder Nagar</p><p className="text-sm font-medium text-slate-500">New Delhi - 110060</p></div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
               <div className="space-y-2">
                 <label className="text-sm font-bold text-slate-700">Full Name</label>
                 <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-bold text-slate-700">Phone Number</label>
                 <input type="tel" placeholder="+91" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-bold text-slate-700">Message Inquiry</label>
                 <textarea rows={4} placeholder="I want to know about..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium resize-none"></textarea>
               </div>
               <button type="button" className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-md mt-4 hover:-translate-y-0.5">
                 Submit Request
               </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}
