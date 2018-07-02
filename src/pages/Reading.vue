<template>
  <div class="container">
    <reading-top></reading-top>
    <reading-body></reading-body>
    <reading-slider></reading-slider>
  </div>
</template>

<script>
import ReadingTop from '../components/reading/ReadingTop';
import ReadingBody from '../components/reading/ReadingBody';
import ReadingSlider from '../components/reading/ReadingSlider';

export default {
  name: 'Reading',
  components: {
    ReadingTop,
    ReadingBody,
    ReadingSlider
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
    console.log(this.$route.params.chapter)
  }
}
</script>
