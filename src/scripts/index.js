import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";
import App from "./views/app";
import "./components/app-header";
import "./components/app-footer";

const app = new App({
  button: document.querySelector("#menu__button"),
  drawer: document.querySelector("#app__menu"),
  content: document.querySelector("#primaryContent")
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
