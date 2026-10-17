import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="leading-none">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Архитектурная мастерская
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.35em]">Мамешина</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Жилые и общественные здания, реновация, малые формы.
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Навигация в подвале">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Навигация</p>
          <Link href="/projects" className="text-sm transition-colors hover:text-muted-foreground">
            Каталог проектов
          </Link>
          <Link href="/contacts" className="text-sm transition-colors hover:text-muted-foreground">
            Контакты
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Офис</p>
          <p className="text-sm">Большой Козихинский пер., 7, стр. 2</p>
          <p className="text-sm">
            <a href="tel:+74950000000" className="transition-colors hover:text-muted-foreground">
              +7 (495) 000-00-00
            </a>
          </p>
          <p className="text-sm">
            <a
              href="mailto:hello@forma.archi"
              className="transition-colors hover:text-muted-foreground"
            >
              hello@forma.archi
            </a>
          </p>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex items-center justify-between py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {year} Архитектурная мастерская Мамешина</span>
          <span>Архитектура меры и света</span>
        </div>
      </div>
    </footer>
  );
}
