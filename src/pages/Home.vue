<template>
  <div class="container">
    <ad-block :ad="ad[0]"></ad-block>
    <comic-banner></comic-banner>
    <ad-block :ad="ad[1]"></ad-block>
    <chapters></chapters>
    <ad-block :ad="ad[2]"></ad-block>
  </div>
</template>

<script>
import ComicBanner from '../components/home/ComicBanner';
import Chapters from '../components/home/Chapters';

//廣告
import AdBlock from '../components/AdBlock';

import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Home',
  data(){
    return {
      ad: [{
        id: 0,
        url: 'https://vuejs.org/',
        img: '../../static/images/ad/ad-1.png'
      },{
        id: 0,
        url: 'https://getbootstrap.com/',
        img: '../../static/images/ad/ad-2.png'
      },{
        id: 0,
        url: 'https://www.w3schools.com/html/html5_intro.asp',
        img: '../../static/images/ad/ad-3.png'
      }]
    }
  },
  components: {
    ComicBanner,
    Chapters,
    AdBlock
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
