import type { MetaFunction } from '@remix-run/node';
import ArrowLink from '~/components/arrow-link';
import BackgroundGrid from '~/components/background-grid';
import Banner from '~/components/banner';
import BlogCard from '~/components/blog-card';
import Container from '~/components/container';
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
			<BackgroundGrid>
				<section className='relative pt-48 pb-40 mb-20'>
					<Banner />
				</section>
			</BackgroundGrid>
			{/* <section>
				<Container>
					<div className='flex items-center justify-between'>
						<h2 className='text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/60 to-[#e2e8ff]'>
							Blog
						</h2>
						<ArrowLink to='/blog'>See more blog</ArrowLink>
					</div>
					<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</ul>
				</Container>
			</section>
			<section className='mt-20 mb-20'>
				<Container>
					<div className='flex items-center justify-between'>
						<h2 className='text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/60 to-[#e2e8ff]'>
							Projects
						</h2>
						<ArrowLink to='/projects'>See more projects</ArrowLink>
					</div>
					<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</ul>
				</Container>
			</section> */}
		</>
	);
}
