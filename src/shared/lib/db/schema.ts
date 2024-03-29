import { boolean, index, jsonb, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    username: varchar("username").unique(),
    password: varchar("password"),
    isAdmin: boolean("is_admin").default(false),
    avatar: varchar("avatar"),
  },
  (users) => ({
    usernameIdx: index("username_idx").on(users.username),
  })
);

export const bio = pgTable("bio", {
  id: serial('id').primaryKey(),
  username: varchar('username'),
  bio: text('bio'),
  contacts: jsonb('contacts').$type<{
    email: string,
    vk: string,
    github: string,
    telegram: string,
  }>(),
});
