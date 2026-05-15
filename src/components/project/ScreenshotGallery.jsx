import { motion } from "framer-motion";
import Badge from "./Badge";
import { galleryItems } from "./projectData";
import { sectionVariants } from "./projectAnimations";

export default function ScreenshotGallery() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      className="mt-16"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Screenshot Gallery
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          UI screenshots, mobile app screenshots, dashboard previews, Figma
          previews, and development screenshots.
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-xl shadow-black/20 transition-colors hover:border-sky-300/35 ${item.height}`}
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.82))] p-4">
              <Badge>{item.label}</Badge>
              <div>
                <div className="mb-4 h-20 rounded-2xl border border-white/10 bg-white/[0.06]" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
