# Floor spring product data review

Last reviewed: 2026-07-24

## Verification status

The supplied Alibaba company product-group page returned an unusual-traffic access-denied response. The values below therefore come from the existing canonical repository data (`assets/products.js`, the previous `assets/app.js` product data and the four previous product detail pages). They have been normalized into one source, `assets/products.js`, but cannot be represented as independently verified against Alibaba in this review.

No missing field was guessed. Unsupported claims about certification, cycle testing, positioning, twin cylinders, adjustable speed or hold-open behaviour were not added.

## Canonical values used by the rebuilt site

| Capacity order | Model | Maximum door weight | Recommended door width | Opening angle | Body dimensions | Cover / body material description | Operating temperature | Net weight | Recommended application |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | AH-200 | 90 kg | ≤ 900 mm | 90° / 135° | 248 × 100 × 50 mm | SS201 / SS304 cover | −40°C to 55°C | 3.15 kg | Glass, timber and metal doors |
| 2 | AH-60 | 95 kg | ≤ 900 mm | 90° / 135° | 280 × 97 × 42 mm | SS201 / SS304 cover | −40°C to 55°C | 3.7 kg | Glass, timber and metal doors |
| 3 | AH-7315AZ | 120 kg | ≤ 1,000 mm | Up to 180° | 240 × 108 × 55 mm | Cast iron / stainless steel | −40°C to 55°C | Not provided | Frameless glass doors |
| 4 | AH-7300 | 160 kg | ≤ 1,200 mm | 90° / 135° | 273 × 122 × 65 mm | SS201 / SS304 cover | −40°C to 55°C | 5.7 kg | High-traffic architectural doors |

## Unresolved items

1. Alibaba could not be used to confirm any values because the public product-group page was access-denied.
2. AH-7315AZ has no net-weight value in the existing repository. The row is omitted on its public detail page instead of displaying an invented number.
3. The repository has only two confirmed product photographs. The photograph previously assigned by the repository to AH-60, AH-200 and AH-7315AZ remains shared. Distinct model photography should replace it once Apex Hardware supplies verified originals.
4. Existing wording does not establish whether each model is hold-open or non-hold-open, twin-cylinder or single-cylinder, or speed-adjustable. Those fields are intentionally omitted.
5. The source description for AH-7315AZ combines “cast iron / stainless steel” without distinguishing body and cover. The public site preserves that wording and does not infer a more specific construction.

When original product sheets or accessible Alibaba data become available, update `assets/products.js` first; the series cards, comparison table and all detail pages consume that canonical file.
