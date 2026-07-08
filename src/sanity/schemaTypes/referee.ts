import { defineField, defineType } from "sanity";

export const refereeSchema = defineType({
  name: "referee",
  title: "Referees",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title / Position",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    })
  ],
});
