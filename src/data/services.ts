import type { Service, ServicePackage } from '../types/content';
import imgTickets from '../assets/images/pexels-betul-ustun-236006735-37539842.jpg';
import imgMenuRead from '../assets/images/pexels-ekrulila-28871007.jpg';
import imgPass from '../assets/images/pexels-emris-17086288.jpg';
import imgStove from '../assets/images/pexels-fatmacekmez-17303438.jpg';
import imgCardMachine from '../assets/images/pexels-kampus-6684788.jpg';
import imgInvoice from '../assets/images/pexels-kindelmedia-7688191.jpg';
import imgPricing from '../assets/images/pexels-leeloothefirst-8962460.jpg';
import imgRoom from '../assets/images/pexels-willianjusten-32715528.jpg';

// Single source of truth for the three packages and their services. The
// landing packages section (via packages.ts), the footer columns and the
// /services/* pages all read from here.
//
// All service body copy below is drafted and awaiting sign-off.
// TODO: copy review — every `statement`, `summary`, `blocks` and the
// drafted package headlines/intros for 01 and 02 (03's headline and intro
// were supplied).

export const packageHref = (pkg: ServicePackage) => `/services/${pkg.slug}/`;
export const serviceHref = (pkg: ServicePackage, service: Service) =>
	`/services/${pkg.slug}/${service.slug}/`;

