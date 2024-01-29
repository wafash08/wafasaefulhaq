import clsx from 'clsx';
import ArrowLink from './arrow-link';

export type Project = {
	title: string;
	description: string;
	credit: {
		link: string;
		to: string;
	};
	image: {
		src: string;
		alt: string;
	};
	gradient: {
		from: string;
		to: string;
	};
};

type ProjectCardProps = Project & { reverse: boolean };

export default function ProjectCard({
	description,
	image,
	title,
	credit,
	reverse,
	gradient,
}: ProjectCardProps) {
	const gradientTopLeft = {
		backgroundImage: `linear-gradient(to top left, ${gradient.from}, ${gradient.to})`,
	};
	const gradientTopRight = {
		backgroundImage: `linear-gradient(to top right, ${gradient.from}, ${gradient.to})`,
	};
	const gradientStyle = reverse ? gradientTopLeft : gradientTopRight;
	return (
		<li
			className={clsx(
				'md:flex items-center space-y-16 md:space-y-0',
				reverse && 'flex-row-reverse'
			)}
		>
			<div
				className={clsx(
					'w-full md:w-1/2 group',
					reverse ? 'md:pl-24' : 'md:pr-24'
				)}
			>
				<h2 className='font-bold text-3xl sm:text-4xl text-slate-900 leading-none mb-4'>
					{title}
				</h2>
				<p className='text-slate-600 mb-8'>
					<span>{description}</span>
					{credit ? (
						<>
							<span>A coding challenge from </span>
							<a
								href='https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158'
								target='_blank'
								rel='noreferrer noopener'
								className='underline decoration-transparent transition-colors duration-300 group-hover:decoration-slate-900 group-hover:text-slate-900'
							>
								frontendmentor.io
							</a>
						</>
					) : null}
				</p>
				<ArrowLink to='/projects/project-name'>Read more</ArrowLink>
			</div>
			<div className='relative w-full md:w-1/2 group'>
				<div
					className={clsx(
						'absolute inset-0 transform transition-transform duration-300 group-hover:rotate-0 rounded-lg',
						reverse
							? 'origin-bottom-left -rotate-3'
							: 'origin-bottom-right rotate-3'
					)}
					style={gradientStyle}
				></div>
				<div className='relative z-10 rounded-lg'>
					<div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
						<div className='overflow-hidden rounded-sm'>
							<img src={image.src} alt={image.alt} />
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
