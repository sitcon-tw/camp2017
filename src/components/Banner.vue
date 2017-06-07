<template>
  <header>
    <div id="banner">
      <a href="#registration" @click="registration()" class="button">我要報名</a>
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
  flex-direction: column
  color: white
  display: flex
  justify-content: flex-end
  align-items: center

  &:before
    background-image: url('../assets/city.svg')
    background-repeat: no-repeat
    background-position: center bottom
    background-size: 100%
    height: 100vh
    width: 100%
    content: ''
    position: absolute
    top: 0
    left: 0

  .subtitle:before
    content: ''

  h1, p, .button
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
