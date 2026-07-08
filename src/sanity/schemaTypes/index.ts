import { type SchemaTypeDefinition } from "sanity";
import { siteSettingsSchema } from "./siteSettings";
import { heroSchema } from "./hero";
import { experienceSchema } from "./experience";
import { educationSchema } from "./education";
import { publicationSchema } from "./publication";
import { voluntarySchema } from "./voluntary";
import { refereeSchema } from "./referee";
import { competencySchema } from "./competency";
import { bookSchema } from "./book";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsSchema,
  heroSchema,
  experienceSchema,
  educationSchema,
  publicationSchema,
  voluntarySchema,
  refereeSchema,
  competencySchema,
  bookSchema
];
