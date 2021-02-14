import FakeShortLinkRepository from "@repositories/fakes/FakeShortLink.fake";
import CreateShortLinkService from "./CreateShortLinkService";
import GenerateRandomString from "@utils/GenerateRandomString.utils";

describe("function CreateShortLinkService", () => {
  it("create new short url", async () => {
    const fakeShortLinkRepo = new FakeShortLinkRepository();
    const createShortLink = new CreateShortLinkService(fakeShortLinkRepo);

    const originUrl = "https://wisereducacao.com/";
    const codeLink = GenerateRandomString();
    const shortUrl = `${process.env.BASE_URL}:${process.env.SERVER_PORT}/${codeLink}`;

    const shortLink = await createShortLink.execute({
      originUrl,
      codeLink,
      shortUrl,
    });

    expect(shortLink).toHaveProperty("id");
    expect(shortLink.shortUrl).toBe(shortUrl);
    expect(shortLink.originUrl).toBe(originUrl);
  });

  // it("not create new short url if it is not expired", () => {
  //   expect(2 + 1).toBe(3);
  // });
});
