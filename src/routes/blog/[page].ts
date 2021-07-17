import { RoutePagination } from '@mauma/ssg';
import { Post } from '../../data/blog-posts';

export default RoutePagination<Post>({
  route: 'blog-year-month-slug',
  pageSize: 10,
  async getPermalink() {
    return {
      es: '/noticias/[page]',
    }
  }
});
