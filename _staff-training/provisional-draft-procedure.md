---
published: false
---

# Provisional Staff-Guide Draft Procedure

This procedure controls the rapid staff-training-guide composition pass authorized by the lab manager on 2026-08-10. It exists to put a concrete, reviewable trainer run sheet in front of lab assistants before every operational detail is settled. It does not authorize guessed instructions, publication, routine delivery, or replacing a current guide.

Read this file with [`provisional-draft-work-orders.md`](provisional-draft-work-orders.md). The work-order ledger supplies the instrument-specific scope and gaps; this file supplies the drafting rules.

## What A Provisional Draft Is

A provisional draft is an unpublished evidence and curriculum inventory in the shape of a trainer run sheet. It should reveal:

* the supported normal-use sequence and Level 1 teaching scope;
* what the trainer demonstrates, asks, and observes;
* where the printed Quick Guide participates in the session;
* the shared safety and administrative closeout burden;
* every missing decision, unsupported criterion, and operational verification gate;
* whether the proposed session looks runnable in 50 participant-facing minutes.

It is intentionally allowed to be incomplete. It is not allowed to look complete by filling gaps with plausible prose.

## Authority And Source Order

Use sources in this order:

1. The canonical public instrument page owns the SOP, detailed workflow, limits, safety language, stop conditions, save/export path, and end state.
2. Approved Level 1 decisions in [`README.md`](README.md#workflow-scope-handoff--2026-08-07) and [`../_staff/quick-guides/instrument-specifications.md`](../_staff/quick-guides/instrument-specifications.md) define the intended introductory curriculum. A line labeled proposed remains proposed.
3. Shared trainer references own room safety, access, trainer readiness, and closeout.
4. The Quick Guide and staff guide are sibling derivatives. A Quick Guide can show which controls are intended for Level 1, but it is never technical authority for the trainer guide.
5. Manufacturer manuals are ultimate technical references, but a detail taken only from a manual must first be reconciled into the canonical page before it becomes Breakerspace procedure.

Do not use memory, a similar instrument, an old handout, or another draft to fill a canonical gap. Record the gap instead.

## Artifact Convention

Create provisional instrument drafts as:

```text
_staff-training/<instrument-slug>-trainer-prototype.md
```

Do not overwrite `_staff-training/<instrument-slug>.md` during the provisional pass. Every prototype uses at least:

```yaml
---
title: [Instrument] Trainer Guide — Provisional Draft
description: Unpublished trainer-run-sheet composition draft for review.
published: false
guide_status: Provisional composition draft — incomplete
guide_revision: 2026-08-10
interactive_checklist: true
instrument_name: [Canonical H1 identity]
moira_group: [Verified group from access-and-logistics.md]
---
```

Start the body with this warning:

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

For the first compact FTIR experiment, use prototype-only shared includes:

```text
_includes/trainer/checklist-safety-compact-prototype.md
_includes/trainer/checklist-closeout-compact-prototype.md
```

This exposes the complete rendered workload without changing the shared includes used by live guides. Later staff review may approve replacing the production includes centrally; do not do that during provisional composition.

## Review-Gap Format

Put unresolved information before the runnable checklist, not inside it as a fake trainer action. Use this exact pattern:

> **REVIEW GAP — [short category]**
>
> **Decision or evidence required:** [specific missing fact, choice, capture, or operational test].
>
> **Sources checked:** [canonical section and relevant work order].
>
> **Release effect:** [which checklist step, outcome, timing assumption, or delivery decision cannot yet be approved].

Examples of valid categories are `Level 1 boundary`, `starting state`, `quality decision`, `save/export`, `workstation access`, and `shutdown state`.

Do not use bare `TODO`, bracketed filler, guessed acceptance criteria, invented control labels, or instructions such as “trainer explains the correct setting” when the correct setting is unknown. A review gap must tell a lab assistant exactly what needs to be decided or verified.

## Compact Run-Sheet Shape

Use one continuous checklist in session order:

1. **Before the session** — only genuine equipment, artifact, supply, and training-material gates.
2. **Welcome and room orientation** — one instrument-guide welcome item plus the shared safety include.
3. **Scope, startup, and readiness** — short capability boundary, expected starting state, trainer login where required, and the first observable instrument-ready decision.
4. **Participant workflow** — the complete SOP spine and approved Level 1 operations, grouped where one omission risk is being checked.
5. **Participant-led shutdown** — saving, cleanup, final state, and account/logoff behavior.
6. **Closeout** — one instrument reset item plus the shared administrative include.

Use broad timing bands as wayfinding hypotheses. Do not protect a minute-by-minute agenda that has not survived a practice run.

Place no more than about 100 words of instrument-specific trainer notes after the checklist. Scope reasoning, document hierarchy, general trainer behavior, maintenance history, and curriculum essays belong in central references rather than the live run sheet.

## Editorial Targets, Not Content Limits

The FTIR prototype begins with these forcing functions:

* roughly 15–22 instrument-specific checks;
* roughly 25–35 checks in the complete rendered run sheet after shared includes;
* roughly 800–1,000 words in the runnable checklist, including shared includes;
* roughly 950–1,200 words in the complete rendered trainer page;
* only a small set of explicit participant-performance observations at consequential moments.

These are editorial pressure tests, not authority to omit a safety, operation, saving, shutdown, or access requirement. If an instrument cannot fit honestly, keep the longer provisional draft, report the exception, and let that instrument teach the next structural lesson. Do not retrofit earlier prototypes merely to make their counts match.

Judge a checkbox by operational density. It belongs only when omission would materially affect safety, correct operation, the approved Level 1 outcome, data retention, cleanup/end state, or post-training access. Planning policy, common-sense room setup, duplicated explanation, and information already maintained elsewhere do not each need live checkboxes.

## Technical And Editorial Stop Rules

Never write around any of these:

* the beginner workflow or capability-preview boundary is undecided;
* the canonical SOP and detailed instructions conflict;
* the starting state, save/export path, or final state is unknown;
* a good/bad result or ready/not-ready criterion is not defined;
* workstation access during first training is unclear;
* a safety, compatibility, settings, or recovery instruction would need to be inferred;
* the draft would describe a provisional Quick Guide as published or installed.

In normal release work these conditions stop drafting. In this authorized provisional pass they stop only the affected prose: insert a review gap, draft the supported parts, and move on.

## Iteration And Commit Discipline

Work one prototype at a time and use one commit per instrument. FTIR may share its first commit with the two compact prototype includes because those are part of measuring the FTIR run sheet.

After each instrument:

1. update its row in [`provisional-draft-work-orders.md`](provisional-draft-work-orders.md);
2. report instrument-specific, shared, and total checklist counts;
3. report source and rendered word counts when rendering is available;
4. list every review gap without claiming it was resolved;
5. record any structural exception the next instrument exposed;
6. continue to another authorized work order rather than perfecting a blocked draft.

Do not propagate a new structural choice backward across completed prototypes during the same pass. Record the lesson first. Generalize only after review identifies a genuinely reusable pattern.

## Validation For A Provisional Draft

A provisional draft is complete for review when:

* `published: false` and the visible warning are present;
* every runnable technical instruction is supported by the canonical page;
* every SOP startup, operation, saving, cleanup, shutdown, and stop requirement is represented or explicitly blocked by a review gap;
* the Level 1 scope agrees with approved handoff decisions and proposed boundaries remain labeled proposed;
* the Quick Guide is referenced without treating an unpublished prototype as installed;
* shared safety and closeout appear inline through includes;
* no credentials, attendee information, private identifiers, or local account details are present;
* `bundle exec jekyll build` and `script/validate-html` pass;
* the work-order ledger records counts, gaps, and validation status.

Passing these checks does not approve training delivery. Promotion requires instrument-specific operational review, reconciliation with the canonical page and approved Quick Guide, a timed practice session, and deliberate replacement or migration of any live guide and shared include.
