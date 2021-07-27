import * as faker from 'faker';
import seedrandom from 'seedrandom';

const random = seedrandom('123');
const total = 100;
export const categoryList = ['cat-a', 'cat-b', 'cat-c', 'cat-d', 'cat-e'];
export const tagList = ['tag-a', 'tag-b', 'tag-c', 'tag-d', 'tag-e'];
const posts: Map<string, Post[]> = new Map([
  ['ca', []],
  ['en', []],
  ['es', []],
]);

faker.seed(123);

export interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
  categories: string[];
  tags: string[];
}

function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + random() * (end.getTime() - start.getTime()));
}

function getRandomEls(value: string[]): string[] {
  return value.filter(() => random() > 0.5);
}

for (let i = 0; i < total; i++) {
  const date = getRandomDate(new Date('2020-01-01T00:00:00'), new Date('2020-12-31T23:59:59'));
  const categories = getRandomEls(categoryList);
  const categoriesEn = getRandomEls(categories); // Less categories for English
  const tags = getRandomEls(tagList);
  const tagsEn = getRandomEls(tags); // Less tags for English
  const titleBase = i % 2 === 0 ? faker.commerce.productName() : faker.lorem.words(6);

  ['ca', 'en', 'es'].forEach((locale) => {
    const content = faker.lorem.paragraphs(4);
    const title = `${titleBase} (${locale})`;

    posts.get(locale).push({
      id: i,
      title,
      content,
      date,
      categories: locale === 'en' ? categoriesEn : categories,
      tags: locale === 'en' ? tagsEn : tags,
    });
  });
}

export default posts;
