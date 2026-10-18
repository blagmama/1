import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Архитектурная мастерская Мамешина",
  description:
    "Контакты архитектурной мастерской Мамешина: телефон, почта, часы работы. Телефон и почта для новых проектов, прессы и вакансий.",
};

export default function ContactsPage() {
  return (
    <div className="container py-14 md:py-20">
      <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Контакты</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Работаем по всей России и всегда открыты для разговора о новом месте.
      </p>

      <div className="mt-14 h-fit max-w-xl border-t">
        <div className="border-b py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Телефон</p>
          <p className="mt-3 text-lg">
            <a href="tel:+79625011097" className="hover:underline hover:underline-offset-4">
              +7 (962) 501-10-97
            </a>
          </p>
        </div>
        <div className="border-b py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Часы работы
          </p>
          <p className="mt-3 text-lg">Пн–Пт, 08:00–20:00</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Визит по предварительной договорённости
          </p>
        </div>
        <div className="py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Почта</p>
          <a
            href="mailto:mameshin@mail.ru"
            className="mt-3 block text-xl font-medium hover:underline hover:underline-offset-4 md:text-2xl"
          >
            mameshin@mail.ru
          </a>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Новые проекты, пресса и портфолио — по одному адресу.
          </p>
        </div>
      </div>
    </div>
  );
}
