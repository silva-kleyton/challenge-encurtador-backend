import { getCustomRepository } from "typeorm";

import ShortLink from "../models/ShortLink";
import ShortLinkRepository from "../repositories/ShortLink.repositores";
import AddDaysDate from "../utils/AddDaysDate.utils";

interface RequestShort {
  originUrl: string;
  codeLink: string;
  shortUrl: string;
}

export default class CreateShortLink {
  public async execute({
    originUrl,
    codeLink,
    shortUrl,
  }: RequestShort): Promise<ShortLink> {
    const shortLinkRepository = getCustomRepository(ShortLinkRepository);

    const verifyExistsOriginalLink = await shortLinkRepository.findByOriginalLinkInValidity(
      originUrl
    );

    if (verifyExistsOriginalLink) return verifyExistsOriginalLink;

    const objectShortLink = shortLinkRepository.create({
      shortUrl,
      codeLink,
      originUrl,
      expiresIn: AddDaysDate(3),
    });

    const resultShortLink = await shortLinkRepository.save(objectShortLink);

    return resultShortLink;
  }
}
