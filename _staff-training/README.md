# Breakerspace Staff Training Guides

This directory contains staff-facing guides for delivering consistent instrument training. Jekyll does not publish this underscore-prefixed directory, and it is not linked from the public website navigation.

The repository may still be publicly readable. Do not store credentials, physical-security details, private student information, access codes, or other sensitive information here.

Cross-site launch and maintenance work is tracked in [`../_staff/site-todo.md`](../_staff/site-todo.md). Keep this directory focused on training delivery and trainer resources.

## Current Status

Last substantive work: 2026-08-03.

The public training pathway is implemented in [`../training.md`](../training.md). The directory now has two layers:

* **Shared layer** — facts and processes every guide depends on: `access-and-logistics.md`, `trainer-readiness.md`, `lab-safety-orientation.md`. These were extracted so a new guide inherits them instead of restating them. Treat them as settled unless the underlying operation changes.
* **Per-instrument guides** — FTIR is retrofitted to the current model. Optical is a pilot that predates it. Two of eleven instruments.

**FTIR is the reference implementation.** Its Quick Guide and training guide were rebuilt together on 2026-08-03 under the model below, then corrected through four review rounds. Read [`ftir.md`](ftir.md) and [`../_includes/quick-guides/ftir.html`](../_includes/quick-guides/ftir.html) as a matched pair before starting another instrument; the shape is easier to copy than to re-derive.

**FTIR is not finished — it is blocked on evidence, and that evidence will require more writing.** Do not treat its content as frozen. Three things must be established operationally, then written back into the canonical page and, where relevant, the derivatives:

* **What a good background preview looks like.** The page has no acceptance criterion, so the Quick Guide currently says only to confirm the crystal is bare and unclamped.
* **Atmospheric and contamination band positions.** Described qualitatively on the page with no wavenumbers, so the Quick Guide cannot name them. A draft did, from nothing — see the lessons below.
* **The background-redo cycle as canonical text.** The Quick Guide spells it out; the page should own it.

Also required: one identified paper specimen with a sample ID and location, measured band positions from reviewed reference spectra to replace the placeholder contrast in the training guide, operational-owner approval, a Letter duplex print proof that may force edits, a laminated copy installed at the instrument, and a practice training.

All three page gaps are tracked in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).

**Optical is next.** It has a Quick Guide and a staff guide, both predating the content contract, so it needs the same retrofit FTIR just had.

The operating model the template reflects:

* Standard sessions are 60 minutes with a maximum of three participants.
* Every session opens with the [lab safety orientation](lab-safety-orientation.md), for all participants, regardless of prior training.
* Participants may divide the Level 1 workflow, provided the trainer makes the full sequence visible and involves everyone meaningfully.
* Participants use the printed Quick Guide during the hands-on workflow, particularly for participant-led cleanup and shutdown.
* The staff guide contains an explicit coverage map showing where every canonical startup and shutdown step, the routine operation, saving, and stop conditions are taught or verified.
* The trainer adds attendees directly to the appropriate MIT Moira group after the session.
* The trainer sends each attendee a Breakerspace Slack invitation as part of training closeout.
* The lab manager processes physical tap access separately after the one-time Qualtrics training record is complete.
* Dropbox access is trainee-managed: the trainee creates an MIT Dropbox for Business account and requests membership in the DMSE Breakerspace Team. Trainers should help first-time users with the process when needed rather than attempting to invite an account that may not exist.
* There is currently no separate skills demonstration, training expiration, or recurring retraining requirement.

The current Qualtrics survey remains coordinated with the active production website until the redesigned site launches. Make survey changes from `qualtrics-manual-edit-guide.md`. Its release status is tracked in `qualtrics-launch-review.md`; the complete July 2026 extraction and rationale are in `qualtrics-survey-audit.md`. That project is separate from training delivery and shares this directory only by history.

## Picking This Work Up Again

### What A Staff Training Guide Is

An **outline and checklist for the undergraduate lab staff member delivering a training**, so that different trainers deliver a consistent session. It assumes a trainer is present to instruct, which is why it can be terse where a manual could not be.

Every guide has the same three-part shape:

