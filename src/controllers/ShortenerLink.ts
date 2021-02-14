import { Request, Response } from "express";
import randomHashString from "../utils/GenerateRandomString.utils";
import { getRepository } from "typeorm";
import { ShortLink } from "../models/ShortLink";

class ShortenerLink {
  async createShortenLink(request: Request, response: Response) {
    try {
      const { url } = request.body;

      if (!url) return response.status(400).json({ error: "url required" });

      const hashString = randomHashString(5);

      const shortUrl = `${process.env.BASE_URL}/${hashString}`;

      const objectSave = await getRepository(ShortLink).create({
        originUrl: url,
        shortUrl: shortUrl,
        expiresIn: new Date(),
      });

      const result = await getRepository(ShortLink).save(objectSave);

      return response.status(200).json({ url: result.shortUrl });
    } catch (error) {
      console.log(error);
      return response.status(500).json(error.message);
    }
  }
}

export default new ShortenerLink();
