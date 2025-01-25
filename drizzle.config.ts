import type { Config } from "drizzle-kit";

const drizzleConfig = {
  schema: "./src/database/schemas/*.ts",
  out: "./src/database/migrations",
  dialect: "postgresql",
  breakpoints: true,
  driver: undefined,
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres",
  },
} satisfies Config;

export default drizzleConfig;
