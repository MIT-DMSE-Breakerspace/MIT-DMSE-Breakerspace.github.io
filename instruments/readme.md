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

This section is a durable status snapshot of the **Detailed Operating Instructions** section (`{#details}`) on each instrument page, so a new working session can pick up the levelling work without re-reading every page. Last full assessment: **2026-07-20**. Re-run the assessment (read each page's detailed section against the rubric below) whenever a page's detailed section is substantially edited, and update the table and date.

**The bar we are levelling to.** Every detailed section should be a useful training guide for the *common* tasks on that instrument — startup context, sample loading, the routine measurement/acquisition workflow, and saving/exporting results — with practical context and media where available. It should **reference specific manual sections or pages for deep dives rather than reproduce the manufacturer manual.** Page-level manual citations (for example "sample-prep guide p. 1.4") are the target; a bare list of whole-PDF links is the weaker fallback. A short worked example (a real run from start to result) is the mark of the strongest pages.

**Readiness rubric (0-5):** 0 = missing/stub; 1 = skeletal bullets; 2 = partial workflow with gaps; 3 = solid common-task walkthrough but text-light or software-light; 4 = thorough with context and some media; 5 = exemplary training guide with media and page-level manual references.

| Page | Score | State of the detailed section |
| --- | --- | --- |
| `ion-mill.md` | 5 | Exemplary and fully self-contained (no includes): concepts, polishing, slope cutting, startup/purge, loading, semi-auto and automated recipes, data. Richest media set. Remaining tasks are enhancement media, not content. |
| `xrd.md` | 5 | Exemplary: loading, run a program, export workflow/formats, HighScore analysis, and a 7-step worked unknown-powder example. **Only page with true page-level manual citations.** Best structural model for the priority pages. |
| `ftir.md` | 5 | Exemplary: per-sample-type loading (solid/powder/liquid), ATR cleaning, setup, background, and collection with on-demand MP4/WebM instruction. Links whole manuals (not page-cited) and points to in-software Help. |
| `optical.md` | 4 | Thorough with page-cited manuals (QRG p.11, app manual pp.52/63/106/112/132) and on-demand video; startup/loading remains concise and several acquisition videos remain on the staff checklist. |
| `psa.md` | 4 | Video-rich workflow (cleaning, loading, software, collection). Manual references are whole-PDF only. The workstation access handoff and default database/export conventions still need confirming; authentication details should remain in training or at the instrument. |
| `uv-vis.md` | 4 | Good routine-absorbance EZ Spec workflow; needs confirmed method settings and process screenshots. Fluorescence remains staff-guided. Manual references are whole-PDF only. |
| `raman.md` | 4 | Strong text and conceptual depth (laser/grating choice, Si calibration, mapping, z-profiling) but **zero embedded media** and several control names/settings flagged for staff verification. |
| `phenom-xl.md` | 4 | Solid; core LiveSEM imaging workflow lives in `_includes/sem/live-sem-workflow.md`. Instrument-specific loading/imaging GIFs remain on the staff checklist. |
| `phenom-pure.md` | 4 | Solid; **cold-stage section is the most developed of any page.** Standard NavCam-to-LiveSEM imaging delegated to the shared include; generic loading media remain on the staff checklist. |
| `sem.md` | 3 (hub) | Intentionally a hub with no operating walkthrough — startup/imaging/shutdown are delegated to the two Phenom pages. Strong science and shared sample-prep content. Do not add operation here. |
| `hardness-tester.md` | 3 ⚠️ | **Priority.** Competent prose walkthrough (loading, focus, scale, run, patterns) but text-only, software-light, and the only linked manual is a marketing brochure for the wrong model (9100, not 5100G2). |
| `instron.md` | 3 ⚠️ | **Priority.** Strong hardware setup (load cell, fixtures, extensometer) with real figures, but the Bluehill test-method/run half of the workflow is essentially absent from the detailed section. |

**Best-practice exemplars to copy from:** `ion-mill.md`, `xrd.md`, `ftir.md`. When levelling another page, mirror their structure. For the two current priorities, `xrd.md` is the closest model — it shows the target shape: *run the routine measurement → save/export → a worked example → page-cited manual references for deep dives.*

### Priority Work: Hardness Tester

Current score 3. To reach 4-5, the detailed section needs:

* An annotated **Impressions software** walkthrough: camera/focus view, the In Focus button, the top-left test-selection box, and the Pattern setup dialog (all currently only described in prose, no screenshots).
* A walkthrough of **configuring load, dwell time, and scale** before a run (currently absent).
* **Save/export the report** steps in the detailed section (only mentioned briefly under Data).
* Coverage of the **9-position turret** behaviour and how objectives/indenters switch.
* A **worked example** reading a well-formed vs. poor Vickers/Rockwell indent (currently only on the staff checklist).
* **Correct manuals:** replace the wrong-model Nemesis 9100 brochure with the Impressions software manual and the 5100G2 operator/reference manual, and cite sections. Confirm the exact available Rockwell/Vickers/Brinell scales and any lab limits, and add or link a conversion reference.

### Priority Work: Instron

Current score 3. The page is lopsided — hardware setup is strong, test execution is missing. To reach 4-5, the detailed section needs:

* A **Bluehill Universal method walkthrough**: create/select from a template, enter sample dimensions, configure outputs (currently only referenced under Data/SOP, not walked through in the detailed section).
* The **travel-limit prompt** and a **test-run walkthrough** (unlock / go / stop) written into the detailed section — currently these live only as SOP bullets.
* **Shutdown / save / export** steps in the detailed section.
* An **annotated example force-displacement (or stress-strain) curve** showing the stiff region, peak, and failure point.
* **Bluehill screenshots** for the method screen, test screen, and travel-limit prompt; and **reshoot/standardize** the tensile (1 kN and 50 kN), compression, and flexure setup photos (figure blocks are already laid out and waiting).
* Manuals are linked with good breadth but **not page-cited**; add "see section/page" pointers for grip torque, fixture changes, and extensometer setup.

### Cross-Page Notes

* Every page follows the same editorial pattern: quick reference above, `{#details}` training section below, manual links rather than manual replication. The main levelling axes are (a) page-level manual citations vs. whole-PDF links, (b) embedded media, and (c) a worked start-to-result example.
* The SEM family shares content through `_includes/sem/` (notably `live-sem-workflow.md`, `data-and-analysis.md`, `common-failure-modes.md`). When judging or editing a Phenom page's detailed workflow, remember part of it lives in those includes, not the page.
* Locally hosted manuals currently exist only for UV-Vis (Duetta/EZ Spec) and Raman (LabSpec 6 quick-start, AutoFocus, confocality tech note) under `assets/img/tutorials/`. Other instruments link manufacturer-hosted or Dropbox PDFs.
* Media tasks recur across nearly every page (gloved re-shoots, annotated example results). They are consolidated in [`staff-todo.md`](staff-todo.md), align with Tier 3 improvement work in `../_staff/site-todo.md`, and are not launch blockers; missing *instruction text* on the two priority pages is the higher-value gap.

## Content Strategy

Instrument pages should be complete enough to use at the instrument without requiring the user to click away for basic safety, setup, loading, shutdown, or troubleshooting steps.

The top of each operating page should work as a quick reference for trained users. Where a two-page workstation handout exists, publish it at a standalone `/quick-guides/` URL using the `quick-guide` layout and an `_includes/quick-guides/` content include. Set `quick_guide_url` in the instrument page front matter so the prominent action links directly to that lightweight page. Do not embed the full handout or its media in the long operating page. The shared print stylesheet prints the standalone guide as exactly two US Letter pages for duplex printing. Do not maintain an independent PDF source; generate a PDF from the standalone page only when a fixed release artifact is needed.

Every Quick Guide should:

* Identify itself as a trained-user reference that does not replace training.
* Use Side 1 for what the instrument shows, routine method selection, compatibility, interpretation, and stop conditions.
* Use Side 2 for the routine startup, operation, saving, cleanup, shutdown, and help workflow.
* Include the canonical page URL, document owner or review responsibility, and last-reviewed date.
* Remain understandable in grayscale and without printed background colors.
* Draw technical claims and operating steps from the same instrument page rather than introducing an alternate workflow.

The pilot Quick Guides are `/quick-guides/optical/` and `/quick-guides/ftir/`, backed by `_includes/quick-guides/optical.html` and `_includes/quick-guides/ftir.html`. Use their page structure and the shared `quick-guide-*` CSS classes as the pattern for later instruments.

Each page should also include a short educational section near the top, after Quick Actions and before the SOP, aimed at curious undergraduates from any major. Assume students have completed high-school science but may not have taken university-level physics, chemistry, biology, or materials science. This section should answer what the instrument reveals, why scientists use it, what typical results look like, and what the instrument cannot tell you. Keep it satisfying but not textbook-length.

Avoid mixing instrument-specific steps when confusion could cause damage. For example, the Phenom XL and Phenom Pure have different sample-height rules, so they now have separate operating pages.

## Standard Page Order

Use this order unless an instrument family needs a hub/split structure:

1. Title and instrument name.
2. Overview: what it does and what it is good for.
3. Quick actions: concise, fully linked actions grouped under **Get started** and **Learn and reference**. Use a two-column goal/guidance table only when the guidance adds a meaningful condition, choice, or preparation step rather than restating the goal.
4. Two-page Quick Guide for trained users, when available.
5. What this instrument shows you: accessible educational context, use cases, example results, and limits.
6. Page index.
7. Standard operating protocol: startup, operation, shutdown.
8. Compatible materials and sample preparation.
9. Quick method, mode, or settings selection where useful.
10. Detailed operating instructions for new users.
11. Data processing and analysis.
12. Common failure modes.
13. Manufacturer manuals and links.
14. Exercises.

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
### Compatible Materials And Sample Prep {#materials}
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
