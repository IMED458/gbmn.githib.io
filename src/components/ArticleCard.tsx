/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { FileText, ChevronRight, Calendar, User } from 'lucide-react';
import { Article } from '../types';
import { formatDate } from '../lib/utils';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group bg-white p-6 md:p-8 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 flex flex-col h-full rounded-sm">
      {article.imageUrl && (
        <Link
          to={`/article/${article.slug}`}
          className="mb-6 block aspect-[16/9] overflow-hidden rounded-sm bg-slate-100"
          aria-label={article.title}
        >
          <img
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 uppercase tracking-tight">
          {article.type}
        </span>
        <span className="text-[10px] md:text-xs text-gray-500 font-mono">
          DOI: {article.doi}
        </span>
      </div>

      <Link to={`/article/${article.slug}`} className="flex-1">
        <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-3 leading-tight">
          {article.title}
        </h3>
      </Link>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-xs text-slate-500">
          <User className="w-3.5 h-3.5 mr-1.5 opacity-60" />
          <span className="font-medium uppercase tracking-tight truncate">
            {article.authors.map(a => a.name).join(', ')}
          </span>
        </div>
        <div className="flex items-center text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5 mr-1.5 opacity-60" />
          <span>Published in Volume {article.volume}, Issue {article.issue} ({article.year})</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex space-x-3">
          <Link 
            to={`/article/${article.slug}`}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center group/btn uppercase tracking-wider"
          >
            Full Text
            <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
          <a 
            href={article.pdfUrl}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center group/pdf uppercase tracking-wider"
          >
            <FileText className="w-3.5 h-3.5 mr-1" />
            PDF
          </a>
        </div>
        <span className="text-[10px] italic text-slate-400">Received: {formatDate(article.publishedDate)}</span>
      </div>
    </article>
  );
}
