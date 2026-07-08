import { defineField, defineType } from "sanity";

export const languageSchema = defineType({
  name: "language",
  title: "Languages",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Language Name",
      type: "string",
      description: "e.g., English, Amharic, French",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "proficiency",
      title: "Proficiency Level",
      type: "string",
      description: "e.g., Fluent, Rudimentary",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    })
  ],
});
