# Batch 0 Product Review

Review date: 2026-07-29

This batch covers the single record without an explicit source model and all 12 records previously flagged as duplicate candidates. Values below come from the listing data already captured from the supplied Alibaba pages. No value was inferred from a similar product.

| Website model / reference | Source ID | Result | Confirmed parameters added | Confidence | Notes |
|---|---:|---|---|---|---|
| Alibaba product ID | 11000024212760 | Title corrected to Shower Door Pull Handle; model remains empty | None | High for product type; low for model | Source title and Type identify a pull handle, but the source does not state a model. |
| ASP010 | 1601807265553 | Kept as a separate product; duplicate flag cleared | None | High | Model and product image are distinct from ASP002. |
| ASP002 | 1601807290245 | Kept as a separate product; duplicate flag cleared | None | High | Model and product image are distinct from ASP010. |
| KD-081 | 1601503864604 | Kept as a separate product; duplicate flag cleared | Door width 600–900 mm | High | Distinct model and image; the door-width range is stated by the source listing. |
| KD-063 | 1601504091154 | Kept as a separate product; duplicate flag cleared | Door width 600–900 mm | High | Distinct model and image; the door-width range is stated by the source listing. |
| KD-080 | 1601459906755 | Retained and still flagged | Door width 600–900 mm | Medium | Same model as source ID 1601469042069, but materially different product imagery. Factory datasheet confirmation required. |
| KD-080 | 1601469042069 | Retained and still flagged | Door width 600–900 mm | Medium | Same model as source ID 1601459906755, but materially different product imagery. Factory datasheet confirmation required. |
| KD-62 | 1601458803544 | Retained and still flagged | None | Medium | Source listing states 90 kg and 125°; other KD-62 listings conflict. No values copied between listings. |
| KD-62 | 1601456179452 | Retained and still flagged | None | Medium | Source listing states 90 kg and 125°; other KD-62 listings conflict. No values copied between listings. |
| KD-62 | 1601460397171 | Retained and still flagged | None | Low | Source data contains 60/90 kg variants and a malformed widest-door field; factory datasheet required. |
| KD-62 | 1601461949956 | Retained and still flagged | None | Low | Source data contains 100/150 kg variants and a malformed widest-door field; factory datasheet required. |
| ABC016 | 1601802400769 | Kept as a separate product; duplicate flag cleared | Width 50–300 mm; height 14 mm; length ≤ 6000 mm | High | Distinct model and installation image; dimensions are stated by the source listing. |
| ABC014 | 1601802413683 | Kept as a separate product; duplicate flag cleared | Width 50–300 mm; height 14 mm; length ≤ 6000 mm | High | Distinct model and installation image; dimensions are stated by the source listing. |

## Outcome

- Reviewed: 13 records.
- Duplicate flags resolved: 6 records.
- Duplicate candidates still requiring factory confirmation: 6 records.
- Explicit source model still unavailable: 1 record.
- Confirmed structured fields added: 6.
- Product images changed: 0. All existing 896 × 896 local product-specific images were preserved.
- Full validation: 385 products, 404 HTML pages and 6,713 local resource references; 0 errors.
