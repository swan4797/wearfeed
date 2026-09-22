import type { WorkSection } from '../types/content';
import kitchenService from '../assets/videos/4253334-uhd_4096_2160_25fps.mp4';
import kitchenPrep from '../assets/images/pexels-goodcitizen-1315908.jpg';
import kitchenPass from '../assets/images/pexels-valeriya-27969839.jpg';

export const work: WorkSection = {
	eyebrow: 'Selected work',
	heading: 'Three kitchens, back in margin.',
	items: [
		{
			client: '[ Restaurant name ] — Manchester',
			title: 'Holistic relaunch. Menu, prep and ordering rebuilt.',
			featured: true,
			tile: { kind: 'video', src: kitchenService },
		},
		{
			client: '[ Restaurant name ]',
			title: 'Menu engineering & supplier reset',
			tile: { kind: 'image', src: kitchenPrep, alt: '' },
		},
		{
			client: '[ Restaurant name ]',
			title: 'Kitchen audit & costed relaunch plan',
			tile: { kind: 'image', src: kitchenPass, alt: '' },
		},
	],
};
