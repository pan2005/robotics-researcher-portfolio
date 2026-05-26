import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Upload } from 'lucide-react';
import { useI18n } from './i18n';

interface VideoFile {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'local' | 'url';
  date: string;
}

export function VideoGallery() {
  const { t } = useI18n();
  const [videos, setVideos] = useState<VideoFile[]>([]);
  const [activeVideo, setActiveVideo] = useState<VideoFile | null>(null);
  
  useEffect(() => {
    // Initial sync
    setVideos(t.showcase.videos as VideoFile[]);
    setActiveVideo(t.showcase.videos[0] as VideoFile);
  }, [t.showcase.videos]);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newVideo: VideoFile = {
        id: `local-${Date.now()}`,
        title: file.name,
        description: "Local video preview",
        url: URL.createObjectURL(file),
        type: 'local',
        date: new Date().toISOString().split('T')[0]
      };
      setVideos([newVideo, ...videos]);
      setActiveVideo(newVideo);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-6" id="video-showcase">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            {t.showcase.title}
          </h2>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest block mt-1">
            {t.showcase.subtitle}
          </span>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] px-4 py-2 rounded-full font-bold transition-colors uppercase tracking-widest"
        >
          <Upload size={14} />
          {t.showcase.addVideo}
        </button>
        <input 
          type="file" 
          accept="video/*" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileUpload} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Player Area */}
        <div className="lg:col-span-8 relative group rounded-xl overflow-hidden glass aspect-video flex flex-col justify-end shadow-sm">
          <AnimatePresence mode="popLayout">
            {activeVideo ? (
              <motion.video
                key={activeVideo.id}
                ref={videoRef}
                src={activeVideo.url}
                className="absolute inset-0 w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                controls={false}
                autoPlay
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-mono text-slate-400 text-xs uppercase tracking-widest video-placeholder">
                {t.showcase.noSignal}
              </div>
            )}
          </AnimatePresence>

          {/* Player Chrome */}
          <div className="relative z-10 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 pt-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <h3 className="font-bold text-white text-sm">{activeVideo?.title || t.showcase.noSignal}</h3>
              <p className="text-[11px] text-slate-300 mt-1">{activeVideo?.description}</p>
            </div>
            {activeVideo && (
              <button 
                onClick={togglePlay}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg border-2 border-white/20"
              >
                {isPlaying ? <Pause fill="currentColor" size={16} /> : <Play fill="currentColor" size={16} className="ml-1" />}
              </button>
            )}
          </div>
          
          {/* Hardware visual framing */}
          {isPlaying && (
            <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-widest text-red-500 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse border border-white/50"></span>
              {t.showcase.rec}
            </div>
          )}
        </div>

        {/* Video Playlist */}
        <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto pr-2 max-h-[600px] custom-scrollbar">
          {videos.map((vid, idx) => (
            <motion.div
              layoutId={`video-item-${vid.id}`}
              onClick={() => {
                setActiveVideo(vid);
                setIsPlaying(true);
              }}
              key={vid.id}
              className={`p-4 rounded-xl flex flex-col transition-all cursor-pointer ${
                activeVideo?.id === vid.id 
                  ? 'glass border-l-4 border-l-blue-600 tracking-tight bg-white/80'
                  : 'glass opacity-80 hover:opacity-100 hover:bg-white/90 border border-slate-200'
              }`}
            >
              <div className="text-[9px] text-blue-600 font-bold uppercase mb-1">{vid.date}</div>
              <h4 className="text-slate-800 font-bold text-sm mb-1">{vid.title}</h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">{vid.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
