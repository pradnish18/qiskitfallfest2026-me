# ⚛️ Qiskit Fall Fest 2026 — SRM University-AP

<div align="center">

**SRM University-AP × Qiskit Fall Fest 2026**

**A Decade of Quantum on the Cloud**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/)

**Official website repository for the SRM University-AP edition of Qiskit Fall Fest 2026.**

[Live Website](https://qiskit-fall-fest-2026-test.vercel.app/) · [GitHub](https://github.com/qiskitfallfest26-srmap/Qiskit-fall-fest-2026-test) · [Qiskit](https://www.ibm.com/quantum/qiskit)

</div>

---

## 1. Project Overview

This repository contains the web platform being developed for **Qiskit Fall Fest 2026 at SRM University-AP, Amaravati**.

Qiskit Fall Fest is a global series of community-led quantum-computing events. IBM Quantum describes the 2026 edition as a celebration of **a decade of quantum computing on the cloud**, with local events built around learning, building, research, coding, hackathons, talks and community networking.

The SRM University-AP website is intended to be more than an event announcement page. It is being developed as the central digital experience for discovering the event, understanding its program, exploring the SRM quantum ecosystem, finding teams and venues, and reaching the official registration flow.

### Current state of the repository

The current `main` branch is the **technical foundation / structural prototype** of the project. It establishes the Next.js App Router, primary routes, shared architectural conventions, environment configuration, tooling and a homepage structure skeleton. The full visual system and production content are being implemented progressively on top of that foundation.

---

# 2. Event Context

## Qiskit Fall Fest 2026

IBM Quantum's 2026 host announcement describes Qiskit Fall Fest as a global community-led program, primarily organized by students and local quantum communities. Activities include hands-on workshops, coding challenges and hackathons, research talks and panels, and social/networking events.

### 2026 milestone theme

> **A Decade of Quantum on the Cloud**

The theme marks ten years since IBM introduced open-access quantum computing through the cloud.

### SRM University-AP edition

The project brief identifies the SRM University-AP edition with the following event context:

| Item | Detail |
|---|---|
| Institution | SRM University-AP |
| Location | Amaravati, Andhra Pradesh, India |
| Host designation | Partner Plus Host |
| Theme | A Decade of Quantum on the Cloud |
| Online phase | 5–9 October 2026 |
| Offline phase | 26–30 October 2026 |
| Delivery team | Website & Technology Cell |

The website brief calls for a polished, technically sophisticated platform that feels closer to an international quantum-technology event than a conventional university fest website.

---

# 3. SRM University-AP & the Quantum Ecosystem

The website is positioned inside SRM University-AP's broader quantum-technology ecosystem.

SRM University-AP has publicly described its **Quantum Reference Facility (QRF)** as part of the **Amaravati Quantum Valley Project**, established through an MoU with the Government of Andhra Pradesh. SRM AP describes the facility as an open-access quantum-computing platform and a research and testbed environment for quantum technologies.

This creates an important institutional narrative for the website:

```text
Qiskit Fall Fest 2026
        │
        ├── Quantum Education
        ├── Quantum Research
        ├── Quantum Innovation
        └── Quantum Reference Facility
                    │
                    ▼
             SRM University-AP
                    │
                    ▼
          Amaravati Quantum Ecosystem
```

The site should communicate this ecosystem using approved institutional facts and assets rather than unsupported statistics or claims.

---

# 4. Website Vision

The design and engineering goal is to create a **premium, editorial, immersive and technically credible quantum event platform**.

The site should:

- Explain the event quickly and clearly.
- Give participants an obvious path to explore the program.
- Showcase SRM University's quantum ecosystem.
- Create a distinctive visual identity for the SRM AP edition.
- Work reliably across mobile, tablet and desktop.
- Use motion deliberately rather than excessively.
- Be accessible, maintainable and performant.
- Provide a foundation for future speakers, schedules, registrations and credential verification.

### Core audience

- Students
- Quantum-computing learners
- Developers
- Researchers
- Educators
- Faculty
- Industry participants
- Quantum community members

---

# 5. Experience Principles

## Inform

Answer the core questions immediately: what, when, where, who and how to participate.

## Inspire

Use the decade milestone to create a sense of technological progress and future possibility.

## Educate

Make quantum-computing and event information easy to discover without unnecessary complexity.

## Connect

Connect visitors to sessions, workshops, teams, venues, ecosystem resources and registration.

## Represent

Present SRM University-AP, Qiskit and the event relationship accurately and professionally.

## Scale

Keep the architecture ready for future event functionality.

---

# 6. Information Architecture

The repository's technical foundation currently defines these primary routes:

```text
/
├── /about
├── /experience
├── /schedule
├── /venues
├── /team
│   ├── /team/website
│   └── /team/organizing
└── /faqs
```

### Route responsibilities

| Route | Purpose |
|---|---|
| `/` | Main event landing experience |
| `/about` | Event and institutional overview |
| `/experience` | Visitor-facing event experience |
| `/schedule` | Program / schedule |
| `/venues` | Venue information |
| `/team` | Team landing page |
| `/team/website` | Website & Technology Team |
| `/team/organizing` | Organizing hierarchy |
| `/faqs` | Frequently asked questions |

### Navigation model

The global navbar should navigate between primary routes only. The current page should not be presented as a redundant destination, the logo should consistently return to home, and contextual/in-page navigation should remain separate from the global navbar.

The current project foundation specifies that the primary registration CTA should redirect to the official **external Unstop destination** rather than introducing a duplicate `/register` or `/signup` flow.

---

# 7. Homepage Architecture

The current homepage foundation is structured around nine major sections:

```text
01  Hero
02  Learn / Build / Connect / Create Impact
03  The Next Decade Together
04  Event Highlights
05  Countdown
06  Our Partners
07  Hosted At
08  Ready to Take Part?
09  Footer
```

### Hero

Event identity, host institution, visual concept, dates and primary participation CTA.

### Learn / Build / Connect / Create Impact

A narrative framework for participant outcomes and the overall event journey.

### The Next Decade Together

A forward-looking section connecting the 2026 milestone to the future of quantum exploration.

### Event Highlights

The information architecture supports categories such as:

- Technical sessions
- Workshops
- Hackathons
- Competitions
- Research
- Industry sessions
- Expo
- Networking

### Countdown

A dynamic countdown to the event start.

### Our Partners

Institutional and ecosystem relationships represented with only confirmed entities and approved assets.

### Hosted At

SRM University-AP campus and event environment.

### Ready to Take Part?

The final participation CTA leading to the official registration platform.

### Footer

Institutional identity, navigation, attribution, references and event credits.

---

# 8. Design Direction

The creative direction for the website is:

```text
Dark · Editorial · Minimal · Cinematic · Scientific · Premium · Asymmetric
```

The design deliberately avoids the look of a generic dashboard made from many small cards.

### Visual principles

**Editorial composition**  
Large-scale typography, clear hierarchy, intentional spacing and strong visual rhythm.

**Quantum visual language**  
Abstract computational and scientific motifs that support the event story without overwhelming the interface.

**Negative space**  
Give content and hero visuals room to breathe.

**Purposeful motion**  
Use transitions and micro-interactions to improve orientation, feedback and hierarchy.

**Accessibility**  
Use readable typography, strong contrast, useful focus states and clear interaction targets.

**Responsive composition**  
Mobile is treated as a deliberate layout, not a compressed desktop design.

---

# 9. Technology Stack

The current repository uses:

| Layer | Technology |
|---|---|
| Framework | Next.js 15 |
| Routing | Next.js App Router |
| UI | React 19 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 4 |
| Animation | Motion |
| Icons | Lucide React |
| AI integration | Google GenAI |
| Forms | React Hook Form / resolver infrastructure |
| Utilities | clsx / tailwind-merge |
| Code quality | ESLint + Prettier |
| Deployment | Vercel |
| Package manager | npm |

The authoritative dependency versions are maintained in `package.json`.

---

# 10. Repository Structure

```text
Qiskit-fall-fest-2026-test/
│
├── app/                    # Next.js App Router routes
├── components/             # Shared and page-specific UI components
├── data/                   # Structured event/content data
├── docs/                   # Technical/project documentation
├── hooks/                  # Reusable React hooks
├── lib/                    # Shared utilities and integration logic
├── public/                 # Static assets and references
│   └── references/
│
├── .env.example            # Environment variable template
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── eslint.config.mjs
├── metadata.json
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── PROJECT-FOUNDATION.md   # Technical foundation and architectural rules
├── README.md
└── tsconfig.json
```

### Component ownership rules

Reusable primitives and site-wide components belong in:

```text
components/shared/
```

Components unique to a particular page belong in:

```text
components/pages/[route]/
```

Structured content belongs in:

```text
data/
```

Documentation belongs in:

```text
docs/
```

Visual/event reference material belongs in:

```text
public/references/
```

---

# 11. Local Development

## Prerequisites

Install:

- Node.js
- npm
- Git

Verify your environment:

```bash
node -v
npm -v
git --version
```

## Clone the repository

```bash
git clone https://github.com/qiskitfallfest26-srmap/Qiskit-fall-fest-2026-test.git
cd Qiskit-fall-fest-2026-test
```

## Install dependencies

```bash
npm install
```

## Configure environment variables

```bash
cp .env.example .env.local
```

Add the required Gemini API credential:

```env
GEMINI_API_KEY=your_api_key_here
```

Never commit `.env.local` or any secret.

## Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Validate a production build

```bash
npm run build
```

## Start production mode locally

```bash
npm run start
```

## Run linting

```bash
npm run lint
```

---

# 12. Environment & Security

Secrets must never be committed to Git.

### Never commit

```text
.env
.env.local
.env.production
API keys
private tokens
service-account credentials
database passwords
```

Use `.env.example` only for documenting variable names.

The project foundation also specifies:

- No hardcoded API keys.
- No client-side secrets.
- No unnecessary authentication infrastructure.
- Registration is handled externally through the official registration platform.

---

# 13. Performance Standards

Performance is treated as a product requirement.

Contributors should:

- Optimize images.
- Prefer route-level code splitting.
- Keep client-side JavaScript minimal.
- Avoid unnecessary `use client` declarations.
- Use semantic HTML.
- Minimize redundant network requests.
- Keep animations performance-conscious.
- Avoid layout shifts.
- Validate on real mobile devices.
- Run production builds before significant PRs.

The project brief also identifies scalability as a core concern, including readiness for future speaker directories, schedules, registrations and credential verification.

---

# 14. Responsive Design Standards

The implementation is intended to be mobile-first while retaining desktop precision.

```text
Mobile
  ↓
Tablet
  ↓
Desktop
  ↓
Large desktop
```

Responsive work should intentionally reconsider:

- Typography
- Spacing
- Content order
- Navigation behavior
- Visual density
- Animation
- Interaction targets
- Asset sizing

Do not simply shrink desktop UI until it fits a mobile viewport.

---

# 15. Content Accuracy & Editorial Rules

Public event information must be based on approved content.

### Do not invent

- Speaker names or biographies
- Speaker affiliations
- Sponsor relationships
- Attendance numbers
- Prize pools
- Unconfirmed agenda times
- Registration URLs
- Government / IBM relationships
- Partner logos
- Institutional statistics

When information is not confirmed, omit it or clearly mark its status rather than publishing realistic-looking placeholder facts.

This is especially important for an event site connected to institutional and external branding.

---

# 16. Qiskit / IBM Branding & Intellectual Property

Qiskit and IBM are third-party intellectual property.

The website should:

- Use Qiskit and IBM names accurately.
- Use approved branding assets where authorized.
- Preserve required attribution and license notices.
- Respect third-party trademarks.
- Respect open-source licenses.
- Avoid implying unauthorized sponsorship, endorsement or affiliation.
- Avoid modifying protected logos without appropriate authorization.

Where applicable, Qiskit open-source software and other dependencies remain governed by their own licenses.

---

# 17. Team Ownership

| ID | Team Member | Primary Responsibility |
|---|---|---|
| **v0** | **Srihaas** | Core application, architecture, integration and main technical ownership |
| **v1** | **Pradnish** | UI/UX Lead, design flows, visual direction and UI implementation |
| **v2** | **Sandeep** | Technical implementation, UI/UX support and documentation |
| **v3** | **Subhani** | UI/UX Co-Lead and design refinement |
| **v4** | **Rober** | Testing, QA, technical support and validation |

The `v0–v4` labels represent **team ownership**, not software release versions.

---

# 18. Git Collaboration Model

This project uses one official Fest repository plus a personal GitHub repository for each teammate.

```text
origin → teammate's personal GitHub repository
fest   → official Fest GitHub repository
```

The **Fest repository is the source of truth for integration**.

Personal repositories provide individual backup and workspace control without using GitHub forks as the collaboration model.

### Team branches

```text
main
│
├── qiskit-fall-fest-2026-v0  → Srihaas
├── qiskit-fall-fest-2026-v1  → Pradnish
├── qiskit-fall-fest-2026-v2  → Sandeep
├── qiskit-fall-fest-2026-v3  → Subhani
└── qiskit-fall-fest-2026-v4  → Rober
```

For larger features, contributors may create feature branches from their assigned team branch.

---

# 19. Two-Remote Setup

Clone the official Fest repository:

```bash
git clone https://github.com/qiskitfallfest26-srmap/Qiskit-fall-fest-2026-test.git
cd Qiskit-fall-fest-2026-test
```

Rename the official remote:

```bash
git remote rename origin fest
```

Add your personal repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_PERSONAL_REPOSITORY.git
```

Verify:

```bash
git remote -v
```

Expected:

```text
origin  https://github.com/YOUR_USERNAME/YOUR_PERSONAL_REPOSITORY.git
fest    https://github.com/qiskitfallfest26-srmap/Qiskit-fall-fest-2026-test.git
```

---

# 20. Standard Team Development Workflow

## Step 1 — Synchronize with the official Fest repository

```bash
git switch main
git fetch fest
git merge fest/main
git push origin main
```

## Step 2 — Update your team branch

Example for Pradnish:

```bash
git switch qiskit-fall-fest-2026-v1
git merge main
```

## Step 3 — Develop locally

```bash
npm run dev
```

## Step 4 — Validate

```bash
npm run lint
npm run build
```

## Step 5 — Commit

```bash
git add .
git commit -m "feat: implement homepage hero"
```

## Step 6 — Push to your personal repository

```bash
git push origin qiskit-fall-fest-2026-v1
```

## Step 7 — Push the same branch to the official Fest repository

```bash
git push fest qiskit-fall-fest-2026-v1
```

## Step 8 — Open a Pull Request in the Fest repository

```text
base: main
compare: qiskit-fall-fest-2026-v1
```

## Step 9 — Review

The branch is reviewed through:

- GitHub code review
- Build/lint checks
- Vercel preview deployment
- Responsive inspection
- Functional QA
- Visual QA

## Step 10 — Merge

```text
team branch
     ↓
Pull Request
     ↓
Vercel Preview
     ↓
Code + UI + QA Review
     ↓
Approve
     ↓
Merge → main
```

---

# 21. Why Push to Both Repositories?

The same branch is intentionally sent to two remotes:

```text
                     LOCAL LAPTOP
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
          Personal GitHub       Fest GitHub
              origin                fest
                 │                   │
                 └──── same branch ─┘
                           │
                           ▼
                       Pull Request
```

This gives each contributor:

1. A personal backup/control point.
2. A branch visible to the official team.
3. A Vercel preview path through the Fest repository.
4. A clean review and merge path into `main`.

---

# 22. Vercel Deployment Model

The intended deployment lifecycle is:

```text
Feature Branch
      ↓
Fest GitHub
      ↓
Vercel Preview
      ↓
Review / QA
      ↓
Merge to main
      ↓
Vercel Production
```

Current deployment:

```text
https://qiskit-fall-fest-2026-test.vercel.app/
```

Production should represent the latest approved `main` branch.

Feature branches should be reviewed through preview deployments before merge wherever available.

---

# 23. Branch Protection Rules

`main` should be treated as a controlled integration branch.

Recommended rules:

- Pull Request required for normal changes.
- At least one review before merge.
- No force-pushes to `main`.
- No branch deletion through routine workflow.
- Build/lint checks required when configured.
- UI changes reviewed through Vercel preview.
- Conflicts resolved before merge.

The initial README/bootstrap commit may be placed directly on `main`. After that, normal feature development should occur through branches and Pull Requests.

---

# 24. Pull Request Standards

Every PR should explain:

### What changed?

Example:

```text
Implemented the homepage hero and responsive navigation.
```

### Why?

```text
Adds the first production visual layer for the event landing experience.
```

### What was tested?

```text
- npm run lint
- npm run build
- Desktop
- Mobile
- Navigation
- Vercel preview
```

### For UI work

Include screenshots and/or a Vercel preview URL whenever possible.

---

# 25. Commit Convention

Use meaningful, action-oriented commits:

```text
feat: add hero section
feat: implement schedule route
ui: refine navigation typography
ui: improve mobile hero composition
fix: resolve mobile overflow
fix: correct external registration link
docs: add architecture documentation
test: validate schedule interactions
refactor: extract reusable event card
perf: optimize homepage images
chore: update dependencies
```

Avoid:

```text
final
final2
new
changes
update
working
test123
```

---

# 26. Testing Strategy

### Functional testing

- Navigation
- Route transitions
- External registration redirect
- Forms where applicable
- Interactive components
- Dynamic content

### Visual testing

- Desktop
- Laptop
- Tablet
- Mobile
- Typography
- Spacing
- Alignment
- Animation states
- Hover/focus states

### Technical testing

- TypeScript
- ESLint
- Production build
- Console errors
- Broken assets
- Invalid links
- Environment configuration

### Performance testing

- Image loading
- JavaScript payload
- Client/server component boundaries
- Layout shift
- Animation performance
- Mobile loading

---

# 27. Conflict Resolution

Before a large merge, synchronize your branch:

```bash
git switch main
git fetch fest
git merge fest/main

git switch YOUR_BRANCH
git merge main
```

If a conflict appears:

```bash
git status
```

Resolve the affected files, then:

```bash
git add .
git commit -m "fix: resolve merge conflicts"
git push origin YOUR_BRANCH
git push fest YOUR_BRANCH
```

Never blindly choose one side of a conflict. For UI conflicts, coordinate with the UI/UX leads. For architecture conflicts, coordinate with the core integration owner.

---

# 28. Documentation Standards

Keep project documentation inside:

```text
docs/
```

Recommended structure:

```text
docs/
├── architecture.md
├── design-system.md
├── content-guide.md
├── deployment.md
├── testing.md
├── api.md
└── decisions/
```

Major architecture, design and integration decisions should be documented so future contributors can understand both the implementation and the reasoning behind it.

---

# 29. Future Expansion

The current foundation is intentionally extensible.

Potential future areas include:

```text
Speaker Directory
      ├── Profiles
      ├── Sessions
      └── Affiliations

Event Schedule
      ├── Tracks
      ├── Sessions
      └── Filters

Registration
      └── Official external integration

Credential Verification
      └── Attendee verification

Event Updates
      └── Announcements / schedule changes

Quantum Ecosystem
      ├── Research
      ├── Education
      ├── Innovation
      └── QRF
```

Expansion should be incremental and should preserve the current route/component/data separation.

---

# 30. Project Principles

### Accuracy over fabrication

Only approved event information should become public content.

### Design with purpose

Every visual choice should support hierarchy, comprehension, identity or usability.

### Performance by default

Do not introduce expensive effects without understanding their runtime cost.

### Reuse before duplication

Prefer reusable components, utilities and structured data.

### Keep `main` stable

Incomplete, experimental or unreviewed changes stay on branches.

### Document important decisions

The repository should remain understandable to someone joining the team later.

### Build for the real event

The codebase should mature toward a dependable public event platform rather than remaining a visual-only prototype.

---

# 31. Team Responsibilities

## v0 — Srihaas

**Core Engineering & Integration**

Owns core application architecture, foundational implementation, technical integration and coordination of approved changes into `main`.

## v1 — Pradnish

**UI/UX Lead**

Owns design flows, visual direction, UI/UX implementation, interaction patterns and design-system consistency.

## v2 — Sandeep

**Technical + UI/UX + Documentation**

Supports technical implementation, UI/UX work, documentation and engineering handover.

## v3 — Subhani

**UI/UX Co-Lead**

Supports design direction, visual refinement, responsive behavior and design collaboration.

## v4 — Rober

**Testing + Technical Support**

Owns QA, functional validation, regression testing, issue reproduction and technical support.

---

# 32. Official References

### Qiskit / IBM Quantum

- [Qiskit](https://www.ibm.com/quantum/qiskit)
- [IBM Quantum](https://www.ibm.com/quantum)
- [Qiskit Fall Fest 2026 — IBM Quantum](https://www.ibm.com/quantum/blog/qiskit-fall-fest-2026)

### SRM University-AP

- [SRM University-AP](https://www.srmap.edu.in/)
- [Quantum Reference Facility](https://www.srmap.edu.in/qrc/)
- [SRM AP — Quantum Valley / Founding Academic Partner](https://www.srmap.edu.in/news/srm-ap-joins-ap-governments-quantum-valley-project-as-the-founding-academic-partner/)
- [Quantum Reference Facility Inauguration](https://events.srmap.edu.in/event/inauguration-of-quantum-reference-facility-on-campus-by-honble-chief-minister-of-ap/)

### Project

- [Official GitHub Repository](https://github.com/qiskitfallfest26-srmap/Qiskit-fall-fest-2026-test)
- [Current Vercel Deployment](https://qiskit-fall-fest-2026-test.vercel.app/)

---

# 33. Final Development Rule

```text
                    BUILD LOCALLY
                         │
                         ▼
                  WORK ON YOUR BRANCH
                         │
                         ▼
                      COMMIT
                         │
                         ├──────────────┐
                         ▼              ▼
                  Personal GitHub   Fest GitHub
                         │              │
                         └──── same ────┘
                              branch
                                │
                                ▼
                         Pull Request
                                │
                                ▼
                         Vercel Preview
                                │
                                ▼
                       Review + Testing
                                │
                                ▼
                              MERGE
                                │
                                ▼
                              main
                                │
                                ▼
                       Vercel Production
```

> **`main` is the official integrated version.**  
> **Branches are for development.**  
> **Pull Requests are for review.**  
> **Vercel previews are for validation.**  
> **Production changes only after approval.**

---

# 34. License & Third-Party Materials

Project-specific website code and original project materials should be handled according to the event organizer's applicable terms and intellectual-property arrangements.

Third-party materials—including IBM/Qiskit trademarks, logos, photographs, fonts, icons, open-source libraries and other assets—remain subject to their respective owners' licenses and permissions.

Where open-source software is used, its applicable license and required notices must be respected.

---

<div align="center">

**Qiskit Fall Fest 2026 — SRM University-AP**

*Building the next decade of quantum experiences.*

**SRM University-AP × Qiskit**

</div>
