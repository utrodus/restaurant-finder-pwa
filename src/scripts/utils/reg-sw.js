import { Workbox } from "workbox-window";

const RegSw = async () => {
  if ("serviceWorker" in navigator) {
    const workbox = new Workbox("../sw.js");
    workbox.register();
  }
  console.log("Service worker not supported in this browser");
};

export default RegSw;
