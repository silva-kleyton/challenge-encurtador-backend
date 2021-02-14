import ShortLink from "@models/ShortLink";
import IShortLinkDTO from "@interfaces/dtos/IShortLinkDTO";

export default interface IShortLinkRepository {
  create(data: IShortLinkDTO): Promise<ShortLink>;
  findByOriginalLinkInValidity(
    originUrl: string
  ): Promise<ShortLink | undefined>;
  findByCodeLink(codeLink: string): Promise<ShortLink | undefined>;
}
