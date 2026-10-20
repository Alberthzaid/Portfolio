import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { certifications } from "@/content/profile";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className={sectionClass}>
      <Reveal>
        <SectionHeading eyebrow="Certifications" title="Learning" />
      </Reveal>

      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {certifications.map((certification) => (
            <li key={certification.file}>
              <a
                href={certification.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-secondary md:p-8"
              >
                <div>
                  <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{certification.institute}</p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-primary md:text-2xl">
                    {certification.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-primary/80 group-hover:text-primary">
                  View certificate
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
