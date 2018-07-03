<template>
  <div class="container">
    <ad-block :ad="ad[0]"></ad-block>
    <reading-top></reading-top>
    <ad-block :ad="ad[1]"></ad-block>
    <reading-body></reading-body>
    <reading-slider></reading-slider>
    <ad-block :ad="ad[2]"></ad-block>
  </div>
</template>

<script>
import ReadingTop from '../components/reading/ReadingTop';
import ReadingBody from '../components/reading/ReadingBody';
import ReadingSlider from '../components/reading/ReadingSlider';

//廣告
import AdBlock from '../components/AdBlock';

export default {
  name: 'Reading',
  components: {
    ReadingTop,
    ReadingBody,
    ReadingSlider,
    AdBlock
  },
  data () {
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
  mounted() {
    this.$store.commit('chapters/CHANGE_CHAPTER',
      {index: this.$route.params.chapter - 1}
    );
  }
}
</script>
