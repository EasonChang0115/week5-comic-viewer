<template>
  <div class="my-select" :class="type">
    <button @click="switchOptions">
      {{ realOptionList[now] }}
    </button>
    <div class="arrow"  @click="switchOptions">
      <i class="fas fa-sort-up"></i>
      <i class="fas fa-sort-down"></i>
    </div>
    <div :class="isVisible ? 'options visible' : 'options' ">
      <div class="option" v-for="(option, index) in realOptionList"
        :key="index"
        :class="now === index ? 'now' : ''" 
        @click="changeSelect(index)">{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelect',
  props: ['type', 'optionList', 'dosomethingFunc', 'now'],
  data() {
    return {
      isVisible: false
    }
  },
  mounted(){
    window.addEventListener('mousedown',(e) => {
      if(this.isVisible === true && e.target.classList[0] !== 'option') {
        this.isVisible = false;
      }
    })
  },
  computed: {
    realOptionList() {
      if(this.type === 'chapter') {
        let newArray = [];
        this.optionList.forEach((item,index)=>{
          newArray.push('Chapter ' + (index+1));
        });
        return newArray;
      }
      if(this.type === 'page') {
        let newArray = [];
        this.optionList.forEach((item,index)=>{
          let snum = this.pendingNumber(index + 1)
          newArray.push('Page ' + snum);
        });
        return newArray;
      }
    }
  },
  methods: {
    switchOptions() {
      this.isVisible = !this.isVisible;
    },
    changeSelect(index) {
      if(index === this.now) return
      this.dosomethingFunc({index});
      this.switchOptions();
    },
    pendingNumber(num) {
      if(num.toString().length === 1) {
        return  '0' + num.toString();
      }
      return num.toString();;
    },
  }
}
</script>

<style lang="scss">
@import '../style/components/my-select.scss';
</style>

