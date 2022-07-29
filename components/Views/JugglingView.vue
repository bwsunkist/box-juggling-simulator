<script setup lang="ts">
import Hand from '../Parts/Hand.vue'
import OperationButton from '../Parts/OperationButton.vue'
import BoxWithHand from '../Templates/BoxWithHand.vue'
import { ref, reactive } from 'vue'

const boxes = reactive([
  {
    isHold: true,
    isRight: false,
    message: 'box1',
    rotate: false
  },
  {
    isHold: false,
    isRight: false,
    message: 'box2',
    rotate: false
  },
  {
    isHold: true,
    isRight: true,
    message: 'box3',
    rotate: false
  },
])

let isShowLeftHand = ref<boolean>(false)
let isShowRightHand = ref<boolean>(false)

const release = (isRight: boolean) => {
  if (isRight) {
    isShowRightHand.value = true
  } else {
    isShowLeftHand.value = true
  }
  boxes.forEach((box, index) => {
    if (box.isHold && isRight === box.isRight) {
      boxes[index].isHold = false
      boxes[index].isRight = false
    }
  })
}

const twist = (isRight: boolean) => {
  boxes.forEach((box, index) => {
    if (box.isHold && isRight === box.isRight) {
      boxes[index].rotate = !boxes[index].rotate
    }
  })
}

const dragHand = (event, isRight: boolean) => {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.setData('dragHand', isRight ? 'rightHand' : 'leftHand')
}
const dropObject = (event, dropCategory) => {
  const dragHandEvt = event.dataTransfer.getData('dragHand')
  const dragBoxEvt = event.dataTransfer.getData('dragBox')
  const targetBox = dropCategory

  if (dragHandEvt) {
    // dropCategory を確認
    boxes.forEach((box, index) => {
      if (box.message === targetBox && !box.isHold) {
        boxes[index].isHold = true
        if (dragHandEvt === 'rightHand') {
          isShowRightHand.value = false
          boxes[index].isRight = true
        }
        if (dragHandEvt === 'leftHand') {
          isShowLeftHand.value = false
          boxes[index].isRight = false
        }
      }
    })
  } else if (dragBoxEvt) {
    // TODO
  }
}
</script>

<template>
  <div class="jugglingArea">
    <div class="leftHand">
      <Hand :isHold="false" :isRight="false" v-show="isShowLeftHand" :draggable="true" @dragstart="dragHand($event, false)"></Hand>
    </div>
    <div class="rightHand">
      <Hand :isHold="false" :isRight="true" v-show="isShowRightHand" :draggable="true" @dragstart="dragHand($event, true)"></Hand>
    </div>
    <div class="boxWrap">
      <div v-for="(box, index) in boxes" @drop="dropObject($event, `box${index + 1}`)" @dragover.prevent @dragenter.prevent>
        <BoxWithHand :message="box.message" :isHold="box.isHold" :isRight="box.isRight" :rotate="box.rotate" :draggable="box.isHold"></BoxWithHand>
      </div>
    </div>
    <div class="operationArea">
      <OperationButton :isRight="false" @release="release(false)" @twist="twist(false)"></OperationButton>
      <OperationButton :isRight="true" @release="release(true)" @twist="twist(true)"></OperationButton>
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
