import React from 'react';
import { Navbar } from './lib/Navbar';
import { Hero } from './lib/Hero';
import { VideoGallery } from './lib/VideoGallery';
import { Publications } from './lib/Publications';
import { DynamicBackground } from './lib/Background';
import { I18nProvider, useI18n } from './lib/i18n';

function Portfolio() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen relative text-slate-900 selection:bg-blue-500 selection:text-white pb-20">
      <DynamicBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
          <Hero />
          <VideoGallery />
          <Publications />
        </main>
        
        <footer className="mt-20 py-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} {t.hero.nameLast} {t.hero.nameFirst} // {t.footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Portfolio />
    </I18nProvider>
  );
}
