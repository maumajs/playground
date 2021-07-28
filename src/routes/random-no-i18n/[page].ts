import { RoutePagination } from '@mauma/ssg';

export default RoutePagination({
  route: 'random',
})
  .disableI18n()
  .setName('random-no-i18n-index')
  .setPageSize(2)
