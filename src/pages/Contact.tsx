/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero */}
      <section className="bg-slate-50 border-b border-gray-100 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
               <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Contact & Publisher Information</h1>
               <p className="text-xl text-slate-600 font-light leading-relaxed">
                 We are here to assist authors, reviewers, and institutions with any inquiries regarding the journal operations, subscriptions, and scholarly cooperation.
               </p>
            </div>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
         {/* Contact Methods */}
         <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Editorial Office</h2>
               
               <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-sm shrink-0">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Inquiry</p>
                     <p className="text-xl font-bold text-slate-900">+995 555 760 640</p>
                     <p className="text-xs text-slate-500 mt-1">Available Mon-Fri, 10:00 - 18:00 (GMT+4)</p>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm shrink-0">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">General Inquiries</p>
                     <p className="text-xl font-bold text-slate-900">contact@gbmn.org</p>
                     <p className="text-xs text-slate-500 mt-1">Typical response time: 24-48 hours</p>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm shrink-0">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Office Address</p>
                     <p className="text-xl font-bold text-slate-900 leading-tight">Tbilisi State Medical University Campus</p>
                     <p className="text-xs text-slate-500 mt-1 italic">33 Vazha-Pshavela Ave, Tbilisi 0186, Georgia</p>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm">
               <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center uppercase tracking-widest">
                  <Globe className="w-4 h-4 mr-2 text-blue-600" />
                  Publisher
               </h3>
               <p className="text-lg font-serif font-bold text-slate-800 mb-2">Academic Press Georgia</p>
               <p className="text-sm text-slate-600 leading-relaxed italic">
                 Committed to the dissemination of scientific knowledge through high-quality research and ethical publishing practices.
               </p>
            </div>
         </div>

         {/* Contact Form */}
         <div className="lg:col-span-8">
            <div className="bg-white border-2 border-slate-900 p-8 md:p-12 shadow-[12px_12px_0px_rgba(30,41,59,1)] rounded-sm">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Direct Inquiry Form</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase">Full Name</label>
                        <input type="text" className="w-full border-b-2 border-slate-200 focus:border-slate-900 focus:ring-0 py-3 outline-none transition-colors" placeholder="Dr. John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase">Email Address</label>
                        <input type="email" className="w-full border-b-2 border-slate-200 focus:border-slate-900 focus:ring-0 py-3 outline-none transition-colors" placeholder="john@university.edu" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-900 uppercase">Subject / Inquiry Type</label>
                     <select className="w-full border-b-2 border-slate-200 focus:border-slate-900 focus:ring-0 py-3 outline-none transition-colors bg-white">
                        <option>Submission Inquiry</option>
                        <option>Status Request</option>
                        <option>Reviewer Application</option>
                        <option>Indexing / Bibliographic Data</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-900 uppercase">Message</label>
                     <textarea rows={6} className="w-full border-b-2 border-slate-200 focus:border-slate-900 focus:ring-0 py-3 outline-none transition-colors resize-none" placeholder="Provide details regarding your inquiry..."></textarea>
                  </div>
                  <button className="bg-slate-900 text-white w-full md:w-auto px-12 py-4 font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-3 uppercase tracking-widest text-sm rounded-sm">
                     <span>Send Inquiry</span>
                     <Send className="w-4 h-4" />
                  </button>
               </form>
            </div>
         </div>
      </div>
    </div>
  );
}
