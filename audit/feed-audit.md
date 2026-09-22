# Feed landing page — copy and code audit

Audit date: 2026-09-21. Audit of `src/`, `astro.config.mjs`, `package.json`,
`reference/feed-landing-swiss.html`, and the built `dist/` output
(`astro build` on Astro 7.3.2). Audit-only: no source files were changed.
Judged against one reader: the owner of an independent Asian restaurant in the
UK, reading on a phone between services, sceptical of consultants, whom the
page must move to call.

## The five findings that matter most

1. **The reader cannot do the one thing the page exists for.** Every contact
   route is a placeholder: `[ phone number ]` and `[ email address ]` render
   verbatim (twice each), the phone links go to the incomplete `tel:+44`, the
   email links to an empty `mailto:`. The "Call us" badge — the page's closing
   CTA — dials nothing. (`src/config/site.ts:14-16`) — **High**
2. **~61 MB of autoplaying video ships to a phone reader.** The hero carries a
   40 MB 4096×2160 MP4, rendered as *two* `<video>` elements (backdrop +
   panel layer), plus a 21 MB UHD MP4 autoplaying in the work grid. For the
   stated reader — phone, between services — the page is effectively
   unloadable on mobile data. (`src/pages/index.astro:13`,
   `src/data/work.ts:2`) — **High**
3. **Eighteen links go to pages that don't exist.** Every package service item
   links to `/services/<slug>/`; no such routes exist in `src/pages`, so all
   18 links 404. The route strings are invented inside the component rather
   than coming from the data layer. (`src/components/sections/Packages.astro:9-14,41`) — **High**
4. **The case-study section presents invented work.** "Three kitchens, back in
   margin." sits above three tiles named `[ Restaurant name ]` with stock
   Pexels footage. To this page's specifically consultant-sceptical reader,
   unfinished proof reads as fabricated proof. (`src/data/work.ts:9-26`) — **High**
5. **The site is invisible and unshareable.** `site: 'https://example.com'`
   flows into the canonical URL and the entire sitemap; there is no Open
   Graph or Twitter markup (a link shared in WhatsApp — where this audience
   lives — renders bare), no structured data, no robots.txt.
   (`astro.config.mjs:8`, `src/layouts/BaseLayout.astro:15-25`) — **High**

Honourable mention, blocking conversion just as hard: the strongest offer in
the data — "Book a kitchen visit" / "One day, fixed price. You leave with a
costed plan, whether you work with us afterwards or not." — is never rendered
anywhere on the page (`src/data/hero.ts:8-13`; see Part 2).

---

## Part 1 — Copy inventory

Every user-facing string as it renders in `dist/index.html`, in page order.
Verbatim; apostrophes ship as `&#39;` (straight quotes) throughout.

### Document head

| String | Location |
|---|---|
| `Feed® — kitchen, menu and margin consulting for Asian restaurants` (title) | `src/consts.ts:2-3` `SITE_TITLE` |
| `Kitchen, menu and brand consulting for Asian restaurants, run by people who grew up in these kitchens. Three packages — cost, menu, demand.` (meta description) | `src/consts.ts:4-5` `SITE_DESCRIPTION` |

### Skip link

| String | Location |
|---|---|
| `Skip to content` | `src/layouts/BaseLayout.astro:27` (hardcoded) |

### Masthead (TopBar / Brandword / SiteMenu)

| String | Location |
|---|---|
| `Feed` + `®` (wordmark) | `src/config/site.ts:13` `brand.word` / `brand.dot` |
| `menu` (open trigger label) | `src/config/site.ts:20` `menu.trigger` |
| `menu` (close label, same string) + aria-label `Close menu` | trigger `site.ts:20`; aria-label hardcoded `src/components/sections/SiteMenu.astro:23` |
| nav aria-label `Site menu` | `src/components/sections/SiteMenu.astro:32` (hardcoded) |
| `Home` | `src/config/site.ts:21` `menu.links[0]` |
| `Packages` / `About` / `Contact` (menu links) | `src/config/site.ts:4-6` `nav` |
| `Write to us` | `src/config/site.ts:22` `menu.write` |
| `[ email address ]` | `src/config/site.ts:15` `email` |
| `Call & visit` | `src/config/site.ts:23` `menu.call` |
| `[ phone number ]` | `src/config/site.ts:14` `phone.label` |
| `[ area covered ]` | `src/config/site.ts:16` `areaCovered` |

### Hero — intro

