import {
  pgTable,
  pgEnum,
  serial,
  uuid,
  varchar,
  timestamp,
  text,
  jsonb,
  integer,
  pgSchema,
  doublePrecision,
  uniqueIndex,
  boolean,
  pgPolicy,
  pgRole,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

// Auth schema is managed by Supbase.
// const authSchema = pgSchema('auth');

// const authUsers = authSchema.table('users', {
//   id: uuid('id').primaryKey(),
// });

// const sessionUserRole = pgRole('session_user_role');
// export const authenticatedRole = pgRole('authenticated').existing();

/**
 * Users table
 * Stores user information
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").notNull().unique(),
  // .references(() => authUsers.id, { onDelete: 'cascade' }),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Section type enum
 */
export const contentTypeEnum = pgEnum("content_type", [
  "text",
  "image",
  "structured",
  "error",
  "media",
  "audio",
  "video",
]);

// Type inference for the tables
// These types can be used when working with the database to ensure type safety

// Users
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Enums

// Section Type
export type SectionType = (typeof contentTypeEnum.enumValues)[number];
