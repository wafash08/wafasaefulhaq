import type { MetaFunction } from '@remix-run/node';
import Banner from '~/components/banner';
import Header from '~/components/header';

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
		</>
	);
}
