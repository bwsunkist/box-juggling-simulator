<script setup lang="ts">

interface PropType {
  isHold?: boolean
  isRight?: boolean
}
withDefaults(defineProps<PropType>(), {
  isHold: false,
  isRight: false
})

</script>

<template>
  <div :class="{ flex: true, flipHorizontal: !isRight }">
    <div :class="{ close: isHold, open: !isHold, reverse: !isRight }"></div>
    <div :class="{ closeThumb: isHold, openThumb: !isHold, reverse: !isRight }"></div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.flipHorizontal {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.reverse {
  transform: scale(-1, 1);
}

.open {
  border: none;
  background: #fddaaf;
  width: 50px;
  height: 60px;
}

.close {
  border: none;
  background: #fddaaf;
  width: 50px;
  height: 40px;
}

.openThumb {
  margin-top: 30px;
  height: 0px;
  width: 0px;
  border: 30px solid #fddaaf;
  border-color: transparent;
  border-top-color: #fddaaf;
  border-left: 0px solid transparent;
  border-right: 20px solid transparent;
}

.closeThumb {
  margin-top: 10px;
  height: 0px;
  width: 0px;
  border-top: 10px solid transparent;
  border-left: #fddaaf 10px solid;
  border-right: 0px solid transparent;
  border-bottom: 10px solid transparent;
}

</style>
