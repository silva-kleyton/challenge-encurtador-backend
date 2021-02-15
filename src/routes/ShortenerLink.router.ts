import { Request, Response, Router } from "express";
import ShortLinkRepository from "@repositories/ShortLink.repositores";
import AppError from "@erros/AppError";

import CreateShortLink from "@services/CreateShortLinkService";
import GetShortLink from "@services/GetShortLinkService";

const router = Router();

/**
 * Shortener routes
 */
router.post("/encurtador", async (request: Request, response: Response) => {
  const { url } = request.body;

  if (!url) throw new AppError("Url id required", 404);

  const shortLinkRepository = new ShortLinkRepository();
  const createShortLink = new CreateShortLink(shortLinkRepository);

  const result = await createShortLink.execute({ originUrl: url });

  return response.json({ url: result.shortUrl });
});

router.get("/:codeLink", async (request: Request, response: Response) => {
  const { codeLink } = request.params;

  if (!codeLink || codeLink.length <= 0) throw new AppError("Url invalid", 400);

  const shortLinkRepository = new ShortLinkRepository();
  const getShortLink = new GetShortLink(shortLinkRepository);

  const result = await getShortLink.execute({ codeLink });

  return response.redirect(result.originUrl);
});

export default router;
