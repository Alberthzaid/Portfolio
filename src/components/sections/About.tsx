import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/profile";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className={sectionClass}>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <SectionHeading eyebrow="About" title={about.name} />
          <p className="text-2xl leading-tight tracking-[-0.02em] text-primary md:text-3xl lg:text-4xl">
            {about.summary}
          </p>
        </Reveal>

        <Reveal className="self-end lg:col-span-4">
          <dl className="divide-y divide-border rounded-3xl border border-border bg-card">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 p-6">
                <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{fact.label}</dt>
                <dd className="text-base text-primary md:text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
