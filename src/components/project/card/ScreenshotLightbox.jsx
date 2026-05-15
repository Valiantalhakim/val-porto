import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function ScreenshotLightbox({ screenshot, project, onClose }) {
  if (!screenshot?.src) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Close image preview"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-h-[88vh] w-full max-w-6xl"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={screenshot.src}
            alt={`${project.title} - ${screenshot.title}`}
            width={screenshot.width ?? 1280}
            height={screenshot.height ?? 800}
            sizes="96vw"
            className="mx-auto max-h-[88vh] w-auto rounded-xl object-contain shadow-2xl shadow-black/55"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
