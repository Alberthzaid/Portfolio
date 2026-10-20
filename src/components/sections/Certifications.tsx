import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollFocus } from "@/components/motion/ScrollFocus";
import { certifications } from "@/content/profile";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className={sectionClass}>
      <Reveal>
        <SectionHeading eyebrow="Certifications" title="Learning" />
      </Reveal>

      {/* Scroll-linked highlight per row; no entrance Reveal so scroll stays the only motion. */}
      <ol className="flex flex-col border-b border-border" aria-label="Certifications">
        {certifications.map((certification, index) => (
          <ScrollFocus key={certification.file} rule>
            <a
              href={certification.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-4 py-6 transition-colors md:gap-8 md:py-8"
            >
              <span className="w-8 shrink-0 text-xs tracking-[0.15em] text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <span className="text-2xl font-medium tracking-[-0.04em] text-primary/80 transition-colors group-hover:text-primary md:text-4xl">
                  {certification.title}
                </span>
                <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  {certification.institute}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 self-center text-primary/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                aria-label="View certificate"
              />
            </a>
          </ScrollFocus>
        ))}
      </ol>
    </section>
  );
}
