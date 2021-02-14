import { v4 as uuidv4 } from "uuid";
import ShortLink from "@models/ShortLink";
import IShortLinkRepository from "@interfaces/IShortLinkRepository";
import IShortLinkDTO from "@interfaces/dtos/IShortLinkDTO";

export default class ShortLinkRepository implements IShortLinkRepository {
  private shortLinks: ShortLink[] = [];

  public async create({
    shortUrl,
    codeLink,
    originUrl,
    expiresIn,
  }: IShortLinkDTO): Promise<ShortLink> {
    const shortLink = new ShortLink();
    const date = new Date();

    Object.assign(shortLink, {
      id: uuidv4(),
      shortUrl,
      codeLink,
      originUrl,
      expiresIn,
      created_at: date,
      updated_at: date,
    });

    this.shortLinks.push(shortLink);
    return shortLink;
  }

  public async findByOriginalLinkInValidity(
    originUrl: string
  ): Promise<ShortLink | undefined> {
    return this.shortLinks.find(
      (object) =>
        object.originUrl === originUrl && object.expiresIn > new Date()
    );
  }

  public async findByCodeLink(
    codeLink: string
  ): Promise<ShortLink | undefined> {
    return this.shortLinks.find(
      (object) => object.codeLink === codeLink && object.expiresIn > new Date()
    );
  }
}
