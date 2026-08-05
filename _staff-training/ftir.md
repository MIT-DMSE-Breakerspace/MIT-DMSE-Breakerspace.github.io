---
title: FTIR Trainer Guide
description: Session checklist and teaching outline for a one-hour Nicolet iS5 FTIR training.
guide_status: Needs operational check and practice run
guide_revision: 2026-08-05
interactive_checklist: true
trainer_links:
  - label: Participant Quick Guide
    url: /quick-guides/ftir/
  - label: Operating page and SOP
    url: /instruments/ftir.html#sop
  - label: Training calendar
    url: https://breakerspace.libcal.com/calendar?cid=19408
  - label: WebMoira
    url: https://groups.mit.edu/webmoira/
---

# Nicolet iS5 FTIR Staff Training Guide

A trainer's outline for a one-hour general FTIR training on the routine iD7 ATR workflow.

The [canonical instrument page]({% link instruments/ftir.md %}) is the operating authority. This guide maps and verifies its SOP; it is not an alternate SOP. The [Quick Guide]({% link quick-guides/ftir.md %}) is this guide's sibling: **participants hold the printed copy and work from it while the trainer instructs.** The trainer supplies what the paper cannot — sample selection for the exercise, why each step matters, and what a bad result looks like.

## Guide Control

| Field | Value |
| --- | --- |
| Instrument | Thermo Scientific Nicolet iS5 FTIR with iD7 ATR accessory |
| Public instrument page and SOP | [FTIR operating page]({% link instruments/ftir.md %}) · [SOP]({% link instruments/ftir.md %}#sop) |
| Quick Guide | [`/quick-guides/ftir/`]({% link quick-guides/ftir.md %}), reviewed 2026-08-03. Laminated copy at the instrument: **not yet installed** |
| LibCal training | Template: **Nicolet iS5 FTIR Spectrometer Training**. Max 3, MIT LibAuth, opens 2 weeks prior. Revised and verified 2026-08-04; the administrative completion record is maintained in `_admin/libcal-manual-update-guide.md` |
| Session length | 60 minutes |
| Maximum enrollment | 3 participants |
| Level 1 exercise | Compare two solid materials with ATR and save native spectra |
| Training sample | **Trainer-selected.** Two solids that meet the [sample criteria](#choosing-the-sample) and give visibly different spectra. No specific material is prescribed, so the trainer can match the session to a subject exercise or research project |
| Moira group | `dmse-brkrspc-ftir` (see [access and logistics]({% link _staff-training/access-and-logistics.md %}#moira-groups-by-instrument)) |
| Guide owner | Lab manager (see [guide owners]({% link _staff-training/access-and-logistics.md %}#guide-owners)) |
| Status | Pilot draft; operational-owner review required |
| Last reviewed | 2026-08-05 |

## Training Outcome

By the end of the session, participants should be able to:

* Locate the exit route, campus phone, fire alarm pull, sharps container, and sink-area emergency equipment, and know to dial 100 from a campus phone or 617-253-1212 otherwise.
* Explain what an FTIR spectrum represents and why ATR contact and crystal cleanliness matter.
* Decide whether a routine sample is compatible and recognize samples that require staff review.
* Work through the whole routine ATR cycle from the printed Quick Guide, with the glove transitions in the right places.
* Use preview to judge contact and commit the scan with **start collection**, or run without preview knowingly.
* Judge, before unloading, whether a spectrum is good enough to keep, and choose the right response: correct the contact for a weak signal, redo the background for negative bands, and diagnose before acting on any other unexpected feature.
* Save native spectra individually and copy them off the workstation.
* Complete shutdown: crystal clean and covered, OMNIC closed, logged off, instrument left powered on.
* Find the SOP, detailed operating instructions, common failure modes, reservations, and help pathways on the instrument page.

The session does not currently include a separate individual skills demonstration. Participants may divide the workflow, but the trainer must make the complete background/sample/save/clean cycle visible and involve every participant meaningfully. Participant-led cleanup and shutdown should run from the Quick Guide with as little prompting as is safely practical.

## Before The Session

### Instrument And Space

* [ ] Confirm that the FTIR is powered, connected, functioning normally, and left with a clean covered crystal.
* [ ] Confirm the laminated Quick Guide is at the instrument, legible, and matches the current review date. Print copies for each participant to hold and mark up.
* [ ] Open the [public operating page]({% link instruments/ftir.md %}) on the workstation, ready to show where the SOP lives.
* [ ] Confirm that OMNIC starts normally and that the training save location is available.
* [ ] Prepare nitrile gloves, Kimwipes, isopropyl alcohol, the self-leveling pressure tip, and the session's samples.
* [ ] Inspect the ATR diamond and plate for residue, staining, chips, or scratches before participants arrive.
* [ ] Confirm that three participants can see the crystal area and workstation without crowding sample handling.
* [ ] Confirm the exit route, sink-area emergency equipment, and sharps container are unobstructed.

### Training Samples

Choose two solids that satisfy the [sample criteria](#choosing-the-sample). No specific material is prescribed.

* [ ] Select both materials and retrieve them.
* [ ] Inspect both: clean, dry, stable, and able to make real contact with the diamond.
* [ ] **Confirm you have run both yourself, or otherwise know what a good and a bad result looks like on them.** This is the judgment the printed guide cannot supply. If you have not run a material, run it before the session.
* [ ] Confirm the two will give visibly different spectra, so the comparison teaches something to a beginner.
* [ ] Confirm stock is sufficient for this session and note replenishment needs afterward.

If a participant asks to use their own project sample, staff must have approved it in advance. When an unapproved sample appears mid-session, run the session on your selected materials and route the project sample to staff.

### Participants

* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.
* [ ] Note project goals or accommodations shared in advance without adding private participant information to this repository.

## Suggested 60-Minute Agenda

| Time | Activity |
| --- | --- |
| 0-3 minutes | Welcome, participant goals, and hand out the printed Quick Guide. |
| 3-8 minutes | [Lab safety orientation]({% link _staff-training/lab-safety-orientation.md %}): exit route, eyewash and shower, sharps, campus phone, alarm pull, food boundary, gloves. Run this every session. |
| 8-14 minutes | What FTIR and ATR show, compatible samples, and stop conditions. Show where the SOP lives on the instrument page. |
| 14-20 minutes | Trainer-led crystal inspection, cleaning, glove transition, connection check, and background — participants following Quick Guide step 3. |
| 20-42 minutes | Participants run both samples from the Quick Guide: load, collect, check, save. |
| 42-50 minutes | Compare the two spectra, contact quality, and contamination cues. |
| 50-56 minutes | Participant-led cleanup and shutdown from Quick Guide step 9. |
| 56-60 minutes | Reservations, access closeout, help pathways, and final questions. |

The glove-transition demonstration in the safety orientation sets up the ATR workflow directly: this instrument requires gloves for crystal cleaning and sample handling, then bare hands at the keyboard to collect.

## SOP Coverage Map

An audit and teaching plan, not an alternate SOP. The Quick Guide is a single continuous sequence of numbered sections 1–9; sub-items are unnumbered bullets, so this table cites the section plus a short label for the item.

| Canonical SOP item | Quick Guide step | How training covers it | Participant check |
| --- | --- | --- | --- |
| Startup: power on if needed, leave on otherwise ([`#startup`]({% link instruments/ftir.md %}#startup)) | 3 · leave powered on | Trainer states the leave-powered-on rule and why | Asks why it is left on |
| Startup: log on with MIT Kerberos ([`#startup`]({% link instruments/ftir.md %}#startup)) | 3 · log on | Participant performs | Logs on unaided |
| Startup: start OMNIC ([`#startup`]({% link instruments/ftir.md %}#startup)) | 3 · start OMNIC | Participant performs | — |
| Startup: verify connection in system status ([`#startup`]({% link instruments/ftir.md %}#startup)) | 3 · verify connection | Trainer shows where, participant confirms | Can say what a failed connection looks like |
| Startup: remove crystal cover ([`#startup`]({% link instruments/ftir.md %}#startup)) | 3 · remove cover | Participant performs, gloved — gloves go on *before* releasing the tower | Gloves on before touching the tower |
| Startup: clean the ATR crystal ([`#crystal`]({% link instruments/ftir.md %}#crystal)) | 3 · clean the crystal | Trainer demonstrates center-outward wipe, each participant repeats | Confirms nothing remains before proceeding |
| Startup: collect a background ([`#background`]({% link instruments/ftir.md %}#background)) | 3 · final three items | Participant performs with bare crystal, no clamp. Show both preview branches and name **start collection** | Explains why the crystal must be bare; knows the scan is not finished until start collection |
| Operation: glove discipline ([`#operation`]({% link instruments/ftir.md %}#operation)) | Glove rule box; 3, 4 | Reinforced at every transition all session | Completes at least one transition unprompted |
| Operation: clean between samples ([`#crystal`]({% link instruments/ftir.md %}#crystal)) | 4 · clean again; 8 | Participant performs between the two samples | Cleans without being told |
| Operation: choose sampling method and tip ([`#quick-method`]({% link instruments/ftir.md %}#quick-method)) | 2 | Trainer explains the choice for each of the two samples | Picks the approach for the second sample |
| Operation: load for good contact ([`#sample`]({% link instruments/ftir.md %}#sample)) | 4 · place and tighten | Participant performs; trainer watches the clutch | Recognizes the clutch slipping, and does not force past it |
| Operation: collect the spectrum ([`#sample`]({% link instruments/ftir.md %}#sample)) | 5 | Participant performs, both samples. With preview on, the live spectrum is the contact check and **start collection** commits the scan | Does not mistake the preview for a saved spectrum |
| Operation: save each spectrum individually ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 7 | Trainer flags that group-saving does not exist | Saves both files and can find them |
| Operation: repeat the cycle ([`#operation`]({% link instruments/ftir.md %}#operation)) | 8 | Second sample is the repetition | Runs the second sample with less prompting |
| Shutdown: save all data ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · confirm saved | Participant confirms | Knows where files are and how to retrieve them |
| Shutdown: close OMNIC ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · close OMNIC | Participant performs | — |
| Shutdown: log off the workstation ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · log off | Participant performs | — |
| Shutdown: clean the crystal ([`#crystal`]({% link instruments/ftir.md %}#crystal)) | 9 · clean crystal | Participant performs, gloved | Crystal and plate genuinely clean |
| Shutdown: cover and clamp the plate ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · cover and clamp | Participant performs | Cover seated and clamped |
| Shutdown: leave instrument powered on ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · leave powered on | Trainer restates | Does not switch it off |
| Shutdown: clear the work area ([`#shutdown`]({% link instruments/ftir.md %}#shutdown)) | 9 · clear the area | Participant performs | Wipes and waste removed |
| Stop and ask: uncertain sample, damaged crystal, unfamiliar error ([`#failures`]({% link instruments/ftir.md %}#failures)) | Stop-and-ask box | Trainer poses one scenario aloud | Says "ask staff" rather than improvising |

Every startup and shutdown bullet on the instrument page appears above. If the page's SOP changes, this table is what must be re-checked.

## Level 1 Exercise: Compare Two Solids

### Question Or Goal

How do spectra from two different materials compare, and what practical signs show whether each ATR measurement was collected cleanly and with adequate sample contact?

### Which Operations This Training Covers

Shared with the Quick Guide: the routine workflow it documents is the workflow this training teaches.

| Taught in this training | Deliberately excluded |
| --- | --- |
| iD7 ATR on a flat solid, and pressing a fibrous or powdered solid into contact | Liquids and the volatiles cover — an extension once the solid workflow is consistent, and not covered by the Quick Guide |
| Crystal cleaning and background collection, with both preview branches | iD1 transmission and EasiDiff diffuse reflectance — staff-guided |
| Judging contact quality before committing a scan | Database searching and material identification — [`#data`]({% link instruments/ftir.md %}#data) |
| Saving native spectra individually | Baseline correction, subtraction, and other processing |
| Full startup and shutdown | Any accessory change |

Excluded does not mean hidden. Say where each lives — usually the detailed operating instructions or a staff conversation. The exclusions are what keep the session finishable in an hour.

**The Quick Guide matches this scope.** It documents the solid and powder workflow only, and explicitly directs users to ask staff about liquids and other accessories, so a newly trained user cannot read it as authorization for a workflow they were not taught.

### Choosing The Sample

**The workflow is fixed; the material is the trainer's choice.** This guide prescribes no specific material, so a session can be matched to a subject exercise, a research project, or a general walk-in group. What does not change is the set of properties a material must have and the trainer's obligation to recognize a bad result on it.

#### Requirements For Any Material

Non-hazardous, clean, dry, and stable. No risk of crumbling into the instrument or staining the plate. A face that can make real contact with the diamond. Anything sharp, sticky, abrasive, very hard, reactive, odorous, unknown, staining, or difficult to clean is a stop-and-ask-staff conversation rather than a training sample.

#### What The Pair Must Achieve

| Requirement | Why it matters |
| --- | --- |
| Two solids with **visibly different spectra** | The comparison is the exercise. If a beginner cannot see the difference, there is nothing to discuss. Materials from different classes — for example a synthetic polymer against a natural fiber — separate more obviously than two similar plastics |
| At least one material that **demonstrates contact quality honestly** | A fibrous, powdered, lumpy, or curved solid shows what poor contact looks like, where two flat easy solids hide it. Choose this deliberately rather than avoiding it |
| A result **you can already recognize** | You must be able to tell poor contact from a genuine spectral difference in real time. That means having run these materials yourself |

**Do not describe expected band positions from memory or inference.** If you want to name specific bands during the session, work from a spectrum you actually collected on this instrument. Naming a band the material does not have teaches an error that is hard to unlearn — and a plausible-sounding contrast can be wrong. Cellulose and acrylic, for instance, both contain aliphatic C-H bonds, so "one has C-H features and the other does not" would be false for that pair.

#### Loading Approach Follows The Material

Match the approach to what you chose, using [`#quick-method`]({% link instruments/ftir.md %}#quick-method): a flat solid needs a clean face on the crystal, while a fibrous or powdered solid needs pressing into a flat mass under the self-leveling tip. Fibers give weaker signal than a flat solid; if the spectrum is very weak, the fibers are bridging rather than contacting, so re-seat and retighten to the clutch.

#### Variations Worth Choosing On Purpose

* **A participant's own approved project sample.** Training on the material they will actually measure is worth more than a stand-in. Requires prior staff approval, and the comparison still needs a second material.
* **Course-specific materials**, when a subject sends students for a standard workflow on the materials they will use.
* **A deliberately awkward second solid** — lumpy, curved, or fibrous — when you want to teach contact quality harder.

If a later round of development adopts specific approved samples, record them in Guide Control and here; keep the workflow text and the Quick Guide sample-agnostic.

The legacy 3.000 coffee-roast exercise is a useful course-specific variation but should describe its output as a relative O-H-associated peak ratio — not percent water or direct moisture content — unless a calibrated quantitative method is developed and validated.

### Participant Workflow

The Quick Guide is the mechanical spine. Participants follow its numbered steps; the trainer adds the sample choice, the reasoning, and the checkpoints below.

| Stage | Quick Guide | What the trainer adds |
| --- | --- | --- |
| Inspect and decide | 1–2 | Why *these* two materials, and which loading approach each needs |
| Start up and background | 3 | Watch the center-outward wipe; explain what a dirty background does to a spectrum; show both preview branches |
| First sample | 4–5 | Watch for the clutch slipping; catch over-tightening; make sure **start collection** is understood as the commit |
| Quality check | 6 | **The teaching moment.** Ask what they see before they save. Teach three branches: weak signal means correct the contact first, and ask staff about sample suitability if it stays weak; negative bands mean the background was collected on a dirty crystal; anything else unexpected means diagnose before acting — wait for solvent, clean, or ask staff — and redo the background only when the evidence points there. Every branch has a point at which the answer is to stop and ask |
| Save | 7 | Point out that individual saving is a real trap here |
| Second sample | 8, then 4–7 | Hand over more; prompt less |
| Compare | — | Several bands, not one peak. Say where identification lives |
| Shut down | 9 | Participant-led, Quick Guide in hand |

### Suggested Roles For Three Participants

* **Sample and cleaning lead:** handles samples, pressure tower, crystal cleaning, loading, and unloading while gloved.
* **Instrument lead:** confirms connection, collects the background, previews contact, and acquires spectra with gloves removed.
* **Data and quality lead:** names and saves each spectrum, runs the quality check, and identifies concerns.

Rotate roles between the two materials. Every participant should complete or narrate at least one glove transition and one save/quality check.

### Success Criteria

* [ ] A clean background and two recognizable, visibly different spectra were collected.
* [ ] Both native spectrum files were individually selected, named, saved, and copied off the workstation.
* [ ] Participants can explain why ATR contact matters and identify a weak-contact spectrum.
* [ ] Participants ran the quality check before unloading, not after.
* [ ] Participants can say which problems call for correcting contact, which call for a new background, and which call for waiting, cleaning, or asking staff.
* [ ] Participants can identify contamination cues and know when to recollect the background.
* [ ] Participants completed cleanup and shutdown from the Quick Guide with minimal prompting.
* [ ] Participants can find the SOP, detailed instructions, common failure modes, reservations, and help pathways on the instrument page.
* [ ] The crystal is clean, covered, and clamped; OMNIC is closed; Windows is logged off; and the FTIR remains powered on.

### Stop And Ask For Help

* The sample is sharp, sticky, abrasive, very hard, reactive, odorous, unknown, staining, difficult to clean, or otherwise outside the routine workflow.
* The crystal is scratched, chipped, stained, visibly contaminated, or cannot be cleaned with the routine method.
* The accessory or pressure-tip choice is unclear.
* The instrument will not connect or OMNIC reports an unfamiliar error.
* The background remains abnormal after cleaning and recollection.
* The spectrum remains weak or unusual after correcting obvious contact and contamination problems.

## Post-Training Checklist

Complete every item before considering the session closed.

* [ ] Confirm that all samples are removed, the crystal and surrounding plate are clean, the cover is clamped in place, OMNIC is closed, Windows is logged out, and the FTIR remains powered on.
* [ ] Confirm that participants know where their native spectra were saved and how to access them.
* [ ] Ask participants to locate the SOP, detailed operating instructions, common failure modes, and reservation link on the instrument page.
* [ ] Confirm the laminated Quick Guide is back in its place at the instrument, legible and undamaged. Participants keep their printed copies.
* [ ] Add each attendee to `dmse-brkrspc-ftir`. Do not record attendee Kerberos usernames in this file.
* [ ] Send every attendee an invitation to the Breakerspace Slack workspace.
* [ ] Remind participants that physical tap access is processed separately after their one-time Qualtrics record is complete.
* [ ] For first-time users, confirm that they created an MIT Dropbox for Business account and requested DMSE Breakerspace Team membership, or help them with the self-service steps.
* [ ] Point participants to reservations, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] Return the training samples and supplies to their assigned locations and record damage or replenishment needs in the appropriate operational system.
* [ ] Record any instrument, guide, exercise, or sample-library issue discovered during the session.

## Trainer Notes And Variations

* **The sample is the trainer's lever.** Same workflow, different material: a general session, a participant's own approved project sample, or a course's standard materials. See [choosing the sample](#choosing-the-sample).
* For an unapproved project sample, run the session on your selected materials and route the project sample to staff.
* A non-volatile liquid is a useful extension once the solid workflow is consistent, but it must not displace the full background/save/clean sequence.
* The 3.000 coffee exercise can be offered as a guided comparison after its quantitative language and expected result are revised.
* Treat a database match as evidence rather than proof, particularly for mixtures or contaminated samples.
* Transmission and diffuse-reflectance accessories are outside routine training unless the session was specifically approved for them.
* A deliberately awkward second sample — fibrous, lumpy, or curved — teaches contact quality better than two easy solids. Choose it on purpose, and know what its spectrum should look like.

## Guide Maintenance

When this guide changes, review the [Quick Guide]({% link quick-guides/ftir.md %}), the [operating page]({% link instruments/ftir.md %}), the LibCal description, and the Moira information together. This guide names no specific material, so it does not need re-checking when the sample library changes.

**If the instrument page's SOP changes, re-check the [SOP coverage map](#sop-coverage-map) row by row.** That table is the contract between this guide and the page; a new or removed SOP bullet must appear or disappear there.

Practice the guide with a qualified Breakerspace Lab Assistant or other designated trainer, and print-test the Quick Guide, before marking either ready for routine delivery.
