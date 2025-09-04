"use server";

import { z } from "zod";

const shortenURLSchema = z.object({
  longURL: z.url("Invalid URL format").min(1, "URL is required"),
});

export type ShortenState = {
  errors: string[];
  shortURL?: string;
};

export async function shortenURL(
  _prevState: ShortenState,
  formData: FormData
): Promise<ShortenState> {
  const result = shortenURLSchema.safeParse({
    longURL: formData.get("longURL"),
  });

  if (!result.success) {
    const errors = result.error.issues.map((i) => i.message);
    return { errors };
  }

  try {
    const response = await fetch(`${process.env.API_V1_URL}/shorten`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ long_url: result.data.longURL }),
    });

    if (!response.ok) {
      return { errors: ["Failed to shorten URL. Please try again."] };
    }

    const data = await response.json();
    return { errors: [], shortURL: data.short_url };
  } catch (error) {
    return {
      errors: [error instanceof Error ? error.message : "Unknown error"],
    };
  }
}
