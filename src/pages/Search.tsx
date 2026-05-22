/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter, X, ChevronRight, FileText } from 'lucide-react';
import { ARTICLES } from '../data';
import ArticleCard from '../components/ArticleCard';
import { cn } from '../lib/utils';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filterType, setFilterType] = useState<string>('All');
  const [filterSpecialty, setFilterSpecialty] = useState<string>('All');

  const specialties = useMemo(() => ['All', ...new Set(ARTICLES.map(a => a.specialty).filter(Boolean) as string[])], []);
  const articleTypes = useMemo(() => ['All', ...new Set(ARTICLES.map(a => a.type))], []);

  const results = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesQuery = !query || 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.authors.some(a => a.name.toLowerCase().includes(query.toLowerCase())) ||
        article.abstract.toLowerCase().includes(query.toLowerCase()) ||
        article.doi.toLowerCase().includes(query.toLowerCase());
      
      const matchesType = filterType === 'All' || article.type === filterType;
      const matchesSpecialty = filterSpecialty === 'All' || article.specialty === filterSpecialty;

      return matchesQuery && matchesType && matchesSpecialty;
    });
  }, [query, filterType, filterSpecialty]);

  return (
    <div className="bg-white min-h-screen">
      {/* Search Header */}
      <section className="bg-slate-50 border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8">Search Publications</h1>
           <div className="max-w-4xl flex items-center gap-4">
              <div className="relative flex-1">
                 <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                 <input 
                    type="text"
                    value={query}
                    onChange={(e) => setSearchParams({ q: e.target.value })}
                    placeholder="Search by keyword, author, title, or DOI..."
                    className="w-full pl-16 pr-12 py-5 text-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg shadow-sm"
                 />
                 {query && (
                   <button 
                     onClick={() => setSearchParams({ q: '' })}
                     className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                   >
                     <X className="w-5 h-5" />
                   </button>
                 )}
              </div>
           </div>
        </div>
      </section>

      {/* Results & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <aside className="space-y-10">
           <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-2" />
                Refine Results
              </h3>
              
              <div className="space-y-8">
                 <div>
                    <label className="block text-xs font-bold text-slate-900 mb-3 uppercase tracking-tight">Article Type</label>
                    <div className="space-y-2">
                       {articleTypes.map(type => (
                         <button 
                           key={type}
                           onClick={() => setFilterType(type)}
                           className={cn(
                             "w-full text-left px-4 py-2 text-sm rounded-sm transition-all border",
                             filterType === type 
                               ? "bg-blue-700 text-white border-blue-700 font-bold" 
                               : "bg-white text-slate-600 border-gray-100 hover:border-gray-300"
                           )}
                         >
                           {type}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold text-slate-900 mb-3 uppercase tracking-tight">Specialty</label>
                    <div className="space-y-2">
                       {specialties.map(spec => (
                         <button 
                           key={spec}
                           onClick={() => setFilterSpecialty(spec)}
                           className={cn(
                             "w-full text-left px-4 py-2 text-sm rounded-sm transition-all border",
                             filterSpecialty === spec 
                               ? "bg-blue-700 text-white border-blue-700 font-bold" 
                               : "bg-white text-slate-600 border-gray-100 hover:border-gray-300"
                           )}
                         >
                           {spec}
                         </button>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-6 bg-slate-900 rounded-sm text-white">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 italic">Advanced Search</h4>
              <p className="text-[10px] leading-relaxed opacity-70 mb-4">
                Use Boolean operators (AND, OR, NOT) for complex bibliographic queries.
              </p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors rounded-sm">
                 LEARN MORE
              </button>
           </div>
        </aside>

        {/* Results List */}
        <div className="lg:col-span-3">
           <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <p className="text-sm text-slate-500">
                 Showing <span className="font-bold text-slate-900">{results.length}</span> results 
                 {query && <span> for "<span className="italic font-medium">{query}</span>"</span>}
              </p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                 Sort by: Relevance
              </div>
           </div>

           {results.length > 0 ? (
             <div className="space-y-8">
               {results.map((article, index) => (
                 <ArticleCard key={article.id} article={article} imageSide={index % 2 === 0 ? 'left' : 'right'} />
               ))}
             </div>
           ) : (
             <div className="text-center py-20 px-8 bg-gray-50 border-2 border-dashed border-gray-100 rounded-xl">
                <FileText className="w-16 h-16 mx-auto mb-6 text-gray-200" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-500">Try adjusting your search terms or removing filters.</p>
                <button 
                  onClick={() => {
                    setFilterType('All');
                    setFilterSpecialty('All');
                    setSearchParams({});
                  }}
                  className="mt-6 text-blue-700 font-bold hover:underline"
                >
                  Clear all filters
                </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
