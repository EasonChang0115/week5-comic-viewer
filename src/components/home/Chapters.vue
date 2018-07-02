<template>
  <div class="chapters">
    <div class="title2">All Chapters</div>
    <div class="chapter-box">
      <router-link class="chapter" v-for="(chapter,index) in chapterLists" 
      :key="index" :to="`/reading/${chapter.id}`">
        <div class="sub-title chapter-no">Chapter {{ index + 1 }}：</div>
        <div class="sub-title chapter-title">{{ chapter.title }}</div>
        <div v-if="chapter.isNew" class="sub-title chapter-new">NEW</div>
      </router-link>
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
        {id: 1, title: "The F2E Challenge Start!", isNew: false},
        {id: 2, title: "Todo List is Going Crazy!", isNew: true}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/home/chapters.scss';
</style>

