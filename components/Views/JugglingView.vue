<script setup lang="ts">
import Hand from '../Parts/Hand.vue'
import OperationButton from '../Parts/OperationButton.vue'
import BoxWithHand from '../Templates/BoxWithHand.vue'

const boxes = [
  {
    isHold: true,
    isRight: false,
    message: 'box1',
    rotate: true
  },
  {
    isHold: false,
    isRight: true,
    message: 'box2',
    rotate: false
  },
  {
    isHold: true,
    isRight: true,
    message: 'box3',
    rotate: false
  },
]

const leftHand = {
  isShow: false
}

const rightHand = {
  isShow: false
}

</script>

<template>
  <div class="jugglingArea">
    <div class="leftHand">
      <Hand :isHold="false" :isRight="false" v-show="leftHand.isShow"></Hand>
    </div>
    <div class="rightHand">
      <Hand :isHold="false" :isRight="true" v-show="rightHand.isShow"></Hand>
    </div>
    <div class="boxWrap">
      <div v-for="(box, index) in boxes" >
        <BoxWithHand :message="box.message" :isHold="box.isHold" :isRight="box.isRight" :rotate="box.rotate"></BoxWithHand>
      </div>
    </div>
    <div class="operationArea">
      <OperationButton :isRight="false"></OperationButton>
      <OperationButton :isRight="true"></OperationButton>
    </div>
  </div>
</template>

<style scoped>

.jugglingArea {
  width: 800px;
  height: 400px
}
.zoneWrap1 {
  width: fit-content;
  margin: 5px;
  padding: 0px;
  z-index: 5;
}
.boxWrap {
  display: flex;
  width: fit-content;
  margin: 0px;
  margin-top: 100px;
  margin-left: 155px;
  padding: 0px;
}

.leftHand {
  position: absolute;
  top: 30px;
  left: 215px;
}
.rightHand {
  position: absolute;
  top: 30px;
  left: 500px;
}

.operationArea {
  display: flex;
  width: fit-content;
  margin: 0px;
  margin-top: 30px;
  padding: 0px;
  gap: 100px;
}
</style>