| String | Location |
|---|---|
| `Kitchen, menu and margin consulting for Asian restaurants — United Kingdom` (eyebrow) | `src/data/hero.ts:4-5` `eyebrow` |
| `Grown up in Asian kitchens.` (h1) | `src/data/hero.ts:6` `h1` |
| `What we fix` (badge ring caption, repeated ×3, aria-hidden) | `src/data/hero.ts:14` `badge.ring` |
| aria-label `See what we fix` (badge link → `#packages`) | `src/data/hero.ts:14` `badge.label` |
| `↓` (badge arrow, aria-hidden) | `src/components/sections/Hero.astro:115` (hardcoded prop) |

### Hero — menu sheet (panel)

| String | Location |
|---|---|
| `Evening menu` | `src/data/menu.ts:7` `labels.sheet` |
| `Marked up after one service` | `src/data/menu.ts:8` `labels.marked` |
| `Crispy chilli beef` / `£12.95` | `src/data/menu.ts:13-15` `lines[0]` |
| `Three cuts of prep, 40 minutes of a chef's day, £1.20 back. Same dish off one cut and a marinade the day before.` | `src/data/menu.ts:16` `lines[0].note` |
| `Singapore noodles` / `£9.50` | `src/data/menu.ts:19-21` `lines[1]` |
| `Your quiet earner. Sells all week, costs almost nothing. Put it where people look.` | `src/data/menu.ts:22` `lines[1].note` |
| `Aromatic duck, half` / `£18.00` (struck through) | `src/data/menu.ts:25-28` `lines[2]` |
| `Loses £1.40 every time it leaves the pass. Wrong supplier, wrong price, six years unchanged. Off the menu, or re-sourced and re-priced by Friday.` | `src/data/menu.ts:29` `lines[2].note` |
| `Found in one day. Saved every month after.` / `£2,900` | `src/data/menu.ts:32-35` `foot` |

### Work grid

| String | Location |
|---|---|
| `Selected work` (eyebrow) | `src/data/work.ts:7` `eyebrow` |
| `Three kitchens, back in margin.` (h2) | `src/data/work.ts:8` `heading` |
| `[ Restaurant name ] — Manchester` | `src/data/work.ts:11` `items[0].client` |
| `Holistic relaunch. Menu, prep and ordering rebuilt.` | `src/data/work.ts:12` `items[0].title` |
| `[ Restaurant name ]` | `src/data/work.ts:17` `items[1].client` |
| `Menu engineering & supplier reset` | `src/data/work.ts:18` `items[1].title` |
| (image alt: empty string) | `src/data/work.ts:19` `items[1].tile.alt` |
| `[ Restaurant name ]` | `src/data/work.ts:22` `items[2].client` |
| `Kitchen audit & costed relaunch plan` | `src/data/work.ts:23` `items[2].title` |
| (image alt: empty string) | `src/data/work.ts:24` `items[2].tile.alt` |

### Statement (`#about`)

| String | Location |
|---|---|
| `Agency` (eyebrow) | `src/data/statement.ts:6` `eyebrow` |
| `Clearly diagnosed. Properly costed. Actually implemented.` (h2) | `src/data/statement.ts:7` `heading` |
| `Feed is two people, not an agency. One of us grew up on the pass in Asian restaurants in this country. The other builds the rest of it — the menu, the listing, the photographs, the website.` | `src/data/statement.ts:10` `cols[0][0]` |
| `We work the way a kitchen works. We turn up, we watch a service, we read the invoices, and we tell you what we found before we tell you what we'd charge to fix it.` | `src/data/statement.ts:11` `cols[0][1]` |
| `Most restaurants we walk into are losing money on a dish they're proud of and don't know which one. That's not a marketing problem and it doesn't get solved by posting more.` | `src/data/statement.ts:12` `cols[0][2]` |
| `Britain's Asian restaurants are closing faster than any other kind. Not because the food got worse — because the costs moved and the menus didn't. Suppliers raised prices quietly, energy tripled, and dish prices set six years ago never followed.` | `src/data/statement.ts:15` `cols[1][0]` |
| `The ones surviving didn't find a marketing trick. They found out what each plate cost them, and changed it. Then they told people about it properly.` | `src/data/statement.ts:16` `cols[1][1]` |
| `That's the order we work in, and we'll say so on the phone if we don't think we can pay for ourselves.` | `src/data/statement.ts:17` `cols[1][2]` |

### Stats band (inside Statement)

Each figure renders twice: a visually-hidden static copy for assistive
technology plus an aria-hidden animated copy.

| String | Location |
|---|---|
| `7.3%` / `Fall in the number of Chinese restaurants in Britain in a single year.` / `CGA / AlixPartners` | `src/data/closures.ts:8-11` `facts[0]` |
| `2 a week` / `Curry houses closing across the UK, week in, week out.` / `Asian Catering Federation` | `src/data/closures.ts:13-16` `facts[1]` |
| `70 → 8` / `Indian restaurants left on Manchester's Curry Mile, in three years.` / `Asian Catering Federation` | `src/data/closures.ts:18-21` `facts[2]` |

