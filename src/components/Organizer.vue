<template>
  <section id="organizer" class="container">
    <h1 class="title fourtitle">共同主辦</h1>
    <ul>
      <li>
        <a href="http://sitcon.org/2017/" target="_blank">
          <div class="img"><img src="../assets/sitcon.png" alt=""></div>
          <span>SITCON 學生計算機年會</span>
        </a>
      </li>
      <li>
        <a href="http://ocf.tw/" target="_blank">
          <div class="img"><img src="../assets/OCFLogo.png" alt="" /></div>
          <span>開放文化基金會</span>
        </a>
      </li>
      <li>
        <a href="http://www.cs.thu.edu.tw/" target="_blank">
          <div class="img"><img src="../assets/cs-logo.jpg" alt="" /></div>
          <span>東海大學 資訊工程學系</span>
        </a>
      </li>
      <li>
        <a href="http://itservice.thu.edu.tw/" target="_blank">
          <div class="img"><img src="../assets/itservice_logo.png" alt="" /></div>
          <span>東海大學 電子計算機中心</span>
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'organizer'
}
</script>

<style lang="stylus">
#organizer
  > ul
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    font-weight: 200
    width: 80%
    margin: 0 auto
    padding: 0
    @media screen and (max-width: 680px)
      width: 90%
    @media screen and (max-width: 580px)
      justify-content: center
    li
      text-align: center
      list-style: none
      margin: .5em auto
      min-width: 50%
      span
        color:black
        font-weight: 400

      .img
          margin: .5em auto
          border: 2px solid white
          border-radius: 2rem
          width: 240px
          height: 160px
          background-color: white
          display: flex
          align-items: center
          justify-content: center
          img
            max-width: 80%
            max-height: 80%
.fourtitle
    position: relative
    margin-bottom: 4rem
    &:before
      content: ''
      display: inline-block
      background-image: url('../assets/fourTitle.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 20rem
      max-width: 90vw
      height: 6rem
      position: absolute
      top: 50%
      left: 50%
      z-index: 1
      transform: translate(-50%, -50%)
      margin-left: -2.5rem
  .reversetitle
    &:before
      transform:scaleX(-1) translate(50%, -50%)
      filter:FlipH
      margin-left: 2.5rem
</style>
