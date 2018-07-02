<template>
  <div class="reading-body">
    <div class="comic-imgae">
      <img width="100%" src="../../assets/images/chapter1/storyboard-1.png" alt="">
    </div>
    <div class="pre-button"><i class="fas fa-angle-left"></i></div>
    <div class="next-button"><i class="fas fa-angle-right"></i></div>
  </div>
</template>

<script>
export default {
  name: 'ReadingTop',
  data () {
    return {
      msg: 'Chapters',
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-body.scss';
</style>

