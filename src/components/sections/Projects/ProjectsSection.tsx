"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { projects } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/Card";
import type { Project, Locale } from "@/types";

type Dictionary = ReturnType<typeof getDictionary>;

function ProjectCard({
  project,
  index,
  locale,
  t,
}: {
  project: Project;
  index: number;
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <Card
      as="article"
      index={index}
      className={`group flex h-full flex-col transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-slate-900 ${
        project.featured
          ? "border-blue-500/30 bg-blue-500/5 dark:border-blue-500/20"
          : "border-gray-200 bg-gray-50 dark:border-slate-800"
      }`}
    >
        <div className="relative h-44 overflow-hidden rounded-t-xl">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              data-testid="project-image-fallback"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-slate-700/40"
            >
              <span className="select-none text-4xl font-bold text-blue-400/40">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
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
        </div>
      </Card>
  );
}

export const ProjectsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const { ref: headingRef, className: headingClass, style: headingStyle } = useScrollReveal({ delay: 0 });

  return (
    <section id="projects" className="py-16 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4">
        <div ref={headingRef} className={`mb-10 ${headingClass}`} style={headingStyle}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">{t.sections.projects}</h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} locale={locale} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
