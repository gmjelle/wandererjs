export default function pageLoaded() {
  return new Promise((res, rej) => {
    if (document.readyState === "complete") {
      return res(null);
    }

    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        res(null);
      }
    });
  });
}
