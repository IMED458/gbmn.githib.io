/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, CheckCircle2, ListChecks, HelpCircle, ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForAuthors() {
  const steps = [
    { title: 'Prepare Manuscript', desc: 'Ensure your work follows the IMRAD structure and GBMN formatting guidelines.' },
    { title: 'Check Ethics', desc: 'Verify all ethical requirements and conflict of interest disclosures.' },
    { title: 'Submit Online', desc: 'Use our OJS submission platform to upload all required files.' },
    { title: 'Track Status', desc: 'Monitor your manuscript through the peer review and editorial stages.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Authors Hero */}
      <section className="bg-blue-700 py-16 md:py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
           <FileText className="w-[600px] h-[600px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">Author Guidelines</h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-10">
                Join a global network of researchers and healthcare professionals. We provide a rigorous and rapid platform for your breakthrough discoveries.
              </p>
              <div className="flex flex-wrap gap-4">
                 <button className="bg-white text-blue-700 px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-blue-50 transition-all uppercase tracking-widest text-xs">
                    Start Submission
                 </button>
                 <button className="bg-blue-800 text-white border border-blue-500 px-8 py-3 rounded-sm font-bold hover:bg-blue-900 transition-all uppercase tracking-widest text-xs">
                    Download Guidelines (PDF)
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <h2 className="text-2xl font-serif font-bold text-slate-900 mb-16 text-center">Submission Workflow</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group p-8 bg-slate-50 border border-slate-100 rounded-sm">
                 <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">{i + 1}</div>
                 <h3 className="text-lg font-bold text-slate-900 mb-4">{step.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Detailed Guidelines */}
      <section className="bg-slate-50 border-y border-gray-100 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-16">
               <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-2 inline-block">Manuscript Preparation</h3>
                  <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                     <p>Manuscripts should be written in clear, concise English. Authors for whom English is not their first language are encouraged to have their manuscripts edited by a native speaker before submission.</p>
                     <div className="bg-white p-8 border border-gray-100 space-y-4">
                        <h4 className="font-bold text-slate-900 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> Structure Requirements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm list-none p-0">
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Title Page (Title, Authors, Affiliations)</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Structured Abstract (Max 250 words)</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Keywords (3-6 terms)</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Introduction & Objectives</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Materials and Methods</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Results</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Discussion & Conclusion</li>
                           <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> References (AMA or NLM style)</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-2 inline-block">Article Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                     <div className="p-6 bg-white border border-gray-100 rounded-sm">
                        <h4 className="font-bold text-slate-900 mb-2">Original Research</h4>
                        <p className="text-xs text-slate-500 mb-4">Unpublished studies with novel scientific findings.</p>
                        <span className="text-[10px] bg-slate-900 text-white px-2 py-1 uppercase font-bold tracking-widest">Max 4000 words</span>
                     </div>
                     <div className="p-6 bg-white border border-gray-100 rounded-sm">
                        <h4 className="font-bold text-slate-900 mb-2">Review Articles</h4>
                        <p className="text-xs text-slate-500 mb-4">Systematic or narrative synthesis of evidence.</p>
                        <span className="text-[10px] bg-slate-900 text-white px-2 py-1 uppercase font-bold tracking-widest">Max 6000 words</span>
                     </div>
                     <div className="p-6 bg-white border border-gray-100 rounded-sm">
                        <h4 className="font-bold text-slate-900 mb-2">Clinical Case Studies</h4>
                        <p className="text-xs text-slate-500 mb-4">Reports on unique clinical presentations.</p>
                        <span className="text-[10px] bg-slate-900 text-white px-2 py-1 uppercase font-bold tracking-widest">Max 2500 words</span>
                     </div>
                     <div className="p-6 bg-white border border-gray-100 rounded-sm">
                        <h4 className="font-bold text-slate-900 mb-2">Short Communications</h4>
                        <p className="text-xs text-slate-500 mb-4">Brief reports of high impact observations.</p>
                        <span className="text-[10px] bg-slate-900 text-white px-2 py-1 uppercase font-bold tracking-widest">Max 1500 words</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-10">
                  <div className="bg-slate-900 p-8 rounded-sm text-white shadow-xl">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Required Forms</h4>
                     <ul className="space-y-4">
                        <li>
                           <button className="w-full text-left p-4 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group rounded-sm border border-white/10">
                              <span className="text-sm font-bold">ICMJE Disclosure Form</span>
                              <Download className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                           </button>
                        </li>
                        <li>
                           <button className="w-full text-left p-4 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group rounded-sm border border-white/10">
                              <span className="text-sm font-bold">Copyright Transfer Form</span>
                              <Download className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                           </button>
                        </li>
                        <li>
                           <button className="w-full text-left p-4 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group rounded-sm border border-white/10">
                              <span className="text-sm font-bold">Authorship Declaration</span>
                              <Download className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                           </button>
                        </li>
                     </ul>
                  </div>

                  <div className="p-8 border border-slate-200 rounded-sm">
                     <HelpCircle className="w-8 h-8 text-blue-600 mb-4" />
                     <h4 className="font-bold text-slate-900 mb-2">Pre-Submission Check</h4>
                     <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Unsure if your manuscript fits our scope? Send us an abstract for an informal editorial assessment.
                     </p>
                     <Link to="/contact" className="text-sm font-bold text-blue-700 hover:underline inline-flex items-center">
                        Contact Editor
                        <Mail className="w-4 h-4 ml-2" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
