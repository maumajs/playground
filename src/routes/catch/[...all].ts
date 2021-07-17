import { Route } from '@mauma/ssg';

export default Route()
  .getPermalink(async () => {
    return {
      es: '/atrapalo/[...all]',
      en: '/catch-it/[...all]',
    }
  })
  .getInstances(async () => {
    return [
      {
        key: '1',
        locale: 'es',
        params: { all: ['categoria', '20', 'etiqueta', 'foo'] },
      },
      {
        key: '1',
        locale: 'en',
        params: { all: ['category', '20', 'tag', 'foo'] },
      },
    ]
  })
