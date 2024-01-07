import { Link } from '@remix-run/react';

export function MobileMenuList() {
	return (
		<ul>
			<li>
				<Link to='/blog'>Blog</Link>
			</li>
		</ul>
	);
}

export function MenuButton() {
	return (
		<button type='button' className='hidden'>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					x='6'
					y='9'
					width='20'
					height='2'
					rx='1'
					fill='currentColor'
				></rect>
				<rect
					x='6'
					y='15'
					width='20'
					height='2'
					rx='1'
					fill='currentColor'
				></rect>
				<rect
					x='6'
					y='21'
					width='20'
					height='2'
					rx='1'
					fill='currentColor'
				></rect>
			</svg>
		</button>
	);
}

export function MobileMenu() {
	return (
		<nav>
			<MenuButton />
			<MobileMenuList />
		</nav>
	);
}