export const servicePackages: ServicePackage[] = [
	{
		number: '01',
		slug: 'kitchen-and-cost',
		title: 'Kitchen & cost',
		image: imgTickets,
		// TODO: copy review — headline and intro drafted (package had none)
		headline: 'Know where the money goes.',
		intro:
			'We start in the kitchen: one day on site, a service worked, the invoices read. You leave with a costed plan for what to change and in what order.',
		price: '[ £xxx ]',
		cadence: 'one day, fixed',
		cardBody:
			'One day on site. We work a service, read your invoices, cost your top twenty dishes and price your suppliers against what they should be charging. You leave with a costed plan — what to change, in what order, and what each change is worth a month.',
		services: [
			{
				slug: 'dish-costing-and-gross-profit-analysis',
				image: imgInvoice,
				title: 'Dish costing and gross profit analysis',
				summary:
					'We cost every dish from your own invoices and show you which ones make money and which ones lose it.',
				statement: 'Most menus carry a dish that loses money every time it sells.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "The dining room is busy, the card machine keeps going, and there's still nothing left at the end of the month. When nobody has costed the menu against today's invoices, nobody knows which dishes are quietly paying for the others.",
					},
					{
						heading: 'What we do',
						body: 'We cost your dishes from your own invoices — every ingredient, at the price you actually pay for it. Then we set each dish’s cost against its menu price, so you can see the gross profit on every line of the menu.',
					},
					{
						heading: 'What you leave with',
						body: 'A costed menu, a list of the dishes that need a new price, a new recipe or a goodbye, and the order we’d tackle them in.',
					},
				],
				seoTitle: 'Dish costing and gross profit analysis — Feed®',
				seoDescription:
					'We cost every dish from your own invoices and show the gross profit on every line — which dishes earn, which lose, and what to change.',
			},
			{
				slug: 'supplier-price-review',
				title: 'Supplier price review',
				summary: 'We check what your suppliers charge you against what they should be charging.',
				statement: 'Supplier prices creep. Nobody rings you to say so.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Prices move a little at a time — a few pence on the invoice here, a pack size change there. Order by order it's invisible. Over a year it's real money, and it never comes back on its own.",
					},
					{
						heading: 'What we do',
						body: "We go through your supplier invoices line by line and compare what you pay against the market. Where you're paying over, we say so — and we help you go back to the supplier with the numbers in hand.",
					},
					{
						heading: 'What you leave with',
						body: "A clear list of what you're overpaying for, what a fair price looks like, and the conversation to have with each supplier.",
					},
				],
				seoTitle: 'Supplier price review for restaurants — Feed®',
				seoDescription:
					'We compare your supplier invoices against the market line by line, show where you are overpaying and back you up for the conversation.',
			},
			{
				slug: 'labour-and-prep-efficiency',
				image: imgPass,
				title: 'Labour and prep efficiency',
				summary: 'We watch how the kitchen actually runs and take the wasted hours out of prep.',
				statement: 'The same menu can take fewer hands.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Prep swells to fill the day. Dishes pick up extra steps over the years, two people end up doing what one section could, and the wage bill grows while the menu stays the same.',
					},
					{
						heading: 'What we do',
						body: 'We work a service and watch the prep list, not a spreadsheet. We look for the dishes that eat hours, the jobs done twice, and the prep that could be done once for several dishes.',
					},
					{
						heading: 'What you leave with',
						body: 'A prep plan that takes fewer hours to run, dish by dish, without changing what the guest eats.',
					},
				],
				seoTitle: 'Labour and prep efficiency for restaurant kitchens — Feed®',
				seoDescription:
					'We watch a real service, find the dishes and jobs that eat hours, and rework prep so the same menu takes fewer hands.',
			},
			{
				slug: 'waste-and-yield-control',
				title: 'Waste and yield control',
				summary: 'We find where food is being paid for twice — in the bin and on the plate.',
				statement: 'Waste is money you already spent.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Trim that goes in the bin, portions that drift bigger, prep thrown away on Monday because too much was done on Friday. None of it shows up on an invoice; all of it comes out of the margin.',
					},
					{
						heading: 'What we do',
						body: 'We follow the food from the delivery door to the pass. We weigh what matters, check portions against what the dish was costed at, and look at what the bins say about the prep list.',
					},
					{
						heading: 'What you leave with',
						body: 'A short list of where food is being lost, what it costs, and the habits and portions that stop it.',
					},
				],
				seoTitle: 'Waste and yield control for restaurants — Feed®',
				seoDescription:
					'We follow food from delivery to pass, find where it is lost — trim, portions, over-prep — and set the habits that stop it.',
			},
			{
				slug: 'energy-and-contract-review',
				image: imgStove,
				title: 'Energy and contract review',
				summary: 'We look at what you pay for energy and the contracts behind it.',
				statement: "The kitchen's biggest bills are set outside the kitchen.",
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Energy contracts roll over, standing charges creep, and equipment runs all day whether the room is full or not. It's the bill everyone dreads and nobody reads.",
					},
					{
						heading: 'What we do',
						body: "We read the bills and the contracts, check what you're paying against what's available, and walk the kitchen for the habits and kit that burn money — what's on when it doesn't need to be.",
					},
					{
						heading: 'What you leave with',
						body: 'A plain view of what you pay now, what to ask your supplier for, and the switch-off habits that cost nothing.',
					},
				],
				seoTitle: 'Energy and contract review for restaurants — Feed®',
				seoDescription:
					'We read your energy bills and contracts, check them against what is available, and find the habits and kit that burn money.',
			},
			{
				slug: 'vat-review',
				title: 'VAT review, with accountant partner',
				summary:
					'With a qualified accountant partner, we review how VAT is set up across your menu, takeaway and delivery.',
				statement: 'VAT on food is fiddly. Getting it wrong costs either way.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Eat in, takeaway, delivery, service charge — each can carry different VAT treatment, and menus change faster than the bookkeeping. Set up wrong, you either overpay quietly or build up a problem.',
					},
					{
						heading: 'What we do',
						body: 'We review how VAT is applied across your menu and channels together with a qualified accountant partner. We don’t give tax advice ourselves — the accountant leads on the tax position; we bring the menu and the till data.',
					},
					{
						heading: 'What you leave with',
						body: 'A clear picture of how your VAT is set up today and, where the accountant finds something to fix, a plan to put it right properly.',
					},
				],
				seoTitle: 'VAT review with accountant partner — Feed®',
				seoDescription:
					'We review how VAT is applied across your menu, takeaway and delivery with a qualified accountant partner — and map what to put right.',
			},
			{
				slug: 'chef-recruitment-and-retention',
				title: 'Chef recruitment and retention',
				summary: 'We help you find chefs worth keeping and build a kitchen they stay in.',
				statement: "Good chefs don't leave good kitchens.",
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Every departure costs money: agency cover, retraining, dishes that drift while the section settles. Hiring in a rush leads to hiring again a few months later.',
					},
					{
						heading: 'What we do',
						body: 'We help you write the job as it really is, find candidates through the trade rather than the job boards alone, and sit in on trial shifts. Then we look at the rota, the prep load and the pay against what keeps people.',
					},
					{
						heading: 'What you leave with',
						body: "A hire you chose properly, and a kitchen set up so you're not doing this again next season.",
					},
				],
				seoTitle: 'Chef recruitment and retention — Feed®',
				seoDescription:
					'We help you hire chefs worth keeping — honest job specs, trade networks, trial shifts — and set the kitchen up so they stay.',
			},
			{
				slug: 'weekly-financial-targets',
				title: 'Weekly financial targets',
				summary:
					'We set the handful of numbers to watch each week, so problems show up in days, not months.',
				statement: "You can't steer a kitchen on a quarterly P&L.",
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "The accountant's numbers arrive months after the service that caused them. By the time a bad month shows up, it's already been paid for.",
					},
					{
						heading: 'What we do',
						body: 'We set up a handful of weekly numbers — food cost, wages, covers, takings — that take minutes to collect and tell you how the week actually went, in time to act on it.',
					},
					{
						heading: 'What you leave with',
						body: 'A one-page weekly routine: the numbers to write down, what good looks like for your restaurant, and what to do when a number goes the wrong way.',
					},
				],
				seoTitle: 'Weekly financial targets for restaurants — Feed®',
				seoDescription:
					'A handful of weekly numbers — food cost, wages, covers — that show how the week went in time to act, not months later.',
			},
		],
	},
	{
		number: '02',
		slug: 'menu-and-margin',
		title: 'Menu & margin',
		image: imgMenuRead,
		// TODO: copy review — headline and intro drafted (package had none)
		headline: 'Earn more from the food you already cook.',
		intro:
			'We rebuild the menu around what actually earns — fewer hands on the same dishes, better prices from suppliers, and a menu designed to sell what makes money.',
		price: '[ £xxx ]',
		cadence: 'project',
		cardBody:
			"We cut what loses money, rebuild the dishes worth keeping and rework prep so the same food takes fewer hands. Sourcing moves to where it's cheaper, ordering gets a system, and the menu is redesigned around what you actually earn on.",
		services: [
			{
				slug: 'menu-engineering',
				image: imgPricing,
				title: 'Menu engineering',
				summary:
					'We redesign the menu around what earns, so the dishes that make money are the ones that sell.',
				statement: 'The menu is a shop window. Most are arranged by habit.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Big menus hide the good dishes. The plates that earn sit in the corner while the expensive-to-make favourites take the best spots, and nobody has checked which is which since the menu was printed.",
					},
					{
						heading: 'What we do',
						body: 'We put the costings against the sales mix: what sells and earns, what sells and loses, what does neither. Then we rework the menu around it — what stays, what goes, and what gets moved to where people actually look.',
					},
					{
						heading: 'What you leave with',
						body: 'A shorter, better-arranged menu where the dishes you want to sell are the ones that get ordered.',
					},
				],
				seoTitle: 'Menu engineering for restaurants — Feed®',
				seoDescription:
					'We set costings against your sales mix and rework the menu — what stays, what goes, what moves to where people look.',
			},
			{
				slug: 'dish-development',
				title: 'Dish development',
				summary: 'We build and rework dishes that earn properly without adding prep.',
				statement: 'A good dish earns its place twice — on the plate and on the sheet.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Menus need new dishes, but new dishes usually mean new ingredients, new prep and new ways to lose margin. The safest new dish is one built from what the kitchen already holds.',
					},
					{
						heading: 'What we do',
						body: 'We develop dishes with your kitchen, not for it — built from ingredients you already buy, prep your sections can already do, and costed before they ever reach the menu.',
					},
					{
						heading: 'What you leave with',
						body: 'Dishes that fit your kitchen, priced right from day one, with a recipe the whole brigade can repeat.',
					},
				],
				seoTitle: 'Dish development for restaurants — Feed®',
				seoDescription:
					'New dishes built from what your kitchen already buys and preps, costed before they reach the menu.',
			},
			{
				slug: 'local-market-and-demand-analysis',
				title: 'Local market and demand analysis',
				summary: 'We look at what your street actually wants and where the gaps are.',
				statement: "What sells on your street matters more than what's trending.",
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'A menu can be right for the food and wrong for the postcode. Prices pitched against the wrong neighbours, dishes nobody nearby is looking for, quiet nights that are busy two streets over.',
					},
					{
						heading: 'What we do',
						body: "We look at who eats near you and when: what the street searches for, what the neighbours charge, where people go on the nights you're quiet, and what nobody nearby does well.",
					},
					{
						heading: 'What you leave with',
						body: 'A plain read of your local market — where you sit in it, what to charge, and the gap worth owning.',
					},
				],
				seoTitle: 'Local market and demand analysis — Feed®',
				seoDescription:
					'Who eats near you, what they pay elsewhere, and the gap on your street worth owning — read plainly.',
			},
			{
				slug: 'recipe-standardisation',
				title: 'Recipe standardisation and spec sheets',
				summary:
					"We write the recipes down properly so every plate comes out the same, whoever's cooking.",
				statement: 'If the recipe lives in one chef’s head, so does your margin.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Portions drift, dishes change on Sundays, and when the chef who built the menu leaves, the dishes leave with them. Consistency isn't a talent problem — it's a paperwork problem.",
					},
					{
						heading: 'What we do',
						body: 'We write spec sheets for the dishes that matter: quantities, method, portion, plate, photo. Short enough that the section actually uses them mid-service.',
					},
					{
						heading: 'What you leave with',
						body: 'A book of specs the kitchen cooks from, so the dish the guest gets on Tuesday is the one you costed on Monday.',
					},
				],
				seoTitle: 'Recipe standardisation and spec sheets — Feed®',
				seoDescription:
					'Spec sheets the kitchen actually uses — quantities, method, portion, photo — so every plate matches the one you costed.',
			},
			{
				slug: 'supplier-sourcing-and-negotiation',
				title: 'Supplier sourcing and negotiation',
				summary: 'We find the right suppliers for your menu and get you a fair price from them.',
				statement: 'Loyalty is worth something. So is a second quote.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Most kitchens buy from the suppliers they've always bought from. Some of those relationships earn their keep. Others survive because nobody has priced the alternative.",
					},
					{
						heading: 'What we do',
						body: 'We work out what your menu actually needs, find suppliers who are strong in exactly that, and get quotes you can set side by side. Where the current supplier is right, we help you negotiate; where they’re not, we help you move without the kitchen feeling it.',
					},
					{
						heading: 'What you leave with',
						body: "The right suppliers for what you cook, at prices you've seen compared, with any switch managed around service.",
					},
				],
				seoTitle: 'Supplier sourcing and negotiation — Feed®',
				seoDescription:
					'We match suppliers to what your menu needs, put quotes side by side, and manage the negotiation or the switch around service.',
			},
			{
				slug: 'stock-and-ordering-systems',
				title: 'Stock and ordering systems',
				summary:
					"We put a simple ordering routine in place so you buy what you'll sell and nothing more.",
				statement: 'Ordering by memory buys too much of the wrong things.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Orders go in from memory at midnight, the walk-in fills with 'just in case', and money sits on shelves going soft. Meanwhile the one thing you needed runs out on Saturday.",
					},
					{
						heading: 'What we do',
						body: 'We build an ordering routine around your par levels and your sales pattern: what to count, when to order, how much, from whom. Simple enough to run on paper if that suits the kitchen.',
					},
					{
						heading: 'What you leave with',
						body: 'An ordering system the kitchen actually follows — less money sitting in the walk-in, fewer Saturday surprises.',
					},
				],
				seoTitle: 'Stock and ordering systems for restaurants — Feed®',
				seoDescription:
					'A simple ordering routine built on par levels and your sales pattern — buy what you will sell, stop running out on Saturdays.',
			},
			{
				slug: 'menu-design-and-print',
				title: 'Menu design and print',
				summary:
					'We design and print a menu that reads well, sells the right dishes and looks like your restaurant.',
				statement: 'Every guest reads the menu. Design it like it matters.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Laminated pages, tiny type, forty dishes fighting for attention — the menu is the most-read thing in the restaurant and often the least designed.',
					},
					{
						heading: 'What we do',
						body: 'We design the menu around the engineering: the dishes you earn on get the space and the placing, the layout reads at a glance, and the look belongs to your room. Then we handle the print properly.',
					},
					{
						heading: 'What you leave with',
						body: 'A menu guests can read, staff can sell from, and you can afford to reprint when prices move.',
					},
				],
				seoTitle: 'Menu design and print — Feed®',
				seoDescription:
					'Menus designed around what earns — clear to read, easy to sell from, printed properly and affordable to reprint.',
			},
		],
	},
	{
		number: '03',
		slug: 'brand-and-demand',
		title: 'Brand & demand',
		image: imgRoom,
		headline: "The food's good. Nobody's walking in.",
		intro:
			'We make the restaurant look as good as the food, easy to find and easy to book, then keep it in front of the right people.',
		price: '[ £xxx ]',
		cadence: 'monthly or project',
		cardBody:
			"The food's good. Nobody's walking in. We make the restaurant look as good as the food, easy to find and easy to book, then keep it in front of the right people.",
		services: [
			{
				slug: 'brand-identity-and-naming',
				title: 'Brand identity and naming',
				summary: 'We give the restaurant a name, look and voice that match how good the food is.',
				statement: 'People decide from the pavement.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'The food inside is better than the sign outside says. A tired logo, a menu in four fonts and a name that doesn’t travel are all telling the street the wrong story.',
					},
					{
						heading: 'What we do',
						body: 'We work out what the restaurant is actually about, then build the identity around it — name if needed, mark, colours, type, and the words you use to describe yourselves.',
					},
					{
						heading: 'What you leave with',
						body: 'An identity that looks right on the sign, the menu, the box and the phone screen — and a simple set of rules so it stays consistent.',
					},
				],
				seoTitle: 'Brand identity and naming for restaurants — Feed®',
				seoDescription:
					'A name, look and voice that match the food — sign, menu, box and screen, with simple rules to keep it consistent.',
			},
			{
				slug: 'website-design',
				title: 'Website design, build and hosting',
				summary:
					'We design, build and host a fast site with the menu, the hours and the booking front and centre.',
				statement: 'Most restaurant websites answer everything except what people ask.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "People come for four things: are you open, what's on the menu, where are you, can I book. If they can't find those on a phone in seconds, they're on to the next place.",
					},
					{
						heading: 'What we do',
						body: 'We design and build the site around those questions, make it fast on a phone, and host it so it stays up without you thinking about it. Menus update without a developer.',
					},
					{
						heading: 'What you leave with',
						body: 'A site that loads fast, reads clearly, takes bookings, and stays yours — no platform taking a cut of every table.',
					},
				],
				seoTitle: 'Restaurant website design, build and hosting — Feed®',
				seoDescription:
					'A fast site built around what guests ask — hours, menu, directions, booking — hosted and easy to update.',
			},
			{
				slug: 'booking-system',
				image: imgCardMachine,
				title: 'Commission-free booking system with deposits',
				summary:
					'We set up bookings on your own site, with deposits if you want them and no commission per cover.',
				statement: "Your tables shouldn't pay rent to a booking platform.",
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: "Booking platforms charge per cover, own the guest's details and sit between you and your own tables. No-shows still hurt, and the commission never stops.",
					},
					{
						heading: 'What we do',
						body: 'We set up a booking system on your own website: your calendar, your rules, deposits or card holds for the nights that need them, and reminders that cut no-shows.',
					},
					{
						heading: 'What you leave with',
						body: 'Bookings that cost you nothing per cover, guest details that stay yours, and quieter no-show numbers.',
					},
				],
				seoTitle: 'Commission-free restaurant bookings with deposits — Feed®',
				seoDescription:
					'Bookings on your own site — your calendar, deposits where needed, reminders that cut no-shows, no commission per cover.',
			},
			{
				slug: 'google-business-profile-optimisation',
				title: 'Google Business Profile optimisation',
				summary: 'We fix and maintain the listing people actually find you by.',
				statement: 'For most guests, your Google listing is the front door.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'More people see your Google listing than your website. Wrong hours, old photos, an unclaimed profile or unanswered questions — every one of them costs covers.',
					},
					{
						heading: 'What we do',
						body: 'We claim and complete the profile properly: hours, menu, photos, attributes, posts, and answers to the questions people ask. Then we keep it current, because listings rot.',
					},
					{
						heading: 'What you leave with',
						body: "A listing that's accurate, looks appetising, and shows up when your street searches for somewhere to eat.",
					},
				],
				seoTitle: 'Google Business Profile optimisation for restaurants — Feed®',
				seoDescription:
					'We claim, complete and maintain the Google listing guests actually find you by — hours, menu, photos, posts, answers.',
			},
			{
				slug: 'food-photography',
				title: 'Food photography',
				summary: 'We photograph your food so it looks like it tastes.',
				statement: 'People eat with their eyes first, usually on a phone.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Dark phone photos on the listing, stock images on the menu, dishes that look nothing like the plate that arrives. The food deserves better evidence.',
					},
					{
						heading: 'What we do',
						body: 'We shoot your actual dishes in your actual room, framed for where they’ll be used — the listing, the site, the menu, social.',
					},
					{
						heading: 'What you leave with',
						body: 'A library of photographs of your own food that work everywhere you need them, and a plan for keeping them fresh as the menu changes.',
					},
				],
				seoTitle: 'Food photography for restaurants — Feed®',
				seoDescription:
					'Your dishes, shot in your room, framed for listing, menu, website and social — photography that looks like the food tastes.',
			},
			{
				slug: 'social-media-management',
				title: 'Social media management',
				summary: 'We keep the restaurant in front of local people without you living on your phone.',
				statement: 'Nobody opened a restaurant to make content.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'The pages go quiet in a busy month, then get a burst of posts in a quiet one. Meanwhile the places around you are in people’s feeds every week.',
					},
					{
						heading: 'What we do',
						body: 'We plan and post for you: the dishes, the specials, the room, the people — aimed at the neighbourhood, not the algorithm. You approve; we handle the rest.',
					},
					{
						heading: 'What you leave with',
						body: 'A steady presence in local feeds that takes none of your evenings, and posts that look like your restaurant, not like everyone else’s.',
					},
				],
				seoTitle: 'Social media management for restaurants — Feed®',
				seoDescription:
					'A steady, local social presence — planned, posted and managed for you, aimed at your neighbourhood.',
			},
			{
				slug: 'review-management',
				title: 'Review management',
				summary: 'We answer the reviews, learn from the patterns and grow the good ones.',
				statement: 'Reviews are read by more people than your menu.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Unanswered one-stars sit at the top of the page for years. Good guests leave quietly. The next customer reads all of it before they’ve seen the food.',
					},
					{
						heading: 'What we do',
						body: 'We answer reviews in your voice — the good ones warmly, the bad ones calmly and quickly. We watch for patterns worth fixing in the restaurant, and make it easy for happy guests to say so publicly.',
					},
					{
						heading: 'What you leave with',
						body: 'A review page that reads like a well-run restaurant, and a steady flow of new reviews from the guests who loved it.',
					},
				],
				seoTitle: 'Review management for restaurants — Feed®',
				seoDescription:
					'Reviews answered in your voice, patterns fed back to the restaurant, and happy guests encouraged to say so publicly.',
			},
			{
				slug: 'pr-and-influencer-outreach',
				title: 'PR and influencer outreach',
				summary:
					'We get the restaurant written about and posted about by people your guests actually follow.',
				statement: 'A full room follows a good story.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Great cooking stays a secret without a push. The local press and the food accounts people follow are always looking for somewhere to write about — they just don’t know about you yet.',
					},
					{
						heading: 'What we do',
						body: 'We find the story in what you do — the dish, the history, the people — and put it in front of local press and the food voices your future guests follow. Invitations, not adverts.',
					},
					{
						heading: 'What you leave with',
						body: 'Coverage worth framing, posts that reach locals, and a restaurant that’s part of the conversation on its own street.',
					},
				],
				seoTitle: 'Restaurant PR and influencer outreach — Feed®',
				seoDescription:
					'We find the story in your restaurant and put it in front of local press and the food voices your guests follow.',
			},
			{
				slug: 'interior-and-guest-experience-review',
				title: 'Interior and guest experience review',
				summary: 'We walk through the restaurant as a guest and fix what the room is saying.',
				statement: 'The room talks before the kitchen does.',
				// TODO: copy review
				blocks: [
					{
						heading: 'What it looks like',
						body: 'Owners stop seeing their own room. The flickering bulb, the menu taped to the window, the table nobody wants — guests clock all of it in the first minute.',
					},
					{
						heading: 'What we do',
						body: 'We arrive as a guest: the search, the walk past the window, the greeting, the table, the toilets, the bill. We note what the experience says at each step, and what it should say.',
					},
					{
						heading: 'What you leave with',
						body: 'A room-by-room list of what to fix, ordered by what it costs against what guests notice.',
					},
				],
				seoTitle: 'Interior and guest experience review — Feed®',
				seoDescription:
					'We experience the restaurant as a guest — window, greeting, table, toilets, bill — and list what to fix in the order it matters.',
			},
		],
	},
];
