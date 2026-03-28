"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, Target, Zap, ChevronDown } from "lucide-react";

export function AIMentor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome to Ravindras IAS! How can I assist your preparation today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAction = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTimeout(() => {
      let aiResponse = `I can help with "${text}". Let's get started!`;
      if (text === "How should I start UPSC?") {
        aiResponse = "Begin with the syllabus and previous year questions (PYQs). Start reading NCERTs (Class 6-12) to build your foundation.";
      } else if (text === "Give me a study plan") {
        aiResponse = "A good plan balances GS, Optional, and Current Affairs. Check out our Smart Roadmap Builder tool on the homepage!";
      }
      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-[350px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-300/50"
          >
            <div className="bg-gradient-to-r from-orange-600 to-[#FF9933] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30 text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Ravindras AI Assistant</h3>
                  <p className="text-xs text-orange-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1 rounded-md transition">
                <ChevronDown size={20} />
              </button>
            </div>

            <div className="p-4 h-[280px] overflow-y-auto flex flex-col gap-4 bg-slate-50 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-2.5 max-w-[85%] text-sm rounded-2xl shadow-sm ${
                      msg.role === "ai" 
                      ? "bg-white border border-slate-200 text-slate-700 rounded-tl-sm" 
                      : "bg-orange-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-slate-100 bg-white grid grid-cols-1 gap-2">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest px-1 font-bold mb-1">Suggested Queries</p>
              <button 
                onClick={() => handleAction("How should I start UPSC?")}
                className="text-xs bg-slate-50 hover:bg-orange-50 text-left px-3 py-2.5 rounded-xl transition border border-slate-200 hover:border-orange-300 flex items-center gap-3 text-slate-700 hover:text-orange-700 font-medium"
              >
                <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600">
                  <Target size={14} />
                </div>
                How should I start UPSC?
              </button>
              <button 
                onClick={() => handleAction("Give me a study plan")}
                className="text-xs bg-slate-50 hover:bg-orange-50 text-left px-3 py-2.5 rounded-xl transition border border-slate-200 hover:border-orange-300 flex items-center gap-3 text-slate-700 hover:text-orange-700 font-medium"
              >
                <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600">
                  <Zap size={14} />
                </div>
                Give me a study plan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-orange-600 text-white shadow-xl shadow-orange-600/30 flex items-center justify-center ml-auto border-2 border-white/50 relative overflow-hidden group"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-orange-600 to-[#FF9933]"></div>
        <div className="relative z-10 flex items-center justify-center">
            {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />}
        </div>
      </motion.button>
    </div>
  );
}
