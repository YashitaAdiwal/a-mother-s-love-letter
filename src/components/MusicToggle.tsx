import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function MusicToggle({ playing, setPlaying }: { playing: boolean; setPlaying: (v: boolean) => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3");
      a.loop = true;
      a.volume = 0.4;
      audioRef.current = a;
    }
    if (playing) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [playing]);

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => setPlaying(!playing)}
      className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-xl shadow-soft backdrop-blur-md hover:scale-110 transition-transform"
      aria-label="Toggle music"
    >
      {playing ? "🎶" : "🔇"}
    </motion.button>
  );
}

export function useAutoPlay(): [boolean, (v: boolean) => void] {
  const [playing, setPlaying] = useState(false);
  return [playing, setPlaying];
}
