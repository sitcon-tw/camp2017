<template>
  <section id="about" class="container">
    <h1 class="title sixtitle reversetitle longTitle">關於 SITCON 夏令營</h1>
    <div class="content">
      <p>資訊領域逐漸成為科技時代的重要學門，社群與開源精神亦持續抬頭，SITCON 認為將資訊教育向下扎根，播灑開源種子，為在資訊科學領域有興趣的學生提供一個親切而良好的入門機會是一件十分重要的事情。</p>
      <p>2014年迄今，SITCON 夏令營已邁入第四屆，前幾年營隊的課程涵蓋了許多不同的程式語言及知識，除了課程之外，我們更設計了社群闖關、視界咖啡館、黑客松等豐富活動，讓學員能充分吸收新知、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。</p>
      <p>今年我們將營隊拉到台中，於東海大學舉辦 SITCON 夏令營，營期間將帶各位進入 SITCON 開源城，以「踏入資訊域，放眼開源界」為主軸去設計豐富且多元的課程，其中將會有實際學習 Python 語言，並進一步自製聊天機器人的實作課程，也有讓學員認識社群精神、開源文化、資訊安全等廣度課程；除了課程之外，我們也會為學員帶來前段提到的精彩活動，絕對能讓每一個人大開眼界。開源城藏著許許多多的驚喜，期待著各位學員進入我們的城市探險，挖掘出屬於你們的資訊寶藏。</p>
    </div>
    <h2 class="subtitle">適合參加族群</h2>
    <div class="content">
      <p>本次夏令營適合參加的族群為涉入資訊領域未深的學生，今年課程有別於往年，我們降低課程難度，採用適合新手的Python 程式語言，透過結合生活中時常接觸的通訊軟體，讓對資訊有興趣的學員，在參加完夏令營後可以學到基礎的程式設計，藉此打開通往資訊領域的大門。</p>
      <p>由於我們招收的族群主要是學生，故營期內也會邀請知名人士分享自身一路走來的故事，並讓學員有機會和這些平時較難接觸到的人近距離交談，期望學員在學習技術之餘，也能點燃指引未來的明燈。</p>
    </div>
    <h1 class="title sixtitle">關於 SITCON</h1>
    <div class="content">
      <p>2012 年中，一群學生在社群浪潮中為相同的理想聚集，秉持「以學生為本、由學生自發舉辦」的核心理念，SITCON 學生計算機年會及同名社群自 2013 年起，陸續舉行年會、定期聚、黑客松、工作坊、夏令營與多場演講，於技術交流之餘，亦在推廣資訊及開源教育上不遺餘力，希望透過技術與知識的激盪，給予學生們一個用自身力量實踐夢想的舞台。</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="stylus">
blue = #35b4b8
white = #f8fcf6

#about
  &:before
    content: ''
    display: block
    background-image: url('../assets/2017SC1.png')
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    width: 15rem
    height: 30rem
    margin-left: -15rem
    margin-top: 8rem
    position: absolute
    z-index: 1

  
  .subtitle
    text-align: center
    &:before
      content: ''
      display: inline-block
      background-image: url('../assets/red-car.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 3rem
      height: 1.6rem
      margin-left: -3.5rem
      margin-top: 0.2rem
      position: absolute
      z-index: 1

  .sixtitle
    position: relative
    margin-bottom: 4rem
    &:before
      content: ''
      display: inline-block
      background-image: url('../assets/sixTitle.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 40rem
      max-width: 90vw
      height: 8rem
      position: absolute
      top: 50%
      left: 50%
      z-index: 1
      transform: translate(-50%, -50%)
    &.longTitle:before
      @media screen and (max-width: 600px)
        transform: translate(-50%, -20%)


  .reversetitle
    &:before
      transform:scaleX(-1) translate(50%, -50%)
      filter:FlipH
      margin-left: -2rem


</style>
