import { Link } from '@remix-run/react';
import Navbar from './navbar';
import ThemeButton from './theme-button';

export default function Header() {
	return (
		<header className='fixed top-0 left-0 z-[100] w-full h-24'>
			<div className='absolute w-full h-full top-0 left-0 bg-white/[0.01] backdrop-blur-md' />
			<div className='relative max-w-[1200px] h-full mx-auto flex items-center justify-between px-5'>
				<div className='absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0' />
				<Link to='/' className='font-medium text-2xl'>
					wafasaefulhaq
				</Link>

				<div className='hidden md:block'>
					<Navbar />
				</div>

				<div className='hidden md:block'>
					<ThemeButton />
				</div>
			</div>
		</header>
	);
}
