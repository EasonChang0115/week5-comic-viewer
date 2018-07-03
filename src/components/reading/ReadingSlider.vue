<template>
  <div class="reading-slider">
    <div class="slider">
      <div class="comic-imgs" v-for="(page, index) in localChapterPages" 
        :key="index">
        <div class="num" :class="nowPage === index ? 'now' : ''">{{ pendingNumber(index+1) }}</div>
        <div class="img" 
        :style="{backgroundImage: `url(${page.url})`}"
        :class="nowPage === index ? 'now' : ''" 
        ><div class="shadow"></div></div>
      </div>
      <div class="pre-button" @click="changePage(-1)">
        <i class="fas fa-angle-double-left"></i>
      </div>
      <div class="next-button" @click="changePage(1)">
        <i class="fas fa-angle-double-right"></i>
      </div>
    </div>
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
    localChapterPages() {
      return this.chapters[this.nowChapter].pages;
    }
  },
  methods: {
    ...mapMutations('chapters',['CHANGE_PAGE','CHANGE_CHAPTER']),
    pendingNumber(num) {
      if(num.toString().length === 1) {
        return  '0' + num.toString();
      }
      return num.toString();;
    },
    changePage(num) {
      let nowPage = this.nowPage;
      nowPage = nowPage + num;
      this.CHANGE_PAGE({index: nowPage});
    }
    
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-slider.scss';
</style>

