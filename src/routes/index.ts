import { Router } from "express";
import ShortenerLink from "./ShortenerLink.router";

const routes = Router();

routes.get("/", (request, response) => {
  return response.status(200).send("<h1>Teste</h1>");
});

routes.use("", ShortenerLink);

export default routes;
