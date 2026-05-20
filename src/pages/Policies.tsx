/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Scale, FileWarning, Fingerprint, BrainCircuit, RotateCcw, Unlock, Copyright, RefreshCcw } from 'lucide-react';

export default function Policies() {
  const policySections = [
    {
      id: 'peer-review',
      title: 'Peer Review Policy',
      icon: ShieldCheck,
      content: `Georgian Biomedical and Medical Nexus (GBMN) operates a double-blind peer-review system. This means that both the reviewer and author identities are concealed from each other throughout the review process. All submitted manuscripts are first evaluated by the Editorial Office for relevance to the journal's scope and compliance with structural requirements. Manuscripts passing the initial screening are assigned to at least two independent expert reviewers. The typical turnaround time for the first decision is 4-6 weeks.`
    },
    {
      id: 'ethics',
      title: 'Publication Ethics',
      icon: Scale,
      content: `The journal adheres to the COPE (Committee on Publication Ethics) Code of Conduct. We are committed to maintaining the highest ethical standards. Authors, reviewers, and editors must disclose any potential conflicts of interest. Fabrication, falsification, and data manipulation are strictly prohibited and will lead to immediate rejection or retraction.`
    },
    {
      id: 'plagiarism',
      title: 'Plagiarism Policy',
      icon: FileWarning,
      content: `All submitted manuscripts are screened for plagiarism using professional software (e.g., Turnitin/Crossref Similarity Check). GBMN has a zero-tolerance policy towards plagiarism, including self-plagiarism (redundant publication). If plagiarism is detected at any stage of the editorial process, the manuscript will be rejected, and the author's institution may be notified.`
    },
    {
      id: 'ai-use',
      title: 'AI Use Policy',
      icon: BrainCircuit,
      content: `Authors must disclose the use of generative AI tools (such as ChatGPT, Midjourney, etc.) in the writing or production of their work. AI tools cannot be listed as authors. If AI was used in data analysis, the specific methods and software versions must be clearly stated in the Methods section. The responsibility for the accuracy and integrity of the work lies solely with the human authors.`
    },
    {
      id: 'corrections',
      title: 'Corrections and Retractions',
      icon: RefreshCcw,
      content: `GBMN follows the ICMJE and COPE guidelines for corrections, retractions, and expressions of concern. Minor errors that do not affect the scientific validity of the work may be handled via a published Correction (Erratum). For more serious issues involving scientific misconduct or fundamental errors that invalidate the findings, the article will be retracted in accordance with established international protocols.`
    },
    {
      id: 'open-access',
      title: 'Open Access Policy',
      icon: Unlock,
      content: `This is a gold open access journal, which means all content is freely available without charge to the user or their institution. Users are allowed to read, download, copy, distribute, print, search, or link to the full texts of the articles in this journal without asking prior permission from the publisher or the author, provided the original work is properly cited.`
    },
    {
      id: 'licensing',
      title: 'Copyright and Licensing',
      icon: Copyright,
      content: `Articles are published under a Creative Commons Attribution 4.0 International (CC BY 4.0) license. Authors retain copyright of their work but grant the journal a non-exclusive license to publish the article. Under CC BY 4.0, others are permitted to share and adapt the work, even commercially, as long as appropriate credit is given.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Policy Header */}
      <section className="bg-slate-50 border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Editorial Policies</h1>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Our editorial and publication policies are designed to ensure scientific rigor, ethical integrity, and broad accessibility for all research published in the Georgian Biomedical and Medical Nexus.
              </p>
           </div>
        </div>
      </section>

      {/* Policies Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-4 lg:order-1">
           <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 ml-4">Section Index</p>
              {policySections.map(section => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="flex items-center space-x-4 px-4 py-3 rounded-sm text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all border-l-2 border-transparent hover:border-blue-600 group"
                >
                  <section.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span>{section.title}</span>
                </a>
              ))}
           </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-8 lg:order-2 space-y-24">
           {policySections.map(section => (
             <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                   <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-sm text-blue-400">
                      <section.icon className="w-6 h-6" />
                   </div>
                   <h2 className="text-2xl font-serif font-bold text-slate-900">{section.title}</h2>
                </div>
                <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed font-light">
                   <p className="whitespace-pre-line">{section.content}</p>
                </div>
                <div className="mt-12 h-px bg-gray-100"></div>
             </section>
           ))}
           
           <div className="bg-slate-900 p-12 text-center rounded-sm">
              <RotateCcw className="w-10 h-10 text-blue-400 mx-auto mb-6" />
              <h3 className="text-white font-bold text-xl mb-4 font-serif">Policy Updates</h3>
              <p className="text-slate-400 text-sm max-w-lg mx-auto">
                These policies are reviewed annually by the Editorial Board to stay aligned with evolving international standards for scholarly publishing. Last updated: May 2024.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
