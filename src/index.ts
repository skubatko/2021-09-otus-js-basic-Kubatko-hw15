import "./styles/style.css";
import { Router } from "./router";
import { onHomeEnter } from "./home";

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
`;

const router = new Router();

router.on({
  match: (path: string) => path === "/",
  onEnter: onHomeEnter(el),
});
