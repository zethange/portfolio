import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

const db = drizzle(sql, { schema });
await migrate(db, {
    migrationsFolder: './drizzle'
})

export * from './schema'
export {db}