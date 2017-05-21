<template>
<div id="navbar">
  <ul class="center">
    <li>
      <a href="#banner">
        <img src="/static/sitcon-logo.svg" alt="" class="icon"></a>
    </li>
    <li><a href="#about" class="scroll">關於</a></li>
    <li><a href="#course" class="scroll">課程</a></li>
    <li><a href="#registration" class="scroll">報名</a></li>
    <li><a href="#staff" class="scroll">工作團隊</a></li>
    <li><a href="#exp" class="scroll">學員心得</a></li>
    <li><a href="#coc" class="scroll">行為準則</a></li>
  </ul>
</div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
#navbar
  height: 4em
  position: fixed
  z-index: 999

  a
    color: white
    text-decoration: none

  ul
    list-style: none
    width: 100vw
    display: flex
    justify-content: space-around
    vertical-align: baseline
    margin: 0 auto
    padding: 0

  .icon
    height: 3em
    margin: .5em 0
</style>
