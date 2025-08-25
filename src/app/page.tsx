import { Hero } from '@/components/hero';
import { getAllPosts } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
	const posts = getAllPosts();
	return (
		<main className='flex flex-col items-center pt-20 px-5'>
			<Hero />
			<section className='w-full max-w-xl mt-10'>
				<ul>
					{posts.map((post) => (
						<li key={post.slug} className='mb-4'>
							<Link href={`/posts/${post.slug}`} className='block hover:underline'>
								<span className='font-medium'>{post.title}</span>
								<span className='text-gray-500 text-sm ml-2'>{post.date}</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
