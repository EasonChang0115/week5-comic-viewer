<template>
  <div class="container">
    reading
  </div>
</template>

<script>

export default {
  name: 'Reading',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
    console.log(this.$route.params.chapter)
  }
}
</script>
