# 🐟 What's the Catch?

**What's the Catch?** is a SaaS web application that helps users quickly understand and track changes in Terms & Conditions.  
It highlights **red flags, changes without notice, and unusual clauses** so users can stay informed and protected.  

The platform follows a **freemium model**:
- **Free tier**: Quick T&C scans and basic highlights.
- **Paid tier**: Alerts for clause changes, saved history, multiple app/company tracking, no ads, and advanced analysis.

---

## ✨ Features

- 🔎 **T&C Analyzer** — Upload or link Terms & Conditions and get an easy-to-read analysis.
- 🚩 **Red Flags** — Detect problematic clauses (like unilateral changes, hidden fees, or privacy concerns).
- 🔔 **Change Alerts** — Track companies/apps and receive alerts when their T&Cs change.
- 📜 **History Tracking** — Keep a record of past T&Cs for reference.
- 👥 **Account System** — Sign up, log in, forgot password flows.
- 📊 **Dashboard** — Manage tracked apps, alerts, and preferences.
- 💸 **Freemium Model** — Free tier + paid plan with extended features.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (React 19, App Router)
- **Backend**: API routes with Next.js / future dedicated worker for cron jobs
- **Database**: [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- **Queue / Cron**: Redis (Upstash) + BullMQ/ioredis workers
- **Monorepo**: [Turborepo](https://turbo.build/) + [PNPM](https://pnpm.io/)
- **Language**: TypeScript 5.x
- **Styling**: TailwindCSS + shadcn/ui components
- **Auth**: NextAuth.js (planned)
- **AI usage**: 
  - ***Local*** Ollama service (llama3 model)
  - ***API*** Preferable down the line add OpenAI API calls (GPT-5 model)

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/whats-the-catch.git
cd whats-the-catch
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Download the enviroment variables
```bash
.env link
```
*.env file needs to be placed in /packages*

### 4. Ollama usage

- Go to [Ollama's website](https://ollama.com/).
- Find and download the version you need for your OS.
- Install it and run it for the first time.
- Run llama3 (It will download needed packages):
```
ollama run llama3
```
- To see where the server was initialized run:
```
ollama serve
```
- You will see an *error* with something like: `listen TCP 127.0.0.1:11434`, that is your server.
- Paste that in your env as: `OLLAMA_ROUTE_LOCAL="http://127.0.0.1:11434"`


### 4. Run Migrations
```bash
pnpm prisma migrate dev
```

### 5. Start development
```bash
pnpm dev
```
Frontend should now be running at:
👉 http://localhost:3000

---

## 📒 Details and Context

*Design in [Figma](https://www.figma.com/design/1Ll0SFvgIdMke6fsGLgdGP/WhatIsTheCatch?node-id=0-1&t=fUgPBdXP7J5n5Zci-1)

*Roadmap and important stuff in [Notion](https://www.notion.so/What-s-the-catch-237641fea1ea80e8836df961f4b452d8?source=copy_link)

---


📜 License

MIT © 2025 Nicolás Hernán Silva