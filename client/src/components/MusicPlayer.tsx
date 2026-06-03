import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

interface MusicPlayerProps {
  songs: Song[];
}

export default function MusicPlayer({ songs }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex, songs.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const nextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setIsPlaying(true);
    }
  };

  const prevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <audio
        ref={audioRef}
        src={currentSong?.src}
        crossOrigin="anonymous"
      />

      <div className="elegant-card p-8 space-y-6">
        {/* Album Cover */}
        <div className="relative group">
          <div className="aspect-square rounded-lg overflow-hidden border-2 border-purple-600 shadow-2xl shadow-purple-500/30">
            <img
              src={currentSong?.cover}
              alt={currentSong?.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Song Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-playfair font-bold text-white">
            {currentSong?.title}
          </h3>
          <p className="text-sm text-gray-400 font-montserrat">
            {currentSong?.artist}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-500 font-montserrat">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSong}
            disabled={currentSongIndex === 0}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="text-gray-400">⏮</span>
          </button>

          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>

          <button
            onClick={nextSong}
            disabled={currentSongIndex === songs.length - 1}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="text-gray-400">⏭</span>
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
        </div>

        {/* Playlist */}
        {songs.length > 1 && (
          <div className="pt-4 border-t border-gray-700 space-y-2">
            <p className="text-xs text-gray-500 font-montserrat uppercase tracking-widest">Playlist</p>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {songs.map((song, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(true);
                  }}
                  className={`w-full text-left p-2 rounded transition-colors text-sm ${
                    index === currentSongIndex
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-600'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="font-montserrat font-medium">{song.title}</div>
                  <div className="text-xs text-gray-500">{song.artist}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
