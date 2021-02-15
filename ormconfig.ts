import "dotenv/config";

export default {
  type: "postgres",
  host:
    process.env.RUN_DOCKER === "true" ? "host.docker.internal" : "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
