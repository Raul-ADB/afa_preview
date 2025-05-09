import { ui } from "@/i18n/ui";

const defaultLang = 'es';
type LanguageKey = keyof typeof ui;

const useTranslation = (lang: keyof typeof ui) => {
  return function translate(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

const useTranslationVue = (lang: LanguageKey) => {
  const t = (key: string): string => {
    const translation = ui[lang]?.[key as keyof typeof ui[typeof lang]];
    return translation || key;
  };
  return { t };
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

const getBaseUrl = (url: string): string => {
  const pathParts = url.split("/").filter(part => part !== "");
  const langIndex = pathParts.findIndex(part => part.length === 2);

  if (langIndex !== -1) {
    return url.split(pathParts[langIndex])[0];
  }

  return url;
};

const getUrl = (): string => {
  const currentLang = document.documentElement.lang || 'es';
  const currentUrl = window.location.href;
  const baseUrl = getBaseUrl(currentUrl);
  return `${baseUrl}${currentLang}/`;
};

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

const setBackgroundImage = (element: HTMLElement, url: string): void => {
  if (element && url) {
    element.style.backgroundImage = `url(${url})`;
  }
}

export {
  useTranslation,
  useTranslationVue,
  getRandomNumber,
  changeBackgroundImage,
  shortenPath,
  getBaseUrl,
  getUrl,
  handleScroll,
  toggleMenu,
  observeSentinel,
  setBackgroundImage
};