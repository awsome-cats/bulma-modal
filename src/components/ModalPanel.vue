<template>
  <div>
    <!-- オファーをみる -->
    <div 
      v-if="$slots.openingElement"
      @click="open"
      >
      <slot name="openingElement"></slot>
    </div>
    <!-- オファーをみる -->
    
    <button v-else
      @click="open" 
      class="button profile is-primary is-outlined m-t-sm">
      プロフィール更新
    </button>
    
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{header}}</p>
          <button
            @click="close"
            class="delete"
            aria-label="close"></button>
        </header>

        
        
        <section class="modal-card-body">
        <!-- slot: form  -->
          <slot name="submit"/>
        </section>
        <!-- slot: form  -->

        <!-- slot -->
        <section class="modal-card-body">
          <slot name="message"></slot>
        </section>
        <!-- slot -->

        <!-- slot -->
        <section class="modal-card-body">
          <slot name="deal"></slot>
        </section>
        <!-- slot -->


        <!-- deal button -->
        <footer v-if="!hideFooter" class="modal-card-foot">
          <div v-if="$slots.footerElement">
            <slot name="footerElement"></slot>
          </div>
          <!-- form botton -->
          <div v-else>
            <button
            @click="submitModal"
            type="submit"
            class="button is-success">送信</button>
          <button @click="close" class="button">キャンセル</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onModalSubmit: {
      type: Function,
      required: false
    },
    header: {
      type: String,
      default: 'プロフィールを更新'
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    submitModal() {
      this.onModalSubmit(() => this.isOpen = false)
    },
    close () {
      this.isOpen = false
    },
    open () {
      this.isOpen = true
    }
  }
  
}
</script>

<style scoped>
.profile {
  margin: 20px 20px;
}
</style>