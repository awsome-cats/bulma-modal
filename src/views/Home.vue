<template>
  <div>
    <h1>Home</h1>
    <updateModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import updateModal from '@/components/UpdateModal'

export default {
  name: 'Home',
  components: {
    updateModal
  }
}
</script>
