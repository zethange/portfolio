import type { Config } from "drizzle-kit";

export default {
  schema: "./src/shared/lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: process.env.POSTGRES_HOST as string,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE as string,
  },
} satisfies Config;
