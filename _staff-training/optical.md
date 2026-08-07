---
title: Optical Microscope Trainer Guide
description: Session checklist and teaching outline for a one-hour Olympus DSX-1000 optical microscope training.
guide_status: Needs retrofit and operational check
guide_revision: 2026-08-07
interactive_checklist: true
trainer_links:
  - label: Participant Quick Guide
    url: /quick-guides/optical/
  - label: Operating page and SOP
    url: /instruments/optical.html#sop
  - label: Training calendar
    url: https://breakerspace.libcal.com/calendar?cid=19408
  - label: WebMoira
    url: https://groups.mit.edu/webmoira/
---

# DSX-1000 Optical Microscope Staff Training Guide

This pilot guide standardizes a one-hour general optical-microscope training. It draws its operating content from the [canonical instrument page]({% link instruments/optical.md %}) and its sibling [two-page Quick Guide]({% link quick-guides/optical.md %}). Do not maintain a separate operating sequence here.

<p class="guidance-note"><strong>This guide predates the current checklist model and still needs a structural retrofit.</strong> Its Level 1 operations were corrected on 2026-08-07 to record the workflow the lab manager actually teaches. The exact DSX control names, timing, interface map, sample-selection text, and continuous-flow checklist still require an optical-specific operational review before routine handoff.</p>


## Guide Control

