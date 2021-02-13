import { Request, Response } from "express";

class ShortenerLink {
  async createShortenLink(request: Request, response: Response) {
    try {
      return response.status(200).json({ ok: true });
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
}

export default new ShortenerLink();
