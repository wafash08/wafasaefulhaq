import type { MetaFunction } from '@remix-run/node';
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
		</>
	);
}
