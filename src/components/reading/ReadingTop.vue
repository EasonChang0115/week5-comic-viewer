<template>
  <div class="reading-top">
    <div class="title3">My Hexschool</div>
    <i class="fas fa-caret-right"></i>

    <div class="select-box">
      <my-select 
        :type="'chapter'" 
        :optionList="chapters"
        :now="nowChapter"
        :dosomethingFunc="CHANGE_CHAPTER">
      </my-select>
      <my-select 
        :type="'page'" 
        :optionList="chapters[nowChapter].pages"
        :now="nowPage"
        :dosomethingFunc="CHANGE_PAGE">
      </my-select>
    </div>

    <div class="day-and-night">
      <i class="fas fa-sun"></i>
      <div class="switch-dark">
        <input type="checkbox" name="" id="switch-dark">
        <label for="switch-dark"></label>
      </div>
      <i class="far fa-moon"></i>
    </div>
  </div>
</template>

<script>
import MySelect from '../MySelect';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ReadingTop',
  components: {
    MySelect
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('chapters',['chapters', 'nowChapter', 'nowPage'])
  },
  methods: {
    ...mapMutations('chapters',['CHANGE_CHAPTER', 'CHANGE_PAGE'])
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-top.scss';
</style>

