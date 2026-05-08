const PRINCIPLES = [
  { n: "01", text: "We do not brainstorm." },
  { n: "02", text: "First draft is final draft." },
  { n: "03", text: "Kerning is a discipline." },
  { n: "04", text: "Sleep is a skill issue." },
  { n: "05", text: "We are not like other agencies." },
];

export default function TheCode() {
  return (
    <section
      id="code"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border"
    >
      <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3rem,8vw,5rem)]">
        The Code
      </h2>

      <ol className="mt-16 md:mt-24 divide-y divide-border border-y border-border">
        {PRINCIPLES.map((p) => (
          <li
            key={p.n}
            className="flex items-baseline gap-3 md:gap-6 py-6 md:py-10"
          >
            <span className="font-mono tabular-nums shrink-0 text-accent text-[clamp(1rem,2.4vw,1.75rem)]">
              {p.n}
            </span>
            <span
              aria-hidden="true"
              className="font-mono shrink-0 text-muted text-[clamp(1rem,2.4vw,1.75rem)]"
            >
              /
            </span>
            <span className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(2rem,5vw,4rem)]">
              {p.text}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
