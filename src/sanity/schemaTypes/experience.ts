import { defineField, defineType } from "sanity";

export const experienceSchema = defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dateRange",
      title: "Date Range",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order (higher is first)",
      type: "number",
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderDesc',
      by: [
        { field: 'order', direction: 'desc' }
      ]
    }
  ]
});
