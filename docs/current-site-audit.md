# Current Site Audit

Baseline commit: `a1b84b0249dfb6c631e5c77374eee256538e7c92`

## Existing structure

- Home: `index.html`
- Floor-spring series: `products/floor-springs/index.html`
- Product details: `products/ah-200.html`, `products/ah-60.html`, `products/ah-7315az.html`, `products/ah-7300.html`
- Shared presentation and behavior: `assets/styles.css`, `assets/app.js`
- Floor-spring data and rendering: `assets/products.js`, `assets/series.js`, `assets/product.js`
- Media: seven WebP files under `assets/images/floor-springs/`
- Documentation: `docs/media-source-manifest.md`, `docs/product-data-review.md`

## Existing products and categories

One category was public on the website: Floor Springs.

| Model | Maximum door weight | Detail page |
|---|---:|---|
| AH-200 | 90 kg | `products/ah-200.html` |
| AH-60 | 95 kg | `products/ah-60.html` |
| AH-7315AZ | 120 kg | `products/ah-7315az.html` |
| AH-7300 | 160 kg | `products/ah-7300.html` |

AH-7315AZ net weight was intentionally empty and must remain unconfirmed.

## Existing links and reusable components

- Email: `985064609l@gmail.com`
- WhatsApp: `+86 180 2716 4672`
- Google Maps only
- Shared responsive header, language selector, mobile menu, buttons, cards, detail specification list, inquiry panel and footer
- 26-language selector with full priority-language copy and English fallback
- RTL support for Arabic, Persian, Hebrew and Urdu
- IntersectionObserver reveal system with reduced-motion support

## Media and data findings

- Standard and heavy-duty product images are intentionally shared by multiple floor-spring pages.
- No video file was present.
- The existing source manifest records the available images.
- No existing page or media should be deleted during catalog import.
- Model data must remain separate from newly imported title-level data unless a formal source confirms an exact match.

## SEO and responsive baseline

- Existing pages contain titles, descriptions, canonicals and Open Graph metadata.
- Organization structured data is present on the home page.
- The layout supports desktop and narrow mobile widths, including 360, 375 and 390 px.
- The import must add CollectionPage, ItemList, BreadcrumbList and Product structured data without fabricated offers, reviews or ratings.

## New work required

- Products index
- Series pages based on real store data
- One detail page for each unique public product listing
- Structured product/category/family data
- Localized images and videos when available
- Generic search, material filters and comparison
- Current-style navigation expansion
- Stronger section transitions without wheel hijacking
- Repeatable audit, import, media, generation, link, deployment and cleanup scripts

## Visual elements that will not change

- Apex Hardware name and current brand mark
- White minimal visual system
- Navigation proportions and mobile menu behavior
- Large headings and generous spacing
- Floor Springs selector and four existing detail pages
- Engineering, Quality, OEM / ODM, Contact and Location content
- Google Maps, email and WhatsApp inquiry paths

## Import risks

- Public product-list titles are promotional and may omit technical parameters.
- A public listing title is not a formal datasheet; imported records are therefore partially verified or unclear.
- Similar titles or images may describe variants rather than true duplicates.
- Alibaba may rate-limit dynamic pages.
- Store images may contain legacy branding or text and need visual review before approval.
- Video URLs are not exposed by the public product list and must remain empty.
- Large media additions can slow GitHub Pages if not compressed and lazy-loaded.

