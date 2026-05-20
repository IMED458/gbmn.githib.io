/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Award, Flag, Users, Info, ChevronRight, Scale } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Identity Section */}
      <section className="bg-slate-50 border-b border-gray-100 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
               <div className="flex items-center space-x-3 text-blue-600 mb-6">
                  <span className="w-10 h-px bg-blue-600"></span>
                  <p className="text-xs font-bold uppercase tracking-[0.3em]">Institutional Profile</p>
               </div>
               <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                  About the Journal
               </h1>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                  Georgian Biomedical and Medical Nexus (GBMN) is an independent, international, peer-reviewed medical journal providing a forum for the publication of scientific research and clinical education.
               </p>
               <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-sm inline-flex">
                  <div className="shrink-0 w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xs text-white font-black text-xl">BM</div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Journal Status</p>
                    <p className="text-sm font-bold text-slate-800">Gold Open Access (CC-BY 4.0)</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Aims & Scope / Editorial Board */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
         
         {/* Main Narrative */}
         <div className="lg:col-span-8 space-y-20">
            {/* Aims and Scope Content */}
            <section id="aims-scope" className="prose prose-slate max-w-none">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-2 inline-block">Aims and Scope</h2>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                  <p>
                    Georgian Biomedical and Medical Nexus (GBMN) aims to bridging the gap between basic biomedical research and clinical practice, fostering a multidisciplinary approach to medical science. We are committed to highlighting high-quality research originating from Georgia and the Caucasus region, while maintaining a truly international scope by welcoming contributions from scholars worldwide.
                  </p>
                  <p>
                    The journal covers a wide range of topics, including but not limited to:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 list-none p-0">
                     {[
                       'Molecular and Cellular Biology',
                       'Clinical Medicine & Specialized Surgery',
                       'Translational Cardiology',
                       'Immunology and Infectious Diseases',
                       'Pediatric and Adolescent Medicine',
                       'Public Health and Epidemiology',
                       'Biotechnology and Pharmacology',
                       'Medical Education and Ethics'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                          <ChevronRight className="w-4 h-4 mr-2 text-blue-600 shrink-0 mt-0.5" />
                          {item}
                       </li>
                     ))}
                  </ul>
                  <p>
                    GBMN publishes several types of manuscripts: Original Research Articles, Systematic and Narrative Reviews, Clinical Case Studies, Short Communications, and Editorials.
                  </p>
               </div>
            </section>

            {/* Editorial Board Content */}
            <section id="editorial-board" className="prose prose-slate max-w-none">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-2 inline-block">Editorial Board</h2>
               
               <div className="mb-12">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tighter mb-6 flex items-center">
                    <Flag className="w-5 h-5 mr-3 text-red-600" />
                    Editor-in-Chief
                  </h3>
                  <div className="bg-slate-50 p-8 border border-slate-100 rounded-sm">
                    <p className="font-serif font-bold text-xl text-slate-900">Prof. Dr. KARLO PAGAVA</p>
                    <p className="text-sm text-slate-600 uppercase font-medium mt-1">Tbilisi State Medical University, Georgia</p>
                  </div>
               </div>

               <div className="space-y-12">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Editorial Advisory Board</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { name: 'Prof. David Tchkonia', inst: 'Cardiology, TSMU' },
                         { name: 'Dr. Lali Shanshiashvili', inst: 'Biochemistry, Beritashvili Center' },
                         { name: 'Prof. Nikoloz Kintraia', inst: 'Obstetrics & Gynecology' },
                         { name: 'Dr. Tamar Svanidze', inst: 'Neurology, Academic Hospital' }
                       ].map((admin, i) => (
                         <div key={i} className="border-l-2 border-slate-200 pl-6 py-2">
                           <p className="font-bold text-slate-900">{admin.name}</p>
                           <p className="text-xs text-slate-500 uppercase">{admin.inst}</p>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="p-8 border border-dashed border-gray-200 text-center rounded-sm">
                     <Users className="w-8 h-8 mx-auto mb-4 text-slate-300" />
                     <p className="text-sm text-slate-500 italic">
                       Our full list of international reviewers and associate editors is updated annually.
                       If you are interested in joining our reviewer pool, please contact the editorial office.
                     </p>
                  </div>
               </div>
            </section>
         </div>

         {/* Right Sidebar - Nav & Quick Info */}
         <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
               {/* Quick Nav Card */}
               <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">Navigation</h3>
                  <ul className="space-y-4">
                    <li><a href="#aims-scope" className="hover:text-blue-300 transition-colors flex items-center group">Aims & Scope <ChevronRight className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                    <li><a href="#editorial-board" className="hover:text-blue-300 transition-colors flex items-center group">Editorial Board <ChevronRight className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                    <li><a href="#indexing" className="hover:text-blue-300 transition-colors flex items-center group">Indexing Status <ChevronRight className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                  </ul>
               </div>

               {/* Publication Metrics */}
               <div className="border border-gray-100 p-8 rounded-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center">
                    <Scale className="w-4 h-4 mr-2 text-blue-600" />
                    Key Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Frequency</p>
                       <p className="text-sm font-bold text-slate-800">Biannual (2 issues per year)</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Peer Review</p>
                       <p className="text-sm font-bold text-slate-800">Double-Blind Peer Review</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Publication Fee</p>
                       <p className="text-sm font-bold text-slate-800">Article Processing Charge (APC) applies</p>
                    </div>
                  </div>
               </div>

               {/* Ethics Summary */}
               <div className="bg-blue-50 p-8 border border-blue-100 rounded-sm">
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Publication Ethics</h4>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    All manuscripts submitted to GBMN must adhere to the COPE (Committee on Publication Ethics) guidelines regarding research integrity, plagiarism, and redundant publication.
                  </p>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
