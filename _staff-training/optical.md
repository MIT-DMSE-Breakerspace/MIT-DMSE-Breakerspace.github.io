---
title: Optical Microscope Trainer Guide
description: Reviewed session checklist for Olympus DSX-1000 optical microscope training.
guide_status: Current
guide_revision: 2026-09-11
interactive_checklist: true
instrument_name: Olympus DSX-1000 Digital Optical Microscope
moira_group: dmse-brkrspc-optical
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

## Session checklist

Work in order. Plan for 50 participant-facing minutes within the one-hour calendar block; timing is approximate. Use the [optical microscope operating page]({% link instruments/optical.md %}) as the technical authority.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the microscope is functioning normally and in its expected starting state: stage empty, motion path clear, and the lens attachment holding the 3x and 10x long-working-distance objectives installed with the 3x objective selected. If the state differs or any control behaves unexpectedly, stop and use the [operating instructions]({% link instruments/optical.md %}#details) or ask staff. Log in to the workstation, open the operating page, and prepare the printed Quick Guide.
* [ ] Prepare nitrile gloves and any sample-preparation tools needed. Select a clean, dry, stable, non-hazardous sample under the 5 kg stage limit with generous head/objective clearance, a repeatable orientation, and surface texture that changes visibly across observation modes. Image it beforehand unless you already know its usable focus and mode-comparison results.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask what they hope to observe, and give each person a Quick Guide to use during the workflow.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, sample screening, and startup</p>

* [ ] Explain what this training covers: compare observation modes with **Best Image**; make a quick 2D map stitch; use the map to navigate; switch from the 3x to the 10x objective; make a normal 2D capture, high-quality 2D area stitch, and 3D capture; then save the results. Introduce high-quality 3D stitching and LEXT measurement, analysis, and reporting as optional extensions after the core imaging workflow. Review [what the instrument can and cannot show]({% link instruments/optical.md %}#science).
* [ ] Show the SOP, detailed instructions, and common failure modes sections on the instrument page. State the stop conditions: collision risk; an incompatible, unstable, unusually tall or heavy, sharp, fragile, wet, loose, powdery, odorous, unknown, or uncontained sample; uncertain objective configuration; unexpected stage, head, tilt, focus, or software behavior; or an unresolved control error.
* [ ] Have participants screen the sample using the [compatibility rules]({% link instruments/optical.md %}#materials). *Check: they identify its handling, stage-load, containment, stability, and motion-clearance concerns before startup or loading.*
* [ ] Tell participants you logged in before the session because their own Kerberos access starts after closeout. With the stage clear, have a participant follow the Quick Guide while the trainer switches on the microscope, starts DSX, logs on to DSX as Guest, and acknowledges motorized movement. Lower the stage, confirm or change the objective, and move the head into tilt position using the [startup sequence]({% link instruments/optical.md %}#startup). *Check: everyone identifies the clearance decision that must precede software motion, objective changes, tilt, stitching, and 3D acquisition.*

<p class="trainer-phase"><span>18–40 minutes</span> Participant imaging workflow</p>

* [ ] With gloves on, a participant confirms the sample is stable and clear of fixed stage components, places it on the stage, then removes gloves before touching controls. Use the manual focusing knob for rough focus, the joystick to position the region, and the zoom-head controls for fine focus. *Check: the sample remains stable through stage movement and focus is reached without approaching a collision.*
* [ ] Participant uses **Best Image** to compare observation modes and selects the mode that best reveals the chosen feature. *Check: they can identify which observation mode best reveals the feature of interest and explain the visual evidence supporting that choice.*
* [ ] With the 3x objective selected, participant makes a quick 2D stitch and uses it as the map image. Before motion, they recheck that the sample is stable and the complete stage path is clear.
* [ ] Participant uses the map image to navigate to a feature of interest. The trainer demonstrates switching the lens attachment from the 3x to the 10x objective using the documented objective-change procedure, then the participant re-establishes clearance and focus, increases the optical zoom as appropriate, and uses **Best Image** again. *Check: they compare what changed at higher magnification and recognize that simple polarization is unavailable with the 3x long-working-distance objective but available with the 10x, although it may not improve every sample.*
* [ ] Participant makes a normal 2D capture of the selected feature, follows it into LEXT, and confirms it is saved and retrievable in the intended location. Record the sample, objective, zoom, observation mode, scale, orientation, acquisition type, and filename or location.
* [ ] Participant makes a slower high-quality 2D area stitch with **Use as map image deselected**, then confirms the result is saved and retrievable. *Check: they can distinguish the quick navigation map from the higher-quality area capture.*
* [ ] Participant sets and makes a 3D capture, then confirms it is saved and retrievable. Discuss how focus range, reflectivity, lighting, sample stability, and software assumptions affect the result; stop if clearance or safe focus limits are uncertain.
* [ ] Confirm the quick map stitch, normal 2D image, high-quality 2D area stitch, and 3D capture can all be retrieved. Have participants compare what each result supports and name one conclusion the images cannot establish by themselves.
* [ ] Mention high-quality 3D stitching and show representative LEXT measurement, analysis, and reporting capabilities so participants understand the range of tools available after acquisition. If the core imaging workflow is complete and adequate time remains, teach selected analysis steps relevant to the participant's interests. The trainer and participants may also agree to extend the session when everyone has availability. Make clear that this optional extension is not required to complete the core imaging training.
* [ ] Ask participants to locate the SOP, observation-mode guidance, acquisition explanation, common failure modes, reservations, and help routes on the operating page. If time remains, repeat one acquisition at another magnification rather than adding another workflow.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led shutdown</p>

* [ ] Participant verifies every needed capture and raw data file is saved and copied before unloading. Do not save images on the local workstation hard drive; use the `Breakerspace Files` shared drive or another external storage location chosen by the participant. *Check: each result is retrievable from the intended destination.*
* [ ] Wearing gloves again, participant removes the sample and confirms the stage is empty. Using the Quick Guide, they close DSX, select **yes** to exit and retract the head, wait for the software to close fully, switch off the microscope, and watch the trainer log out of Windows. Explain that users log out of their own accounts on later visits.
* [ ] Participant confirms the stage, sample area, and workstation are clean, waits for the head to retract fully, and replaces the dust cover. Stop and ask staff if retraction is incomplete.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return the sample, tools, supplies, and Quick Guides to their proper locations. Record replenishment, damage, timing, unclear checklist language, control-label differences, or Quick Guide issues after the session.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

For three participants, rotate sample/safety, instrument-control, and data/quality roles while keeping the complete sequence visible to everyone. Use the standard trainer-selected sample first unless a project sample was approved and is equally safe and predictable. If time compresses, shorten the capability discussion—not saving, unloading, shutdown, or closeout. Glass slides go in the sharps container, never regular trash.

## Guide maintenance

When this guide changes, review the public operating page and SOP, Level 1 exercise, Quick Guide map, LibCal description, and Moira information together.
