<template>
<div>
<!-- <div>
  <p @mousemove="mouseMovePosition(3, $event)">マウスをおいてください</p>
  <p>{{x}}: {{y}}</p>
  <p>{{count}}回クリックしています。</p>
  <button @click="doubledCount(3)">クリックしてください</button>
  <p>{{now}}</p>
  <button @click="openTimes">クリックして時刻を表示します</button>
  <p>{{message}}</p>
  <button v-on:click="onClickHandler($event, 'eventを渡します。')">クリックハンドラー</button>
</div> -->
  <div class="dials">
    <div v-for="n in 60" :key="n" :style="{'top':top(n) + 'px', 'left':left(n) + 'px', 'transform':'rotate('+ rotate(n)+ 'deg)'}" :class="['scale', {'fifth': n % 5 === 0}]">
      <p v-if="n % 5 == 0" :style="{'transform' : 'rotate(' + -rotate(n) +'deg)'}">
        {{ n / 5}}
      </p>
    </div>
    <p></p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
     x:0,
     y: 0,
     count: 0,
    now: '',
    message: ''
    }
  },
  mounted () {
  },
  methods: {
    onClickHandler (event,message) {
      this.message = message
      console.log(event.target.type)
    },
    mouseMovePosition(divide, event) {
      this.x = Math.ceil(event.clientX / divide)
      this.y = Math.round(event.clientY / divide)
    },
    doubledCount (time) {
      return this.count+=1 * time
    },
    openTimes () {
      const time = new Date().toLocaleString()
      this.now = time
    },
    top (val) {
      return 150 - Math.cos(Math.PI / 30 * val) * 150
    },
   left (val) {
     return 150 + Math.sin(Math.PI / 30 * val) * 150 
   },
   rotate (val) {
     return 6 * val
   }
  }
}
</script>

<style scoped>
.dails {
  background-color: #333;
  border-radius: 300px;
  height:300px;
  width: 300px;
  position: relative;
}
.scale {
  background-color: white;
  position: absolute;
  width: 4px;
  height: 10px;
  transform-origin: left top;
}

.fifth {
  width: 5px;
  height: 20px;
}
.fifth p {
  margin-top: 20px;
  margin-left: -15px;
}
</style>