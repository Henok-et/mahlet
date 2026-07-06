import { defineField, defineType } from "sanity";

export const speakingSchema = defineType({
  name: "speakingSection",
  title: "Speaking & Advisory Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introductory text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "topics",
      title: "Keynote Topics",
      type: "array",
      of: [
        {
          type: "object",
          name: "speakingTopic",
          title: "Speaking Topic",
          fields: [
            { name: "title", title: "Topic Title", type: "string", validation: (Rule) => Rule.required() },
            { name: "description", title: "Topic Description", type: "text", validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email for Speaking Requests",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
