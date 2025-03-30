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

const shortenPath = (url: string): string => {
  const pathParts = url.split("/").filter(part => part !== "");
  const langIndex = pathParts.findIndex(part => part.length === 2);

  if (langIndex !== -1 && langIndex < pathParts.length - 1) {
    return pathParts.slice(langIndex + 1).join("/");
  }

  return url;
}

export {
  useTranslation,
  getRandomNumber,
  changeBackgroundImage,
  shortenPath
};