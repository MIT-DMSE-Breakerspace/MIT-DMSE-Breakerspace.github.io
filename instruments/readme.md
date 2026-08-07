# Instrument Pages README

This folder is for integrated instrument pages. These pages are intended to become the main user-facing destination for each lab instrument, combining the instrument overview, educational context, short operational reference, training/tutorial material, reservation links, manuals, and exercises. Instrument-specific improvement work is tracked in the unpublished [`staff-todo.md`](staff-todo.md).

The older `tutorials/` pages can remain in place during the transition. The working model is:

* `instruments/sem.md`: a shared SEM hub for choosing between SEM instruments and reviewing common SEM concepts.
* `instruments/phenom-xl.md`: the Phenom XL operating page, written only for the XL.
* `instruments/phenom-pure.md`: the Phenom Pure operating page, written only for the Pure.

For instruments that do not need to be split into multiple related tools, one page such as `instruments/ftir.md` may be enough.

## Consolidation Status

The canonical catalog is `instruments/index.md`. Consolidated pages now cover all eleven instruments:

* Phenom XL and Phenom Pure through the shared `sem.md` hub and separate operating pages.
* SEMPrep 2 ion mill.
* Olympus DSX-1000 optical microscope.
* Nicolet iS5 FTIR spectrometer.
* Horiba Duetta fluorescence and absorbance spectrometer.
* Malvern Panalytical Aeris Research XRD.
* Microtrac Sync particle size analyzer.
* Horiba XploRA confocal Raman microscope.
* Instron 68TM-50 universal testing system.
* Innovatest Nemesis 5100G2 hardness tester.

The tutorial-to-instrument migration is complete: no instruments remain on legacy tutorial/SOP destinations. Each promoted instrument's legacy `tutorials/*.md` page is now a redirect to its `instruments/` page, preserving the old URL.

The sample library and Materials Showcase are planned supporting systems. Level 1 exercises should eventually point to documented sample-library records with cabinet locations, expected results, data files where useful, and replenishment information. Approved example results should be reusable from instrument pages and educational showcases rather than copied into disconnected collections. The showcase concept and editorial model are documented in `../showcases/README.md`.

## Detailed Operating Instruction Readiness

