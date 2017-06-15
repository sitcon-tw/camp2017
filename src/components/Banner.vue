<template>
  <header>
    <div id="banner">
      <div id="osc-logo">
      </div>
      <div class="button center">
        <a href="#admission" @click="admission()">錄取名單</a>
      </div>
    </div>
    <navbar />
  </header>
</template>

<script>
import Navbar from './Navbar'
import jump from 'jump.js'
export default {
  name: 'Banner',
  components: {
    Navbar
  },
  methods: {
    admission () {
      jump('#admission')
    }
  }
}
</script>
<style lang="stylus">
buttonColor = rgb(127,180,114)

#osc-logo
  background-image: url('../assets/osc-logo.svg')
  background-size: contain
  background-repeat: no-repeat
  background-position: center center
  @media screen and (min-width: 601px)
    position: absolute
    top: 20vh
    left: 20vw 
    width: 35vw
    min-width: 300px
    max-width: 400px
    height: calc(35vw/2.23)
  @media screen and (max-width: 500px) and (orientation: portrait)
    position: absolute
    left: 60%
    top: 30%
    transform: translate(-50%, -50%)
    width: 250px
    height: calc(250px/2.23)
  @media screen and (orientation: landscape) and (max-height: 500px)
    left: 30%
    top: 40%
    width: 25vw
    min-width: 300px
    max-width: 400px
    height: calc(25vw/2.23)
    transform: translate(-50%, -50%)

#banner
  min-height: 100vh


  &:before
    background-image: url('../assets/city.svg')
    @media screen and (orientation: portrait)
      background-image: url('../assets/city-mobile.svg')
    background-repeat: no-repeat
    background-position: center bottom
    background-size: cover
    height: 100vh
    width: 100%
    content: ''
    position: absolute
    top: 0
    left: 0

  h1, p, .button
    filter: drop-shadow(0 0 5px rgba(39,40,45,0.7))

  .button
    min-height: calc(100vh * .075)
    min-width: calc(4em + 1.8rem * 4)
    
    font-size: 1.8rem
    font-weight: 500
    background-color: buttonColor
    
    margin: 1.5em auto
    padding: 0.2em 2em
    @media screen and (max-width: 600px)
      padding: 0.2em 1.5em
    box-shadow: 0px 0px 15px rgba(51, 51, 102, 0.5)
    border-radius: 5px
    position: absolute
    top: calc(100vh * (.85 - .0375))
    left: 50%
    transform: translate(-50%, 0)
    a
      color: black
      text-decoration: none
</style>
