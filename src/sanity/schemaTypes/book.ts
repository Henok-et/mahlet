import { defineField, defineType } from "sanity";

export const bookSchema = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Book Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishDate",
      title: "Publication Date",
      type: "date",
    }),
    defineField({
      name: "purchaseUrl",
      title: "Purchase / External Link",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "framework",
      title: "Framework Steps (Optional)",
      description: "If this book introduces a framework (like Redesigning Work), define its steps here.",
      type: "array",
      of: [
        {
          type: "object",
          name: "stepItem",
          title: "Framework Step",
          fields: [
            { name: "stepNumber", title: "Step Number/Identifier (e.g. Step 1)", type: "string" },
            { name: "title", title: "Step Title (e.g. Understand)", type: "string" },
            { name: "description", title: "Step Description", type: "string" },
          ],
        },
      ],
    }),
  ],
});
