import { LocalizedText, ProjectBlockId } from "./types";

export const HERO_CONTENT = {
  badge: {
    kk: "Product Studio & Principal Architecture",
    en: "Product Studio & Principal Architecture",
    ru: "Product Studio & Principal Architecture",
  },
  roleTitle: {
    kk: "Full-Cycle AI Product & Infrastructure Architect",
    en: "Full-Cycle AI Product & Infrastructure Architect",
    ru: "Full-Cycle AI Product & Infrastructure Architect",
  },
  name: {
    kk: "Азамат Жауыш",
    en: "Azamat Jauysh",
    ru: "Азамат Жауыш",
  },
  headline: {
    kk: "Коммерциялық AI SaaS өнімдері және 8-кампустық цифрлық экожүйелер",
    en: "Architecting Commercial AI SaaS & 8-Campus Digital Ecosystems",
    ru: "Коммерческие AI SaaS-продукты и цифровые экосистемы 8 кампусов",
  },
  subHeadline: {
    kk: "GovTech пен EdTech-ке арналған агенттік ЖИ платформаларын, 481 форманы біріктірген орталық SIS ядросын және көп филиалды SD-WAN / Proxmox инфрақұрылымын End-to-End жобалаймын.",
    en: "End-to-end builder of neuro-symbolic GovTech & agentic EdTech SaaS, a 9-module K-12 SIS core, and carrier-grade multi-campus SD-WAN / Proxmox infrastructure.",
    ru: "End-to-End разработка агентских платформ GovTech и EdTech, центрального ядра школьной ИС (SIS) и защищенной инфраструктуры SD-WAN / Proxmox.",
  },
  primaryCta: {
    kk: "Барлық 13 жүйе каталогы",
    en: "Explore All 13 Systems",
    ru: "Каталог из 13 систем",
  },
  secondaryCta: {
    kk: "B2B Демо сұрау",
    en: "Request B2B Demo",
    ru: "Запросить B2B-демо",
  },
  cvCta: {
    kk: "CV (1-бет PDF)",
    en: "CV (1-Page PDF)",
    ru: "CV (1 стр. PDF)",
  },
};

export const IMPACT_METRICS: {
  icon: string;
  value: LocalizedText;
  title: LocalizedText;
  detail: LocalizedText;
}[] = [
  {
    icon: "building",
    value: {
      kk: "8 Юнит",
      en: "8 Units",
      ru: "8 Юнитов",
    },
    title: {
      kk: "7 Кампус + Бас кеңсе",
      en: "7 Campuses + HQ OS",
      ru: "7 кампусов + HQ ОС",
    },
    detail: {
      kk: "Core SIS · SD-WAN · Smart TV · 29 арна",
      en: "Core SIS · SD-WAN · Smart TV · 29 channels",
      ru: "Core SIS · SD-WAN · Smart TV · 29 каналов",
    },
  },
  {
    icon: "users",
    value: {
      kk: "3,500+",
      en: "3,500+",
      ru: "3 500+",
    },
    title: {
      kk: "Белсенді қолданушы",
      en: "Active Prod Users",
      ru: "Активных юзеров",
    },
    detail: {
      kk: "2,978 оқушы · 582 IAM · 700+ пик трафик",
      en: "2,978 students · 582 IAM · 700+ peak load",
      ru: "2 978 учеников · 582 IAM · 700+ пик онлайн",
    },
  },
  {
    icon: "cloud",
    value: {
      kk: "41x TTFB",
      en: "41x TTFB",
      ru: "41x TTFB",
    },
    title: {
      kk: "Инженерлік жылдамдық",
      en: "Systems Speedup",
      ru: "Ускорение отклика",
    },
    detail: {
      kk: "23.6 мс NOC · 0.005с AI кэш · 5-Layer DMZ",
      en: "23.6ms NOC · 0.005s AI cache · 5-Layer DMZ",
      ru: "23.6 мс NOC · 0.005с AI кэш · 5-Layer DMZ",
    },
  },
  {
    icon: "globe",
    value: {
      kk: "100 TB+",
      en: "100 TB+",
      ru: "100 ТБ+",
    },
    title: {
      kk: "Деректер & 5+ Тіл",
      en: "Cloud Data & 5+ Langs",
      ru: "Облако и 5+ языков",
    },
    detail: {
      kk: "Workspace IAM · PostgreSQL 16 · KK·RU·TR·EN",
      en: "Workspace IAM · PostgreSQL 16 · KK·RU·TR·EN",
      ru: "Workspace IAM · PostgreSQL 16 · KK·RU·TR·EN",
    },
  },
];

