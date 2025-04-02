import type { Skill } from "@customTypes/skill";

/**
 * Fetches the list of skills from the API.
 * 
 * @returns A promise that resolves to an array of {@link Skill}.
 */
export async function getSkills(): Promise<Skill[]> {
    const API_URL = import.meta.env.PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/skills.json`)
    return response.json();
}