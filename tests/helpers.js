module.exports = {
  generateImageName(title) {
    return title.replace(/\s/g, "-");
  },
};
