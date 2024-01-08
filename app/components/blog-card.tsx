import { Link } from '@remix-run/react';

export default function BlogCard() {
	return (
		<li>
			<Link to='/blog/blog-slug' className='block'>
				<article className='p-1 border border-[#E2E8FF]/10 rounded-lg transition-colors hover:bg-white/[0.01]'>
					{/* effect */}
					<div className='overflow-hidden relative rounded-[4px]'>
						<div className='absolute inset-0 border border-[#E2E8FF]/10 rounded-rounded-[4px]' />
						<img
							src='/images/neom.webp'
							alt='neom'
							className='aspect-video object-cover'
						/>
					</div>
					<div className='p-5'>
						<div className='flex justify-between items-center gap-1'>
							<ul className='flex flex-wrap items-center gap-1'>
								<li>
									<span className='text-sm text-[#E2E8FF]/50'>Category</span>
								</li>
							</ul>
							<p className='text-sm flex-shrink-0 text-[#E2E8FF]/50'>
								08 Januari 2024
							</p>
						</div>
						<h3 className='text-xl mt-3 font-medium'>
							How to build something with nextjs
						</h3>
						<p className='mt-6 text-[#E2E8FF]/50 font-light'>
							Description on how to build something with nextjs
						</p>
					</div>
				</article>
			</Link>
		</li>
	);
}
