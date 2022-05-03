import { el } from "../index";
import { onAboutEnter } from "../routes/about";
import { onCalendarEnter } from "../routes/calendar";
import { onHomeEnter } from "../routes/home";
import { onListEnter } from "../routes/list";
import { Router } from "../routes/router";
import { Component } from "./Component";

export class ToDoApp extends Component {
  protected onMount(): void {
    super.onMount();

    const router = new Router();

    router.on({
      match: (path: string) => path === "/",
      onEnter: onHomeEnter(el),
    });

    router.on({
      match: (path: string) => path === "/calendar",
      onEnter: onCalendarEnter(el),
    });

    router.on({
      match: (path: string) => path === "/list",
      onEnter: onListEnter(el),
    });

    router.on({
      match: (path: string) => path === "/about",
      onEnter: onAboutEnter(el),
    });
  }

  protected render(): string {
    return `
      <header>
        <h1>
          Календарь
        </h1>
        <nav>
          <a href="/">#</a>
          <a href="/calendar">Календарь</a>
          <a href="/list">Список</a>
          <a href="/about">О проекте</a>
        </nav>
      </header>
      <div class="calendar"></div>
      <div class="list"></div>
      <div class="about"></div>
    `;
  }
}
