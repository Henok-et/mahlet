import { defineField, defineType } from "sanity";

export const educationSchema = defineType({
  name: "education",
  title: "Education & Trainings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Degree or Training Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "isTraining",
      title: "Is this a Professional Training? (Check for Trainings, Uncheck for Degrees)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    })
  ],
});
