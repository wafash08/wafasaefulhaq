export default function BackgroundGrid({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className='relative w-full bg-no-repeat'
			style={{
				backgroundImage: 'url("/images/overlay.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
			}}
		>
			<div
				className='absolute inset-0 bg-transparent bg-gradient-to-b from-slate-100 via-slate-100 to-slate-50'
				style={{
					backgroundImage: `url('/images/bg-grid.svg')`,
					maskImage: 'linear-gradient(to bottom, transparent, #000)',
				}}
			/>
			{children}
		</div>
	);
}
