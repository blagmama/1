"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Каталог" },
  { href: "/projects?type=building", label: "Постройки" },
  { href: "/projects?type=project", label: "Проекты" },
  { href: "/contacts", label: "Контакты" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="leading-none">
          <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Архитектурная мастерская
          </span>
          <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.35em]">
            Мамешина
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <span
            className={
              "h-px w-5 bg-foreground transition-transform " +
              (open ? "translate-y-[3px] rotate-45" : "")
            }
          />
          <span
            className={
              "h-px w-5 bg-foreground transition-transform " +
              (open ? "-translate-y-[3px] -rotate-45" : "")
            }
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t bg-background md:hidden"
        >
          <div className="container flex flex-col divide-y divide-border">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xs uppercase tracking-[0.2em] text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
