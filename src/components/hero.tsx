import NavLink from '@/components/navlink';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
	return (
		<div className='space-y-8 max-w-2xl'>
			<div className='flex flex-col items-start space-y-8'>
				<h1 className='text-4xl font-light'>{`Hello! I'm Andy.`}</h1>

				<p className='text-lg'>
					I build software to support health research - designing, developing, and delivering tools that help people work more effectively with data, systems, and each other.
					<br />
					<br />
					I lead the software team at the <NavLink href='https://www.nottingham.ac.uk/health-informatics/index.aspx' target='_blank' rel='noopener noreferrer'>Centre for Health Informatics</NavLink> at the University of Nottingham, and I’m also Head of Research Software at Nottingham University Hospitals.
					<br />
					<br />
					More <NavLink href='/about'>about me</NavLink>
				</p>



			</div>
			<div className='flex space-x-2 md:space-x-6 justify-center'>
				<NavLink
					href='https://github.com/AndyRae'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaGithub className='h-4 w-4 mr-2' />
					Github
				</NavLink>

				<NavLink
					href='https://www.linkedin.com/in/andyraeio'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaLinkedin className='h-4 w-4 mr-2' />
					LinkedIn
				</NavLink>
			</div>
		</div>
	);
};
