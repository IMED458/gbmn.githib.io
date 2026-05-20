/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { History as HistoryIcon, Award, Quote, Milestone, BookOpen } from 'lucide-react';

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <HistoryIcon className="w-[800px] h-[800px] absolute -right-40 -top-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-4xl">
              <p className="text-blue-400 font-bold uppercase tracking-[0.4em] mb-6 text-sm">Legacy & Evolution</p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">Journal History</h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                Tracing the path from <span className="italic text-white">Georgian Biomedical News</span> to the <span className="text-blue-400 font-medium">Georgian Biomedical and Medical Nexus</span>.
              </p>
           </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
         <div className="space-y-20 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block"></div>

            {/* Event 1 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="lg:text-right">
                  <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg font-serif font-black text-2xl mb-4 shadow-xl">2020</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Founding of GBN</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    The journal was established as <span className="font-medium italic">Georgian Biomedical News</span> (GBN) with the mission to provide a platform for local researchers to publish standard biomedical findings.
                  </p>
               </div>
               <div className="hidden lg:block h-px bg-slate-100"></div>
            </div>

            {/* Event 2 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="hidden lg:block h-px bg-slate-100"></div>
               <div>
                  <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-serif font-black text-2xl mb-4 shadow-xl">2022</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">International Expansion</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    The editorial board expanded to include international advisors from Europe and the US, moving towards a double-blind peer-review standard and Gold Open Access.
                  </p>
               </div>
            </div>

            {/* Event 3 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="lg:text-right">
                  <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg font-serif font-black text-2xl mb-4 shadow-xl">2024</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Rebranding to GBMN</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    To reflect the broader inclusion of clinical medical research and its role as a regional scientific hub, the journal was renamed to <span className="font-bold">Georgian Biomedical and Medical Nexus</span>.
                  </p>
               </div>
               <div className="hidden lg:block h-px bg-slate-100"></div>
            </div>
         </div>

         <div className="mt-32 p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm italic text-center">
            <Quote className="w-8 h-8 text-blue-600 mx-auto mb-6 opacity-30" />
            <p className="text-xl text-slate-700 font-serif leading-relaxed max-w-2xl mx-auto mb-6">
              "The transition to Nexus signifies our commitment to connecting academic research with clinical impact, bridging the gap between Georgia and the global medical community."
            </p>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">— Prof. Karlo Pagava, Editor-in-Chief</p>
         </div>
      </div>
    </div>
  );
}
