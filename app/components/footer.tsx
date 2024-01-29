import Container from './container';

export default function Footer() {
	return (
		<footer>
			<Container className='py-10 flex items-center justify-between'>
				<p className='text-sm text-slate-900'>
					Wafa Saefulhaq {new Date().getFullYear()}.
				</p>
				<a
					href='https://github.com/wafash08/wafasaefulhaq'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm text-slate-900 hover:underline'
				>
					See the recent updates on github
				</a>
			</Container>
		</footer>
	);
}
