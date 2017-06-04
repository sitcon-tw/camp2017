<template>
  <section id="registration" class="container">
    <h1 class="title">報名</h1>
    <div class="content">
      <h2 class="subtitle">活動費用</h2>
      <ul>
        <li>個人報名： 6500 元 / 人</li>
        <li>
          團體報名： 5900 元 / 人 <br />
          三人同時報名，視為團體報名，每團以三人為限，請詳閱 <a href="./assets/document/SITCON_camp_2017_Registration_brochure.pdf" target="_blank">活動報名簡章</a>。
        </li>
        <li>
          本次夏令營招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。正取學員名單將於結束報名後公佈，正取學員完成報名費繳交，始完成報名程序。
        </li>
        <li>另設有補助名額，請詳閱 <a href="./assets/document/SITCON_camp_2017_Registration_fee_reduction.pdf" target="_blank">補助辦法</a>。</li>
      </ul>
      <h2 class="subtitle">報名時間</h2>
      <p class="info center"><del>即日起至 2017 / 06 / 05 止</del></p>
      <p class="info center"><ins>好評再度加開，延長至 2017 / 06 / 12 止</ins></p>
      <div class="center">
        <a href="https://sitcon.kktix.cc/events/sitcon-camp2017" target="_blank" class="button">報名頁面</a>
      </div>
      <h2 class="subtitle">注意事項</h2>
      <ul>
        <li>
          本次活動採用 KKTIX 售票進行報名，請詳細閱讀 <a href="./assets/document/SITCON_camp_2017_Registration_brochure.pdf" target="_blank">活動報名簡章</a>。
        </li>
        <li>正式取得學員資格後不得轉讓予他人使用，轉讓者將取消資格。</li>
        <li>繳費完成始完成報名程序，正取學員若未於期限內繳交報名費用，將取消資格，由備取者遞補。</li>
        <li>錄取通知以及行前注意等資訊，均將透過報名時所留下之電子郵件通知學員，請務必定期檢查信箱，以確保個人權益。</li>
        <li>團體報名不保證所有團員皆錄取，唯團報經錄取者，皆可享有團體報名優惠。</li>
        <li>有任何問題歡迎來信至 <a href="mailto:ask@sitcon.camp">ask@sitcon.camp</a>，我們將儘速回覆您。</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Registration'

}
</script>

<style lang="stylus">
blue = #35b4b8
white = #f8fcf6

#registration
  a
    color: blue

  .title
    color: blue
    border: 2px solid blue

  .subtitle
    &:before
      color: blue

  ul
    list-style: circle
    line-height: 2rem

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
      transform:scale(1.05)
      background-color: transparent
      color: blue
      border: 1px solid blue;
      transition: all .3s
</style>

