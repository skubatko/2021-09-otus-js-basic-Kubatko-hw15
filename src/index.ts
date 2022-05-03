import "./styles/style.css";
import { ToDoApp } from "./components/ToDoApp";

const root = document.querySelector("#app") as HTMLElement;

export const el = document.createElement("div");
root.appendChild(el);
new ToDoApp(el); // eslint-disable-line no-new
