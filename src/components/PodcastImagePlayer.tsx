import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, X } from "lucide-react";

interface PodcastImagePlayerProps {
  src: string;
  alt: string;
  audioUrl: string;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const PodcastImagePlayer = ({ src, alt, audioUrl }: PodcastImagePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setShowBar(true);
    }
    setIsPlaying(!isPlaying);
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setShowBar(false);
    setCurrentTime(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div className="float-right ml-8 mb-6 w-48 md:w-64 rounded-xl overflow-hidden shadow-md relative group">
        <img src={src} alt={alt} className="w-full h-auto" />
        <audio ref={audioRef} src={audioUrl} preload="none" />
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
            {isPlaying ? "Pause" : "Écouter l'émission"}
          </span>
        </button>
      </div>

      {/* Floating audio bar */}
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-2xl animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="shrink-0 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Lecture"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              )}
            </button>

            <span className="text-xs font-mono shrink-0 opacity-80">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="flex-1 h-2 bg-primary-foreground/20 rounded-full cursor-pointer relative group/bar"
            >
              <div
                className="h-full bg-primary-foreground rounded-full transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-foreground rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, marginLeft: "-6px" }}
              />
            </div>

            <Volume2 className="w-4 h-4 shrink-0 opacity-60" />

            <button
              onClick={handleClose}
              className="shrink-0 w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fermer le lecteur"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastImagePlayer;
