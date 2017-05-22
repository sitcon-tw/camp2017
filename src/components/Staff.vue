<template>
  <div id="staff" class="container">
    <h1 class="title">共同主辦</h1>
    <ul id="organizer">
      <li>
        <a href="http://sitcon.org/2017/" target="_blank">
          <div class="img"><img src="/static/sitcon.png" alt=""></div>
          <span>SITCON 學生計算機年會</span>
        </a>
      </li>
      <li>
        <a href="http://ocf.tw/" target="_blank">
          <div class="img"><img src="/static/OCFLogo.png" alt="" /></div>
          <span>開放文化基金會</span>
        </a>
      </li>
      <li>
        <a href="http://www.cs.thu.edu.tw/" target="_blank">
          <div class="img"><img src="/static/cs-logo.jpg" alt="" /></div>
          <span>東海大學 資訊工程學系</span>
        </a>
      </li>
      <li>
        <a href="http://itservice.thu.edu.tw/" target="_blank">
          <div class="img"><img src="/static/itservice_logo.png" alt="" /></div>
          <span>東海大學 電子計算機中心</span>
        </a>
      </li>
    </ul>
    <h1 class="title">工作團隊</h1>
    <div class="content">
      <template v-for="team in staffs">
        <p class="teamMember"><span class="teamName">{{ team.name }} </span> {{ team.users.map(el => el.display_name).join('、') }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Staff',
  data () {
    return {
      staffs: []
    }
  },
  mounted () {
    let self = this
    axios.get('./static/staff.json').then((res) => {
      self.staffs = res.data
    })
  }
}
</script>

<style lang="stylus">
red = #e64a2c
dark-gray = #606060

#staff
  .title
    color: red
    border: 2px solid red

  .subtitle
    &:before
      color: red

  .teamName
    color: red
    text-indent: 0
    margin-right: .5rem

  .teamMember
    text-indent: -4rem
    overflow-wrap: break-word

#organizer
  display: flex
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap
  font-weight: 200
  width: 80%
  margin: 0 auto
  padding: 0

  li
    text-align: center
    list-style: none

    .img
        margin: .5em auto
        border: 2px solid white
        border-radius: 5px
        width: 240px
        height: 160px
        background-color: white
        display: flex
        align-items: center
        justify-content: center
        img
          max-width: 80%
          max-height: 80%

</style>
