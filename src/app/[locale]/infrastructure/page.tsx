"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Server,
  Shield,
  Cpu,
  Activity,
  Network,
  Database,
  Lock,
  CheckCircle2,
  HardDrive,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function InfrastructurePage() {
  const locale = useLocale();

  const proxmoxNodes = [
    {
      ct: "CT 100",
      name: "MeshCentral RMM",
      role:
        locale === "kk"
          ? "7 филиалдағы 31 интерактивті тақта мен 48+ зертханалық ДК-ні қашықтан басқару"
          : locale === "ru"
          ? "Удаленное управление (RMM) 31 смарт-панелью и 48+ ПК в 7 филиалах"
          : "Remote fleet management (RMM) for 31 Smartboards & 48+ lab PCs across 7 campuses",
      spec: "Node.js · WebSockets · Agent RMM",
    },
    {
      ct: "CT 103",
      name: "Helpdesk Mini v2.2 + Live NOC v3.0 + Ansible",
      role:
        locale === "kk"
          ? "Ауыр GLPI/Zabbix орнына жазылған Zero-IOPS Python + SQLite WAL жүйесі (~12 MB RAM, 23.6 ms TTFB — 41x жылдам) және түнгі Ansible бэкаптары"
          : locale === "ru"
          ? "Кастомные движки Python + SQLite WAL вместо тяжелых GLPI/Zabbix (~12 МБ RAM, 23.6 мс TTFB — в 41x быстрее) и ночные бэкапы роутеров через Ansible"
          : "Custom Zero-IOPS Python + SQLite WAL engines replacing GLPI/Zabbix (~12 MB RAM, 23.6 ms TTFB — 41x faster) + Ansible DR vault",
      spec: "Python 3 · SQLite WAL · Ansible · 12 MB RAM",
    },
    {
      ct: "CT 104",
      name: "Nginx WAF + Proxy Cache + FreeRADIUS 802.1X",
      role:
        locale === "kk"
          ? "Let's Encrypt SSL терминациясы, 5 req/s брутфорс қорғанысы, 444 эксплойт фильтрі (.env/.git/wp-admin) және Wi-Fi 802.1X авторизациясы"
          : locale === "ru"
          ? "Терминация SSL, WAF-лимиты (5 req/s), сброс эксплойтов 444 (.env/.git/wp-admin), кэширование и корпоративный Wi-Fi FreeRADIUS 802.1X"
          : "SSL termination, custom WAF (5 req/s rate limit, 444 exploit drop), micro-caching & FreeRADIUS 802.1X Wi-Fi auth",
      spec: "Nginx · WAF · FreeRADIUS · Fail2Ban",
    },
    {
      ct: "CT 105",
      name: "1C:Enterprise 8.3.25 Cluster + Postgres Pro 1C 16",
      role:
        locale === "kk"
          ? "64-биттік 1С серверлік кластері (KotofeyRetail, Розница 2.3, БП 3.0, УТ 11) және арнайы патчталған Postgres Pro 1C v16"
          : locale === "ru"
          ? "64-битный кластер серверов 1С:Предприятие 8.3 (KotofeyRetail, Розница 2.3, БП 3.0, УТ 11) и СУБД Postgres Pro 1C v16"
          : "64-bit 1C:Enterprise 8.3 application server cluster + Postgres Pro 1C v16 for retail & accounting ERP",
      spec: "Ubuntu LTS · 1C 8.3.25 · Postgres Pro 16",
    },
    {
      ct: "CT 106",
      name: "EduStaff HR, Digital CV & Google Workspace IAM",
      role:
        locale === "kk"
          ? "8 кампустың 619 IAM аккаунты мен 239 мұғалім портфолиосын басқару (~27 MB RAM, 13.3 ms TTFB — 15x жылдам)"
          : locale === "ru"
          ? "Платформа HR и IAM для 619 аккаунтов Google Workspace и 239 педагогов (~27 МБ RAM, 13.3 мс TTFB — в 15x быстрее)"
          : "HR & Google Workspace IAM platform for 619 accounts & 239 faculty profiles (~27 MB RAM, 13.3 ms TTFB — 15x faster)",
      spec: "Next.js 14 · SQLite/JSON · Google OAuth 2.0",
    },
  ];

  const dmzLayers = [
    {
      layer: "Layer 1",
      title: "MikroTik Core DMZ-ISOLATION",
      desc:
        locale === "kk"
          ? "CRS418-8P-8G-2S+ роутеріндегі firewall ережелері DMZ контейнерлерінен (CT 103, 104, 106) ішкі LAN мен 1С/AD серверлеріне өтуді толық бұғаттайды."
          : locale === "ru"
          ? "Правила межсетевого экрана на ядре CRS418-8P-8G-2S+ жестко блокируют любые соединения из публичных DMZ-контейнеров во внутренний LAN и к серверам 1С/AD."
          : "Hardware router firewall rules block any lateral movement from public-facing DMZ containers into internal campus LANs or AD/1C servers.",
    },
    {
      layer: "Layer 2",
      title: "Proxmox Host iptables Shield (dmz-shield.service)",
      desc:
        locale === "kk"
          ? "Гипервизор деңгейіндегі systemd фаерволы контейнерлер арасындағы L2/L3 трафикті шектейді."
          : locale === "ru"
          ? "Системный сервис iptables на самом гипервизоре Proxmox изолирует сетевой мост и предотвращает горизонтальное перемещение между LXC."
          : "Hypervisor-level systemd iptables unit enforces strict L2/L3 isolation between LXC containers on the bridge.",
    },
    {
      layer: "Layer 3",
      title: "Nginx WAF & Micro-Cache (CT 104)",
      desc:
        locale === "kk"
          ? "Логин беттерінде 5 сұраныс/сек лимиті, .env/.git/wp-admin/.sql сканерлерін HTTP 444 кодымен лезде үзу және статикалық микро-кэш."
          : locale === "ru"
          ? "Ограничение 5 запросов/сек на формы входа, мгновенный сброс (HTTP 444) при сканировании .env/.git/wp-admin/.sql и прокси-кэширование."
          : "Enforces 5 req/s login rate limiting, instant HTTP 444 connection drop on .env/.git/wp-admin probes, and edge proxy caching.",
    },
    {
      layer: "Layer 4",
      title: "Fail2Ban IDS + Zero-Noise Telegram NOC",
      desc:
        locale === "kk"
          ? "Шабуылдаушы IP-лерді автоматты банға жіберу және тек критикалық оқиғаларды (3-Strike роутер үзілісі, IAM offboarding, IDS блок) Telegram NOC-қа хабарлау."
          : locale === "ru"
          ? "Автоматическая блокировка IP при брутфорсе и отправка только критических алертов (падение роутера после 3 проверок, IAM-оффбординг, атака) в Telegram NOC."
          : "Automated IP banning on brute-force attempts with strict 3-Strike Anti-Flap alerting to the executive Telegram NOC channel.",
    },
    {
      layer: "Layer 5",
      title: "Immutable Nightly Backups (chattr +i) & Ansible DR",
      desc:
        locale === "kk"
          ? "Түнгі 02:00-де Ansible барлық 6 филиал роутерінің .backup/.rsc конфигурациясын жинайды, ал 03:15-те SQL дамптары chattr +i атрибутымен (тіпті root өшіре алмайтындай) құлыпталады."
          : locale === "ru"
          ? "В 02:00 Ansible собирает конфигурации .backup/.rsc со всех 6 роутеров филиалов, а в 03:15 дампы БД запираются атрибутом ядра Linux chattr +i (защита от удаления даже из-под root)."
          : "At 02:00 AM Ansible pulls .backup/.rsc configs from all 6 branch MikroTiks; at 03:15 AM SQL dumps are locked with Linux chattr +i (undeletable even by root).",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-32 space-y-14 sm:space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">
              {locale === "kk"
                ? "Басты бетке оралу"
                : locale === "ru"
                ? "На главную"
                : "Back to Home"}
            </span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
              <Network className="w-3.5 h-3.5" />
              <span>
                7–8 CAMPUSES SD-WAN · PROXMOX VE CLUSTER · 5-LAYER DMZ · 100 TB WORKSPACE
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              {locale === "kk"
                ? "Корпоративтік Желі, Proxmox Бұлты және DevOps Архитектурасы"
                : locale === "ru"
                ? "Корпоративная сеть SD-WAN, облако Proxmox и архитектура безопасности"
                : "Enterprise Multi-Campus SD-WAN, Proxmox Cloud & Security Architecture"}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-gray/90 leading-relaxed">
              {locale === "kk"
                ? "Молдованың бірнеше қаласындағы (Кишинёв, Дурлешть, Бельцы, Чадыр-Лунга) 7–8 оқу кампусын бірыңғай WireGuard SD-WAN желісіне біріктіру, ауыр легаси жүйелерді ультра-жылдам Python/SQLite WAL сервистерімен алмастыру және 100 TB Google Workspace экожүйесін басқару."
                : locale === "ru"
                ? "Объединение 7–8 учебных кампусов в нескольких городах Молдовы (Кишинев, Дурлешты, Бельцы, Чадыр-Лунга) в единую сеть WireGuard SD-WAN, замена тяжелых legacy-систем на сверхбыстрые сервисы Python/SQLite WAL и управление пулом 100 ТБ Google Workspace."
                : "Unifying 7–8 campuses across multiple cities in Moldova via MikroTik WireGuard SD-WAN, replacing heavy legacy monitoring/helpdesk stacks with ultra-fast Python/SQLite WAL daemons, and governing a 100 TB Google Workspace ecosystem."}
            </p>
          </div>

          {/* 4 Headline Infra Benchmarks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              {
                val: "978ms → 23.6ms",
                sub:
                  locale === "kk"
                    ? "Helpdesk TTFB (41 есе жылдам)"
                    : locale === "ru"
                    ? "Ускорение TTFB Helpdesk в 41 раз"
                    : "Helpdesk TTFB Speedup (41x)",
              },
              {
                val: "199ms → 13.3ms",
                sub:
                  locale === "kk"
                    ? "HR & IAM порталы TTFB (15x)"
                    : locale === "ru"
                    ? "Ускорение TTFB HR-портала в 15 раз"
                    : "HR & IAM Portal TTFB (15x)",
              },
              {
                val: "~12 MB RAM",
                sub:
                  locale === "kk"
                    ? "SQLite WAL Mode тұтынуы"
                    : locale === "ru"
                    ? "Потребление памяти SQLite WAL"
                    : "SQLite 3 WAL Total Footprint",
              },
              {
                val: "~7 ms RTT",
                sub:
                  locale === "kk"
                    ? "7 кампус арасындағы WireGuard SD-WAN"
                    : locale === "ru"
                    ? "Задержка WireGuard SD-WAN между городами"
                    : "Inter-City WireGuard SD-WAN Latency",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-600 dark:text-amber">
                  {b.val}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {b.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 1: Proxmox VE LXC Consolidation Table */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase mb-1">
              // PROXMOX VE CONSOLIDATION (CT 100 – CT 106)
            </h2>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {locale === "kk"
                ? "Он-премис виртуализация ядросы және контейнерлік архитектура"
                : locale === "ru"
                ? "Ядро виртуализации Proxmox VE и распределение контейнеров LXC"
                : "On-Premise Proxmox VE Virtualization Core & LXC Topology"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {proxmoxNodes.map((node) => (
              <div
                key={node.ct}
                className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-mono text-xs font-bold">
                      {node.ct}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {node.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {node.role}
                  </p>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-amber shrink-0">
                  {node.spec}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 5-Layer Logical DMZ & Disaster Recovery */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase mb-1">
              // 5-LAYER LOGICAL DMZ & IMMUTABLE DISASTER RECOVERY
            </h2>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {locale === "kk"
                ? "5-деңгейлі эшелондалған киберқорғаныс және өшірілмейтін (chattr +i) бэкаптар"
                : locale === "ru"
                ? "5-уровневая эшелонированная защита DMZ и неизменяемые бэкапы (chattr +i)"
                : "5-Layer Defense-in-Depth DMZ & Root-Immutable Backups (chattr +i)"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dmzLayers.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                    {item.layer}
                  </span>
                  <Shield className="w-4 h-4 text-emerald-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: SD-WAN, Wi-Fi 6 & Google Workspace Enterprise */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-4">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-amber-600 dark:text-amber" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                MikroTik RouterOS v7 & WireGuard SD-WAN
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>Core Hub & Филиалдар:</strong> MikroTik CRS418-8P-8G-2S+ (10G SFP+ аплинк) орталық ядросы және 7 кампустағы RB4011/RB3011 маршрутизаторлары.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>Центральное ядро и филиалы:</strong> MikroTik CRS418-8P-8G-2S+ (10G SFP+) в связке с маршрутизаторами RB4011/RB3011 в 7 кампусах.
                    </>
                  ) : (
                    <>
                      <strong>Core Hub & Branches:</strong> MikroTik CRS418-8P-8G-2S+ (10G SFP+ uplinks) core router paired with RB4011/RB3011 nodes across 7 campuses.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>CAPsMAN Wi-Fi 6 & FreeRADIUS 802.1X:</strong> 65+ кіру нүктесінде үздіксіз роуминг және Active Directory LDAPS (:636) арқылы авторизация.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>CAPsMAN Wi-Fi 6 и FreeRADIUS 802.1X:</strong> Бесшовный роуминг на 65+ точках доступа с авторизацией через Active Directory LDAPS (:636).
                    </>
                  ) : (
                    <>
                      <strong>CAPsMAN Wi-Fi 6 & FreeRADIUS 802.1X:</strong> 65+ access points with seamless roaming and Active Directory LDAPS (:636) authentication.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>Қатаң VLAN сегментациясы:</strong> Әкімшілік, Бухгалтерия (1С), Информатика зертханалары, IP-камералар және Қонақ Wi-Fi желілерін толық оқшаулау.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>Строгая сегментация VLAN:</strong> Полная изоляция подсетей администрации, бухгалтерии (1С), компьютерных классов, IP-камер и гостевого Wi-Fi.
                    </>
                  ) : (
                    <>
                      <strong>Strict VLAN Segmentation:</strong> Isolated VLANs for Administration, Accounting (1C), Informatics Labs, IP CCTV, and Guest Wi-Fi.
                    </>
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-4">
            <div className="flex items-center gap-3">
              <HardDrive className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                100 TB Google Workspace & Cloud Hybrid
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>100 TB Орталықтандырылған Қор & OU Басқару:</strong> GAM және Admin SDK арқылы 619 қызметкер мен мыңдаған оқушы аккаунтының квотасын басқару.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>Пул 100 ТБ и управление OU:</strong> Централизованное управление квотами 619 сотрудников и тысяч учеников через GAM и Google Admin SDK.
                    </>
                  ) : (
                    <>
                      <strong>100 TB Pooled Storage & OU Governance:</strong> Centralized GAM/Admin SDK quota enforcement across 619 staff and thousands of student accounts.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>Zero-Space Auto-Purge Архитектурасы:</strong> Helpdesk тикеті жабылған сәтте медиа-файлдар дискіден автоматты өшіріліп, тек филиалдардың KPI статистикасы сақталады.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>Архитектура Zero-Space Auto-Purge:</strong> При закрытии заявки в Helpdesk медиафайлы автоматически удаляются с диска с сохранением аналитики KPI.
                    </>
                  ) : (
                    <>
                      <strong>Zero-Space Auto-Purge Architecture:</strong> Helpdesk ticket attachments are automatically purged from disk upon resolution while preserving permanent branch KPI metrics.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  {locale === "kk" ? (
                    <>
                      <strong>Multi-Cloud Орналастыру:</strong> Google Cloud Run (LuminaMath), Railway/Neon (GM-App), Caddy Wildcard S3/MinIO (OmniCheck) және On-Premise Proxmox VE.
                    </>
                  ) : locale === "ru" ? (
                    <>
                      <strong>Мультиоблачное развертывание:</strong> Google Cloud Run (LuminaMath), Railway/Neon (GM-App), Caddy Wildcard S3/MinIO (OmniCheck) и локальный кластер Proxmox VE.
                    </>
                  ) : (
                    <>
                      <strong>Multi-Cloud Deployment:</strong> Google Cloud Run (LuminaMath), Railway/Neon (GM-App), Caddy Wildcard S3/MinIO (OmniCheck), and On-Premise Proxmox VE.
                    </>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
