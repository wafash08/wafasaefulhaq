import { Tabs } from './tabs';

const navigations = [
	{ label: 'About', id: 'about' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Blog', id: 'blog' },
	{ label: 'Snippet', id: 'snippet' },
];

export default function Navbar() {
	return <Tabs tabs={navigations} />;
}
