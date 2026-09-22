// Shared content types. Imported by both the data files (src/data) and the
// components that render them, so a shape change surfaces in both places.

import type { ImageMetadata } from 'astro';

export interface NavItem {
	label: string;
	href: string;
}

/** Full-screen burger menu: trigger label, links and contact eyebrows. */
export interface MenuContent {
	trigger: string;
	links: NavItem[];
	write: string;
	call: string;
}

export interface SiteConfig {
	/** Brand wordmark, split so the mark can be styled independently. */
	brand: { word: string; dot: string };
	phone: { label: string; href: string };
	email: string;
	partnerName: string;
	areaCovered: string;
	/** Masthead in-page navigation. */
	nav: NavItem[];
	menu: MenuContent;
}

/** Rotating circular badge: ring caption plus its accessible name. */
export interface BadgeContent {
	ring: string;
	label: string;
}

/**
 * Optional media behind the hero panel. Backgrounds are decorative — copy
 * never depends on them — so images carry no alt text and videos play
 * muted, looped and inline. The poster stands in for the video under
 * prefers-reduced-motion.
 */
export type HeroBackground =
	| { type: 'image'; src: string }
	| { type: 'video'; src: string; poster?: string };

export interface Hero {
	/** Small uppercase label above the h1. */
	eyebrow: string;
	/** The page's single <h1>; an array renders one line per entry. */
	h1: string | string[];
	/** Second h1 line, rendered muted on its own line. */
	h1Line2?: string;
	/** Supporting paragraph under the h1. */
	sub: string;
	/** `modal` opens that Modal id on click; `href` stays the no-JS fallback. */
	cta: { label: string; href: string; aside: string; modal?: string };
	/** Rotating corner badge; omit on inner pages. */
	badge?: BadgeContent & { href: string };
}

export interface MenuLine {
	dish: string;
	price: string;
	note: string;
	/** 'good' renders the note in the positive colour. */
	tone: 'warn' | 'good';
	/** Strike through the dish name and price. */
	struck?: boolean;
}

export interface MenuSheet {
	/** Caption line under the showcase panel. */
	heading: string;
	/** Kept for the data shape; superseded by labels.marked in the layout. */
	lead: string;
	/** Eyebrow labels: the sheet header pair and the caption block. */
	labels: { sheet: string; marked: string; caption: string };
	lines: MenuLine[];
	foot: { label: string; total: string };
}

export interface Fact {
	figure: string;
	detail: string;
	source: string;
}

export interface ClosureSection {
	heading: string;
	lead: string;
	facts: Fact[];
	after: string;
}

/** The merged agency/about section: prose columns over the closure figures. */
export interface StatementSection {
	eyebrow: string;
	heading: string;
	/** One array of paragraphs per column. */
	cols: string[][];
}

/** One linked service row in a landing package card. */
export interface PackageItem {
	label: string;
	href: string;
}

export interface Package {
	/** Price or bracketed placeholder, e.g. "[ £xxx ]". */
	price: string;
	cadence: string;
	title: string;
	body: string;
	/** The services in this package. Also mirrored by the footer lists. */
	items: PackageItem[];
}

export interface PackagesSection {
	eyebrow: string;
	heading: string;
	lead: string;
	packages: Package[];
}

/** Circular social button in the closing section's base row. */
export interface SocialLink {
	label: string;
	href: string;
	icon: 'facebook' | 'instagram' | 'x';
}

export interface ClosingSection {
	eyebrow: string;
	heading: string;
	body: string;
	/** `modal` opens that Modal id on click; `href` stays the no-JS fallback. */
	cta: { label: string; href: string; modal?: string };
	badge: BadgeContent;
	/** Label above the address lines (area covered + body). */
	locationEyebrow: string;
	socials: SocialLink[];
	/** Small uppercase legal/utility links under the socials. */
	legal: NavItem[];
}

/** One service: a landing-card row and a dedicated page's worth of copy. */
export interface Service {
	slug: string;
	title: string;
	/** Hero image override; falls back to the package image. */
	image?: ImageMetadata;
	/** One sentence — the service hero's supporting line. */
	summary: string;
	/** Statement heading for the page's intro-text body section. */
	statement: string;
	/** 2–3 ruled body blocks: the problem, what we do, what you get. */
	blocks: IntroBlock[];
	seoTitle: string;
	seoDescription: string;
}

/** A package: landing-card copy plus its services. Single source of truth. */
export interface ServicePackage {
	/** Zero-padded label number, e.g. '01'. */
	number: string;
	slug: string;
	title: string;
	/** Hero image for the package page and its services (unless overridden). */
	image: ImageMetadata;
	/** Package page hero heading. */
	headline: string;
	/** Package page hero supporting line. */
	intro: string;
	/** Price or bracketed placeholder, e.g. "[ £xxx ]". */
	price: string;
	cadence: string;
	/** Landing package-card body. */
	cardBody: string;
	services: Service[];
}

/** One ruled block in an intro-text section: bold subhead over prose. */
export interface IntroBlock {
	heading: string;
	/** One paragraph, or several. */
	body: string | string[];
}

/** Intro-text section for static pages (service detail, about, …). */
export interface IntroTextContent {
	eyebrow: string;
	heading: string;
	blocks: IntroBlock[];
}

/** Decorative drifting place-name band. */
export interface PlacesBand {
	eyebrow: string;
	places: string[];
}

/**
 * One case in the work grid. The tile is either a cover image or a flat
 * tone from the palette with an optional centred mark (client wordmark or
 * bracketed placeholder). `featured` renders it at double width — the tile
 * stays square, so it lines up with two stacked square tiles beside it.
 */
export interface WorkItem {
	/** Small uppercase client line under the tile. */
	client: string;
	/** Bold one-to-two-line description under the client line. */
	title: string;
	/** Case-study link; omitted items render as plain cards. */
	href?: string;
	featured?: boolean;
	tile:
		| { kind: 'image'; src: ImageMetadata; alt?: string }
		| { kind: 'video'; src: string; poster?: string }
		| { kind: 'tone'; tone: 'panel' | 'bone' | 'ink'; mark?: string };
}

export interface WorkSection {
	eyebrow: string;
	heading: string;
	items: WorkItem[];
}

export interface ServiceGroup {
	label: string;
	items: string[];
}

export interface FooterContent {
	eyebrow: string;
	services: ServiceGroup[];
	/** Bottom rule line entries (copyright, tagline). */
	items: string[];
}
