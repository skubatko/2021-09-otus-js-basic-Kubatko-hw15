import { OnArgs } from "./router";

export const onListEnter = (el: HTMLElement) => (args?: OnArgs) => {
  const calendarEl = el.querySelector(".calendar");
  if (calendarEl) {
    calendarEl.innerHTML = "";
  }

  const listEl = el.querySelector(".list");
  if (listEl) {
    listEl.innerHTML = "List";
  }

  const aboutEl = el.querySelector(".about");
  if (aboutEl) {
    aboutEl.innerHTML = "";
  }
};
