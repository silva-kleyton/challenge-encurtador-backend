import FakeShortLinkRepository from "@repositories/fakes/FakeShortLink.fake";
import AppError from "@erros/AppError";
import CreateShortLinkService from "./CreateShortLinkService";
import GetShortLinkService from "./GetShortLinkService";

describe("Service GetShortLinkService", () => {
  it("get original link by short url code", async () => {
    const fakeShortLinkRepo = new FakeShortLinkRepository();
    const createShortLink = new CreateShortLinkService(fakeShortLinkRepo);
    const getShortLink = new GetShortLinkService(fakeShortLinkRepo);

    const originUrl = "https://wisereducacao.com/";

    const objectShortLink = await createShortLink.execute({ originUrl });
    const { codeLink } = objectShortLink;

    const result = await getShortLink.execute({ codeLink });

    expect(result).toHaveProperty("id");
    expect(result.codeLink).toBe(codeLink);
  });

  it("get original link for nonexistent code", async () => {
    const fakeShortLinkRepo = new FakeShortLinkRepository();
    const createShortLink = new CreateShortLinkService(fakeShortLinkRepo);
    const getShortLink = new GetShortLinkService(fakeShortLinkRepo);

    const originUrl = "https://wisereducacao.com/";

    await createShortLink.execute({ originUrl });

    expect(getShortLink.execute({ codeLink: "0000" })).rejects.toBeInstanceOf(
      AppError
    );
  });
});
