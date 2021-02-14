import { Request, Response } from "express";
import randomHashString from "../utils/GenerateRandomString.utils";
import { getCustomRepository } from "typeorm";
import ShortLinkRepository from "../repositories/ShortLink.repositores";
import CreateShortLink from "../services/CreateShortLink";

class ShortenerLink {
  async createShortenLink(request: Request, response: Response) {
    try {
      const { url } = request.body;

      if (!url) return response.status(400).json({ error: "url is required" });

      const codeLink = randomHashString();
      const shortUrl = `${process.env.BASE_URL}:${process.env.SERVER_PORT}/${codeLink}`;

      const createShortLink = new CreateShortLink();

      const result = await createShortLink.execute({
        originUrl: url,
        codeLink,
        shortUrl,
      });

      return response.status(200).json({ url: result.shortUrl });
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getShortenLink(request: Request, response: Response) {
    try {
      const { shortUrl } = request.params;

      const shortLinkRepository = getCustomRepository(ShortLinkRepository);

      const resultShortLink = await shortLinkRepository.findByCodeLink(
        shortUrl
      );

      if (!resultShortLink)
        return response.status(404).json({ message: "Url not found" });

      return response.redirect(resultShortLink.originUrl);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new ShortenerLink();
