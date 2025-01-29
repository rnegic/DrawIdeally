import ideasEnglish from '@/api/ideasEnglish';
import ideasRussian from '@/api/ideasRussian';
import useLocaleStore from '../store/LocaleStore';

const generateIdea = (category?: string) => {
  const locale = useLocaleStore.getState().locale;
  const ideas = locale === 'en' ? ideasEnglish : ideasRussian;

  if (category) {
    const rnd = Math.floor(Math.random() * ideas[category].length);
    return ideas[category][rnd];
  } else {
    const categories = Object.keys(ideas);
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomCategoryIndex];
    const rnd = Math.floor(Math.random() * ideas[randomCategory].length);
    return ideas[randomCategory][rnd];
  }
};

export default generateIdea;