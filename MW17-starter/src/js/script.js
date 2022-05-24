import { ProgressBar } from "./ProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const progress = new ProgressBar();
  body.appendChild(progress.element);

  const progress1 = new ProgressBar(4, 2, 20);
  body.appendChild(progress1.element);
});
