import { Reveal } from "@/components/motion/Reveal";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import type { SiteContent } from "@/content";
import { contactEmail } from "@/content/shared";
import { ContactForm } from "./ContactForm";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Contact({ contact }: { contact: SiteContent["contact"] }) {
  return (
    <section id="contact" className={sectionClass}>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          <a
            href={`mailto:${contactEmail}`}
            className="block text-lg break-all text-primary underline-offset-4 hover:underline md:text-xl"
          >
            {contactEmail}
          </a>
          <div className="mt-8">
            <SocialMedia />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <ContactForm copy={contact.form} />
        </Reveal>
      </div>
    </section>
  );
}