| Field | Value |
| --- | --- |
| Instrument | Olympus DSX-1000 digital optical microscope |
| Public instrument page and Quick Guide | [Optical microscope operating page]({% link instruments/optical.md %}) · [Quick Guide]({% link quick-guides/optical.md %}) |
| LibCal training | Template: **DSX-1000 Digital Optical Microscope Training**. Max 3, MIT LibAuth, opens 2 weeks prior. Revised and verified 2026-08-04; the administrative completion record is maintained in `_admin/libcal-manual-update-guide.md` |
| Session length | 60 minutes |
| Maximum enrollment | 3 participants |
| Level 1 exercise | Select an observation mode; make a quick 2D map stitch, a normal 2D capture, a high-quality 2D area stitch, and a 3D capture |
| Capability previews only | High-quality 3D stitching is mentioned; LEXT analysis and report preparation are shown briefly, without teaching either workflow for independent use |
| Training sample | **Trainer-selected.** A stable, well-supported sample with surface texture that reads differently in different observation modes. No specific material is prescribed |
| Moira group | `dmse-brkrspc-optical` (see [access and logistics]({% link _staff-training/access-and-logistics.md %}#moira-groups-by-instrument)) |
| Guide owner | Lab manager (see [guide owners]({% link _staff-training/access-and-logistics.md %}#guide-owners)) |
| Status | Pilot draft; operational-owner review required |
| Last reviewed | 2026-08-07 |

## Training Outcome

By the end of the session, participants should be able to:

* Locate the exit route, campus phone, fire alarm pull, sharps container, and sink-area emergency equipment, and know to dial 100 from a campus phone or 617-253-1212 otherwise.
* Explain what optical microscopy can show and when a different instrument is needed.
* Screen a sample for handling, stage-load, containment, stability, and motion-clearance concerns.
* Start the microscope, clear the stage, acknowledge motorized motion safely, load a sample, and focus.
* Use Best Image to compare observation modes and choose a mode that makes the feature of interest easier to interpret.
* Make a quick 2D stitch for the map image, save a normal 2D capture, make a slower high-quality 2D area stitch with **Use as map image** deselected, and make a 3D capture.
* Distinguish the operations taught for independent use from the high-quality 3D-stitch and LEXT capability previews.
* Record the objective, zoom, observation mode, scale, sample orientation, acquisition type, and save location.
* Remove the sample and complete the full software, head-retraction, power-off, logout, and dust-cover sequence.
* Find the Quick Guide, detailed operating instructions, common failure modes, reservations, and help pathways.

The session does not currently include a separate individual skills demonstration. Participants may rotate through the workflow, but the trainer must make every step visible and involve each participant in a meaningful sample-handling, instrument-control, acquisition, or interpretation task.

## Before The Session

### Instrument And Space

* [ ] Confirm that the microscope is functioning normally and in its expected starting state.
* [ ] Confirm that the stage is empty, the installed objective is appropriate, and the full motion path is clear.
* [ ] Open the [public operating page]({% link instruments/optical.md %}) and [Quick Guide]({% link quick-guides/optical.md %}) on the workstation.
* [ ] Confirm that DSX starts normally and that the training save location is available.
* [ ] Prepare nitrile gloves and any sample-preparation tools the selected sample needs.
* [ ] Confirm that three participants can see the stage, console, and display without obstructing movement.

### Training Sample

Choose a sample that satisfies the criteria below. No specific material is prescribed, so the session can be matched to a subject exercise or research project.

* [ ] Select and retrieve the sample.
* [ ] Confirm that it is clean, dry, stable, non-hazardous, and short enough to provide generous objective and head clearance.
* [ ] Confirm it has **surface texture that reads differently in different observation modes** — that contrast is the exercise.
* [ ] **Confirm you have imaged it yourself**, so you know the expected brightfield result and at least one alternate mode that reveals a different feature. If you have not, image it before the session.
* [ ] Confirm it has a stable orientation or recognizable region, so different participants can obtain comparable results.

### Participants

* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.
* [ ] Note project goals or accommodations shared in advance without adding private participant information to this repository.

## Suggested 60-Minute Agenda

| Time | Activity |
| --- | --- |
| 0-3 minutes | Welcome, participant goals, the public operating page, and the Quick Guide. |
| 3-8 minutes | [Lab safety orientation]({% link _staff-training/lab-safety-orientation.md %}): exit route, eyewash and shower, sharps, campus phone, alarm pull, food boundary, gloves. Run this every session. |
| 8-14 minutes | What optical microscopy shows, compatible samples, motorized motion, clearance, and stop conditions. |
| 14-20 minutes | Trainer-led startup, glove transitions, objective check, stage clearance, and safe sample loading. |
| 20-44 minutes | Participants focus, compare modes, make the quick 2D map stitch, normal 2D capture, high-quality 2D area stitch, and 3D capture, and save the results. |
| 44-49 minutes | Mention high-quality 3D stitching and briefly show LEXT analysis/report capability without teaching the workflow. |
| 49-55 minutes | Review settings, scale, file locations, and what the results can and cannot support. |
| 55-60 minutes | Participant-led unloading/shutdown, reservations, access closeout, help pathways, and final questions. Test this compression in the required practice run. |

If the session uses glass slides, connect the sharps-disposal point from the safety orientation to this instrument directly — slides go in the sharps container, not the regular trash.

## Level 1 Exercise: Core DSX Acquisition Modes

### Question Or Goal

Which observation mode best reveals the selected feature, and how do the quick map stitch, normal 2D capture, high-quality 2D area stitch, and 3D capture serve different observation needs?

### Sample Selection

**The workflow is fixed; the material is the trainer's choice.** Requirements: clean, dry, stable, non-hazardous, short enough for generous objective and head clearance, and carrying surface texture that reads differently across observation modes. The trainer must have imaged the sample before the session, so a focus, lighting, or clearance problem is recognizable in real time.

If a later round of development adopts specific approved samples, record them in Guide Control and here; keep the workflow text and the Quick Guide sample-agnostic.

The former 3.000 filter exercise is a useful course-specific variation, but it should not become the default general exercise until all pore measurements use the same quantity and units. A three-point radius and a point-to-point diameter must not be averaged as if they were equivalent.

### Participant Workflow

1. Inspect the sample and identify possible height, stability, contamination, or motion-clearance concerns.
2. Start the microscope and DSX software using the Quick Guide.
3. Lower the stage, load the sample, remove gloves, and bring the selected region into focus.
4. Obtain a usable live image and use **Best Image** to select an observation mode suited to the sample.
5. Make a quick 2D stitch and use it as the map image.
6. Capture and save a normal 2D image.
7. Make a slower high-quality 2D stitch for area capture with **Use as map image** deselected, then save it.
8. Capture and save a 3D image.
9. Record the objective, zoom, mode, scale, sample orientation, acquisition types, and save locations.
10. Mention that high-quality 3D stitching is available, but do not run it during the introductory session.
11. Briefly open or show LEXT analysis/report capability. State explicitly that this is a preview so participants know the capability exists, not a workflow they are expected to retain or use independently from this training.
12. Explain what the results show and identify one conclusion they cannot support by themselves.
13. Wear gloves, remove the sample, and complete shutdown using the Quick Guide.

### Suggested Roles For Three Participants

* **Sample and safety lead:** screens the sample, confirms clearance, handles loading, and removes the sample.
* **Instrument lead:** starts DSX, focuses, navigates, compares modes, and captures the image.
* **Data and quality lead:** records settings, verifies the scale and save location, and leads interpretation.

Rotate controls during comparison or repeat acquisition when time permits. Every participant should identify at least one motorized-motion stop condition.

### Success Criteria

* [ ] A usable quick 2D map stitch, normal 2D image, high-quality 2D area stitch, and 3D capture were produced and saved in the intended location.
* [ ] The high-quality 2D area stitch was made with **Use as map image** deselected.
* [ ] The record includes objective, zoom, observation mode, scale, orientation, acquisition type, and filename or location.
* [ ] Participants can explain why the chosen mode is useful for the selected feature.
* [ ] Participants know that 3D output depends on focus, reflectivity, lighting, and software assumptions.
* [ ] Participants can distinguish the operations taught for independent use from the high-quality 3D-stitch and LEXT previews.
* [ ] Participants can find the Quick Guide, detailed instructions, common failure modes, reservations, and help pathways.
* [ ] Participants complete the sample-removal and shutdown sequence without leaving the stage occupied.

### Stop And Ask For Help

* A sample might collide with the objective, microscope head, stage, or fixture.
* A sample is unstable, unusually tall or heavy, sharp, fragile, wet, loose, powdery, odorous, unknown, or contains uncontained liquid.
* The stage, head, tilt, objective, focus, or software behaves unexpectedly.
* The objective configuration or safe motion path is uncertain.
* A control error persists after following the documented common failure mode.

## Post-Training Checklist

Complete every item before considering the session closed.

* [ ] Confirm that the sample has been removed, the stage is empty, the head retracted normally, the microscope is off, Windows is logged out, and the dust cover is on.
* [ ] Confirm that participants know where their image was saved and how to access it.
* [ ] Ask participants to locate the Quick Guide, detailed operating instructions, common failure modes, and reservation link.
* [ ] Add each attendee to `dmse-brkrspc-optical`. Do not record attendee Kerberos usernames in this file.
* [ ] Send every attendee an invitation to the Breakerspace Slack workspace.
* [ ] Remind participants that physical tap access is processed separately after their one-time Qualtrics record is complete.
* [ ] For first-time users, confirm that they created an MIT Dropbox for Business account and requested DMSE Breakerspace Team membership, or help them with the self-service steps.
* [ ] Point participants to reservations, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] Return the training sample and supplies to their locations and record damage or replenishment needs in the appropriate operational system.
* [ ] Record any instrument, guide, exercise, or sample-library issue discovered during the session.

## Trainer Notes And Variations

* For participants with project samples, use the standard sample first unless the project sample was approved and is equally safe and predictable.
* A second acquisition at another magnification is an optional extension when time permits; it is not a substitute for the confirmed stitch and 3D sequence.
* The 3.000 filter-pore activity can be used for a course cohort after the measurement definition, saving workflow, and expected values are standardized.
* Do not allow a visually impressive 3D rendering to substitute for discussion of measurement limits and recorded settings.
* Do not teach LEXT analysis or report preparation as part of this introductory checklist. The short preview only establishes that those capabilities exist.

## Guide Maintenance

When this guide changes, review the public Quick Guide and operating page, the LibCal description, and the Moira information together. This guide names no specific material, so it does not need re-checking when the sample library changes. Practice the guide with a qualified Breakerspace Lab Assistant or other designated trainer before marking it ready for routine delivery.
