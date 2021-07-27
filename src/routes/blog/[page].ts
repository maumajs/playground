import { RoutePagination } from '@mauma/ssg';

export default RoutePagination({
  route: 'blog-year-month-slug',
})
  .setName('blog-index')
  .getPermalink(async () => {
    return {
      es: '/noticias/[page]',
    };
  })
