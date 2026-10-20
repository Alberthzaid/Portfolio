import { Reveal } from "@/components/motion/Reveal";
import { ScrollFocus } from "@/components/motion/ScrollFocus";
import type { SiteContent } from "@/content";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Stack({ stack }: { stack: SiteContent["stack"] }) {
  return (
    <section id="stack" className={sectionClass}>
      <Reveal>
        <SectionHeading eyebrow={stack.eyebrow} title={stack.title} />
      </Reveal>

      {/* Scroll-linked highlight per row; no entrance Reveal so scroll stays the only motion. */}
      <div className="flex flex-col gap-16 md:gap-24">
        {stack.groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-6 md:flex-row md:gap-10">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase md:sticky md:top-24 md:w-1/3 md:shrink-0 md:self-start">
              {group.title}
            </h3>
            <ul className="flex flex-1 flex-col" aria-label={group.title}>
              {group.skills.map((skill) => (
                <ScrollFocus key={skill.name} rule>
                  <span className="flex items-center gap-4 py-4 text-2xl font-medium tracking-[-0.04em] text-primary md:py-5 md:text-4xl">
                    {/* Fixed-width slot keeps names aligned whether or not a skill has an icon. */}
                    <span className="flex w-7 shrink-0 justify-center md:w-10" aria-hidden="true">
                      {skill.icon && <i className={`bx ${skill.icon} text-muted-foreground`} />}
                    </span>
                    {skill.name}
                  </span>
                </ScrollFocus>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
