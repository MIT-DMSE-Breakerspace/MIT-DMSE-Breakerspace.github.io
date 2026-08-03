# Breakerspace Staff Training Guides

This directory contains staff-facing guides for delivering consistent instrument training. Jekyll does not publish this underscore-prefixed directory, and it is not linked from the public website navigation.

The repository may still be publicly readable. Do not store credentials, physical-security details, private student information, access codes, or other sensitive information here.

Cross-site launch and maintenance work is tracked in [`../_staff/site-todo.md`](../_staff/site-todo.md). Keep this directory focused on training delivery and trainer resources.

## Current Status

Last substantive work: 2026-07-31.

The public training pathway is implemented in [`../training.md`](../training.md). The directory now has two layers:

* **Shared layer** — facts and processes every guide depends on: `access-and-logistics.md`, `trainer-readiness.md`, `lab-safety-orientation.md`. These were extracted so a new guide inherits them instead of restating them. Treat them as settled unless the underlying operation changes.
* **Per-instrument guides** — pilots for the optical microscope and FTIR. Two of eleven instruments.

Both pilots have their Moira group, LibCal template, and guide owner recorded. **Each is blocked on two things only: an approved Level 1 training sample with a cabinet location, and operational-owner review.** Neither is a writing task.

The operating model the template reflects:

* Standard sessions are 60 minutes with a maximum of three participants.
* Every session opens with the [lab safety orientation](lab-safety-orientation.md), for all participants, regardless of prior training.
* Participants may divide the Level 1 workflow, provided the trainer makes the full sequence visible and involves everyone meaningfully.
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

The instrument page's **SOP and detailed operating instructions are canonical.** Every other document validates against them: staff guides, Quick Guides, and LibCal descriptions all point at the page rather than restating it.

**Training guide first, then Quick Guide.** Once a training guide has settled which operations are taught, that same scope becomes the Quick Guide's scope — an illustrated, annotated walkthrough of the operations the trainer just covered, plus the core startup and shutdown reminders. Built in that order, the Quick Guide reinforces and supplements what the trainer said, and the two documents cannot disagree about what a routine session involves.

A Quick Guide is therefore **not a prerequisite** for a training guide. An earlier version of this README claimed a guide could not be written without one; that was an inference from the fact that the two pilot guides happened to be the two instruments with Quick Guides, and it was wrong. A guide can cite the page's `{#sop}` and `{#details}` sections directly.

Quick Guides currently exist for optical, FTIR, and XRD. XRD's was written before its training guide, which is the reverse of the intended order — treat its scope as provisional until the XRD training guide settles which operations are taught.

### Suggested next steps

Training guides come first, and each one starts by scoping its operations with the lab manager.

1. **Add the operations table and SOP-step citations to the two pilots.** They predate both requirements. Doing this first tests the pattern on instruments whose workflows are already understood, and it is where the operation-scoping conversation is cheapest to have.
2. **Draft the XRD training guide.** Its operating page scores 5 in the readiness table, and `../handouts/xrd/` holds two draft tutorials plus a student report template worth harvesting. Two open questions below affect its closeout.
3. **SEM after that.** Highest traffic, one combined LibCal template, one shared Moira group — but decide first whether it is one guide or two. The two Phenoms have deliberately different sample-height rules, which argues for two.
4. **Select Level 1 samples for the pilots.** `BS-000004` (acrylic yarn, `available`, CAB-01/BIN-03) already carries both Nicolet iS5 and DSX-1000 assets and FTIR-specific prep notes. FTIR's exercise compares two solids, so it needs a second material named.
5. **Then revisit the Quick Guides**, so each one matches the operation scope its training guide settled on. XRD's exists already and should be re-checked against its training guide rather than treated as fixed.
6. **Rewrite the LibCal templates.** Well specified in `libcal-event-templates.md`; the work is manual form entry because the API cannot edit templates.

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
* Quick Guides exclude interpretation and analysis, and exclude parameter tables when the workflow is selecting a stored method.

## Files In This Directory

* `access-and-logistics.md` is the shared reference for Moira groups by instrument, the trainer closeout sequence, scheduling, and guide owners. Guides link to it instead of restating these facts.
* `lab-safety-orientation.md` is the five-minute in-person orientation to the physical lab, run at the start of every session.
* `trainer-readiness.md` defines who may deliver a training, how a staff member becomes qualified on an instrument, and what to do when a session does not go as planned.
* `libcal-event-templates.md` is an archival record of the ten LibCal event templates as of 2026-07-31, kept for historical comparison. The templates are outdated and contain errors; do not use them as a content source.
* `instrument-training-template.md` is the starting point for each instrument-specific staff guide.
* `optical.md` is the pilot DSX-1000 optical-microscope curriculum and completion checklist.
* `ftir.md` is the pilot Nicolet iS5 FTIR ATR curriculum and completion checklist.
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

Create a staff guide after the corresponding public instrument workflow and Level 1 exercise are stable enough to train consistently. Each guide should then be paired with a real sample-library item or prepared kit, an expected result, a cabinet location, and a replenishment plan. Track cross-instrument rollout in [`../_staff/site-todo.md`](../_staff/site-todo.md), not by adding placeholder guide files for every instrument at once.
