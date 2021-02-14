import ShortLink from "../models/ShortLink";
import { EntityRepository, Repository, Raw } from "typeorm";

@EntityRepository(ShortLink)
export default class ShortLinkRepository extends Repository<ShortLink> {
  public async findByOriginalLinkInValidity(
    originUrl: string
  ): Promise<ShortLink | null> {
    const shortObject = await this.findOne({
      where: { originUrl, expiresIn: Raw((alias) => `${alias} > NOW()`) },
    });

    return shortObject || null;
  }

  public async findByCodeLink(codeLink: string): Promise<ShortLink | null> {
    const shortObject = await this.findOne({
      where: { codeLink, expiresIn: Raw((alias) => `${alias} > NOW()`) },
    });

    return shortObject || null;
  }
}