1. **Shared opening** — welcome and goals, then the [lab safety orientation](lab-safety-orientation.md), identical in every session.
2. **The instrument's core operations**, walked through in SOP order.
3. **Shared administrative closeout** — the sequence in [`access-and-logistics.md`](access-and-logistics.md), identical in every session.

Only the middle changes between instruments. The opening and closeout are shared precisely so a trainer cannot accidentally omit them and so they only need maintaining in one place.

**The trainer explicitly links each step to its SOP bullet**, out loud, during the session. Every workflow step in a guide cites the section of the public instrument page it comes from. This is the mechanism by which a trainee learns to navigate the page instead of depending on the trainer, which is what makes them able to work independently afterward.

### The Real Decision: Which Operations To Teach

The hard part of writing a guide is **not** assembling the document — the opening, closeout, and SOP links are mechanical. It is deciding **which operations belong in a beginner training** out of everything the instrument can do.

Every instrument can do more than a one-hour session can cover. Each guide names the small set of core operations a new user must perform independently, and names what is deliberately excluded and where that lives instead. The exclusions are what keep a session finishable and what stop two trainers from teaching two different things.

Expect this to need instrument knowledge and a judgment call per instrument. It is the part to work through with the lab manager rather than infer from the page.

### Source Of Truth, And Where Quick Guides Fit

The canonical public instrument page is the operating authority: its SOP and detailed operating instructions own the lab-approved workflow. The Quick Guide and staff training guide are **sibling derivatives of that page**, not source and derivative of each other.

* The **Quick Guide** supplies the routine mechanical workflow that a recently trained user can hold at the instrument. It is a printed, laminated artifact; the web version exists for printing, replacement, accessibility, personal copies, and fallback.
* The **staff guide** supplies trainer preparation, full SOP coverage, the Level 1 sample and question, coaching prompts, participant roles, success criteria, and administrative closeout.

The staff guide therefore does contain a **coverage map and Level 1 participant workflow**, but it must not become an alternate technical SOP. Link each mapped item to the canonical page and use short labels rather than rewriting the technical instruction. Every startup and shutdown SOP item must appear individually in the map; routine operation can map to the Level 1 workflow as a group where that remains unambiguous.

**Neither artifact gates the other.** Draft and test them together once the canonical SOP and intended Level 1 workflow are stable. Routine delivery is ready only when the canonical page, Quick Guide, staff guide, and exercise agree; the Quick Guide has been print-tested and installed at the instrument; and the training has been practiced by a qualified trainer.

Two earlier claims in this README were wrong and are superseded. It first said a guide could not be written for an instrument without a Quick Guide, which was inferred from the two pilot guides happening to be the two instruments with Quick Guides. It then said the training guide must come first. Both imposed an authoring sequence that the sibling model removes.

Quick Guides currently exist for **optical, FTIR, and XRD** (`/quick-guides/`). Their maturity differs, and conflating them wastes effort:

| Instrument | Quick Guide | Staff guide |
| --- | --- | --- |
| **FTIR** | Rebuilt to the contract 2026-08-03. Needs empirical inputs, approval, and a print proof — not another audit | Retrofitted 2026-08-03, including the SOP coverage map |
| **Optical** | Predates the contract. Needs retrofit | Pilot predating the contract. Needs the coverage map, operations table, and a named default sample |
| **XRD** | Predates the contract, and is dense. Needs retrofit | **Does not exist.** Needs writing |

### Suggested next steps

Each instrument's Quick Guide and staff guide are developed together, starting from the canonical SOP.

