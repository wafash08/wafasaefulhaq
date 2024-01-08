import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import Banner from '~/components/banner';
import BlogCard from '~/components/blog-card';
import Container from '~/components/container';
import CTAButton from '~/components/cta-button';
import Header from '~/components/header';
import ProjectCard from '~/components/project-card';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Wafa Saefulhaq' },
		{
			name: 'description',
			content:
				'An online portfolio and blog by Wafa Saefulhaq, showcase of my projects, and some of my thoughts about website development.',
		},
	];
};

export default function Index() {
	return (
		<>
			<Header />
			<img
				src='/images/lights.png'
				alt='light'
				className='absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] select-none object-cover pointer-events-none'
				width={1200}
				height={800}
			/>
			<Banner />
			<section>
				<Container>
					<h2 className='text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/60 to-[#e2e8ff]'>
						Blog
					</h2>
					<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</ul>
					<Link
						to='/blog'
						className='mt-5 py-3 px-6 rounded-lg inline-flex border border-[#E2E8FF]/10 hover:bg-white/[0.01] font-light'
					>
						See more blog
					</Link>
				</Container>
			</section>
			<section className='mt-20'>
				<Container>
					<h2 className='text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/60 to-[#e2e8ff]'>
						Projects
					</h2>
					<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</ul>
					<Link
						to='/blog'
						className='mt-5 py-3 px-6 rounded-lg inline-flex border border-[#E2E8FF]/10 hover:bg-white/[0.01] font-light'
					>
						See more projects
					</Link>
				</Container>
			</section>
		</>
	);
}
