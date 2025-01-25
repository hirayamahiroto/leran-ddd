import { migrate } from "drizzle-orm/postgres-js/migrator";
import drizzleConfig from "./../../../drizzle.config";
import database from "./../index";

export const migrateDB = async () => {
  await migrate(database, { migrationsFolder: drizzleConfig.out });
};

migrateDB();
