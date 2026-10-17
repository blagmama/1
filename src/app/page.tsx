import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

const stats = [
  { label: "Основано", value: "1993" },
  { label: "Проектов", value: "46" },
  { label: "Построено", value: "19" },
  { label: "Городов", value: "12" },
];

const principles = [
  {
    number: "01",
    title: "Функция",
    text: "План начинается с маршрута человека, а не с фасада. Лишнее помещение — такой же изъян, как лишняя колонна.",
  },
  {
    number: "02",
    title: "Свет",
    text: "Окно — главный инструмент проекта. Мы задаём ритм проёмов раньше, чем выбираем материал стен.",
  },
  {
    number: "03",
    title: "Материал",
    text: "Бетон, дерево, кирпич и стекло. Материалы работают в натуре и стареют так, чтобы здание не теряло лицо.",
  },
];

export default function IndexPage() {
  const featured = featuredProjects();

  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Архитектурная мастерская Мамешина
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Архитектура меры и света
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

      <section className="border-t">
        <div className="container py-16 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Принципы</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.number} className="border-t pt-6">
                <p className="font-mono text-xs text-muted-foreground">{principle.number}</p>
                <h3 className="mt-4 text-xl font-medium">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
