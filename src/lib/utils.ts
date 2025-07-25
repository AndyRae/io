import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((file) => file.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function markdownToHtml(markdown: string): Promise<string> {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}
