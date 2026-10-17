import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, getProject, nextProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Проект не найден — Архитектурная мастерская Мамешина" };
  return {
    title: `${project.title} — Архитектурная мастерская Мамешина`,
    description: project.description[0],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = nextProject(project.slug);

  return (
    <article className="container py-14 md:py-20">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Каталог
        </Link>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {categoryLabels[project.category]}
        </span>
      </div>

      <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">{project.title}</h1>
      <p className="mt-4 font-mono text-sm text-muted-foreground">
        {project.year} · {project.location} · {project.status}
      </p>

      <div className="relative mt-10 aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          priority
          className="object-cover grayscale"
        />
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr,320px] md:gap-16">
        <div className="max-w-2xl space-y-6">
          {project.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="h-fit border-t">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b py-3"
            >
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="text-right text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-20 block border-t pt-8 transition-colors"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Следующий проект
        </p>
        <p className="mt-3 flex items-baseline justify-between gap-4">
          <span className="text-2xl font-medium tracking-tight group-hover:underline group-hover:underline-offset-4 md:text-4xl">
            {next.title}
          </span>
          <span className="font-mono text-sm text-muted-foreground">→</span>
        </p>
      </Link>
    </article>
  );
}
