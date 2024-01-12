import { Link } from '@remix-run/react';
import Navbar from './navbar';
import ThemeButton from './theme-button';
import { MobileMenu } from './mobile-menu';
import Container from './container';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

function useScroll(threshold = 0) {
	const [isScrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > threshold);
		};

		document.addEventListener('scroll', onScroll);
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, [threshold]);

	return isScrolled;
}

export default function Header() {
	const isScrolled = useScroll();

	return (
		<header className='fixed top-0 left-0 z-[100] w-full h-20'>
			<div
				className={clsx(
					'absolute w-full h-full top-0 left-0 bg-transparent transition border-b border-transparent',
					isScrolled && 'bg-white/70 backdrop-blur border-slate-600'
				)}
			/>
			<Container className='relative h-full flex items-center justify-between'>
				<Link to='/' className='font-medium text-xl text-slate-900'>
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
