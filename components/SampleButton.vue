<script setup lang="ts">
interface PropType {
  outlined?: boolean
  type?: 'button' | 'submit' | 'reset'
}
withDefaults(defineProps<PropType>(), {
  outlined: false,
  type: 'button',
})

type Emits = {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="sample-button" :class="{ outlined: outlined }" :type="type" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped>
.sample-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  border: none;
  background: #1f35fa;
  color: #e0e0e0;
  cursor: pointer;
}
.outlined {
  background: #e0e0e0;
  color: #1f35fa;
  border: 1px solid #1f35fa;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
