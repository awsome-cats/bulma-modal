<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="isOpen = !isOpen" class="button is-primary is-outlined m-t-sm">プロフィール更新</button>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>  
</template>
