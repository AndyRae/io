import { getAllPosts, markdownToHtml } from '@/lib/utils';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
	const postsDirectory = path.join(process.cwd(), 'src/posts');
	const fullPath = path.join(postsDirectory, `${params.slug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);
	const htmlContent = await markdownToHtml(content);

	return (
		<main className='flex flex-col items-center pt-20 px-5'>
			<article className='w-full max-w-2xl'>
				<header className='mb-8'>
					<h1 className='text-3xl font-bold mb-2'>{data.title}</h1>
					<p className='text-gray-500'>{data.date}</p>
				</header>
				<div 
					className='prose dark:prose-invert max-w-none'
					dangerouslySetInnerHTML={{ __html: htmlContent }}
				/>
			</article>
		</main>
	);
} 