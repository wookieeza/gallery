var path = require('path');
const BasePage = require('./base-page');

const ArtworksPage = Object.create(BasePage, {
  open: {
    value() {
      return BasePage.open.call(this, '/artworks')
    },
  },
  artworksListItems: {
    get() {
      $('.artworks-list__list-item').waitForVisible();
      return $$('.artworks-list__list-item')
    },
  },
});

module.exports = ArtworksPage;
