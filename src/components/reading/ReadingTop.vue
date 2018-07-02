<template>
  <div class="reading-top">
    <div class="title3">My Hexschool</div>

    <i class="fas fa-caret-right"></i>

    <my-select :type="'chapter'" :optionList="chapters"></my-select>
    <my-select :type="'page'" :optionList="pages"></my-select>

    <div class="day-and-night">
      <i class="fas fa-sun"></i>
      <div class="switch-dark">
        <label for="switch-dark"></label>
        <input type="checkbox" name="" id="switch-dark">
      </div>
      <i class="far fa-moon"></i>
    </div>
  </div>
</template>

<script>
import MySelect from '../MySelect';

export default {
  name: 'ReadingTop',
  components: {
    MySelect
  },
  data () {
    return {
      msg: 'Chapters',
      chapters: [{
        name: 'Chepter 1',
      },{
        name: 'Chepter 2'
      }],
      pages: [{
        name: 'Page 1',
      },{
        name: 'Page 2'
      },{
        name: 'Page 3'
      },{
        name: 'Page 4'
      }],
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-top.scss';
</style>

