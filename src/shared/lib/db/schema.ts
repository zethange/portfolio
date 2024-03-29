import {
  boolean,
  index,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

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
  id: serial("id").primaryKey(),
  username: varchar("username"),
  bio: text("bio"),
  contacts: jsonb("contacts").$type<{
    email: string;
    vk: string;
    github: string;
    telegram: string;
  }>(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull().unique(),
  slug: varchar("slug", { length: 256 }).notNull().unique(),
  description: text('description'),
  content: text("content"),
  createdAt: timestamp('created_at').defaultNow(),
  userId: serial('user_id').references(() => users.id),
});
