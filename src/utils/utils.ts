import { ui } from "@/i18n/ui";

const defaultLang = 'es';

const useTranslation = (lang: keyof typeof ui) => {
  return function translate(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

const getRandomNumber = (num: number): number => {
  return Math.floor(Math.random() * num) + 1;
}

const changeBackgroundImage = (elementContainer: HTMLElement, images: string[]): void => {
  if (elementContainer) {
    const randomIndex = getRandomNumber(images.length-1);
    elementContainer.style.backgroundImage = `url('${images[randomIndex]}')`;
  }
};

export {
  useTranslation,
  getRandomNumber,
  changeBackgroundImage
};