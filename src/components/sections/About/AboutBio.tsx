interface AboutBioProps {
  bio: string;
  downloadLabel: string;
}

export const AboutBio = ({ bio, downloadLabel }: AboutBioProps) => (
  <div>
    <p className="max-w-2xl leading-relaxed text-gray-500 dark:text-slate-400">{bio}</p>
    <a
      href="/resume.pdf"
      download
      className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-blue-500 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {downloadLabel}
    </a>
  </div>
);
