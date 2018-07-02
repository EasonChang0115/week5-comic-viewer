<template>
  <div class="reading-top">
    <div class="title3">My Hexschool</div>

    <i class="fas fa-caret-right"></i>

    <select class="chepter-select" name="" id="">
      <option value="">chepter1</option>
    </select>
    <select class="page-select" name="" id="">
      <option value="">page1</option>
      <option value="">page2</option>
      <option value="">page3</option>
    </select>

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
export default {
  name: 'ReadingTop',
  data () {
    return {
      msg: 'Chapters',
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/reading/reading-top.scss';
</style>

