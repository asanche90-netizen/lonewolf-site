import Image from "next/image";

const PHOTO_FILTER_CLASSES = "grayscale contrast-[1.15] brightness-[0.95]";

const TEAM = [
  {
    src: "/images/team/charley-02.jpg",
    name: "Charley",
    alt: "Charley, founder of Lone Wolf, arms crossed in a studio portrait",
  },
  {
    src: "/images/team/agustin-01.jpg",
    name: "Agustin Sanchez",
    alt: "Agustin Sanchez, founder of Lone Wolf, hands behind his head in a leather chair",
  },
  {
    src: "/images/team/agustin-02.jpg",
    name: "Agustin Sanchez",
    alt: "Agustin Sanchez, founder of Lone Wolf, pensive at a window with his hand on his chin",
  },
  {
    src: "/images/team/charley-01.jpg",
    name: "Charley",
    alt: "Charley, founder of Lone Wolf, seated backwards on a wooden chair",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border"
    >
      <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3rem,8vw,5rem)]">
        The Pack of Two
      </h2>

      <p className="mt-10 md:mt-12 font-sans text-fg max-w-2xl text-[1.0625rem] leading-[1.6]">
        We are LONE WOLF. Two founders. Zero employees. Zero retainers. Zero
        feelings. Zero compromise. We do not collaborate. We do not iterate. We
        do not respond to feedback after midnight. (We do not respond to
        feedback before midnight either.)
      </p>

      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {TEAM.map((m, i) => (
          <figure key={`${m.src}-${i}`} className="flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-border">
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover ${PHOTO_FILTER_CLASSES}`}
              />
            </div>
            <figcaption className="mt-5 font-mono uppercase tracking-[0.05em]">
              <div className="text-[14px] text-fg">{m.name}</div>
              <div className="mt-1 text-[12px] text-muted">
                Founder &amp; Lone Wolf
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-24 md:mt-32 text-center font-mono uppercase tracking-[0.05em] text-[13px] text-muted">
        Now accepting applications to the pack. Most candidates do not qualify.
      </p>

      <div className="mt-24 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-border">
            <Image
              src="/images/team/agustin-03.jpg"
              alt="Agustin Sanchez, founder of Lone Wolf, silhouetted against a daytime city skyline"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${PHOTO_FILTER_CLASSES}`}
            />
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-border">
            <Image
              src="/images/team/charley-03.jpg"
              alt="Charley, founder of Lone Wolf, silhouetted against a nighttime city skyline"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${PHOTO_FILTER_CLASSES}`}
            />
          </div>
        </div>
        <p className="mt-6 md:mt-8 font-display uppercase tracking-[-0.02em] leading-[1] text-accent text-[clamp(1.5rem,4vw,2.5rem)]">
          Surveying the Territory
        </p>
      </div>
    </section>
  );
}
