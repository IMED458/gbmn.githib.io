/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Archives from './pages/Archives';
import Search from './pages/Search';
import About from './pages/About';
import Policies from './pages/Policies';
import ForAuthors from './pages/ForAuthors';
import Contact from './pages/Contact';
import Submission from './pages/Submission';
import Indexing from './pages/Indexing';
import History from './pages/History';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/articles" element={<Search />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/archives/:issueId" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/editorial-board" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policies/:policyId" element={<Policies />} />
          <Route path="/for-authors" element={<ForAuthors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/indexing" element={<Indexing />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
