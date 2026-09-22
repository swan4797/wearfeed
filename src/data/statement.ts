import type { StatementSection } from '../types/content';

// The merged agency/about section. Supersedes the old chef quote and closure
// lead copy; the closure figures themselves still come from closures.ts.
export const statement: StatementSection = {
	eyebrow: 'Agency',
	heading: 'We start in the kitchen. Everything else follows.',
	cols: [
		[
			'Feed is a restaurant agency led by a head chef who grew up on the pass in Asian restaurants across the UK. We work on every part of a restaurant — the kitchen, the menu, the website, the bookings and the social media — so owners deal with one company instead of five.',
			'We work the way a kitchen works. We turn up, watch a service and read the invoices. Then we tell you what we found, before we tell you what it costs to fix.',
			"Most restaurants we walk into are losing money on a dish they're proud of, and don't know which one. Posting more won't fix that.",
		],
		[
			'Restaurants are closing across the UK, and Asian restaurants are being hit hardest. Not because the food got worse. Suppliers, energy and wages all went up, and menus priced years ago never caught up.',
			"The ones that survive didn't find a marketing trick. They found out what each plate cost them and changed it. Then they told people about it properly.",
			"That's the order we work in: kitchen first, then everything else. And if we don't think we can pay for ourselves, we'll tell you on the phone.",
		],
	],
};
