import type { NavItemInterface } from "@/types/types";
import { languageList } from '@/i18n/ui';
import { useTranslation } from '@/utils/utils';

const currentLang = 'es';

/* const currentLang = 'en'; */
const tranlateUI = useTranslation(currentLang as keyof typeof languageList);

const navItems: NavItemInterface[] = [
  {
    pageTitle: '',
    title: tranlateUI('nav.about'),
    url: '/about'
  },
  {
    pageTitle: '',
    title: tranlateUI('nav.contact'),
    url: '/contact'
  },
  {
    pageTitle: '',
    title: tranlateUI('nav.work'),
    url: '/work'
  }
];

export default navItems;