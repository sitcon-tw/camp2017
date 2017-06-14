<template>
  <section id="admission" class="container">
    <h1 class="title fourtitle">錄取名單</h1>
    <h2 class="subtitle redcar">正取學員</h2>
    <div class="content">
      <ul class="admissionList">
        <li v-for="student in admissionList">
          {{ student }}
        </li>
      </ul>
    </div>
    <h2 class="subtitle bluecar">繳費時間</h2>
    <div class="content">
      <p class="info">即日起至 2017 / 06 / 25 止</p>
      <p class="info">可選擇之繳費方式包含：<br />超商代碼/條碼、webATM、ATM轉帳</p>
      <p class="info">請透過錄取通知中的連結進行第二階段報名後，取得相關繳費資料再繳費。</p>
    </div>
    <h2 class="subtitle redcar">注意事項</h2>
    <div class="content">
      <ol>
        <li>
          第二階段報名連結已連同錄取通知寄發至前一次報名所留下之電子信箱，請正取學員至您的信箱查閱信件。
        </li>
        <li>請於第二階段報名系統正確選擇您的票種，若票種與報名身份不符（如個人報名卻選擇團體報名），將需透過匯款方式補繳報名費用，否則視將同放棄資格。</li>
        <li>正取學員資格不得轉讓予他人使用，轉讓者將取消資格。</li>
        <li>繳費完成始完成報名程序，正取學員若未於期限內繳交報名費用，將取消資格，由備取者遞補。</li>
        <li>錄取通知以及行前注意等資訊，均將透過報名時所留下之電子郵件通知學員，請務必定期檢查信箱，以確保個人權益。</li>
        <li>有任何問題歡迎來信至
          <a href="mailto:ask@sitcon.camp">ask@sitcon.camp</a>，我們將儘速回覆您。</li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Admission',
  data () {
    return {
      admissionList: ['郭Ｏ弘', '謝Ｏ燁', '曹Ｏ翔', '蘇Ｏ瑄', '洪Ｏ瑜', '陳Ｏ佑', '楊Ｏ文', '王Ｏ翔', '王Ｏ華', '張Ｏ勛', '賈Ｏ郁', '廖Ｏ安', '雲Ｏ仁', '呂Ｏ霆', '洪Ｏ哲', '卓Ｏ嘉', '盧Ｏ宇', '王Ｏ鈞', '陳Ｏ靜', '黃Ｏ鈞', '羅Ｏ晴', '張Ｏ愷', '詹Ｏ翔', '許Ｏ駿', '陳Ｏ智', '張Ｏ遠', '孫Ｏ均', '歐Ｏ詮', '黃Ｏ軒', '盧Ｏ達', '朱Ｏ鵬', '蔡Ｏ霖', '李Ｏ樺', '王Ｏ涵', '李Ｏ皜', '劉Ｏ婕', '郭Ｏ瑄', '于Ｏ', '陳Ｏ', '李Ｏ霆', '張Ｏ程', '呂Ｏ瑀', '劉Ｏ龍', '林Ｏ瑄', '嚴Ｏ', '林Ｏ萱', '吳Ｏ緯', '干Ｏ軍', '陳Ｏ彰', '黃Ｏ鵬', '胡Ｏ瑜', '黃Ｏ蘋', '練Ｏ杉', '牟Ｏ佑', '鄒Ｏ權', '陳Ｏ達', '王Ｏ翔', '曾Ｏ倢', '周Ｏ毅', '蘇Ｏ銘'],
      waiting: ['朱Ｏ暉']
    }
  }
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

#admission
  position: relative
  &:before
    content: ''
    display: block
    background-image: url('../assets/2017SC2.png')
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    width: 15rem
    height: 30rem
    margin-top: 12rem
    position: absolute
    right:-14rem
    z-index: 1

  .admissionList
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    margin: 0 auto
    padding: 0
    max-width: 600px
    > li
      width: 33%
      text-align: center
      list-style: none

  .button
    font-size: 1.6rem
    font-weight: 500
    background-color: blue
    color: white
    margin: 1em
    padding: 0.4em .8em
    transition: all .3s
    border: 1px solid transparent;
    &:hover
      transform:scale(1.05)
      background-color: rgba(26,136,123,0.5)
      color: white
      border: 1px solid rgba(26,136,123,0.5);
      transition: all .3s
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
</style>
