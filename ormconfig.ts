import "dotenv/config";

//
export default {
  type: "postgres",
  host: "ec2-52-23-190-126.compute-1.amazonaws.com",
  port: "5432",
  username: "mxmsnxbjuydcaa",
  password: "8dc73db070581a3de6e4ba96d73e8b539e3a96e77c7825203f70dd28012c58f6",
  database: "dd6vtp2mkoolgf",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
