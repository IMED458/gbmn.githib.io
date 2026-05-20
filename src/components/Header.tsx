/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
    { name: 'Archives', href: '/archives' },
    { name: 'Policies', href: '/policies' },
    { name: 'For Authors', href: '/for-authors' },
    { name: 'Editorial Board', href: '/editorial-board' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar - Identity */}
      <div className="bg-slate-900 text-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-semibold uppercase tracking-wider">ISSN: 2720-8796</span>
            <span className="opacity-40">|</span>
            <span className="italic opacity-80">Formerly Georgian Biomedical News</span>
          </div>
          <div className="hidden md:flex space-x-4 font-medium uppercase tracking-tighter">
            <Link to="/submission" className="hover:text-blue-400 transition-colors">Submit Manuscript</Link>
            <Link to="/indexing" className="hover:text-blue-400 transition-colors">Indexing</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 h-24">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-sm group-hover:bg-blue-900 transition-colors">
              <span className="text-white font-bold text-xl tracking-tighter">GBMN</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-slate-900 leading-tight">
                Georgian Biomedical and Medical Nexus
              </h1>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-widest hidden md:block">
                Advancing Scholarly Communication in Georgia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-600 hover:text-blue-700 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link 
              to="/submission" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-sm flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Submit Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}><Search className="w-6 h-6 text-slate-600" /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex border-t border-gray-50 py-3">
          <ul className="flex space-x-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-blue-700 transition-colors uppercase tracking-tight">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-4 shadow-xl animate-in slide-in-from-top duration-200">
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Search by title, author, DOI, or keywords..." 
              className="flex-1 border-none focus:ring-0 text-lg py-2 text-slate-800 placeholder:text-gray-300"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white pt-24 px-6 overflow-y-auto">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-slate-900"
          >
            <X className="w-8 h-8" />
          </button>
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-semibold text-slate-900 block border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/submission" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-700 text-white w-full py-4 text-center block rounded-md font-bold text-lg mt-8"
              >
                Submit Manuscript
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
