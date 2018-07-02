<template>
  <div class="reading-top">
    <div class="title3">My Hexschool</div>
    <i class="fas fa-caret-right"></i>

    <div class="select-box">
      <my-select :type="'chapter'" :optionList="chapters"></my-select>
      <my-select :type="'page'" :optionList="pages"></my-select>
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
        name: 'Page 01',
      },{
        name: 'Page 02'
      },{
        name: 'Page 03'
      },{
        name: 'Page 04'
      }],
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-top.scss';
</style>

