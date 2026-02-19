import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2 } from 'lucide-react';
import bgMusic from '../assets/music/Song.mp3';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Optional: Auto-play on interaction if desired, but browser policies restrict this.
        // user must click to play usually.
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <audio ref={audioRef} loop src={bgMusic} onError={(e) => console.error("Audio error:", e)} />
            <button
                onClick={togglePlay}
                className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-pink-100 transition-all duration-300 border border-pink-200 group"
            >
                <div className={`relative ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    {isPlaying ? <Volume2 className="text-pink-500 w-6 h-6" /> : <Music className="text-gray-400 w-6 h-6" />}
                </div>
                {!isPlaying && (
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-lg text-xs font-medium text-pink-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Play Music
                    </span>
                )}
            </button>
            <style>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default MusicPlayer;
