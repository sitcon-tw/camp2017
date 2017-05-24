<template>
<div id="navbar">
  <div class="toggle">
    <a class="center" href="#navbar" @click="toggleMenu"><span class="icon"></span><span class="text">Menu</span></a>
  </div>
  <ul class="center">
    <li>
      <a href="#banner" data-target="#banner" class="center" @click="scroll">
        <div class="icon" data-target="#banner"></div>
      </a>
    </li>
    <li class="center"><a href="#about" @click="scroll" data-target="#about">關於</a></li>
    <li class="center"><a href="#course" @click="scroll" data-target="#course">課程</a></li>
    <li class="center"><a href="#registration" @click="scroll" data-target="#registration">報名</a></li>
    <li class="center"><a href="#staff" @click="scroll" data-target="#staff">工作團隊</a></li>
    <li class="center"><a href="#exp" @click="scroll" data-target="#exp">學員心得</a></li>
    <li class="center"><a href="#coc" @click="scroll" data-target="#coc">行為準則</a></li>
  </ul>
</div>
</template>

<script>
import jump from 'jump.js'
export default {
  name: 'Navbar',
  data () {
    return {
      section: ['banner', 'about', 'course', 'registration', 'staff', 'exp', 'coc'],
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
      activatedMenu: false
    }
  },
  computed: {
    navbarHeight () {
      return this.$el.clientHeight
    }
  },
  mounted () {
    this.changeNavbar()
    document.addEventListener('resize', this.updateClientHeight)
    window.addEventListener('scroll', this.changeNavbar)
  },
  methods: {
    changeNavbar () {
      let navbar = this.$el
      navbar.removeClass(this.section.join(' '))
      let sectionPos = this.section.map((section) => document.getElementById(section).getBoundingClientRect())
      let currentSection = sectionPos.findIndex((el, i, arr) => el.top <= this.navbarHeight && el.bottom >= this.navbarHeight)
      if (currentSection > 0) {
        navbar.addClass('scrolled')
        navbar.addClass(this.section[currentSection])
      } else {
        navbar.removeClass('scrolled')
      }
    },
    updateClientHeight () {
      this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.scroll()
    },
    scroll (e) {
      e.preventDefault()
      let target = e.target.getAttribute('data-target')
      jump(target)
      this.$el.querySelector('ul').removeClass('active')
      this.$el.removeClass('active')
      this.activatedMenu = false
    },
    toggleMenu () {
      this.activatedMenu = !this.activatedMenu
      if (this.activatedMenu) {
        this.$el.querySelector('ul').addClass('active')
        this.$el.addClass('active')
      } else {
        this.$el.querySelector('ul').removeClass('active')
        this.$el.removeClass('active')
      }
    }
  }
}
</script>

<style lang="stylus">
course = #6a8f37
about = #35b4b8
registration = #35b4b8
coc = #eac539
exp = #ef8c39
staff = #e64a2c
white = #f8fcf6

#navbar
  height: 4em
  width: 100%
  position: fixed
  z-index: 999
  &.active
    height: 100vh
    background-color: about
    &.scrolled
      background-color: white

  a
    color: white
    text-decoration: none
    text-align: center
    width: 100%

  ul
    list-style: none
    width: 100vw
    display: flex
    justify-content: space-around
    vertical-align: baseline
    margin: 0 auto
    padding: 0
    @media screen and (max-width: 600px)
      height: 100vh
      display: none
      flex-direction: column
      justify-content: flex-start
      background-color: transparent
      &.active
        display: flex

    li
      height: 4em
      flex-direction: column
      width: 100%

  .icon
    height: 3em
    width: 3em
    margin: .5em
    -webkit-mask: url('../assets/sitcon-logo.svg') no-repeat center
    mask: url('../assets/sitcon-logo.svg') no-repeat center
    background-color: white

  .toggle
    display: flex
    @media screen and (min-width: 600px)
      display: none
    a
      justify-content: flex-start
    .text
      font-size: 1.5rem
    .icon
      margin: 1em
      width: 2em
      height: 2em
      -webkit-mask: url('../assets/bars.svg') no-repeat center
      mask: url('../assets/bars.svg') no-repeat center
      background-color: white

  &.scrolled
    transition: all .3s;
    background-color: white !important

  &.about
    transition: all .3s;
    a
      color: about
    .icon
      background-color: about
    li:nth-child(2)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px about inset
      @media screen and (max-width: 600px)
        background-color: about
        a
          color: white
  &.course
    transition: all .3s;
    a
      color: course
    .icon
      background-color: course
    li:nth-child(3)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px course inset
      @media screen and (max-width: 600px)
        background-color: course
        a
          color: white
  &.registration
    transition: all .3s;
    a
      color: registration
    .icon
      background-color: registration
    li:nth-child(4)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px registration inset
      @media screen and (max-width: 600px)
        background-color: registration
        a
          color: white
  &.staff
    transition: all .3s;
    a
      color: staff
    .icon
      background-color: staff
    li:nth-child(5)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px staff inset
      @media screen and (max-width: 600px)
        background-color: staff
        a
          color: white
  &.exp
    transition: all .3s;
    a
      color: exp
    .icon
      background-color: exp
    li:nth-child(6)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px exp inset
      @media screen and (max-width: 600px)
        background-color: exp
        a
          color: white
  &.coc
    transition: all .3s;
    a
      color: coc
      text-decoration: none
    .icon
      background-color: coc
    li:nth-child(7)
      @media screen and (min-width: 600px)
        box-shadow: 0 -3px coc inset
      @media screen and (max-width: 600px)
        background-color: coc
        a
          color: white
</style>
