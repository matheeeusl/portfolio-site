"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { projects } from "@/data/resume";

export const ProjectsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section id="projects" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.projects}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`flex flex-col rounded-xl border p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-slate-900 ${
                project.featured
                  ? "border-blue-500/30 bg-blue-500/5 dark:border-blue-500/20 dark:bg-slate-900"
                  : "border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900"
              }`}
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
                    className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500 dark:text-blue-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 transition-colors duration-200 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t.projects.viewCode}
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 transition-colors duration-200 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
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
