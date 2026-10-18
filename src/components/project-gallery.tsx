"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          key={current}
          src={current}
          alt={`${title} — изображение ${active + 1} из ${images.length}`}
          fill
          priority={active === 0}
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover motion-safe:animate-[gallery-fade_300ms_ease-out]"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Показать изображение ${index + 1} из ${images.length}`}
              aria-pressed={active === index}
              className={`relative aspect-[3/2] w-20 overflow-hidden border transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:w-28 ${
                active === index
                  ? "border-foreground opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 112px, 80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
