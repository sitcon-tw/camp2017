<template>
  <section id="staff" class="container">
    <h1 class="title fourtitle reversetitle">工作團隊</h1>
    <div class="content">
      <template v-for="team in staffs">
        <p class="teamMember"><span class="teamName">{{ team.name }} </span> {{ team.users.map(el => el.display_name).join('、') }}</p>
      </template>
    </div>
  </section>
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
  .teamName
    text-indent: 0
    margin-right: .5rem

  .teamMember
    margin-left: 4rem
    text-indent: -4rem
    overflow-wrap: break-word
    text-align: left 

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
