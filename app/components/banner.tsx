import Container from './container';
import CTAButton from './cta-button';

function BannerTitle() {
	return (
		<h1 className='text-center'>
			{/* desktop */}
			<div className='hidden md:block'>
				<span className='block text-5xl font-medium tracking-tight leading-tight text-slate-900'>
					Transforming Ideas
				</span>
				<span className='block text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
					into Digital Experiences
				</span>
			</div>
			{/* mobile */}
			<div className='md:hidden'>
				<span className='block text-3xl font-medium tracking-tight leading-tight text-slate'>
					Transforming Ideas
				</span>
				<span className='block text-5xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
					into Digital Experiences
				</span>
			</div>
		</h1>
	);
}

export default function Banner() {
	return (
		<Container>
			<BannerTitle />
			<p className='text-center text-slate-600 text-base md:text-lg mt-4 font-light tracking-wide'>
				Let&apos;s make Your vision a digital reality, together.
			</p>
			<div className='flex justify-center items-center flex-wrap gap-4 md:gap-8 mt-8'>
				<div>
					<CTAButton />
				</div>
				<div>
					<div className='flex items-center gap-2 md:gap-3'>
						<span className='flex relative h-2 w-2'>
							<span className='absolute -top-1 -left-1 rounded-full inline-flex h-4 w-4 bg-blue-500 opacity-50 animate-ping' />
							<span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500' />
						</span>
						<span className='tracking-widest text-xs md:text-sm text-blue-500'>
							AVAILABLE FOR HIRE
						</span>
					</div>
				</div>
			</div>
		</Container>
	);
}
