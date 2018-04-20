module.exports = function (chromy) {
  chromy
    .wait(".item-view")
    .click(".item-view")
    .wait(".update-button")
    .click(".update-button")
    .wait("form");
};
