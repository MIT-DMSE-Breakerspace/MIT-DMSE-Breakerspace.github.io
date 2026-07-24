# Materials Showcase

This directory contains curated, educational stories assembled from approved Breakerspace sample records, observations, instrument results, course activities, projects, and events.

The Materials Showcase is intended to replace the earlier idea of a conventional project gallery. A gallery would depend on people repeatedly submitting polished project narratives and would be likely to become sparse or stale. A showcase instead draws new stories from information the Breakerspace already needs to collect, especially the sample library and its associated characterization results.

## Editorial Purpose

Every showcase must teach something about materials, measurement, or experimental reasoning. It should not be only a collection of attractive images, a list of samples, an event recap, or a promotional feature.

A strong showcase helps an undergraduate reader:

* Begin with a clear question, comparison, or theme.
* Notice meaningful features in images, spectra, plots, or mechanical data.
* Connect those observations to materials-science concepts.
* Understand why particular instruments or preparation methods were used.
* Distinguish what the evidence supports from what it does not prove.
* Follow links to the underlying sample records and instrument guidance when they want more detail.

Themes may focus on a material class, structure, processing route, property, failure mode, measurement problem, course activity, or a comparison across instruments. Examples include polymers, metals, coffee, fracture surfaces, powders across length scales, processing traces, or one sample examined by several methods.

## Public Page Model

Each showcase should normally contain:

1. A concise title and a one- or two-sentence educational premise.
2. The question or comparison that organizes the page.
3. Three to six approved sample-library observations or a similarly focused evidence set.
4. Images, spectra, plots, or other results with useful captions and alternative text.
5. Short prompts or explanations directing attention to important features.
6. The instruments and preparation methods used.
7. Relevant materials-science concepts.
8. An honest discussion of limitations, uncertainty, artifacts, or additional measurements.
9. Links to the source sample records, instrument pages, and course or event context where applicable.

Projects and course activities may appear when they provide useful context, but they do not require a separate gallery submission or a new narrative written from scratch. A project can contribute one observation, several related records, or the organizing question for a showcase.

## Source Of Truth

The showcase page is a curated presentation layer, not the authoritative record for a sample or measurement.

When the sample-library system is implemented, its database should remain authoritative for:

* Stable sample, package, observation, and file identifiers.
* Material identity, provenance, preparation, and handling information.
* Instrument settings and characterization results.
* Publication permission and attribution.
* Approved captions, alternative text, concepts, and tags.
* Relationships among samples, observations, instruments, exercises, courses, projects, and events.

Showcase pages should reference those identifiers and reuse approved public derivatives rather than copy or silently alter source records. Raw files can remain on the internal file server; web-sized images, plots, and small datasets can be exported to the site.

## Proposed Workflow And Cadence

The recommended public cadence is approximately monthly. The site should not promise a fixed monthly schedule: a good evergreen showcase should remain featured until another one is ready, and a cycle should be skipped when the source material does not support a strong educational story.

A weekly background process may:

1. Read newly approved, publication-eligible sample and observation records.
2. Improve or propose tags and cross-references without changing authoritative data automatically.
3. Identify possible themes, comparisons, and missing information.
4. Check whether a proposed theme has enough varied, high-quality evidence.
5. Prepare candidates for the next editorial cycle.

Once per month, or whenever a strong candidate exists, an automated drafting process may:

1. Select a coherent set of approved records.
2. Draft an educational premise, sequence, captions, comparison prompts, and related concepts.
3. Link the draft to its sample and observation identifiers.
4. Generate a preview branch or pull request.
5. Flag unsupported claims, missing permissions, weak images, incomplete metadata, and scientific questions for review.

Publication must remain human-reviewed. A Breakerspace staff editor should confirm scientific accuracy, permissions, attribution, image choices, accessibility, tone, and the distinction between observation and inference. Automation must never invent measurements, imply that a comparison is controlled when it is not, or publish directly because a calendar interval elapsed.

## Lifecycle

Suggested statuses are:

* `demo`: tests the content model and may identify missing data in public.
* `draft`: under development and normally not linked from public pages.
* `review`: ready for scientific, editorial, permissions, and accessibility review.
* `published`: approved and available as part of the public showcase.
* `archived`: no longer featured but still educationally useful and publicly available.

Published pages should remain durable. Eventually, a showcase index can present one featured theme and an archive browsable by material class, concept, instrument, course or event, and everyday object or application. Do not add the showcase to top-level navigation until there are several strong published entries.

## Repository Structure

```text
showcases/
  README.md                         # This design and maintenance guide; not published
  _template.md                      # Authoring and generated-page template; not published
  <showcase-slug>.md                # Public showcase page

assets/img/showcases/
  <showcase-slug>/                  # Approved web derivatives unique to a showcase

_data/
  showcases.yml                     # Optional future registry for featured/archive state
```

Prefer reusing an approved image already in `assets/img/` when the same derivative serves an instrument, course, event, or sample record. Do not duplicate large files merely to match this directory sketch.

## Front Matter Contract

The nested `showcase` fields in `_template.md` are the proposed machine-readable contract. In particular:

* `status` controls editorial state.
* `featured` will eventually control the current featured showcase.
* `theme` states the educational organizing idea.
* `sample_ids` and `observation_ids` connect the narrative to authoritative records.
* `concepts`, `instruments`, and `context` support cross-linking and archive filters.

The contract can evolve while the sample-library database is being designed. Keep stable identifiers separate from titles and physical storage locations so labels and locations can change without breaking links.

## Demo

[`pumpkin-strength-to-weight.md`](pumpkin-strength-to-weight.md) is the first proposed-format demonstration. It uses photographs from the Infinite Halloween pumpkin carving and Instron compression activity. The page currently explains the educational question and identifies the evidence still needed; it must not imply that unpublished masses, peak loads, curves, or rankings are already available.
