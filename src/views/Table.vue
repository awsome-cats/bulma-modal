<template>
  <table border="1">
    <thead>
      <tr>
        <th v-for="row_name in headers" :key="row_name">
            {{row_name}}
        </th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <slot v-bind:item="item">
          <td v-for="(value, index) in item" :key="index">
            {{ value }}
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array
    }
  }
}
</script>

<style>

</style>