import type { Experience } from "@customTypes/experience"

/**
 * Fetches the list of work experience from the API.
 *
 * @returns A promise that resolves to an array of {@link Experience}.
 */
export async function getExperience(): Promise<Experience[]> {
  const API_URL = import.meta.env.PUBLIC_API_URL

  const response = await fetch(`${API_URL}/experience.json`)
  return response.json()
}
