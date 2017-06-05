import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ArtworksList from '@/components/artworks/artworks-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/artworks',
      name: 'ArtworksList',
      component: ArtworksList
    }
  ]
})
