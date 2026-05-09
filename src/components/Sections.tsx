import { motion } from "framer-motion";
import { useState } from "react";

const REASONS = [
  { icon: "🤍", text: "You always understand me, even when I don't say a word." },
  { icon: "🫂", text: "Your hugs have a magical way of fixing everything." },
  { icon: "🌟", text: "You support me no matter where life takes me." },
  { icon: "🌸", text: "You make every ordinary day feel beautiful." },
  { icon: "🍳", text: "Your food tastes like home and warmth." },
  { icon: "🙏", text: "Your prayers are my invisible armor." },
];

export function ReasonsSection() {
  return (
    <section className="relative py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl text-rose mb-4"
      >
        Reasons Why You're The Best Mama
      </motion.h2>
      <p className="text-center font-handwritten text-2xl text-muted-foreground mb-14">
        ...just a few of countless ✨
      </p>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="rounded-3xl bg-card/80 backdrop-blur p-7 shadow-soft border border-border"
          >
            <div className="text-4xl mb-3">{r.icon}</div>
            <p className="font-serif-display text-lg text-foreground/85 leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function HugSection() {
  const [hugs, setHugs] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);
  const [love, setLove] = useState(0);

  const giveHug = () => {
    setHugs((h) => h + 1);
    setLove((l) => Math.min(100, l + 7));
    const id = Date.now();
    setHearts((h) => [...h, { id, x: Math.random() * 200 - 100 }]);
    setTimeout(() => setHearts((h) => h.filter((x) => x.id !== id)), 2000);
  };

  return (
    <section className="relative py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl text-rose mb-14"
      >
        Send Mama a Hug
      </motion.h2>
      <div className="mx-auto max-w-md text-center">
        <div className="relative inline-block">
          {hearts.map((h) => (
            <motion.span
              key={h.id}
              initial={{ y: 0, opacity: 1, scale: 0.5 }}
              animate={{ y: -200, opacity: 0, scale: 1.5, x: h.x }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 text-3xl"
            >
              💗
            </motion.span>
          ))}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={giveHug}
            className="rounded-full bg-gradient-warm px-12 py-6 text-2xl font-handwritten text-rose shadow-glow hover:shadow-soft transition-shadow"
          >
            Tap for a Hug 🤗
          </motion.button>
        </div>
        {hugs > 0 && (
          <motion.p
            key={hugs}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-handwritten text-2xl text-rose"
          >
            {hugs} hug{hugs > 1 ? "s" : ""} sent with love 💕
          </motion.p>
        )}

        <div className="mt-14">
          <p className="font-handwritten text-2xl text-rose mb-3">How much I love you</p>
          <div className="relative h-6 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              animate={{ width: `${love}%` }}
              transition={{ type: "spring", stiffness: 60 }}
              className="h-full rounded-full bg-gradient-warm shadow-glow"
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {love < 100 ? `${love}% — and growing forever...` : "∞ Infinity & beyond ✨"}
          </p>
        </div>
      </div>
    </section>
  );
}
