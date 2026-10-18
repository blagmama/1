import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

const stats = [
  { label: "Основано", value: "1993" },
  { label: "Проектов", value: "46" },
  { label: "Построено", value: "19" },
  { label: "Городов", value: "12" },
];

export default function IndexPage() {
  const featured = featuredProjects();

  return (
    <>
      <section className="container py-20 md:py-28">
        <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Архитектура света и тени
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Проектируем жилые и общественные здания, общественные и жилые интерьеры.
          Строгая геометрия с выразительным образом.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80"
          >
            Смотреть каталог
          </Link>
          <Link
            href="/contacts"
            className="border px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
          >
            Контакты
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6">
              <dd className="font-mono text-3xl">{stat.value}</dd>
              <dt className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t">
        <div className="container py-16 md:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Избранные работы
            </h2>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.2em] hover:underline hover:underline-offset-4"
            >
              Весь каталог →
            </Link>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
