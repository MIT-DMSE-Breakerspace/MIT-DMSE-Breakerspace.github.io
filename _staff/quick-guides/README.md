---
published: false
---

# Locked Quick Guide Production Procedure

This directory turns the reviewed FTIR SOP-and-visual-map prototype into a controlled production task. It is written so an implementation assistant can copy, substitute, position, and validate content without designing a new guide or inventing instrument guidance.

The current model was approved on 2026-08-07 for **unpublished drafting and lab-assistant review**. It is not approval to publish, print for use, or replace the existing FTIR, optical, or XRD guides. Production approval still requires instrument-specific technical review and a physical duplex print proof.

## Authority And Relationship To Training

The canonical instrument page is the operating authority. The Quick Guide and staff training guide are sibling derivatives of that page.

* The Quick Guide is the trainee's and trained user's compact **how-to reference** during the routine workflow.
* The staff training guide is the trainer's **coverage and coaching checklist**. It ensures the trainer teaches the complete normal-use path, including the SOP, practice operation, quality decision, cleanup, shutdown, and administrative closeout.
* The Level 1 exercise uses the same routine mechanical spine but adds the trainer-selected sample, question, expected contrast, and teaching prompts.

During training, the participant should hold and use the printed Quick Guide while the trainer follows the staff guide. That does not make either document the source for the other, and it does not require their wording or section boundaries to match.

## The Non-Negotiable Output

Every candidate produced from this model is:

* exactly two US Letter pages for duplex printing, long-edge flip;
* one complete normal-use workflow, from the expected ready state back to that state;
* Side 1: the canonical SOP in the left column and three guidance boxes in the right column;
* Side 2: one annotated control map, an immediate quality or readiness decision, and compact reminders;
* an unpublished review artifact until staff approval and physical proof;
* sample-agnostic unless the canonical workflow itself requires a particular reference or consumable;
* usable in grayscale and understandable without relying on background color.

The visual hierarchy is also fixed:

* one document `<h1>` for the instrument and routine workflow;
* `<h2>` for **Standard Operating Procedure (SOP)** and the Side 2 visual-map title;
* `<h3>` for **Instrument startup**, **Operation**, **Instrument shutdown**, interface/result subsections such as **Main OMNIC window**, and compact reminder headings.

The Side 2 title is an `<h2>` styled at the same display size as the document title. Do not add a second `<h1>` merely because it starts a new printed side.

## Fixed Versus Replaceable

| Element | Instruction |
| --- | --- |
| Page size, two-side composition, columns, spacing, type sizes, colors, footers, review badge, and CSS classes | **Locked. Do not change.** |
| Heading levels and section order | **Locked. Do not change.** |
| Three Side 1 guidance boxes | **Locked structure. Replace only the instrument-specific text described below.** |
| Side 2 control-map image count | One primary annotated image. Do not add an inset. If a physical state is essential, make it the primary map or use the existing two decision panels. |
| Side 2 decision panels | Two panels using the existing stop/ready treatment. They may show bad/good output, incorrect/correct loading, or stop/continue system state as specified for the instrument. |
| Instrument title, software/map title, subtitle, URL, QR asset, owner/date, SOP bullets, control labels, captions, and image paths | Replace from the canonical page and the instrument specification. |
| Inline SVG target rectangles, leaders, and number locations | Reposition mechanically for the approved images. Keep the annotation style unchanged. |
| Canonical instrument pages, staff guides, published Quick Guides, and shared CSS | **Out of scope. Do not edit.** |

Do not add sections, explanatory paragraphs, parameter tables, optional workflows, interpretation lessons, manufacturer-manual summaries, or new safety claims. Do not improve wording by supplying facts that are absent from the canonical page.

## Source Preflight

Before treating an instrument work order as mechanical, audit its source trail.

* Copy the full manufacturer/model identity from the canonical instrument page's H1. A manual, image filename, similar product, or remembered instrument is not an identity source.
* Distinguish a canonical workflow from a proposed drafting decision. A proposal in `instrument-specifications.md` remains a blocker until staff approves it; it must not become guide prose merely because it sounds reasonable.
* Confirm every named control in both the canonical page and the source image. If the page names a function but the image shows only an unverified icon, record the icon/function check as a release gate.
* Inspect every source image at full resolution. Recapture any image with baked-in annotation, a username, personal or project identifier, file path, unrelated data, obsolete interface state, or text that will not remain legible in print.
* Confirm that each stop/ready pair asks one observable question. Use only a corrective action already stated on the canonical page; a visually plausible result is not automatically an approved acceptance standard.

## The Three Guidance Boxes

Every instrument uses the same three-box architecture.

1. **Critical rule.** Rename this box for the instrument's dominant at-the-bench boundary: glove separation, sample/height clearance, interlock, moving crosshead, laser enclosure, indenter/scale compatibility, dry-powder loading, cuvette handling, or high-voltage/vacuum state. Use only canonical language.
2. **Before you leave.** A five-item maximum end-state check derived from the SOP: data, sample, cleaning, software/workstation, and instrument/area state.
3. **Stop and ask staff.** The canonical stop conditions plus the instrument-page QR code and plain-text URL.

