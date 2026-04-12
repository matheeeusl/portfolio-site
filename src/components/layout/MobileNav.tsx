"use client";

interface MobileNavLink {
  href: string;
  label: string;
}

interface ContactLinks {
  emailLabel: string;
  email: string;
  github: string;
  linkedin: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: MobileNavLink[];
  contactLinks: ContactLinks;
}

export const MobileNav = ({ isOpen, onClose, links, contactLinks }: MobileNavProps) => {
  return (
    <nav
      id="mobile-nav"
      aria-label="mobile navigation"
      style={
        isOpen
          ? undefined
          : { opacity: 0, height: 0, overflow: "hidden", padding: 0, borderWidth: 0 }
      }
      className="border-t border-gray-200 px-4 py-3 md:hidden dark:border-slate-800"
    >
      <ul className="flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onClose}
              className="rounded text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${contactLinks.email}`}
            onClick={onClose}
            className="rounded text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            {contactLinks.emailLabel}
          </a>
        </li>
        <li>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="rounded text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="rounded text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};
