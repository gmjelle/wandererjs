module.exports = {
  generateImageName(title) {
    return title.replace(/\s/g, "-") + ".png";
  },
  sleep(ms) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  },
};
