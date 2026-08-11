---
published: false
---

# Locked Quick Guide Production Procedure

This directory turns the reviewed FTIR SOP-and-visual-map prototype into a controlled production task. It is written so an implementation assistant can copy, substitute, position, and validate content without designing a new guide or inventing instrument guidance.

The locked release-candidate model was approved on 2026-08-07 for **unpublished drafting and lab-assistant review**. It is not approval to publish, print for use, or replace the existing FTIR, optical, or XRD guides. Production approval still requires instrument-specific technical review and a physical duplex print proof.

On 2026-08-10 the lab manager authorized one cross-instrument **provisional composition pass**. That mode may create unpublished drafts for blocked instruments so reviewers can see the complete SOP side, intended visual-map composition, missing assets, unresolved decisions, and likely layout exceptions together. It does not make a proposed workflow canonical or relax any release gate. Follow [Provisional Placeholder Draft Mode](#provisional-placeholder-draft-mode) whenever that mode is named in the assignment.

That set was then audited. **Read [`audit-2026-08-10.md`](audit-2026-08-10.md) before editing any prototype or drafting a new one.** It records 3 blocker, 7 major, and 8 minor findings against all eleven files with per-finding source lines and required corrections, plus the validation evidence and the checks that could not be completed. Three of its conclusions change how this procedure should be applied:

* A **header/notice print overlap affects all eleven prototypes**, including the FTIR reference, and no draft records it as a layout exception. Do not treat a two-page render as proof the composition holds.
* The **FTIR reference is not exempt from technical review.** Its source images cannot print at 100% scale and two control-key entries do not match the visible interface labels, so copying its image or key treatment forward propagates known defects.
* Several findings need a **staff decision** because they touch locked geometry or unresolved policy. Do not resolve those by shortening an SOP step, shrinking type, narrowing a curriculum, or trimming a canonical instrument identity.

## Authority And Relationship To Training

The canonical instrument page is the operating authority. The Quick Guide and staff training guide are sibling derivatives of that page, but they use three deliberately separate layers of it:

* The **canonical SOP** is the short, sample-agnostic state-transition spine for trained users: reach the ready state, load or position a sample, characterize it as appropriate, save, unload, clean, and leave the instrument in its required final state. It must not be expanded to enumerate the Level 1 curriculum.
* The **Level 1 workflow** is the explicit set of operations staff teach in the introductory session. It follows the SOP spine but may exercise several legitimate characterization paths, include a short capability preview, and add the trainer-selected sample, question, expected contrast, and coaching prompts.
* The **Quick Guide** puts the canonical SOP on Side 1 and maps the controls the trainee uses during the approved Level 1 workflow on Side 2. It is the trainee's and trained user's compact **how-to reference**, not a second SOP or a miniature manual.
* The **staff training guide** is the trainer's **coverage and coaching checklist**. It ensures the trainer teaches the SOP spine, the selected Level 1 operations, the immediate quality decision, cleanup, shutdown, and administrative closeout.

During training, the participant should hold and use the printed Quick Guide while the trainer follows the staff guide. That does not make either document the source for the other, and it does not require their wording or section boundaries to match.

## The Locked Target Composition

Every candidate produced from this model is:

* exactly two US Letter pages for duplex printing, long-edge flip;
* one complete normal-use workflow, from the expected ready state back to that state;
* Side 1: the canonical SOP in the left column and three guidance boxes in the right column;
* Side 2: one annotated control map, an immediate quality or readiness decision, and compact reminders;
* an unpublished review artifact until staff approval and physical proof;
* sample-agnostic unless the canonical procedure or approved Level 1 system check genuinely requires a particular reference or consumable;
* usable in grayscale and understandable without relying on background color.

The visual hierarchy is also fixed:

* one document `<h1>` for the instrument and routine workflow;
* `<h2>` for **Standard Operating Procedure (SOP)** and the Side 2 visual-map title;
* `<h3>` for **Instrument startup**, **Operation**, **Instrument shutdown**, interface/result subsections such as **Main OMNIC window**, and compact reminder headings.

The Side 2 title is an `<h2>` styled at the same display size as the document title. Do not add a second `<h1>` merely because it starts a new printed side.

## Provisional Placeholder Draft Mode

This mode is active only when the lab manager explicitly commissions a provisional or placeholder pass. Its purpose is to expose composition and evidence gaps without turning them into plausible-looking instructions.

* Create `quick-guides/<slug>-sop-map-prototype.md` with `published: false`. Do not alter the existing published Quick Guide, the FTIR reference prototype, a canonical instrument page, or a staff training guide.
* Mark the screen banner and both review badges **Provisional composition draft — incomplete**. Every footer must say **Provisional**, not merely **Prototype**.
* Copy the complete canonical SOP onto Side 1 under the locked headings. Do not replace it with the Level 1 exercise or broaden it to enumerate taught capabilities.
* Use established Level 1 scope and map functions from the work order. A proposed or undecided item must remain visibly labeled as a review gap; it must not be written as an instruction or policy.
* Replace every missing, obsolete, private, annotated, unapproved, or insufficient-resolution image with the standardized frame below. The visible description must come from the work order and say exactly what must be captured, which state must be shown, and what release gate remains.
* Do not draw fake interface controls, callout rectangles, leaders, numbers, graphs, results, or QR patterns inside a placeholder. Do not generate or redraw an instrument interface. A multi-view requirement uses one placeholder that names the required views and the unresolved layout decision; it does not invent an unreviewed multi-view layout.
* If an exact control label is unverified, list it only as **Label to verify: `<work-order wording>`** inside the placeholder or review-gap block. Do not put it in a numbered control key.
* A missing QR asset uses the compact QR placeholder and retains the plain-text canonical URL.
* Preserve every blocker from the work order. A provisional draft can exist while remaining **BLOCKED FOR TECHNICAL COMPLETION AND RELEASE**.
* The target remains two Letter pages. If the full canonical SOP or honest placeholder scope does not fit, do not shrink type, omit content, or silently redesign the template. Keep the draft, record the rendered page count and overflow, and mark the layout exception for review.

Use this exact image-placeholder structure, adding the `--map`, `--quality`, or `--qr` modifier appropriate to its location:

```html
<div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--map"
     role="img"
     aria-label="Image placeholder: [OBJECTIVE CAPTURE DESCRIPTION]">
  <strong>Image placeholder</strong>
  <span>Capture needed: [OBJECTIVE CAPTURE DESCRIPTION]</span>
  <small>Release gate: [UNRESOLVED SOURCE OR VERIFICATION REQUIREMENT]</small>
</div>
```

Use this structure when a curriculum, control-set, quality decision, end state, or layout choice is unresolved:

```html
<div class="quick-guide-sop-map-review-gap">
  <strong>Review gap</strong>
  <p>Decision required: [COPY OR CONCISELY RESTATE THE WORK-ORDER RELEASE GATE].</p>
</div>
```

These are review labels, not `TODO` markers. They must be specific enough that a lab assistant can identify the required decision or capture without reading commit history.

## Fixed Versus Replaceable

| Element | Instruction |
| --- | --- |
| Page size, two-side composition, columns, spacing, type sizes, colors, footers, review badge, and CSS classes | **Locked. Do not change.** |
| Heading levels and section order | **Locked. Do not change.** |
| Three Side 1 guidance boxes | **Locked structure. Replace only the instrument-specific text described below.** |
| Side 2 control-map image count | One primary annotated image by default. Do not add an inset or second map unless the instrument work order explicitly identifies multiple essential control surfaces or interface states and a separate layout variant has been reviewed and locked first. In provisional mode, use one descriptive multi-view placeholder rather than inventing the variant. |
| Side 2 decision panels | Two panels using the existing stop/ready treatment. They may show bad/good output, incorrect/correct loading, or stop/continue system state as specified for the instrument. |
| Instrument title, software/map title, subtitle, URL, QR asset, owner/date, SOP bullets, control labels, captions, and image paths | Replace from the canonical page and the instrument specification. Provisional mode uses the standardized placeholders when a source or exact label is not approved. |
| Inline SVG target rectangles, leaders, and number locations | Reposition mechanically for the approved images. Keep the annotation style unchanged. |
| Canonical instrument pages, staff guides, published Quick Guides, and shared CSS | **Out of scope. Do not edit.** |

Do not add sections, explanatory paragraphs, parameter tables, optional workflows, interpretation lessons, manufacturer-manual summaries, or new safety claims. Do not improve wording by supplying facts that are absent from the canonical page.

## Source Preflight

Before treating an instrument work order as mechanical, audit its source trail.

* Copy the full manufacturer/model identity from the canonical instrument page's H1. A manual, image filename, similar product, or remembered instrument is not an identity source.
* Identify three things separately: the canonical SOP spine, the approved Level 1 teaching workflow, and the controls that workflow requires on the software map. Do not call a sequence “canonical” merely because it appears in detailed instructions or an exercise.
* Distinguish established source content from a proposed drafting decision. A proposal in `instrument-specifications.md` remains a blocker until staff approves it; it must not become guide prose merely because it sounds reasonable.
* Confirm every named control in both the canonical page and the source image. If the page names a function but the image shows only an unverified icon, record the icon/function check as a release gate.
* Inspect every source image at full resolution. Recapture any image with baked-in annotation, a username, personal or project identifier, file path, unrelated data, obsolete interface state, or text that will not remain legible in print.
* Confirm that each stop/ready pair asks one observable question. Use only a corrective action already stated on the canonical page; a visually plausible result is not automatically an approved acceptance standard.

## The Three Guidance Boxes

Every instrument uses the same three-box architecture.

1. **Critical rule.** Rename this box for the instrument's dominant at-the-bench boundary: glove separation, sample/height clearance, interlock, moving crosshead, laser enclosure, indenter/scale compatibility, dry-powder loading, cuvette handling, or high-voltage/vacuum state. Use only canonical language.
2. **Before you leave.** A five-item maximum end-state check derived from the SOP: data, sample, cleaning, software/workstation, and instrument/area state.
3. **Stop and ask staff.** The canonical stop conditions plus the instrument-page QR code and plain-text URL.

No instrument currently needs a fourth general-purpose box. If three boxes cannot hold the safe boundary legibly, stop. The likely answer is a narrower primary workflow or a separate task-specific card, not another box or smaller text.

Advanced or accessory workflows do not belong in the primary guide merely because they are common. Examples include Phenom Pure cold-stage work, independent Phenom XL EDS operation, LEXT analysis/reporting, fluorescence on the Duetta, or automated ion-mill recipes. A method that staff intentionally teach in Level 1 is not excluded merely because it is more advanced than the most basic acquisition; record that curriculum decision explicitly and map only the controls needed to teach it.

The locked template has no inset slot. Do not invent one. When both software control-finding and physical readiness matter, use the primary image for the software and the existing stop/ready panels for one matched physical decision. When an approved Level 1 workflow genuinely requires two control surfaces or several mutually exclusive interface states, do not narrow the curriculum to protect the template: keep the work order blocked until a specific multi-view variant is reviewed and locked. Instron and Raman currently require that decision.

## Mechanical Work Order

For each instrument, follow these steps in order.

1. Read this file, [`sop-visual-map-template.md`](sop-visual-map-template.md), and the instrument's complete entry in [`instrument-specifications.md`](instrument-specifications.md).
2. Read the canonical instrument page's H1, SOP, routine detailed workflow, Level 1 exercise, save/export directions, quality gate, stop conditions, and shutdown. Record the SOP spine, Level 1 operations, and required map controls separately. Do not use memory or a manufacturer manual to fill gaps.
3. Check the specification's status and the assignment mode. For a normal release-candidate task, **BLOCKED** means do not create a guide. For an explicitly authorized provisional placeholder pass, create the unpublished composition draft and carry every blocker into a specific placeholder or review-gap block without treating it as resolved.
4. Copy the template to `quick-guides/<slug>-sop-map-prototype.md`. Keep `published: false`, the prototype permalink, screen warning, and review badges.
5. Replace only bracketed fields and the explicitly identified image paths, captions, callout labels, SVG coordinates, SOP bullets, guidance-box text, and authorized provisional placeholders.
6. Copy the canonical SOP's order and technical meaning exactly onto Side 1. Minor removal of repeated context is allowed only when the same sentence remains unambiguous. If it does not fit, do not summarize, shrink type, omit a step, or substitute the more specific Level 1 workflow. A normal candidate stops; a provisional draft remains visibly layout-blocked and records the rendered overflow.
7. Use the precise control labels recorded in the specification. If a screenshot does not visibly support a label or verified icon function, or the canonical page and interface disagree, a normal candidate stops. In provisional mode, omit the numbered annotation/key and use the standardized placeholder with the unverified names explicitly labeled **Label to verify**.
8. Draw each callout as: outlined rectangle around the target, leader line away from the target, numbered circle at the free end, and matching numbered key. The circle or leader may not cover the control, its label, or another callout.
9. Use a sanitized, unannotated source screenshot at native resolution. Cropping and proportional resizing for legibility are allowed. Do not redact a private screenshot into a final source, redraw the UI, sharpen it with generated content, alter displayed values, or bake annotations into the raster image.
10. Run the repository checks, build the site, render the candidate as a paginated PDF, inspect both page images, extract the PDF text, and verify the QR at print resolution.
11. Leave the candidate unpublished. Report files changed, validation results, and every unresolved question. Use one commit per instrument even during an authorized cross-instrument provisional pass.

## Release-Candidate Stop Rules

Stop without drafting, and record the issue, when any of these applies:

* the default beginner workflow has not been selected;
* the controls required by the approved Level 1 workflow have not been selected;
* the canonical SOP and detailed instructions conflict;
* an exact control name or its current appearance is unverified;
* a required loading, clearance, interlock, or quality-decision image is missing;
* a safety or sample-compatibility boundary would need to be inferred;
* save/export location or final shutdown state is unknown;
* the complete SOP does not fit the locked composition;
* the guide would need more than one primary routine workflow;
* the approved workflow requires multiple control surfaces or interface states and no instrument-specific layout variant has been reviewed and locked;
* the requested instrument is marked **BLOCKED** in the specification.

Do not insert `TODO`, guessed prose, generic safety language, or placeholder controls into a release candidate. A blocked report is the correct result. In explicitly authorized provisional mode, the standardized image frames and review-gap blocks are allowed; they expose the same blockers without resolving or disguising them.

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

Two gate limitations found by the [2026-08-10 audit](audit-2026-08-10.md) apply to every future run:

* **A two-page render does not prove the layout holds.** All eleven prototypes render as exactly two Letter pages while overlapping the trained-user notice with the SOP heading. Measure element geometry in `print` media, or inspect the page images at sufficient resolution, rather than trusting the page count.
* **`script/validate-html` does not cover a `published: false` draft.** Unpublished prototypes are absent from `_site`, so the gate cannot reach them even when the remote validator is available. Validate the `--unpublished` build or record the check as unmet; do not report it as passed.

For a provisional placeholder pass, completion means something narrower:

* the candidate remains unpublished and is unmistakably labeled incomplete;
* the full canonical SOP is present and has been compared line by line;
* every missing or unapproved image has a specific standardized placeholder;
* every unresolved decision needed to understand the composition has a specific review-gap block;
* no fake control, generated interface, guessed label, guessed acceptance criterion, or proposed policy appears as settled content;
* the site builds, the candidate renders, and the actual page count and any clipping or overflow are reported;
* every original work-order release gate remains open for technical completion and publication.

A provisional draft is not a failed release candidate. It is an intentionally incomplete review artifact that makes the remaining work visible.

## Direct Instruction For An Implementation Assistant

Use this language when assigning an instrument:

> Build only the unpublished `<instrument>` SOP-and-visual-map Quick Guide candidate. Follow `_staff/quick-guides/README.md`, copy `_staff/quick-guides/sop-visual-map-template.md`, and obey the complete `<instrument>` work order in `_staff/quick-guides/instrument-specifications.md`. Do not change the template structure, CSS, canonical page, published Quick Guide, or staff training guide. Do not invent or infer content. If the work order is blocked or any required claim, control, image, or end state is unverified, stop and report the blocker instead of drafting around it. Render and inspect the two-page PDF, but leave the candidate unpublished and uncommitted for review.

For an explicitly commissioned cross-instrument provisional pass, use the separate assignment in [Provisional Placeholder Draft Mode](#provisional-placeholder-draft-mode). Do not combine the release-candidate instruction above with placeholder authorization implicitly.

The 2026-08-10 provisional assignment is exactly this:

> Build unpublished provisional SOP-and-visual-map composition drafts for Phenom XL, Phenom Pure, XRD, Instron, optical, Raman, hardness tester, particle size, UV-Vis, and ion mill. Work one instrument at a time and make one local commit per instrument. Leave the FTIR reference prototype, all existing published Quick Guides, canonical instrument pages, staff training guides, this README, the template, and shared CSS untouched. Copy the complete canonical SOP to Side 1. On Side 2, use an approved current asset only when the work order supports it; otherwise use the standardized descriptive image frame. Use a review-gap block for each unresolved curriculum, control-set, result-state, end-state, or layout decision needed to understand the composition. Do not generate an interface, fabricate a result, guess a control label, add an acceptance criterion, or make a proposal read as policy. Keep every file `published: false` and unmistakably labeled incomplete. Render each candidate, record its actual page count and any clipping or overflow, and do not shrink or omit content to force two pages. Run the full repository checks after the ten instrument commits. Do not push, merge, or change pull-request state.
