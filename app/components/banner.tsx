import Container from './container';
import CTAButton from './cta-button';

function BannerTitle() {
	return (
		<h1 className='text-center'>
			{/* desktop */}
			<div className='hidden md:block'>
				<span className='block text-5xl font-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/50 to-[#e2e8ff]'>
					Transforming Ideas
				</span>
				<span className='block text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575e6]'>
					into Digital Experiences
				</span>
			</div>
			{/* mobile */}
			<div className='md:hidden'>
				<span className='block text-3xl font-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f0eef9]/50 to-[#e2e8ff]'>
					Transforming Ideas
				</span>
				<span className='block text-5xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575e6]'>
					into Digital Experiences
				</span>
			</div>
		</h1>
	);
}

export default function Banner() {
	return (
		<section className='pt-48 mb-20'>
			<Container>
				<BannerTitle />
				<p className='text-center text-[#E2E8FF]/80 text-base md:text-lg mt-8 font-light tracking-wide'>
					Let&apos;s make Your vision a digital reality, together.
				</p>
				<div className='flex justify-center items-center flex-wrap gap-4 md:gap-8 mt-14'>
					<div>
						<CTAButton />
					</div>
					<div>
						<div className='flex items-center gap-2 md:gap-3'>
							<span className='flex relative h-2 w-2'>
								<span className='absolute -top-1 -left-1 rounded-full inline-flex h-4 w-4 bg-cyan-400 opacity-50 animate-ping' />
								<span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-400' />
							</span>
							<span className='tracking-widest text-xs md:text-sm text-cyan-400'>
								AVAILABLE FOR HIRE
							</span>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
