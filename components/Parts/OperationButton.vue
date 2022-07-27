<script setup lang="ts">

interface PropType {
  isRight?: boolean
}
const prop = withDefaults(defineProps<PropType>(), {
  isRight: true,
})

const emit = defineEmits(['release', 'twist'])
const click = (operationType: 'release' | 'twist') => {
  emit(operationType, null)
}

</script>

<template>
  <div class="wrap">
    <div class="title" v-show="!isRight">
      <p>
        Left
      </p>
    </div>
    <div class="operationWrap">
      <div class="operationBox">
        <button class="operationButton" @click="click('release')">
          Release
        </button>
      </div>
      <div class="operationBox">
        <button class="operationButton" @click="click('twist')">
          Twist
        </button>
      </div>
    </div>
    <div class="title" v-show="isRight">
      <p>
        Right
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap; 
}

.title {
  width: 120px;
  height: 106px;
  background: #9fff7f;
  border: 2px solid;
  margin: 1px 5px;
  text-align:center;
  font-size: 30px;
}

.operationWrap {
  display: flex;
  flex-wrap: wrap; 
  width: 200px;
  height: 100px;
}

.operationBox {
  width: 200px;
  height: 50px;
  margin: 0px;
  margin-bottom: 5px;
  text-align:center;
}

.operationButton {
  width: 200px;
  height: 50px;
  margin-top: 5px;
  font-size: 30px;
}

</style>
