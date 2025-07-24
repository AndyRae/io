import NavLink from '@/components/navlink';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
	return (
		<div className='space-y-8 max-w-2xl'>
			<div className='flex flex-col items-start space-y-8'>
				<h1 className='text-4xl font-light'>{`Hello! I'm Andy.`}</h1>

				<p className='text-lg'>
					{`I'm a Senior Software Engineer at the University of Nottingham,
					in the`}
					<NavLink
						href='https://www.nottingham.ac.uk/health-informatics/index.aspx'
						target='_blank'
						rel='noopener noreferrer'
					>
						Centre for Health Informatics
					</NavLink>
					{`, where I lead a team developing software for health research.`}
					<br />
					<br />
					{`I’m also the Head of Research Software at Nottingham University
					Hospitals, delivering innovative software solutions
					that enable and accelerate clinical research.`}
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
