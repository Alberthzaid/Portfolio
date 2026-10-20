import { PrismaHero } from "@/components/ui/prisma-hero";
import { About } from "@/components/sections/About";
import { Building } from "@/components/sections/Building";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { about, hero, navItems } from "@/content/profile";

export default function HomePage() {
  return (
    <>
      {/* clip (not hidden) prevents horizontal page scroll without breaking position: sticky. */}
      <main className="overflow-x-clip">
        <PrismaHero
          title={hero.title}
          description={hero.description}
          navItems={navItems}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
        <About />
        <Experience />
        <Building />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <footer className="mx-auto flex w-full max-w-7xl flex-wrap justify-between gap-4 border-t border-border px-4 py-8 text-sm text-muted-foreground sm:px-6 md:px-10">
        <span>
          © {new Date().getFullYear()} {about.name}
        </span>
        <a href="#top" className="hover:text-primary">
          Back to top
        </a>
      </footer>
      <WhatsAppButton />
    </>
  );
}
