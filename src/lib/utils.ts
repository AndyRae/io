import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markdown';

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

export function highlightCode(code: string, language: string): string {
	if (!language || !Prism.languages[language]) {
		return code;
	}
	
	try {
		return Prism.highlight(code, Prism.languages[language], language);
	} catch (error) {
		return code;
	}
}

export async function markdownToHtml(markdown: string): Promise<string> {
	// First convert markdown to HTML
	const result = await remark().use(html).process(markdown);
	let htmlContent = result.toString();
	
	// Add syntax highlighting to code blocks
	htmlContent = htmlContent.replace(
		/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
		(match, language, code) => {
			const highlightedCode = highlightCode(code, language);
			return `<pre><code class="language-${language}">${highlightedCode}</code></pre>`;
		}
	);
	
	return htmlContent;
}
