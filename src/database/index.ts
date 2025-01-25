import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = "postgres://postgres:postgres@localhost:54444/postgres";
const client = postgres(connectionString);
const database = drizzle(client, { schema });

export default database;
