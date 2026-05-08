import type { ReactNode } from "react";

const KILLS: {
  n: string;
  title: string;
  sub: string;
  description: string;
  tile: ReactNode;
}[] = [
  {
    n: "01",
    title: "Apex Testosterone",
    sub: "Supplement Brand // 2024",
    description:
      "Identity system for men who refuse to test below 850 ng/dL.",
    tile: (
      <div className="relative h-full w-full bg-bg overflow-hidden">
        <span className="absolute top-[14%] left-6 font-display uppercase text-fg leading-[0.85] tracking-[-0.02em] text-[clamp(9rem,58vw,22rem)] whitespace-nowrap">
          Apex
        </span>
        <div className="absolute top-[58%] left-0 right-0 h-[2px] bg-accent" />
      </div>
    ),
  },
  {
    n: "02",
    title: "The 4AM Club",
    sub: "Community Platform // 2024",
    description:
      "Brand and digital design for an invite-only newsletter for early risers and late operators.",
    tile: (
      <div className="relative h-full w-full bg-bg overflow-hidden flex flex-col justify-center pl-6 pr-2">
        <span className="font-display uppercase text-fg leading-[0.82] tracking-[-0.03em] text-[clamp(5rem,30vw,14rem)] whitespace-nowrap">
          4AM
        </span>
        <span className="mt-1 md:mt-2 font-display uppercase text-fg leading-[0.82] tracking-[-0.02em] text-[clamp(2.25rem,11vw,5.5rem)] whitespace-nowrap">
          Club
        </span>
      </div>
    ),
  },
  {
    n: "03",
    title: "Valor Dental",
    sub: "Healthcare // 2024",
    description:
      "Identity refresh for a family dentistry practice. We brought predator energy to preventative care.",
    tile: (
      <div className="relative h-full w-full bg-accent overflow-hidden flex flex-col justify-center pl-6 pr-2">
        <span className="font-display uppercase text-bg leading-[0.85] tracking-[-0.02em] text-[clamp(4rem,22vw,10rem)] whitespace-nowrap">
          Valor
        </span>
        <span className="mt-3 font-mono uppercase text-bg tracking-[0.1em] text-[clamp(0.875rem,1.6vw,1.25rem)]">
          Dental
        </span>
      </div>
    ),
  },
  {
    n: "04",
    title: "Monolith Preschool",
    sub: "Education // 2025",
    description:
      "K-1 brand system rooted in discipline, structure, and the early cultivation of grit.",
    tile: (
      <div className="relative h-full w-full bg-fg overflow-hidden flex items-center pl-6 pr-2">
        <span className="font-display uppercase text-bg leading-[0.85] tracking-[-0.04em] text-[clamp(4rem,23vw,10rem)] whitespace-nowrap">
          Monolith
        </span>
      </div>
    ),
  },
];

export default function Kills() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border"
    >
      <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3rem,8vw,5rem)]">
        Kills
      </h2>

      <ul className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {KILLS.map((k) => (
          <li key={k.n} className="group">
            <div className="relative aspect-square overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-200 ease-linear group-hover:scale-[1.02]">
                {k.tile}
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <p className="font-mono uppercase tracking-[0.05em] text-[12px] md:text-[13px] text-accent">
                Kill N°{k.n}
              </p>
              <h3 className="mt-3 font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(1.75rem,3.2vw,2.25rem)]">
                {k.title}
              </h3>
              <p className="mt-2 font-mono uppercase tracking-[0.05em] text-[12px] md:text-[13px] text-muted">
                {k.sub}
              </p>
              <p className="mt-4 font-sans text-fg max-w-md text-[1.0625rem] leading-[1.6]">
                {k.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
