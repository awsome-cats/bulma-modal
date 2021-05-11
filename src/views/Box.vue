<template>
  <div>
   <h1>Box</h1>
   <slot :boxStyle="boxStyle"></slot>
   <slot name="changeButton" v-bind:change="changeText"></slot>
   
  </div>
</template>

<script>
export default {
  name: 'Box',
  data () {
    return {
      boxStyle: {
        width:100 + 'px',
        height: 100 + 'px',
        backgroundColor: 'red'
      }
    }
  },
  methods: {
   changeText () {
    let text = document.getElementById('myId').innerText = 'Boxxxx!!!'
    return text
   }
  }
}
</script>

<style>

</style>