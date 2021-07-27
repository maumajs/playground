import { Route } from '@mauma/ssg';
import { RouteInstanceConfig } from '../../../../../../mauma/dist/route/types';
import posts, { Post } from '../../../../data/blog-posts';

const slug = require('slug');

// interface PostParams extends RouteParams {
//   year: string;
//   month: string;
//   slug: string;
// }

export default Route<Post>()
  .getPermalink(async () => {
    return {
      es: '/noticias/[year]/[month]/[slug]',
    };
  })
  .getInstances(async () => {
    const instances: RouteInstanceConfig[] = [];

    for (let [locale, localePosts] of posts.entries()) {
      for (const post of localePosts) {
        const year = post.date.toISOString().substr(0, 4);
        const month = post.date.toISOString().substr(5, 2);
        const sluga = slug(post.title);

        instances.push({
          key: post.id.toString(),
          locale: locale,
          params: { year, month, slug: sluga },
          data: post,
        });
      }
    }

    return instances;
    // return [
    //   // #1
    //   {
    //     key: '1',
    //     locale: 'es',
    //     params: { year: '2021', month: '1', slug: 'castellano-2021' },
    //     data: { title: 'Castellano 2021' },
    //   },
    //   {
    //     key: '1',
    //     locale: 'ca',
    //     params: { year: '2021', month: '1', slug: 'catala-2021' },
    //     data: { title: 'Catala 2021' },
    //   },
    //   // #2
    //   {
    //     key: '2',
    //     params: { year: '2020', month: '12', slug: '2020-post-es' },
    //     locale: 'es',
    //     data: { title: '2020 Post (es)' },
    //   },
    //   {
    //     key: '2',
    //     locale: 'ca',
    //     params: { year: '2020', month: '12', slug: '2020-post-ca' },
    //     data: { title: '2020 Post (ca)' },
    //   },
    // ];
  })
