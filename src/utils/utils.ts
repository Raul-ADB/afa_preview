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

const handleScroll = (navbar: HTMLElement, navMenu: HTMLElement, menu: HTMLElement) : void => {
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 500) {
      navbar.style.top = currentScroll > lastScrollTop ? "-100px" : "0";
      navMenu.classList.remove('open');
      menu.classList.remove('open');
    }
    lastScrollTop = Math.max(0, currentScroll);
  });
}

const toggleMenu = (navMenu: HTMLElement, menu: HTMLElement) : void => {
  navMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
}

const observeSentinel = (sentinel: HTMLElement, navbar: HTMLElement) : void => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      navbar.classList.toggle('nav--scrolled', !entry.isIntersecting);
    },
    { rootMargin: '300px 0px 0px 0px' }
  );
  observer.observe(sentinel);
}

export {
  useTranslation,
  getRandomNumber,
  changeBackgroundImage,
  shortenPath,
  handleScroll,
  toggleMenu,
  observeSentinel
};