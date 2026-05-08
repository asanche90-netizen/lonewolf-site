const SERVICES = [
  {
    n: "01",
    title: "Brand Domination",
    body: "We do not craft your brand. We forge a weapon. Logo systems. Wordmarks. Visual identity built to break down doors.",
  },
  {
    n: "02",
    title: "Digital Conquest",
    body: "Websites that close. Pages that perform. UX with a mortgage to pay. We design the hunt.",
  },
  {
    n: "03",
    title: "Visual Warfare",
    body: 'Campaigns built for impact, retention, and intimidation. Print, digital, environmental. We do not do "delight."',
  },
  {
    n: "04",
    title: "Motion Combat",
    body: "Animation as discipline. 60 frames per second of pure intent. After Effects is our cathedral.",
  },
];

export default function Arsenal() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-48 border-t border-border"
    >
      <div className="px-6 md:px-12">
        <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3rem,8vw,5rem)]">
          The Arsenal
        </h2>
      </div>

      <ol className="mt-16 md:mt-24 divide-y divide-border border-y border-border">
        {SERVICES.map((s) => (
          <li
            key={s.n}
            className="transition-colors duration-[120ms] ease-linear hover:bg-[#111111]"
          >
            <div className="px-6 md:px-12 py-10 md:py-16 flex items-start gap-4 md:gap-10">
              <span className="font-mono tabular-nums text-accent shrink-0 text-[14px] md:text-[16px] pt-2 md:pt-5 w-[2ch]">
                {s.n}
              </span>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 lg:gap-12 items-start">
                <h3 className="md:col-span-7 font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(2rem,5vw,4rem)]">
                  {s.title}
                </h3>
                <p className="md:col-span-5 font-sans text-fg max-w-md text-[1.0625rem] leading-[1.6]">
                  {s.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
