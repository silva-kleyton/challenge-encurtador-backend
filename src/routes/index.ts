import { Router, Response } from "express";
import ShortenerLink from "./ShortenerLink.router";

const routes = Router();

routes.get("/", (response: Response) => {
  return response.json({ ok: true });
});
routes.use("", ShortenerLink);

export default routes;
