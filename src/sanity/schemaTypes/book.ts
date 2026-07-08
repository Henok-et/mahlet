import { defineField, defineType } from "sanity";

export const bookSchema = defineType({
  name: "book",
  title: "Books",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Book Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Book Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    }),
    defineField({
      name: "purchaseUrl",
      title: "Purchase / Amazon Link",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
