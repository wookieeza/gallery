import Vue from 'vue'

const ArtworksService = {

  getArtworks () {
    return Vue.http.get(`${Vue.config.apiBase}/artworks`)
  }

}

export default ArtworksService
