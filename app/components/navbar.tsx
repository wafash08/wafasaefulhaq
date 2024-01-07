import { Tabs } from './tabs';

export const NAVIGATIONS = [
	{ label: 'About', id: 'about' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Blog', id: 'blog' },
	{ label: 'Snippet', id: 'snippet' },
];

export default function Navbar() {
	return <Tabs tabs={NAVIGATIONS} />;
}
