<template>
  <div class="comic-banner">
    <div class="comic-image">
      <img width="100%" src="../../../static/images/comic cover.png" alt="">
    </div>
    <div class="information">
      <div class="title">MY HEXSCHOOL</div>
      <div class="infors">
        <div class="attr"><div class="sub-title">Genres</div><span>Fusce/vehicula/dolor</span></div>
        <div class="attr"><div class="sub-title">Author</div><span>Namae Shiranai</span></div>
        <div class="attr"><div class="sub-title">Status</div><span>Ongoing</span></div>
        <div class="attr">
          <div class="sub-title">Rate</div>
          <span class="start" v-for="i in 4" :key="i"><i class="fas fa-star"></i></span>
          <span class="start"><i class="far fa-star"></i></span>
        </div>
      </div>
      <div class="description">
        <div class="sub-title">Summary</div>
        <p class="paragraph">If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. <br><br>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComicBanner',
  data () {
    return {
      msg: 'ComicBanner'
    }
  }
}
</script>

<style lang="scss">
@import '../../style/components/home/comic-banner.scss';
</style>

