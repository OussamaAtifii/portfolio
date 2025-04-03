import { experience } from "@mocks/experience"
import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(experience))
}
