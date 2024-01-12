import {
	useState,
	PointerEvent,
	FocusEvent,
	useEffect,
	useRef,
	CSSProperties,
} from 'react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';

type Tab = { label: string; id: string };

type TabsProps = {
	tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
	const [anchorRefs, setAnchorRefs] = useState<Array<HTMLAnchorElement | null>>(
		[]
	);

	useEffect(() => {
		setAnchorRefs(prev => prev.slice(0, tabs.length));
	}, [tabs.length]);

	const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
	const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

	const navRef = useRef<HTMLDivElement>(null);
	const navRect = navRef.current?.getBoundingClientRect();

	// state related to `hovered` animation
	const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);

	const onLeaveTabs = () => {
		// reset `isInitialHoveredElement` when the pointer leaves the tabs
		setIsInitialHoveredElement(true);
		setHoveredTabIndex(null);
	};

	const onEnterTab = (
		e: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
		i: number
	) => {
		if (!e.target || !(e.target instanceof HTMLAnchorElement)) return;
		setHoveredTabIndex(prev => {
			// set `isInitialHoveredElement` if the value is being assigned
			// from == null (pointer has entered tabs component)
			if (prev != null && prev !== i) {
				setIsInitialHoveredElement(false);
			}
			return i;
		});
		setHoveredRect(e.target.getBoundingClientRect());
	};

	const hoverStyles: CSSProperties = { opacity: 0 };
	if (navRect && hoveredRect) {
		hoverStyles.transform = `translateX(${hoveredRect.left - navRect.left}px)`;
		hoverStyles.width = hoveredRect.width;
		hoverStyles.height = hoveredRect.height;
		hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
		hoverStyles.transitionProperty = isInitialHoveredElement
			? 'opacity'
			: 'width, transform, opacity';
		hoverStyles.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
	}

	return (
		<nav
			ref={navRef}
			className='relative flex items-center flex-shrink-0'
			onPointerLeave={onLeaveTabs}
		>
			<div
				className='absolute top-[3px] left-0 bg-slate-100 border border-slate-200 rounded-full duration-300'
				style={hoverStyles}
			/>
			<ul className='flex items-center rounded-full p-[2px] border border-slate-200 relative'>
				{tabs.map((item, i) => {
					return (
						<li key={item.id}>
							<Link
								to={item.id}
								className={clsx(
									'font-inter py-2 px-5 flex items-center justify-center rounded-full text-slate-600 transition-colors hover:text-slate-900 select-none'
								)}
								ref={el => (anchorRefs[i] = el)}
								onPointerEnter={e => onEnterTab(e, i)}
								onFocus={e => onEnterTab(e, i)}
							>
								{item.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
