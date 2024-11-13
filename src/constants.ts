import NextJS from "./icons/NextJS.astro"
import Tailwind from "./icons/Tailwind.astro"
import React from "./icons/React.astro"
import NestJS from "./icons/NestJS.astro"
import Stripe from "./icons/StripeIcon.astro"
import NodeJS from "./icons/NodeJS.astro"
import Shadcn from "./icons/Shadcn.astro"
import Express from "./icons/Express.astro"

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-blue-500 text-white",
    icon: Tailwind,
  },
  REACT: {
    name: "React",
    class: " bg-gray-700 text-white",
    icon: React,
  },
  NEST: {
    name: "NestJS",
    class: "bg-red-500 text-white",
    icon: NestJS,
  },
  STRIPE: {
    name: "Stripe",
    class: "bg-gray-700 text-white",
    icon: Stripe,
  },
  NODEJS: {
    name: "Node.js",
    class: "bg-[#152920] text-white",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-black text-white",
    icon: Express,
  },
}

export const PROJECTS = [
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
    title: "Backend Developer",
    company: "Magical Analytics",
    companyLink: "https://magical.es/",
    date: "March 2024 - Present",
    description:
      "Development of backend services to automate and synchronize data between various CRMs and the HubSpot platform, improving the productivity and efficiency of sales and marketing teams. This ensures efficient integration, optimizing customer management and internal workflow.",
  },
]
