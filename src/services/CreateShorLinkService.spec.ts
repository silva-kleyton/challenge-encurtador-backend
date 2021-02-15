import FakeShortLinkRepository from "@repositories/fakes/FakeShortLink.fake";
import CreateShortLinkService from "./CreateShortLinkService";

describe("Service CreateShortLinkService", () => {
  it("create new short url", async () => {
    const fakeShortLinkRepo = new FakeShortLinkRepository();
    const createShortLink = new CreateShortLinkService(fakeShortLinkRepo);

    const originUrl = "https://wisereducacao.com/";

    const shortLink = await createShortLink.execute({ originUrl });

    expect(shortLink).toHaveProperty("id");
    expect(shortLink.originUrl).toBe(originUrl);
  });

  it("create new short url, origin url exists", async () => {
    const fakeShortLinkRepo = new FakeShortLinkRepository();
    const createShortLink = new CreateShortLinkService(fakeShortLinkRepo);

    const originUrl = "https://wisereducacao.com/";

    await createShortLink.execute({ originUrl });
    const shortLink = await createShortLink.execute({ originUrl });

    expect(shortLink).toHaveProperty("id");
    expect(shortLink.originUrl).toBe(originUrl);
  });
});
