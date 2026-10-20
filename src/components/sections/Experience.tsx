import { HorizontalScroll } from "@/components/motion/HorizontalScroll";
import { earlierExperience, experience } from "@/content/profile";

const cardClass = "flex w-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <HorizontalScroll
        label="Roles, newest first"
        heading={
          <>
            <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">Experience</p>
            <h2
              id="experience-title"
              className="text-4xl leading-[0.9] font-medium tracking-[-0.05em] text-primary sm:text-5xl md:text-6xl lg:text-7xl md:[@media(max-height:820px)]:text-5xl"
            >
              Where I&apos;ve built
            </h2>
          </>
        }
      >
        {experience.map((job) => (
          <article key={job.company} className={cardClass}>
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-primary md:text-3xl">{job.company}</h3>
            <p className="mt-2 text-sm text-primary/80 md:text-base">{job.role}</p>
            {job.period && (
              <p className="mt-1 text-xs tracking-[0.15em] text-muted-foreground uppercase">{job.period}</p>
            )}
            <ul className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {job.tags && (
              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
                {job.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-primary/80">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        <article className={cardClass}>
          <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Earlier</h3>
          <ul className="mt-4 divide-y divide-border">
            {earlierExperience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="flex flex-col gap-0.5 py-3 text-sm">
                <span className="flex flex-wrap justify-between gap-x-3">
                  <span className="text-primary">{job.company}</span>
                  <span className="text-xs text-muted-foreground">{job.period}</span>
                </span>
                <span className="text-primary/80">{job.role}</span>
              </li>
            ))}
          </ul>
        </article>
      </HorizontalScroll>
    </section>
  );
}
