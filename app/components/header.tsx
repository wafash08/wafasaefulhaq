import { Link } from '@remix-run/react';
import Navbar from './navbar';
import ThemeButton from './theme-button';
import { MobileMenu } from './mobile-menu';
import Container from './container';

export default function Header() {
	return (
		<header className='fixed top-0 left-0 z-[100] w-full h-24'>
			<div className='absolute w-full h-full top-0 left-0 bg-white/[0.01] backdrop-blur-md' />
			<Container className='relative h-full flex items-center justify-between'>
				<div className='absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0' />
				<Link to='/' className='font-medium text-xl'>
					wafasaefulhaq
				</Link>

				<div className='hidden md:block'>
					<Navbar />
				</div>

				<div>
					<div className='md:hidden'>
						<MobileMenu />
					</div>
					<div className='hidden md:block'>
						<ThemeButton />
					</div>
				</div>
			</Container>
		</header>
	);
}
