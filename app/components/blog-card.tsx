import { Link } from '@remix-run/react';
import clsx from 'clsx';
import ArrowLink from './arrow-link';

export default function BlogCard() {
	return (
		<article className='relative group'>
			<div className='absolute -inset-y-4 -inset-x-4 md:-inset-x-6 rounded-2xl transition-colors duration-200 group-hover:bg-slate-100 -z-10'></div>
			<svg
				viewBox='0 0 9 9'
				className='hidden sm:block absolute w-[9px] h-[9px] right-full top-3 text-slate-400 mr-[calc(1.75rem-4px)] md:mr-[calc(3rem-4px)] overflow-visible'
			>
				<circle
					cx='4.5'
					cy='4.5'
					r='4.5'
					stroke='currentColor'
					className='fill-white'
					strokeWidth='2'
				></circle>
			</svg>
			<div className='relative'>
				<Link to='/blog/blog-judul' className='block mb-4'>
					<h3
						className={clsx(
							'font-plusJakartaSans text-xl font-semibold text-slate-900 pt-8 lg:pt-0',
							'underline transition decoration-transparent hover:decoration-slate-900'
						)}
					>
						Introducing Catalyst: A modern UI kit for React
					</h3>
				</Link>
				<div className='mt-2 line-clamp-2 text-slate-500'>
					<p>
						Today&apos;s the day — we just published the first development
						preview of Catalyst, our first fully-componentized,
						batteries-included application UI kit for React, just in time for
						your holiday hacking sessions.
					</p>
				</div>
				<dl className='absolute left-0 top-0 lg:top-2 lg:left-auto lg:right-full lg:mr-24'>
					<dt className='sr-only'>Date</dt>
					<dd className='whitespace-nowrap text-sm text-slate-500'>
						<time>16 Januari 2024</time>
					</dd>
				</dl>
			</div>
			<div className='mt-8'>
				<ArrowLink to='/blog/blog-judul'>Read more</ArrowLink>
			</div>
		</article>
	);
}
