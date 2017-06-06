import Vue from 'vue'
import artworksList from '!!vue-loader?inject!@/components/artworks/artworks-list'

describe('The artworks list vue', () => {
  const expectedArtworks = [
    {
      'id': 2,
      'artistId': 1,
      'name': 'Taddei Tondo',
      'year': '1502'
    },
    {
      'id': 1,
      'artistId': 1,
      'name': 'Madonna of the Steps',
      'year': '1492'
    }
  ]

  it('should load the artworks when created', function () {
    const artworksListVue = artworksList()
    sinon.stub(artworksListVue.methods, 'getArtworks')
    /* eslint-disable no-new */
    new Vue(artworksListVue)
    expect(artworksListVue.methods.getArtworks.callCount).to.equal(1)
  })

  it('should be initialised with the list of artworks', function (done) {
    const mockService = {
      getArtworks: () => {
        return Promise.resolve({body: expectedArtworks})
      }
    }
    const artworksListWithMockService = artworksList({
      './service': mockService
    })
    const Constructor = Vue.extend(artworksListWithMockService)
    const vm = new Constructor()
    vm.getArtworks()
    requestAnimationFrame(() => {
      expect(vm.artworks).to.deep.equal(expectedArtworks)
      done()
    })
  })
})
