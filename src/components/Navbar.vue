<template>
<div id="navbar">
  <ul class="center">
    <li>
      <a href="#banner" class="center">
        <div class="icon"></div>
      </a>
    </li>
    <li class="center"><a href="#about">關於</a></li>
    <li class="center"><a href="#course">課程</a></li>
    <li class="center"><a href="#registration">報名</a></li>
    <li class="center"><a href="#staff">工作團隊</a></li>
    <li class="center"><a href="#exp">學員心得</a></li>
    <li class="center"><a href="#coc">行為準則</a></li>
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
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  computed: {
    navbarHeight () {
      return document.getElementById('navbar').clientHeight
    }
  },
  mounted () {
    let self = this
    this.changeNavbar()
    document.addEventListener('resize', this.updateClientHeight)
    window.addEventListener('scroll', this.changeNavbar)
    document.getElementById('navbar').querySelectorAll('a').forEach(function (element) {
      element.addEventListener('click', self.scroll)
    })
  },
  methods: {
    changeNavbar () {
      let scrolledHeight = document.documentElement.scrollTop || document.body.scrollTop
      let navbar = document.body.querySelector('#navbar > ul')

      let isOnBanner = scrolledHeight < (this.clientHeight - this.navbarHeight)
      if (!isOnBanner) {
        navbar.addClass('scrolled')
      } else {
        navbar.removeClass('scrolled')
      }

      navbar.removeClass(this.section.join(' '))
      let sectionPos = this.section.map((section) => document.getElementById(section).getBoundingClientRect())
      let currentSection = sectionPos.findIndex((el, i, arr) => el.top <= this.navbarHeight && el.bottom >= this.navbarHeight)
      if (currentSection > 0) {
        navbar.addClass(this.section[currentSection])
      }
    },
    updateClientHeight () {
      this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.scroll()
    },
    scroll (e) {
      let target = e.target.getAttribute('href')
      jump(target)
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
  position: fixed
  z-index: 999

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

    li
      height: 4em
      flex-direction: column
      width: 100%

  .icon
    height: 3em
    width: 3em
    margin: .5em 0
    -webkit-mask: url('/static/sitcon-logo.svg') no-repeat center
    mask: url('/static/sitcon-logo.svg') no-repeat center
    background-color: white

  .scrolled
    transition: all .3s;
    background-color: white
  .about
    transition: all .3s;
    a
      color: about
    .icon
      background-color: about
    li:nth-child(2)
      box-shadow: 0 -3px about inset;
  .course
    transition: all .3s;
    a
      color: course
    .icon
      background-color: course
    li:nth-child(3)
      box-shadow: 0 -3px course inset;
  .registration
    transition: all .3s;
    a
      color: registration
    .icon
      background-color: registration
    li:nth-child(4)
      box-shadow: 0 -3px registration inset;
  .staff
    transition: all .3s;
    a
      color: staff
    .icon
      background-color: staff
    li:nth-child(5)
      box-shadow: 0 -3px staff inset;
  .exp
    transition: all .3s;
    a
      color: exp
    .icon
      background-color: exp
    li:nth-child(6)
      box-shadow: 0 -3px exp inset;
  .coc
    transition: all .3s;
    a
      color: coc
      text-decoration: none
    .icon
      background-color: coc
    li:nth-child(7)
      box-shadow: 0 -3px coc inset;
</style>
