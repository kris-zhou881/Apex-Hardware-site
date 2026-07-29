# Product Data Review

- Public product detail pages reviewed: 385
- Website product series: 12
- Product records with an explicit source model: 384
- Product records using the Alibaba product ID as the reference: 1
- Records with at least one structured specification: 347
- Records with additional verified listing attributes: 385
- Duplicate candidates retained for review: 30
- Duplicate records merged automatically: 0

Every record was checked against its supplied Alibaba product detail page. Explicit model and technical attribute values were imported; missing fields remain blank or null and display “Contact us to confirm”.

Structured field coverage:

| Field | Records |
|---|---:|
| Maximum door weight | 91 |
| Door width | 28 |
| Dimensions | 57 |
| Net weight | 0 |
| Material | 276 |
| Finish | 200 |
| Opening angle | 126 |
| Hold-open function | 7 |
| Glass thickness | 113 |

Alibaba exposes gross weight for many records but does not expose a confirmed net weight. Gross weight is retained as an additional listing attribute and is never relabeled as net weight.

The four existing Apex floor-spring detail pages remain the source of truth for AH-200, AH-60, AH-7315AZ and AH-7300. Imported listings are not merged with them without an explicit model match and formal datasheet confirmation.

Old seller brands, promotional claims, prices, MOQ, warranty claims and certification claims are excluded from public product parameters. Product media is localized from each matching source gallery. Where necessary, only the detected old-brand mark area is interpolated from its surrounding background; the product body is not changed.

No product video is published because the reviewed product pages did not expose a verified, clean source video.
