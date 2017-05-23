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

Element.prototype.addClass = function (classNames) {
  let classList = this.className.split(' ').filter(className => className.length > 0)
  let addClassList = classNames.split(' ').filter(className => classList.indexOf(className) < 0)
  this.className = classList.concat(addClassList).join(' ')
}

Element.prototype.removeClass = function (classNames) {
  let classList = this.className.split(' ').filter(className => className.length > 0)
  let removeClassList = classNames.split(' ')
  classList = classList.filter(className => removeClassList.indexOf(className) < 0)
  if (classList.length > 0) {
    this.className = classList.join(' ')
  } else {
    this.removeAttribute('class')
  }
}

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
dark-gray = #606060
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
  text-indent: 0rem !important

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
    @media screen and (max-width: 750px)
      width: 80%
    @media screen and (max-width: 500px)
      width: 90%
    @media screen and (max-width: 320px)
      width: 95%
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
