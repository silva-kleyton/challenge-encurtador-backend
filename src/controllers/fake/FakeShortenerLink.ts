import { Request, Response } from "express";
import ShortLinkRepository from "@repositories/fakes/FakeShortLink.fake";
import randomHashString from "@utils/GenerateRandomString.utils";
import CreateShortLinkService from "@services/CreateShortLinkService";
class FakeShortenerLink {
  async createShortenLink(request: Request, response: Response) {
    try {
      const { url } = request.body;

      if (!url) return response.status(400).json({ error: "url is required" });

      const codeLink = randomHashString();
      const shortUrl = `${process.env.BASE_URL}:${process.env.SERVER_PORT}/${codeLink}`;

      const shortLinkRepository = new ShortLinkRepository();

      const createShortLink = new CreateShortLinkService(shortLinkRepository);

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

      const shortLinkRepository = new ShortLinkRepository();

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

export default new FakeShortenerLink();
