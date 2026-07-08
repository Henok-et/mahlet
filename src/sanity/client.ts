import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8c7h6llw",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03", // standard modern API version
  useCdn: process.env.NODE_ENV === "production", // Caching in production, fresh drafts in development
});
