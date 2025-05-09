<script setup lang="ts">

  import type { ScreenInterface } from '@/types/types';
  import ScreenComponent from './ScreenComponent.vue';

  interface Screen extends ScreenInterface {}

  const props = defineProps({
    lang: 'es' | 'en',
    screens: {
      type: Array<Screen>,
      required: true
    }
  });

 const singleElementClass = props.screens.length === 1 ? 'screen__gallery--single' : '';

</script>

<template>

  <section class="screen__gallery mb" :class="[singleElementClass]">
    <ScreenComponent
      v-for="item in props.screens"
      :key="item.name"
      :lang="lang"
      :screen="item"
    />
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

  .screen__gallery--single{
    justify-content: center;
    gap: 0;
  }

</style>