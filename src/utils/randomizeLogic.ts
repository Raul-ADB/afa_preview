import type { CardInterface, ScreenInterface, ComponentInterface } from '@/types/types';
import { getRandomNumber } from '@/utils/utils';
import fullscreens from '@/data/fullscreens.json';
import cards from '@/data/cards.json';

export interface Screen extends ScreenInterface {}
export interface Card extends CardInterface {}
export interface Component extends ComponentInterface {}

export function generateComponents(currentLang: string): Component[] {
  const copyScreens = JSON.parse(JSON.stringify(fullscreens));
  const copyCards = JSON.parse(JSON.stringify(cards));

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

  function getRandomKey(): string {
    if (availableKeys.length === 0) {
      availableKeys = [...Object.keys(typeGallery)];
    }
    const randomIndex = Math.floor(Math.random() * availableKeys.length);
    return availableKeys.splice(randomIndex, 1)[0];
  }

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

  let components: Component[] = [];

  for (let index = 0; index < 20; index++) {
    if (index % 2 === 0) {
      makeScreenGallery();
      components.push({
        type: 'ScreenGallery',
        elements: arrayScreenGallery[arrayScreenGallery.length - 1],
      });
    } else {
      makeCardGallery();
      components.push({
        type: 'CardGallery',
        elements: arrayCardGallery[arrayScreenGallery.length - 1],
      });
    }
    sList = JSON.parse(JSON.stringify(copyScreens));
    cList = JSON.parse(JSON.stringify(copyCards));
  }

  console.log('components', components);
  return components;
}