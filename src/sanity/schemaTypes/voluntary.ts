import { defineField, defineType } from "sanity";

export const voluntarySchema = defineType({
  name: "voluntary",
  title: "Voluntary Duties",
  type: "document",
  fields: [
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Description",
      type: "text",
    }),
    defineField({
      name: "dateRange",
      title: "Date Range",
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