### Packages (`#packages`)

| String | Location |
|---|---|
| `Services` (eyebrow) | `src/data/packages.ts:4` `eyebrow` |
| `Three packages. One responsibility.` (h2) | `src/data/packages.ts:5` `heading` |
| `Take one, take all three. If you know something's wrong but not what, start with the audit — it tells you which of the others you need.` | `src/data/packages.ts:6` `lead` |
| `Kitchen & Cost` (h3; repeated in aria-hidden kicker `⊘1 Kitchen & Cost`) | `src/data/packages.ts:11` `packages[0].title`; `⊘n` hardcoded `Packages.astro:32,35` |
| Items (each an arrow-prefixed link): `Dish costing` · `Supplier review` · `Prep and labour audit` · `Waste and yield` · `Energy and utilities` · `Financial targets` | `src/data/packages.ts:13-20` `packages[0].items`; `→` hardcoded `Packages.astro:42` |
| `One day on site. We work a service, read your invoices, cost your top twenty dishes and price your suppliers against what they should be charging. You leave with a costed plan — what to change, in what order, and what each change is worth a month.` | `src/data/packages.ts:12` `packages[0].body` |
| `[ £xxx ] — one day, fixed` | `src/data/packages.ts:9-10` `packages[0].price` / `cadence` |
| `Menu & Margin` (h3; kicker `⊘2 Menu & Margin`) | `src/data/packages.ts:25` `packages[1].title` |
| Items: `Menu engineering` · `Dish development` · `Recipe standardisation` · `Supplier sourcing` · `Ordering systems` · `Menu design and print` | `src/data/packages.ts:27-34` `packages[1].items` |
| `We cut what loses money, rebuild the dishes worth keeping and rework prep so the same food takes fewer hands. Sourcing moves to where it's cheaper, ordering gets a system, and the menu is redesigned around what you actually earn on.` | `src/data/packages.ts:26` `packages[1].body` |
| `[ £xxx ] — project` | `src/data/packages.ts:23-24` |
| `Brand & Demand` (h3; kicker `⊘3 Brand & Demand`) | `src/data/packages.ts:39` `packages[2].title` |
| Items: `Google Business Profile` · `Review management` · `Food photography` · `Social media` · `Local positioning` · `Front of house and room` | `src/data/packages.ts:41-48` `packages[2].items` |
| `The room, the name, the photographs, your Google listing, the reviews you never answered, and what your street actually wants at seven on a Tuesday. For restaurants where the food and the numbers are right and nobody's walking in.` | `src/data/packages.ts:40` `packages[2].body` |
| `[ £xxx ] — monthly or project` | `src/data/packages.ts:37-38` |

### Ghost band (entire section `aria-hidden="true"` — no text is exposed to assistive technology)

| String | Location |
|---|---|
| `Where we work` (eyebrow) | `src/data/places.ts:6` `eyebrow` |
| `Rusholme` · `Chinatown` · `Brick Lane` · `Curry Mile` · `Spitalfields` · `Soho` (drifting, repeated ×4 per row × 4 rows; `Brick Lane` rendered solid) | `src/data/places.ts:7-14` `places` |

### Contact (`#contact`)

| String | Location |
|---|---|
| `Let's talk straight.` (h2) | `src/data/closing.ts:6` `heading` |
| `Call us` (badge ring, ×4, aria-hidden) + aria-label `Call us` (link → `tel:+44`) | `src/data/closing.ts:9` `badge.ring` / `badge.label` |
| `↗` (badge arrow, aria-hidden) | `src/components/sections/Footer.astro:22` (hardcoded prop) |
| `Contact` (eyebrow) | `src/data/closing.ts:5` `eyebrow` |
| `[ email address ]` (link → empty `mailto:`) | `src/config/site.ts:15`; href hardcoded `Footer.astro:29` |
| `[ phone number ]` (plain text) | `src/config/site.ts:14` |
| `Location` (eyebrow) | `src/data/closing.ts:10` `locationEyebrow` |
| `[ area covered ]` `We travel to the restaurant. Always.` (one block, line break between) | `site.ts:16` + `src/data/closing.ts:7` `body` |
| Social aria-labels: `Facebook` / `Instagram` / `X` (all → `#`) | `src/data/closing.ts:12-14` `socials` |
| Legal links: `Privacy policy` · `Legal notice` · `Terms & conditions` · `Accessibility` · `FAQ` · `Contact` · `Cookie settings` (all `#` except Contact → `#contact`) | `src/data/closing.ts:17-23` `legal` |

### Site footer

