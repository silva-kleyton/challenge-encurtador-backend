import { Router } from "express";
import ShortenerLinkRouter from "./ShortenerLink.router";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).send("<h1>Teste</h1>");
});

routes.use("", ShortenerLinkRouter);

export default routes;
