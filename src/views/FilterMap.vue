<template>
  <div>
    filter & map practice
    <div v-for="v in mapResult" :key="v.id">
      {{v}}
    </div>
    <div v-for="res in Mapresponse" :key="res.id">
      {{res.name}} : {{res.value}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: [
        {
          'name':'abc',
          'value':100
        },
        {
          'name':'def',
          'value':50
        },
        {
          'name':'abc',
          'value':123
        },
        {
          'name':'abc',
          'value':100
        },
        {
          'name':'hij',
          'value':789
        },
        {
          'name':'def',
          'value':234
        }
      ],
      mapResult: [],
      Mapresponse: []
    }
  },
  methods: {
    // 重複したデータを排除して、値を足したオブジェクトを作成
    getData () {
      let sum = {}
      this.src.forEach(o => sum[o.name] = (sum[o.name] || 0) + o.value)
      let response = Object.keys(sum).sort((a,b) => a > b ? 1: -1)
      .map(name => ({
        name,
        value: sum[name]
      }))
      
      this.Mapresponse = response
    },
    
    newMapMethods() {
      /* eslint-disable */
      let map = new Map
      let results = []
      this.src.reduce((map, current) => {
        let name = current.name
       
        map.set(name, map.has(name) ? map.get(name) + current.value: current.value)
        return map
      }, map).forEach((value, key, map) => {
        results.push({
          name:key,
          value: value
        })
      }, results)
      this.mapResult = results
      // console.log(JSON.stringify([...map.entries()]))
      /* eslint-disable */
    }
  },
  mounted () {
    this.getData()
    this.newMapMethods()  
    this.mapResult
  }
}
</script>

<style>

</style>