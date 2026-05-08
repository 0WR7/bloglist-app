import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

//change id to be not null later
export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    url: text("url").notNull(),
    likes: integer().default(0).notNull(),
})
