import ShortLink from "@models/ShortLink";
import IShortLinkRepository from "@interfaces/IShortLinkRepository";
import AppError from "@erros/AppError";

interface IRequestShort {
  codeLink: string;
}

export default class GetShortLinkService {
  constructor(private shortLinkRepository: IShortLinkRepository) {}

  public async execute({ codeLink }: IRequestShort): Promise<ShortLink> {
    const verifyExistsOriginalLink = await this.shortLinkRepository.findByCodeLink(
      codeLink
    );

    if (!verifyExistsOriginalLink) throw new AppError("Url not found", 404);

    return verifyExistsOriginalLink;
  }
}
