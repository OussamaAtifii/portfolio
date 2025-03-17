import AngularIcon from "@icons/AngularIcon.astro"
import Express from "@icons/Express.astro"
import LanguageCert from "@icons/LanguageCert.astro"
import NestJS from "@icons/NestJS.astro"
import NextJS from "@icons/NextJS.astro"
import Ngrx from "@icons/Ngrx.astro"
import NodeJS from "@icons/NodeJS.astro"
import React from "@icons/React.astro"
import Shadcn from "@icons/Shadcn.astro"
import StripeIcon from "@icons/StripeIcon.astro"
import Tailwind from "@icons/Tailwind.astro"
import TypeScript from "@icons/TypeScript.astro"
import UdemyIcon from "@icons/UdemyIcon.astro"

export const TAGS = {
  NEXT: {
    name: "Next.js",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind",
    icon: Tailwind,
  },
  REACT: {
    name: "React",
    icon: React,
  },
  NEST: {
    name: "NestJS",
    icon: NestJS,
  },
  STRIPE: {
    name: "Stripe",
    icon: StripeIcon,
  },
  NODEJS: {
    name: "Node.js",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express",
    icon: Express,
  },
  ANGULAR2: {
    name: "Angular2",
    icon: AngularIcon,
  },
  NGRX: {
    name: "NgRx",
    icon: Ngrx,
  },
  SHADCN: {
    name: "Shadcn",
    icon: Shadcn,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScript,
  },
  UDEMY: {
    name: "Udemy",
    icon: UdemyIcon,
  },
  LANGUAGE_CERT: {
    name: "Language Cert",
    icon: LanguageCert,
  },
}

export const PROJECTS = [
  {
    title: "Prodly",
    subtitle: "Project Manager",
    description:
      "A simple drag and drop interface to manage projects and tasks in one place, with a clear view of your data to stay organized and track progress.",
    link: "https://prodly.oussamaati.dev",
    github: "https://github.com/OussamaAtifii/prodly",
    image: "projects/prodly.webp",
    tags: [TAGS.ANGULAR2, TAGS.NGRX, TAGS.TAILWIND, TAGS.NODEJS, TAGS.EXPRESS],
  },
  {
    title: "Moviees",
    subtitle: "Find new Movies",
    description:
      "A platform to explore movies, search for specific titles, access detailed information, view ratings and summaries, and discover personalized recommendations",
    link: "https://moviees.oussamaati.dev",
    github: "https://github.com/OussamaAtifii/moviees",
    image: "projects/moviees.webp",
    tags: [TAGS.ANGULAR2, TAGS.TAILWIND],
  },
  {
    title: "Memory Match",
    subtitle: "Test Your Memory",
    description:
      "Simple game where players flip over cards to find matching pairs. The goal is to remember the location of cards and match them all in the shortest time possible.",
    link: "https://memory-match.oussamaati.dev",
    github: "https://github.com/OussamaAtifii/memory-match",
    image: "projects/memory-match.webp",
    tags: [TAGS.ANGULAR2, TAGS.TYPESCRIPT],
  },
  // {
  //   title: "BudgetBee",
  //   subtitle: "Finance Tracker",
  //   description:
  //     "An app to manage your daily transactions, track your spending and set budget limits to stay on top of your finances.",
  //   link: "https://budget-bee.oussamaati.dev",
  //   github: "https://github.com/OussamaAtifii/budget-bee",
  //   image: "projects/budget-bee.webp",
  //   tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.REACT, TAGS.TAILWIND, TAGS.SHADCN],
  // },
  // {
  //   title: "TecnoNexo",
  //   subtitle: "Minimalist Tech Store",
  //   description:
  //     "Platform for browsing and purchasing tech components, featuring order management and an intuitive admin dashboard. Offers secure payments via Stripe.",
  //   link: "https://tecnonexo.oussamaati.dev",
  //   github: "https://github.com/OussamaAtifii/tecnonexo",
  //   image: "projects/tecnonexo.webp",
  //   tags: [TAGS.NEST, TAGS.REACT, TAGS.TAILWIND, TAGS.STRIPE],
  // },
]

export const EXPERIENCE = [
  {
    title: "FullStack Developer",
    company: "Magical Analytics",
    companyLink: "https://magical.es/",
    date: "March 2024 - Present",
    description: [
      "Developed Laravel-based services to transfer large data volumes from ERP systems to HubSpot, integrating HubSpot API to centralize and sync information.",
      "Built custom REST APIs and HubSpot interfaces to visualize real-time entity relationships, using Laravel, JavaScript, and Tailwind CSS",
      "Created and implemented automated HubSpot workflows using Node.js to simplify processes and improve efficiency.",
      "Created dynamic, responsive WordPress websites to enhance clients' digital presence.",
    ],
  },
]

export const SKILLS = [
  {
    name: "Languages",
    items: ["JavaScript", "TypesScript", "Java", "PHP", "SQL"],
  },
  {
    name: "Frontend",
    items: ["Angular", "React", "Astro", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Backend",
    items: ["Spring Boot", "Node.js", "Express", "Laravel"],
  },
  {
    name: "Others",
    items: ["Git", "Github", "Linux", "Docker", "RESTful APIs"],
  },
]

export const CERTIFICATIONS = [
  {
    name: "Angular - The Complete Guide",
    link: "https://www.udemy.com/course/the-complete-guide-to-angular-2",
    date: "December 2024",
    description:
      "Angular Basics, Signals, RxJS, NgRx, Directives, Pipes, Routing, Karma",
    tag: TAGS.UDEMY,
  },
  {
    name: "Docker & Kubernetes: The Practical Guide",
    link: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide",
    date: "January 2025",
    description: "Containers, Images, Kubernetes, Docker Compose, Deployment",
    tag: TAGS.UDEMY,
  },
  {
    name: "B2 - LanguageCert International ESOL",
    link: "https://www.languagecert.org/es/language-exams/english/languagecert-international-esol/b2-communicator-2281",
    date: "October 2024",
    description: "LanguageCert B2 Certification",
    tag: TAGS.LANGUAGE_CERT,
  },
]
