<script setup lang="ts">

  import type { ScreenInterface } from '@/types/types';
  import ScreenComponent from './ScreenComponent.vue';

  interface Screen extends ScreenInterface {}

  const props = defineProps({
    screens: {
      type: Array<Screen>,
      required: true
    }
  });

</script>

<template>

  <section class="screen__gallery mb">
    <ScreenComponent v-for="item in props.screens" :key="item.name" :screen="item" />
  </section>

</template>

<style scoped>

  .screen__gallery {
    min-height: 100rem;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

</style>