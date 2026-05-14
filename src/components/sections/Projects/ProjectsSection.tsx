"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { projects } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/Card";
import type { Project, Locale } from "@/types";

type Dictionary = ReturnType<typeof getDictionary>;

function ProjectModal({
  project,
  locale,
  t,
  onClose,
}: {
  project: Project;
  locale: Locale;
  t: Dictionary;
  onClose: () => void;
}) {
  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3
            id="modal-title"
            className="flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900 dark:text-slate-100"
          >
            {project.title}
            {project.wip && (
              <span className="inline-flex items-center rounded-full bg-yellow-400/15 px-2 py-0.5 text-xs font-semibold text-yellow-500 dark:text-yellow-400">
                {t.projects.wip}
              </span>
            )}
          </h3>
          <button
            onClick={onClose}
            aria-label={t.projects.close}
            className="shrink-0 rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none dark:hover:bg-slate-800 dark:hover:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="512px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/20 to-slate-700/40">
              <span className="text-4xl font-bold text-blue-400/40 select-none">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
          {project.description[locale]}
        </p>
      </div>
    </div>
  );
}

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        as="article"
        index={index}
        className={`group flex h-full flex-col transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-slate-900 ${
          project.featured
            ? "border-blue-500/30 bg-blue-500/5 dark:border-blue-500/20"
            : "border-gray-200 bg-gray-50 dark:border-slate-800"
        }`}
      >
        <div
          className="relative h-44 cursor-pointer overflow-hidden rounded-t-xl"
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={t.projects.readMore}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setModalOpen(true);
          }}
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              data-testid="project-image-fallback"
              className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/20 to-slate-700/40"
            >
              <span className="text-4xl font-bold text-blue-400/40 select-none">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 flex flex-wrap items-center gap-2 font-semibold text-gray-900 dark:text-slate-100">
            {project.title}
            {project.wip && (
              <span className="inline-flex items-center rounded-full bg-yellow-400/15 px-2 py-0.5 text-xs font-semibold text-yellow-500 dark:text-yellow-400">
                {t.projects.wip}
              </span>
            )}
          </h3>

          <button
            data-testid={`description-toggle-${project.id}`}
            onClick={() => setModalOpen(true)}
            className="mb-4 w-full cursor-pointer text-left"
            aria-label={t.projects.readMore}
          >
            <p className="line-clamp-4 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {project.description[locale]}
            </p>
          </button>
          <div className="flex-1" />

          <ul className="my-4 flex flex-wrap gap-2">
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
              className="rounded text-sm font-medium text-blue-500 transition-colors duration-200 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t.projects.viewCode}
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded text-sm font-medium text-blue-500 transition-colors duration-200 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none dark:text-blue-400 dark:hover:text-blue-300"
              >
                {t.projects.viewLive}
              </a>
            )}
          </div>
        </div>
      </Card>

      {modalOpen && (
        <ProjectModal
          project={project}
          locale={locale}
          t={t}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export const ProjectsSection = () => {
  const locale = useLocale();
  const t = getDictionary(locale);
  const {
    ref: headingRef,
    className: headingClass,
    style: headingStyle,
  } = useScrollReveal({ delay: 0 });

  return (
    <section
      id="projects"
      className="scroll-mt-14 py-16"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div
          ref={headingRef}
          className={`mb-10 ${headingClass}`}
          style={headingStyle}
        >
          <h2
            id="projects-heading"
            className="text-3xl font-bold text-gray-900 dark:text-slate-100"
          >
            {t.sections.projects}
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              locale={locale}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
