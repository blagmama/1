export type ProjectCategory = "building" | "project";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  location: string;
  status: string;
  area: string;
  program: string;
  description: string[];
  facts: { label: string; value: string }[];
  image: string;
  images: string[];
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  building: "Постройки",
  project: "Проекты",
};

export const projects: Project[] = [
  {
    slug: "dom-na-skale",
    title: "Дом на скале",
    category: "building",
    year: 2023,
    location: "Ленинградская область",
    status: "Построено",
    area: "240 м²",
    program: "Частный дом",
    description: [
      "Одноэтажный дом из монолитного бетона поставлен на скальное основание и повторяет его геометрию. Единственный фасад — горизонтальная лента остекления, обращённая к воде; остальные стены глухие и работают как фон для пейзажа.",
      "Планировка свёрстана вокруг внутреннего двора, защищённого от ветра. Бетон оставлен без отделки: со временем здание темнеет и приближается по тону к скале, на которой стоит.",
    ],
    facts: [
      { label: "Местоположение", value: "Ленинградская область" },
      { label: "Год", value: "2023" },
      { label: "Статус", value: "Построено" },
      { label: "Площадь", value: "240 м²" },
      { label: "Программа", value: "Частный дом" },
    ],
    image: "/images/dom-na-skale.webp",
    images: [
      "/images/dom-na-skale.webp",
      "/images/dom-na-skale-2.webp",
      "/images/dom-na-skale-3.webp",
    ],
    featured: true,
  },
  {
    slug: "biblioteka-tishiny",
    title: "Библиотека тишины",
    category: "building",
    year: 2021,
    location: "Тверь",
    status: "Построено",
    area: "1 800 м²",
    program: "Общественное здание",
    description: [
      "Городская библиотека в структуре бывшего завода: читальный зал длиной сорок метров освещён сквозь высокие узкие окна в шахматном порядке. Ряды столов ориентированы на один вектор — к дальней стене с каталогом.",
      "Акустика собрана из простых средств: подвесной потолок с перфорацией, плотные шторы, открытая книжная масса как поглотитель. Здание работает без навигационных указателей — маршрут читается по свету.",
    ],
    facts: [
      { label: "Местоположение", value: "Тверь" },
      { label: "Год", value: "2021" },
      { label: "Статус", value: "Построено" },
      { label: "Площадь", value: "1 800 м²" },
      { label: "Программа", value: "Общественное здание" },
    ],
    image: "/images/biblioteka-tishiny.webp",
    images: [
      "/images/biblioteka-tishiny.webp",
      "/images/biblioteka-tishiny-2.webp",
      "/images/biblioteka-tishiny-3.webp",
    ],
    featured: true,
  },
  {
    slug: "kvartal-setka",
    title: "Квартал «Сетка»",
    category: "building",
    year: 2022,
    location: "Москва",
    status: "Построено",
    area: "12 400 м²",
    program: "Жильё, первые этажи",
    description: [
      "Среднеэтажный квартал, собранный из одинаковых жилых секций по модулю 12 × 12 метров. Все корпуса выше четырёх этажей не поднимаются, поэтому дворы получают солнце весь день.",
      "Первые этажи отданы мастерским и магазинам, дворы освобождены от парковок. Различие домов достигается не декором, а глубиной лоджий и ритмом проёмов.",
    ],
    facts: [
      { label: "Местоположение", value: "Москва" },
      { label: "Год", value: "2022" },
      { label: "Статус", value: "Построено" },
      { label: "Площадь", value: "12 400 м²" },
      { label: "Программа", value: "Жильё, первые этажи" },
    ],
    image: "/images/kvartal-setka.webp",
    images: [
      "/images/kvartal-setka.webp",
      "/images/kvartal-setka-2.webp",
      "/images/kvartal-setka-3.webp",
    ],
  },
  {
    slug: "pavilion-sveta",
    title: "Павильон света",
    category: "building",
    year: 2020,
    location: "Николо-Ленивец",
    status: "Построено",
    area: "320 м²",
    program: "Арт-павильон",
    description: [
      "Тёмный бетонный объём без окон. Единственный источник света — узкий фонарь в перекрытии, через который луч проходит по стене и отмечает ход дня.",
      "Павильон построен для одной выставки и остался как место тишины: внутри нет ни электричества, ни мебели, только скамья и луч.",
    ],
    facts: [
      { label: "Местоположение", value: "Николо-Ленивец" },
      { label: "Год", value: "2020" },
      { label: "Статус", value: "Построено" },
      { label: "Площадь", value: "320 м²" },
      { label: "Программа", value: "Арт-павильон" },
    ],
    image: "/images/pavilion-sveta.webp",
    images: [
      "/images/pavilion-sveta.webp",
      "/images/pavilion-sveta-2.webp",
      "/images/pavilion-sveta-3.webp",
    ],
    featured: true,
  },
  {
    slug: "remiz-studiy",
    title: "«Ремиз» — студии на фабрике",
    category: "building",
    year: 2019,
    location: "Санкт-Петербург",
    status: "Построено",
    area: "2 600 м²",
    program: "Реновация, мастерские",
    description: [
      "Приспособление корпуса ткацкой фабрики XIX века под творческие студии. Несущие конструкции сохранены, добавлен только минимум: один новый лифтовой узел и наружная пожарная лестница.",
      "Кирпичный фасад очищен до исторической кладки, окна восстановлены по старым переплётам. Новое не имитирует старое — вставки из чёрной стали читаются сразу.",
    ],
    facts: [
      { label: "Местоположение", value: "Санкт-Петербург" },
      { label: "Год", value: "2019" },
      { label: "Статус", value: "Построено" },
      { label: "Площадь", value: "2 600 м²" },
      { label: "Программа", value: "Реновация, мастерские" },
    ],
    image: "/images/remiz-studiy.webp",
    images: [
      "/images/remiz-studiy.webp",
      "/images/remiz-studiy-2.webp",
      "/images/remiz-studiy-3.webp",
    ],
  },
  {
    slug: "muzei-zemli",
    title: "Музей земли",
    category: "project",
    year: 2025,
    location: "Казань",
    status: "Победа в конкурсе",
    area: "6 800 м²",
    program: "Музей",
    description: [
      "Музей, скрытый в рельефе: посетитель идёт по длинному пандусу вдоль откоса, и залы раскрываются постепенно, земляными террасами. Здание не видно с набережной — виден только входной разрез.",
      "Кровля засажена степными травами и открыта для города как продолжение парка. Конкурсное предложение выполнено в одну стадию с местными инженерами.",
    ],
    facts: [
      { label: "Местоположение", value: "Казань" },
      { label: "Год", value: "2025" },
      { label: "Статус", value: "Победа в конкурсе" },
      { label: "Площадь", value: "6 800 м²" },
      { label: "Программа", value: "Музей" },
    ],
    image: "/images/muzei-zemli.webp",
    images: [
      "/images/muzei-zemli.webp",
      "/images/muzei-zemli-2.webp",
      "/images/muzei-zemli-3.webp",
    ],
    featured: true,
  },
  {
    slug: "shkola-na-reke",
    title: "Школа на реке",
    category: "project",
    year: 2024,
    location: "Пермь",
    status: "Проект",
    area: "4 500 м²",
    program: "Школа на 900 мест",
    description: [
      "Школа-лента: классные секции повторяются вдоль реки с шагом глубоких оконных ниш, каждый класс получает собственный световой карман и вид на воду.",
      "Спортивный блок утоплен в рельеф со стороны двора, крыша спортзала работает как школьная площадь. Проект прошёл госэкспертизу и ожидает финансирования.",
    ],
    facts: [
      { label: "Местоположение", value: "Пермь" },
      { label: "Год", value: "2024" },
      { label: "Статус", value: "Проект" },
      { label: "Площадь", value: "4 500 м²" },
      { label: "Программа", value: "Школа на 900 мест" },
    ],
    image: "/images/shkola-na-reke.webp",
    images: [
      "/images/shkola-na-reke.webp",
      "/images/shkola-na-reke-2.webp",
      "/images/shkola-na-reke-3.webp",
    ],
  },
  {
    slug: "dom-vertikal",
    title: "Дом-вертикаль",
    category: "project",
    year: 2024,
    location: "Москва",
    status: "Проект",
    area: "9 300 м²",
    program: "Жилой дом",
    description: [
      "Узкая жилая башня 18 × 18 метров в плане. На каждом этаже — четыре квартиры с окнами в две стороны, лестнично-лифтовой узел вынесен на северный фасад.",
      "Фасад собран из двух материалов: светло-серый монолит и стеклянные ленты. Со стороны виден только ритм плит перекрытия — дом читается как стопка горизонталей.",
    ],
    facts: [
      { label: "Местоположение", value: "Москва" },
      { label: "Год", value: "2024" },
      { label: "Статус", value: "Проект" },
      { label: "Площадь", value: "9 300 м²" },
      { label: "Программа", value: "Жилой дом" },
    ],
    image: "/images/dom-vertikal.webp",
    images: [
      "/images/dom-vertikal.webp",
      "/images/dom-vertikal-2.webp",
      "/images/dom-vertikal-3.webp",
    ],
  },
  {
    slug: "chasovnya-u-polya",
    title: "Часовня у поля",
    category: "project",
    year: 2023,
    location: "Вологодская область",
    status: "В работе",
    area: "45 м²",
    program: "Часовня",
    description: [
      "Малая деревянная часовня посреди поля: брус, тесовая кровля, одно окно на восток. Внутри помещается не больше двенадцати человек.",
      "Все детали рассчитаны на сборку вручную без техники — доставка на участок возможна только зимой по льду. Строительство начнётся следующим сезоном.",
    ],
    facts: [
      { label: "Местоположение", value: "Вологодская область" },
      { label: "Год", value: "2023" },
      { label: "Статус", value: "В работе" },
      { label: "Площадь", value: "45 м²" },
      { label: "Программа", value: "Часовня" },
    ],
    image: "/images/chasovnya-u-polya.webp",
    images: [
      "/images/chasovnya-u-polya.webp",
      "/images/chasovnya-u-polya-2.webp",
      "/images/chasovnya-u-polya-3.webp",
    ],
  },
  {
    slug: "teatr-dvuh-svetov",
    title: "Театр двух светов",
    category: "project",
    year: 2025,
    location: "Екатеринбург",
    status: "Конкурс",
    area: "7 200 м²",
    program: "Театр, фойе-общественное пространство",
    description: [
      "Конкурсный проект камерного театра. Два световых колодца — дневной и вечерний — делят фойе: дневной открыт в небо над лестницей, вечерний — глубокая ниша с рядами ламп у зрительного зала.",
      "Зрительный зал рассчитан на 480 мест и сделан перестраиваемым: амфитеатр на плоских фермах может складываться в плоскость для концертов.",
    ],
    facts: [
      { label: "Местоположение", value: "Екатеринбург" },
      { label: "Год", value: "2025" },
      { label: "Статус", value: "Конкурс" },
      { label: "Площадь", value: "7 200 м²" },
      { label: "Программа", value: "Театр, фойе" },
    ],
    image: "/images/teatr-dvuh-svetov.webp",
    images: [
      "/images/teatr-dvuh-svetov.webp",
      "/images/teatr-dvuh-svetov-2.webp",
      "/images/teatr-dvuh-svetov-3.webp",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function nextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