No instrument currently needs a fourth general-purpose box. If three boxes cannot hold the safe boundary legibly, stop. The likely answer is a narrower primary workflow or a separate task-specific card, not another box or smaller text.

Advanced or accessory workflows do not belong in the primary guide merely because they are common. Examples include Phenom Pure cold-stage work, Phenom XL EDS, optical 3D capture or stitching, fluorescence on the Duetta, or special ion-mill recipes. Keep them on the canonical page until an independently justified task-specific card is commissioned.

The locked template has no inset slot. Do not invent one. When both software control-finding and physical readiness matter, use the primary image for the software and the existing stop/ready panels for one matched physical decision. If that still cannot carry the routine safely and legibly, stop and narrow the workflow or commission a separate task card.

## Mechanical Work Order

For each instrument, follow these steps in order.

1. Read this file, [`sop-visual-map-template.md`](sop-visual-map-template.md), and the instrument's complete entry in [`instrument-specifications.md`](instrument-specifications.md).
2. Read the canonical instrument page's H1, SOP, routine detailed workflow, Level 1 exercise, save/export directions, quality gate, stop conditions, and shutdown. Do not use memory or a manufacturer manual to fill gaps.
3. Check the specification's status. If it is **BLOCKED**, do not create a guide. Report the listed missing decisions or assets verbatim and move to the next explicitly assigned instrument.
4. Copy the template to `quick-guides/<slug>-sop-map-prototype.md`. Keep `published: false`, the prototype permalink, screen warning, and review badges.
5. Replace only bracketed fields and the explicitly identified image paths, captions, callout labels, SVG coordinates, SOP bullets, and guidance-box text.
6. Copy the canonical SOP's order and technical meaning exactly. Minor removal of repeated context is allowed only when the same sentence remains unambiguous. If it does not fit, stop and report overflow; do not summarize, shrink type, or omit a step.
7. Use the precise control labels recorded in the specification. If a screenshot does not visibly support a label or verified icon function, or the canonical page and interface disagree, stop and report the mismatch.
8. Draw each callout as: outlined rectangle around the target, leader line away from the target, numbered circle at the free end, and matching numbered key. The circle or leader may not cover the control, its label, or another callout.
9. Use a sanitized, unannotated source screenshot at native resolution. Cropping and proportional resizing for legibility are allowed. Do not redact a private screenshot into a final source, redraw the UI, sharpen it with generated content, alter displayed values, or bake annotations into the raster image.
10. Run the repository checks, build the site, render the candidate as a paginated PDF, inspect both page images, extract the PDF text, and verify the QR at print resolution.
11. Leave the candidate unpublished. Report files changed, validation results, and every unresolved question. Do not edit another instrument in the same commit unless the work order explicitly names more than one.

## Absolute Stop Rules

Stop without drafting, and record the issue, when any of these applies:

* the default beginner workflow has not been selected;
* the canonical SOP and detailed instructions conflict;
* an exact control name or its current appearance is unverified;
* a required loading, clearance, interlock, or quality-decision image is missing;
* a safety or sample-compatibility boundary would need to be inferred;
* save/export location or final shutdown state is unknown;
* the complete SOP does not fit the locked composition;
* the guide would need more than one primary routine workflow;
* the requested instrument is marked **BLOCKED** in the specification.

Do not insert `TODO`, guessed prose, generic safety language, or placeholder controls into an instrument candidate. A blocked report is the correct result.

## Validation Gate

A mechanical draft is complete only when all of the following pass:

* `bundle exec jekyll build`
* `script/validate-html`
* a real paginated PDF contains exactly two Letter pages;
* every heading and the final footer appear in extracted PDF text;
* no element crosses a page edge, overlaps, or is clipped in the page renders;
* body text remains at the template size;
* every target outline surrounds the correct control, with its number outside the control;
* source screenshot labels remain legible at 100% print scale;
* the QR decodes from a 300 dpi page render;
* the guide has been compared line by line with the canonical SOP;
* staff have checked the instrument-specific technical content before publication;
* a physical color and grayscale duplex proof has been reviewed before installation.

Rendering is necessary but not sufficient. A browser screenshot or word count cannot prove that a fixed print layout is complete.

## Direct Instruction For An Implementation Assistant

Use this language when assigning an instrument:

> Build only the unpublished `<instrument>` SOP-and-visual-map Quick Guide candidate. Follow `_staff/quick-guides/README.md`, copy `_staff/quick-guides/sop-visual-map-template.md`, and obey the complete `<instrument>` work order in `_staff/quick-guides/instrument-specifications.md`. Do not change the template structure, CSS, canonical page, published Quick Guide, or staff training guide. Do not invent or infer content. If the work order is blocked or any required claim, control, image, or end state is unverified, stop and report the blocker instead of drafting around it. Render and inspect the two-page PDF, but leave the candidate unpublished and uncommitted for review.
