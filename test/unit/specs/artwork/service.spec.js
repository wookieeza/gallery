import Vue from 'vue'
import ArtworksService from '@/components/artworks/service'

describe('Artworks service', () => {
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

  it('should get artworks from the gallery backend api', function (done) {
    // ARRANGE
    const httpStub = sinon.stub(Vue.http, 'get')
    httpStub.withArgs(`${Vue.config.apiBase}/artworks`)
      .returns(Promise.resolve(expectedArtworks))

    // ACT
    ArtworksService.getArtworks().then((result) => {
      // ASSERT
      expect(result).to.deep.equal(expectedArtworks)
      expect(Vue.http.get).to.have.been.calledWith(`${Vue.config.apiBase}/artworks`)
      expect(httpStub.getCall(0).args[0]).to.equal(`${Vue.config.apiBase}/artworks`)
      done()
    })
  })
})
