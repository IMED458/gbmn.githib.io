/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Database, Search, Award, Globe, Link as LinkIcon } from 'lucide-react';

export default function Indexing() {
  const partners = [
    { name: 'Crossref', desc: 'All articles are assigned a unique Digital Object Identifier (DOI).', status: 'Active' },
    { name: 'Google Scholar', desc: 'Full indexing of all research outputs and citations.', status: 'Active' },
    { name: 'ROAD', desc: 'Directory of Open Access Scholarly Resources.', status: 'Active' },
    { name: 'DOAJ', desc: 'Directory of Open Access Journals.', status: 'Pending Application' },
    { name: 'Scopus', desc: 'Elsevier bibliographic database.', status: 'Reviewing for Indexing' },
    { name: 'PubMed Central', desc: 'National Library of Medicine archival platform.', status: 'Submission in Progress' },
    { name: 'Portico', desc: 'Digital preservation service for continuous access.', status: 'Active' },
    { name: 'Sherpa Romeo', desc: 'Open Access copyright and self-archiving policies.', status: 'Active' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Indexing & Metadata</h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                We ensure that your research is discoverable, permanent, and integrated into the global scholarly ecosystem.
              </p>
           </div>
           <div className="shrink-0 w-48 h-48 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <Database className="w-24 h-24 text-blue-500 opacity-20" />
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-sm flex flex-col">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="font-black text-slate-900 tracking-tighter uppercase">{p.name}</h3>
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {p.status}
                    </span>
                 </div>
                 <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1 italic">{p.desc}</p>
                 <div className="pt-4 border-t border-gray-50 flex items-center text-[10px] uppercase font-bold text-blue-700">
                    <LinkIcon className="w-3 h-3 mr-1" />
                    Archive details
                 </div>
              </div>
            ))}
         </div>

         <div className="mt-24 p-12 bg-slate-50 border border-slate-200 rounded-lg text-center">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Metadata Standards</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protocol</p>
                  <p className="text-sm font-medium text-slate-700">OAI-PMH v2.0</p>
               </div>
               <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Format</p>
                  <p className="text-sm font-medium text-slate-700">Dublin Core, JATS XML</p>
               </div>
               <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Identifiers</p>
                  <p className="text-sm font-medium text-slate-700">DOI, ORCID, ISSN</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
