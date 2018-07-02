<template>
  <div class="container">
    <comic-banner></comic-banner>
    <chapters></chapters>
  </div>
</template>

<script>
import ComicBanner from '../components/home/ComicBanner';
import Chapters from '../components/home/Chapters';

export default {
  name: 'Home',
  components: {
    ComicBanner,
    Chapters
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
