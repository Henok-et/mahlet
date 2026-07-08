import { defineField, defineType } from "sanity";

export const competencySchema = defineType({
  name: "competency",
  title: "Competencies",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    })
  ],
});
