import type { FooterContent } from '../types/content';
import { site } from '../config/site';
import { packages } from './packages';

export const footer: FooterContent = {
	eyebrow: 'Everything we do',
	// The footer columns mirror each package's own service items — the
	// packages data is the single source for both.
	services: packages.packages.map((pkg) => ({
		label: pkg.title,
		items: pkg.items.map((item) => item.label),
	})),
	items: [
		`© 2026 ${site.brand.word}${site.brand.dot}`,
		'Built for restaurants, by people who worked in them',
	],
};
