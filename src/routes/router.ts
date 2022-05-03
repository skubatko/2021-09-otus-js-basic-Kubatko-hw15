/* eslint-disable no-restricted-globals */

export type RouterConfig = {
  hashApiEnabled: boolean;
};

export type OnArgs = {
  currentPath: string;
  previousPath: string;
  state: typeof history.state;
};

export type onEnterCb = (args: OnArgs) => void;

type Match = RegExp | string | ((path: string) => boolean);

export type RouterListener = {
  id: number;
  match: Match;
  onBeforeEnter?: (args?: OnArgs) => void | Promise<void>;
  onEnter?: (args?: OnArgs) => void | Promise<void>;
  onLeave?: (args?: OnArgs) => void | Promise<void>;
};

export class Router {
  private listeners: RouterListener[] = [];

  private currentPath = location.pathname;

  private previousPath: string = this.currentPath;

  constructor(config?: RouterConfig) {
    this.assignApiHandler(config);
  }

  private assignApiHandler(config?: RouterConfig) {
    document.body.addEventListener("click", async (event) => {
      const el = event.target as HTMLElement;
      if (!el.matches("a")) {
        return;
      }

      event.preventDefault();

      this.previousPath = this.currentPath;
      const url = el.getAttribute("href") || "/";
      if (config && config.hashApiEnabled) {
        location.hash = url;
      } else {
        history.pushState({ url }, url, url);
      }
      this.currentPath = url;
      await this.handleAllListeners();
    });
  }

  private async handleAllListeners() {
    await Promise.all(
      this.listeners.map((listener) => this.handleListener(listener))
    );
  }

  private async handleListener(listener: RouterListener) {
    const args: OnArgs = {
      currentPath: this.currentPath,
      previousPath: this.previousPath,
      state: history.state,
    };

    if (Router.isMatch(listener.match, this.currentPath)) {
      await listener.onBeforeEnter?.(args);
      await listener.onEnter?.(args);
    }
    if (Router.isMatch(listener.match, this.previousPath)) {
      await listener.onLeave?.(args);
    }
  }

  private static isMatch(match: Match, path: string): boolean {
    return (
      (match instanceof RegExp && match.test(path)) ||
      (typeof match === "function" && match(path)) ||
      (typeof match === "string" && match === path)
    );
  }

  on(args: Omit<RouterListener, "id">): () => void {
    const id = this.generateId();

    const listener: RouterListener = { ...args, id };
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter((it) => it.id !== id);
    };
  }

  private generateId() {
    const getRandomNumber = () =>
      Math.floor(Math.random() * this.listeners.length * 1000);
    const doesExist = (id: number) =>
      this.listeners.find((listener) => listener.id === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  }
}
