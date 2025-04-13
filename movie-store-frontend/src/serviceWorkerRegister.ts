export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("../service-worker.ts")
        .then((reg) => console.log(reg))
        .catch((err) => console.error(err));
    });
  }
}
