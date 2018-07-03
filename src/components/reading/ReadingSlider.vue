<template>
  <div class="reading-slider">
    <div class="slider">
      <div class="inner-slider" :style="{left: `${position}px`}">
        <div class="comic-imgs" v-for="(page, index) in localChapterPages" 
          :key="index">
          <div class="num" :class="nowPage === index ? 'hide' : ''">{{ pendingNumber(index+1) }}</div>
          <div class="img" 
          :style="{backgroundImage: `url(${page.url})`}"
          :class="nowPage === index ? 'nowComic' : ''" 
          ><div class="shadow"></div></div>
        </div>
      </div>
    </div>
    <div class="pre-button" @click="changeChapter(-1)">
      <i class="fas fa-angle-double-left"></i>
      <div class="text">PREVIOUS CHAPTER</div>
    </div>
    <div class="next-button" @click="changeChapter(1)">
      <i class="fas fa-angle-double-right"></i>
      <div class="text">NEXT CHAPTER</div>
    </div>
    <div class="scroll">
      <div class="pre"><i class="fas fa-caret-left"></i></div>
      <div class="inner-scroll" :style="{width: `${totalLength}px`, left: `${position}px`}">
        <div class="scroll-box" :style="{left: `${scrollpostion}px`}"></div>
      </div>
      <div class="next"><i class="fas fa-caret-right"></i></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ReadingTop',
  data () {
    return {
      position: 0,
      scrollpostion: 0
    }
  },
  computed: {
    ...mapState('chapters',['chapters', 'nowChapter', 'nowPage']),
    localChapterPages() {
      return this.chapters[this.nowChapter].pages;
    },
    centerPositionNum() {
      return document.querySelector('.slider').offsetWidth;
    },
    totalLength() {
      let pageNum = this.localChapterPages.length;

      return pageNum * 80 + (pageNum - 1) * 20;
    }
  },
  methods: {
    ...mapMutations('chapters',['CHANGE_CHAPTER']),
    pendingNumber(num) {
      if(num.toString().length === 1) {
        return  '0' + num.toString();
      }
      return num.toString();;
    },
    changeChapter(num) {
      let nowChapter = this.nowChapter;
      nowChapter = nowChapter + num;
      this.CHANGE_CHAPTER({index: nowChapter});
    }
  },
  watch: {
    nowPage() {
      let totals = this.localChapterPages.length;
      let centerNum = Math.floor(this.centerPositionNum / 2 / 80) - 1;
      let floorNum = centerNum - 1;
      if(this.nowPage > floorNum && this.nowPage + 2 < totals) {
        this.position = (this.nowPage - centerNum) * -100;
      }
      this.scrollpostion = this.nowPage * 100;
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-slider.scss';
</style>

