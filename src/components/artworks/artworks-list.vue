<template>
  <div class="artworks-list">
    <h1>Artworks</h1>
    <li class="artworks-list__list-item" v-for="artwork in artworks">
      {{artwork.name}}
    </li>

  </div>
</template>
<script>
  /* eslint-disable */
  import path from 'path'
  import ArtworksService from './service'
  export default {
    name: 'artworksList',
    data () {
      return {
        artworks: []
      }
    },
    methods: {
      getArtworks(){
       ArtworksService.getArtworks().then((response) =>{
           this.artworks = response.body
       });
      }
    },

    created(){
      this.getArtworks();
    }
  }
</script>
