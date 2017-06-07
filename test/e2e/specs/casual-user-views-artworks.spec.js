var assert = require('assert');
var chai = require('chai');
var expect = chai.expect

var ArtworksPage = require('../page-objects/artworks-page');

describe('The Artworks page', () => {
  it('should list all the artworks', () => {
    ArtworksPage.open();
    expect(ArtworksPage.artworksListItems.length).to.equal(4);
    expect(ArtworksPage.artworksListItems[0].getText()).to.have.string('Taddei Tondo');
    expect(ArtworksPage.artworksListItems[1].getText()).to.have.string('Madonna of the Steps');
    expect(ArtworksPage.artworksListItems[2].getText()).to.have.string('Annunciation');
    expect(ArtworksPage.artworksListItems[3].getText()).to.have.string('Virgin of the Rocks');

  });
});
