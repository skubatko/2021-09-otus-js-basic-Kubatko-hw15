interface Events {
  [key: string]: (ev: Event) => void;
}

export abstract class Component {
  protected el: HTMLElement;

  protected events: Events = {};

  constructor(el: HTMLElement) {
    this.el = el;
    this.onMount();
  }

  protected subscribeToEvents() {
    Object.entries(this.events).forEach(([key, handler]) => {
      const [action, elClass] = key.split("@");
      const el = this.el.querySelector(`.${elClass}`);
      if (el !== null) {
        el.addEventListener(action, handler.bind(this));
      }
    });
  }

  protected onMount(): void {
    this.el.innerHTML = this.render();
    this.subscribeToEvents();
  }

  protected abstract render(): string;
}
