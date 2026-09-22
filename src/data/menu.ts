import type { MenuSheet } from '../types/content';

export const menu: MenuSheet = {
	heading: "We don't hand you a report. We hand you a plan.",
	lead: "Your menu, marked up after one service — with what we'd do about each line.",
	labels: {
		sheet: 'Evening menu',
		marked: 'Marked up after one service',
		caption: 'Kitchen & cost audit',
	},
	lines: [
		{
			dish: 'Crispy chilli beef',
			price: '£12.95',
			tone: 'warn',
			note: "Three cuts of prep, 40 minutes of a chef's day, £1.20 back. Same dish off one cut and a marinade the day before.",
		},
		{
			dish: 'Singapore noodles',
			price: '£9.50',
			tone: 'good',
			note: 'Your quiet earner. Sells all week, costs almost nothing. Put it where people look.',
		},
		{
			dish: 'Aromatic duck, half',
			price: '£18.00',
			tone: 'warn',
			struck: true,
			note: 'Loses £1.40 every time it leaves the pass. Wrong supplier, wrong price, six years unchanged. Off the menu, or re-sourced and re-priced by Friday.',
		},
	],
	foot: {
		label: 'Found in one day. Saved every month after.',
		total: '£2,900',
	},
};
