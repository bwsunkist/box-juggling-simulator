<script setup lang="ts">
import Box from '../Parts/Box.vue'
import Hand from '../Parts/Hand.vue'
import { toRefs } from 'vue'

interface PropType {
  isHold?: boolean
  isRight?: boolean
  message?: string
  rotate?: boolean
}
const props = withDefaults(defineProps<PropType>(), {
  isHold: false,
  isRight: false,
  message: 'test',
  rotate: false
})
const { isHold, isRight, message, rotate } = toRefs(props)

</script>

<template>
  <div :class="{ allWrap: true, holdRotate: rotate&&isHold, notHoldRotate: rotate&&!isHold }">
    <div class="boxWrap">
      <Box :message="message"></Box>
    </div>
    <div class="hand" :class="{ hand: true, handHold: isHold, handNotHold: !isHold }">
      <Hand :isHold="isHold" :isRight="isRight"></Hand>
    </div>
  </div>
</template>

<style scoped>
.allWrap {
  margin: 0px;
  padding: 0px;
  width: fit-content;
}
.holdRotate {
  transform:rotate(180deg);
  transform-origin: 50% 210%;
}
.notHoldRotate {
  transform:rotate(180deg);
  transform-origin: 50% 50%;
}
.boxWrap {
  width: fit-content;
  margin: 0px;
  margin-top: 30px;
  padding: 0px;
}

.hand {
  z-index: 10;
  width: fit-content;
  margin: 0px;
  padding: 0px;
}
.handHold {
  margin-top: -120px;
  margin-left: 45px;
}
.handNotHold {
  display: none;
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
