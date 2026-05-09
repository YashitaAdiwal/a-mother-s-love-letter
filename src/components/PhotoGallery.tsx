import { motion } from "framer-motion";
import mama1 from "@/assets/mama-1.jpeg";
import mama2 from "@/assets/mama-2.jpeg";

const PHOTOS = [
  { caption: "Your smile, my favorite sight", color: "from-pink to-peach", src: mama1 },
  { caption: "Forever my safe place", color: "from-baby-blue to-lavender", src: mama2 },
  { caption: "The heart of our home", color: "from-lavender to-pink", src: mama1 },
  { caption: "My first best friend", color: "from-peach to-cream", src: mama2 },
];

export function PhotoGallery() {
  return (
    <section className="relative py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl text-rose mb-4"
      >
        Memories With You
      </motion.h2>
      <p className="text-center font-handwritten text-2xl text-muted-foreground mb-14">
        every moment, a treasure 📸
      </p>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {PHOTOS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -4 : 4 }}
            whileHover={{ rotate: 0, scale: 1.06, y: -10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, type: "spring" }}
            className="bg-white p-4 pb-14 shadow-polaroid w-60"
          >
            <div className={`relative aspect-square w-full overflow-hidden rounded-sm bg-gradient-to-br ${p.color}`}>
              <img src={p.src} alt={p.caption} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <p className="mt-4 text-center font-handwritten text-xl text-rose">{p.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FinalMessage() {
  return (
    <section className="relative py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mx-auto max-w-3xl rounded-3xl bg-card/70 backdrop-blur-md p-10 md:p-16 shadow-glow border border-border text-center"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-rose text-glow mb-8"
        >
          Happy Mother's Day Mama 🌷
        </motion.h2>
        <p className="font-serif-display text-xl md:text-2xl leading-relaxed text-foreground/85">
          Thank you for every sacrifice, every prayer, every hug,<br />
          and every quiet moment of love.
          <br /><br />
          You are my safe place, my strongest support,<br />
          and the most beautiful part of my life.
          <br /><br />
          I may not say it enough — but I love you<br />
          more than words can ever explain. 💗
        </p>
      </motion.div>
    </section>
  );
}

export function EndingScene() {
  return (
    <section className="relative py-32 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-6xl mb-6">🌸 💗 🌷 💗 🌸</div>
        <h2 className="font-handwritten text-5xl md:text-7xl text-rose text-glow animate-pulse-soft">
          Forever your child ❤️
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-8 font-serif-display text-lg italic text-muted-foreground"
        >
          made with all my love, for you
        </motion.p>
      </motion.div>
    </section>
  );
}