| String | Location |
|---|---|
| `Everything we do` (eyebrow) | `src/data/footer.ts:6` `eyebrow` |
| Three service columns repeating the package titles and all 18 items verbatim | derived in `src/data/footer.ts:9-12` from `packages.ts` |
| `© 2026 Feed®` | `src/data/footer.ts:14` (year hardcoded; brand from `site.ts:13`) |
| `Built for restaurants, by people who worked in them` | `src/data/footer.ts:15` `items[1]` |

### In the data layer but never rendered

Confirmed absent from `dist/index.html`:

| String | Location |
|---|---|
| `Most restaurants we walk into are losing money on a dish they're proud of, and don't know which one. We find it in a day — then we rebuild the menu, the prep and the ordering around what actually earns, so the restaurant costs less to run every week after that.` | `src/data/hero.ts:7` `sub` |
| `Book a kitchen visit` (CTA label → `#contact`) | `src/data/hero.ts:9` `cta.label` |
| `One day, fixed price. You leave with a costed plan, whether you work with us afterwards or not.` | `src/data/hero.ts:11-12` `cta.aside` |
| `We don't hand you a report. We hand you a plan.` | `src/data/menu.ts:4` `heading` |
| `Your menu, marked up after one service — with what we'd do about each line.` | `src/data/menu.ts:5` `lead` |
| `Kitchen & cost audit` | `src/data/menu.ts:9` `labels.caption` |
| `This isn't happening to you alone.` | `src/data/closures.ts:4` `heading` |
| `Britain's Asian restaurants are closing faster than any other kind. Not because the food got worse — because the costs moved and the menus didn't.` | `src/data/closures.ts:5` `lead` |
| `The ones surviving didn't find a marketing trick. They found out what each plate cost them, and changed it.` | `src/data/closures.ts:23` `after` |
| `[ Partner's name ]` | `src/config/site.ts:16` `partnerName` |

---

## Part 2 — Copy audit

### Claims that need evidence or are currently invented

- **High — `70 → 8` / "Indian restaurants left on Manchester's Curry Mile, in
  three years." (`src/data/closures.ts:18-20`).** The widely reported Curry
  Mile decline — from a peak of roughly 70 curry houses to under ten — played
  out over more than a decade, not three years. As written, the page's most
  arresting statistic looks invented, attributed to a named source (Asian
  Catering Federation) that may not have said it. This is the exact stat a
  sceptical reader will check.
- **High — the work section as a whole (`src/data/work.ts:8-26`).** "Three
  kitchens, back in margin." claims three real engagements with outcomes
  ("Holistic relaunch", "back in margin") over `[ Restaurant name ]`
  placeholders and stock footage. Shipping this is indistinguishable from
  fabricating case studies.
- **Medium — `7.3%` / "…in a single year." (`closures.ts:8-10`).** Plausible
  and sourced (CGA / AlixPartners), but undated. "A single year" — which
  year? An undated statistic decays; a dated one builds trust.
- **Medium — `2 a week` (`closures.ts:13-15`).** Same problem: no date, and
  the Asian Catering Federation has given different closure figures in
  different years.
- **Medium — "energy tripled" (`statement.ts:15`).** A precise quantitative
  claim in the middle of prose, unsourced. "Tripled" is checkable and, for
  most tariff histories, an overstatement — vulnerable to exactly the reader
  it needs to convince.
- **Medium — the marked-up menu: `£1.20 back`, `Loses £1.40`, `£2,900`
  "Found in one day. Saved every month after." (`menu.ts:16,29,33-34`).**
  Nothing marks this sheet as an illustration. The intent is clearly a
  worked example, but "Found in one day. Saved every month after." plus a
  specific total reads as a claimed result from a real engagement. Either
  it's real (then name it) or it's an example (then say so).
- **Low — `© 2026 Feed®` and the `®` in the wordmark and title
  (`footer.ts:14`, `site.ts:13`, `consts.ts:2`).** Using ® for an
  unregistered mark is an offence under UK trade mark law (Trade Marks Act
  1994 s.95). Worth confirming registration status before launch.

### Consistency

- **Low — the same idea sits in the data twice, once rendered, once not.**
  `statement.ts:15` and `closures.ts:5` open with the identical sentence
  ("Britain's Asian restaurants are closing faster…"); `statement.ts:16` and
  `closures.ts:23` share "The ones surviving didn't find a marketing trick…";
  `hero.ts:7` (`sub`) and `statement.ts:12` share "Most restaurants we walk
  into are losing money on a dish they're proud of". Because only one of each
  pair renders today, the page reads fine — but the duplicates are a copy
  drift hazard: edit one and the other silently wins somewhere later.
- **Medium — the "Agency" eyebrow contradicts its own copy
  (`statement.ts:6` vs `statement.ts:10`).** The label above the section says
  `Agency`; the first line beneath it says "Feed is two people, not an
  agency." The section leads with the exact word it then disowns.
