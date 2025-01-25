import type { Config } from "drizzle-kit";

const drizzleConfig = {
  schema: "./src/database/schema/*.ts",
  out: "./src/database/migrations",
  dialect: "postgresql",
  breakpoints: true,
  dbCredentials: {
    host: "localhost",
    port: 54444,
    user: "postgres",
    password: "postgres",
    database: "postgres",
  },
} satisfies Config;

export default drizzleConfig;
