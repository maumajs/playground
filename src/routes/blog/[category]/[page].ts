import { RoutePagination } from '@mauma/ssg';
import { categoryList, Post } from '../../../data/blog-posts';

export default RoutePagination<Post>({
  route: 'blog-year-month-slug',
})
  .setName('blog-category-index')
  .setFilter({
    param: 'category',
    values: async () => categoryList,
    filter: (instance, value) => instance.data.categories.includes(value),
  })
  .getPermalink(async () => {
    return {
      es: '/noticias/[category]/[page]',
    };
  })
