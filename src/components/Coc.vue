<template>
  <section id="coc" class="container">
    <h1 class="title fourtitle reversetitle">行為準則</h1>
    <div class="content">
      <p>SITCON 夏令營期許成為年輕學子踏入資訊世界的引路人，同時我們也致力於為每位成員提供更友善、開放的環境。相信每位進入 SITCON 夏令營的學員及夥伴都值得被尊重，而我們亦將盡力提供最安全的環境，讓參與 SITCON夏令營的每個人能夠尊重個體間的差異、在社群中相互扶助、並鼓勵所有人揮灑屬於自己的生命色彩。因此，若有幸能在 SITCON 夏令營與您見面，無論您是以學員、贊助商、工作人員、或是講者的身份參加，我們都希望您配合。</p>
      <p>請遵守以下規則：</p>
      <ul>
        <li>尊重每一位參與者，將對方的感受放在心上。</li>
        <li>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢。</li>
        <li>多關心周遭的所有同伴，適度詢問對方是否需要協助。</li>
        <li>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助。</li>
        <li>在夏令營裡多交朋友，珍惜彼此相聚的時光！</li>
      </ul>
      <p>以下的行為是不被容忍的：</p>
      <ul>
        <li>針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯。</li>
        <li>任何形式的性騷擾、言語及肢體霸凌。</li>
        <li>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影。</li>
        <li>無故干擾課程、議程或活動的正常進行，無視工作人員或他人的制止。</li>
        <li>干擾、攻擊現場提供之網路，未經同意側錄封包或散佈隱私資訊。</li>
        <li>任何違反法律的行為。</li>
      </ul>
      <p>為了確保每位參與者的安全，我們將恪守以上規則。對於違反行為準則者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 夏令營工作人員的協助。我們誠摯的邀請來到 SITCON 夏令營的朋友一同履行以上承諾，將 SITCON 夏令營打造為更友善、溫暖的所在；讓每一位參與者，都能在夏令營的活動和相處中共同成長、在人與人的互動中找到自信⸺而這正是我們所珍惜、試圖給予所有學員的，屬於學生社群的真正精神。</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'coc'
}
</script>
<style lang="stylus">
#coc
  ul
    padding: 0

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