This section is a durable status snapshot of the **Detailed Operating Instructions** section (`{#details}`) on each instrument page, so a new working session can pick up the levelling work without re-reading every page. Last full assessment: **2026-07-20**, with `instron.md` reassessed **2026-07-29**. Re-run the assessment (read each page's detailed section against the rubric below) whenever a page's detailed section is substantially edited, and update the table and date.

**The bar we are levelling to.** Every detailed section should be a useful training guide for the *common* tasks on that instrument — startup context, sample loading, the routine measurement/acquisition workflow, and saving/exporting results — with practical context and media where available. It should **reference specific manual sections or pages for deep dives rather than reproduce the manufacturer manual.** Page-level manual citations (for example "sample-prep guide p. 1.4") are the target; a bare list of whole-PDF links is the weaker fallback. A short worked example (a real run from start to result) is the mark of the strongest pages.

**Readiness rubric (0-5):** 0 = missing/stub; 1 = skeletal bullets; 2 = partial workflow with gaps; 3 = solid common-task walkthrough but text-light or software-light; 4 = thorough with context and some media; 5 = exemplary training guide with media and page-level manual references.

| Page | Score | State of the detailed section |
| --- | --- | --- |
| `ion-mill.md` | 5 | Exemplary and fully self-contained (no includes): concepts, polishing, slope cutting, startup/purge, loading, semi-auto and automated recipes, data. Richest media set. Remaining tasks are enhancement media, not content. |
| `xrd.md` | 5 | Exemplary: loading, run a program, export workflow/formats, HighScore analysis, and a 7-step worked unknown-powder example. Has true page-level manual citations. Best structural model for the priority pages. |
| `ftir.md` | 5 | Exemplary: per-sample-type loading (solid/powder/liquid), ATR cleaning, setup, background, and collection with on-demand MP4/WebM instruction. Links whole manuals (not page-cited) and points to in-software Help. |
| `instron.md` | 5 | Levelled and safety-corrected 2026-07-29. Hardware setup (load cell, fixtures, loading, extensometer) plus the full Bluehill half: operating-modes table, method setup, travel/transducer limits, an 11-step run walkthrough, save/export, and a 12-step worked tensile example. Page-cited to Instron's official 6800 operator guide and the fixture/extensometer guides. Three sanitized Bluehill screenshots are published. **Remaining gaps are a verified photograph of the 5 kN grips on the 5 kN setup and the annotated example force-displacement curve** (staff media tasks). |
| `optical.md` | 4 | Thorough with page-cited manuals (QRG p.11, app manual pp.52/63/106/112/132) and on-demand video; startup/loading remains concise and several acquisition videos remain on the staff checklist. |
| `psa.md` | 4 | Video-rich workflow (cleaning, loading, software, collection). Manual references are whole-PDF only. The workstation access handoff and default database/export conventions still need confirming; authentication details should remain in training or at the instrument. |
| `uv-vis.md` | 4 | Good routine-absorbance EZ Spec workflow; needs confirmed method settings and process screenshots. Fluorescence remains staff-guided. Manual references are whole-PDF only. |
| `raman.md` | 4 | Strong text and conceptual depth (laser/grating choice, Si calibration, mapping, z-profiling) but **zero embedded media** and several control names/settings flagged for staff verification. |
| `phenom-xl.md` | 4 | Solid; core LiveSEM imaging workflow lives in `_includes/sem/live-sem-workflow.md`. Instrument-specific loading/imaging GIFs remain on the staff checklist. |
| `phenom-pure.md` | 4 | Solid; **cold-stage section is the most developed of any page.** Standard NavCam-to-LiveSEM imaging delegated to the shared include; generic loading media remain on the staff checklist. |
| `sem.md` | 3 (hub) | Intentionally a hub with no operating walkthrough — startup/imaging/shutdown are delegated to the two Phenom pages. Strong science and shared sample-prep content. Do not add operation here. |
| `hardness-tester.md` | 3 ⚠️ | **Priority.** Competent prose walkthrough (loading, focus, scale, run, patterns) but text-only, software-light, and the only linked manual is a marketing brochure for the wrong model (9100, not 5100G2). |

**Best-practice exemplars to copy from:** `ion-mill.md`, `xrd.md`, `ftir.md`, `instron.md`. When levelling another page, mirror their structure. `xrd.md` and `instron.md` both show the target shape: *run the routine measurement → save/export → a worked example → page-cited manual references for deep dives.* `instron.md` also demonstrates linking a stable official manual, publishing only sanitized software-screen derivatives, and keeping machine-specific verification work explicit in the staff checklist.

### Priority Work: Hardness Tester

Current score 3. To reach 4-5, the detailed section needs:

* An annotated **Impressions software** walkthrough: camera/focus view, the In Focus button, the top-left test-selection box, and the Pattern setup dialog (all currently only described in prose, no screenshots).
* A walkthrough of **configuring load, dwell time, and scale** before a run (currently absent).
* **Save/export the report** steps in the detailed section (only mentioned briefly under Data).
* Coverage of the **9-position turret** behaviour and how objectives/indenters switch.
* A **worked example** reading a well-formed vs. poor Vickers/Rockwell indent (currently only on the staff checklist).
* **Correct manuals:** replace the wrong-model Nemesis 9100 brochure with the Impressions software manual and the 5100G2 operator/reference manual, and cite sections. Confirm the exact available Rockwell/Vickers/Brinell scales and any lab limits, and add or link a conversion reference.

### Completed: Instron Levelling (2026-07-29)

The Instron detailed section was levelled from 3 to 5. What was added, for reference when levelling the hardness tester:

* A **two-halves framing** at the top of `{#details}` (build the load string, then set up and run in software), so the reader knows where they are in a long section.
* An **operating-modes table** (DISABLED → SET UP → CAUTION → TESTING). This resolved a real documentation gap: the ~2-second CAUTION timeout explains the common "the machine won't start" failure and was previously undocumented on the page.
* **Method setup, travel/transducer limits, the run sequence, and save/export** as first-class subsections, moving that content out of terse SOP bullets and into the training guide where the editorial model expects it.
* **Page-level citations** to Instron's official 6800 operator guide, plus section-level pointers into the wedge-grip and extensometer guides.
* Three **sanitized Bluehill screenshots**. Two source screenshots contained real student and course file names; the published derivatives were cropped and, where a crop could not exclude the names without losing instructional content, the name column was covered with a solid fill. The unredacted source screenshots were removed from the publication tree. Inspect every future screenshot for names and paths before adding it to the repository.
* Grip-technique detail that prevents bad data: 75% jaw-face coverage, centering in the load path, hand-tightening order, and the toe-in-the-curve symptom.
* A safety and equipment review established that the lab has distinct **1 kN and 5 kN tensile grips**. The photograph labeled as a 5 kN setup actually showed the 1 kN grips and was removed; it must not be reused. The 5 kN worked example now specifies the real 5 kN grips, and the staff checklist requires a verified replacement photograph before that setup is illustrated.
* The same review corrected two technical/safety claims: reading the 50 kN cell during a low-force test primarily reduces resolution rather than multiplying a correctly calibrated force value, and attachments may be checked by hand only with the frame **DISABLED**, the crosshead stationary, and the load fully relieved.

Two content sources that were sitting unused and are worth checking for other instruments: `handouts/3.000 Instron Station .pdf` (a course station handout with a complete real-world run procedure) and the manufacturer manuals themselves, which are paginated and quotable rather than only linkable.

### Cross-Page Notes

* Every page follows the same editorial pattern: quick reference above, `{#details}` training section below, manual links rather than manual replication. The main levelling axes are (a) page-level manual citations vs. whole-PDF links, (b) embedded media, and (c) a worked start-to-result example.
* The SEM family shares content through `_includes/sem/` (notably `live-sem-workflow.md`, `data-and-analysis.md`, `common-failure-modes.md`). When judging or editing a Phenom page's detailed workflow, remember part of it lives in those includes, not the page.
* Locally hosted manuals currently exist for UV-Vis (Duetta/EZ Spec), Raman (LabSpec 6 quick-start, AutoFocus, confocality tech note), and hardness (Impressions 4, Nemesis 5100G2) under `assets/img/tutorials/`. The Instron page links the official manufacturer-hosted 6800 operator guide; other instruments link manufacturer-hosted or Dropbox PDFs. Prefer a stable manufacturer source where one is available, and check any externally hosted manual links during content review because a moved file can invalidate page-level citations.
* **Screenshots of lab software often contain student names.** Bluehill's recent-method and sample lists, and equivalent file browsers on other instruments, show real user and course files. Check every screenshot before publishing and crop or redact as needed; see the Instron levelling note above for the approach used.
* Media tasks recur across nearly every page (gloved re-shoots, annotated example results). They are consolidated in [`staff-todo.md`](staff-todo.md), align with Tier 3 improvement work in `../_staff/site-todo.md`, and are not launch blockers; missing *instruction text* on the remaining priority page is the higher-value gap.
* Staff and maintainers should follow the [Tutorial Media Production Guide](../_staff/tutorial-media/README.md) for capture quality, source handoff, processing, accessibility, performance budgets, and publication checks.

## Content Strategy

Instrument pages are the canonical Breakerspace destination for each instrument. They should be complete enough to use at the instrument without requiring the user to click away for basic safety, setup, loading, shutdown, or troubleshooting steps. Manufacturer manuals support the technical content and remain the ultimate reference for capabilities and advanced details, but the instrument page owns the lab-approved operating workflow.

### Relationship Between The Page, Quick Guide, And Staff Guide

The Quick Guide and staff training guide are **sibling derivatives of the canonical instrument page**, not source and derivative of each other:

* The **instrument page** owns the complete SOP, sample limits, detailed common workflows, troubleshooting, analysis guidance, exercises, and manual links.
* The **Quick Guide** is an at-instrument performance aid for recently trained and trained users following one routine workflow.
* The **staff training guide** is the trainer's curriculum, SOP-coverage checklist, Level 1 exercise, coaching plan, and administrative closeout.

Do not require the Quick Guide to be written before the staff guide can be drafted, or the reverse. Both can be developed in parallel once the canonical SOP and intended Level 1 workflow are stable. Before a training is marked ready for routine delivery, however, both artifacts must be reviewed against the same SOP, the Quick Guide must be available in print at the instrument, and the staff guide must show how the complete normal-use path is covered. See [`../_staff-training/README.md`](../_staff-training/README.md) for the trainer-facing model.

### Quick Guide Audience And Delivery

A Quick Guide serves recently trained and trained users standing at the instrument. It does not replace training or authorize independent use by an untrained person.

The expected delivery is a reviewed, laminated duplex copy kept at the instrument. The standalone `/quick-guides/` web page exists so staff can print or replace that copy, users can obtain an accessible or personal copy, and a user has a fallback when the physical copy is unavailable. It should work on screen, but the design should not assume or encourage users to toggle between instrument-control software and a browser during routine operation.

The canonical instrument page should link clearly to the Quick Guide from **Quick Actions**, using language such as **At the instrument? Open or print the trained-user Quick Guide**. Keep the link easy to find without presenting the Quick Guide as the primary web starting point. Do not use a lone large banner above the overview that makes the Quick Guide appear to supersede the canonical page or SOP. Workstation desktop shortcuts and posted general-purpose QR codes should continue to open the canonical instrument page; the laminated guide itself can carry the direct Quick Guide URL or QR code for replacement and personal access.

Do not embed the full handout or duplicate its media in the long operating page. Publish it at a standalone `/quick-guides/` URL using the `quick-guide` layout and an `_includes/quick-guides/` content include. Set `quick_guide_url` in the instrument page front matter. The shared print stylesheet should produce exactly two US Letter pages for duplex printing. Do not maintain an independent PDF source; generate a PDF from the standalone page only when a fixed release artifact is needed.

### Quick Guide Content Contract

Every Quick Guide must:

* Identify itself as a recently-trained/trained-user reference that does not replace training.
* Draw technical claims and operating steps from the canonical instrument page rather than introduce an alternate workflow.
* Represent the complete normal-use path a trained user encounters when the instrument is in the state the previous user should have left it. Routine shutdown must restore that state. Conditional recovery, maintenance, and unusual-startup steps may remain on the canonical page when the Quick Guide states the expected condition and directs users to the page or staff if reality differs.
* Cover one default routine workflow, with compact branches only for genuinely routine choices such as sample type, holder, accessory, or observation mode.
* Include the minimum safe sample-compatibility, preparation, PPE, and stop-and-ask guidance needed while standing at the instrument.
* Use numbered steps, exact control names, and selected photographs or screenshots where users must locate or recognize hardware or software controls.
* Include an immediate quality gate: enough information to decide whether contact, focus, signal, alignment, force, or another essential condition is plausible before saving or unloading.
* Include saving/exporting, unloading, cleanup, shutdown, a before-leaving check, and a safe help state.
* Include the canonical instrument-page URL, document owner or review responsibility, and last-reviewed date.
* Remain understandable in grayscale and without printed background colors.

Interpretation beyond the immediate quality gate belongs on the instrument page. For example, deciding whether an FTIR spectrum has usable contact belongs in the Quick Guide; identifying the material from that spectrum belongs in the page's analysis guidance. Keep parameter tables out when routine operation means selecting a stored method or program. Listing settings a user never types invites unauthorized or accidental changes; name the reviewed stored programs instead.

Use the following two-side structure by default:

**Side 1 — Complete SOP plus bench guidance**

1. Instrument identity, routine-workflow title, trained-user statement, canonical URL, owner, and review date.
2. The complete canonical startup, routine operation, and shutdown sequence in the left column under **Standard Operating Procedure (SOP)**. Do not assume users know the abbreviation.
3. Three fixed guidance boxes in the right column: the instrument's dominant critical handling/safety rule, **Before you leave**, and **Stop and ask staff** with the canonical-page QR code.

**Side 2 — Visual control map plus immediate decision**

1. One primary software or hardware view with only the controls needed for the routine workflow outlined and connected by leaders to numbered circles outside the controls.
2. A matching numbered key using the interface's exact visible control names.
3. Two compact panels for the immediate stop/correct versus continue decision: data quality, loading, clearance, interlock, or system state as appropriate.
4. Compact acquisition and before-unloading reminders plus the canonical-page QR code.

Use one document `<h1>` for the instrument. **Standard Operating Procedure (SOP)** and the Side 2 visual-map title are `<h2>` headings; **Instrument startup**, **Operation**, **Instrument shutdown**, and interface/result subsections are `<h3>` headings. The Side 2 `<h2>` may be styled at title size without becoming a second `<h1>`.

If the routine workflow cannot fit legibly on two sides, do not shrink or cram the content. Keep one primary Quick Guide and create a separate task-specific workflow card for the additional routine path, or leave the advanced path on the canonical page.

Quick Guides currently exist for `/quick-guides/optical/`, `/quick-guides/ftir/`, and `/quick-guides/xrd/`, backed by the matching includes in `_includes/quick-guides/`. The locked drafting procedure, copyable two-page template, and per-instrument visual work orders are in [`../_staff/quick-guides/`](../_staff/quick-guides/README.md).

**The published `ftir.html` include remains the reference implementation for reviewed content.** Rebuilt 2026-08-03 under the contract above and corrected through later review, it demonstrates numbered workflow sections, a three-branch quality gate whose every branch ends in asking staff, and complete recovery cycles that say where to rejoin the sequence. Read it alongside [`../_staff-training/ftir.md`](../_staff-training/ftir.md) as a matched pair.

**The unpublished [`ftir-sop-map-prototype.md`](../quick-guides/ftir-sop-map-prototype.md) is the reference implementation for the new compact composition.** The strategy was accepted on 2026-08-07 for controlled drafting and lab-assistant review: complete SOP on Side 1, annotated visual map and immediate quality decision on Side 2. Its layout classes and measurements may now be copied through the locked staff template, but no instrument guide may be published or installed without its own technical review and physical proof. Do not improvise a guide for an instrument marked blocked in the [instrument-specific work orders](../_staff/quick-guides/instrument-specifications.md).

The optical guide predates the contract and still carries interpretation material. The XRD guide also predates it, is dense, and was written before its staff guide existed. Both need the same retrofit FTIR received.

**None of the three published guides or the compact FTIR prototype has received its physical print proof.** Test print-scale legibility, grayscale reproduction, QR scanning, and duplex flip before approval. Keep current measurements and readiness status in [`../_staff-training/README.md`](../_staff-training/README.md#quick-guide-layout-model) rather than duplicating them here.

Each page should also include a short educational section near the top, after Quick Actions and before the SOP, aimed at curious undergraduates from any major. Assume students have completed high-school science but may not have taken university-level physics, chemistry, biology, or materials science. This section should answer what the instrument reveals, why scientists use it, what typical results look like, and what the instrument cannot tell you. Keep it satisfying but not textbook-length.

Avoid mixing instrument-specific steps when confusion could cause damage. For example, the Phenom XL and Phenom Pure have different sample-height rules, so they now have separate operating pages.

## Standard Page Order

Use this order unless an instrument family needs a hub/split structure:

1. Title and instrument name.
2. Overview: what it does and what it is good for.
3. Quick actions: concise, fully linked actions grouped under **Get started** and **Learn and reference**. Use a two-column goal/guidance table only when the guidance adds a meaningful condition, choice, or preparation step rather than restating the goal.
4. What this instrument shows you: accessible educational context, use cases, example results, and limits.
5. Page index.
6. Standard operating protocol: startup, operation, shutdown.
7. Compatible materials and sample preparation.
8. Quick method, mode, or settings selection where useful.
9. Detailed operating instructions for new users.
10. Data processing and analysis.
11. Common failure modes.
12. Manufacturer manuals and links.
13. Exercises.

The Quick Guide is not a section of this page. It is a separate standalone document linked from Quick Actions, so it does not appear in this order.

Each operating page should have one H1 for the instrument name. The major sections in the list above should be H2s, and headings within those sections should be H3s. Add deeper levels only when the content genuinely has another nested layer; do not use heading rank only to control visual size.

## Educational Section Format

The educational section should usually be 500-900 words total, plus images or example data when available. A good default structure is:

* **The basic idea:** 1-3 short paragraphs explaining the underlying principle in plain language.
* **What scientists use it for:** 3-5 bullets with cross-disciplinary, anecdotal scenarios.
* **What to look for in the results:** 2-4 annotated examples or plain-language descriptions of typical images, spectra, maps, curves, or measurements.
* **What this instrument cannot tell you:** a short list of limits and common misconceptions.

Use annotated images or example data when they exist, but do not block publishing a useful educational section while waiting for perfect examples. Add missing examples to [`staff-todo.md`](staff-todo.md).

## Shared Includes

Shared SEM text lives in `_includes/sem/`. These snippets are inserted into pages using Jekyll include tags, for example:

```liquid
{% include sem/common-safety.md %}
```

Current SEM includes:

* `_includes/sem/common-safety.md`: shared material rules, glove use, loose-particle warning, and ask-staff language.
* `_includes/sem/sample-prep-at-a-glance.md`: shared sample-prep table.
* `_includes/sem/quick-imaging-settings.md`: shared imaging starting points.
* `_includes/sem/detailed-training-intro.md`: standard paragraph explaining that the lower section is training-guide content.
* `_includes/sem/live-sem-workflow.md`: shared Phenom software workflow, including project labels, NavCam, LiveSEM, and image acquisition.
* `_includes/sem/data-and-analysis.md`: shared basic image data handling.
* `_includes/sem/common-failure-modes.md`: shared SEM troubleshooting table.

Update an include when the same language should change on every page that uses it. Update the instrument page directly when the change applies only to that instrument.

## Link And Image Paths

The include files are inserted into pages before the site is built. Relative links inside an include are interpreted relative to the final page location, not relative to `_includes/`.

Because the SEM includes are currently used by pages in `instruments/`, image links inside the includes should usually start with:

```text
../assets/img/tutorials/sem/
```

If an include is later used by a page in another folder, check every relative link after moving it.

## Anchors

Many instrument pages use explicit heading IDs such as:

```markdown
## Compatible Materials And Sample Prep {#materials}
```

These IDs make the page index and workstation shortcuts stable even if heading text changes. Do not include the same shared snippet twice on one page, because that can create duplicate IDs.

## Adding A New Instrument Page

1. Create a new Markdown file in `instruments/`, such as `instruments/xrd.md`.
2. Start with front matter:

```yaml
---
layout: default
---
```

3. Follow the standard page order above: overview, quick actions, educational context, page index, standard operating protocol, compatible materials, detailed operating instructions, data processing, common failure modes, manuals, and exercises.
4. If several pages need the same text, create a small include under `_includes/<instrument-or-family>/`.
5. Keep instrument-specific safety-critical steps on the instrument page itself.
6. Validate local links and image paths before making the page live.

## Legacy Pages And Notes

Markdown files with front matter build into accessible pages even when they are not linked from navigation. Do not put unsafe, misleading, or contradictory instructions in a buildable draft. Add a page to `instruments/index.md` only when it is ready to be the instrument's public destination.

Old public URLs are preserved. The legacy `lab.md` catalog now redirects to `instruments/index.md` (using `layout: redirect`), and each legacy `tutorials/*.html` page redirects to its consolidated `instruments/` page. Do not revive `lab.md` or the `tutorials/` pages as competing catalogs or operating pages.

The intended pattern is that instrument workstations open the relevant instrument page directly, for example:

* Phenom XL workstation: `instruments/phenom-xl.html`
* Phenom Pure workstation: `instruments/phenom-pure.html`

The shared hub, such as `instruments/sem.html`, is best linked from the instrument catalog and used by users who are deciding which instrument to reserve.

Keep instrument-specific improvement work in the unpublished [`staff-todo.md`](staff-todo.md), not on public operating pages. Move cross-site maintenance or policy work to `../_staff/site-todo.md`.
