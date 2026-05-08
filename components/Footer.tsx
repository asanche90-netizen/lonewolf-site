const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Code", href: "#code" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-24 md:py-32">
      <p className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3.5rem,11vw,9rem)]">
        Lone Wolf
      </p>

      <p className="mt-6 md:mt-8 font-mono uppercase tracking-[0.05em] text-[13px] md:text-[14px] text-fg">
        We do not network. We operate.
      </p>

      <div className="mt-14 md:mt-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <nav>
          <ul className="flex items-center gap-6 md:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono uppercase tracking-[0.05em] text-[13px] text-fg hover:text-accent hover:underline underline-offset-4 transition-colors duration-[120ms] ease-linear"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:hunt@lonewolf.studio"
          className="font-mono uppercase tracking-[0.05em] text-[13px] text-fg hover:text-accent transition-colors duration-[120ms] ease-linear"
        >
          hunt@lonewolf.studio
        </a>
      </div>

      <div className="mt-12 md:mt-16 border-t border-border" />

      <div className="mt-6 md:mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-mono uppercase tracking-[0.05em] text-[11px] md:text-[12px] text-muted">
          &copy; 2026 Lone Wolf. All territory defended.
        </p>
        <p className="font-mono uppercase tracking-[0.05em] text-[11px] md:text-[12px] text-muted">
          We will not respond to your LinkedIn message.
        </p>
      </div>
    </footer>
  );
}
