<script setup lang="ts">
import Box from '../Parts/Box.vue'
import Hand from '../Parts/Hand.vue'
import { toRefs } from 'vue'

interface PropType {
  isHold?: boolean
  isRight?: boolean
  message?: string
}
const props = withDefaults(defineProps<PropType>(), {
  isHold: false,
  isRight: false,
  message: 'test'
})
const { isHold, isRight, message } = toRefs(props)

</script>

<template>
  <div class="boxWrap">
    <Box :message="message"></Box>
  </div>
  <div class="hand">
    <Hand :isHold="isHold" :isRight="isRight"></Hand>
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
