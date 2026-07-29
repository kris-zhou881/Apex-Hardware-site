# Batch 1 Product Review

Review date: 2026-07-29

This batch covers the next 10 records in the missing-data audit. Values were taken from the listing data and source galleries already captured from the supplied Alibaba product pages. No value was copied from a similar model.

| Website model | Source ID | Image result | Confirmed parameter result | Confidence | Notes |
|---|---:|---|---|---|---|
| Kd-6018 | 1601828463243 | Existing model-specific 896 × 896 image retained | No new field | High | Stainless steel and 90° remain confirmed. The listed 4 mm value is hinge-body thickness, not glass thickness. |
| KD.3001-600 | 1601824312588 | Replaced generic shared image with source gallery image labeled KD-3001.600; output 896 × 896 | Maximum door weight 600 kg; opening angle 360° | High for capacity and angle; medium-high for model typography | The listing model field uses KD.3001-600 while its source graphic writes KD-3001.600. Both identify the 600 kg listing; the listing model field is retained. |
| KD-CS-01 | 1601868884547 | Existing source-specific 896 × 896 combo-set image retained | No new field | High for image; low for missing parameters | The source does not state the missing load, size, finish or operating values. |
| KD-1063 | 1601885011406 | Existing source-specific 896 × 896 image retained | Opening angle 125° | High for this listing | The source title explicitly states 125°. |
| KD-1063 | 1601664684789 | Existing source-specific 896 × 896 image retained | Conflicting opening angle removed | Low | The source title states 180°, while its captured detailed specification states 125°. The public field is blank pending a factory datasheet. |
| KD-1063 | 11000031636340 | Existing source-specific 896 × 896 image retained | Existing 125° value retained | High for this listing | Source title and detailed specification agree on 125°. |
| KD-1063 | 1601666231343 | Existing source-specific 896 × 896 image retained | Maximum door weight 150 kg | High for maximum value | Source title states a 60–150 kg range. |
| KD-1063 | 11000031607422 | Existing source-specific 896 × 896 image retained | Maximum door weight 150 kg | High | Source title explicitly states a 150 kg maximum. |
| KD.3001-400 | 1601824330219 | Replaced generic shared image with source gallery image labeled KD-3001.400; output 896 × 896 | Maximum door weight 400 kg; opening angle 360° | High for capacity; medium-high for model typography and angle | The listing model field uses KD.3001-400 while its source graphic writes KD-3001.400. The source title states 360°. |
| PL-102 | 1600991360730 | Existing model-specific 896 × 896 image retained | No new field | High | Existing dimensions, material, finish, 90° and 6–12 mm glass thickness remain confirmed. Gross weight was not relabeled as net weight. |

## Outcome

- Reviewed: 10 records.
- Confirmed structured fields added: 7.
- Conflicting structured fields cleared: 1.
- Model-specific product images replaced: 2.
- Records newly flagged for same-model review: 5 KD-1063 listings.
- Unsupported fields left blank: yes.
- Full validation: 385 products, 404 HTML pages and 6,713 local resource references; 0 errors.