- **Low — title vs meta description (`consts.ts:2-5`).** The title says
  "kitchen, menu and **margin** consulting"; the description says "kitchen,
  menu and **brand** consulting". Two different self-descriptions in the two
  strings Google shows side by side.
- **Low — `2 a week` next to "week in, week out" (`closures.ts:13-15`).**
  Figure and caption both lean on "week"; the caption's idiom restates the
  figure rather than adding to it.
- **Low — package title case diverges from the reference.** Data has
  `Kitchen & Cost` / `Menu & Margin` / `Brand & Demand`
  (`packages.ts:11,25,39`); the approved reference uses sentence case
  ("Kitchen & cost", `reference/feed-landing-swiss.html:291`). Consistent
  within the built site, but an unacknowledged editorial change.

### Reading level and jargon

- **Medium — "Holistic relaunch. Menu, prep and ordering rebuilt."
  (`work.ts:12`).** "Holistic" is consultant-speak — the register this page
  otherwise carefully avoids, and the one its reader most distrusts. Every
  other line on the page talks like a kitchen; this one talks like a deck.
- **Low — "Three packages. One responsibility." (`packages.ts:5`).**
  "One responsibility" is abstract — whose responsibility, for what? The
  surrounding copy is concrete; this heading is the vaguest line on the page,
  and for an ESL reader it resolves to nothing.
- **Low — trade terms in the service lists (`packages.ts:27-34`).** "Menu
  engineering", "Recipe standardisation", "Local positioning" are industry
  jargon. A restaurateur will parse most of them, but they are the least
  plain-English strings on the page. (Kitchen idiom elsewhere — "leaves the
  pass", "quiet earner" — is the right register for this reader and reads
  well.)
- **Low — sentence length in the package bodies (`packages.ts:12,26,40`).**
  Each body runs 40+ words with multi-clause sentences. Strong rhythm for a
  fluent reader; heavy for a tired one on a phone. Flagging, not faulting.

### Clarity of the next action

- **High — there is no working action anywhere on the page.** The one job is
  a call; the number is `[ phone number ]`, the tel links are `tel:+44`, the
  email is `[ email address ]` over an empty `mailto:` (`site.ts:14-15`,
  `Footer.astro:29`, `SiteMenu.astro:39`). See summary finding 1.
- **High — the best offer never renders.** "Book a kitchen visit" with "One
  day, fixed price. You leave with a costed plan, whether you work with us
  afterwards or not." (`hero.ts:9-12`) is the page's strongest de-risking
  line — it answers the sceptic directly — and it appears nowhere. The hero's
  only action is "See what we fix" → `#packages`.
- **Medium — the action is not reachable from mid-page.** Between the hero
  badge and the contact section (roughly five viewports later) nothing points
  at `#contact`: the work grid, statement, packages and ghost band have no
  CTA, and the desktop masthead nav that would offer "Contact" is commented
  out (`TopBar.astro:13-15`). The route to the goal is: open the burger menu,
  or scroll to the end.
- **Low — "Call us" ↗ on desktop dials `tel:+44` (`closing.ts:8`,
  `site.ts:14`).** Even once the number is real, a tel: link on a desktop
  browser often does nothing visible; the number as text beside it is the
  fallback, which the layout does provide.

### Remaining placeholders (all shipping in the built page)

**High**, collectively: `[ phone number ]` ×2 · `[ email address ]` ×2 ·
`[ area covered ]` ×2 · `[ Restaurant name ]` ×3 · `[ £xxx ]` ×3 ·
`tel:+44` ×2 · empty `mailto:` ×2 · social links → `#` ×3 · legal links →
`#` ×6 · 18 service links → non-existent `/services/*` pages · site URL
`https://example.com` · unused `[ Partner's name ]` in data. The seven legal
links (`closing.ts:17-23`) also *promise* pages — Privacy policy, Terms, FAQ,
Accessibility, Cookie settings — that don't exist as routes at all; "Cookie
settings" implies a consent mechanism the site (which sets no cookies) doesn't
have and doesn't need.

### Tone toward the reader

- **Low — "the reviews you never answered" (`packages.ts:40`).** The one
  moment the page points a finger at the owner rather than at costs,
  suppliers or circumstance. It's in-voice and probably lands as candour, but
  it's the single line most likely to read as a telling-off.
- **Low — "This isn't happening to you alone." (`closures.ts:4`,
  unrendered).** Sympathetic in intent, faintly patronising in effect; noted
  in case it returns to the page.
- Otherwise the copy consistently treats the reader as competent — "You leave
  with a costed plan", "we'll say so on the phone if we don't think we can
  pay for ourselves" — which is the page's biggest copy strength.

### UK English

**Pass.** `standardisation`, `labour`, `re-sourced`, `£` throughout;
`lang="en-GB"` set (`BaseLayout.astro:14`). No US spellings found in any
rendered or unrendered string.

