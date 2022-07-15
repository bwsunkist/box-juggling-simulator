<script setup lang="ts">
import Box from '../Parts/Box.vue'
import Hand from '../Parts/Hand.vue'
import Person from '../Parts/Person.vue'

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
  <div class="person">
    <Person></Person>
  </div>
  <div class="hand">
    <Hand isHold:false isRight:true></Hand>
  </div>
  <div class="hand">
    <Hand isHold:false isRight:false></Hand>
  </div>
</template>

<style scoped>
.allBoxWrap {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  z-index: 5;
  margin-top: 180px;
  justify-content: center;
  align-items: center;
}
.zoneWrap1 {
  width: fit-content;
  margin: 5px;
  padding: 0px;
  z-index: 5;
}
.boxWrap {
  width: fit-content;
  margin: 0px;
  padding: 0px;
}

.hand {
  z-index: 10;
}
.person {
  width: 150px;
  margin: -280px auto;
  z-index: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
