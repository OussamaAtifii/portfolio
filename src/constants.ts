import AngularIcon from "@icons/AngularIcon.astro"
import Express from "@icons/Express.astro"
import NestJS from "@icons/NestJS.astro"
import NextJS from "@icons/NextJS.astro"
import NodeJS from "@icons/NodeJS.astro"
import React from "@icons/React.astro"
import StripeIcon from "@icons/StripeIcon.astro"
import Tailwind from "@icons/Tailwind.astro"

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
}

export const PROJECTS = [
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
    title: "BudgetBee",
    subtitle: "Finance Tracker",
    description:
      "An app to manage your daily transactions, track your spending and set budget limits to stay on top of your finances.",
    link: "https://budget-bee.oussamaati.dev",
    github: "https://github.com/OussamaAtifii/budget-bee",
    image: "projects/budget-bee.webp",
    tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "TecnoNexo",
    subtitle: "Minimalist Tech Store",
    description:
      "Platform for browsing and purchasing tech components, featuring order management and an intuitive admin dashboard. Offers secure payments via Stripe.",
    link: "https://tecnonexo.oussamaati.dev",
    github: "https://github.com/OussamaAtifii/tecnonexo",
    image: "projects/tecnonexo.webp",
    tags: [TAGS.NEST, TAGS.REACT, TAGS.TAILWIND, TAGS.STRIPE],
  },
]

export const EXPERIENCE = [
  {
    title: "FullStack Developer",
    company: "Magical Analytics",
    companyLink: "https://magical.es/",
    date: "March 2024 - Present",
    description:
      "I develop services to enhance the HubSpot interface, automate processes, and synchronize data between various CRMs and the HubSpot platform, boosting sales team productivity and efficiency. I also have experience in creating interactive websites with WordPress using Elementor and WooCommerce.",
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
