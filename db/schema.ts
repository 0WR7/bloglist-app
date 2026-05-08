import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    url: text("url").notNull(),
    likes: integer().default(0).notNull(),
    userId: integer("user_id").notNull().references(() => users.id)
});

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    name: text("name").notNull()
})
