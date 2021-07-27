import { ConfigFn, I18nStrategy } from '@mauma/ssg';
import { categoryList } from './data/blog-posts';

const config: ConfigFn = async () => {
  return {
    i18n: {
      defaultLocale: 'ca',
      strategy: I18nStrategy.PrefixExceptDefault,
      locales: [
        { code: 'ca', label: 'Catalá' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Castellano' },
      ],
      translations: {
        ca: {
          translations: 'Traduccions',
          hello: 'Hola',
          variable: '{{foo}}',
        },
        en: {
          translations: 'Translations',
          hello: 'Hello',
          variable: '{{foo}}',
        },
        es: {
          translations: 'Traducciones',
          hello: 'Hola',
          variable: '{{foo}}',
        },
      },
    },
    configureNunjucks(nunjucks) {
      nunjucks.addGlobal('categories', categoryList);
    }
  };
};

export default config;
