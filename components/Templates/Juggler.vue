<script setup lang="ts">
import Box from '../Parts/Box.vue'
import Hand from '../Parts/Hand.vue'
import Parson from '../Parts/Parson.vue'

</script>

<template>
  <div class="allBoxWrap">
    <div class="zoneWrap1">
      <div class="boxWrap">
        <Box message='1'></Box>
      </div>
    </div>
    <div class="zoneWrap1">
      <div class="boxWrap">
        <Box message='2'></Box>
      </div>
    </div>
    <div class="zoneWrap1">
      <div class="boxWrap">
        <Box message='3'></Box>
      </div>
    </div>
  </div>
  <Hand isHold:false isRight:true></Hand>
  <Person></Person>
</template>

<style scoped>
.allBoxWrap {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 3000px;
}
.zoneWrap1 {
  width:fit-content;
  margin: 5px;
  padding: 0px;
}
.boxWrap {
  width:fit-content;
  margin: 0px;
  padding: 0px;
}
</style>
