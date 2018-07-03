<template>
  <div class="reading-body">
    <div class="comic-imgae">
      <img width="100%" :src="nowPagePath" alt="">
    </div>
    <div class="pre-button" @click="changePage(-1)"><i class="fas fa-angle-left"></i></div>
    <div class="next-button" @click="changePage(1)"><i class="fas fa-angle-right"></i></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ReadingTop',
  data () {
    return {
      msg: 'Chapters',
    }
  },
  computed: {
    ...mapState('chapters',['chapters', 'nowChapter', 'nowPage']),
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
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-body.scss';
</style>

