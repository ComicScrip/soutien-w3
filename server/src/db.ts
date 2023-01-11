import { DataSource } from "typeorm";
import Product from "./entity/Product";

const db = new DataSource({
  type: "sqlite",
  database: "./wildershop.sqlite",
  synchronize: true,
  entities: [Product],
  logging: ["query", "error"],
});

export default db;