export const STRATEGIC_BLOCKS: {
  id: ProjectBlockId;
  badge: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
}[] = [
  {
    id: "ai-saas",
    badge: {
      kk: "AI SaaS",
      en: "AI SaaS",
      ru: "AI SaaS",
    },
    title: {
      kk: "Флагмандық GovTech & EdTech AI",
      en: "Flagship GovTech & EdTech AI",
      ru: "Флагманские GovTech и EdTech AI",
    },
    subtitle: {
      kk: "Auto-Tender & OmniCheck коммерциялық платформалары",
      en: "Auto-Tender & OmniCheck Commercial SaaS",
      ru: "Коммерческие платформы Auto-Tender и OmniCheck",
    },
    description: {
      kk: "4-қабатты верификациясы бар GovTech тендер терминалы және агенттік педагогикалық циклі бар EdTech SaaS.",
      en: "4-layer self-verifying GovTech sourcing terminal and agentic homework grading & mastery recovery SaaS.",
      ru: "Терминал госзакупок с 4-уровневой самопроверкой ИИ и агентская платформа проверки работ и Mastery Recovery.",
    },
  },
  {
    id: "edtech-enterprise",
    badge: {
      kk: "K-12 OS",
      en: "K-12 OS",
      ru: "K-12 ОС",
    },
    title: {
      kk: "Бірыңғай Мектеп Экожүйесі (SIS/MIS)",
      en: "Unified K-12 Digital OS (SIS/MIS)",
      ru: "Единая школьная экосистема (SIS/MIS)",
    },
    subtitle: {
      kk: "Core SIS, Олимпиада, HR/IAM, Қабылдау MIS, SSP, Web CMS & Media OS",
      en: "Core SIS, Olympiad, HR/IAM, Admissions MIS, SSP, Web CMS & Media OS",
      ru: "Core SIS, Олимпиада, HR/IAM, Прием MIS, SSP, Web CMS и Media OS",
    },
    description: {
      kk: "481 форманы біріктірген PostgreSQL 16 ядросы және 8 бөлімшенің академиялық, кадрлық, қаржылық және медиа жүйелері.",
      en: "Central PostgreSQL 16 SIS replacing 481 forms across 8 units, integrated with high-load Olympiad, IAM, MIS, and Media engines.",
      ru: "Центральное ядро PostgreSQL 16 вместо 481 формы и связанные модули олимпиад, кадров, квот приема, элективов и медиа.",
    },
  },
  {
    id: "infra-devops",
    badge: {
      kk: "SD-WAN & NOC",
      en: "SD-WAN & NOC",
      ru: "SD-WAN и NOC",
    },
    title: {
      kk: "Желі, Proxmox Бұлты & Smart TV",
      en: "SD-WAN, Proxmox Cloud & Smart TV",
      ru: "Сеть SD-WAN, Proxmox и Smart TV",
    },
    subtitle: {
      kk: "7 Кампус WireGuard, 5-Layer DMZ, 12MB NOC & CampusCast TV",
      en: "7-Campus WireGuard, 5-Layer DMZ, 12MB NOC & CampusCast TV",
      ru: "WireGuard 7 кампусов, 5-Layer DMZ, 12 МБ NOC и CampusCast TV",
    },
    description: {
      kk: "MikroTik SD-WAN магистралі, 5-деңгейлі киберқорғаныс, ультра-жеңіл Python/SQLite NOC және 7 кампустың Smart TV эфирі.",
      en: "MikroTik SD-WAN backbone, 5-layer DMZ security, 12 MB RAM Helpdesk/NOC daemons, and 7-campus Smart TV digital signage.",
      ru: "Магистраль MikroTik SD-WAN, 5-уровневая защита DMZ, сверхлегкий NOC/Helpdesk и централизованное вещание Smart TV.",
    },
  },
  {
    id: "erp-consumer",
    badge: {
      kk: "ERP & PWA",
      en: "ERP & PWA",
      ru: "ERP и PWA",
    },
    title: {
      kk: "1C Linux Кластері & Consumer PWA",
      en: "1C Linux Cluster & Consumer PWA",
      ru: "Кластер 1С Linux и клиентские PWA",
    },
    subtitle: {
      kk: "«Береке» Family PWA және 1C:Enterprise + Git/EDT",
      en: "“Bereke” Family PWA & 1C:Enterprise + Git/EDT",
      ru: "Семейное PWA «Береке» и 1С:Предприятие + Git/EDT",
    },
    description: {
      kk: "Отбасылық Digital Detox мобильді PWA қосымшасы және Ubuntu + Postgres Pro 1C v16 серверлік ERP интеграциясы.",
      en: "Offline-first family Digital Detox PWA on Supabase Realtime and 64-bit Linux 1C + Postgres Pro v16 server integration.",
      ru: "Мобильное PWA цифрового детокса семьи на Supabase Realtime и серверный контур 1С 8.3 + Postgres Pro v16 на Linux.",
    },
  },
];
