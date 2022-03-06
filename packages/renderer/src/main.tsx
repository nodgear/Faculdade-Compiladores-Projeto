import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./samples/electron-store";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
  window.removeLoading
);

console.log("fs", window.fs);
console.log("ipcRenderer", window.ipcRenderer);

window.ipcRenderer.on("main-process-message", (_event, ...args) => {
  console.log("[Receive Main-process message]:", ...args);
});
