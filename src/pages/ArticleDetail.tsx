/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { FileText, Download, Quote, Calendar, User, Eye, Bookmark, Share2 } from 'lucide-react';
import { ARTICLES } from '../data';
import { formatDate } from '../lib/utils';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/articles" className="text-blue-600 hover:underline mt-4 block">Back to articles</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header & Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Metadata Top */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                {article.type}
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest border border-blue-100 italic">
                In: GBMN Volume {article.volume}, Issue {article.issue} ({article.year})
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              {article.title}
            </h1>

            <div className="space-y-4 pt-4 border-t border-gray-100">
               <div className="flex flex-wrap gap-x-6 gap-y-3">
                 {article.authors.map((author, index) => (
                   <div key={index} className="flex flex-col">
                      <span className="font-bold text-slate-900 uppercase tracking-tight flex items-center">
                        <User className="w-3.5 h-3.5 mr-1.5 opacity-40" />
                        {author.name}
                      </span>
                      <span className="text-xs text-slate-500 italic ml-5 underline decoration-dotted decoration-slate-300">
                        {author.affiliation}
                      </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* DOI & Dates Bar */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-6 bg-slate-50 border border-slate-100 rounded-sm mb-12 text-sm">
             <div className="flex items-center">
                <span className="font-bold text-slate-400 uppercase tracking-tighter mr-2">DOI:</span>
                <span className="font-mono text-blue-700 font-medium select-all">{article.doi}</span>
             </div>
             <div className="flex items-center text-slate-500">
                <Calendar className="w-4 h-4 mr-2 opacity-60" />
                <span>Received: Jan 2024</span>
                <span className="mx-2">|</span>
                <span>Published: {formatDate(article.publishedDate)}</span>
             </div>
          </div>

          {/* Abstract */}
          <section className="mb-16">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center border-b-2 border-slate-900 pb-2 inline-block">
              Abstract
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              {article.abstract}
            </p>
          </section>

          {/* Keywords */}
          <section className="mb-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-sm border border-gray-200">
                  {kw}
                </span>
              ))}
            </div>
          </section>

          {/* Full Text Placeholder */}
          <section className="mb-16 p-12 bg-slate-50 border-2 border-dashed border-slate-200 text-center rounded-lg">
             <FileText className="w-12 h-12 mx-auto mb-4 text-slate-300" />
             <h3 className="text-lg font-bold text-slate-900 mb-2">Full Text Content</h3>
             <p className="text-slate-500 mb-6 max-w-md mx-auto">
               The full text for this article is available in PDF format via the button in the sidebar or below. HTML full text is currently undergoing indexing.
             </p>
             <button className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest text-xs">
                Open Full Text (HTML)
             </button>
          </section>

          {/* References */}
          <section className="mb-16">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 flex items-center border-b-2 border-slate-900 pb-2 inline-block">
              References
            </h2>
            <ol className="space-y-6 list-decimal list-inside text-sm text-slate-600 leading-relaxed marker:font-bold marker:text-slate-400">
              {article.references.map((ref, i) => (
                <li key={i} className="pl-2">{ref}</li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            
            {/* Action Card */}
            <div className="bg-white border-2 border-slate-900 p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] rounded-sm">
               <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Article Access</h3>
               <div className="space-y-4">
                  <a 
                    href={article.pdfUrl}
                    className="w-full bg-slate-900 text-white flex items-center justify-center py-4 px-6 font-bold hover:bg-blue-700 transition-all group rounded-sm"
                  >
                    <Download className="w-5 h-5 mr-3 group-hover:translate-y-0.5 transition-transform" />
                    DOWNLOAD PDF
                  </a>
                  <button className="w-full bg-white text-slate-900 border-2 border-slate-900 flex items-center justify-center py-4 px-6 font-bold hover:bg-slate-50 transition-all rounded-sm">
                    <Quote className="w-5 h-5 mr-3 text-blue-600" />
                    HOW TO CITE
                  </button>
               </div>
               
               <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-slate-500">
                  <div className="flex space-x-6">
                    <button className="hover:text-blue-600 transition-colors flex flex-col items-center"><Bookmark className="w-5 h-5" /><span className="text-[10px] mt-1 font-bold">SAVE</span></button>
                    <button className="hover:text-blue-600 transition-colors flex flex-col items-center"><Share2 className="w-5 h-5" /><span className="text-[10px] mt-1 font-bold">SHARE</span></button>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">VIEWS</span>
                     <span className="text-lg font-mono font-bold text-slate-900">1,248</span>
                  </div>
               </div>
            </div>

            {/* Publication Info */}
            <div className="bg-slate-50 p-8 border border-slate-100 rounded-sm">
               <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Publication Detail</h4>
               <ul className="space-y-5 text-sm">
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                     <span className="font-bold text-slate-900 italic">Journal</span>
                     <span className="text-slate-600 font-medium">GBMN</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                     <span className="font-bold text-slate-900 italic">Volume / Issue</span>
                     <span className="text-slate-600 font-medium">Vol {article.volume}, Issue {article.issue}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                     <span className="font-bold text-slate-900 italic">Pages</span>
                     <span className="text-slate-600 font-medium">{article.pages}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                     <span className="font-bold text-slate-900 italic">Specialty</span>
                     <span className="text-slate-600 font-medium">{article.specialty}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                     <span className="font-bold text-slate-900 italic">Type</span>
                     <span className="text-slate-600 font-medium">{article.type}</span>
                  </li>
               </ul>
            </div>

            {/* Citation Meta Info (Invisible or Small) */}
            <div className="px-8 text-[10px] text-slate-400 italic leading-snug">
               Scholarly Metadata: {article.doi} | ISSN: 2720-8796 | © {article.year} GBMN. Crossref Indexed.
            </div>
          </div>
        </aside>
      </div>

      {/* Suggested Articles */}
      <section className="bg-slate-50 py-24 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-12">Related Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map(a => (
                 <Link key={a.id} to={`/article/${a.slug}`} className="group bg-white p-6 border border-gray-100 hover:shadow-lg transition-all rounded-sm">
                    <span className="text-[10px] font-bold text-blue-600 uppercase mb-2 block">{a.type}</span>
                    <h4 className="font-bold font-serif text-slate-900 group-hover:text-blue-700 mb-4 line-clamp-2">{a.title}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">{a.authors[0].name}, et al.</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
