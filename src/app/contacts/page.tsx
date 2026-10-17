import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Архитектурная мастерская Мамешина",
  description:
    "Контакты архитектурной мастерской Мамешина: адрес офиса в Москве, телефон, почта для новых проектов, прессы и вакансий.",
};

const channels = [
  {
    label: "Новые проекты",
    email: "hello@forma.archi",
    note: "Пришлите участок, программу и сроки — ответим в течение трёх дней.",
  },
  {
    label: "Пресса и публикации",
    email: "press@forma.archi",
    note: "Фотографии, планы и пресс-релизы по каждому объекту — по запросу.",
  },
  {
    label: "Вакансии",
    email: "jobs@forma.archi",
    note: "Открытый приём портфолио архитекторов и BIM-проектировщиков.",
  },
];

export default function ContactsPage() {
  return (
    <div className="container py-14 md:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Архитектурная мастерская Мамешина
      </p>
      <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">Контакты</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Офис в центре Москвы. Мы работаем по всей России и всегда открыты для
        разговора о новом месте.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="h-fit border-t">
          <div className="border-b py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Адрес</p>
            <p className="mt-3 text-lg">Москва, Большой Козихинский пер., 7, стр. 2</p>
            <p className="mt-1 text-sm text-muted-foreground">
              м. Маяковская, второй двор, код от консьержа — по звонку
            </p>
          </div>
          <div className="border-b py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Телефон</p>
            <p className="mt-3 text-lg">
              <a href="tel:+74950000000" className="hover:underline hover:underline-offset-4">
                +7 (495) 000-00-00
              </a>
            </p>
          </div>
          <div className="border-b py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Часы работы
            </p>
            <p className="mt-3 text-lg">Пн–Пт, 10:00–19:00</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Визит по предварительной договорённости
            </p>
          </div>
          <div className="py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Реквизиты</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              ООО «Архитектурная мастерская Мамешина» · ИНН 7700000000 · ОГРН 1117700000000
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {channels.map((channel) => (
            <div key={channel.email} className="border-t pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {channel.label}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-3 block text-xl font-medium hover:underline hover:underline-offset-4 md:text-2xl"
              >
                {channel.email}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{channel.note}</p>
            </div>
          ))}

          <div className="border-t pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Соцсети</p>
            <div className="mt-3 flex gap-6 text-sm">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Telegram
              </a>
              <a href="#" className="hover:underline hover:underline-offset-4">
                VK
              </a>
              <a href="#" className="hover:underline hover:underline-offset-4">
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
