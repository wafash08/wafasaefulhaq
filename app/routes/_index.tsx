import { type MetaFunction } from '@remix-run/node';
import BackgroundGrid from '~/components/background-grid';
import Banner from '~/components/banner';
import BlogCard from '~/components/blog-card';
import Container from '~/components/container';

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
		<main>
			<BackgroundGrid>
				<section className='relative py-48'>
					<Banner />
				</section>
			</BackgroundGrid>
			<section className='mb-40'>
				<Container>
					<header className='py-16 sm:text-center'>
						<h2 className='text-3xl sm:text-4xl text-slate-900 font-plusJakartaSans font-bold mb-4'>
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
		</main>
	);
}
