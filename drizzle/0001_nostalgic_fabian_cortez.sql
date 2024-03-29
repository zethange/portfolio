CREATE TABLE IF NOT EXISTS "bio" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar,
	"bio" text,
	"contacts" jsonb
);
