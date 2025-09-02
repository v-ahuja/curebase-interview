import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import { PgDatabase } from "drizzle-orm/pg-core";
import { Pool } from "pg";
import * as schema from "@/schemas/database/db.schema";

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Optional: Configure connection pool settings
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Create a Drizzle instance with the schema
export const db = drizzle(pool, { schema });

export async function closeConnection() {
  await pool.end();
}
