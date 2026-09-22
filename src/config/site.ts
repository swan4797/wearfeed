import type { NavItem, SiteConfig } from '../types/content';

const nav: NavItem[] = [
	{ label: 'Packages', href: '#packages' },
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' },
];

// Single source for the bracketed placeholders in the reference comp. Fill
// these in once and every reference across the site updates. Global singletons
// live here; per-item placeholders (e.g. package prices) live with their item.
export const site: SiteConfig = {
	brand: { word: 'Feed', dot: '®' },
	phone: { label: '[ phone number ]', href: 'tel:+44' },
	email: '[ email address ]',
	partnerName: "[ Partner's name ]",
	areaCovered: '[ area covered ]',
	nav,
	menu: {
		trigger: 'menu',
		links: [{ label: 'Home', href: '#main' }, ...nav],
		write: 'Write to us',
		call: 'Call & visit',
	},
};
