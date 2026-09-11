---
title: Optical Microscope Trainer Guide
description: Structurally retrofitted session checklist for review of Olympus DSX-1000 optical microscope training.
guide_status: Needs operational check
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

> **Structural retrofit — operational review required.** This run sheet is ready for an instrument-side practice review, not routine training delivery. Complete the review gaps below, reconcile the participant Quick Guide, and run a timed practice session before changing its status.

> **REVIEW GAP — Level 1 workflow and controls**
>
> **Decision or evidence required:** Run the recorded Level 1 sequence at the instrument and verify its order, exact DSX control names, observable trainer checks, and fit within the participant workflow: **Best Image**, quick 2D map stitch, normal 2D capture, high-quality 2D area stitch with **Use as map image** deselected, and 3D capture.
>
> **Sources checked:** [public acquisition guidance]({% link instruments/optical.md %}#acquisition), the workflow-scope handoff in `_staff-training/README.md`, and the optical work order in `_staff/quick-guides/instrument-specifications.md`.
>
> **Release effect:** The Level 1 curriculum, control-map labels, timing bands, and participant-performance checks remain provisional until this run succeeds.

> **REVIEW GAP — save and copy workflow**
>
> **Decision or evidence required:** Verify the current LEXT save controls, the recommended save location, and the exact point at which each 2D, stitched, and 3D result is confirmed saved and retrievable. Clicking **2D Acquisition** opens the result in LEXT; do not invent an intermediate DSX dialog.
>
> **Sources checked:** [public saving guidance]({% link instruments/optical.md %}#data) and the optical handoff in `_staff/quick-guides/capture-integration-workorder-2026-08-12.md`.
>
> **Release effect:** Saving checks below identify the required outcome but cannot name a final control or destination until verified.

> **REVIEW GAP — final clearance state**
>
> **Decision or evidence required:** Observe shutdown on the current instrument and confirm the expected head, objective, stage, and sample-area clearance after DSX retracts the head and before the dust cover is installed.
>
> **Sources checked:** [canonical shutdown sequence]({% link instruments/optical.md %}#shutdown) and the optical release gates in `_staff/quick-guides/instrument-specifications.md`.
>
> **Release effect:** The checklist preserves the canonical shutdown sequence, but the final observable clearance check remains provisional.

> **REVIEW GAP — participant Quick Guide**
>
> **Decision or evidence required:** Approve the optical-specific multi-state control map, integrate and label only the selected DSX captures and matched focus pair, add and verify the QR asset, and complete a physical Letter duplex proof.
>
> **Sources checked:** [current provisional Quick Guide]({% link quick-guides/optical.md %}) and the optical handoff in `_staff/quick-guides/capture-integration-workorder-2026-08-12.md`.
>
> **Release effect:** Use the provisional Quick Guide only as a review artifact during the practice run; it is not approved for routine training, printing for use, or installation.

## Session checklist

Work in order. Plan for 50 participant-facing minutes within the one-hour calendar block; timing is a hypothesis to test during the required practice run. Use the [optical microscope operating page]({% link instruments/optical.md %}) as the technical authority.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the microscope is functioning normally and in its expected starting state: stage empty, motion path clear, and an appropriate objective installed. If the state differs or any control behaves unexpectedly, stop and use the [operating instructions]({% link instruments/optical.md %}#details) or ask staff. Log in to the workstation, open the operating page, and prepare a clearly marked review copy of the provisional Quick Guide.
* [ ] Prepare nitrile gloves and any sample-preparation tools needed. Select a clean, dry, stable, non-hazardous sample under the 5 kg stage limit with generous head/objective clearance, a repeatable orientation, and surface texture that changes visibly across observation modes. Image it beforehand unless you already know its usable focus and mode-comparison results.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask what they hope to observe, explain that the Quick Guide is under review, and give each person a review copy to use during the workflow.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, sample screening, and startup</p>

* [ ] Explain the proposed Level 1 scope being tested: compare observation modes with **Best Image**; make a quick 2D map stitch, normal 2D capture, high-quality 2D area stitch, and 3D capture; then save the results. Mention high-quality 3D stitching and briefly show LEXT analysis/report capability, but do not teach either as an independent workflow. Review [what the instrument can and cannot show]({% link instruments/optical.md %}#science).
* [ ] Have participants screen the sample using the [compatibility rules]({% link instruments/optical.md %}#materials). They should stop for collision risk; an unstable, unusually tall or heavy, sharp, fragile, wet, loose, powdery, odorous, unknown, or uncontained sample; uncertain objective configuration; unexpected stage, head, tilt, focus, or software behavior; or an unresolved control error.
* [ ] Tell participants you logged in before the session because their own Kerberos access starts after closeout. With the stage clear, have a participant follow the review Quick Guide while the trainer switches on the microscope, starts DSX, logs on to DSX as Guest, and acknowledges motorized movement. Lower the stage, confirm or change the objective, and move the head into tilt position using the [startup sequence]({% link instruments/optical.md %}#startup). *Check: everyone identifies the clearance decision that must precede software motion, objective changes, tilt, stitching, and 3D acquisition.*

<p class="trainer-phase"><span>18–40 minutes</span> Participant imaging workflow</p>

* [ ] With gloves on, a participant confirms the sample is stable and clear of fixed stage components, places it on the stage, then removes gloves before touching controls. Use the manual focusing knob for rough focus, the joystick to position the region, and the zoom-head controls for fine focus. *Check: the sample remains stable through stage movement and focus is reached without approaching a collision.*
* [ ] Participant uses **Best Image** to compare observation modes and selects the mode that best reveals the chosen feature. *Check: they can explain what became easier to see and why the most attractive image is not automatically the most useful one.*
* [ ] Participant makes a quick 2D stitch and uses it as the map image. Before motion, they recheck that the sample is stable and the complete stage path is clear.
* [ ] Participant makes a normal 2D capture, follows it into LEXT, and confirms it is saved and retrievable in the intended location. Record the sample, objective, zoom, observation mode, scale, orientation, acquisition type, and filename or location.
* [ ] Participant makes a slower high-quality 2D area stitch with **Use as map image** deselected, then confirms the result is saved and retrievable. *Check: they can distinguish the quick navigation map from the higher-quality area capture.*
* [ ] Participant sets and makes a 3D capture, then confirms it is saved and retrievable. Discuss how focus range, reflectivity, lighting, sample stability, and software assumptions affect the result; stop if clearance or safe focus limits are uncertain.
* [ ] Confirm the quick map stitch, normal 2D image, high-quality 2D area stitch, and 3D capture can all be retrieved. Have participants compare what each result supports and name one conclusion the images cannot establish by themselves.
* [ ] Briefly mention high-quality 3D stitching and show that LEXT can support later measurement, analysis, and reports. State that this is a capability preview: participants are not being taught or assessed on those workflows and LEXT controls do not belong on the primary Level 1 map.
* [ ] Ask participants to locate the SOP, observation-mode guidance, acquisition explanation, common failure modes, reservations, and help routes on the operating page. If time remains, repeat one acquisition at another magnification rather than adding an unreviewed workflow.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led shutdown</p>

* [ ] Participant verifies every needed capture and raw data file is saved and copied before unloading. *Check: each result is retrievable from the intended destination; the workstation itself is not treated as the only copy.*
* [ ] Wearing gloves again, participant removes the sample and confirms the stage is empty. Using the Quick Guide, they close DSX, select **yes** to exit and retract the head, wait for the software to close fully, switch off the microscope, and watch the trainer log out of Windows. Explain that users log out of their own accounts on later visits.
* [ ] Participant confirms the stage, sample area, and workstation are clean, checks the reviewed final head/objective/stage clearance state, and replaces the dust cover. Stop and ask staff if retraction is incomplete or the expected final state is not reached.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return the sample, tools, supplies, and provisional Quick Guide review copies to their proper locations. Record replenishment, damage, timing, unclear checklist language, control-label differences, or Quick Guide issues after the session.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

For three participants, rotate sample/safety, instrument-control, and data/quality roles while keeping the complete sequence visible to everyone. Use the standard trainer-selected sample first unless a project sample was approved and is equally safe and predictable. If time compresses, shorten the capability discussion—not saving, unloading, shutdown, or closeout. Glass slides go in the sharps container, never regular trash.

## Guide maintenance

When this guide changes, review the public operating page and SOP, Level 1 exercise, provisional Quick Guide map, LibCal description, and Moira information together. After the four review gaps are resolved, run a timed practice with a qualified trainer before marking the guide ready for routine delivery.
