import { sql as vercelSql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "drizzle-orm";

const db = drizzle(vercelSql, { schema });
await migrate(db, {
  migrationsFolder: "drizzle",
});

const count = (await db.execute(sql`SELECT count(*) as count FROM bio;`))
  .rows[0].count as string;

if (+count == 0) {
  await db.insert(schema.bio).values({
    username: "zethange",
    bio: "Fullstack JavaScript/TypeScript developer",
    contacts: {
      telegram: "https://zethange.t.me",
      email: "mailto:zethange@yandex.ru",
      github: "https://github.com/zethange",
      vk: "https://vk.com/pomidorooo",
    },
  });
}

export * from "./schema";
export { db };
