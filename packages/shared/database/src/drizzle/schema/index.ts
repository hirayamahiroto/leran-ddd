import {
  pgTable,
  serial,
  timestamp,
  integer,
  varchar,
  decimal,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 顧客テーブル
export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  visitTime: timestamp("visit_time").notNull(),
  partySize: integer("party_size").notNull(),
});

// メニューテーブル
export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

// 注文テーブル
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").references(() => customers.id),
  menuItemId: integer("menu_item_id").references(() => menuItems.id),
  orderTime: timestamp("order_time").defaultNow(),
});

// お会計テーブル
export const bills = pgTable("bills", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").references(() => customers.id),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  paymentStatus: boolean("payment_status").default(false),
  billingTime: timestamp("billing_time").defaultNow(),
});

// リレーションの定義
export const customersRelations = relations(customers, ({ many }) => ({
  orders: many(orders),
  bills: many(bills),
}));

export const menuItemsRelations = relations(menuItems, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  customer: one(customers, {
    fields: [orders.customerId],
    references: [customers.id],
  }),
  menuItem: one(menuItems, {
    fields: [orders.menuItemId],
    references: [menuItems.id],
  }),
}));

export const billsRelations = relations(bills, ({ one }) => ({
  customer: one(customers, {
    fields: [bills.customerId],
    references: [customers.id],
  }),
}));
