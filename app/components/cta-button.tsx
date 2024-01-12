import { Link } from '@remix-run/react';

export default function CTAButton() {
	return (
		<Link
			to='about#contact'
			className='relative group inline-flex py-3 px-6 text-white bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-lg tracking-wide'
		>
			Get in touch
			<div className='absolute w-full h-full top-0 left-0 rounded-lg bg-transparent transition-colors group-hover:bg-white/10 pointer-events-none' />
		</Link>
	);
}
