import { type SchemaTypeDefinition } from "sanity";
import { siteSettingsSchema } from "./siteSettings";
import { heroSchema } from "./hero";
import { experienceSchema } from "./experience";
import { educationSchema } from "./education";
import { publicationSchema } from "./publication";
import { voluntarySchema } from "./voluntary";
import { refereeSchema } from "./referee";
import { competencySchema } from "./competency";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsSchema,
  heroSchema,
  experienceSchema,
  educationSchema,
  publicationSchema,
  voluntarySchema,
  refereeSchema,
  competencySchema
];
