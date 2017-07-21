<template>
  <section id="course" class="container">
    <h1 class="title twotitle">課程</h1>
    <table id="timetable">
      <thead>
        <tr>
          <td></td>
          <td>Day 1</td>
          <td>Day 2</td>
          <td>Day 3</td>
          <td>Day 4</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>07:00
              <br>~
              <br>07:30</p>
          </td>
          <td rowspan="2" class="common">
            <p>傳送門已開啟</p>
            <p class="sub">移動</p>
          </td>
          <td class="common">
            <p>迎接太陽之光</p>
          </td>
          <td class="common">
            <p>自我升級完成</p>
          </td>
          <td rowspan="2" class="common">
            <p>養精蓄銳</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>07:30
              <br>~
              <br>09:00</p>
          </td>
          <td class="activity">
            <p>陌生人的禮物</p>
            <p class="sub">Bot Game</p>
          </td>
          <td class="activity">
            <p>奇妙際遇</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>09:00
              <br>~
              <br>10:00</p>
          </td>
          <td class="activity">
            <p>迎接新世界</p>
            <p class="sub">開幕＆報到</p>
          </td>
          <td class="cursor course" rowspan="4" @click="showLightBox($event, 1)" >
            <p>神秘的修業</p>
            <p class="sub">
              HTTP、RESTful 觀念與實作
            </p>
          </td>
          <td rowspan="4" class="activity">
            <p>傳承</p>
            <p class="sub">
              視界咖啡館
            </p>
          </td>
          <td rowspan="2" class="activity">
            <p>榮耀的盡頭</p>
            <p class="sub">
              黑客松
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>10:00
              <br>~
              <br>11:00</p>
          </td>
          <td rowspan="3" class="activity">
            <p>新的邂逅</p>
            <p class="sub">破冰活動</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>11:00
              <br>~
              <br>11:30</p>
          </td>
          <td class="cursor course" @click="showLightBox($event, 7)" >
            <p>遙遠的記憶</p>
            <p class="sub">SITCON 2017 論壇系統</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>11:30
              <br>~
              <br>12:00</p>
          </td>
          <td class="cursor course" @click="showLightBox($event, 8)" >
            <p>最後的魔法</p>
            <p class="sub">AI</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>12:00
              <br>~
              <br>13:30</p>
          </td>
          <td colspan="4" class="common">
            <p>暴風雨前的寧靜</p>
            <p class="sub">午餐</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>13:30
              <br>~
              <br>15:30</p>
          </td>
          <td class="cursor course" rowspan="2" @click="showLightBox($event, 0)">
            <p>魔法師之路</p>
            <p class="sub">Python 3</p>
          </td>
          <td class="cursor course" rowspan="2" @click="showLightBox($event, 2)">
            <p>魔法師之路 II</p>
            <p class="sub">Python 3 × HTTP</p>
          </td>
          <td class="cursor course" rowspan="2" @click="showLightBox($event, 4)">
            <p>尼斯的手冊</p>
            <p class="sub">Telegram Chatbot</p>
          </td>
          <td class="activity">
            <p>黃金的光輝</p>
            <p class="sub">黑客松發表</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>15:30
              <br>~
              <br>16:30</p>
          </td>
          <td rowspan="2" class="activity">
            <p>一切的真相</p>
            <p class="sub">閉幕</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>16:30
              <br>~
              <br>17:00</p>
          </td>
          <td class="common">
            <p>尋找自我</p>
          </td>
          <td  class="cursor course" @click="showLightBox($event, 3)">
            <p>源力之美</p>
            <p class="sub">開源社群精神</p>
          </td>
          <td class="cursor course" rowspan="2" @click="showLightBox($event, 5)">
            <p>突如其來的訪客</p>
            <p class="sub">網頁（前端）是什麼</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>17:00
              <br>~
              <br>18:00</p>
          </td>
          <td class="common">
            <p>與市長的會面</p>
            <p class="sub">晚餐</p>
          </td>
          <td rowspan="4" class="activity">
            <p>魔法師的宴會</p>
            <p class="sub">晚餐＆社群闖關</p>
          </td>
          <td rowspan="5" class="common">
            <p>無悔的選擇</p>
            <p class="sub">返家</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>18:00
              <br>~
              <br>19:00</p>
          </td>
          <td rowspan="3" class="activity">
            <p>無法逃離的背叛</p>
          </td>
          <td class="cursor course" @click="showLightBox($event, 6)">
            <p>與黑魔法師的約會</p>
            <p class="sub">資訊安全</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>19:00
              <br>~
              <br>20:00</p>
          </td>
          <td class="common">
            <p>謀略之夜</p>
            <p class="sub">晚餐</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>20:00
              <br>~
              <br>21:00</p>
          </td>
          <td rowspan="2" class="activity">
            <p>突擊</p>
            <p class="sub">黑客松</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>21:00
              <br>~
              <br>22:00</p>
          </td>
          <td class="common">
            <p>絕望中的微微亮光</p>
            <p class="sub">宵夜</p>
          </td>
          <td class="activity">
            <p>謊言與真相</p>
            <p class="sub">神秘活動＆宵夜</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="subtitle bluecar">廣度課程與短講</h2>
    <div class="content">
      <p>今年夏令營有別於往年的單一教學方式，而是在不影響一般課程的情況，安排一些廣度課程，讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。 除基礎課程與廣度課程外，我們也邀請到許多在資訊領域打滾多年的人士分享自身經驗，期許迷茫中的學員，可以點燃未來的一盞明燈，在資訊道路上有前進的動力及方向。</p>
    </div>
    <h2 class="subtitle redcar">社群闖關</h2>
    <div class="content">
      <p>社群闖關邀請到許多資訊相關社群前來擺攤，藉由互動遊戲、影片欣賞、專人介紹...等方式，讓學員認識所謂「社群」，並對開源活動有初步了解。 去年的夏令營我們請來台大開源社、MozTW、Ubuntu-tw、TDOH、OSSACC、HITCON、HITCON GIRLS、H4、TOSSUG等社群，今年社群名單敬請期待。</p>
    </div>
    <h2 class="subtitle bluecar">視界咖啡館</h2>
    <div class="content">
      <p>視界咖啡館參考自世界咖啡館（The World Café），在本次夏令營中，我們邀請到各領域及社群前輩，將傳統座談會形式改以小組討論的樣貌呈現，並與學員分享工作經驗、學習過程、面對困難的解決方式或希望給予 SITCON 夏令營學員的建議，提出值得學員思考、了解的觀點。期望透過縮短講師及學員間的距離，鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。</p>
    </div>
    <h2 class="subtitle redcar">Hackathon</h2>
    <div class="content">
      <p>黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）跟「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松。由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。</p>
      <p>今年， SITCON 夏令營將為學員打造一場專屬的小型黑客松，取代傳統的晚會、唱歌跳舞等活動，以小隊為單位，在吃吃喝喝的同時，一起發揮創意、運用課程中所學，做出與眾不同的作品呈現！</p>
    </div>

    <Fancybox v-if=" showFancyBox " @close=" showFancyBox = false ">
      <div class="btn-close" @click=" showFancyBox = false "><i class="fa fa-times fa-lg" aria-hidden="true"></i></div>
      <h1 class="title">{{ boxContent.title }}</h1>
      <p v-for="(paragraph, index) in boxContent.introduction" class="content" :key="index">{{ paragraph }}</p>
      <div v-for="(speaker, index) in boxContent.speakers" :key="index">
        <h2 class="subtTtle">{{index === 0 ? "講師 - " : "助教 - "}} {{ speaker.name }}</h2>
        <p class="content">{{ speaker.introduction }}</p>
      </div>
    </Fancybox>

  </section>
