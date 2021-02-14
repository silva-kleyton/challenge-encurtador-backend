import ShortLink from "@models/ShortLink";
import AddDaysDate from "@utils/AddDaysDate.utils";

import IShortLinkRepository from "@interfaces/IShortLinkRepository";

interface IRequestShort {
  originUrl: string;
  codeLink: string;
  shortUrl: string;
}

export default class CreateShortLink {
  constructor(private shortLinkRepository: IShortLinkRepository) {}

  public async execute({
    originUrl,
    codeLink,
    shortUrl,
  }: IRequestShort): Promise<ShortLink> {
    const verifyExistsOriginalLink = await this.shortLinkRepository.findByOriginalLinkInValidity(
      originUrl
    );

    if (verifyExistsOriginalLink) return verifyExistsOriginalLink;

    const objectShortLink = await this.shortLinkRepository.create({
      shortUrl,
      codeLink,
      originUrl,
      expiresIn: AddDaysDate(3),
    });

    return objectShortLink;
  }
}