1. **Print-proof the FTIR Quick Guide.** Side 2 is roughly 582 words and has never been printed. If the two-page budget does not hold, the fix changes how optical and XRD get written, so this comes first. It needs a physical printer, not a browser preview.
2. **Retrofit the optical pair.** Follow the FTIR pair as the model: numbered Quick Guide steps, an SOP coverage map with every startup and shutdown bullet as its own row, an operations table, and a named default sample. Optical's SOP is shorter than FTIR's, so this should be faster. **If the print proof is not yet available**, optical may proceed in parallel — but treat its page budget as unverified and expect to revise both guides once the proof lands.
3. **XRD pair.** The Quick Guide needs retrofit; the training guide needs writing from scratch. `../handouts/xrd/` holds two draft tutorials and a student report template worth harvesting. Two open questions below affect its closeout.
4. **Level 1 samples.** FTIR needs one identified paper specimen. Optical needs its own default named.
5. **SEM.** Highest traffic, one combined LibCal template, one shared Moira group — but decide first whether it is one guide or two. The two Phenoms have deliberately different sample-height rules, which argues for two.
6. **Rewrite the LibCal templates.** Well specified in `libcal-event-templates.md`; the work is manual form entry because the API cannot edit templates.

### What The FTIR Retrofit Taught

Four review rounds on the FTIR pair produced corrections worth not repeating. Every one of these shipped in a draft.

* **Never write a technical specific the canonical page does not contain.** Two fabrications got through: wavenumbers for atmospheric bands (approximately 3700 and 2350 cm<sup>-1</sup>) and a nitrile-versus-C-H contrast between acrylic and paper. Both were plausible and neither came from the page. **Grep the page for any number, band, control name, or causal claim before writing it.** Where the page is silent, omit it or write "ask staff," and log a page gap in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).
* **A Quick Guide wants concrete detail, and that is the trap.** Vague guidance is useless at an instrument, so filling a gap in the page feels like helping. It is not — it creates an unsourced claim in a document whose only job is to restate the page.
* **Verify software sequences against the recorded media, not intuition.** The draft had OMNIC's preview backwards: `Collect Sample` starts the preview, the user evaluates, then `start collection` commits. Spectrum naming happens after the scan, not before. Both were visible in the bundled instructional videos.
* **Recovery procedures must be complete cycles.** "Recollect the background" is not actionable with the sample still loaded. Any recovery step should say what to unload, what to clean, and where to rejoin the numbered sequence.
* **Do not let a fix become a new absolute.** Correcting an over-prescribed background redo produced a false binary — weak signal means contact, anything else means the background — which then needed a third branch restored. The canonical failure table had three rows all along.
* **Every diagnostic branch needs a terminal condition.** A guide that only offers fixes invites a user to keep trying fixes. Each branch should end in stopping and asking staff.
* **Correctness costs length.** FTIR Side 2 went 378 → 582 words across the rounds. Budget for that: a first draft that already fills two pages has no room to become correct.

### Open questions that affect writing

* **XRD's companion workstation.** The instrument touchscreen has no sign-in, but export, HighScore, and XRDMP run on a separate workstation whose sign-in is undetermined. An XRD guide's closeout has to say something about it. Tracked in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).
* **XRD stored programs are uncurated.** Routine use means selecting a stored program, so until the list is pared down with meaningful filenames, no document can tell a user which to pick. Also in `staff-todo.md`.
* **Terminology is inconsistent.** LibCal says "laboratory assistant," the website says "student staff," these guides say "trainer."

### Decisions already made, with reasons

Do not relitigate these without new information; the reasoning is in `access-and-logistics.md`, `trainer-readiness.md`, and the commit history.

* Moira group names follow `dmse-brkrspc-` plus the page slug, with no abbreviations. Near-consistency is worse than obvious difference, because it invites a guess that is wrong just often enough to cause a silent access failure.
* `instruments/instron.md` keeps its brand slug. Renaming `-utm` to `-instron` gives alignment plus the term students actually use, and avoids putting an ambiguous abbreviation in a public URL.
* The safety orientation runs every session for everyone, scaled rather than skipped. A trainer cannot tell who is new from a LibCal registration list, and an optional first item gets dropped under time pressure.
* The shower and eyewash get fifteen seconds, not a featured slot. They exist because MIT adds them to any renovated lab, not because this lab's materials require them; the material restriction is the actual safety control.
* Quick Guides serve recently trained and trained users at the instrument; they do not replace training or authorize untrained use.
* Quick Guides and staff guides are sibling derivatives of the canonical instrument page and may be written in parallel. Neither gates the other.
* Every Quick Guide and staff-guide coverage map represents the complete canonical startup and shutdown sequence.
* Quick Guides cover one default routine workflow; Level 1 exercises use that mechanical spine while adding the sample, question, expected result, and teaching prompts.
* Immediate data-quality checks belong in Quick Guides; extended interpretation and analysis do not.
* Quick Guides exclude parameter tables when the workflow is selecting a reviewed stored method.
* Participants use the printed Quick Guide during training, especially for participant-led cleanup and shutdown.
* Reviewed laminated Quick Guides are kept at the instruments. The web version supports printing, accessibility, personal copies, and fallback rather than routine browser toggling.

