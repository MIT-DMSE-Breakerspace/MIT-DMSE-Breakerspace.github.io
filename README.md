# MIT DMSE Breakerspace Website

Last updated: 2026-07-24

This repository is the canonical source for the MIT DMSE Breakerspace production website at `breakerspace.mit.edu`.

Canonical repository:

```text
https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io
```

All continued website development, issue tracking, and releases should happen in this repository. The former redesign preview repository is archived for historical reference:

```text
https://github.com/MIT-DMSE-Breakerspace/breakerspace-preview
```

The production custom domain is declared in `CNAME` and configured in the repository's GitHub Pages settings.

This README is the top-level orientation for the site: its direction, content status, planning files, and local build instructions. It replaced an earlier `CODEx_HANDOFF.md` of the same content.

## Current Site Direction

The site is an operational guide for undergraduate lab users and teaching teams. It is organized around what a visitor is trying to do rather than the Breakerspace's internal organization.

The current top-level navigation is defined in `_data/navigation.yml`:

1. Start Here
2. Reserve Time
3. Find an Instrument
4. Sample Library
5. Get Trained
6. Get Help
7. Safety & Lab Use
8. Use the Lounge
9. Teach With Us
10. About

The homepage should remain concise. It routes users by intent and provides the lab location, arrival route, hours, and access distinction. Detailed policies and workflows belong on their task-specific pages.

## Operational Content Status

| Area | Current status |
| --- | --- |
| Start Here | Implemented as an intent-based homepage with routes for training, instrument selection, reservations, teaching, help, and lounge access. |
| Location and arrival | Implemented on the homepage: Building 8, Room 8-102A, entered through the Breakerspace Lounge. The public arrival and emergency-route details were verified before production release and should be rechecked after physical-space changes. |
| Instrument catalog | Implemented at `instruments/index.md`. All eleven instruments have consolidated operating pages, grouped by capability. |
| Training | Implemented at `training.md`, including the one-time Qualtrics record, one-hour in-person sessions, access follow-up, advanced support, and the LibCal training calendar. The revised Qualtrics flow and validations were tested before production release. |
| Reservations | Implemented at `reservations.md`, including direct calendars, a three-day advance booking window, the one-hour initial norm, reservation ownership, the 10-minute late rule, cancellations, handoffs, guests, problem routing, and staff-mediated whole-lab reservations for teaching and organized activities. |
| Safety and lab use | Implemented at `safety.md`, including emergency response, PPE, food and drink, samples, guests, working alone, cleanup, damage, and incident reporting. The physical-space wording and high-consequence operational guidance were reviewed before production release. |
| Help and support | Implemented at `resources.md`, covering instrument problems, access, workstation permissions, files, Dropbox, Slack, project support, and contact paths. |
| Teaching | Implemented at `teaching.md`, with collaboration models, staffing guidance, planning timelines, student preparation, and established course examples. |
| Lounge | Implemented at `lounge.md` for the current lounge, coffee equipment, access, food and drink boundary, teaching, and community use. Future accuracy depends on the unresolved space decision. |
| About | Implemented at `about.md`, with the lab's educational purpose, a brief account of its development through undergraduate teaching and student use, the team model, and contact pathways. The current student-staff roster can be added when it is ready for ongoing maintenance. |
| Sample library | The public index, generated detail-page layout, versioned importer, search/filter controls, and screen-image conversion are implemented. Two reviewed records currently populate the library, which is linked from top-level navigation. The pre-fall collection goal is 25 publishable samples, with 50 as a stretch target. |
| Materials showcase | The proposed educational showcase system is documented in `showcases/README.md`, with an unlisted pumpkin strength-to-weight demonstration at `showcases/pumpkin-strength-to-weight.md`. It is not yet a populated archive or top-level navigation destination. |

## Instrument Page Migration

The canonical instrument catalog is `instruments/index.md`.

Consolidated coverage now includes all eleven instruments:

* Thermo Fisher Phenom XL SEM
* Thermo Fisher Phenom Pure SEM
* Technoorg-Linda SEMPrep 2 ion mill
* Olympus DSX-1000 optical microscope
* Thermo Scientific Nicolet iS5 FTIR spectrometer
* Horiba Duetta fluorescence and absorbance spectrometer
* Malvern Panalytical Aeris Research XRD
* Microtrac Sync particle size analyzer
* Horiba XploRA confocal Raman microscope
* Instron 68TM-50 universal testing system
* Innovatest Nemesis 5100G2 hardness tester

The SEMs use a shared hub at `instruments/sem.md` plus separate safety-critical operating pages at `instruments/phenom-xl.md` and `instruments/phenom-pure.md`.

The tutorial-to-instrument migration is complete: no instruments remain on legacy tutorial/SOP pages. Every promoted instrument's legacy `tutorials/*.md` page has been retired as a redirect to its canonical `instruments/` page, preserving the old URLs. Remaining instrument work is depth and media (photography, screenshots, staff verification, and deeper operating detail on some pages) rather than structural migration. The detailed page model and migration rules live in `instruments/readme.md`.

Old public URLs are preserved: each legacy `tutorials/*.html` page is a redirect to its `instruments/` page, and the former `lab.md` catalog now redirects to `instruments/index.md` rather than acting as a competing catalog.

## Authoritative Planning Files

