import type { ClosingSection } from '../types/content';
import { site } from '../config/site';

export const closing: ClosingSection = {
	eyebrow: 'Contact',
	heading: "Let's talk straight.",
	body: 'We travel to the restaurant. Always.',
	cta: { label: site.phone.label, href: site.phone.href, modal: 'contact-modal' },
	badge: { ring: 'Call us', label: 'Call us' },
	locationEyebrow: 'Location',
	socials: [
		{ label: 'Facebook', href: '#', icon: 'facebook' },
		{ label: 'Instagram', href: '#', icon: 'instagram' },
		{ label: 'X', href: '#', icon: 'x' },
	],
	legal: [
		{ label: 'Privacy policy', href: '#' },
		{ label: 'Legal notice', href: '#' },
		{ label: 'Terms & conditions', href: '#' },
		{ label: 'Accessibility', href: '#' },
		{ label: 'FAQ', href: '#' },
		{ label: 'Contact', href: '#contact' },
		{ label: 'Cookie settings', href: '#' },
	],
};
