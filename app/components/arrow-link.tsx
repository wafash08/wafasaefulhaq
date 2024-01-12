import { RefCallback, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';

export default function ArrowLink({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) {
	const circumference = 28 * 2 * Math.PI;
	const [pathLength, setPathLength] = useState(circumference);
	const ref = useRef<HTMLElement | null>(null);

	const setRef: RefCallback<HTMLElement> = useCallback(element => {
		ref.current = element;
	}, []);

	useEffect(() => {
		const el = ref.current;
		if (!el) {
			return;
		}

		const runAnimation = () => {
			setPathLength(0);
		};

		const clearAnimation = () => {
			setPathLength(circumference);
		};

		const pointerdown = () => {
			runAnimation();
			// pointer events can be cancelled due to which el would never receive
			// a pointerup nor pointercancel event. Listen on the window for those
			// after we received the pointerdown event, and only catch it once. But
			// not with { once: true }, because we want te remove both of them, once
			// of them has been received.
			const pointerup = () => {
				clearAnimation();
				window.removeEventListener('pointerup', pointerup);
				window.removeEventListener('pointercancel', pointerup);
			};

			window.addEventListener('pointerup', pointerup);
			window.addEventListener('pointercancel', pointerup);
		};

		const keydown = (event: KeyboardEvent) => {
			if (event.key !== 'Enter') {
				return;
			}

			runAnimation();

			// when clicking a link, the keyup doesn't need to come from the keydown
			// element. We listen on the window instead, but only once.
			const keyup = () => clearAnimation();
			window.addEventListener('keyup', keyup, { once: true });
		};

		el.addEventListener('pointerenter', runAnimation);
		el.addEventListener('pointerleave', clearAnimation);
		el.addEventListener('focus', runAnimation);
		el.addEventListener('blur', clearAnimation);
		el.addEventListener('pointerdown', pointerdown);
		el.addEventListener('keydown', keydown);

		return () => {
			el.removeEventListener('pointerenter', runAnimation);
			el.removeEventListener('pointerleave', clearAnimation);
			el.removeEventListener('focus', runAnimation);
			el.removeEventListener('blur', clearAnimation);
			el.removeEventListener('pointerdown', pointerdown);
			el.removeEventListener('keydown', keydown);
		};
	}, [circumference]);

	return (
		<Link
			to={to}
			className='text-[#E2E8FF]/80 inline-flex items-center text-left font-medium cursor-pointer transition focus:outline-none'
			ref={setRef}
		>
			<span
				className={clsx(
					'mr-8 font-medium text-lg transition-colors',
					pathLength === 0 && 'text-white'
				)}
			>
				{children}
			</span>
			<div className='relative inline-flex h-14 w-14 flex-none items-center justify-center p-1'>
				<div className='absolute text-gray-600'>
					<svg
						width='60'
						height='60'
						viewBox='0 0 60 60'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='30'
							cy='30'
							r='28'
							stroke='currentColor'
							strokeWidth='2'
							fill='transparent'
						/>
						<circle
							style={{
								strokeDasharray: `${circumference} ${circumference}`,
								transform: 'rotate(-90deg)',
								transformOrigin: '30px 30px',
								strokeDashoffset: pathLength,
							}}
							cx='30'
							cy='30'
							r='28'
							stroke='currentColor'
							strokeWidth='2'
							fill='transparent'
							className={clsx(
								'text-white transition-[stroke-dashoffset] duration-300'
							)}
						/>
					</svg>
				</div>
				<span
					style={
						pathLength === 0
							? { transform: 'translateX(4px)' }
							: { transform: 'none' }
					}
					className='transition-transform text-white'
				>
					<svg
						width={32}
						height={32}
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='-rotate-90'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z'
							fill='currentColor'
						/>
					</svg>
				</span>
			</div>
		</Link>
	);
}
