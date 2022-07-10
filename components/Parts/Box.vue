<script setup lang="ts">

interface PropType {
  message?: string
}
withDefaults(defineProps<PropType>(), {
  message: 'sample',
})

</script>

<template>
  <div class="box">
    <p>
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.box {
  background: #c7cdff;
  color: #1f35fa;
  border: double 10px #1f35fa;
  padding: 0.5em 1em;
  margin: 0px;
  width: 80px;
  height: 60px;
  /* display: flex; */
  text-align:center;
  /* justify-content: center;
  align-items: center; */
  font-size: 25px;
}

.box p {
  padding: 10px 0px;
  margin: 0px;
}
</style>
