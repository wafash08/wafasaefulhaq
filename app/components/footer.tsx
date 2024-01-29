import Container from './container';

export default function Footer() {
	return (
		<footer>
			<Container className='py-10 flex justify-center'>
				<p className='text-sm text-slate-900'>
					Wafa Saefulhaq {new Date().getFullYear()}.
				</p>
			</Container>
		</footer>
	);
}
