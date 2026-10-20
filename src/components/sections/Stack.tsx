import { Reveal } from "@/components/motion/Reveal";
import { skillGroups } from "@/content/profile";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Stack() {
  return (
    <section id="stack" className={sectionClass}>
      <Reveal>
        <SectionHeading eyebrow="Stack" title="Core technologies" />
      </Reveal>

      <Reveal className="grid gap-4 md:grid-cols-2 md:gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-primary"
                >
                  {skill.icon && <i className={`bx ${skill.icon} text-lg`} aria-hidden="true" />}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
