import React from 'react';
import { Cpu, Globe } from 'lucide-react';
import { useI18n } from './i18n';

export function Navbar() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-800">
          <Cpu className="text-blue-600" size={24} />
          <span>{t.hero.nameLast.toUpperCase()}.ROOT</span>
        </div>
        
        <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-slate-500">
          <div className="hidden md:flex items-center gap-6">
            <a href="#video-showcase" className="hover:text-blue-600 transition-colors">{t.nav.showcase}</a>
            <a href="#publications" className="hover:text-blue-600 transition-colors">{t.nav.research}</a>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 hover:text-blue-600 transition-colors ml-4 pl-4 border-l border-slate-300"
          >
            <Globe size={14} />
            {t.nav.lang}
          </button>
        </div>
      </div>
    </nav>
  );
}
