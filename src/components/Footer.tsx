/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-slate-900 font-bold text-lg">G</span>
              </div>
              <h2 className="text-lg font-serif font-bold text-white leading-tight">GBMN</h2>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Georgian Biomedical and Medical Nexus is a peer-reviewed, open-access medical journal dedicated to advancing scientific discourse in the Caucasus region and beyond.
            </p>
            <div className="pt-4 border-t border-slate-900">
               <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-1">ISSN (Online)</p>
               <p className="text-blue-400 font-mono">2720-8796</p>
               <p className="text-[10px] text-slate-600 mt-1 italic">New ISSN Pending</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Journal Section</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center group">About the Journal</Link></li>
              <li><Link to="/editorial-board" className="hover:text-blue-400 transition-colors">Editorial Board</Link></li>
              <li><Link to="/archives" className="hover:text-blue-400 transition-colors">Archives</Link></li>
              <li><Link to="/indexing" className="hover:text-blue-400 transition-colors">Indexing & Abstracting</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Publisher Information</Link></li>
              <li><Link to="/history" className="hover:text-blue-400 transition-colors text-slate-500">Journal History</Link></li>
            </ul>
          </div>

          {/* Policies & Guidelines */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Policies</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/policies/peer-review" className="hover:text-blue-400 transition-colors">Peer Review Policy</Link></li>
              <li><Link to="/policies/ethics" className="hover:text-blue-400 transition-colors">Publication Ethics</Link></li>
              <li><Link to="/for-authors" className="hover:text-blue-400 transition-colors">Author Guidelines</Link></li>
              <li><Link to="/policies/open-access" className="hover:text-blue-400 transition-colors">Open Access Policy</Link></li>
              <li><Link to="/policies/licensing" className="hover:text-blue-400 transition-colors">Copyright & Licensing</Link></li>
              <li><Link to="/policies/plagiarism" className="hover:text-blue-400 transition-colors">Plagiarism Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-blue-500" />
                <span>+995 555 760 640</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-blue-500" />
                <span>contact@gbmn.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
                <span className="opacity-80">Tbilisi, Georgia</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/submission" className="inline-flex items-center space-x-2 text-sm bg-blue-700 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors">
                <span>Submit Manuscript</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Georgian Biomedical and Medical Nexus. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
          <p className="italic">Formerly Georgian Biomedical News</p>
        </div>
      </div>
    </footer>
  );
}
