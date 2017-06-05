<template>
  <div class="artworks-list">
    <h1>Artworks</h1>
    <li v-for="artwork in artworks">
      {{artwork.name}}
    </li>

  </div>
</template>
<script>
  /* eslint-disable */
  import path from 'path'
  export default {
    name: 'artworksList',
    data () {
      return {
        artworks: []
      }
    },
    methods: {
        getArtworks(){
            return null;
        }
    },

    created(){
      this.getArtworks();
    }
  }
</script>
