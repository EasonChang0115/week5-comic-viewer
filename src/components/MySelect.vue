<template>
  <div class="my-select" :class="type">
    <button @click="switchOptions">
      {{ optionList[selected].name }}
    </button>
    <div class="arrow"  @click="switchOptions">
      <i class="fas fa-sort-up"></i>
      <i class="fas fa-sort-down"></i>
    </div>
    <div :class="isVisible ? 'options visible' : 'options' ">
      <div class="option" v-for="(option, index) in optionList"
        :key="index"
        :class="selected === index ? 'now' : ''" 
        @click="changeSelect(index)">{{ option.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelect',
  props: ['type', 'optionList'],
  data() {
    return {
      selected: 0,
      isVisible: false
    }
  },
  methods: {
    switchOptions() {
      this.isVisible = !this.isVisible;
    },
    changeSelect(index) {
      if(index === this.selected) return
      this.selected = index;
      this.switchOptions();
    }
  }
}
</script>

<style lang="scss">
@import '../style/components/my-select.scss';
</style>

