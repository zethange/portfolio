import { boolean, index, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").unique(),
  password: varchar("password"),
  isAdmin: boolean("is_admin").default(false),
  avatar: varchar("avatar"),
}, (users) => ({
  usernameIdx: index('username_idx').on(users.username),
}));
