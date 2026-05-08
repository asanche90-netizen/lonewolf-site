import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 md:left-1/2 -z-10">
        <Image
          src="/images/hero/wolf.jpg"
          alt="Wolf staring directly at camera"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center grayscale contrast-[1.3] brightness-[0.9]"
        />
      </div>

      <div
        aria-hidden="true"
        className="md:hidden absolute inset-0 -z-10 bg-black/60"
      />

      <div className="relative w-full md:w-1/2 px-6 md:px-12 py-24 md:py-32">
        <h1 className="font-display uppercase tracking-[-0.02em] leading-[0.9] text-fg text-[clamp(4rem,12vw,11rem)] [text-wrap:balance]">
          We don&rsquo;t brainstorm. We hunt.
        </h1>

        <p className="mt-6 md:mt-8 font-display uppercase tracking-[-0.02em] leading-[1] text-accent text-[clamp(1.25rem,3.2vw,2.5rem)]">
          Other agencies meet. We strike.
        </p>

        <p className="mt-8 md:mt-10 font-sans text-fg max-w-md text-[1.0625rem] leading-[1.5]">
          We are LONE WOLF. We design at 4AM. We do not have a Slack. We do not
          take calls before noon. We do not take calls.
        </p>

        <a
          href="#contact"
          className="mt-10 md:mt-12 inline-block font-mono uppercase tracking-[0.05em] text-[14px] md:text-[15px] px-8 py-5 bg-accent text-bg border border-accent hover:bg-bg hover:text-fg hover:border-fg transition-colors duration-[120ms] ease-linear"
        >
          Begin the hunt
        </a>
      </div>
    </section>
  );
}
