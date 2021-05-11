<template>
  <div>
    <button v-on:click="openModal" >クリック</button>
    <Open-modal 
      v-show="showContent" v-on:from-child="closeModal">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quos dignissimos in ex. Animi dolores, ut in porro officia fuga nisi corrupti ipsa natus. Sequi corporis modi incidunt voluptatum!</p>
      <div class="info-value">
        <div class="info-value-title">価格</div>
        <div class="info-value-money">¥1000</div>
      </div>
    </Open-modal>
  </div>
    

</template>

<script>
import OpenModal from './OpenModal'
export default {
  components: {
    OpenModal
  },
  data () {
    return {
      showContent: false
    }
  },
  methods: {
    openModal () {
      this.showContent = true
    },
    closeModal () {
      this.showContent = false
    }
  }
}
</script>

<style scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display:flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width:50%;
  padding: 1em;
  background:#fff;
}
</style>