---

## Part 3 — Code audit

### Divergence from the reference (`reference/feed-landing-swiss.html`)

Much of the build's divergence is directed evolution from later design tasks
(video hero with scroll-trigger, accordion package cards, four-row outlined
ghost band, counting stats band, moremedia.at-style contact/footer). Those are
noted last; the findings below are divergences nothing on record asked for.

- **Medium — the caption block after the showcase panel is gone.** Reference
  lines 242-245 render the eyebrow `Kitchen & cost audit` and the line
  "We don't hand you a report. We hand you a plan." after the panel. The
  build renders neither; the strings sit unrendered in `menu.ts:4,9` and the
  matching styles survive as dead CSS (`Hero.astro` `.hero__caption`,
  `.hero__line`). This was the plainest-English promise on the page.
- **Medium — the visible masthead nav is commented out
  (`TopBar.astro:13-15`).** The reference has an always-visible
  Packages/About/Contact nav (`reference:199-203`). The build's masthead is
  wordmark + burger only, at every width — and the commented-out block ships
  to production as an HTML comment containing raw Astro template source
  (visible in `dist/index.html`).
- **Low — hero H1 metrics.** Reference: `clamp(2.6rem,8.2vw,7rem)`, weight
  800, tracking −0.042em, line-height 0.95 (`reference:58-62`). Build:
  `--fs-hero: clamp(3.4rem, 7.8vw, 8.4rem)`, weight 700, −0.035em, 1.03
  (`global.css:37`, `Hero.astro:194-198`). Consistent with the moremedia.at
  direction that superseded the reference's literals, but the divergence is
  recorded nowhere in the repo.
- **Low — palette drift.** `--grey` is `#5a5a57` vs reference `#6E6E6B`
  (documented as a contrast fix, `global.css:18`); warn-note red
  `--pen-on-panel #ff7e72` vs reference `#FF6B5E` (same rationale,
  `global.css:24`). Deliberate, but the reference no longer matches the
  tokens it seeded.
- **Low — footer list treatment.** Reference uses plain `line-height: 2`
  lists (`reference:189`); build adds per-item hairline borders
  (`Footer.astro:286-289`).
- **Noted, directed:** video hero + scroll-trigger lock (vs static panel),
  gapped rounded accordion cards (vs attached bordered grid,
  `reference:123-150`), 88dvh panel height, four-row interactive ghost band
  (vs single grey line, `reference:153-162`), bordered counting stats band
  (vs plain figures block), contact section with socials/legal/location and
  layered sticky footer reveal (vs minimal reference contact), package items
  as links (reference has no item lists at all).

### Token discipline

Strong overall — colours and type sizes are tokenised and components
consistently consume custom properties. Exceptions:

- **Low — hardcoded shadow colour** `box-shadow: 0 2.5rem 4rem -1.5rem
  rgb(0 0 0 / 0.45)` (`Footer.astro:147`) — the only literal colour in any
  component.
- **Low — `contact__mail` font-size is a literal clamp**
  (`Footer.astro:177`) while the `--fs-mail` token (`global.css:45`) exists
  and is used for the same email address in `SiteMenu.astro:173` — the same
  string renders at two unrelated sizes defined in two different ways.
- **Low — stats figure size is a literal clamp**
  (`StatsCounter.astro:108`), while the near-miss token `--fs-figure`
  (`global.css:42`) sits unused (see dead code).
- **Low — no radius token:** `1.2rem` (`Hero.astro:251`), `1.25rem`
  (`Packages.astro:91`, `StatsCounter.astro:96`), `0.5rem`
  (`WorkGrid.astro:122`) — three near-identical corner treatments, each a
  literal.
- **Low — assorted magic numbers** doing positional work: masthead
  `animation-range: 0px 460px` and `scroll-padding-top: 5.5rem`
  (`TopBar.astro:100,184`), menu clip-circle anchor `2.4rem`
  (`SiteMenu.astro:126,133`), drift phase offsets `-9ch/-4ch/-6ch`
  (`DriftBand.astro:109-120`). Acceptable as component-local tuning; listed
  for completeness.

### Content discipline

- **Medium — routing invented in a component.** `serviceHref()` in
  `Packages.astro:9-14` fabricates `/services/<slug>/` URLs from item labels;
  the data layer (`packages.ts`) has no href field. Links belong in data —
  especially links that currently 404 (see below).
- **Medium — broken-by-construction email hrefs.** `href="mailto:"` is
  hardcoded with no address in `Footer.astro:29` and `SiteMenu.astro:39`;
  `site.email` is a display label only. When the real address lands in
  `site.ts`, both links will still be empty.
