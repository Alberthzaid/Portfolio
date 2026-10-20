import { Parallax } from "@/components/motion/Parallax";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-16">
      <Parallax>
        <p className="mb-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">{eyebrow}</p>
        <h2 className="text-5xl leading-[0.9] font-medium tracking-[-0.05em] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h2>
      </Parallax>
      {description && <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}

export const sectionClass = "mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:px-10 md:py-32";
