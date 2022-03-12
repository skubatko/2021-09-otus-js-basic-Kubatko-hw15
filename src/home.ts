import { OnArgs } from "./router";

export const onHomeEnter = (el: HTMLElement) => (args?: OnArgs) => {
  const calendarEl = el.querySelector(".calendar");
  if (calendarEl) {
    calendarEl.innerHTML = "";
  }

  const listEl = el.querySelector(".list");
  if (listEl) {
    listEl.innerHTML = "";
  }
};
