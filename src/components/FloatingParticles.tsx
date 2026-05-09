import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
  opacity: number;
};

const EMOJIS = ["💗", "💖", "🌸", "🌷", "✨", "🤍", "💐", "🌺"];

export function FloatingParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 18,
      size: 14 + Math.random() * 22,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float-up select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

export function Sparkles({ count = 12 }: { count?: number }) {
  const [items, setItems] = useState<{ id: number; top: number; left: number; delay: number }[]>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle text-yellow-200"
          style={{ top: `${s.top}%`, left: `${s.left}%`, animationDelay: `${s.delay}s` }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
