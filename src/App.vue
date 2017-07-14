<template>
  <div id="app">
    <banner />
    <about />
    <course />
    <admission />
    <registration />
    <organizer />
    <staff />
    <exp />
    <coc />
    <footers />
  </div>
</template>

<script>
import Banner from './components/Banner'
import About from './components/About'
import Course from './components/Course'
import Registration from './components/Registration'
import Staff from './components/Staff'
import Exp from './components/Exp'
import Coc from './components/Coc'
import Footers from './components/footer'
import Admission from './components/admission'
import Organizer from './components/organizer'

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
    Banner,
    About,
    Course,
    Registration,
    Staff,
    Exp,
    Coc,
    Footers,
    Admission,
    Organizer
  }
}
</script>

<style lang="stylus">
dark-gray = #606060
light-gray = #dfdcda
white = #f8fcf6

*
  box-sizing: border-box

body
  color: black
  background-color: #AFDCBE

body.isShowFancyBox
  overflow: hidden

#app
  font-family: 'Noto Sans', 'Source Hans Sans', 'Source Hans Sans TC', 'Noto Sans CJK TC', 'Noto Sans TC', 'PingFang TC', 'LiHei Pro', '微軟正黑體', 'Microsoft JhengHei', 'Avenir', Helvetica, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow-x: hidden
  max-width: 100%

.center
  display: flex
  justify-content: center
  align-items: center

.title
  text-align: center
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
  &.wrap
    flex-wrap: wrap

.separate-around
  justify-content: space-around

.info
  font-size: 1.1rem
  text-indent: 0rem !important

.container
  z-index: 0
  padding: 1em
  margin: 0 auto
  width: 60%
  @media screen and (max-width: 1440px)
    width: 60%
  @media screen and (max-width: 1366px)
    width: 65%
  @media screen and (max-width: 500px)
    width: 90%
  @media screen and (max-width: 320px)
    width: 95%

  .content
    line-height: 2rem
    p
      text-align: center

  .title
    margin: 1em auto

  .subtitle
    margin: .5em 0
    padding: .5em

  a
    text-decoration: none
    color: #CC775F
</style>
