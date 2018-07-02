<template>
  <div class="chapters">
    <div class="title2">All Chapters</div>
    <div class="chapter-box">
      <div class="chapter" v-for="(chapter,index) in chapterLists" :key="index">
        <div class="sub-title chapter-no">Chapter {{ index + 1 }}：</div>
        <div class="sub-title chapter-title">{{ chapter.title }}</div>
        <div v-if="chapter.isNew" class="sub-title chapter-new">NEW</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapters',
  data () {
    return {
      msg: 'Chapters',
      chapterLists: [
        {title: "The F2E Challenge Start!", isNew: false},
        {title: "Todo List is Going Crazy!", isNew: true}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/home/chapters.scss';
</style>

