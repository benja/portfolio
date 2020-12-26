import path, { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import day from 'dayjs';

export type Post = {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    twitter: string;
  };
  date: Date | string;
  content: string;
  slug: string;
  cover: string;
  tags: string;
};

const directory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  const filenames = fs.readdirSync(path.resolve('posts'));
  return filenames.map(name => name.replace('.mdx', ''));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(directory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(path, 'utf-8');
  const { data: metadata, content } = matter(fileContent);

  return {
    metadata,
    content,
    slug: realSlug,
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => {
      return day(post1.metadata.date).isAfter(post2.metadata.date) ? -1 : 1;
    });
}

export function dateToVersionNumber(string: string) {
  const date = new Date(string);
  return `v${date.getFullYear().toString().slice(0, 2)}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
}

export function dateToReadableDate(string: string) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(string);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
