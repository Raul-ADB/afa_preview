<script setup lang="ts">

  import { ref, onMounted } from 'vue';
  import type { CardInterface, ScreenInterface, ComponentInterface } from '@/types/types';
  import { getRandomNumber } from '@/utils/utils';
  import fullscreens from '@/data/fullscreens.json';
  import cards from '@/data/cards.json';
  import ScreenGallery from '@/components/ScreenGallery.vue';
  import CardGallery from '@/components/CardGallery.vue';

  interface Screen extends ScreenInterface {}
  interface Card extends CardInterface {}
  interface Component extends ComponentInterface {}

  let sList = fullscreens;
  let cList = cards;
  let arrayScreenGallery: Screen[][] = [];
  let arrayCardGallery: { key: string; cards: Card[] }[] = [];
  const typeGallery: Record<string, number> = {
    A: 7,
    B: 7,
    C: 10,
    D: 5,
    E: 4,
    F: 8,
  };
  let availableKeys: string[] = [...Object.keys(typeGallery)];

  const components = ref<Component[]>([]);
  const lang = ref<'es' | 'en'>('es');

  const makeScreenGallery = () => {
    let screenList: Screen[] = [];
    for (let i = 0; i < getRandomNumber(3); i++) {
      const random = getRandomNumber(sList.length - 1);
      const randomScreen = sList[random];
      screenList.push({
        project_title: randomScreen.project_title,
        name: randomScreen.name,
        image: randomScreen.url,
        cta: randomScreen.cta,
      });
    }
    arrayScreenGallery.push(screenList);
  };

  function getRandomKey(): string {
    if (availableKeys.length === 0) {
      availableKeys = [...Object.keys(typeGallery)];
    }
    const randomIndex = Math.floor(Math.random() * availableKeys.length);
    return availableKeys.splice(randomIndex, 1)[0];
  }

  const makeCardGallery = () => {
    let cardList: Card[] = [];
    const randomKey = getRandomKey();
    const numCards = typeGallery[randomKey];
    for (let i = 0; i < numCards; i++) {
      const random = getRandomNumber(cList.length - 1);
      const randomCard = cList[random];
      cardList.push({
        project_title: randomCard?.project_title,
        name: randomCard?.name,
        description: randomCard?.description,
        cta: randomCard?.cta,
        url: randomCard?.url,
        type: randomCard?.type,
        cardNumber: i + 1,
      });
      cList.splice(random, 1)[0];
    }
    arrayCardGallery.push({ key: randomKey, cards: cardList });
  };

  const createRandomLayout = () => {
    const copyScreens = JSON.parse(JSON.stringify(fullscreens));
    const copyCards = JSON.parse(JSON.stringify(cards));
    for (let index = 0; index < (getRandomNumber(10) + 10); index++) {
      if (index % 2 === 0) {
        makeScreenGallery();
        components.value.push({
          type: 'ScreenGallery',
          elements: arrayScreenGallery[arrayScreenGallery.length - 1],
        });
      } else {
        makeCardGallery();
        components.value.push({
          type: 'CardGallery',
          elements: arrayCardGallery[arrayScreenGallery.length - 1],
        });
      }
      sList = JSON.parse(JSON.stringify(copyScreens));
      cList = JSON.parse(JSON.stringify(copyCards));
    }
  }

  onMounted(() => {
    const currentLang = document.documentElement.lang || 'es';
    lang.value = currentLang;
    createRandomLayout();
  });

</script>

<template>

  <div v-for="(component, index) in components" :key="index">
    <ScreenGallery v-if="component.type === 'ScreenGallery'" :lang="lang" :screens="component.elements" />
    <CardGallery v-else-if="component.type === 'CardGallery'" :lang="lang" :cards="component.elements.cards" :type="component.elements.key" />
  </div>

</template>