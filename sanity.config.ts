import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8c7h6llw";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Mahlet Teshome CMS",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings")
              ),
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
            S.divider(),
            // Collections
            S.documentTypeListItem("experience").title("Work Experience"),
            S.documentTypeListItem("education").title("Education & Trainings"),
            S.documentTypeListItem("publication").title("Publications"),
            S.documentTypeListItem("voluntary").title("Voluntary Duties"),
            S.documentTypeListItem("referee").title("Referees"),
            S.documentTypeListItem("competency").title("Competencies"),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
