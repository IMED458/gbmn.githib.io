/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Author {
  name: string;
  affiliation?: string;
  email?: string;
}

export type ArticleType = 'Review Article' | 'Original Research' | 'Clinical Case' | 'Editorial' | 'Short Communication';

export interface Article {
  id: string;
  slug: string;
  title: string;
  authors: Author[];
  type: ArticleType;
  abstract: string;
  keywords: string[];
  publishedDate: string;
  doi: string;
  volume: number;
  issue: number;
  year: number;
  pages: string;
  pdfUrl: string;
  references: string[];
  specialty?: string;
}

export interface Issue {
  volume: number;
  issue: number;
  year: number;
  isCurrent?: boolean;
  articles: string[]; // Array of article IDs
}
