---
published: false
---

# Breakerspace Staff Training Guides

This directory contains trainer-facing guides for helping Breakerspace Lab Assistants and other qualified trainers deliver consistent instrument training. Selected delivery documents are rendered in the unlisted Trainer Portal; planning files and templates remain unpublished.

The repository may still be publicly readable. Do not store credentials, physical-security details, private student information, access codes, or other sensitive information here.

Cross-site launch and maintenance work is tracked in [`../_staff/site-todo.md`](../_staff/site-todo.md). Keep this directory focused on training delivery and trainer resources.

LibCal and Qualtrics administration, audits, and editing runbooks belong in [`../_admin/`](../_admin/), not alongside trainer delivery materials.

### Trainer Portal Deployment

Jekyll publishes selected files in this directory as the unlisted Trainer Portal at `/trainer/`. The portal index is `../trainer/index.md`; `_layouts/trainer-shell.html` provides a standalone page shell without the public site header, navigation, or footer; and `_layouts/trainer.html`, `assets/css/style.scss`, and `assets/js/trainer-checklist.js` provide the guide presentation and session checklist behavior. `_config.yml` marks the collection `noindex` and supplies the trainer layout by default.

Add normal front matter to a delivery document to publish it. Use `published: false` for planning files, templates, and this README. Instrument guides with Markdown task lists may set `interactive_checklist: true`; checkmarks then persist only in the current browser tab and are never a qualification record. Use Jekyll `{% raw %}{% link ... %}{% endraw %}` tags for links inside rendered collection documents so paths remain correct under `/trainer/`.

The portal is **unlisted, not private**. Never add credentials, attendee records, private roster information, account details, or physical-security information. Official trainer qualification stays in the approved private staff system. `_admin/` is explicitly excluded from the Jekyll build and must remain outside the portal.

## Current Status

Last substantive work: 2026-08-05.

The public training pathway is implemented in [`../training.md`](../training.md). The directory now has two layers:

* **Shared layer** — facts and processes every guide depends on: `access-and-logistics.md`, `trainer-readiness.md`, `lab-safety-orientation.md`. These were extracted so a new guide inherits them instead of restating them. Treat them as settled unless the underlying operation changes.
* **Per-instrument guides** — FTIR is retrofitted to the current model. Optical is a pilot that predates it. Two of eleven instruments.

**FTIR is the reference implementation.** Its Quick Guide and training guide were rebuilt together on 2026-08-03 under the model below, then corrected through four review rounds. Read [`ftir.md`](ftir.md) and [`../_includes/quick-guides/ftir.html`](../_includes/quick-guides/ftir.html) as a matched pair before starting another instrument; the shape is easier to copy than to re-derive.

**FTIR is not finished — it is blocked on evidence, and that evidence will require more writing.** Do not treat its content as frozen. Three things must be established operationally, then written back into the canonical page and, where relevant, the derivatives:

* **What a good background preview looks like.** The page has no acceptance criterion, so the Quick Guide currently says only to confirm the crystal is bare and unclamped.
* **Atmospheric and contamination band positions.** Described qualitatively on the page with no wavenumbers, so the Quick Guide cannot name them. A draft did, from nothing — see the lessons below.
* **The background-redo cycle as canonical text.** The Quick Guide spells it out; the page should own it.

Also required: operational-owner approval, a Letter duplex print proof that may force edits, a laminated copy installed at the instrument, and a practice training.

Per the [sample-agnostic decision](#sample-agnostic-guides), FTIR is no longer blocked on identifying a paper specimen or on measured band positions from reviewed reference spectra. The guide states the contrast the exercise needs and requires the trainer to know a bad result on whatever they chose. Approved samples remain worth adding later and are not a release gate now.

All three page gaps are tracked in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).

### Active Late-August Work Order

The active priority is to complete Quick Guides and staff training guides for student-led training in the last week of August 2026.

* **First wave — co-equal immediate priorities:** SEM/EDS, XRD, FTIR, and Instron.
* **Second wave — after the first four, in order:** optical microscopy, Raman, hardness tester, particle size analyzer, UV-Vis, then ion mill.

Use the wave order to allocate limited time, but move to another guide when an instrument is blocked by an operational decision. A blocked instrument should not stop useful progress on the rest of its wave. Raman follows optical because planned use in fall lab subjects raises it above its historically lower general-interest priority.

FTIR remains the structural reference implementation, not the first item in a serial queue. Favor safe, operationally accurate guide pairs and a dependable trainer handoff over cosmetic polish, additional media, or broad interpretation content.

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

### Sample-Agnostic Guides

**Decided 2026-08-05. Neither the Quick Guide nor the staff guide names a specific material, sample-library identifier, or cabinet location.** Both describe the workflow and the properties a suitable sample must have; the trainer chooses the material for each session.

The reasoning:

