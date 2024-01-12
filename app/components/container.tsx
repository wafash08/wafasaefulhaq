import clsx from 'clsx';

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: React.HTMLAttributes<HTMLDivElement>['className'];
}) {
	return (
		<div className={clsx('max-w-[1200px] mx-auto', className)}>{children}</div>
	);
}
