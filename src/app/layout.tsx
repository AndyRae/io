import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
	metadataBase: new URL('https://rae.li'),
	title: 'Andy Rae | Software Engineer',
	description: 'Andy Rae | Software Engineer',
	openGraph: {
		title: 'Andy Rae | Software Engineer',
		description: 'Andy Rae | Software Engineer',
		url: 'https://rae.li',
		siteName: 'Andy Rae | Software Engineer',
		locale: 'en-GB',
		type: 'website',
	},
	icons: {
		icon: '/icons/favicon.ico',
		apple: '/icons/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<div className='bg-white dark:bg-black min-h-screen pt-16'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
