import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface PodcastImagePlayerProps {
  src: string;
  alt: string;
  audioUrl: string;
}

const PodcastImagePlayer = ({ src, alt, audioUrl }: PodcastImagePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="float-right ml-8 mb-6 w-48 md:w-64 rounded-xl overflow-hidden shadow-md relative group">
      <img src={src} alt={alt} className="w-full h-auto" />
      <audio ref={audioRef} src={audioUrl} onEnded={handleEnded} preload="none" />
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300 cursor-pointer ${
          isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-label={isPlaying ? "Mettre en pause" : "Écouter l'émission"}
      >
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg mb-2">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
          )}
        </div>
        <span className="text-white text-sm font-semibold">
          {isPlaying ? "En cours..." : "Écouter l'émission"}
        </span>
      </button>
    </div>
  );
};

export default PodcastImagePlayer;
