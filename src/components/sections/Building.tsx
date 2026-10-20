import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StickyStack } from "@/components/motion/StickyStack";
import { projects } from "@/content/profile";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Building() {
  const featured = projects.filter((project) => !project.status);
  const upcoming = projects.filter((project) => project.status);

  return (
    <section id="building" className={sectionClass}>
      <Reveal>
        <SectionHeading
          eyebrow="Building now"
          title="Current work"
          description="Products I am building at Salto Angel and Refacciones.com, plus recent client work."
        />
      </Reveal>

      {/* Scroll-driven stack; no entrance Reveal so the sticky/scale transforms stay the only motion. */}
      <StickyStack label="Featured projects">
        {featured.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30 md:p-10"
          >
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{project.org}</p>
            <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-primary">{project.name}</h3>
            {project.description && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
            )}
            {project.tags && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-primary/80">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {project.links && (
              <div className="mt-auto flex flex-wrap gap-4 pt-8">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </StickyStack>

      {upcoming.length > 0 && (
        <Reveal className="mt-10 md:mt-16">
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {upcoming.map((project) => (
              <li
                key={project.name}
                className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-dashed border-border p-6"
              >
                <div>
                  <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{project.org}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] text-primary">{project.name}</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">{project.status}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}
