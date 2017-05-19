<template>
  <div id="banner" class="center">
    <header>
      <h1 class="title">SITCON 開源城</h1>
      <h2 class="subtitle">踏入資訊域，放眼開源界</h2>
    </header>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus">
#banner
  min-height: 100vh
  &:before
    background-image: -webkit-linear-gradient(top, rgb(53, 180, 184) 0%, transparent 20%), url('/static/banner.jpg')
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
    background-attachment: fixed
    height: 100vh
    width: 100vw
    content: ''
    z-index: -1
    position: absolute
    filter: brightness(0.8)

  header
    flex-direction: column
    color: white
    filter: drop-shadow(0 0 5px rgba(39,40,45,0.7))
    .title
      font-size: 3.75rem
      margin-bottom: .5em
</style>
