<template>
  <div>
    <modal-panel>
      <!-- ここから -->
      <form>
        <div class="field">
          <label class="title">ニックネーム</label>
          <input 
          class="input">
        </div>
        <div class="field">
          <label class="title">アドレス</label>
          <input 
          class="input">
        </div>
        <div class="field">
          <label 
          class="title">お住まいの国</label>
          <input
          class="input">
        </div>
        <div class="field">
          <label 
          class="title">電話番号</label>
          <input
          class="input">
        </div>
        <div class="field">
          <label class="title">アバターURL</label>
          <input 
          class="input">
        </div>
        <div class="field">
          <label class="title">本文</label>
          <input 
          class="input">
        </div>
      </form>
    </modal-panel>
  </div>
</template>

<script>
import ModalPanel from '@/components/ModalPanel'
export default {
  components: {ModalPanel},
  data() {
    return {
      // isOpen: false,
      number: null
    }
  },
  methods: {
    async submintModal () {
      await setTimeout(() => {
        console.log('submit')
      }, 500, this.closeTime())
      
    },
    closeTime() {
      setTimeout(() => {
      this.isOpen = false
      }, 1000)
    }
  }
}
</script>

<style>

</style>