* **Trainers need to tailor the material to the audience.** A subject exercise, a specific research project, and a walk-in general session want different samples through the same workflow. A named default in the guide works against that.
* **Sample-library readiness must not gate guide development or rollout.** The approved-sample work — identifiers, cabinet locations, reference spectra, replenishment plans — is real and worth doing, but it moves on its own schedule. Blocking a curriculum on it stalls training materials that are otherwise ready to hand off.
* **The workflow is the durable content.** Which material to use is a per-session decision; how to run the instrument safely and correctly is not. Only the second belongs in a maintained document.

What a guide states instead of a material:

* **Selection criteria** — the properties a sample must have to run safely and produce a usable result on this instrument, and what disqualifies one.
* **The comparison or result the exercise needs** — for example, two materials whose results are distinguishable to a beginner — as a requirement the trainer satisfies, not a named pair.
* **The trainer's own obligation:** the trainer must know what a *bad* result looks like on the material they chose. If they have not run it, they run it before the session. This is the judgment a printed guide cannot supply and it does not depend on which material is used.
* **Quality cues in terms of the workflow** — weak signal, poor contact, contamination — rather than in terms of one material's expected spectrum or image.

This is a scoping decision for the current round, not a rejection of approved samples. If a later round specifies sample-library items, add them **in Guide Control and the exercise section only**, keep the workflow text sample-agnostic, and do not reintroduce material names into a Quick Guide.

Sample-library work that a guide no longer waits on is tracked in `../_staff/site-todo.md`, Tier 2.

### Late-August Guide-Pair Inventory

Use these visible states for handoff planning: **missing**, **drafting**, **needs operational check**, **needs practice run**, and **ready for late-August handoff**. This inventory records repository coverage, not approval to deliver a training.

| Wave | Instrument system | Quick Guide | Staff guide | Immediate readiness issue |
| --- | --- | --- | --- | --- |
| First | **SEM/EDS** | Missing | Missing | Decide the guide split while preserving the two Phenoms' different sample-height rules and the XL-only EDS workflow. |
| First | **XRD** | Needs operational check and retrofit | Missing | Resolve the companion-workstation and stored-program questions; use the existing handouts as source material. |
| First | **FTIR** | Needs operational check and print proof | Needs operational check, then practice run | Supply the empirical background evidence and test the printed guide. |
| First | **Instron** | Missing | Missing | Build from the detailed operating page and resolve the remaining machine-specific method, export, and end-condition checks. |
| Second | **Optical microscopy** | Needs retrofit | Needs retrofit | Add the coverage map and operations table, and state the Level 1 sample-selection criteria. |
| Second | **Raman** | Missing | Missing | Verify the routine LabSpec 6 controls, laser-safety procedure, starting settings, and approved Level 1 sample before planned fall subject use. |
| Second | **Hardness tester** | Missing | Missing | Confirm the fitted hardware, offered scales, limits, and training samples before presenting a routine workflow as approved. |
| Second | **Particle size analyzer** | Missing | Missing | Confirm approved powders, database and export conventions, and workstation handoff. |
| Second | **UV-Vis** | Missing | Missing | Scope the beginner workflow and verify the routine absorbance method; keep advanced fluorescence support separate unless approved. |
| Second | **Ion mill** | Missing | Missing | Define the beginner training boundary and stop conditions for the existing operating workflow. |

### Late-August Execution Plan

Develop each instrument's Quick Guide and staff guide together from the canonical SOP.

1. Work across the four first-wave systems as co-equal priorities, starting with the highest-risk unblocked gaps: safety boundaries, stop conditions, exact sequence, cleanup, data handling, and access closeout.
2. Reconcile each guide pair with the canonical operating page and current LibCal description. Record unresolved operational questions explicitly and move to another first-wave system rather than writing around them.
3. Walk through each critical workflow at the instrument and run a practice training when feasible. A guide that cannot be validated in time must state the limitation or exclude that workflow.
4. Assemble the student-trainer handoff as the guides mature: what can be taught independently, where the guide and materials are located, what remains out of scope, and how to escalate a problem.
5. After the four first-wave pairs are usable, proceed through the second wave in the stated order.

The FTIR guide was relaid out on 2026-08-05 as a **single continuous two-column flow** rather than two fixed-height sheets, and now measures 2 Letter pages with no clipped content (1,044 words total; verified by headless-Chrome PDF render at 300 dpi). A physical duplex print proof is still worth doing for legibility and long-edge flip, but the page-count and clipping questions are resolved.

Two layout lessons from that rebuild, both of which had shipped:

* **A fixed-height print sheet with `overflow: hidden` clips silently.** The old Side 2 was authored past one page, so the printed copy lost step 9's steps, the closing checklist, and the help box — with no warning anywhere in the HTML or the build. If a layout constrains height, something must verify that content fits.
* **A multicol container inside a flex parent balances across the whole document, not per page.** That put steps 1–3 in the left column and step 6 at the top of the right. Block layout lets multicol fragment per page, which is what produces correct reading order. Screenshot-scrolling a print stylesheet does not reveal this; only a real paginated render does.


### What The FTIR Retrofit Taught

