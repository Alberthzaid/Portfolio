import { socials } from "@/content/shared";

export const SocialMedia = () => {
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map(({ label, icon, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <i className={`bx ${icon} text-lg`} aria-hidden="true" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
