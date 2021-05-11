<template>
  <modal-panel
    :hideFooter="true"
    header="受け入れたオファー">
    <template #message>
      <div class="info-container">
        <div class="info-heading">
          <p class="app-title">opptunityDealModal</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quos dignissimos in ex. Animi dolores, ut in porro officia fuga nisi corrupti ipsa natus. Sequi corporis modi incidunt voluptatum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quos dignissimos in ex. Animi dolores, ut in porro officia fuga nisi corrupti ipsa natus. Sequi corporis modi incidunt voluptatum!</p>
          <div class="info-value">
            <div class="info-value-title">価格</div>
            <div class="info-value-money">¥300</div>
          </div>
        </div>
      </div>
    </template>
    <template #openingElement>
      <button class="button is-info is-outlined m-t-sm">コンタクトをとる</button>
    </template>
  </modal-panel>
</template>

<!-- 送信イベントはない -->

<script>
import ModalPanel from './ModalPanel'
export default {
  components: {
    ModalPanel
  }
}
</script>

<style>

</style>