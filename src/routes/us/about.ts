import { Route } from '@mauma/ssg';

export default Route()
  .getPermalink(async () => {
    return {
      ca: '/nosaltres/qui-som',
      es: '/nosotros/quienes-somos',
      en: '/us/who-we-are',
    };
  })
