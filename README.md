# Kimani Mukundi — Portfolio

Personal portfolio built with Next.js 14, TypeScript, and CSS Modules.

## Getting started

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing your content

All your personal info lives in one file: **`lib/data.ts`**

Edit that file to update:
- Name, tagline, email, phone, GitHub, location
- Stats (projects shipped, etc.)
- About paragraphs
- Tech stack list
- Education
- Projects (title, description, tags, links)
- Skills and percentages

No need to touch any component files.

## Adding your resume

Place your resume PDF at:
```
public/resume.pdf
```

The "RESUME" button in the navbar will link to it automatically.

## Deploying to Vercel (free)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up / log in
3. Click **"Add New Project"** → import your GitHub repo
4. Leave all settings as default → click **"Deploy"**
5. Your site will be live at `your-project.vercel.app` in ~1 minute

You can also connect a custom domain in Vercel's dashboard for free.

## Project structure

```
kimani-portfolio/
├── app/
│   ├── globals.css       ← global styles & CSS variables
│   ├── layout.tsx        ← root layout & metadata
│   └── page.tsx          ← main page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Education.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── SectionHeading.tsx / .module.css
├── lib/
│   └── data.ts           ← ALL your content lives here
└── public/
    └── resume.pdf        ← add your resume here
```
