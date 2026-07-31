# DSX-1000 Optical Microscope Staff Training Guide

This pilot guide standardizes a one-hour general optical-microscope training. It draws its operating content from the [canonical instrument page](../instruments/optical.md), including the two-page Quick Guide on that page. Do not maintain a separate operating sequence here.

## Guide Control

| Field | Value |
| --- | --- |
| Instrument | Olympus DSX-1000 digital optical microscope |
| Public instrument page and Quick Guide | [Optical microscope operating page](../instruments/optical.md#quick-guide) |
| LibCal training | Breakerspace general training calendar; confirm the current optical event template before release |
| Session length | 60 minutes |
| Maximum enrollment | 3 participants |
| Level 1 exercise | Compare observation modes and save a documented 2D image |
| Training sample | Stable textured sample kit; exact sample, identifier, and cabinet location require approval |
| Moira group | `dmse-brkrspc-optical` — rename from `dmse-brkrspc-dsx` pending; see [access and logistics](access-and-logistics.md#rename-status--verify-before-relying-on-this-table) |
| Guide owner | Breakerspace instrument owner; assign by name or role |
| Status | Pilot draft; operational-owner review required |
| Last reviewed | 2026-07-22 |

## Training Outcome

By the end of the session, participants should be able to:

* Explain what optical microscopy can show and when a different instrument is needed.
* Screen a sample for handling, stage-load, containment, stability, and motion-clearance concerns.
* Start the microscope, clear the stage, acknowledge motorized motion safely, load a sample, and focus.
* Use Best Image to compare observation modes and choose a mode that makes the feature of interest easier to interpret.
* Capture and save a 2D image while recording the objective, zoom, observation mode, scale, sample orientation, and save location.
* Remove the sample and complete the full software, head-retraction, power-off, logout, and dust-cover sequence.
* Find the Quick Guide, detailed operating instructions, common failure modes, reservations, and help pathways.

The session does not currently include a separate individual skills demonstration. Participants may rotate through the workflow, but the trainer must make every step visible and involve each participant in a meaningful sample-handling, instrument-control, acquisition, or interpretation task.

## Before The Session

### Instrument And Space

* [ ] Confirm that the microscope is functioning normally and in its expected starting state.
* [ ] Confirm that the stage is empty, the installed objective is appropriate, and the full motion path is clear.
* [ ] Open the [public operating page and Quick Guide](../instruments/optical.md#quick-guide) on the workstation.
* [ ] Confirm that DSX starts normally and that the training save location is available.
* [ ] Prepare nitrile gloves and any sample-preparation tools needed for the approved sample kit.
* [ ] Confirm that three participants can see the stage, console, and display without obstructing movement.

### Training Sample

* [ ] Retrieve the approved stable textured sample or sample kit from its assigned location.
* [ ] Confirm that it is clean, dry, stable, non-hazardous, and short enough to provide generous objective and head clearance.
* [ ] Review the expected brightfield image and at least one alternate mode that reveals a different feature.
* [ ] Confirm that the kit has a stable orientation or recognizable region that allows different training groups to obtain comparable results.

### Participants

* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.
* [ ] Note project goals or accommodations shared in advance without adding private participant information to this repository.

## Suggested 60-Minute Agenda

| Time | Activity |
| --- | --- |
| 0-5 minutes | Welcome, participant goals, the public operating page, and the Quick Guide. |
| 5-12 minutes | What optical microscopy shows, compatible samples, motorized motion, clearance, and stop conditions. |
| 12-20 minutes | Trainer-led startup, glove transitions, objective check, stage clearance, and safe sample loading. |
| 20-42 minutes | Participants focus, navigate, compare modes, capture a 2D image, and save the result. |
| 42-50 minutes | Review the image, settings, scale, file location, and what the result can and cannot support. |
| 50-56 minutes | Participant-led unloading and shutdown using the Quick Guide. |
| 56-60 minutes | Reservations, access closeout, help pathways, and final questions. |

## Level 1 Exercise: Compare Observation Modes

### Question Or Goal

Which observation mode makes the selected surface feature easiest to see and explain, and what settings must be recorded so another user can understand the image?

### Sample And Preparation

Use the approved stable textured sample. Before adoption, record its sample-library identifier or kit name, cabinet location, normal orientation, expected feature, and replenishment or replacement plan in Guide Control.

The former 3.000 filter exercise is a useful course-specific variation, but it should not become the default general exercise until all pore measurements use the same quantity and units. A three-point radius and a point-to-point diameter must not be averaged as if they were equivalent.

### Participant Workflow

1. Inspect the sample and identify possible height, stability, contamination, or motion-clearance concerns.
2. Start the microscope and DSX software using the Quick Guide.
3. Lower the stage, load the sample, remove gloves, and bring the selected region into focus.
4. Capture or preview the region in brightfield.
5. Use Best Image to compare all suitable modes, then choose one alternate mode that better reveals a specific feature.
6. Capture a 2D image in the selected mode.
7. Save the image in the training location with a useful filename.
8. Record the objective, zoom, mode, scale, sample orientation, and save location.
9. Explain what is visible and identify one conclusion the image cannot support by itself.
10. Wear gloves, remove the sample, and complete shutdown using the Quick Guide.

### Suggested Roles For Three Participants

* **Sample and safety lead:** screens the sample, confirms clearance, handles loading, and removes the sample.
* **Instrument lead:** starts DSX, focuses, navigates, compares modes, and captures the image.
* **Data and quality lead:** records settings, verifies the scale and save location, and leads interpretation.

Rotate controls during comparison or repeat acquisition when time permits. Every participant should identify at least one motorized-motion stop condition.

### Success Criteria

* [ ] A stable, focused 2D image was collected and saved in the intended location.
* [ ] The record includes objective, zoom, observation mode, scale, orientation, and filename or location.
* [ ] Participants can explain why the chosen mode is useful for the selected feature.
* [ ] Participants know that 3D output depends on focus, reflectivity, lighting, and software assumptions.
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
* [ ] Add each attendee to `dmse-brkrspc-optical`. This group is being renamed from `dmse-brkrspc-dsx`; if the new name is not yet in [WebMoira](https://groups.mit.edu/webmoira/), use the old one. Do not record attendee Kerberos usernames in this file.
* [ ] Send every attendee an invitation to the Breakerspace Slack workspace.
* [ ] Remind participants that physical tap access is processed separately after their one-time Qualtrics record is complete.
* [ ] For first-time users, confirm that they created an MIT Dropbox for Business account and requested DMSE Breakerspace Team membership, or help them with the self-service steps.
* [ ] Point participants to reservations, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] Return the training sample kit to its assigned location and record damage or replenishment needs in the appropriate operational system.
* [ ] Record any instrument, guide, exercise, or sample-library issue discovered during the session.

## Trainer Notes And Variations

* For participants with project samples, use the standard sample first unless the project sample was approved and is equally safe and predictable.
* A second acquisition at another magnification is a useful extension when time permits.
* The 3.000 filter-pore activity can be used for a course cohort after the measurement definition, saving workflow, and expected values are standardized.
* Do not allow a visually impressive 3D rendering to substitute for discussion of measurement limits and recorded settings.

## Guide Maintenance

When this guide changes, review the public Quick Guide and operating page, approved sample kit, sample-library record, LibCal description, and Moira information together. Practice the guide with a staff or student-staff trainer before marking it ready for routine delivery.
