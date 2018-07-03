<template>
  <div class="container">
    <comic-banner></comic-banner>
    <chapters></chapters>
  </div>
</template>

<script>
import ComicBanner from '../components/home/ComicBanner';
import Chapters from '../components/home/Chapters';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Home',
  components: {
    ComicBanner,
    Chapters
  },
  computed: {
    ...mapState('night',['isNight'])
  },
  methods: {
    ...mapMutations('night',['CLOSE_NIGHT']),
  },
  mounted(){
    if(this.isNight) {
      this.CLOSE_NIGHT();
    }
  }
}
</script>
