import "dotenv/config";

import express from "express";
import routes from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`Server started in port ${process.env.SERVER_PORT || 3000}`);
});
