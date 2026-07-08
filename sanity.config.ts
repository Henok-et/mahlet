import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lynda-gratton-cms";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Lynda Gratton CMS",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Hero Settings
            S.listItem()
              .title("Hero Section")
              .id("hero")
              .child(
                S.document()
                  .schemaType("hero")
                  .documentId("hero")
                  .title("Hero Section")
              ),
            // Singleton: Speaking Section
            S.listItem()
              .title("Speaking & Advisory Settings")
              .id("speakingSection")
              .child(
                S.document()
                  .schemaType("speakingSection")
                  .documentId("speakingSection")
                  .title("Speaking & Advisory Settings")
              ),
            S.divider(),
            // Collections
            S.documentTypeListItem("book").title("Books"),
            S.documentTypeListItem("post").title("Thinking & Insights"),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
