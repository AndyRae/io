'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className='fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
					</div>
					<div className='flex space-x-8'>
						<Link
							href='/'
							className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
								pathname === '/' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
							}`}
						>
							Home
						</Link>
						<Link
							href='/about'
							className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
								pathname === '/about' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
							}`}
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
} 