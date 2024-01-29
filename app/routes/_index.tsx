import { type MetaFunction } from '@remix-run/node';
import BackgroundGrid from '~/components/background-grid';
import Banner from '~/components/banner';
import BlogCard from '~/components/blog-card';
import Container from '~/components/container';
import ProjectCard, { type Project } from '~/components/project-card';

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

const PROJECTS: Project[] = [
	{
		description:
			'A clean and simple interface to organize your favourite websites.',
		image: {
			alt: 'Bookmark landing page preview',
			src: '/images/bookmark-landing-page.jpg',
		},
		title: 'Bookmark landing page',
		credit: {
			link: 'https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158',
			to: 'frontendmentor.io',
		},
		gradient: {
			from: '#FA5757',
			to: '#5368DF',
		},
	},
	{
		description:
			'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
		image: {
			alt: 'Manage landing page preview',
			src: '/images/manage-landing-page.jpg',
		},
		title: 'Manage landing page',
		credit: {
			link: 'https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5',
			to: 'frontendmentor.io',
		},
		gradient: {
			from: '#242D52',
			to: '#F25F3A',
		},
	},
];

export default function Index() {
	return (
		<main>
			<BackgroundGrid>
				<section className='relative py-48'>
					<Banner />
				</section>
			</BackgroundGrid>
			<section className='mb-24'>
				<Container>
					<header className='py-16 sm:text-center'>
						<h2 className='text-3xl sm:text-5xl text-slate-900 font-bold mb-4'>
							Blog
						</h2>
						<p className='text-lg text-slate-700'>
							Thoughts, mental models, and tutorials about web development.
						</p>
					</header>
					<div className='relative sm:pb-12 sm:ml-8 md:ml-14 lg:ml-64'>
						<div className='hidden sm:block absolute bg-slate-200 top-5 bottom-0 right-full w-px mr-7 md:mr-12'></div>
						<ul className='space-y-16'>
							<li>
								<BlogCard />
							</li>
							<li>
								<BlogCard />
							</li>
							<li>
								<BlogCard />
							</li>
						</ul>
					</div>
				</Container>
			</section>

			<BackgroundGrid direction='top'>
				<section id='projects' className='pb-16'>
					<Container className='relative'>
						<header className='py-16 sm:text-center'>
							<h2 className='text-3xl sm:text-5xl text-slate-900 font-bold mb-4'>
								Projects
							</h2>
							<p className='text-lg text-slate-700'>
								Showcase of my works on web development.
							</p>
						</header>
						<ul className='space-y-16'>
							{PROJECTS.map((project, idx) => {
								const { description, image, title, credit, gradient } = project;
								return (
									<ProjectCard
										key={title}
										description={description}
										image={image}
										title={title}
										credit={credit}
										// reverse if the index is even
										reverse={(idx + 1) % 2 === 0}
										gradient={gradient}
									/>
								);
							})}
						</ul>
					</Container>
				</section>
			</BackgroundGrid>
		</main>
	);
}
