import { Route } from '@mauma/ssg';

class SitemapData {
  constructor(
    public foo: string,
    public bar: number,
  ) { }

  public getFooBar(): string {
    return this.foo + this.bar.toString();
  }
}

export default Route<SitemapData>()
  .setPriority(1000)
  .disableI18n()
  .getPermalink(async () => {
    return '/sitemap.xml';
  })
  .getData(async () => {
    return new SitemapData('Lorem ipsum', 42);
  })
  .render(async ({ data }) => {
    return `<Sitemap>${data.foo} & ${data.bar} & ${data.getFooBar()}!!</Sitemap>`;
  })
