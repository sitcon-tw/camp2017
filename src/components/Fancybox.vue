<template>
  <div id="fancyBox">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fancyBox'
}
</script>
<style lang="stylus" scoped>
.modal-mask
  position: fixed
  z-index: 9999
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, .3)
  transition: opacity .3s ease
  display: table

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  margin: auto
  background-color: #fff
  overflow-y: scroll
  &::-webkit-scrollbar { 
    display: none
  }
  @media screen and (max-width: 765px)
    width: 100%
    height: 100%
  @media screen and (min-width: 768px)
    border-radius: 2rem
    max-width: 800px
    width: 80vw
    height: 70vh

.modal-body
  padding: 2rem
</style>
