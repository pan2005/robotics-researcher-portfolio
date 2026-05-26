import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from './i18n';

export function Publications() {
  const { t } = useI18n();

  return (
    <section className="py-6" id="publications">
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-800">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          {t.publications.title}
        </h2>
        <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">
          {t.publications.subtitle}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {t.publications.list.map((pub, idx) => (
          <div 
            key={idx}
            className="group relative p-6 glass rounded-xl flex flex-col hover:border-blue-400 hover:shadow-lg transition-all border-dashed border-2 border-blue-200 bg-white/50"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-slate-800 font-bold text-sm leading-tight pr-8">{pub.title}</h4>
              <a 
                href={pub.link} 
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                target="_blank" 
                rel="noreferrer"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
            
            <p className="text-[11px] text-slate-600 mb-4">{pub.authors}</p>
            
            <div className="mt-auto flex items-center gap-2">
              <span className="text-[9px] text-blue-600 font-bold uppercase">{pub.conference}</span>
              {pub.tag && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 border border-blue-200 text-[9px] rounded uppercase ml-auto">
                  {pub.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
