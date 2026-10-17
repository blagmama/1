import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Профиль работ
          </p>
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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Контакты</p>
          <p className="text-sm">
            <a href="tel:+79625011097" className="transition-colors hover:text-muted-foreground">
              +7 (962) 501-10-97
            </a>
          </p>
          <p className="text-sm">
            <a
              href="mailto:mameshin@mail.ru"
              className="transition-colors hover:text-muted-foreground"
            >
              mameshin@mail.ru
            </a>
          </p>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {year} Архитектурная мастерская Мамешина
        </div>
      </div>
    </footer>
  );
}
