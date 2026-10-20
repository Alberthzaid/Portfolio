import { PrismaHero } from "@/components/ui/prisma-hero";
import { About } from "@/components/sections/About";
import { Building } from "@/components/sections/Building";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { getContent, type Locale } from "@/content";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { hero } = content;

  return (
    <>
      <JsonLd locale={locale} />
      {/* clip (not hidden) prevents horizontal page scroll without breaking position: sticky. */}
      <main className="overflow-x-clip">
        <PrismaHero
          title={hero.title}
          heading={hero.heading}
          description={hero.description}
          navLabel={content.navLabel}
          navItems={content.navItems}
          languageSwitch={content.languageSwitch}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
        <About about={content.about} />
        <Experience experience={content.experience} />
        <Building building={content.building} />
        <Stack stack={content.stack} />
        <Certifications certifications={content.certifications} />
        <Contact contact={content.contact} />
      </main>
      <footer className="mx-auto flex w-full max-w-7xl flex-wrap justify-between gap-4 border-t border-border px-4 pt-8 pb-40 text-sm text-muted-foreground sm:px-6 md:px-10 md:pb-28">
        <span>
          © {new Date().getFullYear()} {content.about.name}
        </span>
        <a href="#top" className="hover:text-primary">
          {content.footer.backToTop}
        </a>
      </footer>
      <WhatsAppButton label={content.whatsappLabel} />
    </>
  );
}
