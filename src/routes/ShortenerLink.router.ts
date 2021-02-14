import { Router } from "express";
import ShortenerLink from "@controllers/ShortenerLink";

const router = Router();

/**
 * Shortener routes
 */
router.get("/:shortUrl", ShortenerLink.getShortenLink);
router.post("/encurtador", ShortenerLink.createShortenLink);

export default router;