- **Low — glyph literals in components:** `⊘${i + 1}` numbering
  (`Packages.astro:32,35`), `→` arrows (`Packages.astro:42`), badge arrows
  `↓`/`↗` passed as props (`Hero.astro:115`, `Footer.astro:22`), `·` drift
  separator (`DriftBand.astro:44`). All presentational; fine where they are,
  noted for the inventory.
- **Low — `Skip to content` hardcoded** (`BaseLayout.astro:27`); the only
  user-facing sentence outside the data layer.

### Dead code, unused files, unused tokens, unused dependencies

- **Low — dead CSS in `Hero.astro`:** `.hero__cta`, `.hero__link`,
  `.hero__aside` (lines 204-218) and `.hero__caption`, `.hero__line`
  (lines 322-331) style markup that no longer exists.
- **Low — dead data** (all confirmed absent from dist): `hero.sub`,
  `hero.cta`, `menu.heading`, `menu.lead`, `menu.labels.caption`,
  `closures.heading`, `closures.lead`, `closures.after`, `site.partnerName`.
  Two are annotated "kept for the data shape" (`types/content.ts:53,72`);
  the rest are silent. Several are copy the page arguably still needs
  (Part 2).
- **Low — unused tokens:** `--fs-figure`, `--sect-sm`, `--space-3xs`,
  `--space-lg` (`global.css:42,67,71,76`) appear in no `var()` anywhere.
- **Low — unused assets in the repo** (not shipped by the build, but 11 MB+
  of repo weight): `src/assets/videos/4920374-hd_1920_1080_30fps.mp4`,
  `src/assets/fonts/anton-latin.woff2`,
  `src/assets/fonts/public-sans-latin.woff2` (neither font is in
  `astro.config.mjs`), `reference/feed-landing-brand.html` (second,
  unreferenced comp).
- **Low — two sources of site identity:** `src/consts.ts`
  (title/description) and `src/config/site.ts` (brand, nav, contact) split
  what one module could own.
- **Low — `package.json` `"name": ""`** (line 2).
- **Dependencies: clean.** `astro`, `@astrojs/sitemap`, `sharp` — all used.
  JS shipped is two inline modules totalling ~2.8 KB (hero lock + stats
  counter); no framework runtime. Exemplary.
- Note: `git status` shows the deleted Astro-starter blog files and modified
  config as *uncommitted* working-tree state — the repo's one commit is still
  the starter template. Not an audit finding against the code, but the
  current state exists nowhere in history.

### Accessibility

- **Medium — the contact section lives outside every landmark.** `<Footer />`
  renders after `</main>` (`index.astro:25`) as `div.footer` wrapping
  `section#contact` + `footer.foot` (`Footer.astro:11-121`). The page's
  primary conversion content is outside `<main>`, and everything above the
  inner `<footer>` element is in no landmark at all. Screen-reader users
  navigating by landmark skip straight past the contact details.
- **Medium — the full-screen menu has no focus management
  (`SiteMenu.astro`).** The `:target` pattern is zero-JS by design, but:
  focus stays on the trigger when the overlay opens; Tab reaches content
  behind the overlay (scroll is locked, so focus lands on invisible
  elements); Escape does not close; the trigger link carries no
  `aria-expanded`. Keyboard and SR users get a door with no handle.
- **Low/Medium — `tabindex="0"` on package cards (`Packages.astro:30`).**
  Three focusable `<article>`s with no role or accessible name announce as
  nothing; they exist so `:focus-within` opens the accordion, but the links
  inside would do that anyway once reached. Extra empty tab stops for
  keyboard users. (Verified: links inside collapsed cards are correctly
  unfocusable via `visibility: hidden`.)
- **Low — work tile images have empty alt (`work.ts:19,24`)** while acting
  as the visual half of case-study cards. Defensible while they're stock
  placeholders; when real kitchens land, they'll likely be informative and
  need alt text.
- **Low — contrast over video is unverifiable by inspection.** Hero copy at
  overlay state is white over `--scrim` `rgba(10,10,10,0.55)` over arbitrary
  video frames (`Hero.astro:99,152`); a bright frame could pull the eyebrow
  (62% opacity, `Hero.astro:459`) below AA. Worth a worst-frame check once
  final media is chosen.
- **Pass, worth recording:** single h1, clean heading order
  (h1 → h2 ×3 → h3 ×3 → h2, verified in dist); skip link to `#main`;
  `role="list"` preserved on the delisted work grid; decorative layers
  (hero backdrop/media, badge rings, ghost band, drift) consistently
  `aria-hidden`; stats counter uses visually-hidden real values with
  aria-hidden animation — no SR churn; global `:focus-visible` ring
  (`global.css:130-133`); masthead reveals on `:focus-within`
  (`TopBar.astro:125-129`); `prefers-reduced-motion` handled in every
  animated component including the scroll lock (which fully bails), tile
  videos (hidden, flat tone shown), drift (stopped), stats (final values
  server-rendered), menu (instant open). Reduced-motion coverage is the
  best-executed cross-cutting concern in the codebase.

