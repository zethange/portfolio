import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

const db = drizzle(sql, { schema });
await migrate(db, {
  migrationsFolder: "./drizzle",
});

await db.insert(schema.bio).values({
  username: "zethange",
  bio: 'Fullstack JavaScript/TypeScript developer',
  contacts: {
    telegram: "https://zethange.t.me",
    email: "mailto:zethange@yandex.ru",
    github: "https://github.com/zethange",
    vk: "https://vk.com/pomidorooo"
  },
});

export * from "./schema";
export { db };
