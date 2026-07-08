import { defineField, defineType } from "sanity";

export const publicationSchema = defineType({
  name: "publication",
  title: "Research & Publications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Publication",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors / Context",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    })
  ],
});
