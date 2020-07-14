<template>
  <div>
    <button @click="isOpen = !isOpen" class="button is-primary is-outlined m-t-sm">プロフィール更新</button>
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">プロフィール</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        <!-- slot -->
        <slot/>
        </section>
        <footer class="modal-card-foot">
          <button 
          @click="submintModal"
          class="button is-success">Save changes</button>
          <button @click="isOpen = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
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