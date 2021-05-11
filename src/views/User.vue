<template>
  <div>
   <h1>User</h1>

   <ul>
     <li>
       <slot :user="user" :number="number"
         v-bind:dobledNumber="dobledNumber">
      </slot>
      <slot name="actButton" v-bind:on="dobledNumber"></slot>
    </li>
    
   </ul>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
     user: {
       name: '小原健太',
       age: '40',
       gender: '男性'
     },
     number: 0
    }
  },
  
  methods: {
    dobledNumber () {
      this.number+=1
    }
  }
}
</script>

<style>

</style>