### Performance

- **High — 61 MB of video ships, all autoplay.**
  `4253330-uhd_4096_2160_25fps.mp4` (40 MB, hero) and
  `4253334-uhd…mp4` (21 MB, work grid), both 4K sources played into boxes
  that render at most ~2560 px wide and usually far smaller. `preload="metadata"`
  is moot — `autoplay` forces the download. On the reader's phone this is
  the whole audit: the page never arrives.
- **Medium — the hero video element is duplicated.** Backdrop and panel
  layer each render their own `<video>` for the same file
  (`Hero.astro:76-87,129-140`) — one network fetch, but two parallel
  decode/paint pipelines running for the whole page life (the backdrop is
  only `visibility: hidden` after hand-off, and `display: none` only when
  the script never runs).
- **Medium — no posters (`index.astro:19`, `work.ts:14`).** First paint is
  a flat teal field until video frames decode; under reduced motion the
  media disappears entirely rather than yielding a still. The component
  supports `poster`; nothing passes one.
- **Medium — work-grid image fallback `src` is the full-size ~3.1 MB webp**
  (verified in dist markup; `WorkGrid.astro:49-60` caps `widths` at 1400
  but Astro's fallback `src` points at the original-width encode). Modern
  browsers use `srcset` and are fine; anything that reads `src` pulls 3 MB.
  Source images in the repo are 3.5 MB apiece.
- **Pass, worth recording:** total first-party JS ~2.8 KB inline, no
  framework, no external requests of any kind; one self-hosted 48 KB
  variable font, preloaded, `font-display: swap`, with a size-adjusted
  local fallback; CSS a single 32 KB file; HTML 41 KB. Minus the media,
  this is a ~120 KB page.

### SEO and sharing

- **High — placeholder origin everywhere** (`astro.config.mjs:8`):
  canonical `https://example.com/`, sitemap entries all `example.com`.
  Shipped as-is, this actively tells search engines the real domain is not
  the canonical home of its own content.
- **High — no social/share markup.** No `og:*`, no `twitter:*`, no share
  image (`BaseLayout.astro:15-25`). For an audience reached through
  WhatsApp forwards and Facebook groups, the unfurl *is* the first
  impression, and it's currently a bare URL.
- **Medium — no structured data.** No `LocalBusiness`/`ProfessionalService`
  JSON-LD, no NAP — largely blocked on the same placeholder contact data,
  but the slot in the layout doesn't exist either.
- **Medium — no `robots.txt`** (nothing in `public/`); the sitemap is
  linked from the head but not from a robots file.
- **Low — favicons:** `favicon.svg` referenced; `favicon.ico` present but
  unreferenced (served by convention); no `apple-touch-icon`, no manifest.
- **Low — title length:** ~66 characters will truncate in most SERPs right
  around "…Asian restaur…".
- **Pass:** `lang="en-GB"`, meta description present, canonical present
  (wrong origin aside), sitemap generated and linked, one h1.

### Responsive behaviour (verified in built page, Chrome)

- **360×740 — pass.** No horizontal overflow (0 px). Hero badge hidden,
  stacked cards open, stats single-column, footer reveal correctly disabled
  (footer taller than viewport gate).
- **768×1024 — one finding. Low:** the stats band's 2-column fallback was
  designed for four cells; with three stats the third sits alone
  bottom-left with an empty quadrant to its right, and its top hairline
  spans only the left column (`StatsCounter.astro:134-147`, screenshot
  verified). Everything else clean; no overflow.
- **1440×900 — pass.** No overflow; accordion, drift band, sticky footer
  reveal, scroll-trigger hero all behave.
- **2560×1400 — pass, one aesthetic note. Low:** no overflow (the drift
  band's 4-copy loop holds even here), but the 88dvh hero panel centres a
  46rem sheet in a ~1230 px-tall teal field — proportionally a lot of empty
  panel. `--container: 100.25rem` caps content width sensibly.

### Folder structure vs Astro conventions

- **Pass.** `src/pages` / `layouts` / `components` (split
  `primitives`/`sections`) / `data` / `config` / `types` / `styles` /
  `assets`, static files in `public/` — all conventional and consistently
  applied. Content collections are unused, which is right for a single
  hand-built page. Minor notes already logged above: `consts.ts` vs
  `config/site.ts` duplication, unused reference comp and assets, and the
  audit-relevant fact that the data layer is genuinely the single source of
  copy — the discipline held everywhere except the four glyphs and one
  sentence noted in Content discipline.
