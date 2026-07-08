import { defineField, defineType } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nationality",
      title: "Nationality",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Professional Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctaPrimaryText",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaPrimaryUrl",
      title: "Primary Button Link",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryText",
      title: "Secondary Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryUrl",
      title: "Secondary Button Link",
      type: "string",
    }),
  ],
});
