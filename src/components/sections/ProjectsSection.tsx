"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { projects } from "@/data/resume";

export const ProjectsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="projects" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-slate-100">
          <span className="h-8 w-1 rounded-full bg-blue-500" aria-hidden="true" />
          {t.sections.projects}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/60"
            >
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-slate-100">
                {project.title}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
                {project.description[locale]}
              </p>

              <ul className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {t.projects.viewCode}
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-400"
                  >
                    {t.projects.viewLive}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
