import ArrowLink from '~/components/arrow-link';
import Container from '~/components/container';

export default function AboutPage() {
	return (
		<section className='pt-48 mb-20'>
			<Container>
				<h1>about page</h1>
				<ArrowLink to='/about'>See More</ArrowLink>
			</Container>
		</section>
	);
}
