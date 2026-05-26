import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { useI18n } from './i18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-6">
      <div className="glass p-10 rounded-xl glow-border relative z-10 w-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-600 text-xs font-bold uppercase tracking-tighter italic mb-6 flex items-center gap-2"
        >
          <Terminal size={14} /> 
          <span>{t.hero.overview}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-800 leading-tight"
        >
          {t.hero.nameLast} <span className="text-blue-600">{t.hero.nameFirst}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-600 font-mono text-xs tracking-widest uppercase mb-8 pb-4 border-b border-slate-200"
        >
          <p className="mb-2 font-bold">{t.hero.role}</p>
          <p className="flex items-center gap-2 text-slate-500"><GraduationCap size={14} /> {t.hero.institution}</p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-slate-600 leading-relaxed mb-10 max-w-2xl"
        >
          {t.hero.bio}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {t.hero.skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-blue-100 text-blue-700 border border-blue-200 text-[10px] rounded uppercase font-bold tracking-wide"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, mt: 40 }}
          animate={{ opacity: 1, mt: 40 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6 pt-8 mt-8 border-t border-slate-200 text-[10px] uppercase tracking-widest text-slate-500 font-medium"
        >
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2">
            <Mail size={14} /> {t.hero.email}
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
            <Github size={14} /> {t.hero.github}
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
            <Linkedin size={14} /> {t.hero.linkedin}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
