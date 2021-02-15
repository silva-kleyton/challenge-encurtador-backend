import ShortLink from "@models/ShortLink";
import AddDaysDate from "@utils/AddDaysDate.utils";
import randomHashString from "@utils/GenerateRandomString.utils";

import IShortLinkRepository from "@interfaces/IShortLinkRepository";

interface IRequestShort {
  originUrl: string;
}

export default class CreateShortLink {
  constructor(private shortLinkRepository: IShortLinkRepository) {}

  public async execute({ originUrl }: IRequestShort): Promise<ShortLink> {
    const verifyExistsOriginalLink = await this.shortLinkRepository.findByOriginalLinkInValidity(
      originUrl
    );

    if (verifyExistsOriginalLink) return verifyExistsOriginalLink;

    const codeLink = randomHashString();
    const shortUrl = `${process.env.BASE_URL}/${codeLink}`;

    const objectShortLink = await this.shortLinkRepository.create({
      shortUrl,
      codeLink,
      originUrl,
      expiresIn: AddDaysDate(3),
    });

    return objectShortLink;
  }
}
