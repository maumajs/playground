import { Route } from '@mauma/ssg';

export default Route()
  .getData(async () => {
    return { foo: 'bar' };
  });
