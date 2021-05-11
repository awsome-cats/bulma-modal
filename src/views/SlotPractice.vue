<template>
  <div>
    <User>
      <template v-slot="{user, number}">
        {{ user.name}}
      初期値:{{number}}
      </template>
      
      <template v-slot:actButton="{on}">
        <button v-on:click="on">+1</button>
      </template>
    </User>
    
    
    <Box>
      <template v-slot="{boxStyle}">

        <div :style="{'width': boxStyle.width, 'background-color': boxStyle.backgroundColor, 'height': boxStyle.height}">
          <p id="myId">BOX</p>
        </div>
      </template>
      
      <template v-slot:changeButton="{change}">
        <div class="box">
          <button v-on:click="change">クリックしてください</button>
        </div>
      
      </template>
      
    </Box>
    <Table :headers="headers" :items="items">
      <template v-slot:default="{ item }">
        <td>{{item.id}}</td>
        <td>{{item.firstName}} {{item.lastName}}</td>
        <td>{{item.email}}</td>
      </template>
    </Table>

    <Posts>
      <template #title>
        <h1>Hello vue.js</h1>
      </template>
      I'd like to know about $vm.slots
    </Posts>
  </div>
</template>

<script>
import User from './User'
import Box from './Box'
import Table from './Table'
import Posts from './Posts'
export default {
  components: {
    User,
    Box,
    Table,
    Posts
  },
  data () {
    return {
      headers:['ID','NAME', 'EMAIL'],
      items: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com'
        },
        {
          id: 2,
          firstName: 'Kevin',
          lastName: 'Wood',
          email: 'kevin@example.com'
        },
        {
          id: 3,
          firstName: 'Harry',
          lastName: 'Bosch',
          email: 'harry@example.com'
        },

      ]
    }
  }
}
</script>

<style scoped>
.box {
 font-size: 30px;
 color: blue;
}
</style>>

