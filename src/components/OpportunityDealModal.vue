<template>
  <modal-panel ref="modalPanel" header="メッセージ">
    
    <template #deal>
      <div class="info-container">
        <div class="info-heading">
          <p class="app-title">opptunityDealModal</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quos dignissimos in ex. Animi dolores, ut in porro officia fuga nisi corrupti ipsa natus. Sequi corporis modi incidunt voluptatum!</p>
          <div class="info-value">
            <div class="info-value-title">価格</div>
            <div class="info-value-money">¥1000</div>
          </div>
        </div>
      </div>
      <div class="info-container">
        <div class="info-heading">
          <p class="app-title">opptunityDealModal</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quos dignissimos in ex. Animi dolores, ut in porro officia fuga nisi corrupti ipsa natus. Sequi corporis modi incidunt voluptatum!</p>
          <div class="info-value">
            <div class="info-value-title">価格</div>
            <div class="info-value-money">¥2000</div>
          </div>
        </div>
      </div>
    </template>

    <template #openingElement>
      <button class="button offer is-warning is-outlined m-t-sm">オファーをみる</button>
    </template>
    
    <template #footerElement>
      <button @click="accepteOpportunity" class="button is-success">オファーを受ける</button>
      <button @click="declineOpportunity" class="button is-danger">オファーを辞退する</button>
      <button @click="() => modal.close()" class="button">閉じる</button>
    </template>
  </modal-panel>
</template>

<script>
import ModalPanel from './ModalPanel'
export default {
  components: {
    ModalPanel
  },
  computed: {
    modal() {
      return this.$refs.modalPanel
    }
  },
  methods: {
    accepteOpportunity (){
      alert('accept')
      this.modal.close()
    },
    declineOpportunity (){
      alert('decline')
      this.modal.close()
    }
  }
}
</script>

<style scoped>
.offer {
  margin-bottom: 20px;
}
</style>