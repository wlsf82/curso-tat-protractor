const imageUrl = "http://localhost:4001/img/logo.svg";
const imageUrlFieldSelector = "#imageUrl-input";

module.exports = function (chromy) {
  chromy
    .wait(imageUrlFieldSelector)
    .type(imageUrlFieldSelector, imageUrl)
    .wait(`img[src='${imageUrl}']`);
};
