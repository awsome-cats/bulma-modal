<template>
  <div>
    <modal-panel
      ref="modalPanel"
      header="プロフィールを更新"
      :onModalSubmit="submitModal"
    >
      <!-- slotとして ここから -->
      <template #submit>
        <form>
          <div class="field">
            <label class="title">ニックネーム</label>
            <input
            v-model="form.nickname" 
            class="input">
          </div>
          
          <div class="field">
            <label class="title">
              タイプ
            </label>
            <div class="control">
              <div class="select">
                <select
                v-model="form.type">
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label 
            class="title">お住まいの国</label>
            <input
            v-model="form.country"
            class="input">
          </div>
          <div class="field">
            <label class="title">アドレス</label>
            <input
            v-model="form.address"
            class="input">
          </div>
          <div class="field">
            <label 
            class="title">電話番号</label>
            <input
            v-model="form.phone"
            class="input">
          </div>
          <div class="field">
            <label class="title">アバターURL</label>
            <input
            v-model="form.image"
            class="input">
          </div>
          <div class="field">
            <label class="title">本文</label>
            <input
            v-model="form.description"
            class="input">
          </div>
        </form>
      </template>
      <!-- slot ここまで -->
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
      form: {
        nickname: '',
        address: '',
        type: '',
        image: '',
        country: '',
        phone: '',
        description: ''
      },
      number: null,
      isOpen: false
    }
  },
  computed: {
    modal() {
      return this.$refs.modalPanel
    }
  },
  methods: {
    submitModal() {
      alert('form')
      console.log(this.form)
      this.modal.close()
    }
  }
}
</script>

<style>

</style>