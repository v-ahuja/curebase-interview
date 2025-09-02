import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schemas/database/db.schema.ts",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
