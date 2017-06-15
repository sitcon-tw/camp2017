<template>
  <nav id="navbar">
    <div class="toggle">
      <a class="center" href="#navbar" @click="toggleMenu"><span class="icon"></span><h1 class="text">Menu</h1></a>
    </div>
    <ul class="center">
      <li>
        <a href="#banner" data-target="#banner" class="center" @click="jumpTo">
          <div class="icon" data-target="#banner"></div>
        </a>
      </li>
      <li class="center"><a href="#about" @click="jumpTo" data-target="#about">關於</a></li>
      <li class="center"><a href="#course" @click="jumpTo" data-target="#course">課程</a></li>
      <li class="center"><a href="#admission" @click="jumpTo" data-target="#admission">錄取</a></li>
      <li class="center"><a href="#registration" @click="jumpTo" data-target="#registration">報名</a></li>
      <li class="center"><a href="#organizer" @click="jumpTo" data-target="#organizer">共同主辦</a></li>
      <li class="center"><a href="#staff" @click="jumpTo" data-target="#staff">工作團隊</a></li>
      <li class="center"><a href="#exp" @click="jumpTo" data-target="#exp">學員心得</a></li>
      <li class="center"><a href="#coc" @click="jumpTo" data-target="#coc">行為準則</a></li>
    </ul>
  </nav>
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
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll (e) {
      let distant = document.getElementById('banner').getBoundingClientRect().top
      if (distant <= -15) {
        this.$el.addClass('scrolled')
      } else {
        this.$el.removeClass('scrolled')
      }
    },
    jumpTo (e) {
      e.preventDefault()
      let target = e.target.getAttribute('data-target')
      jump(target, {
        offset: -this.navbarHeight
      })
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
clover = #4A542D
#navbar
  height: 3.5em
  width: 100%
  position: absolute
  z-index: 10
  top: 15px
  left: 0
  @media screen and (max-width: 600px)
    position: fixed
    top: 0
    left: 0
  background-color: clover
  &.scrolled
    position: fixed
    top: 0
  &.active
    height: 100vh

  a
    color: white
    text-decoration: none
    text-align: center
    width: 100%

  ul
    list-style: none
    width: 100%
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
      height: 3.5em
      flex-direction: column
      width: 100%

  .icon
    height: 2.5em
    width: 2.5em
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
</style>
