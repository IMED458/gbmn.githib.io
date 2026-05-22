/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, ShieldCheck, Database, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTICLES, ISSUES } from '../data';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const latestArticles = ARTICLES.slice(0, 3);
  const currentIssue = ISSUES.find(i => i.isCurrent);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f8fafc] overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-20 -left-20 text-[500px] font-bold text-slate-900 leading-none">GBMN</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 italic">
              Formerly Georgian Biomedical News
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-[1.1]">
              Georgian Biomedical and Medical Nexus
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
              An open-access biomedical and medical journal advancing scholarly communication from Georgia to the international scientific community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/submission" 
                className="bg-blue-700 text-white px-8 py-4 rounded-sm font-semibold hover:bg-blue-800 transition-all shadow-lg flex items-center group"
              >
                Submit Manuscript
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/archives" 
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-sm font-semibold hover:border-slate-400 transition-all flex items-center"
              >
                View Current Issue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Quick Access */}
      <section className="bg-white py-12 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 border-r border-gray-50 last:border-0">
               <ShieldCheck className="w-6 h-6 mx-auto mb-3 text-blue-600 opacity-60" />
               <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Peer Reviewed</p>
               <p className="text-xs text-slate-500 mt-1">Rigorous scientific evaluation</p>
            </div>
            <div className="text-center p-6 border-r border-gray-50 last:border-0">
               <BookOpen className="w-6 h-6 mx-auto mb-3 text-blue-600 opacity-60" />
               <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Open Access</p>
               <p className="text-xs text-slate-500 mt-1">Gold OA Publishing Model</p>
            </div>
            <div className="text-center p-6 border-r border-gray-50 last:border-0">
               <Database className="w-6 h-6 mx-auto mb-3 text-blue-600 opacity-60" />
               <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Rapid Indexing</p>
               <p className="text-xs text-slate-500 mt-1">Crossref, Google Scholar</p>
            </div>
            <div className="text-center p-6 last:border-0">
               <Award className="w-6 h-6 mx-auto mb-3 text-blue-600 opacity-60" />
               <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Legacy Title</p>
               <p className="text-xs text-slate-500 mt-1">Est. 2020 as GBN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Latest Articles */}
        <section className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Latest Research Articles</h2>
            <Link to="/articles" className="text-sm font-bold text-blue-700 hover:underline flex items-center">
              Browse All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-8">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Current Issue Card */}
          <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6 underline underline-offset-8">Current Issue</h3>
             <div className="flex items-start space-x-6">
                <div className="shrink-0 w-24 overflow-hidden rounded-sm bg-white shadow-inner">
                   {currentIssue?.coverImageUrl ? (
                     <img
                       src={currentIssue.coverImageUrl}
                       alt={currentIssue.coverImageAlt ?? `GBMN Volume ${currentIssue.volume}, Issue ${currentIssue.issue}`}
                       className="h-auto w-full"
                     />
                   ) : (
                     <div className="flex h-32 flex-col items-center justify-center border-l-4 border-blue-600">
                       <p className="text-slate-900 font-serif font-black text-2xl">GBMN</p>
                       <p className="text-slate-500 text-[10px] font-bold mt-1">2024</p>
                     </div>
                   )}
                </div>
                <div>
                   <p className="text-lg font-bold font-serif leading-tight mb-2">Volume 5, Issue 1</p>
                   {currentIssue?.coverCaption && (
                     <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">{currentIssue.coverCaption}</p>
                   )}
                   <p className="text-xs text-slate-400 mb-4 tracking-tighter">Published {currentIssue?.year}</p>
                   <Link to="/archives" className="text-xs font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-sm block text-center transition-colors">
                     Table of Contents
                   </Link>
                </div>
             </div>
          </div>

          {/* Aims & Scope Summary */}
          <div className="border border-gray-100 p-8 rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              Aims & Scope
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
              GBMN publishes original research, reviews, and clinical cases across the full spectrum of biomedical and clinical medicine, with particular interest in translational research and emerging global health challenges.
            </p>
            <Link to="/about" className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center">
              Full Statement
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Announcements / Updates */}
          <div className="bg-blue-50/50 p-8 rounded-sm border border-blue-100/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-blue-600" />
              Announcements
            </h3>
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">May 2024</p>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer">GBMN is now accepting submissions for our special issue on Genetic Medicine.</h4>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">April 2024</p>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer">Updated Author Guidelines for 2024 published.</h4>
              </div>
            </div>
          </div>

          {/* Indexing Partners */}
          <div className="p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Indexing</h3>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-10 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all text-[10px] font-black tracking-tighter">CROSSREF</div>
               <div className="h-10 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all text-[10px] font-black tracking-tighter">GOOGLE SCHOLAR</div>
               <div className="h-10 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all text-[10px] font-black tracking-tighter">ROAD</div>
               <div className="h-10 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all text-[10px] font-black tracking-tighter">PORTICO</div>
            </div>
          </div>
        </aside>
      </div>

      {/* For Authors Banner */}
      <section className="bg-slate-50 py-20 border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Users className="w-12 h-12 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Publish with Us</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
              We offer rapid publication, rigorous peer review, and high international visibility for your research. Our editorial team is committed to the highest standards of scientific integrity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/for-authors" className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-bold hover:shadow-md transition-all">
                  Author Guidelines
               </Link>
               <Link to="/policies/ethics" className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-bold hover:shadow-md transition-all">
                  Ethical Requirements
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
