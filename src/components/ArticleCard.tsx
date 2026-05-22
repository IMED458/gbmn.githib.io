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
  imageSide?: 'left' | 'right';
}

export default function ArticleCard({ article, imageSide = 'left' }: ArticleCardProps) {
  const hasImage = Boolean(article.imageUrl);
  const image = hasImage ? (
    <Link
      to={`/article/${article.slug}`}
      className="block aspect-[16/9] w-56 max-w-full overflow-hidden rounded-sm bg-slate-100 sm:w-48 lg:w-56 xl:w-64 shrink-0"
      aria-label={article.title}
    >
      <img
        src={article.imageUrl}
        alt={article.imageAlt ?? article.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  ) : null;

  return (
    <article className="group bg-white p-6 md:p-8 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 rounded-sm">
      <div className={`flex flex-col gap-6 ${hasImage ? 'sm:items-start' : ''} ${imageSide === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        {image}

        <div className={`flex min-w-0 flex-1 flex-col ${imageSide === 'right' ? 'sm:text-right sm:items-end' : ''}`}>
          <div className={`flex flex-wrap items-center gap-3 mb-4 ${imageSide === 'right' ? 'sm:justify-end' : 'justify-between'}`}>
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

          <div className={`space-y-2 mb-6 ${imageSide === 'right' ? 'sm:ml-auto' : ''}`}>
            <div className={`flex items-center text-xs text-slate-500 ${imageSide === 'right' ? 'sm:justify-end' : ''}`}>
              <User className="w-3.5 h-3.5 mr-1.5 opacity-60 shrink-0" />
              <span className="font-medium uppercase tracking-tight truncate">
                {article.authors.map(a => a.name).join(', ')}
              </span>
            </div>
            <div className={`flex items-center text-xs text-slate-500 ${imageSide === 'right' ? 'sm:justify-end' : ''}`}>
              <Calendar className="w-3.5 h-3.5 mr-1.5 opacity-60 shrink-0" />
              <span>Published in Volume {article.volume}, Issue {article.issue} ({article.year})</span>
            </div>
          </div>

          <div className={`flex w-full flex-col gap-3 pt-4 border-t border-gray-50 sm:flex-row sm:items-center sm:justify-between ${imageSide === 'right' ? 'sm:flex-row-reverse' : ''}`}>
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
        </div>
      </div>
    </article>
  );
}
