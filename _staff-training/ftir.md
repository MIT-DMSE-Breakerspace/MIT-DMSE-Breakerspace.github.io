---
title: FTIR Trainer Guide
description: Session checklist and teaching outline for a one-hour Nicolet iS5 FTIR training.
guide_status: Needs operational check and practice run
guide_revision: 2026-08-05
interactive_checklist: true
instrument_name: Thermo Scientific Nicolet iS5 FTIR with iD7 ATR accessory
moira_group: dmse-brkrspc-ftir
session_length: 60 minutes
max_enrollment: 3 participants
guide_owner: Lab manager
guide_review_state: Pilot draft; operational-owner review required
last_reviewed: 2026-08-05
libcal_template: Nicolet iS5 FTIR Spectrometer Training
libcal_verified: 2026-08-04
quick_guide_reviewed: 2026-08-05
quick_guide_laminated: false
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

A one-hour general FTIR training on the routine iD7 ATR workflow. **Every training covers every step of the instrument's [canonical SOP]({% link instruments/ftir.md %}#sop)** — the checklist below is that SOP in teaching order, with the trainer's prompts attached.

<div class="trainer-facts" markdown="1">

| | |
| --- | --- |
| **Session** | {{ page.session_length }}, maximum {{ page.max_enrollment }} |
| **Moira group** | `{{ page.moira_group }}` — see [access and logistics]({% link _staff-training/access-and-logistics.md %}#moira-groups-by-instrument) |
| **Participants hold** | The printed [Quick Guide]({% link quick-guides/ftir.md %}); print a copy each |
| **Operating authority** | The [instrument page]({% link instruments/ftir.md %}) and its [SOP]({% link instruments/ftir.md %}#sop) |
| **Trainer supplies** | Sample choice, why each step matters, and what a bad result looks like |

</div>

## Session Checklist

Work top to bottom. The phase labels are wayfinding, not separate lists — progress counts every item on this page.

<p class="trainer-phase" id="phase-before"><span>Before the session</span> Instrument, samples, and participants</p>

* [ ] Confirm the FTIR is powered, connected, functioning normally, and left with a clean covered crystal.
* [ ] Inspect the ATR diamond and plate for residue, staining, chips, or scratches before participants arrive.
* [ ] Confirm OMNIC starts normally and the training save location is available.
* [ ] Confirm the laminated Quick Guide is at the instrument, legible, and matches the current review date. Print a copy for each participant to hold and mark up.
* [ ] Open the [operating page]({% link instruments/ftir.md %}) on the workstation, ready to show where the SOP lives.
* [ ] Prepare nitrile gloves, Kimwipes, isopropyl alcohol, and the self-leveling pressure tip.
* [ ] Choose and retrieve two solids meeting the [sample criteria](#choosing-a-sample). Confirm both are clean, dry, stable, and able to make real contact with the diamond.
* [ ] **Confirm you have run both materials yourself, or otherwise know what a good and a bad result looks like on them.** If you have not, run them before the session — this is the judgment the printed guide cannot supply.
* [ ] Confirm the two will give visibly different spectra, so the comparison teaches a beginner something.
* [ ] Confirm three participants can see the crystal area and workstation without crowding sample handling.
* [ ] Confirm the exit route, sink-area emergency equipment, and sharps container are unobstructed.
* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Note any project goals or accommodations shared in advance, without adding private participant information to this repository.

<p class="trainer-phase" id="phase-open"><span>0–3 minutes</span> Welcome</p>

* [ ] Welcome participants, ask what they want to measure and why, and hand out the printed Quick Guides.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.

<p class="trainer-phase" id="phase-safety"><span>3–8 minutes</span> Lab safety orientation — run every session, for everyone</p>

Deliver this on foot, pointing at each thing. Scale it down when everyone has clearly worked in the lab before, but never skip it. Full reasoning: [lab safety orientation]({% link _staff-training/lab-safety-orientation.md %}).

{% include trainer/checklist-safety.md %}

<p class="trainer-phase" id="phase-context"><span>8–14 minutes</span> What FTIR shows, and what it cannot</p>

* [ ] Explain what an FTIR spectrum represents and why ATR contact and crystal cleanliness determine whether it means anything. Reference [what this instrument shows you]({% link instruments/ftir.md %}#science).
* [ ] Cover compatible samples and what requires staff review, from [compatible materials]({% link instruments/ftir.md %}#materials).
* [ ] Pose one stop-and-ask scenario aloud — an uncertain sample, a damaged crystal, an unfamiliar error — and confirm the answer is "ask staff" rather than improvising. See [common failure modes]({% link instruments/ftir.md %}#failures).
* [ ] Show where the SOP, detailed instructions, and failure modes live on the instrument page, so participants can navigate it without you afterward.
* [ ] Explain the choice of sampling method and pressure tip for each of your two materials, citing [quick method selection]({% link instruments/ftir.md %}#quick-method). *Check: a participant picks the approach for the second sample.*

<p class="trainer-phase" id="phase-startup"><span>14–20 minutes</span> Startup and background — SOP <a href="{% link instruments/ftir.md %}#startup">#startup</a></p>

Trainer-led, participants following Quick Guide section 3. Every canonical startup bullet appears here.

* [ ] State the leave-powered-on rule and why the instrument stays on. *Check: a participant can say why.*
* [ ] **You log on to the workstation, with participants watching.** They cannot log on themselves yet — workstation access comes from the `{{ page.moira_group }}` group you add them to at closeout. Say that out loud: it is why their own Kerberos will work from their next visit onward, and it tells them what to do if it does not.
* [ ] Start **OMNIC**, or have a participant do it once you are logged in.
* [ ] Show where **system status** is; participant confirms the instrument connection. *Check: they can say what a failed connection looks like.*
* [ ] Participant removes the crystal cover — **gloves on before releasing the pressure tower**, not after. *Check: gloves on before touching the tower.*
* [ ] Demonstrate the center-outward wipe with isopropyl alcohol on a Kimwipe, then each participant repeats it. See [cleaning the ATR crystal]({% link instruments/ftir.md %}#crystal). *Check: they confirm nothing remains before proceeding.*
* [ ] Explain what a dirty background does to every spectrum that follows.
* [ ] Participant collects a background on the bare, unclamped crystal. Show both preview branches and name **start collection** explicitly. See [background collection]({% link instruments/ftir.md %}#background). *Check: they explain why the crystal must be bare, and know the scan is not finished until start collection.*

<p class="trainer-phase" id="phase-measure"><span>20–42 minutes</span> Measure both samples — SOP <a href="{% link instruments/ftir.md %}#operation">#operation</a></p>

Participants run the cycle from the Quick Guide. Hand over more on the second sample and prompt less.

* [ ] Participant loads the first sample for good contact, centering the pressure tower and tightening only until the clutch slips. Watch the clutch and catch over-tightening. See [sample loading]({% link instruments/ftir.md %}#sample). *Check: they recognize the clutch slipping and do not force past it.*
* [ ] Participant collects the spectrum. With preview on, the live spectrum is the contact check and **start collection** commits the scan. *Check: they do not mistake the preview for a saved spectrum.*
* [ ] **The teaching moment — run the quality check before unloading.** Ask what they see. Teach all three branches: weak signal means correct the contact first, and ask staff about sample suitability if it stays weak; negative bands mean the background was collected on a dirty crystal; anything else unexpected means diagnose before acting — wait for solvent, clean, or ask staff — and redo the background only when the evidence points there. Every branch ends in stopping and asking if it does not resolve.
* [ ] Participant saves the spectrum individually, and you flag that group-saving does not exist here. *Check: they save the file and can find it again.*
* [ ] Participant cleans the crystal between samples, unprompted if possible. *Check: they clean without being told.*
* [ ] Participant repeats the full cycle on the second material with less prompting.
* [ ] Reinforce the glove transition at every crossing, all session. *Check: each participant completes at least one transition unprompted.*

<p class="trainer-phase" id="phase-compare"><span>42–50 minutes</span> Compare and interpret</p>

* [ ] Compare the two spectra together: several bands, not one peak. Discuss contact quality and contamination cues visible in the results.
* [ ] Say where material identification lives — [data processing]({% link instruments/ftir.md %}#data) and a staff conversation — and that a database match is evidence, not proof.
* [ ] Confirm both native spectrum files were individually named, saved, and copied off the workstation. The workstation is not a backup.

<p class="trainer-phase" id="phase-shutdown"><span>50–56 minutes</span> Participant-led shutdown — SOP <a href="{% link instruments/ftir.md %}#shutdown">#shutdown</a></p>

Participant-led from the Quick Guide, with as little prompting as is safely practical. Every canonical shutdown bullet appears here.

* [ ] Participant confirms all needed data is saved and copied. *Check: they know where the files are and how to retrieve them.*
* [ ] Participant closes OMNIC.
* [ ] Log off the workstation — your session, so you do it, but say that logging off is part of every shutdown so nobody leaves an account open.
* [ ] Participant cleans the crystal and surrounding plate, gloved. *Check: crystal and plate are genuinely clean.*
* [ ] Participant covers the crystal plate and clamps it with the pressure tower. *Check: cover seated and clamped.*
* [ ] Restate that the instrument is **left powered on**. *Check: nobody switches it off.*
* [ ] Participant clears the work area of samples, wipes, and waste.

<p class="trainer-phase" id="phase-closeout"><span>56–60 minutes</span> Closeout — questions, then access</p>

* [ ] Ask participants to locate the SOP, detailed operating instructions, common failure modes, and the reservation link on the instrument page themselves.
* [ ] Answer remaining questions and point to the reservation calendar.
* [ ] Confirm the laminated Quick Guide is back in its place at the instrument, legible and undamaged. Participants keep their printed copies.
* [ ] Return the training samples and supplies to their locations, and note any replenishment needs.

{% include trainer/checklist-closeout.md moira=page.moira_group %}

<p class="trainer-phase" id="phase-success"><span>Before you call it done</span> Did the session work?</p>

These are outcomes, not activities. If one is false, note it — a guide or a session needs changing.

* [ ] A clean background and two recognizable, visibly different spectra were collected.
* [ ] Participants can explain why ATR contact matters and identify a weak-contact spectrum.
* [ ] Participants ran the quality check before unloading, not after.
* [ ] Participants can say which problems call for correcting contact, which call for a new background, and which call for waiting, cleaning, or asking staff.
* [ ] Participants completed cleanup and shutdown from the Quick Guide with minimal prompting.
* [ ] Participants can find the SOP, detailed instructions, failure modes, reservations, and help pathways on the instrument page.
* [ ] The crystal is clean, covered, and clamped; OMNIC is closed; Windows is logged off; and the FTIR remains powered on.

## Why This Session Is Built This Way

Read this once or twice, then work from the checklist. It explains the decisions the checklist encodes, so a trainer can adapt intelligently rather than only follow steps.

### What This Training Covers, And What It Excludes

The exclusions are what keep the session finishable in an hour, and what stop two trainers from teaching two different things. This scope is shared with the Quick Guide: the routine workflow it documents is the workflow this training teaches.

| Taught in this training | Deliberately excluded |
| --- | --- |
| iD7 ATR on a flat solid, and pressing a fibrous or powdered solid into contact | Liquids and the volatiles cover — an extension once the solid workflow is consistent, and not covered by the Quick Guide |
| Crystal cleaning and background collection, with both preview branches | iD1 transmission and EasiDiff diffuse reflectance — staff-guided |
| Judging contact quality before committing a scan | Database searching and material identification — [`#data`]({% link instruments/ftir.md %}#data) |
| Saving native spectra individually | Baseline correction, subtraction, and other processing |
| Full startup and shutdown | Any accessory change |

Excluded does not mean hidden. Say where each lives — usually the detailed operating instructions or a staff conversation.

**The Quick Guide matches this scope.** It documents the solid and powder workflow only and explicitly directs users to ask staff about liquids and other accessories, so a newly trained user cannot read it as authorization for a workflow they were not taught.

### The Exercise

**The question participants answer:** how do spectra from two different materials compare, and what practical signs show whether each measurement was collected cleanly and with adequate contact?

The Quick Guide is the mechanical spine — participants follow its numbered sections while the trainer adds the sample choice, the reasoning, and the checkpoints. The quality check before unloading is the part that most repays trainer attention: it is where a user learns to judge their own data rather than trust whatever appeared.

### Choosing A Sample

**The workflow is fixed; the material is the trainer's choice.** No specific material is prescribed, so a session can be matched to a subject exercise, a research project, or a general walk-in group. Choosing a material per session is deliberate: it lets a trainer match the session to what a participant actually needs to measure, and it means sample-library readiness never blocks a training.

Requirements for any material: non-hazardous, clean, dry, stable, no risk of crumbling into the instrument or staining the plate, and a face that can make real contact with the diamond. Anything sharp, sticky, abrasive, very hard, reactive, odorous, unknown, staining, or difficult to clean is a stop-and-ask-staff conversation rather than a training sample.

What the pair must achieve:

| Requirement | Why it matters |
| --- | --- |
| Two solids with **visibly different spectra** | The comparison is the exercise. If a beginner cannot see the difference, there is nothing to discuss. Materials from different classes — a synthetic polymer against a natural fiber, say — separate more obviously than two similar plastics |
| At least one material that **demonstrates contact quality honestly** | A fibrous, powdered, lumpy, or curved solid shows what poor contact looks like, where two flat easy solids hide it. Choose this deliberately rather than avoiding it |
| A result **you can already recognize** | You must be able to tell poor contact from a genuine spectral difference in real time. That means having run these materials yourself |

**Do not describe expected band positions from memory or inference.** If you want to name specific bands during the session, work from a spectrum you actually collected on this instrument. Naming a band a material does not have teaches an error that is hard to unlearn, and a plausible-sounding contrast can be wrong: cellulose and acrylic both contain aliphatic C-H bonds, so "one has C-H features and the other does not" would be false for that pair.

Match the loading approach to what you chose, using [`#quick-method`]({% link instruments/ftir.md %}#quick-method). Fibers give weaker signal than a flat solid; if the spectrum is very weak, the fibers are bridging rather than contacting, so re-seat and retighten to the clutch.

Variations worth choosing on purpose:

* **A participant's own approved project sample.** Training on the material they will actually measure is worth more than a stand-in. Requires prior staff approval, and the comparison still needs a second material.
* **Course-specific materials**, when a subject sends students for a standard workflow on the materials they will use.
* **A deliberately awkward second solid** — lumpy, curved, or fibrous — when you want to teach contact quality harder.

For an unapproved project sample, run the session on your selected materials and route the project sample to staff. Do not evaluate an unknown sample mid-session under time pressure.

The legacy 3.000 coffee-roast exercise is a useful course-specific variation, but it should describe its output as a relative O-H-associated peak ratio — not percent water or direct moisture content — unless a calibrated quantitative method is developed and validated.

### Dividing The Work Among Three Participants

The session includes no separate individual skills demonstration. Participants may divide the workflow, provided the trainer makes the complete background → sample → save → clean cycle visible and involves everyone meaningfully.

* **Sample and cleaning lead:** samples, pressure tower, crystal cleaning, loading, and unloading, while gloved.
* **Instrument lead:** connection check, background, preview, and acquisition, with gloves removed.
* **Data and quality lead:** names and saves each spectrum, runs the quality check, identifies concerns.

Rotate between the two materials. Every participant should complete or narrate at least one glove transition and one save or quality check.

If a participant cannot safely do a step, involve them in another meaningful part rather than working around them silently — every participant needs a real role, not every step.

### Why The Glove Rule Gets This Much Attention

The safety orientation's glove demonstration sets up the ATR workflow directly: this instrument needs gloves for crystal cleaning and sample handling, then bare hands at the keyboard to collect. Every measurement cycle crosses that line several times, and it is the habit most often dropped once training ends.

### Stop And Ask For Help

State these during the session rather than assuming they are obvious:

* The sample is sharp, sticky, abrasive, very hard, reactive, odorous, unknown, staining, difficult to clean, or otherwise outside the routine workflow.
* The crystal is scratched, chipped, stained, visibly contaminated, or cannot be cleaned with the routine method.
* The accessory or pressure-tip choice is unclear.
* The instrument will not connect, or OMNIC reports an unfamiliar error.
* The background remains abnormal after cleaning and recollection.
* The spectrum remains weak or unusual after correcting obvious contact and contamination problems.

### If The Session Does Not Go As Planned

Covered once in [trainer readiness]({% link _staff-training/trainer-readiness.md %}#when-a-session-does-not-go-as-planned) rather than per instrument: nobody arrives, more people arrive than registered, an unapproved sample, a broken instrument, damage or injury, or a question you cannot answer. The FTIR-specific case is a sample you are unsure about — run the session on your own materials and route theirs to staff.

## Guide Status And Maintenance

| Field | Value |
| --- | --- |
| Instrument | {{ page.instrument_name }} |
| Status | {{ page.guide_review_state }} |
| Last reviewed | {{ page.last_reviewed }} |
| Guide owner | {{ page.guide_owner }} — see [guide owners]({% link _staff-training/access-and-logistics.md %}#guide-owners) |
| Quick Guide | Reviewed {{ page.quick_guide_reviewed }}. Laminated copy at the instrument: {% if page.quick_guide_laminated %}installed{% else %}**not yet installed**{% endif %} |
| LibCal template | **{{ page.libcal_template }}**, revised and verified {{ page.libcal_verified }}. Administrative record in `_admin/libcal-manual-update-guide.md` |

When this guide changes, review the [Quick Guide]({% link quick-guides/ftir.md %}), the [operating page]({% link instruments/ftir.md %}), the LibCal description, and the Moira information together. This guide names no specific material, so it does not need re-checking when the sample library changes.

**If the instrument page's SOP changes, re-check the session checklist against it.** Every canonical startup, operation, and shutdown bullet must have a checklist item; a new or removed SOP bullet must appear or disappear here. That correspondence is the contract between this guide and the page.

Practice the guide with a qualified Breakerspace Lab Assistant or other designated trainer, and print-test the Quick Guide, before marking either ready for routine delivery.