Use one source of truth for each kind of work:

* `_staff/site-todo.md`: the three-tier launch plan, cross-site policy decisions, accessibility follow-up, and ongoing operational maintenance.
* `_staff-training/`: trainer-facing guide model and the coordinated Qualtrics launch review.
* `instruments/readme.md`: instrument-page architecture, migration status, shared includes, and authoring conventions.
* `instruments/staff-todo.md`: unpublished instrument-specific missing images, workflows, examples, exercises, and technical review items.
* `showcases/README.md`: Materials Showcase purpose, source model, editorial workflow, cadence, automation boundaries, and authoring contract.

Public pages should state current policy clearly. Do not expose unresolved policy questions on public pages merely to track them; place those decisions in `_staff/site-todo.md`.

## Release And Improvement Strategy

The production site should remain accurate and useful without waiting for every planned enrichment project to be complete. The canonical checklist in `_staff/site-todo.md` separates release-critical work, urgent fall preparation, and ongoing improvement:

1. **Release-critical work:** keep safety, onboarding, access, external systems, accessibility, redirects, and core task paths functioning.
2. **Urgent before the fall term:** establish consistent staff training guides and Level 1 samples for fall offerings; resolve remaining high-traffic instrument details; add the emergency-equipment visual; broaden accessibility testing; and prepare for higher-volume notices, training, and lounge use.
3. **Ongoing fall improvement:** assign student employees supervised work on instrument media, the sample library, Materials Showcases, archived content, accessibility remediation, and recurring quality checks.

The sample library, a populated showcase archive, complete instrument photography, and other enrichment work are not release blockers. Unfinished pages should remain unpublished until they are accurate enough to be useful.

## Content And Maintenance Principles

* Prefer task-based routes and plain operational language.
* Keep the homepage short; do not turn it into a complete policy page.
* Make each consolidated instrument page the canonical destination for that instrument.
* Put trained-user quick references near the top and detailed learning guidance below.
* Link to shared lab policy instead of duplicating it, while keeping safety-critical instrument steps on the instrument page.
* Use real lab photographs and real example data when users need to identify equipment, spaces, samples, or results.
* Keep staff-only planning in underscore-prefixed directories, but remember that the repository may still be publicly readable.
* Avoid storing local workstation credentials, access codes, private student information, or sensitive physical-security details in the repository. Public pages may identify MIT Kerberos as the workstation credential type. Document a shared application login only when staff have explicitly determined that the operational benefit outweighs the negligible access risk, as with the optical microscope's Guest account.
* Preserve old public URLs during migration when practical, but do not maintain two conflicting sources of operational truth.

## Local Development And Validation

Install dependencies once from the repository root:

```sh
script/bootstrap
```

Build the site:

```sh
bundle exec jekyll build
```

Run a local preview:

```sh
bundle exec jekyll serve --host 127.0.0.1
```

The current build succeeds. Dart Sass reports existing `@import` deprecation warnings; these are not build failures. Generated `_site/` output and Jekyll caches are ignored by Git.

Before finishing a site change:

* Run `git diff --check`.
* Run `bundle exec jekyll build`.
* Check internal links and heading fragments when navigation or anchors change.
* Check image dimensions, alternative text, lazy loading, and responsive behavior for new media. Use `_includes/responsive-image.html` for responsive AVIF/WebP/JPEG output and `_includes/instructional-video.html` for non-autoplaying MP4/WebM instruction.
* Use `script/generate-responsive-image` and `script/convert-instructional-gif` to create consistent production derivatives from reviewed source media.
* Review the change against `_staff/site-todo.md` when it affects launch policy or more than one page.

## Sample Library Publication

The Windows-authenticated sample-library application is the operational system of record. This public repository receives only a reviewed, allowlisted export snapshot; it must never receive the SQLite database, upload directory, internal notes, staff identities, or internal-only fields and files.

After an administrator reviews approved records and downloads a publication ZIP, import it from the repository root:

```sh
script/import-sample-library /path/to/breakerspace-sample-library-EXPORT_ID.zip
bundle exec jekyll build
```

Safari may automatically expand the ZIP after downloading it. The importer accepts either the `.zip` file or the resulting export folder.

The importer validates schema version 1, rejects unexpected data fields and unsafe archive paths, verifies each file's SHA-256 hash and size, generates `_samples/*.md`, and places public files under `assets/sample-library/`. Image assets are converted with macOS `sips` to quality-82 JPEGs bounded to 1,800 pixels. Full-resolution image sources remain in the internal application.

Review the generated index, each detail page, the optimized images, and `git diff` before committing. Generated `_samples/` and `assets/sample-library/` directories carry marker files; the importer refuses to replace an unmarked directory.

## Repository Context

Production development and GitHub Pages publishing use the `main` branch and the remote:

```text
https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io.git
```

GitHub Pages publishes the repository root from `main`. Make and review changes on `main`; pushing an approved commit to that branch triggers the production deployment.

The production site immediately before the 2026-07-24 redesign cutover is preserved by the tag and branch named `production-pre-redesign-2026-07-24`. The final preview source is preserved in the archived preview repository under `preview-final-2026-07-24`.

The user prefers practical, polished content that students and lab staff can maintain. Favor established site patterns over clever abstractions, and keep unrelated refactors out of focused content changes.
