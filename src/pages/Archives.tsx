/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { History, ChevronRight, FileText } from 'lucide-react';
import { ISSUES, ARTICLES } from '../data';

export default function Archives() {
  // Group issues by year
  const years = Array.from(new Set(ISSUES.map(i => i.year))).sort((a, b) => b - a);
  const legacyCovers = [
    { src: 'images/issues/issue-n1.jpg', alt: 'GBMN first edition cover' },
    { src: 'images/issues/issue-n2.png', alt: 'GBMN second edition cover' },
    { src: 'images/issues/issue-n3-4.jpg', alt: 'Issues 3 and 4 cover' },
    { src: 'images/issues/issue-n5.jpg', alt: 'GBMN fifth edition cover' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Archive Header */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
              <div className="flex items-center space-x-3 mb-6">
                 <History className="w-8 h-8 text-blue-400" />
                 <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Journal Archives</h1>
              </div>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Explore the complete publication history of standard research and clinical studies. Including historical content from our former title, <span className="italic text-white">Georgian Biomedical News</span>.
              </p>
           </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
           <h2 className="text-2xl font-serif font-bold text-slate-900 mb-12 border-b border-gray-100 pb-4 flex items-center">
             Full Collection
           </h2>

           <div className="space-y-12">
             {years.map(year => (
               <div key={year} className="group">
                  <div className="flex items-center space-x-4 mb-8">
                     <span className="text-4xl font-serif font-black text-slate-200 group-hover:text-blue-100 transition-colors">{year}</span>
                     <div className="h-px bg-gray-100 flex-1"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ISSUES.filter(i => i.year === year).map((issue, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-8 hover:border-blue-200 hover:shadow-lg transition-all rounded-sm flex flex-col relative overflow-hidden">
                        {issue.isCurrent && (
                          <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-bold px-3 py-1 flex items-center">
                            LATEST ISSUE
                          </div>
                        )}
                        {issue.coverImageUrl && (
                          <div className="mb-6 flex items-start gap-5">
                            <div className="w-24 shrink-0 overflow-hidden rounded-sm border border-gray-100 bg-slate-50 shadow-sm">
                              <img
                                src={issue.coverImageUrl}
                                alt={issue.coverImageAlt ?? `GBMN Volume ${issue.volume}, Issue ${issue.issue}`}
                                loading="lazy"
                                className="h-auto w-full"
                              />
                            </div>
                            {issue.coverCaption && (
                              <div className="pt-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                                {issue.coverCaption}
                              </div>
                            )}
                          </div>
                        )}
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">Volume {issue.volume}, Issue {issue.issue}</h3>
                        <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest font-semibold">{issue.isCurrent ? 'Current Publication' : 'Archived Issue'}</p>
                        
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                           <span className="text-xs font-mono text-slate-400">{issue.articles.length} Articles</span>
                           <Link to={`/archives/v${issue.volume}-i${issue.issue}`} className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center group/link">
                             View Issue
                             <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
             ))}
           </div>

           {/* Legacy Archive Section */}
           <div className="mt-24 p-12 bg-slate-50 border border-slate-200 rounded-sm">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                   <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">HISTORICAL ARCHIVE</div>
                   <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Georgian Biomedical News (2020-2023)</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6">
                     Access historical volumes and issues published under the original journal title. We maintain full digital preservation of all back issues for academic continuity.
                   </p>
                   <button className="bg-white border-2 border-slate-900 text-slate-900 px-6 py-2.5 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all rounded-sm uppercase tracking-widest">
                      Explore Historical Back-Issues
                   </button>
                </div>
                <div className="grid w-full grid-cols-4 gap-3 md:w-64">
                  {legacyCovers.map(cover => (
                    <div key={cover.src} className="overflow-hidden rounded-sm border-4 border-white bg-slate-200 shadow-lg">
                      <img src={cover.src} alt={cover.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
           <div className="sticky top-32 space-y-12">
              <div className="border-l-4 border-blue-600 pl-8 py-2">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Indexing Status</h3>
                 <p className="text-xs text-slate-500 leading-relaxed">
                   All articles in our archives are assigned unique DOIs through Crossref and are indexed in major scholarly databases to ensure permanent findability and citation tracking.
                 </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-sm">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Special Collections
                 </h3>
                 <ul className="space-y-4">
                   {['COVID-19 Post-Pandemic Studies', 'Oncology Research', 'Vascular Medicine Highlights'].map((item, i) => (
                     <li key={i}>
                       <Link to="/search" className="text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors flex items-center">
                          <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                          {item}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="p-8 border border-gray-100 italic text-xs text-slate-400 leading-relaxed">
                Contact the editorial office for hard-copy requests or volume institutional subscriptions.
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
