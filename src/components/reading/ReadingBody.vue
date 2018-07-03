<template>
  <div class="reading-body" :class="{night: isNight, fullscreen: isFullScreen}">
    <div class="comic-imgae" @dblclick="toggleFullScreen">
      <i class="far fa-times-circle" 
      :class="{fullscreen: isFullScreen}"
      @click="toggleFullScreen"></i>
      <img width="100%" :src="nowPagePath" alt="">
    </div>
    <div class="pre-button" @click="changePage(-1)"><i class="fas fa-angle-left"></i></div>
    <div class="next-button" @click="changePage(1)"><i class="fas fa-angle-right"></i></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ReadingBody',
  data () {
    return {
      isFullScreen: false,
    }
  },
  computed: {
    ...mapState('chapters',['chapters', 'nowChapter', 'nowPage']),
    ...mapState('night',['isNight']),
    nowPagePath() {
      let nowChapterPages = this.chapters[this.nowChapter].pages;
      return nowChapterPages[this.nowPage].url;
    }
  },
  methods: {
    ...mapMutations('chapters',['CHANGE_PAGE']),
    changePage(num) {
      let nowPage = this.nowPage;
      nowPage = nowPage + num;
      this.CHANGE_PAGE({index: nowPage});
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-body.scss';
</style>

