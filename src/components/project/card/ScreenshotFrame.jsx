import Image from "next/image";

function ScreenshotPlaceholder({ screenshot, project, index }) {
  return (
    <div className="flex aspect-[16/10] h-full w-full flex-col justify-between rounded-xl bg-[radial-gradient(circle_at_20%_18%,rgba(125,211,252,0.24),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.9))] p-4">
      <div className="flex items-center justify-between text-xs text-sky-100/80">
        <span>{screenshot.type}</span>
        <span>0{index + 1}</span>
      </div>
      <div>
        <div className="mb-3 grid gap-2">
          <span className="h-3 w-3/4 rounded-full bg-white/12" />
          <span className="h-3 w-1/2 rounded-full bg-sky-300/20" />
        </div>
        <p className="text-lg font-semibold text-white">{screenshot.title}</p>
        <p className="mt-1 text-xs text-slate-400">{project.title}</p>
      </div>
    </div>
  );
}

export default function ScreenshotFrame({ screenshot, project, index, priority }) {
  return (
    <div className="relative overflow-visible">
      {screenshot.src ? (
        <Image
          src={screenshot.src}
          alt={`${project.title} - ${screenshot.title}`}
          width={screenshot.width ?? 1280}
          height={screenshot.height ?? 800}
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 44vw, 86vw"
          className="h-auto w-full object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.36)]"
        />
      ) : (
        <ScreenshotPlaceholder
          screenshot={screenshot}
          project={project}
          index={index}
        />
      )}
    </div>
  );
}
