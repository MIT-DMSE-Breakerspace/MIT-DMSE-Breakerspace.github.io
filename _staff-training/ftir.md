# Nicolet iS5 FTIR Staff Training Guide

A trainer's outline for a one-hour general FTIR training on the routine iD7 ATR workflow.

The [canonical instrument page](../instruments/ftir.md) is the operating authority. This guide maps and verifies its SOP; it is not an alternate SOP. The [Quick Guide](../quick-guides/ftir.md) is this guide's sibling: **participants hold the printed copy and work from it while the trainer instructs.** The trainer supplies what the paper cannot — sample selection for the exercise, why each step matters, and what a bad result looks like.

## Guide Control

| Field | Value |
| --- | --- |
| Instrument | Thermo Scientific Nicolet iS5 FTIR with iD7 ATR accessory |
| Public instrument page and SOP | [FTIR operating page](../instruments/ftir.md) · [SOP](../instruments/ftir.md#sop) |
| Quick Guide | [`/quick-guides/ftir/`](../quick-guides/ftir.md), reviewed 2026-08-03. Laminated copy at the instrument: **not yet installed** |
| LibCal training | Template: **Fourier Transform Infrared (FTIR) Spectrometer Training**. Max 3, MIT LibAuth, opens 2 weeks prior. The template needs rewriting before release; see [archival record](libcal-event-templates.md) |
| Session length | 60 minutes |
| Maximum enrollment | 3 participants |
| Level 1 exercise | Compare two solid materials with ATR and save native spectra |
| Training sample | Trainer's choice per session; see [choosing the sample](#choosing-the-sample). Default kit requires approval and a cabinet location |
| Moira group | `dmse-brkrspc-ftir` (see [access and logistics](access-and-logistics.md#moira-groups-by-instrument)) |
| Guide owner | Lab manager (see [guide owners](access-and-logistics.md#guide-owners)) |
| Status | Pilot draft; operational-owner review required |
| Last reviewed | 2026-08-03 |

## Training Outcome

By the end of the session, participants should be able to:

* Locate the exit route, campus phone, fire alarm pull, sharps container, and sink-area emergency equipment, and know to dial 100 from a campus phone or 617-253-1212 otherwise.
* Explain what an FTIR spectrum represents and why ATR contact and crystal cleanliness matter.
* Decide whether a routine sample is compatible and recognize samples that require staff review.
* Work through the whole routine ATR cycle from the printed Quick Guide, with the glove transitions in the right places.
* Judge, before unloading, whether a spectrum is good enough to keep.
* Save native spectra individually and copy them off the workstation.
* Complete shutdown: crystal clean and covered, OMNIC closed, logged off, instrument left powered on.
* Find the SOP, detailed operating instructions, common failure modes, reservations, and help pathways on the instrument page.

The session does not currently include a separate individual skills demonstration. Participants may divide the workflow, but the trainer must make the complete background/sample/save/clean cycle visible and involve every participant meaningfully. Participant-led cleanup and shutdown should run from the Quick Guide with as little prompting as is safely practical.

## Before The Session

### Instrument And Space

* [ ] Confirm that the FTIR is powered, connected, functioning normally, and left with a clean covered crystal.
* [ ] Confirm the laminated Quick Guide is at the instrument, legible, and matches the current review date. Print copies for each participant to hold and mark up.
* [ ] Open the [public operating page](../instruments/ftir.md) on the workstation, ready to show where the SOP lives.
* [ ] Confirm that OMNIC starts normally and that the training save location is available.
* [ ] Prepare nitrile gloves, Kimwipes, isopropyl alcohol, the self-leveling pressure tip, and the session's samples.
* [ ] Inspect the ATR diamond and plate for residue, staining, chips, or scratches before participants arrive.
* [ ] Confirm that three participants can see the crystal area and workstation without crowding sample handling.
* [ ] Confirm the exit route, sink-area emergency equipment, and sharps container are unobstructed.

### Training Sample

See [choosing the sample](#choosing-the-sample) — the exercise needs two solids, but which two is the trainer's call.

* [ ] Decide which two materials this session will use, and confirm both are non-hazardous, clean, dry, stable, and able to give repeatable ATR contact.
* [ ] Run the pair yourself, or know their expected spectra well enough to recognize poor contact or contamination during the session.
* [ ] Identify several major differences participants should be able to see between the two.
* [ ] If a participant brings a project sample, confirm staff approved it beforehand.

### Participants

* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.
* [ ] Note project goals or accommodations shared in advance without adding private participant information to this repository.

## Suggested 60-Minute Agenda

| Time | Activity |
| --- | --- |
| 0-3 minutes | Welcome, participant goals, and hand out the printed Quick Guide. |
| 3-8 minutes | [Lab safety orientation](lab-safety-orientation.md): exit route, eyewash and shower, sharps, campus phone, alarm pull, food boundary, gloves. Run this every session. |
| 8-14 minutes | What FTIR and ATR show, compatible samples, and stop conditions. Show where the SOP lives on the instrument page. |
| 14-20 minutes | Trainer-led crystal inspection, cleaning, glove transition, connection check, and background — participants following Quick Guide step 3. |
| 20-42 minutes | Participants run both samples from the Quick Guide: load, collect, check, save. |
| 42-50 minutes | Compare the two spectra, contact quality, and contamination cues. |
| 50-56 minutes | Participant-led cleanup and shutdown from Quick Guide step 9. |
| 56-60 minutes | Reservations, access closeout, help pathways, and final questions. |

The glove-transition demonstration in the safety orientation sets up the ATR workflow directly: this instrument requires gloves for crystal cleaning and sample handling, then bare hands at the keyboard to collect.

## SOP Coverage Map

An audit and teaching plan, not an alternate SOP. Quick Guide steps are numbered 1–9 across both sides.

| Canonical SOP item | Quick Guide step | How training covers it | Participant check |
| --- | --- | --- | --- |
| Startup: power on if needed, leave on otherwise ([`#startup`](../instruments/ftir.md#startup)) | 3.1 | Trainer states the leave-powered-on rule and why | Asks why it is left on |
| Startup: log on with MIT Kerberos ([`#startup`](../instruments/ftir.md#startup)) | 3.2 | Participant performs | Logs on unaided |
| Startup: start OMNIC ([`#startup`](../instruments/ftir.md#startup)) | 3.3 | Participant performs | — |
| Startup: verify connection in system status ([`#startup`](../instruments/ftir.md#startup)) | 3.4 | Trainer shows where, participant confirms | Can say what a failed connection looks like |
| Startup: remove crystal cover ([`#startup`](../instruments/ftir.md#startup)) | 3.5 | Participant performs, gloved | Handles the pressure tower correctly |
| Startup: clean the ATR crystal ([`#crystal`](../instruments/ftir.md#crystal)) | 3.6 | Trainer demonstrates center-outward wipe, each participant repeats | Confirms nothing remains before proceeding |
| Startup: collect a background ([`#background`](../instruments/ftir.md#background)) | 3.7 | Participant performs with bare crystal, no clamp | Explains why the crystal must be bare |
| Operation: glove discipline ([`#operation`](../instruments/ftir.md#operation)) | Glove rule, 4.1, 4.5 | Reinforced at every transition all session | Completes at least one transition unprompted |
| Operation: clean between samples ([`#crystal`](../instruments/ftir.md#crystal)) | 4.2, 8 | Participant performs between the two samples | Cleans without being told |
| Operation: choose sampling method and tip ([`#quick-method`](../instruments/ftir.md#quick-method)) | 2 | Trainer explains the choice for each of the two samples | Picks the approach for the second sample |
| Operation: load for good contact ([`#sample`](../instruments/ftir.md#sample)) | 4.3, 4.4 | Participant performs; trainer watches the clutch | Recognizes when the clutch has slipped |
| Operation: collect the spectrum ([`#sample`](../instruments/ftir.md#sample)) | 5 | Participant performs, both samples | — |
| Operation: save each spectrum individually ([`#shutdown`](../instruments/ftir.md#shutdown)) | 7 | Trainer flags that group-saving does not exist | Saves both files and can find them |
| Operation: repeat the cycle ([`#operation`](../instruments/ftir.md#operation)) | 8 | Second sample is the repetition | Runs the second sample with less prompting |
| Shutdown: save all data ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.1 | Participant confirms | Knows where files are and how to retrieve them |
| Shutdown: close OMNIC ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.2 | Participant performs | — |
| Shutdown: log off the workstation ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.3 | Participant performs | — |
| Shutdown: clean the crystal ([`#crystal`](../instruments/ftir.md#crystal)) | 9.4 | Participant performs, gloved | Crystal and plate genuinely clean |
| Shutdown: cover and clamp the plate ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.5 | Participant performs | Cover seated and clamped |
| Shutdown: leave instrument powered on ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.6 | Trainer restates | Does not switch it off |
| Shutdown: clear the work area ([`#shutdown`](../instruments/ftir.md#shutdown)) | 9.7 | Participant performs | Wipes and waste removed |
| Stop and ask: uncertain sample, damaged crystal, unfamiliar error ([`#failures`](../instruments/ftir.md#failures)) | Side 1 stop box | Trainer poses one scenario aloud | Says "ask staff" rather than improvising |

Every startup and shutdown bullet on the instrument page appears above. If the page's SOP changes, this table is what must be re-checked.

## Level 1 Exercise: Compare Two Known Solids

### Question Or Goal

How do spectra from two known materials differ, and what practical signs show whether each ATR measurement was collected cleanly and with adequate sample contact?

### Which Operations This Training Covers

Shared with the Quick Guide: the routine workflow it documents is the workflow this training teaches.

| Taught in this training | Deliberately excluded |
| --- | --- |
| iD7 ATR on a flat solid or powder | iD1 transmission and EasiDiff diffuse reflectance — staff-guided |
| Crystal cleaning and background collection | Liquid samples and the volatiles cover — an extension when time allows |
| Judging contact quality before saving | Database searching and material identification — [`#data`](../instruments/ftir.md#data) |
| Saving native spectra individually | Baseline correction, subtraction, and other processing |
| Full startup and shutdown | Any accessory change |

Excluded does not mean hidden. Say where each lives — usually the detailed operating instructions or a staff conversation. The exclusions are what keep the session finishable in an hour.

### Choosing The Sample

**Two solids that give visibly different spectra.** The exercise is the comparison, not any particular pair of materials.

That flexibility is the point. It lets the trainer use:

* **A default lab pair** — a known polymer with a smooth face, and a paper product. Reliable and repeatable for a general session.
* **The participant's own material**, when they arrive with an approved project sample. Training on the thing they will actually measure is worth more than training on a stand-in.
* **A subject-specific pair**, when a course sends students for a standard workflow on course samples.

In every case the trainer must be able to recognize a bad result on the chosen materials. If you have not run them, run them first — that is the whole reason a trainer supplies the sample rather than the paper.

Requirements for any pair: non-hazardous, clean, dry, stable, no risk of crumbling into the instrument or staining the plate, and a face that can make real contact with the diamond. A fibrous or lumpy sample is a legitimate teaching case — it demonstrates poor contact — but pick it deliberately, not by accident.

**Default kit still needs approval:** identifiers, expected major bands, cabinet location, and a replenishment plan. `BS-000004` (acrylic yarn, CAB-01/BIN-03) already carries Nicolet iS5 assets and a prep note that fibers are hard to press flat, which makes it a candidate for one half of the pair.

The legacy 3.000 coffee-roast exercise is a useful course-specific variation but should describe its output as a relative O-H-associated peak ratio — not percent water or direct moisture content — unless a calibrated quantitative method is developed and validated.

### Participant Workflow

The Quick Guide is the mechanical spine. Participants follow its numbered steps; the trainer adds the sample choice, the reasoning, and the checkpoints below.

| Stage | Quick Guide | What the trainer adds |
| --- | --- | --- |
| Inspect and decide | 1–2 | Why *these* two materials, and which loading approach each needs |
| Start up and background | 3 | Watch the center-outward wipe; explain what a dirty background does to a spectrum |
| First sample | 4–5 | Watch for the clutch slipping; catch over-tightening |
| Quality check | 6 | **The teaching moment.** Ask what they see before they save |
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

* **The sample is the trainer's lever.** Same workflow, different material: a general session, a participant's own approved project sample, or a course's standard samples. See [choosing the sample](#choosing-the-sample).
* For an unapproved project sample, run the known pair first and route the project sample to staff.
* A non-volatile liquid is a useful extension once the solid workflow is consistent, but it must not displace the full background/save/clean sequence.
* The 3.000 coffee exercise can be offered as a guided comparison after its quantitative language and expected result are revised.
* Treat a database match as evidence rather than proof, particularly for mixtures or contaminated samples.
* Transmission and diffuse-reflectance accessories are outside routine training unless the session was specifically approved for them.
* A deliberately awkward second sample — fibrous, lumpy, or curved — teaches contact quality better than two easy solids. Choose it on purpose, and know what its spectrum should look like.

## Guide Maintenance

When this guide changes, review the [Quick Guide](../quick-guides/ftir.md), the [operating page](../instruments/ftir.md), the sample kit, reference spectra, sample-library records, LibCal description, and Moira information together.

**If the instrument page's SOP changes, re-check the [SOP coverage map](#sop-coverage-map) row by row.** That table is the contract between this guide and the page; a new or removed SOP bullet must appear or disappear there.

Practice the guide with a staff or student-staff trainer, and print-test the Quick Guide, before marking either ready for routine delivery.
