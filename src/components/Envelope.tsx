import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "./FloatingParticles";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <Sparkles count={20} />
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: opened ? 0 : 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap font-handwritten text-3xl text-rose md:text-4xl"
        >
          For the most amazing mama 💗
        </motion.p>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: opened ? 1 : 1.05 }}
          whileTap={{ scale: opened ? 1 : 0.97 }}
          className="group relative cursor-pointer outline-none"
          aria-label="Open the letter"
        >
          {/* Envelope body */}
          <div className="relative h-56 w-80 md:h-72 md:w-[26rem]">
            {/* Back */}
            <div className="absolute inset-0 rounded-md bg-gradient-warm shadow-soft" />

            {/* Letter sliding out */}
            <AnimatePresence>
              {opened && (
                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.9 }}
                  animate={{ y: -180, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 1.1, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 z-10 h-48 w-72 -translate-x-1/2 -translate-y-1/2 rounded-md bg-cream p-4 text-center shadow-glow md:h-56 md:w-80"
                >
                  <div className="flex h-full flex-col items-center justify-center">
                    <p className="font-handwritten text-2xl text-rose md:text-3xl">
                      A letter for you...
                    </p>
                    <span className="mt-2 text-3xl">💌</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Front pocket */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 rounded-b-md bg-pink shadow-soft"
                 style={{ clipPath: "polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%)" }} />

            {/* Top flap */}
            <motion.div
              animate={{ rotateX: opened ? 180 : 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
              className="absolute inset-x-0 top-0 z-30 h-1/2 origin-top"
            >
              <div
                className="h-full w-full bg-rose"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
            </motion.div>

            {/* Wax seal */}
            <motion.div
              animate={{ scale: opened ? 0 : 1, opacity: opened ? 0 : 1 }}
              className="absolute left-1/2 top-1/2 z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose text-2xl text-cream shadow-glow animate-pulse-soft"
            >
              ❤
            </motion.div>
          </div>

          <motion.p
            animate={{ opacity: opened ? 0 : 1 }}
            className="mt-10 font-handwritten text-3xl text-rose md:text-4xl"
          >
            Tap to Open 💌
          </motion.p>
        </motion.button>
      </div>
    </div>
  );
}
