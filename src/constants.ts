import NextJS from "./icons/NextJS.astro"
import Tailwind from "./icons/Tailwind.astro"
import React from "./icons/React.astro"
import NestJS from "./icons/NestJS.astro"
import Stripe from "./icons/StripeIcon.astro"

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
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
    class: "bg-black text-white",
    icon: Stripe,
  },
}

export const PROJECTS = [
  {
    title: "TecnoNexo - Minimalist Tech Store",
    description:
      "Platform for browsing and purchasing tech components, featuring order management and an intuitive admin dashboard. Offers secure payments via Stripe.",
    link: "https://tecnonexo.vercel.app/",
    github: "https://github.com/OussamaAtifii/tech-store",
    image: "projects/tecnonexo.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NEST, TAGS.STRIPE],
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
