<template>
  <div>
    <router-link to="/test">TestVmodel</router-link>
    <updateModal/>
    <opportunity-deal-modal/>
    <opportunity-accepted-modal/>
  </div>
</template>

<script>
// @ is an alias to /src
import updateModal from '@/components/UpdateModal'
import OpportunityDealModal from '@/components/OpportunityDealModal'
import OpportunityAcceptedModal from '@/components/OpportunityAcceptedModal'

export default {
  name: 'Home',
  components: {
    updateModal,
    OpportunityDealModal,
    OpportunityAcceptedModal
  }
}
</script>