## Files In This Directory

* `access-and-logistics.md` is the shared reference for Moira groups by instrument, the trainer closeout sequence, scheduling, and guide owners. Guides link to it instead of restating these facts.
* `lab-safety-orientation.md` is the five-minute in-person orientation to the physical lab, run at the start of every session.
* `trainer-readiness.md` defines who may deliver a training, how a staff member becomes qualified on an instrument, and what to do when a session does not go as planned.
* `libcal-event-templates.md` is an archival record of the ten LibCal event templates as of 2026-07-31, kept for historical comparison. The templates are outdated and contain errors; do not use them as a content source.
* `instrument-training-template.md` is the starting point for each instrument-specific staff guide.
* `ftir.md` is the Nicolet iS5 FTIR ATR curriculum, **retrofitted 2026-08-03 and the reference implementation** of the current model. Copy its structure for a new instrument.
* `optical.md` is the pilot DSX-1000 optical-microscope curriculum. Predates the content contract and needs the same retrofit.
* `qualtrics-launch-review.md` tracks updates that should be coordinated with the launch of the redesigned website.
* `qualtrics-manual-edit-guide.md` is the canonical page-by-page copy deck and Qualtrics editing checklist.
* `qualtrics-survey-audit.md` inventories the current QSF and records the rationale behind the revision.
* New instrument guides should use the public instrument slug, such as `ftir.md`, `optical.md`, or `phenom-xl.md`.

## Training Guide Goals

Each guide should help different trainers deliver the same essential experience while leaving room to respond to the participants and their questions.

A complete guide should define:

* The learning goals for a standard one-hour session.
* The Level 1 exercise used during training.
* The sample-library item, sample kit, or approved training sample used for that exercise.
* Instrument setup, supplies, and trainer preparation.
* A suggested agenda for a maximum of three participants.
* Safe ways for participants to divide the workflow.
* The public operating-page sections participants should learn to use.
* An auditable map of every canonical startup and shutdown step, the routine operation, saving, and stop conditions.
* How participants will use the physical Quick Guide during the hands-on workflow.
* Shutdown, cleanup, data-saving, and post-training access tasks.
* The exact MIT Moira group the trainer must update after the session, taken from [`access-and-logistics.md`](access-and-logistics.md).

Group names follow one rule: `dmse-brkrspc-` plus the public page slug. Every instrument has a group and the trainer adds attendees to it after every session. Two irregularities: both SEMs share `dmse-brkrspc-sem`, and the XRD, hardness tester, and ion mill are not domain-managed, so their groups are for targeted communication only and grant no access.

## Coordinating Changes

When a training workflow changes, review every related surface:

1. Public instrument overview and compatibility guidance.
2. Trained-user quick reference or SOP.
3. Detailed operating instructions.
4. Level 1 exercise.
5. Staff training guide in this directory.
6. Sample-library record, cabinet location, and replenishment needs.
7. LibCal training description, duration, and enrollment limit.
8. Moira access instructions.
9. Qualtrics onboarding language when the change affects all new users.

Changes should be written once in the most authoritative location and linked or summarized elsewhere. Avoid maintaining competing versions of the same operating steps.

## Planned Guide Rollout

Develop the Quick Guide and staff guide together once the corresponding public instrument workflow and Level 1 exercise are stable enough to train consistently. Before routine delivery, pair them with a real sample-library item or prepared kit, an expected result, a cabinet location, a replenishment plan, and a reviewed laminated Quick Guide at the instrument. Track cross-instrument rollout in [`../_staff/site-todo.md`](../_staff/site-todo.md), not by adding placeholder guide files for every instrument at once.
