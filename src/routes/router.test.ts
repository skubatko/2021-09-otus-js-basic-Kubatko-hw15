import { Router } from "./router";

const delay = (ms = 10) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

describe("router", () => {
  const el = document.createElement("div");
  document.body.appendChild(el);

  el.innerHTML = `
    <header>
      <nav>
        <a id="home" href="/">Home</a>
        <a id="contacts" href="/contacts">Contacts</a>
        <a id="about" href="/about">About</a>
        <a id="about-us" href="/about/us">About / Us</a>
      </nav>
    </header>
`;
  const homeEl = el.querySelector("#home");
  const contactsEl = el.querySelector("#contacts");

  const onLeave = jest.fn();
  const onBeforeEnter = jest.fn();
  const onEnter = jest.fn();

  beforeAll(() => {
    onLeave.mockClear();
    onBeforeEnter.mockClear();
    onEnter.mockClear();
  });

  it("should create Router with expected unsubscribe function", () => {
    const router = new Router();
    const unsubscribe = router.on({ match: "/" });
    expect(unsubscribe).toBeInstanceOf(Function);
  });

  it("should unsubscribe expected hook", async () => {
    const router = new Router();
    const unsubscribe = router.on({ match: "/", onEnter });

    homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
    await delay();
    expect(onEnter).toHaveBeenCalledTimes(1);

    unsubscribe();
    homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
    await delay();
    expect(onEnter).toHaveBeenCalledTimes(1);
  });

  it("should invoke expected hooks on home click with hashApi", async () => {
    const router = new Router({ hashApiEnabled: true });
    router.on({ match: "/", onBeforeEnter, onEnter, onLeave });

    homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
    await delay();

    expect(onBeforeEnter).toHaveBeenCalled();
    expect(onEnter).toHaveBeenCalled();
    expect(onLeave).toHaveBeenCalled();
  });

  it("should invoke expected hooks on contacts click", async () => {
    const router = new Router();
    router.on({ match: "/", onBeforeEnter, onEnter, onLeave });
    router.on({
      match: (path) => path === "/contacts",
      onBeforeEnter,
      onEnter,
      onLeave,
    });

    homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
    contactsEl?.dispatchEvent(new Event("click", { bubbles: true }));
    await delay();

    expect(onBeforeEnter).toHaveBeenCalledTimes(3);
    expect(onEnter).toHaveBeenCalledTimes(3);
    expect(onLeave).toHaveBeenCalledTimes(4);

    expect(onBeforeEnter).lastCalledWith({
      currentPath: "/contacts",
      previousPath: "/",
      state: { url: "/contacts" },
    });
    expect(onEnter).lastCalledWith({
      currentPath: "/contacts",
      previousPath: "/",
      state: { url: "/contacts" },
    });
    expect(onLeave).lastCalledWith({
      currentPath: "/",
      previousPath: "/",
      state: { url: "/" },
    });
  });
});
