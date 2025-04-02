import type { APIRoute } from "astro";
import { skills } from "@mocks/skills";
  
export const GET: APIRoute = () => {
    return new Response(JSON.stringify(skills))
}