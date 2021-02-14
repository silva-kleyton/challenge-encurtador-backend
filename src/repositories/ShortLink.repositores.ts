import { Repository, getRepository, Raw } from "typeorm";
import ShortLink from "@models/ShortLink";

import IShortLinkRepository from "@interfaces/IShortLinkRepository";
import IShortLinkDTO from "@interfaces/dtos/IShortLinkDTO";
export default class ShortLinkRepository implements IShortLinkRepository {
  private ormRepository: Repository<ShortLink>;

  constructor() {
    this.ormRepository = getRepository(ShortLink);
  }

  public async create({
    shortUrl,
    codeLink,
    originUrl,
    expiresIn,
  }: IShortLinkDTO): Promise<ShortLink> {
    const shortLink = this.ormRepository.create({
      shortUrl,
      codeLink,
      originUrl,
      expiresIn,
    });

    await this.ormRepository.save(shortLink);

    return shortLink;
  }

  public async findByOriginalLinkInValidity(
    originUrl: string
  ): Promise<ShortLink | undefined> {
    const shortObject = await this.ormRepository.findOne({
      where: { originUrl, expiresIn: Raw((alias) => `${alias} > NOW()`) },
    });

    return shortObject;
  }

  public async findByCodeLink(
    codeLink: string
  ): Promise<ShortLink | undefined> {
    const shortObject = await this.ormRepository.findOne({
      where: { codeLink, expiresIn: Raw((alias) => `${alias} > NOW()`) },
    });

    return shortObject;
  }
}
