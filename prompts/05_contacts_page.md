SYSTEM CONTEXT

Role: Senior Next.js Developer & UI/UX Architect.

Stack: Next.js (App Router), TypeScript, Tailwind CSS, React Hook Form (or native server actions).

Design System: "Google Stitch" inspired. Minimalist "Intake Portal" form.

i18n: Dictionary-based translation setup (t()).

CURRENT TASK

Build the Contact Page (/contact/page.tsx) as a secure-looking payload intake form. Provide en.json entries.

CONTENT & STRUCTURE

1. Header & Intake Notice

Headline: System Intake & Inquiries

Sub-headline: Submit project specifications, consulting requests, or research proposals. All communications are securely routed via an n8n webhook directly to my encrypted terminal.

2. The Intake Form (Fields)

Name (Text Input - Required)

Company / Institution (Text Input - Optional)

Email (Email Input - Required)

Engagement Type (Dropdown - Required):

Consulting & Strategy

Multi-Agent AI Integration

DevOps & Self-Hosted Infrastructure

Academic Research / PhD

Budget Range / Scope (Dropdown - Optional):

Research / Academic (No Commercial Budget)

Discovery Phase (Under $1,000)

Deployment & Integration ($1,000 - $3,000)

Enterprise Architecture ($3,000+)

System Requirements / Message (Text Area - Required)

Submit Button: Transmit Request ->

3. Operations & Logistics

Status: Online

Base of Operations: Chișinău, Moldova

Timezone: EEST (Eastern European Summer Time / UTC+3).

SLA: Incoming requests are parsed and reviewed daily.

Verified Endpoints: GitHub (github.com/Jauysh), LinkedIn (linkedin.com/in/azamat-jauysh)

EXECUTION INSTRUCTIONS

Output JSON keys.

Build the Form UI using Tailwind to make standard inputs look flat and clean (no native browser shadows).

Include a mock onSubmit function that console.logs the payload (I will hook this up to my n8n webhook later).