import { Router } from "express";
import ShortenerLink from "../controllers/ShortenerLink";

const router = Router();

/**
 * Shortener controller
 */
router.post("/encurtador", ShortenerLink.createShortenLink);

export default router;
