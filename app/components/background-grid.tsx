const maskDirection = {
	bottom: 'to bottom',
	top: 'to top',
};

type Direction = 'bottom' | 'top';

export default function BackgroundGrid({
	children,
	direction = 'bottom',
}: {
	children: React.ReactNode;
	direction?: Direction;
}) {
	return (
		<div
			className='relative w-full bg-no-repeat bg-bottom'
			style={{
				backgroundImage: 'url("/images/overlay.jpg")',
			}}
		>
			<div
				className='absolute inset-0 bg-transparent bg-gradient-to-b from-slate-100 via-slate-100 to-slate-50'
				style={{
					backgroundImage: `url('/images/bg-grid.svg')`,
					maskImage: `linear-gradient(${maskDirection[direction]}, transparent, #000)`,
				}}
			/>
			{children}
		</div>
	);
}
