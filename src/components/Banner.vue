<template>
  <div id="banner" class="center">
    <header>
      <h1 class="title">SITCON 開源城</h1>
      <h2 class="subtitle">踏入資訊域，放眼開源界</h2>
      <div class="center">
        <a href="#registration" @click="registration()" class="button">我要報名</a>
      </div>
    </header>
  </div>
</template>

<script>
import jump from 'jump.js'
export default {
  name: 'Banner',
  methods: {
    registration () {
      jump('#registration')
    }
  }
}
</script>
<style lang="stylus">
blue = #35b4b8

#banner
  min-height: 100vh
  &:before
    background-image: -webkit-linear-gradient(top, rgb(53, 180, 184) 0%, transparent 20%), url('../assets/banner.jpg')
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
    height: 100vh
    width: 100vw
    content: ''
    z-index: -1
    position: absolute
    top: 0
    left: 0
    filter: brightness(0.8)

  .subtitle:before
    content: ''

  header
    flex-direction: column
    color: white
    filter: drop-shadow(0 0 5px rgba(39,40,45,0.7))
    .title
      font-size: 3.75rem
      margin-bottom: .5em

  .button
    font-size: 1.5rem
    background-color: blue
    color: white
    margin: 1em
    padding: .8em
    box-shadow: 0px 0px 15px rgba(51, 51, 102, 0.5)
    text-decoration: none
</style>