Four review rounds on the FTIR pair produced corrections worth not repeating. Every one of these shipped in a draft.

* **Never write a technical specific the canonical page does not contain.** Two fabrications got through: wavenumbers for atmospheric bands (approximately 3700 and 2350 cm<sup>-1</sup>) and a nitrile-versus-C-H contrast between acrylic and paper. Both were plausible and neither came from the page. **Grep the page for any number, band, control name, or causal claim before writing it.** Where the page is silent, omit it or write "ask staff," and log a page gap in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).
* **A Quick Guide wants concrete detail, and that is the trap.** Vague guidance is useless at an instrument, so filling a gap in the page feels like helping. It is not — it creates an unsourced claim in a document whose only job is to restate the page.
* **Verify software sequences against the recorded media, not intuition.** The draft had OMNIC's preview backwards: `Collect Sample` starts the preview, the user evaluates, then `start collection` commits. Spectrum naming happens after the scan, not before. Both were visible in the bundled instructional videos.
* **Recovery procedures must be complete cycles.** "Recollect the background" is not actionable with the sample still loaded. Any recovery step should say what to unload, what to clean, and where to rejoin the numbered sequence.
* **Do not let a fix become a new absolute.** Correcting an over-prescribed background redo produced a false binary — weak signal means contact, anything else means the background — which then needed a third branch restored. The canonical failure table had three rows all along.
* **Every diagnostic branch needs a terminal condition.** A guide that only offers fixes invites a user to keep trying fixes. Each branch should end in stopping and asking staff.
* **Correctness costs length.** FTIR content went 378 → 595 words on the old Side 2 across the rounds, and the guide totals 1,044 words. Budget for that: a first draft that already fills its pages has no room to become correct. Prefer a layout that flows onto another page over one that clips.

### Open questions that affect writing

* **XRD's companion workstation.** The instrument touchscreen has no sign-in, but export, HighScore, and XRDMP run on a separate workstation whose sign-in is undetermined. An XRD guide's closeout has to say something about it. Tracked in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).
* **XRD stored programs are uncurated.** Routine use means selecting a stored program, so until the list is pared down with meaningful filenames, no document can tell a user which to pick. Also in `staff-todo.md`.

### Decisions already made, with reasons

Do not relitigate these without new information; the reasoning is in `access-and-logistics.md`, `trainer-readiness.md`, and the commit history.

* Moira group names follow `dmse-brkrspc-` plus the page slug, with no abbreviations. Near-consistency is worse than obvious difference, because it invites a guess that is wrong just often enough to cause a silent access failure.
* `instruments/instron.md` keeps its brand slug. Renaming `-utm` to `-instron` gives alignment plus the term students actually use, and avoids putting an ambiguous abbreviation in a public URL.
* The safety orientation runs every session for everyone, scaled rather than skipped. A trainer cannot tell who is new from a LibCal registration list, and an optional first item gets dropped under time pressure.
* The shower and eyewash get fifteen seconds, not a featured slot. They exist because MIT adds them to any renovated lab, not because this lab's materials require them; the material restriction is the actual safety control.
* Quick Guides serve recently trained and trained users at the instrument; they do not replace training or authorize untrained use.
* Quick Guides and staff guides are sibling derivatives of the canonical instrument page and may be written in parallel. Neither gates the other.
* **Both artifacts are sample-agnostic. Neither names a specific material, sample-library identifier, or cabinet location.** Decided 2026-08-05; see [sample-agnostic guides](#sample-agnostic-guides) for the reasoning and for what a guide states instead.
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
* `instrument-training-template.md` is the starting point for each instrument-specific staff guide.
* `ftir.md` is the Nicolet iS5 FTIR ATR curriculum, **retrofitted 2026-08-03 and the reference implementation** of the current model. Copy its structure for a new instrument.
* `optical.md` is the pilot DSX-1000 optical-microscope curriculum. Predates the content contract and needs the same retrofit.
* New instrument guides should use the public instrument slug, such as `ftir.md`, `optical.md`, or `phenom-xl.md`.

## Training Guide Goals

Each guide should help different trainers deliver the same essential experience while leaving room to respond to the participants and their questions.

A complete guide should define:

* The learning goals for a standard one-hour session.
* The Level 1 exercise used during training.
* The criteria a training sample must satisfy for that exercise, and what disqualifies one. Do not name a specific material or cabinet location; see [sample-agnostic guides](#sample-agnostic-guides).
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

Develop the Quick Guide and staff guide together once the corresponding public instrument workflow and Level 1 exercise are stable enough to train consistently. Before routine delivery, each pair needs stated sample-selection criteria, a recognizable expected result, and a reviewed laminated Quick Guide at the instrument. **A specific approved sample is not a prerequisite** — see [sample-agnostic guides](#sample-agnostic-guides); the trainer supplies the material and must know what a bad result looks like on it. Track cross-instrument rollout in [`../_staff/site-todo.md`](../_staff/site-todo.md), not by adding placeholder guide files for every instrument at once.
