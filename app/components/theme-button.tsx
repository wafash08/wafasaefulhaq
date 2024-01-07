import { MoonIcon } from './icons';

export default function ThemeButton() {
	return (
		<button
			type='button'
			className='flex items-center justify-center border border-[#E2E8FF]/10 transition-colors duration-300 hover:border-white rounded-full w-14 h-14 p-1'
		>
			<span className='sr-only'>Switch to light mode</span>
			<MoonIcon />
		</button>
	);
}
