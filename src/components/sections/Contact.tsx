import { Reveal } from "@/components/motion/Reveal";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { contactEmail } from "@/content/profile";
import { ContactForm } from "./ContactForm";
import { SectionHeading, sectionClass } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className={sectionClass}>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            description="Building something with AI, backend services, or a full-stack product? Send me your idea."
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
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