</template>

<script>
import Fancybox from './Fancybox'
export default {
  name: 'Course',
  components: {
    Fancybox
  },
  data () {
    return {
      courses: [
        {
          title: 'Python 3',
          subTitle: '魔法師之路 I',
          speakers: [{
            name: '維尼',
            introduction: '台灣教育體制的逃兵'
          }],
          introduction: 'Python 介紹特性及安裝\n資料型態\n程式流程控制\n函數自定義及使用\n常用函式庫介紹及安裝'
        },
        {
          title: 'HTTP、RESTful 觀念與實作',
          subTitle: '神秘的修業',
          speakers: [{
            name: 'Denny Huang',
            introduction: 'SITCON 學生計算機年會共同發起人，2013 及 2014 年會總召，目前於雷亞遊戲（Rayark Inc.）擔任遊戲後端工程師；在正規教育中特例獨行，妄想透過改善教育讓台灣更進步，崇尚開源精神，熱愛使用者界面 (UI) 以外的多種技術。'
          }],
          introduction: '每天你在手機滑著 Facebook App，又或是在電腦上打開瀏覽器逛著各種網頁，你是否有想過這些內容是如何呈現在你的眼前？聽到伺服器這個詞，你想到了什麼？架伺服器真的有這麼困難？到底伺服器要做什麼事情？這堂課程將帶你看透一切，過去對你來說或許是黑魔法的未知領域，在課程過後相信你對世界會有嶄新的看法！'
        },
        {
          title: 'Python3 × HTTP',
          subTitle: '魔法師之路 II',
          speakers: [{
            name: '維尼',
            introduction: '台灣教育體制的逃兵'
          }],
          introduction: '如何閱讀函式庫官方文件\n找出臭蟲(DEBUG)'
        },
        {
          title: '開源社群精神',
          subTitle: '源力之美',
          speakers: [{
            name: '陳立函 nfsnfs',
            introduction: '化工學士與資工碩士、博士，目前於工研院資通所服務，平時會參與或籌辦 COSCUP、openSUSE.zh_TW與 g0v summit 的活動，open source 志工，平時研究領域包括作業系統、資訊安全與行動安全。'
          }],
          introduction: '在這個簡短的 talk，講者會帶大家了解開源是什麼？什麼是自由軟體？身為一個躍躍欲試的新手，又該怎麼參與開源活動，能幫上什麼忙呢？並分享講者自己從一般參與者到擔任 COSCUP 2016 行政組長的心得和經驗。'
        },
        {
          title: 'Telegram Chatbot',
          subTitle: '尼斯的手冊',
          speakers: [{
            name: '倪鈵斯',
            introduction: '即將從台科大資管系畢業。因對從小到大對地理有興趣所以大學以後很開心的選修了地理系的課，沒想到到了地理系卻寫了更多的程式。目前專注於GPU平行加速應用在地理資料空間運算上。\n曾經在數個課程中擔任Python程式助教（DSP智庫驅動資料工程師課程、台科大程式設計研究社等）；設計過「魯蛇」聊天機器人。'
          }, {
            name: '楊景翔',
            introduction: '講師邀請教學經驗豐富的景翔同學協助課程的開發。他曾經在台科大程式設計研究社中擔任Javascript講師；目前正在「橘子蘋果兒童程式學苑」設計國中小學生也能學習的程式設計教材，他同時也是該課程的種子教師。'
          }],
          introduction: '你對於聊天機器人有什麼想像呢？ 你希望機器人可以提醒你接下來的行程、提供你有用的生活資訊、讓你跟你的朋友們一起進行機智問答；或者是像人類一樣的進行對話？前三項，我們將它稱之為任務型機器人；最後一項，則稱之為會話型機器人。  在正式課程之前，講師會先針對以上兩種機器人進行非常簡單的介紹，並在後續課程中以任務型機器人為主軸，指導大家如何閱讀Telegram API文件，動手設計一個可以收發訊息、提供按鈕等互動的機器人。'
        },
        {
          title: '網頁（前端）是什麼',
          subTitle: '突如其來的訪客',
          speakers: [{
            name: 'Zorro',
            introduction: 'Zorro ，社群人稱小馬，是個原本是個麵包師父，後來半路出家成為野生的前端工程師'
          }],
          introduction: '何謂前端? 為什麼我需要懂前端?\n現代前端網頁前端三兄弟 (HTML、CSS、JavaScript ) 與他們眾多的的快樂夥伴們 (Jade SCSS React ..etc)'
        },
        {
          title: '資訊安全',
          subTitle: '與黑魔法師的約會',
          speakers: [{
            name: 'HrJ',
            introduction: '台灣校園間最大的資訊安全社群 TDOHacker 的創辦人兼現任萬年總召，平常遊走於各校園中致力於推廣資訊安全、培育資安人才與輔導校園資安社群。目前於與夥伴創立的資安新創公司 Leukocyte-Lab 擔任COO。'
          }],
          introduction: '每日身處於資訊社會，我們卻時常不知生活上的資安風險為何。本場講座將以生活中常見的資安風險為主題來簡單介紹如何在資訊海洋中保護自己，同時介紹相關資安社群與學習資源，期望讓學生們皆能具備具備簡單的個人資安防護知識。'
        },
        {
          title: 'SITCON 2017 論壇系統',
          subTitle: '遙遠的記憶',
          speakers: [{
            name: 'Jeremy Yen',
            introduction: '從高中開始接觸網頁與程式設計，曾參加過資訊能力競賽，喜愛嘗試新技術、接觸不同領域的人，也熱愛閱讀和旅行。大學時曾在一家中小企業開發過企業資安軟體，也曾在 KPMG 顧問部門實習。不過最後還是發現自己比較喜歡 Coding，所以目前在 Glossika 萬語科技擔任 Full Stack Developer。'
          }],
          introduction: '短講中將分享我和 PCC 開發 SITCON 2017 論壇發言系統的過程，內容將涵蓋事前規劃，需求發想和確認，以及選用技術的考量，開發、協作時遇到的問題，以及最後上線前的測試和準備。如果有足夠時間也會順便提及一些技術上該注意的細節。'
        },
        {
          title: 'AI',
          subTitle: '最後的魔法',
          speakers: [{
            name: '陳哲雋（阿哲）',
            introduction: '爆肝中的耍廢研究生，主要研究領域是資訊教育，另外有許多<del>不務正業</del>業餘的愛好\n對於推廣資訊領域有相當熱忱，也喜歡和大家交流'
          }],
          introduction: '人工智慧已成為現今最熱門話題之一，到底什麼才算是人工智慧？人工智慧有哪些方法？如何入門？\n演講將藉由講者大學專題製作格鬥遊戲人工智慧並參與比賽之經驗，說明人工智慧要如何入門以及相關技術或方法'
        }
      ],
      boxContent: {
        title: '',
        subTitle: '',
        speaker: {
          name: '',
          introduction: ''
        },
        introduction: '',
        active: false
      },
      showFancyBox: false
    }
  },
  methods: {
    showLightBox (e, index) {
      if (index < this.courses.length) {
        let course = this.courses[index]
        this.boxContent.title = course.title
        this.boxContent.subTitle = course.subTitle
        this.boxContent.speakers = course.speakers
        this.boxContent.introduction = course.introduction.split('\n')
        this.showFancyBox = true
      }
    }
  },
  watch: {
    showFancyBox: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        window.document.body.classList.toggle('isShowFancyBox')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
white = #f8fcf6
black = #27282D
red = #e64a2c
gray = #3f4048

.btn-close
  margin: 1rem
  @media screen and (min-width: 768px)
    float: right
  @media screen and (max-width: 765px)
    position: fixed
    right: 0

#timetable
  margin: 0 auto
  text-align: center
  background-color: black
  font-size: 1rem
  color: white
  max-width: 720px
  border-spacing: 0
  border-collapse: collapse

  tr:nth-child(even)
    background-color: gray

  tr:nth-child(odd)
    background-color: light-gray

  tr:first-child
    background-color: black

  td:not(:first-child)
    width: 22%

  td
    height: 3em
    box-shadow: 0 0 0 1px white inset
    &.common
      background-color: rgb(41, 90, 38)
    &.activity
      background-color: rgb(77, 146, 74)
    &.course
      background-color: rgb(118, 186, 89)

    .sub
      opacity: .8

.redcar
  text-align: center
  &:before
    content: ''
  &:after
    content: ''
    vertical-align: -20%;
    display: inline-block
    background-image: url('../assets/red-car.svg')
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    width: 3rem
    height: 1.6rem
    margin-left: 0.5rem
    position: absolute
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
    margin-left: -3.5rem
    margin-top: 0.2rem
    position: absolute
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
    margin-left: -2.5rem
.cursor
  cursor: url(../assets/talk.png) 12 12,alias
</style>
