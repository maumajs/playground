import { Route } from '@mauma/ssg';

interface RandomData {
  id: number;
}

export default Route<RandomData>()
  .disableI18n()
  .getPermalink(async () => {
    return (instance) => {
      return `/random-${instance.data.id}.txt`;
    };
  })
  .getInstances(async () => {
    return [
      { key: '0', params: {}, data: { id: Math.round(Math.random() * 10000) } },
      { key: '1', params: {}, data: { id: Math.round(Math.random() * 10000) } },
    ];
  })
  .render(async ({ data }) => {
    return `Random: ${data.id}`;
  })
