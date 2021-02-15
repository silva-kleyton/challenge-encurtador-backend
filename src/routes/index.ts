import { Router } from "express";
import ShortenerLinkRouter from "./ShortenerLink.router";

const routes = Router();

routes.use("", ShortenerLinkRouter);

export default routes;
