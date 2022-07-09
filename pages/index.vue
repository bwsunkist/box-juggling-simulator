<script setup lang="ts">
import { ref } from "vue";
import TitleComponent from "~/components/Parts/TitleComponent.vue";

const title = ref('page');

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <TitleComponent />
  </div>
</template>
