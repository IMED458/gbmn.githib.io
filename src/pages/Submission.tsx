/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileUp, ClipboardCheck, Mail, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Submission() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Submit a Manuscript</h1>
           <p className="text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
             GBMN uses a streamlined submission process. Authors are invited to submit their research through our digital editorial platform.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          {/* Submission Instructions */}
          <div className="bg-white border-2 border-slate-900 p-8 md:p-12 rounded-sm shadow-[10px_10px_0px_rgba(15,23,42,1)]">
             <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
               <ClipboardCheck className="w-6 h-6 mr-3 text-blue-600" />
               Submission Checklist
             </h2>
             <ul className="space-y-6">
                {[
                  "Cover letter addressed to the Editor-in-Chief.",
                  "Manuscript in Microsoft Word (.doc, .docx) format.",
                  "High-resolution figures (300 DPI minimum) as separate files.",
                  "Completed and signed Copyright Transfer Form.",
                  "ICMJE Disclosure of Interest forms for all authors.",
                  "Ethical approval statement for research involving human/animal subjects."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                     <div className="w-5 h-5 border-2 border-blue-600 rounded-sm mt-1 shrink-0 bg-blue-50"></div>
                     <span className="ml-4 text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
             </ul>
             
             <div className="mt-12 pt-12 border-t border-gray-100">
                <button className="w-full md:w-auto bg-blue-700 text-white px-10 py-5 font-bold hover:bg-blue-800 transition-all flex items-center justify-center space-x-3 rounded-sm text-sm uppercase tracking-widest">
                   <span>Enter Online Submission System</span>
                   <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-slate-400 mt-4 text-center md:text-left italic">
                  Note: You will be redirected to our OJS Editorial Manager portal.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pre-Submission Inquiry</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Not sure if your manuscript fits the GBMN scope? Authors are encouraged to send a title and abstract to the editorial office for a rapid preliminary assessment.
                </p>
                <a href="mailto:editor@gbmn.org" className="text-sm font-bold text-blue-700 hover:underline">Contact Editorial Office</a>
             </div>
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm">
                <HelpCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Support</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Encountering issues with the online portal? Our technical support team is available to assist you with file uploads and system navigation.
                </p>
                <a href="mailto:support@gbmn.org" className="text-sm font-bold text-blue-700 hover:underline">Request Support</a>
             </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-10">
           <div className="bg-slate-900 text-white p-8 rounded-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Article Processing Charges</h4>
              <p className="text-sm border-b border-white/10 pb-4 mb-4">
                GBMN is a Gold Open Access journal. To sustain our operations and open communication, an Article Processing Charge (APC) is applied upon acceptance.
              </p>
              <p className="text-2xl font-serif font-bold text-white mb-2">$450 <span className="text-xs font-sans text-slate-400">USD</span></p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Waivers available for low-income regions.</p>
           </div>

           <div className="p-8 border border-gray-100 rounded-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Author Resources</h4>
              <ul className="space-y-4">
                 <li><a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-700 flex items-center"><FileUp className="w-4 h-4 mr-2 opacity-40" /> Microsoft Word Template</a></li>
                 <li><a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-700 flex items-center"><FileUp className="w-4 h-4 mr-2 opacity-40" /> LaTeX Package (Beta)</a></li>
                 <li><a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-700 flex items-center"><FileUp className="w-4 h-4 mr-2 opacity-40" /> Reference Style Guide</a></li>
              </ul>
           </div>
        </aside>
      </div>
    </div>
  );
}
