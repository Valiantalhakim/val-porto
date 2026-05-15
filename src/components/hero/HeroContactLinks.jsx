import Image from "next/image";
import { heroContacts } from "./heroContent";

export default function HeroContactLinks() {
  return (
    <div className="mt-3 w-full text-center sm:mt-6">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-sky-100/60 sm:text-xs">
        Contact me
      </p>
      <div className="mx-auto flex max-w-[150px] justify-center gap-3 sm:max-w-none sm:gap-4">
        {heroContacts.map((contact) => {
          const isPending = contact.href === "#";
          const isExternal = contact.href.startsWith("http");

          return (
            <a
              key={contact.id}
              href={contact.href}
              aria-label={contact.label}
              aria-disabled={isPending}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={(event) => {
                if (isPending) {
                  event.preventDefault();
                }
              }}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] shadow-lg shadow-black/20 backdrop-blur-xl transition-colors hover:border-sky-300/35 hover:bg-sky-300/10 sm:h-12 sm:w-12 sm:rounded-2xl sm:shadow-xl"
            >
              <Image
                src={contact.icon}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5 object-contain sm:h-6 sm:w-6"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
