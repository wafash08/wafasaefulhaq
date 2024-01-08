import { Link } from '@remix-run/react';

export default function ProjectCard() {
	return (
		<li>
			<Link to='/projects/project-slug' className='block'>
				<article className='p-1 border border-[#E2E8FF]/10 rounded-lg transition-colors hover:bg-white/[0.01]'>
					<div className='p-4'>
						<h3 className='text-xl font-medium'>
							How to build something with nextjs
						</h3>
						<p className='mt-4 text-[#E2E8FF]/50 font-light'>
							Description on how to build something with nextjs
						</p>
						<div className='mt-4 flex items-center gap-2'>
							<p>Built with:</p>
							<ul className='flex items-center gap-1'>
								<li>
									<span>🙌</span>
								</li>
								<li>
									<span>🙌</span>
								</li>
								<li>
									<span>🙌</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='overflow-hidden relative rounded-[4px]'>
						<div className='absolute inset-0 border border-[#E2E8FF]/10 rounded-rounded-[4px]' />
						<img
							src='/images/neom.webp'
							alt='neom'
							className='aspect-video object-cover'
						/>
					</div>
				</article>
			</Link>
		</li>
	);
}
