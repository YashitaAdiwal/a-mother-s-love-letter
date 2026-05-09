import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope } from "@/components/Envelope";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MusicToggle, useAutoPlay } from "@/components/MusicToggle";
import { ReasonsSection, HugSection } from "@/components/Sections";
import { PhotoGallery, FinalMessage, EndingScene } from "@/components/PhotoGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Mama 💗 — A Mother's Day Letter" },
      { name: "description", content: "An emotional, handmade Mother's Day surprise — a digital love letter for the most amazing mama." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-7xl"
        >
          💗
        </motion.div>
        <p className="mt-4 font-handwritten text-2xl text-rose">preparing something special...</p>
      </div>
    </motion.div>
  );
}

function FirstMessage({ onContinue }: { onContinue: () => void }) {
  useEffect(() => {
    const t = setTimeout(onContinue, 6500);
    return () => clearTimeout(t);
  }, [onContinue]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-sm px-6"
    >
      <div className="max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="font-serif-display text-4xl md:text-6xl italic text-rose text-glow leading-tight"
        >
          I am sorry mama... ❤️
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="mt-6 font-serif-display text-3xl md:text-5xl italic text-foreground/80"
        >
          And I love you so much.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          scroll down 💗
        </motion.div>
      </div>
    </motion.div>
  );
}

function Index() {
  const [stage, setStage] = useState<"loading" | "envelope" | "first" | "story">("loading");
  const [playing, setPlaying] = useAutoPlay();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingParticles count={18} />
      <MusicToggle playing={playing} setPlaying={setPlaying} />

      <AnimatePresence mode="wait">
        {stage === "loading" && <Loader key="l" onDone={() => setStage("envelope")} />}
      </AnimatePresence>

      {stage === "envelope" && (
        <Envelope
          onOpen={() => {
            setPlaying(true);
            setStage("first");
          }}
        />
      )}

      <AnimatePresence>
        {stage === "first" && <FirstMessage key="f" onContinue={() => setStage("story")} />}
      </AnimatePresence>

      {stage === "story" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="font-handwritten text-6xl md:text-8xl text-rose text-glow"
            >
              For You, Mama
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-6 max-w-xl font-serif-display text-xl italic text-foreground/80"
            >
              a little corner of the internet, made just for you 💗
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 text-3xl"
            >
              ↓
            </motion.div>
          </section>

          <ReasonsSection />
          <HugSection />
          <PhotoGallery />
          <FinalMessage />
          <EndingScene />
        </motion.div>
      )}
    </main>
  );
}
