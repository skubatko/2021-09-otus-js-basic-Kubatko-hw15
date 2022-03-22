import "./styles/style.css";
import { Router } from "./router";
import { onHomeEnter } from "./home";
import { onCalendarEnter } from "./calendar";
import { onListEnter } from "./list";
import { onAboutEnter } from "./about";

const root = document.querySelector("#app") as HTMLElement;

const el = document.createElement("div");
root.appendChild(el);

el.innerHTML = `
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
