<script setup>

  import { getBaseUrl } from '@/utils/utils';
  import { onMounted } from 'vue';

  const props = defineProps({
    screen: {
      type: Object,
      required: true
    }
  });

  const currentLang = document.documentElement.lang || 'es';
  const currentUrl = window.location.href;
  const baseUrl = getBaseUrl(currentUrl);

  onMounted(() => {
    const screens = document.querySelectorAll('.screen');
    if (screens) {
      screens.forEach(el => {
        const imageUrl = el.getAttribute('data-image');
        if (imageUrl) {
          el.style.backgroundImage = `url('${imageUrl}')`;
        }
      });
    }
  });
</script>

<template>
  <div class="screen" :data-image="screen.image">
    <a class="screen__title" :href="`${baseUrl}${currentLang}/${screen.cta}`">
      <h4>{{screen.project_title}}</h4>
    </a>
  </div>
</template>


<style scoped>

  .screen {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    max-height: 100rem;
    position: relative;
  }

  .screen__title {
    display: block;
    position: sticky;
    width: 92%;
    padding-bottom: 100px;
    top: 70%;
    max-width: 144rem;
    margin: 0 auto;
    color: #000;
    text-transform: uppercase;
    text-decoration: underline;
  }

  .screen__title {
    display: block;
    position: sticky;
    width: 92%;
    padding-bottom: 100px;
    top: 70%;
    max-width: 144rem;
    margin: 0 auto;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: underline;
  }

  @media (width >= 768px) {
    .screen__title {
      font-size: 2.4rem;
    }
  }

  .screen__title--gray {
    color: #000;
    background-color: #c1c1c1;
  }

  .screen__title--black {
    color: #000;
  }

</style>