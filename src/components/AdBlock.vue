<template>
  <a :href="ad.url" 
    class="ad-block" target="_blank" 
    :style="{display: isVisble ? 'block' : 'none'}">
      <i class="far fa-times-circle" @click.stop.prevent="closeAd"></i>
      <img width="100%" :src="ad.img" alt="">
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AdBlock',
  props: ['ad'],
  data () {
    return {
      isVisble: true
    }
  },
  methods: {
    closeAd(){
      this.isVisble = false;
    }
  }
  
}
</script>

<style lang="scss">
@import '../style/components/ad-block.scss';
</style>

