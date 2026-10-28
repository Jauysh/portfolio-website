import { LocalizedText, ProjectBlockId } from "./types";

export const HERO_CONTENT = {
  badge: {
    kk: "Full-Cycle Engineer & IT Architect · B2B EdTech & AI SaaS Витринасы",
    en: "Full-Cycle Engineer & IT Architect · B2B EdTech & AI SaaS Showcase",
    ru: "Full-Cycle Engineer & IT Architect · Витрина B2B EdTech и AI SaaS",
  },
  roleTitle: {
    kk: "Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
    en: "Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
    ru: "Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
  },
  name: {
    kk: "Азамат Жауыш",
    en: "Azamat Jauysh",
    ru: "Азамат Жауыш",
  },
  headline: {
    kk: "Мультимодальды ЖИ-платформалар, жоғары жүктемелі EdTech SaaS және корпоративтік IT-инфрақұрылым архитектурасы",
    en: "Architecting Multimodal AI SaaS, High-Concurrency EdTech Platforms & Enterprise IT Infrastructure",
    ru: "Архитектура мультимодальных ИИ-платформ, высоконагруженных EdTech SaaS и корпоративной ИТ-инфраструктуры",
  },
  subHeadline: {
    kk: "7–8 филиалы бар халықаралық білім беру желісінің (International K-12 Network) цифрлық экожүйесін, жоғары жүктемелі веб-платформаларын, мультимодальды ЖИ-негізіндегі EdTech SaaS өнімдерін және корпоративтік желілік инфрақұрылымын басынан аяғына дейін (End-to-End) құрастырушы.",
    en: "End-to-End architect of the digital ecosystem for an 8-campus international K-12 educational network, building high-concurrency web platforms, multimodal AI EdTech SaaS products, and enterprise SD-WAN/Proxmox infrastructure.",
    ru: "End-to-End архитектор цифровой экосистемы международной образовательной сети из 8 кампусов, высоконагруженных веб-платформ, мультимодальных AI EdTech SaaS-продуктов и корпоративной сетевой инфраструктуры.",
  },
  primaryCta: {
    kk: "Жобалар мен B2B Витрина (11)",
    en: "Explore Projects & B2B Suite (11)",
    ru: "Смотреть проекты и B2B-витрину (11)",
  },
  secondaryCta: {
    kk: "B2B Демо / Консалтинг",
    en: "Request B2B Demo / Consulting",
    ru: "Запросить B2B-демо / Консалтинг",
  },
  cvCta: {
    kk: "Инженерлік CV (1-бет PDF)",
    en: "Engineering CV (1-Page PDF)",
    ru: "Инженерное CV (1 стр. PDF)",
  },
  terminalLines: {
    kk: [
      "> [OmniCheck SaaS] *.omnicheck.kz Edge Middleware + Top-7% Canvas Privacy Shield — ІСКЕ ҚОСЫЛҒАН",
      "> [LuminaMath] luminamath.orizont.md Cloud Run (1,200 req/s) + BYTEA OMR PDF — ОНЛАЙН",
      "> [Media OS & Web CMS] 29 Арна Zero-Password AI Hub + 30-Route 3D-Secure CMS — ДАЙЫН",
      "> [SD-WAN & NOC] 7 Кампус WireGuard (~7ms RTT) + 5-Layer DMZ + 12MB RAM Helpdesk — 100% OK",
    ],
    en: [
      "> [OmniCheck SaaS] *.omnicheck.kz Edge Middleware + Top-7% Canvas Privacy Shield — ACTIVE",
      "> [LuminaMath] luminamath.orizont.md Cloud Run (1,200 req/s) + BYTEA OMR Stream — ONLINE",
      "> [Media OS & Web CMS] 29-Channel Zero-Password AI Hub + 30-Route 3D-Secure CMS — READY",
      "> [SD-WAN & NOC] 7 Campuses WireGuard (~7ms RTT) + 5-Layer DMZ + 12MB RAM Helpdesk — 100% OK",
    ],
    ru: [
      "> [OmniCheck SaaS] *.omnicheck.kz Edge Middleware + Top-7% Canvas Privacy Shield — АКТИВЕН",
      "> [LuminaMath] luminamath.orizont.md Cloud Run (1,200 req/s) + BYTEA OMR Stream — ОНЛАЙН",
      "> [Media OS & Web CMS] 29 каналов Zero-Password AI Hub + 30-Route 3D-Secure CMS — ГОТОВ",
      "> [SD-WAN & NOC] 7 кампусов WireGuard (~7ms RTT) + 5-Layer DMZ + 12MB RAM Helpdesk — 100% OK",
    ],
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
      kk: "7–8 Кампус",
      en: "7–8 Campuses",
      ru: "7–8 Кампусов",
    },
    title: {
      kk: "Бірыңғай білім беру желісі",
      en: "Unified Multi-Campus Network",
      ru: "Единая сеть учебных кампусов",
    },
    detail: {
      kk: "WireGuard SD-WAN, Proxmox бұлттық кластері, 29 цифрлық медиа-арна және корпоративтік порталдар.",
      en: "WireGuard SD-WAN, Proxmox cloud cluster, 29 digital media channels & executive web portals.",
      ru: "WireGuard SD-WAN, облачный кластер Proxmox, 29 цифровых медиа-каналов и корпоративные порталы.",
    },
  },
  {
    icon: "users",
    value: {
      kk: "3,000+ Қолданушы",
      en: "3,000+ Active Users",
      ru: "3 000+ Пользователей",
    },
    title: {
      kk: "Жоғары жүктемелі өнімдер",
      en: "High-Concurrency Production Users",
      ru: "Активные пользователи в продакшене",
    },
    detail: {
      kk: "2,978 оқушы, бір мезетте 700+ олимпиада қатысушысы, 619 қызметкер және 50+ топ-менеджер.",
      en: "2,978 students, 700+ simultaneous Olympiad users, 619 staff accounts & 50+ executives.",
      ru: "2 978 учеников, 700+ одновременных участников олимпиад, 619 сотрудников и 50+ руководителей.",
    },
  },
  {
    icon: "cloud",
    value: {
      kk: "100 TB+ Деректер",
      en: "100 TB+ Data Pool",
      ru: "100 ТБ+ Данных",
    },
    title: {
      kk: "Multi-Tenant & Бұлттық Архитектура",
      en: "Multi-Tenant & Cloud Data Sovereignty",
      ru: "Multi-Tenant и облачная архитектура",
    },
    detail: {
      kk: "Google Workspace Enterprise, PostgreSQL Serializable транзакциялары, 5-деңгейлі DMZ және chattr +i.",
      en: "Google Workspace Enterprise, PostgreSQL Serializable locks, 5-Layer DMZ & immutable backups.",
      ru: "Google Workspace Enterprise, транзакции PostgreSQL Serializable, 5-уровневая DMZ и chattr +i.",
    },
  },
  {
    icon: "globe",
    value: {
      kk: "5+ Тіл & Нарық",
      en: "5+ Languages",
      ru: "5+ Языков",
    },
    title: {
      kk: "Көптілді инженерлік коммуникация",
      en: "Cross-Border Engineering & i18n",
      ru: "Мультиязычные продукты и коммуникация",
    },
    detail: {
      kk: "Жұмыс тілдері: KK · RU · TR · EN (+ AR базалық). Ал жасалған SaaS өнімдері 6 тілдік локализацияны (RTL қоса) қолдайды.",
      en: "Working languages: KK, RU, TR, EN (+ basic AR), with SaaS platforms supporting up to 6 locales including RTL.",
      ru: "Рабочие языки: KK, RU, TR, EN (+ базовый AR), а разработанные SaaS-платформы поддерживают до 6 локализаций (включая RTL).",
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
      kk: "🏆 1-БЛОК",
      en: "🏆 BLOCK 1",
      ru: "🏆 БЛОК 1",
    },
    title: {
      kk: "Flagship AI & EdTech SaaS",
      en: "Flagship AI & EdTech SaaS",
      ru: "Флагманский AI & EdTech SaaS",
    },
    subtitle: {
      kk: "Басты технологиялық B2B/B2C өнім",
      en: "Core B2B/B2C Multi-Tenant Product",
      ru: "Главный технологический B2B/B2C продукт",
    },
    description: {
      kk: "Мектептер желілері мен білім орталықтарына арналған мультимодальды ЖИ (Gemini 2.0 Flash Vision / GPT-4o) платформасы: қолжазба үй тапсырмаларын тексеру, антиплагиат (dHash), GDPR Privacy Shield және 24/7 Сократтық репетитор.",
      en: "Multi-tenant B2B/B2C SaaS platform for school networks & prep centers: Vision LLM handwritten STEM grading, perceptual dHash anti-plagiarism, browser-side GDPR Privacy Shield, and 24/7 Socratic AI tutoring.",
      ru: "Мультитенантная B2B/B2C SaaS-платформа для сетей школ и учебных центров: проверка рукописных работ через Vision LLM, антиплагиат dHash, браузерный GDPR Privacy Shield и сократический ИИ-тьютор 24/7.",
    },
  },
  {
    id: "edtech-enterprise",
    badge: {
      kk: "⚡ 2-БЛОК",
      en: "⚡ BLOCK 2",
      ru: "⚡ БЛОК 2",
    },
    title: {
      kk: "High-Concurrency & Enterprise School Systems",
      en: "High-Concurrency & Enterprise School Systems",
      ru: "Высоконагруженные школьные и корпоративные системы",
    },
    subtitle: {
      kk: "Республикалық олимпиадалар, MIS, HR/IAM, AI Media OS және Web CMS",
      en: "National Olympiad, SIS, HR/IAM, AI Media OS & Web CMS Platforms",
      ru: "Республиканские олимпиады, MIS-дашборды, HR/IAM, AI Media OS и Web CMS",
    },
    description: {
      kk: "Республикалық математика олимпиадасы (LuminaMath), транзакциялық элективті пәндер жүйесі (SSP), 7 филиалдың квота MIS дашборды (GM-App), Google Workspace IAM/HR порталы, 29 арналы AI Media OS және 3D-Secure эквайрингі бар Web CMS.",
      en: "National Math Olympiad engine (LuminaMath), Serializable-locked elective selection (SSP), 7-campus executive admissions MIS (GM-App), Google Workspace IAM & HR portal, 29-channel AI Media OS, and 30-route 3D-Secure Web CMS.",
      ru: "Республиканская олимпиада LuminaMath, транзакционный выбор предметов (SSP), управленческий MIS-дашборд 7 филиалов (GM-App), портал Google Workspace IAM/HR, AI Media OS на 29 каналов и гибридная Web CMS с 3D-Secure эквайрингом.",
    },
  },
  {
    id: "infra-devops",
    badge: {
      kk: "🖧 3-БЛОК",
      en: "🖧 BLOCK 3",
      ru: "🖧 БЛОК 3",
    },
    title: {
      kk: "Network, Proxmox Cloud & Security Infrastructure",
      en: "Network, Proxmox Cloud & Security Infrastructure",
      ru: "Сетевая архитектура, облако Proxmox и безопасность",
    },
    subtitle: {
      kk: "7 филиалдық SD-WAN, 5-деңгейлі DMZ және Zero-IOPS NOC/Helpdesk",
      en: "7-Campus WireGuard SD-WAN, 5-Layer DMZ & Zero-IOPS NOC/Helpdesk",
      ru: "7-филиальный WireGuard SD-WAN, 5-уровневая DMZ и Zero-IOPS NOC/Helpdesk",
    },
    description: {
      kk: "7–8 кампустың бірыңғай MikroTik WireGuard SD-WAN желісі, CAPsMAN Wi-Fi 6, Proxmox LXC кластері, 12 МБ RAM тұтынатын кастомды Python/SQLite WAL Helpdesk & Live NOC (TTFB 41 есе жылдам) және 100 TB Google Workspace.",
      en: "Unified MikroTik WireGuard SD-WAN across 7–8 campuses, CAPsMAN Wi-Fi 6, Proxmox LXC virtualization, custom 12 MB RAM Python/SQLite WAL Helpdesk & Live NOC (41x faster TTFB), Ansible DR, and 100 TB Google Workspace.",
      ru: "Единая сеть MikroTik WireGuard SD-WAN для 7–8 кампусов, CAPsMAN Wi-Fi 6, виртуализация Proxmox LXC, кастомные Python/SQLite WAL движки Helpdesk и Live NOC (12 МБ RAM, ускорение TTFB в 41 раз), Ansible DR и 100 ТБ Google Workspace.",
    },
  },
  {
    id: "erp-consumer",
    badge: {
      kk: "🌱 4-БЛОК",
      en: "🌱 BLOCK 4",
      ru: "🌱 БЛОК 4",
    },
    title: {
      kk: "ERP, FinTech & Consumer Apps",
      en: "ERP, FinTech & Consumer Productivity Apps",
      ru: "ERP-системы, FinTech и клиентские приложения",
    },
    subtitle: {
      kk: "1C:Enterprise 8.3 кластері, «Береке» PWA және Инженерлік OS",
      en: "1C:Enterprise 8.3 Linux Cluster, «Bereke» Family PWA & Command Center",
      ru: "Кластер 1C:Предприятие 8.3 на Linux, семейное PWA «Береке» и Command Center",
    },
    description: {
      kk: "1C:EDT + Git + Postgres Pro 1C 16 + Linux стекіндегі бөлшек сауда/бухгалтерия ERP жүйесі (KotofeyRetail), отбасылық әдеттер мен Digital Detox-қа арналған «Береке» мобильді PWA (Supabase Realtime) және GTD Command Center.",
      en: "Client-server 1C:Enterprise 8.3 ERP on Ubuntu + Postgres Pro 1C 16 with Git/EDT workflow (KotofeyRetail), offline-first family habit & Digital Detox PWA («Bereke» on Supabase Realtime), and WIP-limit GTD Command Center.",
      ru: "Клиент-серверный кластер 1С:Предприятие 8.3 на Ubuntu + Postgres Pro 1C 16 в связке с 1C:EDT и Git (KotofeyRetail), семейное PWA «Береке» с таймером Digital Detox (Supabase Realtime) и инженерный Command Center.",
    },
  },
];
