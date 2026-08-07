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

Last substantive work: 2026-08-07.

The public training pathway is implemented in [`../training.md`](../training.md). The directory now has two layers:

* **Shared layer** — facts and processes every guide depends on: `access-and-logistics.md`, `trainer-readiness.md`, `lab-safety-orientation.md`. These were extracted so a new guide inherits them instead of restating them. Treat them as settled unless the underlying operation changes.
* **Per-instrument guides** — FTIR is retrofitted to the current model. Optical is a pilot that predates it. Two of eleven instruments.

**FTIR is the reference implementation for content and for staff-guide structure.** Its Quick Guide and training guide were rebuilt together on 2026-08-03, corrected through four review rounds, made sample-agnostic on 2026-08-05, and restructured the same day as a single continuous session checklist — see [the session-checklist model](#the-session-checklist-model). Read [`ftir.md`](ftir.md) and [`../_includes/quick-guides/ftir.html`](../_includes/quick-guides/ftir.html) as a matched pair before starting another instrument. **The separate unpublished [`ftir-sop-map-prototype.md`](../quick-guides/ftir-sop-map-prototype.md) is now the locked Quick Guide composition reference for draft production**, subject to the review and proof gates in [Quick Guide layout model](#quick-guide-layout-model).

**The template is intentionally not an automatic mirror of every experiment in a live guide.** Update [`instrument-training-template.md`](instrument-training-template.md) when prompted to, using generalized versions of specific decisions that have been finalized in the guide currently under renovation, for the specific purpose of informing future guide development. Until the FTIR session-checklist shape is confirmed by practice and feedback, read `ftir.md` as the structural reference rather than copying the template's older section layout.

**FTIR is not finished — it is blocked on evidence, and that evidence will require more writing.** Do not treat its content as frozen. Three things must be established operationally, then written back into the canonical page and, where relevant, the derivatives:

* **What a good background preview looks like.** The page has no acceptance criterion, so the Quick Guide currently says only to confirm the crystal is bare and unclamped.
* **Atmospheric and contamination band positions.** Described qualitatively on the page with no wavenumbers, so the Quick Guide cannot name them. A draft did, from nothing — see the lessons below.
* **The background-redo cycle as canonical text.** The Quick Guide spells it out; the page should own it.

Also required: operational-owner approval, a physical Letter duplex print proof, a laminated copy installed at the instrument, and a practice training. Re-run the complete print checks for the compact prototype; the 2026-08-06 paginated verification applied to the preceding composition.

Per the [sample-agnostic decision](#sample-agnostic-guides), FTIR is no longer blocked on identifying a paper specimen or on measured band positions from reviewed reference spectra. The guide states the contrast the exercise needs and requires the trainer to know a bad result on whatever they chose. Approved samples remain worth adding later and are not a release gate now.

All three remaining page gaps are tracked in [`../instruments/staff-todo.md`](../instruments/staff-todo.md). The former Level 1 and OMNIC naming questions were resolved on 2026-08-06: general training now uses two solids, liquids moved to a Level 2 extension, and a software step verified in the lab's recorded media may be used when the canonical page is updated in the same revision.

### Active Late-August Work Order

The active priority is to complete Quick Guides and staff training guides for student-led training in the last week of August 2026.

* **First wave — co-equal immediate priorities:** SEM/EDS, XRD, FTIR, and Instron.
* **Second wave — after the first four, in order:** optical microscopy, Raman, hardness tester, particle size analyzer, UV-Vis, then ion mill.

Use the wave order to allocate limited time, but move to another guide when an instrument is blocked by an operational decision. A blocked instrument should not stop useful progress on the rest of its wave. Raman follows optical because planned use in fall lab subjects raises it above its historically lower general-interest priority.

FTIR remains the structural reference implementation, not the first item in a serial queue. Favor safe, operationally accurate guide pairs and a dependable trainer handoff over cosmetic polish, additional media, or broad interpretation content.

The operating model the template reflects:

* Standard bookings are 60 minutes with 50 participant-facing minutes and a maximum of three participants. Trainers schedule setup time before the attendee window and finish Moira, Slack, documentation, and equipment closeout afterward. Phase timings are hypotheses to test in practice, not promises to preserve when observed sessions run differently.
* Every session opens with the [lab safety orientation](lab-safety-orientation.md), for all participants, regardless of prior training.
* Participants may divide the Level 1 workflow, provided the trainer makes the full sequence visible and involves everyone meaningfully.
* Participants use the printed Quick Guide during the hands-on workflow, particularly for participant-led cleanup and shutdown.
* The staff guide accounts for the complete normal-use path from the expected ready state, including routine operation, saving, shutdown, and stop conditions. Conditional recovery, maintenance, and unusual-startup instructions may remain on the canonical page. As of 2026-08-05 the routine path is represented with checkable items in one session checklist rather than a separate coverage-map table; see [the session-checklist model](#the-session-checklist-model).
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

**The trainer explicitly links each normal-use step to its SOP section**, out loud, during the session. Every workflow step in a guide cites the public instrument page. This teaches trainees to navigate the canonical page instead of depending on the trainer and makes clear where to go when the instrument is not in the expected ready state.

### The Real Decision: Which Operations To Teach

The hard part of writing a guide is **not** assembling the document — the opening, closeout, and SOP links are mechanical. It is deciding **which operations belong in a beginner training** out of everything the instrument can do.

Every instrument can do more than the 50-minute participant window can cover. Each guide names the small set of core operations a new user must perform independently, and names what is deliberately excluded and where that lives instead. The exclusions are what keep a session finishable and what stop two trainers from teaching two different things.

Expect this to need instrument knowledge and a judgment call per instrument. It is the part to work through with the lab manager rather than infer from the page.

### Source Of Truth, And Where Quick Guides Fit

The canonical public instrument page is the operating authority: its SOP and detailed operating instructions own the lab-approved workflow. The Quick Guide and staff training guide are **sibling derivatives of that page**, not source and derivative of each other.

* The **Quick Guide** supplies the routine mechanical workflow that a recently trained user can hold at the instrument. It is a printed, laminated artifact; the web version exists for printing, replacement, accessibility, personal copies, and fallback.
* The **staff guide** supplies trainer preparation, coverage of the complete normal-use path, the Level 1 sample and question, coaching prompts, participant roles, success criteria, and administrative closeout.

The staff guide carries the complete path a normal user encounters when the instrument is in the state the previous user should have left it, plus the Level 1 exercise, but it must not become an alternate technical SOP. Cite the canonical page for each step and use short labels rather than rewriting the technical instruction. Conditional recovery, maintenance, and unusual-startup steps may remain on the canonical page when the guide identifies the expected state and directs users to the page or staff if reality differs. Routine operation may group where that remains unambiguous. As of 2026-08-05 this is done with checkable checklist items carrying `#anchor` citations, not a separate table — see [the session-checklist model](#the-session-checklist-model).

**Neither artifact gates the other.** Draft and test them together once the canonical SOP and intended Level 1 workflow are stable. Routine delivery is ready only when the canonical page, Quick Guide, staff guide, and exercise agree; the Quick Guide has been print-tested and installed at the instrument; and the training has been practiced by a qualified trainer.

Two earlier claims in this README were wrong and are superseded. It first said a guide could not be written for an instrument without a Quick Guide, which was inferred from the two pilot guides happening to be the two instruments with Quick Guides. It then said the training guide must come first. Both imposed an authoring sequence that the sibling model removes.

### Scope Of Work: One Instrument At A Time

**Work on one instrument's guide pair at a time. Update the template when a finalized decision is ready to generalize. Do not propagate a change into the other instrument guides.**

Adopted 2026-08-05, after a sample-agnostic scoping decision made while working on FTIR was also applied to `optical.md` in the same commit — including newly invented optical-specific selection criteria for a guide whose content has not been designed yet.

The reasoning is about iteration cost. Guide development is iterative, and a decision that looks settled while working on one instrument is often revised while working on the next. Applying an intermediate decision across ten files means redoing that work when it changes, and it puts plausible-looking text into guides nobody has actually thought through — which is worse than leaving them visibly unfinished, because it reads as complete.

So:

* **Edit the instrument under discussion.** That is the deliverable.
* **Update [`instrument-training-template.md`](instrument-training-template.md) when prompted to.** Generalize specific decisions only after they are finalized in the guide under renovation, and write the generalized form for the specific purpose of informing future guide development. Experimental structure stays in the live reference guide until practice or review confirms it.
* **Leave the other guides alone**, even when a change plainly applies to them. Record the needed retrofit in the [guide-pair inventory](#late-august-guide-pair-inventory) or `../instruments/staff-todo.md`, and let a later session do it deliberately.

**Direction of travel: real content first, then extract the template.** Write and test a decision against an actual instrument, where the facts can be verified against a canonical page and a real workflow, then lift the general pattern into the template. Do not design in the template and instantiate downward — a pattern that has never been tested on real content tends not to survive contact with one.

Thinking about how a decision will generalize is useful during design. Recording that generalized version in the template is a separate, deliberate step once the decision is settled; rewriting nine other guides is a different activity and not one to do on speculation.

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

### Quick Guide Layout Model

**Approved on 2026-08-07 for locked, unpublished drafting and lab-assistant review. Instrument-specific technical review and physical duplex proof are still required before publication.**

The compact model is embodied in [`../quick-guides/ftir-sop-map-prototype.md`](../quick-guides/ftir-sop-map-prototype.md). Its purpose is not to split a long linear tutorial across two sides. It gives the participant one complete SOP side and one control-finding/quality-decision side:

* **Side 1:** a title and trained-user notice; the complete startup, routine operation, and shutdown SOP in the left column; and three guidance boxes in the right column for the instrument's critical handling/safety boundary, before-leaving state, and stop/help path.
* **Side 2:** one annotated primary software or hardware view; numbered keys whose markers sit outside the controls; two compact immediate-quality or readiness states; and minimal acquisition/before-unloading reminders.
* **Heading hierarchy:** one document `<h1>`; `<h2>` for **Standard Operating Procedure (SOP)** and the Side 2 visual-map title; `<h3>` for startup, operation, shutdown, interface/result subsections, and reminder headings. The Side 2 `<h2>` is styled at display size without becoming a second `<h1>`.
* **Fixed common architecture:** all instruments use the same three Side 1 boxes. Only the first topic changes — for example glove separation, holder clearance, enclosure/interlock, moving crosshead, laser, indenter/scale, powder loading, cuvette handling, or high-voltage/vacuum state. If the safe boundary does not fit, narrow the workflow or commission a task card rather than add boxes or shrink text.
* **One routine workflow:** accessory and advanced workflows stay on the canonical page or receive a separately commissioned task-specific card. The primary guide is not a compressed rewrite of all detailed operating instructions.

The exact reusable markup, locked-versus-replaceable rules, stop conditions, and per-instrument image/callout plans are in [`../_staff/quick-guides/README.md`](../_staff/quick-guides/README.md). Use that work order rather than deriving a layout from the FTIR file. Existing optical and XRD guides remain untouched until their own retrofit tasks are authorized.

The compact model still needs a physical FTIR proof. Passing a generated two-page render establishes layout feasibility, not approval to install it.

**The two bugs it fixed are worth keeping in mind regardless of what the format becomes**, because both are invisible in normal use:

* **A fixed-height print sheet with `overflow: hidden` clips silently.** Content past one page vanishes from the printed copy with no warning in the HTML, the build, or any check. The FTIR guide lost most of its shutdown section, its closing checklist, and its help box this way, and the word count looked fine throughout.
* **A multicol container inside a flex parent balances across the whole document, not per page.** Reading order breaks: the left column holds the early steps while the right column opens partway through the guide.

**Verify any print layout by rendering it paginated, never by scrolling it.** Screenshotting a print stylesheet in a scrolling viewport reproduces neither bug and can show a plausible page that does not match what prints:

```sh
# with the worktree served on 4173, run from the worktree root
node -e "const p=require('puppeteer');(async()=>{const b=await p.launch();const g=await b.newPage();
await g.goto('http://127.0.0.1:4173/quick-guides/ftir-sop-map-prototype/',{waitUntil:'networkidle0'});
await g.emulateMediaType('print');
await g.pdf({path:'/tmp/qg.pdf',format:'Letter',printBackground:true,margin:{top:0,right:0,bottom:0,left:0}});
await b.close()})()"
pdftoppm -r 110 -png /tmp/qg.pdf /tmp/qg      # then look at the page images
pdftotext -layout /tmp/qg.pdf - | tail -20    # confirm the last section actually prints
```

Check that every section heading appears in the PDF text, that reading order is sequential on each page, and that QR codes decode at 300 dpi (`pdftoppm -r 300`, then any QR reader). A word count is not a substitute: tables cost more vertical space than the same words as prose, and a count cannot see clipping at all.

### The Session-Checklist Model

**Adopted 2026-08-05 for FTIR. This is the current staff-guide shape; `ftir.md` is the reference.** The template still describes the older structure. Update it only when prompted after practice and feedback confirm which parts of the FTIR shape are finalized and useful for future guides.

A staff guide is a **checklist a trainer runs**, with the reasoning available but out of the way. Five decisions define it:

* **One continuous checklist, in session order.** Every checkable item in a single run — before-session prep, welcome, safety orientation, the instrument SOP in teaching order, the exercise, closeout, and success criteria. Not prose interleaved with several short lists. The earlier FTIR guide had 36 checkboxes across four sections with explanation between them, so a trainer mid-session scrolled past rationale to find the next action.
* **Everything the trainer must do appears on the page.** The shared safety orientation and administrative closeout are pulled in as Jekyll includes — [`_includes/trainer/checklist-safety.md`](../_includes/trainer/checklist-safety.md) and [`checklist-closeout.md`](../_includes/trainer/checklist-closeout.md) — so they stay single-source but appear inline. The closeout include takes the instrument's Moira group as a parameter. Included checkboxes join the page's progress count and its next-unchecked-item button automatically, because the checklist script scopes to any checkbox inside `.trainer-guide-content`.
* **No separate SOP coverage-map table.** State the normal-use coverage rule once at the top, then make each routine step a checkable item with its own `#anchor` citation. The old table listed all 22 canonical FTIR bullets immediately before the checklists repeated them, including conditional steps a normal session should not encounter. What the table did carry worth keeping was its observation column; those became italic *Check:* clauses on the items ("*Check: they recognize the clutch slipping and do not force past it*").
* **Checklist first, rationale second.** A trainer reads the reasoning once or twice and runs the checklist dozens of times. Leading with explanation taxes every future session to serve the first two, and does not survive contact with a tablet at the instrument. The rationale stays on the page below, under a heading experienced trainers skip; [trainer readiness](trainer-readiness.md) stage 2 already directs new trainers to read the whole guide.
* **Phase markers, not sections.** Modest wayfinding inside the run: a thin rule, a small recommended-time label, and a short phrase. The agenda table is gone — the times live on the markers where the work is. Note that a marker between two task lists splits the underlying `<ul>`, so the CSS manages vertical rhythm to keep it reading as one list.

**Guide Control was split.** The old table mixed trainer-facing operational facts with audit fields (status, last-reviewed, LibCal verification, lamination state), which is why it read as confusing and unclear who it served. Operational facts a trainer needs mid-session sit in a short block near the checklist; tracking fields live in front matter and render in a status table at the bottom.

**One constraint this model makes easy to get wrong:** a checklist in session order tempts you to write steps in the order they *feel* natural, which can contradict how access actually works. See [access and logistics](access-and-logistics.md#trainer-closeout-sequence) — a trainee has no workstation login during their own first session, because the Moira add happens at closeout, so the trainer performs the initial login.

### Late-August Guide-Pair Inventory

Use these visible states for handoff planning: **missing**, **drafting**, **needs operational check**, **needs practice run**, and **ready for late-August handoff**. This inventory records repository coverage, not approval to deliver a training.

| Wave | Instrument system | Quick Guide | Staff guide | Immediate readiness issue |
| --- | --- | --- | --- | --- |
| First | **SEM/EDS** | Missing | Missing | Decide the guide split while preserving the two Phenoms' different sample-height rules and the XL-only EDS workflow. |
| First | **XRD** | Needs operational check and retrofit | Missing | Resolve the companion-workstation and stored-program questions; use the existing handouts as source material. |
| First | **FTIR** | Needs operational check and physical print proof | Needs operational check, then timed practice run | Supply the empirical background evidence; test whether the two-solid session and attendee closeout fit 50 minutes; print proof for legibility and QR scanning only. |
| First | **Instron** | Missing | Missing | Build from the detailed operating page and resolve the remaining machine-specific method, export, and end-condition checks. |
| Second | **Optical microscopy** | Needs retrofit; blocked on routine capture/save view and quality pair | Needs retrofit to the [session-checklist model](#the-session-checklist-model) | Resolve the [optical Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#olympus-dsx100-optical-microscope), restructure the staff guide as one continuous checklist, and review sample-selection text written before optical's own design round. |
| Second | **Raman** | Missing | Missing | Verify the routine LabSpec 6 controls, laser-safety procedure, and starting settings before planned fall subject use. |
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

The compact FTIR SOP/visual-map prototype was accepted on 2026-08-07 as the composition to test and use for locked unpublished drafts. It still requires lab-assistant review and a physical duplex proof before it can replace the published guide. Keep volatile measurements and render observations in generated review output rather than copying them into multiple handoff documents.

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
* **Correctness costs length.** FTIR's second side grew substantially across the review rounds. Budget for that: a first draft that already fills its pages has no room to become correct. Prefer a layout that exposes overflow over one that clips, and measure the current build rather than preserving stale word counts in handoff prose.

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
* **One instrument at a time; generalize into the template only when prompted.** A decision made while working on one instrument is not propagated into the other guides in the same pass. Once a specific decision is finalized, the template may record its generalized form for future guide development; see [scope of work](#scope-of-work-one-instrument-at-a-time).
* Quick Guides and staff guides account for the complete normal-use path a user encounters when the instrument is in the expected ready state. Conditional recovery, maintenance, and unusual-startup steps may remain on the canonical page when the derivative names the expected state and points users to the page or staff if it differs. Routine shutdown must still restore that expected state. In staff guides this is done with checkable items, not a coverage-map table; see [the session-checklist model](#the-session-checklist-model).
* Quick Guides cover one default routine workflow; Level 1 exercises use that mechanical spine while adding the sample, question, expected result, and teaching prompts.
* Immediate data-quality checks belong in Quick Guides; extended interpretation and analysis do not.
* Quick Guides exclude parameter tables when the workflow is selecting a reviewed stored method.
* Participants use the printed Quick Guide during training, especially for participant-led cleanup and shutdown.
* Reviewed laminated Quick Guides are kept at the instruments. The web version supports printing, accessibility, personal copies, and fallback rather than routine browser toggling.
* A one-hour LibCal block contains 50 participant-facing minutes. Breakerspace Lab Assistants schedule setup before the event and finish Moira, Slack, documentation, and equipment closeout afterward. Minute labels in a draft guide are hypotheses to test in a practice run.
* FTIR Level 1 uses two trainer-selected solids. Liquids are a later, staff-guided Level 2 extension. Decided 2026-08-06 to match typical use and the 50-minute participant window.
* A software step verified against lab-produced media of the actual instrument may be used when the canonical page is updated in the same revision. This resolved the OMNIC post-scan naming prompt on 2026-08-06 without creating a permanent sourcing exception.
* The lab-approved FTIR cleaning workflow continues to use the stocked low-lint wipes marketed for optical, laser, and electronics cleaning on the installed diamond ATR window. The lab manager accepted that choice on 2026-08-06; revisit it if the installed crystal material or stocked wipe changes.

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

* The learning goals for a 50-minute participant session within a one-hour calendar block.
* The Level 1 exercise used during training.
* The criteria a training sample must satisfy for that exercise, and what disqualifies one. Do not name a specific material or cabinet location; see [sample-agnostic guides](#sample-agnostic-guides).
* Instrument setup, supplies, and trainer preparation.
* A suggested agenda for a maximum of three participants.
* Safe ways for participants to divide the workflow.
* The public operating-page sections participants should learn to use.
* An auditable checklist of the complete normal-use path from the expected ready state, including routine operation, saving, cleanup, shutdown, and stop conditions; conditional or abnormal-state instructions may remain on the canonical page.
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
