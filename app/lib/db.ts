import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER ?? "postgres"}:${process.env.DB_PASSWORD ?? "password"}@${process.env.DB_HOST ?? "localhost"}:${process.env.DB_PORT ?? "5432"}/${process.env.DB_NAME ?? "immo_db"}`;

const pool = new Pool({
  connectionString,
});

pool.on("error", (error) => {
  console.error("PostgreSQL idle client error:", error);
});

export { pool };
