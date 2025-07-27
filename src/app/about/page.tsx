import NavLink from "@/components/navlink";

export default function AboutPage() {
	return (
		<main className='flex flex-col items-center pt-20 px-5'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-3xl font-bold mb-6'>About</h1>
				
				<div className='prose dark:prose-invert max-w-none'>
					<p className='mb-4'>
						I'm a software engineer working on tools that support health research and public impact. I help shape, ship, and scale software across national programmes, from federated platforms to tools used by clinicians and researchers.
						<br />
						<br />
						My work spans leadership, architecture, and hands-on development. I focus on making complex systems usable, useful and maintainable, and enjoy bridging the gaps between people, policy, and code.
						<br />
						<br />
						I lead a software team at the <NavLink href='https://www.nottingham.ac.uk/health-informatics/index.aspx' target='_blank' rel='noopener noreferrer'>Centre for Health Informatics</NavLink> at the University of Nottingham, and I'm also Head of Research Software at Nottingham University Hospitals.
						<br />
						<br />
						Before software, I spent ten years in the UK film industry managing funding, research, and delivery across creative projects. 
					</p>
					
				</div>
			</div>
		</main>
	);
} 