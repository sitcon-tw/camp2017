<template>
  <div id="app">
    <navbar />
    <banner />
    <about />
    <course />
    <registration />
    <staff />
    <exp />
    <coc />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Course from './components/Course'
import Registration from './components/Registration'
import Staff from './components/Staff'
import Exp from './components/Exp'
import Coc from './components/Coc'

export default {
  name: 'app',
  components: {
    Navbar,
    Banner,
    About,
    Course,
    Registration,
    Staff,
    Exp,
    Coc
  }
}
</script>

<style lang="stylus">

glass-green = #a1c950
green = #6a8f37
dark-green = #4a542d
yellow = #eac539
orange = #ef8c39
red = #e64a2c
dark-red = #a94529
black = #27282D
dark-gray = #606060
gray = #9e9895
light-gray = #dfdcda
white = #f8fcf6


#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: dark-gray

.center
  display: flex
  justify-content: center
  align-items: center

.title
  text-align: center
  display: block
  margin: 0 auto
  font-size: 2.5rem

.subtitle
  @extend .title
  font-size: 1.6rem
  &:before
    content: '＃'
    text-indent: 0

.row
  display: flex
  flex-direction: row

.separate-around
  justify-content: space-around

.info
  font-size: 1.1rem

.button
    font-size: 1.5rem
    background-color: blue
    color: white
    margin: 1em
    padding: .8em
    box-shadow: 0px 0px 15px rgba(51, 51, 102, 0.5)
    transition: all .3s
    border: 1px solid transparent;
    &:hover
      background-color: transparent
      color: blue
      border: 1px solid blue;
      transition: all .3s

.container
  @extend .center
  z-index: 0
  background-color: light-gray
  flex-direction: column
  padding: 2em

  .content
    width: 60%
    @media screen and (min-width: 600px)
      width: 80%
    line-height: 2rem
    p
      text-indent: 2rem

  .title
    margin: 1em 0
    color: white
    padding: .5em

  .subtitle
    margin: 1em 0
    padding: .5em

  a
    text-decoration: none
    color: dark-gray
</style>
