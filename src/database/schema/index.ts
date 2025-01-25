import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

// TODO:下記サンプルのため修正する
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),

  author: text("author").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),

  updated_at: timestamp("updated_at").notNull().defaultNow(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export type SelectTodo = InferSelectModel<typeof todos>;
export type InsertTodo = InferInsertModel<typeof todos>;
