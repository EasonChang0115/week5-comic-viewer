<template>
  <div class="reading-top" :class="isNight? 'night' : ''">
    <router-link to="/" class="title3">My Hexschool</router-link>
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
      <i class="fas fa-sun day"></i>
      <i class="far fa-sun night"></i>
      <div class="switch-dark">
        <input type="checkbox" id="switch-dark" v-model="isLocalNight">
        <label for="switch-dark"></label>
      </div>
      <i class="far fa-moon day"></i>
      <i class="fas fa-moon night"></i>
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
  computed: {
    ...mapState('chapters',['chapters', 'nowChapter', 'nowPage']),
    ...mapState('night',['isNight']),
    isLocalNight: {
      get() {
        return this.isNight;
      },
      set() {
        this.SWITCH_NIGHT();
      }
    }

  },
  methods: {
    ...mapMutations('chapters',['CHANGE_CHAPTER', 'CHANGE_PAGE']),
    ...mapMutations('night',['SWITCH_NIGHT']),
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-top.scss';
</style>

