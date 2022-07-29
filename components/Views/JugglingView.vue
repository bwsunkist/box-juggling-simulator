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

const dragBox = (event, boxIndex: number) => {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.setData('dragBox', boxIndex)
}

const dropObject = (event, dropBoxIdx: number) => {
  const dragHandEvt = event.dataTransfer.getData('dragHand')
  const dragBoxEvt = event.dataTransfer.getData('dragBox')

  if (dragHandEvt) {
    hangBox(dragHandEvt, dropBoxIdx)
  } else if (dragBoxEvt) {
    // TODO
    replaceBox(dragBoxEvt, dropBoxIdx)
  }
}

const hangBox = (dragHandEvt: string, targetBoxIdx: number) => {
  if (boxes[targetBoxIdx].isHold) return

  boxes[targetBoxIdx].isHold = true
  if (dragHandEvt === 'rightHand') {
    isShowRightHand.value = false
    boxes[targetBoxIdx].isRight = true
  }
  if (dragHandEvt === 'leftHand') {
    isShowLeftHand.value = false
    boxes[targetBoxIdx].isRight = false
  }
}

const replaceBox = (dragBoxEvt: number, targetBoxIdx: number) => {
  const idxAbsDiff = Math.abs(dragBoxEvt - targetBoxIdx)
  if (idxAbsDiff === 0 ) {
    return
  } else if (idxAbsDiff === 1) {
    // 単純に入れ替える
    const tmp = boxes[dragBoxEvt]
    boxes[dragBoxEvt] = boxes[targetBoxIdx]
    boxes[targetBoxIdx] = tmp
  } else {
    // 端から端へ移動する
    const idxDiff = dragBoxEvt - targetBoxIdx
    // TODO ベタ書きやめる
    if (idxDiff > 0) {
      // dragBoxEvt = 2, targetBoxIdx = 0 のとき
      const tmp = boxes[2]
      boxes[2] = boxes[1]
      boxes[1] = boxes[0]
      boxes[0] = tmp
    } else {
      // dragBoxEvt = 0, targetBoxIdx = 2 のとき
      const tmp = boxes[0]
      boxes[0] = boxes[1]
      boxes[1] = boxes[2]
      boxes[2] = tmp
    }
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
      <div v-for="(box, index) in boxes" @drop="dropObject($event, index)" @dragover.prevent @dragenter.prevent>
        <BoxWithHand :message="box.message" :isHold="box.isHold" :isRight="box.isRight" :rotate="box.rotate" :draggable="box.isHold" @dragstart="dragBox($event, index)"></BoxWithHand>
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
