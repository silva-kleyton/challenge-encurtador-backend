import { Router } from "express";
import ShortenerLink from "../controllers/ShortenerLink";

const router = Router();

/**
 * Shortener controller
 */
router.post("/", ShortenerLink.createShortenLink);

export default router;
