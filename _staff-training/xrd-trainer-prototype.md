---
title: XRD Trainer Guide — Provisional Draft
description: Unpublished trainer-run-sheet composition draft for review.
published: false
guide_status: Provisional composition draft — incomplete
guide_revision: 2026-08-11
interactive_checklist: true
instrument_name: Malvern Panalytical Aeris Research XRD
moira_group: dmse-brkrspc-xrd
---

# Aeris Research XRD Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

> **REVIEW GAP — Level 1 boundary**
>
> **Decision or evidence required:** Decide whether HighScore background/peak work and Search Match are independent Level 1 practice, a brief capability preview, or later analysis.
>
> **Sources checked:** Canonical [HighScore Plus]({% link instruments/xrd.md %}#highscore), [Exercises]({% link instruments/xrd.md %}#exercises), and XRD work order.
>
> **Release effect:** This draft stops at supported measurement and data handoff; introductory analysis outcomes and timing are unapproved.

> **REVIEW GAP — stored programs**
>
> **Decision or evidence required:** Curate and document the routine stored-program list with meaningful names and intended Level 1 selection.
>
> **Sources checked:** Canonical [Running A Measurement Program]({% link instruments/xrd.md %}#measurement), [New Measurement Programs]({% link instruments/xrd.md %}#new-programs), and XRD work order.
>
> **Release effect:** Participants can locate the list and ask staff, but no program choice or session-duration assumption is approved.

> **REVIEW GAP — workstation access**
>
> **Decision or evidence required:** Confirm the companion workstation sign-in and whether the XRD Moira group has any role; record no credential here.
>
> **Sources checked:** Canonical [Exporting Data]({% link instruments/xrd.md %}#export), shared access reference, and XRD work order.
>
> **Release effect:** The touchscreen needs no sign-in and Moira grants no access, but the companion-workstation handoff cannot be approved.

> **REVIEW GAP — save/export**
>
> **Decision or evidence required:** Verify the exact raw/processed export, network-folder or USB, copy, naming, and participant handoff sequence.
>
> **Sources checked:** Canonical [Exporting Data]({% link instruments/xrd.md %}#export), [Instrument Shutdown]({% link instruments/xrd.md %}#shutdown), and XRD work order.
>
> **Release effect:** Export remains required, but the trainer cannot approve an exact route or prove participant retrieval from this draft.

> **REVIEW GAP — shutdown state**
>
> **Decision or evidence required:** Confirm the removable sample-changer cover's final position after all holders are removed.
>
> **Sources checked:** Canonical [Sample Loading]({% link instruments/xrd.md %}#loading), [Instrument Shutdown]({% link instruments/xrd.md %}#shutdown), and XRD work order.
>
> **Release effect:** Holder removal and storage are supported; the complete physical end state is not approved.

> **REVIEW GAP — participant artifact**
>
> **Decision or evidence required:** Audit and print-test the current XRD Quick Guide, complete its operational retrofit, and approve the participant artifact before use.
>
> **Sources checked:** Current [XRD Quick Guide]({% link quick-guides/xrd.md %}), XRD Quick Guide work order, staff-guide inventory, and XRD work order.
>
> **Release effect:** Neither the current printed guide nor the unpublished SOP/map prototype is approved for this provisional training workflow.

## Session checklist

Work in order. Timing bands are hypotheses for a maximum of three participants within 50 participant-facing minutes. The canonical [XRD operating page]({% link instruments/xrd.md %}) is authority for every technical step.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the Aeris is functioning normally, at least one changer position is free, and the enclosure cover is closed. Open the canonical page; do not substitute either XRD Quick Guide while participant-artifact review remains open.
* [ ] Prepare one compatible trainer-selected sample and the correct holder. Confirm the sample is non-hazardous, secured, flat, level, centered, and flush with the holder reference surface; prepare it at the sample-prep table and transfer the holder on the tray.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask their measurement goal, and state that this incomplete run sheet cannot replace the XRD participant artifact still awaiting review.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–19 minutes</span> Scope, safety, startup, and loading</p>

* [ ] Set the supported boundary: prepare and run one measurement on the Aeris; analysis remains blocked above. Review compatibility and holder choice. If grinding powder, contain dust, wear safety glasses, and ask staff about fine, floaty, irritating, magnetic, or uncertain material.
* [ ] State the enclosure rule: never defeat, bypass, or force an interlock or open the enclosure during a measurement. For an interlock fault, unusual noise, error, or damage, stop, leave the enclosure closed, and contact staff.
* [ ] Confirm a changer position remains empty. If needed, turn on the normally-on rear mains switch; with the cover closed and interlocks engaged, press the power button and turn the **HT keyswitch clockwise** to enable the generator.
* [ ] Participant removes the plastic sample-changer cover, places the prepared holder in a free position, notes that physical slot, and **replaces the plastic cover** before using the queue.

<p class="trainer-phase"><span>19–36 minutes</span> Queue, measurement, and data handoff</p>

* [ ] On the Aeris touchscreen, participant selects the changer position matching the physical slot. *Check: they verify the position rather than scanning the wrong or empty slot.* No touchscreen sign-in is required.
* [ ] Participant opens the stored-program list and chooses only a staff-approved program; if none looks right, stop and ask staff. Do not teach scan parameters or create a program while curation remains open.
* [ ] Participant enters a descriptive sample ID, edits the file name as needed, and checks the physical holder label, software position, identifiers, and program together before queueing.
* [ ] Participant starts the measurement or selects **Add to Queue** after the current sample, then confirms the intended sample actually appears in the queue. Do not open the enclosure while it runs.
* [ ] Using only the current posted or staff-provided handoff, export the raw scan and any processed plot to the networked companion workstation or a USB drive, then copy needed data to participant-controlled storage. Do not record or invent workstation credentials.
* [ ] Participant completes the X-ray safety log book for the session. Explain that the Moira group is communications-only and the paper log is the instrument's usage record.

<p class="trainer-phase"><span>36–45 minutes</span> Participant-led unloading and shutdown</p>

* [ ] Participant confirms every needed file was exported and retrievable before shutdown; the shared workstation is not a backup. Keep HighScore analysis outside this checklist until its boundary is decided.
* [ ] Participant presses the instrument power button, then turns the **HT keyswitch counter-clockwise** to switch off the generator.
* [ ] Participant removes the holder, returns it to storage, and leaves the sample-prep area clean. Stop short of claiming a final changer-cover position until the shutdown-state gap is resolved.

<p class="trainer-phase"><span>45–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return holders, tray, preparation tools, and supplies; record any program, queue, export, interlock, holder, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="comms-only" %}

## Trainer notes

Treat the Aeris touchscreen and companion workstation as separate surfaces. The Moira add is for communications only and must not be described as access. Keep identifiers in the instrument log and approved data path, never this repository. Do not turn the current public HighScore exercise into delivered Level 1 policy until its boundary is decided.
