import { ProjectItem } from "./types";

export const PROJECTS_PART_2: ProjectItem[] = [
  {
    id: "corporate-web-cms",
    slug: "corporate-web-cms",
    block: "edtech-enterprise",
    featured: false,
    b2bReady: true,
    title: {
      kk: "Multi-Campus Corporate Portal, CMS & 3D-Secure Tuition Gateway",
      en: "Multi-Campus Corporate Portal, CMS & 3D-Secure Tuition Gateway",
      ru: "Корпоративный портал сети кампусов, CMS и 3D-Secure эквайринг",
    },
    subtitle: {
      kk: "30/30 Маршрут · Hybrid Next.js + PHP 8.4 CMS · Банктік 3D-Secure Төлем · GEO/AEO",
      en: "30/30 Routes · Hybrid Next.js + PHP 8.4 CMS · Bank 3D-Secure Acquiring · GEO/AEO",
      ru: "30/30 маршрутов · Гибрид Next.js + PHP 8.4 CMS · Банковский 3D-Secure · GEO/AEO",
    },
    domainOrPort: {
      kk: "Hybrid SSG + PHP 8.4 Bridge",
      en: "Hybrid SSG + PHP 8.4 Bridge",
      ru: "Гибрид SSG + PHP 8.4 Bridge",
    },
    statusBadge: {
      kk: "30 Маршрут · 3D-Secure Эквайринг",
      en: "30 Routes · 3D-Secure Acquiring",
      ru: "30 маршрутов · 3D-Secure эквайринг",
    },
    b2bValue: {
      kk: "Білім беру желілеріндегі ауыр 4.1 ГБ WordPress сайттарын лезде ашылатын Next.js порталына көшіріп, оқу ақысын банк картасымен (3D-Secure) онлайн қабылдауды қосады.",
      en: "Replaces bloated legacy WordPress portals with an instant 30-route Next.js + PHP 8.4 CMS, live bank 3D-Secure tuition acquiring, and AI-search (GEO/AEO) visibility.",
      ru: "Заменяет тяжелые сайты WordPress на мгновенный 30-маршрутный портал Next.js + PHP 8.4 CMS с онлайн-оплатой контрактов по 3D-Secure и оптимизацией под ИИ-поиск.",
    },
    summary: {
      kk: "4.1 ГБ ескі WordPress орнына жасалған 3 тілдегі (RO, EN, RU) 30 маршруттық портал: онлайн оқу ақысы эквайрингі, 4-транштық калькулятор, чемпиондар мен мұғалімдердің тірі API витринасы және 2,773 түлектің GDPR базасы.",
      en: "Trilingual 30-route Next.js SSG + Native PHP 8.4 CMS replacing a 4.1 GB WordPress monolith, complete with 3D-Secure tuition payments, 4-tranche fee calculator, live Faculty/Olympiad APIs, and 2,773 GDPR alumni profiles.",
      ru: "Трехъязычный портал из 30 маршрутов (Next.js SSG + PHP 8.4 CMS) вместо 4.1 ГБ WordPress: эквайринг 3D-Secure, калькулятор контрактов, живая синхронизация педагогов/чемпионов и база 2 773 выпускников по GDPR.",
    },
    challenge: {
      kk: "2017 жылдан бері жұмыс істеген WordPress сайты 4.1 ГБ-қа дейін ісініп, мобильді құрылғыларда баяу ашылды және плагин осалдықтарына ұшырады, ал мыңдаған түлек жазбасында SQL деңгейіндегі GDPR сүзгісі болмады.",
      en: "The legacy WordPress setup had bloated to 4.1 GB, suffered from slow mobile rendering and plugin exploits, and lacked strict SQL-level GDPR data minimization across alumni records.",
      ru: "Старый сайт на WordPress разросся до 4.1 ГБ, страдал от медленной мобильной загрузки и уязвимостей плагинов, при этом требовалось сохранить банковский эквайринг и защитить данные выпускников.",
    },
    solution: {
      kk: "30 маршруттық Next.js SSG фронтенді мен қорғалған Native PHP 8.4 CMS Bridge біріктірілді. 15 өрісті банктік 3D-Secure төлем шлюзі, олимпиада чемпиондары мен мұғалімдерді ішкі API-ден тірі тарту, Google Workspace Gmail OAuth2 HTTPS көпірі және ChatGPT/Perplexity үшін llms.txt енгізілді.",
      en: "Engineered a 30-route Next.js SSG frontend paired with a hardened Native PHP 8.4 CMS Bridge, 15-field bank 3D-Secure MAC payment signing, live Faculty & Olympiad Champions API syndication, HTTPS Gmail OAuth2 delivery, and llms.txt GEO manifests.",
      ru: "Создана связка из 30 маршрутов Next.js SSG и защищенного моста PHP 8.4 CMS, сохранен 15-польный шлюз 3D-Secure, подключена живая выгрузка учителей и олимпийцев по API, настроена отправка заявок через Gmail OAuth2 и манифесты llms.txt.",
    },
    outcome: {
      kk: "Барлық 30 маршрут <50 мс статикалық жылдамдықпен ашылады, 2,773 түлектің жеке телефоны мен поштасы SQL деңгейінде 100% қиылады (+ 1-Click GDPR Opt-Out), ал ата-аналар 4 транштық кестені PDF түрінде жүктеп онлайн төлейді.",
      en: "Delivered sub-50ms static loads across 30 trilingual routes, zero PII leakage across 2,773 alumni records (with 1-click Art. 17 Opt-Out), and 24/7 self-service tuition calculation & card payment.",
      ru: "Обеспечена мгновенная загрузка 30 маршрутов, 0 утечек персональных данных по 2 773 выпускникам (SQL-фильтрация + удаление по ст. 17 GDPR в 1 клик) и круглосуточная онлайн-оплата контрактов.",
    },
    highlights: {
      kk: [
        "3D-Secure Payment Hub & 4-Tranche Calculator: Бауырлар/олимпиада жеңілдіктерін есептеу, PDF смета жүктеу және банк картасымен тікелей онлайн төлеу.",
        "GDPR Alumni Hall of Fame (2,773 түлек): Жеке телефон/email-ді SQL сұранысында қиып тастау және 1 батырмамен GDPR Art. 17 Opt-Out.",
        "Live Ecosystem Syndication: Мұғалімдер портфолиосы мен 1996–2026 олимпиада чемпиондарын ішкі IAM/HR жүйесінен автоматты тарту.",
        "GEO / AEO (llms.txt) & HTTPS Gmail OAuth2: ЖИ-іздеу жүйелеріне арналған құрылымдалған деректер паспорты және SMTP блоктауын айналып өту.",
      ],
      en: [
        "3D-Secure Tuition Gateway & 4-Tranche Calculator: Computes sibling/merit discounts, exports PDF quotes, and processes live 3D-Secure card payments.",
        "GDPR-Hardened Alumni Directory (2,773 Graduates): Strips private phones/emails at the SQL query layer with 1-click GDPR Art. 17 removal.",
        "Live Faculty & Champions Syndication: Automatically syncs verified teacher profiles and Olympiad medalists from internal campus APIs.",
        "GEO / AEO (llms.txt) & HTTPS Gmail OAuth2: Structured manifests for ChatGPT/Perplexity plus SMTP-independent OAuth2 lead routing.",
      ],
      ru: [
        "Шлюз 3D-Secure и калькулятор 4 траншей: Расчет скидок, генерация PDF-сметы и прямая оплата обучения банковской картой.",
        "База 2 773 выпускников по стандарту GDPR: Отсечение личных телефонов и email на уровне SQL-запроса + автоудаление профиля по ст. 17 GDPR.",
        "Живая синхронизация витрин: Автоматическая подгрузка верифицированных педагогов и призеров олимпиад из внутреннего API.",
        "GEO / AEO (llms.txt) и Gmail OAuth2 HTTPS: Структурированные паспорта для ИИ-поиска и доставка заявок в обход блокировок SMTP.",
      ],
    },
    architectureFlow: [
      "Next.js SSG (30 Routes · RO / EN / RU)",
      "Hardened PHP 8.4 CMS Bridge",
      "Bank 3D-Secure Gateway (RSA/MAC Sign)",
      "Live Faculty & Olympiad GDPR APIs",
      "MySQL Alumni Store (SQL PII Stripping)",
      "Gmail HTTPS OAuth2 + llms.txt GEO",
    ],
    techStack: [
      "Next.js (SSG + Hybrid)",
      "TypeScript",
      "PHP 8.4 CMS Bridge",
      "MySQL",
      "3D-Secure E-Commerce",
      "Gmail OAuth2 JWT API",
      "Meta & Flickr APIs",
      "GEO/AEO (llms.txt)",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: "30 / 30",
        label: { kk: "Маршрут 3 тілде (RO·EN·RU)", en: "Trilingual Routes (RO·EN·RU)", ru: "Маршрутов на 3 языках" },
      },
      {
        value: "2,773",
        label: { kk: "GDPR түлектер профилі", en: "GDPR Alumni Profiles", ru: "Профилей выпускников GDPR" },
      },
      {
        value: "3D-Secure",
        label: { kk: "Онлайн оқу ақысы эквайрингі", en: "Live Tuition Acquiring", ru: "Онлайн-оплата контрактов" },
      },
      {
        value: "4.1GB → SSG",
        label: { kk: "WordPress-тен лездік SSG-ге", en: "Legacy WP → Instant SSG", ru: "Миграция с тяжелого WP" },
      },
    ],
  },
  {
    id: "media-os",
    slug: "media-os",
    block: "edtech-enterprise",
    featured: false,
    b2bReady: true,
    title: {
      kk: "Enterprise Media OS — 5-Agent AI Marketing Office & 29-Channel Hub",
      en: "Enterprise Media OS — 5-Agent AI Marketing Office & 29-Channel Hub",
      ru: "Enterprise Media OS — 5-агентный ИИ-маркетинг и хаб 29 каналов",
    },
    subtitle: {
      kk: "29 Цифрлық Арна · 5-Агенттік AI Pipeline · Zero-Password · SRT Субтитрлер & Lead CRM",
      en: "29 Digital Channels · 5-Agent AI Pipeline · Zero-Password · AI SRT Subtitles & Lead CRM",
      ru: "29 цифровых каналов · Конвейер из 5 ИИ-агентов · Zero-Password · ИИ-субтитры и Lead CRM",
    },
    domainOrPort: {
      kk: "Zero-Password Media Hub · 29 Арна",
      en: "Zero-Password Media Hub · 29 Channels",
      ru: "Zero-Password Media Hub · 29 каналов",
    },
    statusBadge: {
      kk: "5-Agent AI · 29 Цифрлық Арна",
      en: "5-Agent AI · 29 Digital Channels",
      ru: "5-Agent AI · 29 цифровых каналов",
    },
    b2bValue: {
      kk: "Көп филиалды желілер мен франшизаларда 29 әлеуметтік аккаунттың құпиясөзін таратпай (Zero-Password), 5 ЖИ-агент арқылы контент, видео субтитр және лид-воронканы орталықтан басқарады.",
      en: "Governs 29+ social channels across multi-branch franchises without password sharing, automating copywriting, photo/video prep, GDPR minor consent, and social-to-lead conversion.",
      ru: "Управляет 29+ каналами филиальной сети без раздачи паролей (Zero-Password), автоматизируя копирайтинг, обработку фото/видео, контроль GDPR и сбор лидов в CRM.",
    },
    summary: {
      kk: "7 филиал мен Бас кеңсенің 29 арнасын біріктіретін AI медиа-платформа: 5-агенттік маркетинг конвейері, 1 батырмамен фото жақсарту, видеоға SRT субтитр жасау, бәсекелес жарнамасын талдау және Social-to-Lead CRM.",
      en: "Dual-UX Media OS unifying 29 channels across 7 branches + HQ with a 5-Agent AI Marketing Office, 1-click photo enhance, AI video SRT subtitle generator, Competitor Ad Spy, and Social-to-Lead CRM.",
      ru: "Двухконтурная медиа-ОС для 29 каналов 7 филиалов и HQ: 5-агентный ИИ-отдел маркетинга, улучшение фото в 1 клик, генерация SRT-субтитров к видео, мониторинг рекламы конкурентов и Social-to-Lead CRM.",
    },
    challenge: {
      kk: "7 филиалдағы 29 аккаунттың құпиясөздерін редакторларға беру қауіпсіздік тәуекелін, дизайн ала-құлалығын, бір уақытта шыққан посттардың бірін-бірі басып тастауын және балалар фотосы бойынша GDPR қателерін тудырды.",
      en: "Sharing credentials for 29 accounts across 7 branches caused security exposure, inconsistent tone/visuals, post cannibalization, and GDPR risks around minors' photos.",
      ru: "Раздача паролей от 29 соцсетей редакторам 7 филиалов создавала угрозы безопасности, разнобой в визуале, каннибализацию охватов и риски нарушения GDPR при публикации фото детей.",
    },
    solution: {
      kk: "Linear стиліндегі прогрессивті интерфейсі бар Zero-Password платформасы құрылды: 1 идеядан әр желіге (IG/FB/LinkedIn/YT) бөлек мәтін мен 4 тілдік аударма жасайтын 5-агенттік AI конвейер, 1-Click Photo Enhance + Canvas постер студиясы, AI Video SRT субтитр генераторы, Competitor Ad Spy және GM-App квотасымен байланысқан Social-to-Lead CRM енгізілді.",
      en: "Built a progressive-disclosure Zero-Password platform powered by a 5-Agent AI Marketing Pipeline (ethics check, channel-specific IG/FB/LinkedIn/YT tailoring, 4-language translation), HTML5 Canvas poster & 1-click photo enhance studio, AI video SRT subtitle generator, Competitor Ad Spy, and GM-App quota-triggered Lead CRM.",
      ru: "Разработана платформа Zero-Password с конвейером из 5 ИИ-агентов (проверка этики, адаптация под формат IG/FB/LinkedIn/YT, перевод на 4 языка), студией баннеров и улучшения фото в 1 клик, генератором видео-субтитров SRT, модулем Competitor Ad Spy и воронкой Social-to-Lead CRM.",
    },
    outcome: {
      kk: "29 арна құпиясөз бөліспейтін режимге көшірілді, Smart Time Slots арқылы филиалдар арасындағы каннибализация жойылды, ал әлеуметтік желідегі пікірлер мен сұраныстар тікелей оқушы қабылдау воронкасына айналды.",
      en: "Secured all 29 channels under Zero-Password governance, eliminated branch post cannibalization, enforced 100% parental GDPR consent, and connected social engagement directly to admissions leads.",
      ru: "Все 29 каналов переведены на режим без передачи паролей, устранена каннибализация охватов между филиалами, внедрен 100% фильтр GDPR-согласий, а трафик соцсетей связан с воронкой приема.",
    },
    highlights: {
      kk: [
        "5-Agent AI Marketing Pipeline: Этикалық модерация, IG/FB/LinkedIn/YouTube форматтарына бейімдеу және 4 тілге (RO, EN, RU, TR) авто-аударма.",
        "AI Media & Video Studio: 1-Click Photo Enhance, HTML5 Canvas 1080×1080 постер генераторы және видеоларға автоматты SRT субтитр дайындау.",
        "Competitor Ad Spy & Quota Trigger: Нарықтағы бәсекелестердің белсенді жарнамаларын талдау және квотасы төмен филиалға таргетинг ұсыну.",
        "Social-to-Lead CRM & 15-min SLA Inbox: Пікірлер мен DM сұраныстарын бір терезеден өңдеп, қабылдау комиссиясына лид ретінде беру.",
      ],
      en: [
        "5-Agent AI Marketing Pipeline: Ethical/brand auditing, channel-native copy generation (IG/FB/LinkedIn/YT), and 4-locale translation.",
        "AI Visual & Video Studio: 1-click photo enhancement, automated HTML5 Canvas posters, and AI-generated multi-language SRT video subtitles.",
        "Competitor Ad Spy & Admissions Trigger: Tracks competitor ad positioning and recommends Meta campaigns when campus enrollment lags.",
        "Social-to-Lead CRM & Unified Inbox (15-min SLA): Converts social inquiries into tracked admissions leads with mandatory GDPR minor photo guards.",
      ],
      ru: [
        "Конвейер из 5 ИИ-агентов: Этический аудит, генерация нативных текстов под IG/FB/LinkedIn/YT и автоперевод на 4 языка (RO, EN, RU, TR).",
        "ИИ-студия фото и видео: Улучшение снимков в 1 клик, генерация постеров на HTML5 Canvas и автоматические SRT-субтитры для роликов.",
        "Competitor Ad Spy и триггер квот: Мониторинг рекламных креативов конкурентов и автоподсказки по запуску таргета для отстающих кампусов.",
        "Social-to-Lead CRM и единый Inbox (SLA 15 мин): Конвертация комментариев и сообщений соцсетей в лиды приемной комиссии с защитой GDPR.",
      ],
    },
    architectureFlow: [
      "7 Branch Express Editors (Progressive UX)",
      "5-Agent AI Pipeline (Ethics · Copy · 4-Lang)",
      "Canvas Poster + Photo Enhance + Video SRT",
      "GDPR Consent & Smart Time-Slot Guard",
      "Competitor Ad Spy + Social-to-Lead CRM",
      "29 Channels (Meta · YT · LinkedIn · Maps)",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemini 2.5 Flash Agents",
      "HTML5 Canvas Studio",
      "AI SRT Subtitle Engine",
      "Meta & YouTube APIs",
      "Google Business Profile",
      "Telegram Bot API",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: { kk: "29 Арна", en: "29 Channels", ru: "29 Каналов" },
        label: { kk: "Zero-Password басқару", en: "Zero-Password Governance", ru: "Управление без паролей" },
      },
      {
        value: "5 Agents",
        label: { kk: "AI Маркетинг конвейері", en: "AI Marketing Pipeline", ru: "ИИ-конвейер маркетинга" },
      },
      {
        value: { kk: "4 Тіл", en: "4 Locales", ru: "4 Языка" },
        label: { kk: "RO · EN · RU · TR + SRT", en: "RO · EN · RU · TR + SRT", ru: "RO · EN · RU · TR + SRT" },
      },
      {
        value: "Lead CRM",
        label: { kk: "Ad Spy & Қабылдау воронкасы", en: "Ad Spy & Admissions Funnel", ru: "Ad Spy и воронка приема" },
      },
    ],
  },
  {
    id: "smart-tv-signage",
    slug: "smart-tv-signage",
    block: "infra-devops",
    featured: true,
    b2bReady: true,
    title: {
      kk: "CampusCast TV — 7-Campus Smart TV Digital Signage Broadcast Engine",
      en: "CampusCast TV — 7-Campus Smart TV Digital Signage Broadcast Engine",
      ru: "CampusCast TV — Централизованное Smart TV-вещание (Digital Signage) 7 кампусов",
    },
    subtitle: {
      kk: "7 Кампус Экрандары · Python + SQLite WAL · WireGuard SD-WAN DNS · 24/7 Live NOC",
      en: "7-Campus Display Network · Python + SQLite WAL · WireGuard SD-WAN DNS · 24/7 NOC",
      ru: "Сеть экранов 7 кампусов · Python + SQLite WAL · WireGuard SD-WAN DNS · 24/7 NOC",
    },
    domainOrPort: {
      kk: "Proxmox CT 103 · 7-Campus SD-WAN",
      en: "Proxmox CT 103 · 7-Campus SD-WAN",
      ru: "Proxmox CT 103 · Сеть 7 кампусов",
    },
    statusBadge: {
      kk: "7 Кампус · Zero-USB Cloud Signage",
      en: "7 Campuses · Zero-USB Cloud Signage",
      ru: "7 кампусов · Вещание без флешек",
    },
    b2bValue: {
      kk: "Мектептер, клиникалар мен бизнес-орталықтарда флешкамен қолмен ролик ауыстыруды жойып, барлық филиалдағы Smart TV экрандарын қымбат жазылымсыз бір панельден басқарады.",
      en: "Eliminates manual USB stick updates and costly per-screen SaaS fees across multi-branch schools, clinics, and offices via a centralized Zero-IOPS broadcast engine.",
      ru: "Избавляет филиальные сети школ, клиник и офисов от ручного обновления экранов флешками и дорогих облачных подписок за каждый телевизор.",
    },
    summary: {
      kk: "WireGuard SD-WAN желісі арқылы 7 кампустың холлдары мен дәліздеріндегі Smart TV панельдеріне 310 атаулы күнді, олимпиада жеңімпаздарын, туған күндер мен жедел хабарландыруларды синхронды тарататын жүйе.",
      en: "Centralized digital signage engine broadcasting campus announcements, live olympiad medalists, birthdays, and 310 calendar milestones across 7 campuses over WireGuard SD-WAN.",
      ru: "Централизованная платформа Digital Signage, транслирующая объявления, призеров олимпиад, дни рождения и 310 памятных дат на Smart TV всех 7 кампусов через WireGuard SD-WAN.",
    },
    challenge: {
      kk: "Әр қаладағы 7 кампустағы теледидарларға хабарландырулар мен құттықтауларды флешкамен қолмен жүктеу көп уақыт алды, экрандарда ескі ақпарат қалып қойды, ал коммерциялық Digital Signage сервистері әр экранға ай сайын қымбат төлем сұрады.",
      en: "Updating lobby Smart TVs across 7 campuses via USB drives caused stale announcements and administrative overhead, while commercial signage SaaS charged steep per-screen monthly fees.",
      ru: "Ручное обновление телевизоров флешками в 7 кампусах разных городов приводило к устаревшему контенту на экранах, а коммерческие облачные Signage-сервисы требовали ежемесячной оплаты за каждый экран.",
    },
    solution: {
      kk: "Proxmox CT 103 контейнерінде ультра-жеңіл Python + SQLite WAL режиміндегі эфирлік сервер көтеріліп, MikroTik WireGuard SD-WAN статикалық DNS маршрутизациясы және Nginx TLS проксиімен байланыстырылды. Әр филиалға жеке плейлист, 310 маңызды күн базасы, олимпиада чемпиондары слайдтары және 24/7 Live NOC бақылауы енгізілді.",
      en: "Engineered a lightweight Python + SQLite WAL broadcast daemon on Proxmox CT 103 routed over MikroTik WireGuard SD-WAN static DNS and Nginx TLS, featuring branch-scoped playlists, a 310-milestone academic calendar, live champion slides, and 24/7 NOC health checks.",
      ru: "На контейнере Proxmox CT 103 создан сверхлегкий вещательный сервер на Python + SQLite WAL со статической маршрутизацией через MikroTik WireGuard SD-WAN и Nginx TLS, таргетингом плейлистов по филиалам, базой 310 дат и мониторингом в Live NOC.",
    },
    outcome: {
      kk: "Барлық 7 кампустағы экрандар Бас кеңседен немесе филиал админінен 1 секундта жаңарады, ай сайынғы лицензия шығыны $0 құрайды, ал серверлік ресурс шығыны минималды деңгейде сақталды.",
      en: "Instant sub-second screen updates across all 7 campuses with $0 per-screen recurring licensing cost, full offline/kiosk resilience, and automated 24/7 NOC uptime verification.",
      ru: "Мгновенное обновление экранов во всех 7 кампусах за секунды при $0 абонентской платы за экраны, киоск-устойчивость Smart TV и круглосуточный контроль доступности в NOC.",
    },
    highlights: {
      kk: [
        "Branch-Scoped & Global Playlists: Бас дирекциядан барлық 7 кампусқа ортақ шұғыл хабарлама жіберу немесе әр филиалдың жеке эфирін баптау.",
        "Automated 310-Day Academic & Cultural Feed: Мемлекеттік/халықаралық атаулы күндерді, оқушы/мұғалім туған күндерін және олимпиада жүлдегерлерін автоматты көрсету.",
        "SD-WAN Static DNS & Nginx TLS Delivery: Ішкі желіде де, сыртқы арнада да үздіксіз FullHD/4K веб-киоск рендері.",
        "Zero-IOPS SQLite WAL & Live NOC Probe: Минималды RAM тұтыну және сервис күйін 24/7 автоматты тексеру.",
      ],
      en: [
        "Global + Per-Campus Broadcast Targeting: Push network-wide executive announcements or customize lobby feeds per school branch.",
        "Automated 310-Milestone & Champion Feed: Auto-rotates calendar events, student/faculty birthdays, and verified Olympiad medalists.",
        "WireGuard SD-WAN DNS + Nginx TLS Kiosk Mode: Zero-install Smart TV browser playback with automatic reconnect and caching.",
        "Zero-IOPS SQLite WAL & 24/7 NOC Watchdog: Runs alongside core infra daemons on minimal RAM with continuous health telemetry.",
      ],
      ru: [
        "Глобальное и пофилиальное вещание: Экстренные объявления сразу на все 7 кампусов или индивидуальное расписание слайдов для каждого филиала.",
        "Автоматическая лента 310 дат и чемпионов: Показ праздников, дней рождения учеников/педагогов и призеров олимпиад без ручной верстки.",
        "Маршрутизация WireGuard SD-WAN + Nginx TLS: Автономная работа на Smart TV в режиме киоска с автовосстановлением связи.",
        "Движок SQLite WAL и контроль 24/7 NOC: Сверхнизкое потребление памяти и непрерывная проверка пульса сервиса.",
      ],
    },
    architectureFlow: [
      "HQ / Branch Signage Admin Panel",
      "Python Broadcast Daemon + SQLite WAL (CT 103)",
      "310-Day Calendar + Champions Feed",
      "Nginx WAF / TLS + WireGuard SD-WAN DNS",
      "7-Campus Lobby Smart TV Kiosks + Live NOC",
    ],
    techStack: [
      "Python 3",
      "SQLite 3 (WAL Mode)",
      "FullHD/4K Kiosk Web UI",
      "Nginx Reverse Proxy & TLS",
      "MikroTik WireGuard SD-WAN",
      "Proxmox LXC (CT 103)",
      "systemd & Live NOC Probe",
    ],
    metrics: [
      {
        value: { kk: "7 Кампус", en: "7 Campuses", ru: "7 Кампусов" },
        label: { kk: "Бірыңғай Smart TV желісі", en: "Unified Smart TV Network", ru: "Единая сеть Smart TV" },
      },
      {
        value: "310",
        label: { kk: "Атаулы күн & Авто-слайд", en: "Auto-Scheduled Milestones", ru: "Памятных дат и авто-слайдов" },
      },
      {
        value: "$0 / TV",
        label: { kk: "Шексіз экран лицензиясы", en: "Zero Per-Screen SaaS Fee", ru: "Без абонплаты за экраны" },
      },
      {
        value: "24/7 NOC",
        label: { kk: "Авто-мониторинг & SD-WAN", en: "Monitored over SD-WAN", ru: "Мониторинг и SD-WAN" },
      },
    ],
  },
  {
    id: "school-it-infra",
    slug: "school-it-infra",
    block: "infra-devops",
    featured: true,
    b2bReady: true,
    title: {
      kk: "Multi-Campus WireGuard SD-WAN, 5-Layer DMZ & 12MB RAM Live NOC",
      en: "Multi-Campus WireGuard SD-WAN, 5-Layer DMZ & 12MB RAM Live NOC",
      ru: "Сеть WireGuard SD-WAN 7 кампусов, 5-уровневая DMZ и 12 МБ RAM NOC",
    },
    subtitle: {
      kk: "MikroTik SD-WAN (~7ms) · Proxmox CT 100–107 · 41x TTFB Helpdesk · 100 TB Workspace",
      en: "MikroTik SD-WAN (~7ms) · Proxmox CT 100–107 · 41x Faster Helpdesk · 100 TB Workspace",
      ru: "MikroTik SD-WAN (~7мс) · Proxmox CT 100–107 · Ускорение TTFB в 41x · 100 ТБ Workspace",
    },
    domainOrPort: {
      kk: "Private SD-WAN · Proxmox Cluster",
      en: "Private SD-WAN · Proxmox Cluster",
      ru: "Приватная SD-WAN · Кластер Proxmox",
    },
    statusBadge: {
      kk: "7 Кампус SD-WAN · 41x Жылдам TTFB",
      en: "7-Campus SD-WAN · 41x Faster TTFB",
      ru: "7 кампусов SD-WAN · TTFB в 41x быстрее",
    },
    b2bValue: {
      kk: "Көп филиалды ұйымдарға арналған дайын желілік және серверлік эталон: WireGuard SD-WAN, 5-қабатты DMZ қорғанысы, өшірілмейтін бэкаптар және ауыр GLPI/Zabbix-ті алмастыратын 12 МБ RAM жүйесі.",
      en: "Turnkey multi-branch infrastructure blueprint combining MikroTik WireGuard SD-WAN, 5-layer DMZ security, immutable backups, and 12 MB RAM Helpdesk/NOC engines replacing heavy GLPI/Zabbix.",
      ru: "Эталонная инфраструктура для филиальных сетей: MikroTik WireGuard SD-WAN, 5-уровневая DMZ, неизменяемые бэкапы и сверхлегкий Helpdesk/NOC (12 МБ RAM) вместо тяжелых GLPI/Zabbix.",
    },
    summary: {
      kk: "Бірнеше қаладағы 7 кампусты бірыңғай желіге (~7 мс RTT, 65+ Wi-Fi 6 нүктесі, 802.1X), Proxmox VE (CT 100–107) кластеріне, 5-деңгейлі DMZ қорғанысына және 100 TB Google Workspace экожүйесіне біріктіру.",
      en: "Unifies 7 inter-city campuses under MikroTik CRS418/RB4011 WireGuard SD-WAN (~7ms RTT), 65+ CAPsMAN Wi-Fi 6 APs, Proxmox LXC (CT 100–107), 5-layer DMZ, 12 MB RAM NOC/Helpdesk, and 100 TB Workspace.",
      ru: "Объединяет 7 кампусов в разных городах в единую магистраль MikroTik WireGuard SD-WAN (~7 мс RTT), 65+ точек Wi-Fi 6, кластер Proxmox (CT 100–107), 5-уровневую DMZ, NOC/Helpdesk (12 МБ RAM) и 100 ТБ Workspace.",
    },
    challenge: {
      kk: "7 кампустағы желілердің IP-адрестері қиылысып, роутер бэкаптары қолмен жасалды, ал ауыр GLPI + MariaDB және Zabbix + Grafana контейнерлері сервердің дискілік IOPS пен RAM ресурстарын жеп, TTFB ~1 секундқа дейін баяулады.",
      en: "7 distributed campuses suffered from overlapping subnets and manual router backups, while heavy GLPI/MariaDB and Zabbix/Grafana stacks starved disk IOPS and RAM (~978 ms TTFB).",
      ru: "В 7 кампусах пересекались подсети, роутеры бэкапились вручную, а тяжелые контейнеры GLPI/MariaDB и Zabbix/Grafana перегружали диски и память хоста Proxmox (~978 мс TTFB).",
    },
    solution: {
      kk: "MikroTik CRS418 ядросында WireGuard SD-WAN және қатаң VLAN сегментациясы құрылды; ауыр GLPI/Zabbix орнына SQLite WAL режиміндегі (~12 МБ RAM) кастомды Python Helpdesk Mini v2.2 (Zero-Space Auto-Purge) және Live NOC v3.0 (3-Strike Anti-Flap) жазылды; 5-деңгейлі DMZ, Ansible түнгі DR және chattr +i өшірілмейтін бэкаптары енгізілді.",
      en: "Built a MikroTik CRS418 WireGuard SD-WAN + VLAN backbone, replaced GLPI/Zabbix with custom ~12 MB RAM Python + SQLite WAL Helpdesk & Live NOC daemons, and enforced a 5-Layer DMZ with nightly Ansible router vaults and root-immutable chattr +i backups.",
      ru: "Построено ядро MikroTik CRS418 WireGuard SD-WAN с сегментацией VLAN, тяжелые GLPI/Zabbix заменены кастомными демонами Python + SQLite WAL (~12 МБ RAM), внедрены 5-уровневая DMZ, ночные бэкапы Ansible и защита архивов chattr +i.",
    },
    outcome: {
      kk: "Helpdesk TTFB жылдамдығы 978 мс-тан 23.6 мс-қа дейін (41 есе) өсті, 6 филиал роутері түнгі 02:00-де Ansible арқылы автоматты резервтеледі, ал 03:15-те БД архивтері тіпті root өшіре алмайтындай chattr +i атрибутымен құлыпталады.",
      en: "Accelerated Helpdesk TTFB 41x (978 ms → 23.6 ms) on ~12 MB RAM, automated 02:00 AM Ansible config vaults across all branch routers, and locked 03:15 AM SQL dumps with Linux chattr +i immutability.",
      ru: "Отклик Helpdesk ускорен в 41 раз (978 мс → 23.6 мс) при потреблении ~12 МБ RAM, автоматизированы ночные бэкапы роутеров через Ansible (02:00) и неизменяемая защита дампов БД флагом chattr +i (03:15).",
    },
    highlights: {
      kk: [
        "WireGuard SD-WAN & CAPsMAN Wi-Fi 6: 7 кампусты ~7 мс кідіріспен қосатын 10G SFP+ ядросы, 65+ Wi-Fi 6 нүктесі және FreeRADIUS 802.1X.",
        "12 MB RAM Helpdesk & Zero-Space Auto-Purge: 8 филиалдық RBAC, 4 тіл және тикет жабылғанда дискідегі медианы автоматты тазарту.",
        "Zero-IOPS Live NOC v3.0: Роутерлерді, Proxmox CT 100–107 контейнерлерін, 31 Smartboard пен Smart TV желісін 3-Strike Anti-Flap фильтрімен бақылау.",
        "5-Layer DMZ & Immutable DR: MikroTik DMZ + iptables shield + Nginx WAF (HTTP 444 exploit drop) + Fail2Ban + Ansible + chattr +i.",
      ],
      en: [
        "WireGuard SD-WAN & CAPsMAN Wi-Fi 6: 10G SFP+ MikroTik core (~7ms inter-city RTT), 65+ APs, strict VLANs, and FreeRADIUS 802.1X auth.",
        "12 MB RAM Helpdesk & Zero-Space Auto-Purge: SQLite WAL daemon with 8-branch RBAC, 4 locales, and automatic media cleanup on ticket closure.",
        "Zero-IOPS Live NOC v3.0: Monitors branch routers, CT 100–107 servers, 31 Smartboards, and Smart TV kiosks with 3-Strike Anti-Flap alerting.",
        "5-Layer DMZ & Root-Immutable DR: Hardware + hypervisor DMZ isolation, Nginx WAF, Fail2Ban, Ansible vaults, and chattr +i backups.",
      ],
      ru: [
        "WireGuard SD-WAN и CAPsMAN Wi-Fi 6: Ядро MikroTik 10G SFP+ (~7 мс RTT между городами), 65+ точек доступа, VLAN и FreeRADIUS 802.1X.",
        "Helpdesk на 12 МБ RAM и Auto-Purge: Режим SQLite WAL, RBAC на 8 площадок, 4 языка и автоочистка вложений после закрытия тикетов.",
        "Zero-IOPS Live NOC v3.0: Контроль роутеров, контейнеров CT 100–107, 31 смарт-панели и Smart TV с защитой от ложных срабатываний.",
        "5-уровневая DMZ и неизменяемый DR: Изоляция на MikroTik и гипервизоре, Nginx WAF (сброс эксплойтов 444), Ansible и chattr +i.",
      ],
    },
    architectureFlow: [
      "7 Campuses + 65 Wi-Fi 6 APs (802.1X)",
      "WireGuard SD-WAN (~7ms Inter-City RTT)",
      "MikroTik CRS418 Core + 5-Layer DMZ",
      "Proxmox VE Cluster (CT 100 – CT 107)",
      "Python + SQLite WAL Helpdesk & NOC (12MB)",
      "Ansible 02:00 Vault + chattr +i + 100TB Cloud",
    ],
    techStack: [
      "MikroTik RouterOS v7",
      "WireGuard SD-WAN",
      "CAPsMAN Wi-Fi 6",
      "Proxmox VE (CT 100–107)",
      "Python 3 & SQLite WAL",
      "Ansible DR",
      "Nginx WAF & Fail2Ban",
      "FreeRADIUS 802.1X & LDAPS",
      "Google Workspace (100 TB)",
    ],
    metrics: [
      {
        value: "23.6 ms",
        label: { kk: "Helpdesk TTFB (41x жылдам)", en: "Helpdesk TTFB (41x Faster)", ru: "Отклик Helpdesk (в 41x быстрее)" },
      },
      {
        value: "~12 MB",
        label: { kk: "SQLite WAL RAM тұтынуы", en: "SQLite WAL RAM Footprint", ru: "Потребление RAM (SQLite WAL)" },
      },
      {
        value: "5-Layer",
        label: { kk: "DMZ + WAF + chattr +i", en: "DMZ + WAF + chattr +i", ru: "Эшелонированная DMZ" },
      },
      {
        value: "100 TB",
        label: { kk: "Google Workspace & IAM", en: "Google Workspace Pool", ru: "Пул Google Workspace" },
      },
    ],
  },
  {
    id: "my-family",
    slug: "my-family",
    block: "erp-consumer",
    featured: false,
    b2bReady: true,
    title: {
      kk: "«Береке» PWA — Family Habit, Bonding & Digital Detox App",
      en: "“Bereke” PWA — Family Habit, Bonding & Digital Detox App",
      ru: "«Береке» PWA — Семейный трекер привычек, сближения и Digital Detox",
    },
    subtitle: {
      kk: "Offline-First PWA · Supabase Realtime · AI Экран Уақыты · Кешкі Telegram Есебі",
      en: "Offline-First PWA · Supabase Realtime · AI Screen-Time Tracker · Telegram Digest",
      ru: "Offline-First PWA · Supabase Realtime · ИИ-учет экранного времени · Telegram-сводки",
    },
    domainOrPort: {
      kk: "Mobile PWA · Offline + Realtime",
      en: "Mobile PWA · Offline + Realtime",
      ru: "Мобильное PWA · Offline + Realtime",
    },
    statusBadge: {
      kk: "Consumer & School Community PWA",
      en: "Consumer & School Community PWA",
      ru: "PWA для семей и школьных клубов",
    },
    b2bValue: {
      kk: "Мектеп қауымдастықтары мен ата-аналар клубтарына White-Label өнім ретінде берілетін, балалардың ұйқы режимі мен телефонсыз жылы әңгіме уақытын геймификациялайтын қосымша.",
      en: "White-label family wellness PWA for school parent communities gamifying screen-free evening bonding, screen-time limits, and healthy sleep routines.",
      ru: "White-label PWA для школьных родительских сообществ: геймификация вечеров без гаджетов, теплого общения с детьми и здорового режима сна.",
    },
    summary: {
      kk: "30–120 минуттық Digital Detox таймері, кешкі ата-ана мен бала сұхбаты (21:30–21:45), Gemini AI экран уақытын талдау, Supabase Realtime синхрондауы және Telegram қорытындысы бар мобильді PWA.",
      en: "Offline-first Next.js PWA featuring a 30–120 min Lockbox Digital Detox timer, guided evening parent-child bonding prompts, Gemini AI screen-time tracking, Supabase Realtime sync, and nightly Telegram scorecards.",
      ru: "Offline-first PWA с таймером Digital Detox (30–120 мин), вечерними вопросами для общения с детьми (21:30–21:45), учетом экранного времени с Gemini AI, синхронизацией Supabase Realtime и сводками в Telegram.",
    },
    challenge: {
      kk: "Гаджетке тәуелділік пен кешкі тәртіптің жоқтығы балалардың ұйқысын бұзып, отбасылық әңгімені азайтады, ал әдеттегі трекерлер бүкіл отбасы смартфондары арасында нақты уақытта синхрондалмайды.",
      en: "Evening screen addiction erodes parent-child connection and sleep quality, while standard habit apps target individuals rather than real-time synchronized households.",
      ru: "Вечерняя зависимость от смартфонов разрушает живое общение с детьми и режим сна, а обычные трекеры не синхронизируют прогресс всей семьи между устройствами.",
    },
    solution: {
      kk: "LocalStorage (офлайн) және Supabase Realtime PostgreSQL (бұлттық) қосарланған синхрондауы бар мобильді PWA жасалды: телефонсыз уақыт таймері, Gemini AI көмегімен экран уақытын есептеу, кешкі жылы әңгіме сұрақтары, күндізгі/түнгі тақырып және кешкі Telegram дайджесті қосылды.",
      en: "Built an offline-first Next.js PWA combining LocalStorage resilience with multi-device Supabase Realtime sync, Gemini AI + manual screen-time logging, guided 21:30 bedtime bonding rituals, dark/light themes, and automated Telegram Bot digests.",
      ru: "Разработано offline-first PWA с двойной синхронизацией (LocalStorage + Supabase Realtime), трекингом экранного времени через Gemini AI, вечерними ритуалами общения перед сном, темой день/ночь и автоотчетами в Telegram.",
    },
    outcome: {
      kk: "Отбасы мүшелерінің прогресі лезде синхрондалады, 7 күндік тренд пен сериялар (🔥) есептеледі және апталық 85%+ меже орындалғанда ортақ отбасылық марапат ашылады.",
      en: "Synchronizes household habits in real time, tracks 7-day trends and streaks (🔥), and unlocks shared family weekend rewards at 85%+ weekly consistency.",
      ru: "Мгновенно синхронизирует прогресс родителей и детей, строит 7-дневную аналитику серий (🔥) и разблокирует семейные награды при результате 85%+ за неделю.",
    },
    highlights: {
      kk: [
        "Lockbox Digital Detox & Bonding Rituals: 30/60/90/120 минут телефонсыз таймер және 21:30–21:45 аралығындағы баламен сырласу сұрақтары.",
        "AI & Manual Screen-Time Analytics: Смартфондағы экран уақытын Gemini AI арқылы талдау және 7 күндік динамиканы көрсету.",
        "Dual-Storage Offline + Supabase Realtime: Интернетсіз де кідіріссіз істейді, желі қосылғанда барлық құрылғыны лезде теңестіреді.",
        "1-Tap Nightly Telegram Scorecard: Күн соңында Family Score (%) қорытындысын отбасылық Telegram чатқа жіберу.",
      ],
      en: [
        "Lockbox Digital Detox & Bedtime Bonding: 30–120 minute phone-free countdown paired with guided 21:30 parent-child reflection prompts.",
        "Gemini AI Screen-Time Tracking: Extracts and visualizes daily device usage alongside structured sleep protocols.",
        "Offline-First + Supabase Realtime Sync: Instant LocalStorage responsiveness with seamless multi-device PostgreSQL cloud sync.",
        "Nightly Telegram Bot Digest: Broadcasts daily Family Score (%) and streak milestones to the household chat.",
      ],
      ru: [
        "Таймер Digital Detox и вечерний ритуал: Обратный отсчет 30–120 минут без телефонов и карточки теплых вопросов детям перед сном.",
        "Аналитика экранного времени с Gemini AI: Контроль цифровых привычек и наглядные графики прогресса за 7 дней.",
        "Гибрид LocalStorage + Supabase Realtime: Мгновенный отклик без интернета и облачная синхронизация смартфонов всей семьи.",
        "Вечерний дайджест в Telegram: Отправка итогового Family Score (%) и серий в семейный чат в 1 касание.",
      ],
    },
    architectureFlow: [
      "Installable Mobile PWA (Dark / Light UI)",
      "Offline-First LocalStorage State",
      "Supabase Realtime PostgreSQL Sync",
      "Gemini AI Screen-Time & Score Engine",
      "Telegram Bot Nightly Family Digest",
    ],
    techStack: [
      "Next.js PWA",
      "TypeScript",
      "Supabase Realtime",
      "PostgreSQL",
      "Gemini AI",
      "Tailwind CSS",
      "Telegram Bot API",
    ],
    metrics: [
      {
        value: "85%+",
        label: { kk: "Апталық марапат межесі", en: "Weekly Reward Threshold", ru: "Порог семейной награды" },
      },
      {
        value: { kk: "120 мин", en: "120 min", ru: "120 мин" },
        label: { kk: "Digital Detox сессиясы", en: "Lockbox Detox Timer", ru: "Сессия без гаджетов" },
      },
      {
        value: "Realtime",
        label: { kk: "Supabase + Offline Sync", en: "Supabase + Offline Sync", ru: "Синхронизация устройств" },
      },
      {
        value: "AI + TG",
        label: { kk: "Экран аналитикасы & Есеп", en: "Screen-Time & Digest", ru: "Учет экрана и сводки" },
      },
    ],
  },
  {
    id: "1c-enterprise",
    slug: "1c-enterprise",
    block: "erp-consumer",
    featured: false,
    b2bReady: true,
    title: {
      kk: "1C:Enterprise 8.3 Linux Cluster & Git/EDT Integration",
      en: "1C:Enterprise 8.3 Linux Cluster & Git/EDT Integration",
      ru: "Кластер 1С:Предприятие 8.3 на Linux и конвейер Git/EDT",
    },
    subtitle: {
      kk: "Ubuntu Server + Postgres Pro 1C v16 · 1C:EDT + Git XML · РИБ & REST Көпірлері",
      en: "Ubuntu Server + Postgres Pro 1C v16 · 1C:EDT + Git XML · RIB & REST Bridges",
      ru: "Ubuntu Server + Postgres Pro 1C v16 · 1C:EDT + Git XML · РИБ и REST-мосты",
    },
    domainOrPort: {
      kk: "Proxmox CT 105 · Linux ERP Cluster",
      en: "Proxmox CT 105 · Linux ERP Cluster",
      ru: "Proxmox CT 105 · Linux ERP-кластер",
    },
    statusBadge: {
      kk: "Linux 64-bit · Postgres Pro 1C v16",
      en: "Linux 64-bit · Postgres Pro 1C v16",
      ru: "Linux 64-bit · Postgres Pro 1C v16",
    },
    b2bValue: {
      kk: "Сауда және есеп базаларын баяу файлдық режимнен тұрақты Linux + Postgres Pro 1C серверіне көшіріп, кодты Git арқылы бақылауды және сыртқы веб/AI сервистермен REST интеграциясын орнатады.",
      en: "Migrates file-mode 1C databases to Linux + Postgres Pro 1C server clusters with clean Git/EDT XML version control and JSON/REST web bridges.",
      ru: "Переводит файловые базы 1С на серверный кластер Linux + Postgres Pro 1C 16 с версионированием исходников в Git/EDT и интеграцией по REST API.",
    },
    summary: {
      kk: "Proxmox LXC (CT 105) ортасындағы 64-биттік 1C:Enterprise 8.3 + Postgres Pro 1C v16 кластері және 1C:EDT + Git XML пайплайны (KotofeyRetail, Розница 2.3, БП 3.0).",
      en: "64-bit 1C:Enterprise 8.3 server cluster paired with Postgres Pro 1C v16 on Ubuntu Linux (CT 105), maintained via macOS 1C:EDT + Git XML source decomposition.",
      ru: "64-битный кластер 1С:Предприятие 8.3 и Postgres Pro 1C v16 на Ubuntu Linux (CT 105) с разработкой расширений через 1C:EDT и декомпозицией в Git XML.",
    },
    challenge: {
      kk: "Файлдық базалар бірнеше касса қосылғанда блокировкаға түседі, ал бинарлы конфигурацияларда Git арқылы өзгерістер тарихын көру және заманауи веб-порталдармен байланысу қиын.",
      en: "File-mode 1C setups suffer from lock contention under multi-cashier load and lack transparent Git version history or clean REST API connectivity.",
      ru: "Файловые базы 1С страдают от блокировок при работе нескольких касс и не позволяют вести прозрачное ревью изменений в Git или отдавать данные во внешние веб-сервисы.",
    },
    solution: {
      kk: "Ubuntu Server контейнерінде (CT 105) 64-биттік 1С сервері мен арнайы транзакциялық патчтары бар Postgres Pro 1C v16 бапталды, ал конфигурациялар мен .cfe кеңейтімдері 1C:EDT арқылы таза XML ағашына жіктеліп Git-те жүргізіледі.",
      en: "Configured a 64-bit 1C server + Postgres Pro 1C v16 on Ubuntu LXC (CT 105) and decomposed configurations/extensions (.cfe) into clean XML trees managed with 1C:EDT and Git.",
      ru: "Настроен 64-битный сервер 1С + Postgres Pro 1C v16 в контейнере Ubuntu (CT 105), а конфигурации и расширения (.cfe) разложены в XML-исходники через 1C:EDT и Git.",
    },
    outcome: {
      kk: "Бөлшек сауда мен бухгалтерия үшін тұрақты клиент-серверлік контур, СКД есептері, дүкендер арасындағы РИБ синхрондауы және HTTP/JSON интеграциялық көпірлері жасақталды.",
      en: "Delivered a stable Linux client-server ERP contour with SKD analytical reporting, distributed store sync (RIB), non-intrusive .cfe extensions, and HTTP/JSON bridges.",
      ru: "Обеспечена стабильная клиент-серверная работа розницы и бухгалтерии на Linux, отчеты СКД, обмен РИБ между точками и HTTP/JSON-сервисы для внешних систем.",
    },
    highlights: {
      kk: [
        "Linux + Postgres Pro 1C v16 (CT 105): Файлдық блокировкаларды жоятын 64-биттік клиент-серверлік кластер.",
        "1C:EDT + Git XML Source Tree: Монолитті .cf/.cfe файлдарын XML кодқа жіктеп, таза git diff арқылы бақылау.",
        "Safe .cfe Extensions & SKD Reports: Негізгі конфигурацияны жаңартудан қалдырмай кастомизация жасау.",
        "RIB Store Sync & HTTP JSON API: Филиалдар алмасуы және заманауи веб-жүйелермен интеграция.",
      ],
      en: [
        "Linux + Postgres Pro 1C v16 (CT 105): Dedicated 64-bit server cluster eliminating file-mode locking bottlenecks.",
        "1C:EDT + Git XML Workflow: Clean XML source decomposition enabling Git branching and diff reviews.",
        "Non-Intrusive .cfe Extensions & SKD: Custom retail/accounting logic without breaking vendor updates.",
        "RIB Store Exchange & REST JSON Endpoints: Synchronizes distributed retail nodes and connects to web apps.",
      ],
      ru: [
        "Linux + Postgres Pro 1C v16 (CT 105): Выделенный 64-битный кластер без блокировок файлового режима.",
        "Пайплайн 1C:EDT + Git XML: Декомпозиция конфигураций в текстовые XML-исходники для контроля версий.",
        "Безопасные расширения .cfe и СКД: Доработка розницы и учета с сохранением типовых обновлений.",
        "Обмен РИБ и HTTP JSON-сервисы: Синхронизация торговых точек и REST-мосты к веб-приложениям.",
      ],
    },
    architectureFlow: [
      "1C:EDT + Git XML Source Repository",
      "Proxmox Ubuntu LTS Container (CT 105)",
      "1C:Enterprise 8.3 64-bit Server",
      "Postgres Pro 1C v16 Engine",
      "RIB Sync + REST/HTTP JSON Bridge",
    ],
    techStack: [
      "1C:Enterprise 8.3",
      "1C:EDT",
      "Postgres Pro 1C v16",
      "BSL",
      "Ubuntu Server LTS",
      "Proxmox LXC (CT 105)",
      "Git XML Pipeline",
      "REST / HTTP Services",
    ],
    metrics: [
      {
        value: "v16",
        label: { kk: "Postgres Pro 1C кластері", en: "Postgres Pro 1C Engine", ru: "СУБД Postgres Pro 1C" },
      },
      {
        value: "Git+EDT",
        label: { kk: "XML декомпозициясы", en: "XML Source Decomposition", ru: "XML-исходники в Git" },
      },
      {
        value: "64-bit",
        label: { kk: "Linux серверлік контур", en: "Linux Server Cluster", ru: "Серверный кластер Linux" },
      },
      {
        value: "REST",
        label: { kk: "РИБ & JSON API көпірі", en: "RIB & JSON API Bridge", ru: "Обмен РИБ и JSON API" },
      },
    ],
  },
];
