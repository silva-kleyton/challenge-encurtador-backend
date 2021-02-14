import { Request, Response } from "express";
import randomHashString from "../utils/GenerateRandomString.utils";
import AddDaysDate from "../utils/AddDaysDate.utils";
import { getCustomRepository } from "typeorm";
import ShortLinkRepository from "../repositories/ShortLink.repositores";

class ShortenerLink {
  async createShortenLink(request: Request, response: Response) {
    try {
      const { url } = request.body;

      if (!url) return response.status(400).json({ error: "url is required" });

      const shortLinkRepository = getCustomRepository(ShortLinkRepository);

      const codeLink = randomHashString();

      const shortUrl = `${process.env.BASE_URL}:${process.env.SERVER_PORT}/${codeLink}`;

      const objectShortLink = shortLinkRepository.create({
        shortUrl,
        codeLink,
        originUrl: url,
        expiresIn: AddDaysDate(3),
      });

      await shortLinkRepository.save(objectShortLink);

      return response.status(200).json({ url: objectShortLink.shortUrl });
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getShortenLink(request: Request, response: Response) {
    try {
      const { shortUrl } = request.params;

      const shortLinkRepository = getCustomRepository(ShortLinkRepository);

      const objectLink = await shortLinkRepository.findByCodeLink(shortUrl);

      if (!objectLink)
        return response.status(404).json({ message: "Link not found" });

      return response.redirect(objectLink.originUrl);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new ShortenerLink();
