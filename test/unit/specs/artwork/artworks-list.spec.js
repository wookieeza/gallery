import Vue from 'vue'
import artworksList from '!!vue-loader?inject!@/components/artworks/artworks-list'

describe('The artworks list vue', () => {
  it('should load the artworks', function () {
    const artworksListVue = artworksList()
    sinon.stub(artworksListVue.methods, 'getArtworks')
    /* eslint-disable no-new */
    new Vue(artworksListVue)
    expect(artworksListVue.methods.getArtworks.callCount).to.equal(1)
  })
})
