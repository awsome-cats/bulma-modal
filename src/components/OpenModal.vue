<template>
  <div>
    <div id="overlay">
      <div id="content" v-on:click="stopEvent">
        <slot></slot>
        <p><button v-on:click="clickEvent">閉じる</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvent () {
      this.$emit('from-child')
    },
    stopEvent () {
      event.stopPropagation()
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