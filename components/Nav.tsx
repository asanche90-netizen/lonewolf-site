"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "CODE", href: "#code" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-bg">
        <nav className="flex items-center py-6 px-8">
          <a
            href="#"
            className="mr-auto font-display uppercase tracking-[-0.02em] leading-none text-fg text-[1.5rem] md:text-[1.75rem]"
          >
            <span className="hidden md:inline">LONE WOLF</span>
            <span className="md:hidden">LW</span>
          </a>

          <ul className="hidden md:flex items-center gap-10 mr-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[13px] uppercase tracking-[0.05em] text-fg hover:text-accent hover:underline underline-offset-4 transition-colors duration-[120ms] ease-linear"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-block font-mono text-[13px] uppercase tracking-[0.05em] px-5 py-3 bg-accent text-bg border border-accent hover:bg-bg hover:text-fg hover:border-fg transition-colors duration-[120ms] ease-linear"
          >
            STRIKE
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col items-end justify-center gap-[5px] w-8 h-8"
          >
            <span className="block h-px w-7 bg-fg" />
            <span className="block h-px w-7 bg-fg" />
            <span className="block h-px w-5 bg-fg" />
          </button>
        </nav>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg"
        >
          <div className="flex items-center justify-between py-6 px-8 border-b border-border">
            <span className="font-display uppercase tracking-[-0.02em] leading-none text-fg text-[1.5rem]">
              LW
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] uppercase tracking-[0.05em] text-fg"
            >
              CLOSE
            </button>
          </div>

          <ul className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display uppercase text-fg hover:text-accent hover:underline underline-offset-[6px] leading-[0.9] tracking-[-0.02em] text-[clamp(3rem,16vw,5rem)] transition-colors duration-[120ms] ease-linear"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
