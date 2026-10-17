import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover grayscale transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t pt-3">
          <span className="font-mono text-xs text-muted-foreground">{number}</span>
          <h3 className="text-lg font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.location} · {project.status}
        </p>
      </Link>
    </article>
  );
}
