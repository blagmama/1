import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { categoryLabels, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Каталог проектов — Архитектурная мастерская Мамешина",
  description:
    "Каталог архитектурной мастерской Мамешина: построенные здания и конкурсные проекты — жильё, общественные здания, реновация, малые формы.",
};

type Filters = "all" | "building" | "project";

function parseFilter(value: string | string[] | undefined): Filters {
  if (value === "building" || value === "project") return value;
  return "all";
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { type } = await searchParams;
  const filter = parseFilter(type);

  const filtered =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const tabs: { value: Filters; label: string; count: number; href: string }[] = [
    { value: "all", label: "Все", count: projects.length, href: "/projects" },
    {
      value: "building",
      label: categoryLabels.building,
      count: projects.filter((project) => project.category === "building").length,
      href: "/projects?type=building",
    },
    {
      value: "project",
      label: categoryLabels.project,
      count: projects.filter((project) => project.category === "project").length,
      href: "/projects?type=project",
    },
  ];

  return (
    <div className="container py-14 md:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Архитектурная мастерская Мамешина
      </p>
      <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">Каталог</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Постройки и проекты мастерской с 2011 года. Каждый объект — одно решение, доведённое
        до конца.
      </p>

      <nav aria-label="Фильтр каталога" className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-b pb-4">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.href}
            aria-current={filter === tab.value ? "true" : undefined}
            className={
              "text-xs uppercase tracking-[0.2em] transition-colors " +
              (filter === tab.value
                ? "text-foreground underline underline-offset-4"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {tab.label} · {tab.count}
          </Link>
        ))}
      </nav>

      <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} priority={index < 2} />
        ))}
      </div>
    </div>
  );
}
