<template>
  <section id="registration" class="container">
    <h1 class="title twotitle reversetitle">報名</h1>
    <h2 class="subtitle redcar">活動費用</h2>
    <div class="content">
      <ul>
        <li>個人報名： 6500 元 / 人</li>
        <li>
          團體報名： 5900 元 / 人
          <br /> 三人同時報名，視為團體報名，每團以三人為限，請詳閱
          <a href="./assets/document/SITCON_camp_2017_Registration_brochure.pdf" target="_blank">活動報名簡章</a>。
        </li>
        <li>
          本次夏令營招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。
        </li>
        <li>
          正取學員名單將於 2017 / 06 / 15 公佈，正取學員需完成報名費繳交，始完成報名程序。
        </li>
        <li>另設有補助名額，請詳閱
          <a href="./assets/document/SITCON_camp_2017_Registration_fee_reduction.pdf" target="_blank">補助辦法</a>。</li>
      </ul>
      <h2 class="subtitle bluecar">報名時間</h2>
      <p class="info center"><del>即日起至 2017 / 06 / 05 止</del></p>
      <p class="info center"><del>好評再度加開，延長至 2017 / 06 / 12 止</del></p>
      <div class="center">
        <div class="button">已結束報名</div>
      </div>
    </div>
    <div class="content row separate-around wrap">
      <div class="items">
        <h2 class="subtitle redcar">活動時間</h2>
        <p class="info center">8/14（一）~ 8/17（四）</p>
      </div>
      <div class="items">
        <h2 class="subtitle bluecar">活動地點</h2>
        <p class="info center">東海大學</p>
        <p class="info center">台中市西屯區台灣大道四段1727號</p>
      </div>
    </div>
    <h2 class="subtitle redcar">注意事項</h2>
    <ol>
      <li>
        本次活動採用 KKTIX 售票進行報名，請詳細閱讀
        <a href="./assets/document/SITCON_camp_2017_Registration_brochure.pdf" target="_blank">活動報名簡章</a>。
      </li>
      <li>正式取得學員資格後不得轉讓予他人使用，轉讓者將取消資格。</li>
      <li>繳費完成始完成報名程序，正取學員若未於期限內繳交報名費用，將取消資格，由備取者遞補。</li>
      <li>錄取通知以及行前注意等資訊，均將透過報名時所留下之電子郵件通知學員，請務必定期檢查信箱，以確保個人權益。</li>
      <li>團體報名不保證所有團員皆錄取，唯團報經錄取者，皆可享有團體報名優惠。</li>
      <li>有任何問題歡迎來信至
        <a href="mailto:ask@sitcon.camp">ask@sitcon.camp</a>，我們將儘速回覆您。</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'Registration'
}
</script>
<style lang="stylus" scoped>
.row
  > div
    flex-grow: 1
</style>

<style lang="stylus">
blue = rgb(26,136,123)
white = #f8fcf6

#registration
  position: relative
  .items
    text-align: center
    width: 300px
  ul
    list-style: none
    line-height: 2rem
    text-align: center
    padding: 0
  ol
    line-height: 2rem

  .button
    font-size: 1.6rem
    font-weight: 500
    background-color: #566
    color: white
    margin: 1em
    padding: 0.4em .8em
    transition: all .3s
    border: 1px solid transparent;
  .redcar
    text-align: center
    &:before
      content: ''
      vertical-align: -20%;
      display: inline-block
      background-image: url('../assets/red-car.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 3rem
      height: 1.6rem
      margin-right: 0.5rem
      position: absolute
      margin-left: -3.5rem
      margin-top: 0.2rem
      z-index: 1
  .bluecar
    text-align: center
    &:before
      content: ''
      vertical-align: -20%;
      display: inline-block
      background-image: url('../assets/blue-car.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 3rem
      height: 1.6rem
      margin-right: 0.5rem
      position: absolute
      margin-left: -3.5rem
      margin-top: 0.2rem
      z-index: 1
  .twotitle
    position: relative
    margin-bottom: 4rem
    &:before
      content: ''
      display: inline-block
      background-image: url('../assets/twoTitle.svg')
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
  .reversetitle
    &:before
      transform:scaleX(-1) translate(50%, -50%)
      filter:FlipH
      margin-left: 2.5rem
</style>
