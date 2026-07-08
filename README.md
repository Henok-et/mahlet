# Mahlet Teshome Website with Sanity CMS & Vercel

This repository is a premium, responsive professional website for Mahlet Teshome. It is built using **Next.js (App Router)**, **TypeScript**, and **Vanilla CSS**, with content managed dynamically through **Sanity CMS**, ready to deploy to **Vercel**.

## Features

- **Sanity CMS Integration**: Fully dynamic content sourcing. Sections for Work Experience, Education, Publications, and more are managed directly via Sanity.
- **Premium Design**: Modern aesthetic with fluid typography, custom micro-animations, glassmorphism, and responsive layouts.
- **Vanilla CSS System**: Complete stylesheet control with customized typography combinations (Playfair Display & Inter), HSL tokens, sleek grid systems, and micro-hover animations.
- **Dynamic Routing**: Clickable blog posts in the "Thinking" section map to dynamically rendered detail pages (`/thinking/[slug]`).
- **High-Fidelity Fallbacks**: The site is functional out-of-the-box. If Sanity is not connected or returns empty values, the site gracefully falls back to mock data populated with Mahlet Teshome's actual professional biographies, publications, and keynote topics.

---

## Getting Started

### 1. Installation
Clone the repository, navigate into the directory, and install dependencies:
```bash
npm install
```

### 2. Local Development
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Sanity CMS Setup & Integration

To connect this website to your Sanity database:

### 1. Create a Sanity Project
If you don't have one, sign up at [sanity.io](https://www.sanity.io/) and create a new project:
```bash
# In your terminal (run from workspace)
npx sanity@latest init
```
Or create it in your browser dashboard. Note down your **Project ID** and **Dataset name** (usually `production`).

### 2. Set Up Environment Variables
Create a file named `.env.local` in the project root and add your credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

### 3. Populating Content via Sanity Studio
Once the environment variables are set, start the development server and navigate to [http://localhost:3000/studio](http://localhost:3000/studio).
- Log in with your Sanity credentials.
- You will see the custom sidebar containing:
  - **Hero Section**: Edit your homepage headline, roles, bio text, and upload a profile picture.
  - **Speaking & Advisory**: Set speaking bios, list your keynote topics, and add a contact email.
  - **Books**: Add your published works with custom cover images, descriptions, external shopping links, and step-by-step frameworks (e.g. for *Redesigning Work*).
  - **Thinking & Insights**: Write and publish blog posts.

---

## Vercel Deployment

Deploying the website to Vercel is straightforward:

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to the **Vercel Dashboard** and click **Add New > Project**.
3. Import your repository.
4. Under **Environment Variables**, add the following keys:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Click **Deploy**. Vercel will automatically build the Next.js application and host it on a fast, globally distributed CDN.

### Setting Up Webhooks (Optional)
To trigger automated rebuilding of your website whenever you publish a new article or edit content in Sanity:
1. In Vercel, go to **Project Settings > Git** and scroll down to **Deploy Hooks**. Create a hook (e.g. named `sanity-webhook`) and copy the generated URL.
2. In your Sanity Project Dashboard (under **API > Webhooks**), add a new webhook pointing to that Vercel URL. Configure it to trigger on document updates.
