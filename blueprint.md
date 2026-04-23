SYSTEM ROLE
Act as an Expert Full-Stack Developer and UI/UX Designer. Your task is to build a modern, high-performance portfolio website for a Full-Stack AI & Automation Architect.
PROJECT OVERVIEW
Target Audience: B2B consulting clients in the CIS/Eastern European markets and prospective PhD research partners.
Language Constraint: The entire user-facing content of the website MUST be in Kazakh.
Vibe/Theme: "The Agentic Grid" – Engineered, sophisticated, modular, and highly technical.
Environment Constraints: The app will be deployed via Docker (Node 20 Alpine image), using npm run build && npm start.
TECH STACK
Framework: Next.js (App Router)
Language: TypeScript (Strict typing required)
Styling: Tailwind CSS
Animations: Framer Motion (for smooth interactions and page transitions)
Icons: Lucide React or similar minimal icon set
DESIGN SYSTEM
Theme: Soft Dark Mode. No harsh pure blacks.
Background Color: Deep Obsidian / Charcoal (#0f1115).
Primary Accent: Warm Amber / Muted Gold (#f59e0b).
Secondary Text: Soft Slate Gray (#94a3b8).
Typography: * Headings & Body: Inter or Geist (Clean, modern SaaS look).
Technical Details, Tags, Metrics: JetBrains Mono or Fira Code (Monospaced).
Layout: Utilize a "Bento Box" grid system for services and tech stack sections using glassmorphic, slightly translucent cards with subtle 1px borders (border-white/10).
SPECIFIC UI/UX REQUIREMENTS
Hero Animation: Include a subtle background animation using Framer Motion or HTML5 Canvas showing connecting nodes/lines (symbolizing multi-agent networks and n8n workflows).
Terminal Easter Egg: Include a small, decorative terminal window in the Hero or About section with a typing animation in Kazakh:
> көп агентті фреймворк іске қосылуда...
> n8n кезек (queue) режимі басталуда...
> байланыс орнатылды. қош келдіңіз.
Hover States: Project and service cards should have a subtle upward translation and an amber border glow on hover.
PAGE STRUCTURE & COPY (All content below MUST be used in Kazakh exactly as written)
1. Hero Section (Above the Fold)
Headline: Интеллектуалды автоматтандыру және көп агентті жүйелер архитектурасы
Sub-headline: Бизнес пен мекемелер үшін тұрақты жұмыс процестерін құру мақсатында DevOps, Agentic AI және масштабталатын инфрақұрылымды біріктіру.
Primary CTA Button: Жобаларды көру (Scrolls to Projects)
Secondary CTA Button: Байланысу (Scrolls to Contact)
2. Core Services (Bento Box Layout)
Card 1: Agentic AI инженериясы - Күрделі, шешім қабылдауды талап ететін операциялық логиканы автоматтандыру үшін CrewAI және LangGraph көмегімен көп агентті фреймворктерді жобалау.
Card 2: Корпоративті автоматтандыру - API, деректер қорлары мен байланыс арналарын біріктіретін, жоғары өткізу қабілеті бар, кезекке негізделген автоматтандыру жүйелерін құру.
Card 3: DevOps және жеке хостинг инфрақұрылымы - Шеткі (edge) құрылғылардан бастап бұлтты GPU кластерлеріне дейінгі қауіпсіз, масштабталатын контейнерленген орталарды орналастыру және басқару.
3. Featured Projects
(Design these as mini case studies: Problem -> Solution -> Tech Stack tags. Use monospace fonts for the tags).
Project 1: Клиникалық AI басқару жүйесі
Concept: Денсаулық сақтау операцияларына арналған көп агентті автономды фреймворк.
Tech Stack: [CrewAI, LangGraph, Python]
The Architecture: Мекемені басқаруды оңтайландыруға арналған көп агентті жүйе әзірленді. Бұл архитектура күрделі операциялық логиканы өңдеу үшін әртүрлі AI агенттерін пайдаланады, кесте құруды, емделушілер деректерін бағыттауды және ішкі байланыс процестерін адамның тұрақты қатысуынсыз автоматтандырады.
Project 2: Tanymedu.kz білім беру инфрақұрылымы
Concept: Оқу орталығына арналған сабаққа қатысуды және бағалауды орталықтандырылған басқару (backend).
Tech Stack: [n8n, PostgreSQL, Webhooks]
The Architecture: Орта мектеп оқушыларына бағытталған оқу орталығының операциялық бэкенді жасалды. Оқушылардың сабаққа қатысуын қадағалайтын, бағалау деректерін өңдейтін және нәтижелерді тарататын автоматтандырылған жұмыс процестері әзірленіп, енгізілді. Бұл әкімшілік жүктемені азайтып, қызметкерлер мен ата-аналар үшін деректердің нақты уақыттағы дәлдігін қамтамасыз етеді.
Project 3: Орта мектептің ішкі автоматтандыру жүйесі
Concept: Орта білім берудегі әкімшілік және сыныптан тыс жұмыс процестерін автоматтандыру.
Tech Stack: [n8n, API Integrations, Database Management]
The Architecture: Мектептің ішкі әкімшілігін, соның ішінде оқушылар деректерін жинауды және үйірмелерге қабылдау процестерін оңтайландыру үшін жеке серверде (self-hosted) автоматтандыру инфрақұрылымы әзірленді. Жүйе маңызды ақпаратты автоматты түрде бағыттап, мұғалімдер мен әкімшіліктің деректерді қолмен енгізу жұмысын айтарлықтай азайтты.
4. Tech Stack (Grid of minimal icons + monospace text)
AI & Logic: CrewAI, LangGraph, LLMs
Infrastructure: Docker, Kubernetes, Portainer, Linux
Backend & Data: Python, Node.js, PostgreSQL, Redis
Cloud & Hosting: Hetzner, RunPod
5. About & Global Reach
Bio: Мен күрделі техникалық мәселелерді оңтайландырылған, өзін-өзі қамтамасыз ететін жүйелерге айналдырамын. Менің тәжірибем толық стекке (full-stack) негізделген — жергілікті аппараттық құралдардың механикалық шектеулерін баптаудан бастап, бұлтта бөлінген, GPU талап ететін AI жүктемелерін орналастыруға дейін. Қазіргі уақытта деректерді жай ғана өңдеп қоймай, автономды, контекстке мән беретін шешімдер қабылдайтын жүйелерді құра отырып, Agentic AI инженериясы бойынша өндіріске бағытталған PhD докторантурасына түсуді жоспарлап отырмын.
Working Languages: Жұмыс тілдері: Ағылшын, Орыс, Қазақ, Түрік және Араб. (Display these elegantly, perhaps as badges).
6. Footer / Contact
Let's Build: Бірге жасаймыз (Form fields: Аты, Электрондық пошта, Хабарлама) configured to log to console or mock an API route (I will connect this to an n8n webhook later).
Links: GitHub, LinkedIn.
EXECUTION RULES
Provide the complete page.tsx, layout.tsx, and tailwind.config.ts (if custom colors are needed).
Separate complex UI elements (like the Bento Grid or Terminal) into standard React components (e.g., Hero.tsx, Projects.tsx).
Ensure the design is fully responsive (mobile-first).
Use standard Tailwind utility classes; avoid writing custom CSS unless absolutely necessary for the node animation.
