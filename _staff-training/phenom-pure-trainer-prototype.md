---
title: Phenom Pure Trainer Guide — Provisional Draft
description: Published trainer-run-sheet draft advisory for staff review.
permalink: /trainer/phenom-pure/
guide_status: Draft advisory
guide_revision: 2026-09-11
interactive_checklist: true
instrument_name: Thermo Fisher Phenom Pure SEM
moira_group: dmse-brkrspc-sem
---

# Phenom Pure Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. The review gap below is a release blocker, not an instruction for the trainer to improvise around.

> **REVIEW GAP — final holder/chamber state**
>
> **Decision or evidence required:** Confirm the final holder location, compartment state, and meaning of “stored correctly.”
>
> **Sources checked:** Canonical [Instrument Shutdown]({% link instruments/phenom-pure.md %}#shutdown), [Sample Unloading]({% link instruments/phenom-pure.md %}#unloading), and Phenom Pure work order.
>
> **Release effect:** Canonical unloading is represented; final hardware state remains blocked.

## Session checklist

Work in order. Plan to start five minutes after the scheduled hour and complete the session in 50 minutes; timing is approximate. Refer to the [Phenom Pure instrument page]({% link instruments/phenom-pure.md %}) or [Phenom Pure manuals]({% link instruments/phenom-pure.md %}#manuals) if needed.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the room-temperature holder and loading area are clean and the microscope is in its expected starting state. Log in to the workstation, start the Phenom User Interface, and confirm the Pure connects and functions normally. Open the canonical operating page and prepare the printed Quick Guide.
* [ ] At the sample-preparation table, have gloves, stub tweezers, carbon stickers, **18 mm or smaller stubs** or other approved mounts, and a known-good trainer-selected room-temperature demonstration sample ready. Confirm the sample is non-hazardous, dry, compatible with the Pure, and suitable for navigation and imaging at several magnifications.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask whether there is anything specific they are hoping to image, and give each person a Quick Guide to use during the workflow. Do not require participants to arrive with a sample or choose one before they understand the instrument's capabilities; use the prepared demonstration sample for the training workflow.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and loading</p>

* [ ] Explain what this training covers: prepare and load a room-temperature sample; navigate with NavCam; image with BSD and SED; and test and refine magnification, focus, brightness/contrast, accelerating voltage, beam intensity, detector selection, vacuum mode, Scan Size, and averaging to obtain a clean, useful SEM image. Introduce the Pure's temperature-controlled stage and what it can support, but do not demonstrate it during this session; cold-stage operation requires additional training and more time. The Pure does not have EDS.
* [ ] Show the [SOP]({% link instruments/phenom-pure.md %}#sop), [detailed instructions]({% link instruments/phenom-pure.md %}#details), and [common failure modes]({% link instruments/phenom-pure.md %}#failures) on the Pure operating page. State the stop conditions: a loose, wet-unfrozen, shedding, over-height, uncertain, or incompatible sample; unclear holder or stage choice; unexpected sample or stage motion; connection or holder errors; persistent charging, drift, washout, outgassing, beam damage, or poor focus; or an unfamiliar error.
* [ ] Tell participants you logged in before the session because their shared SEM Moira access begins after closeout. Show the connected instrument status and explain that trained users should use **Settings / Phenom / Status** to connect if the microscope does not connect automatically.
* [ ] Orient participants to the sample-preparation table, glove supply, stub-tweezer drawer, carbon stickers, stubs, and other approved mounting supplies. At the table, a participant puts on gloves, prepares and secures the single sample to its mount, and removes loose particles away from the microscopes and electronics.
* [ ] Participant carries the prepared mount to the Pure and selects the labeled room-temperature holder appropriate for the intended vacuum mode. Ask staff if holder choice is unclear. Using stub tweezers, participant places the mount in the holder and confirms its highest point is **below the top edge of the holder**; never apply the XL tray-height rule. Participant then uses the software eject button to unlock the compartment, opens the door manually, inserts the holder, closes the door firmly, and waits for NavCam.
* [ ] Participant removes gloves before using the computer, sets a useful image label in **Settings / Customize**, and selects the `Breakerspace Files` shared drive as the recommended active save location. Another external storage location controlled by the participant may be used when appropriate; do not save needed data to the workstation's local hard drive.

<p class="trainer-phase"><span>18–40 minutes</span> Navigation, imaging, and data</p>

* [ ] In NavCam, participant confirms the expected sample is visible and did not shift, then adjusts brightness, contrast, and focus until the view supports navigation. Saving a NavCam image is optional and useful only if the participant wants the optical overview for their documentation; it is not required for the later SEM workflow.
* [ ] Participant uses **Move to SEM**. SEM view opens at the center of the holder. Participant then uses the NavCam overview to navigate to a region of interest before beginning the brightness, contrast, and focus routine.
* [ ] Participant practices focus techniques: right-click and drag horizontally for quick manual focus, use autofocus only when the center has enough contrast, increase magnification gradually, and refocus after changes to magnification or imaging settings.
* [ ] Participant compares BSD and SED, confirms the vacuum mode appropriate to the holder and sample, and tries multiple combinations of accelerating voltage, beam intensity, and brightness/contrast to see what best reveals the feature of interest. Use automatic brightness/contrast only as a starting point, then refine it manually. Start with lower accelerating voltage and beam intensity and increase them only as needed, because beam-sensitive samples can be damaged by higher settings. Discuss how each setting changes contrast, surface detail, signal, resolution, charging, and beam-damage risk.
* [ ] For general live navigation, participant sets **Live Scan Size** to **960 × 540** and **Averaging** to **Medium**. Explain that these are the recommended navigation defaults and should be changed only when the sample or imaging task benefits from a different balance of speed, noise, and detail.
* [ ] Participant uses the camera control to acquire images at several magnifications with acquisition Scan Size and Averaging appropriate to the sample and purpose. Evaluate each test image for useful focus and detail, appropriate brightness and contrast, charging, drift, washout, outgassing, vibration, or beam damage; change one relevant setting at a time and reacquire until the image is clean and useful or stop and use the common failure guidance.
* [ ] Participant finds the acquired images in Gallery and keeps original files when adding measurements, notes, or an annotated copy.
* [ ] Participant stops any running image acquisition and confirms every needed file is saved and retrievable from the `Breakerspace Files` shared drive or another external storage location controlled by the participant before unloading. The workstation's local hard drive is not a backup.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led unloading and shutdown</p>

* [ ] Participant returns to normal SEM view if needed, uses the eject/unload control to bring the sample to loading position, and puts gloves on before touching the holder.
* [ ] Participant opens the compartment, removes the sample, and returns the holder to its drawer or stand. If the holder is dirty, ask staff before cleaning; flag the unresolved final holder/chamber state rather than improvising.
* [ ] Participant confirms data retention, exits fullscreen with **F11** if needed, closes the Phenom software, and watches the trainer log off Windows; confirm the microscope enters standby.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return samples, stubs, mounts, and prep supplies; leave the prep and loading areas clear and record any replenishment, damage, connection, motion, holder, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Rotate loading, NavCam, SEM, acquisition, and unload roles while keeping the complete sequence visible. Hair is not a required sample. Shared SEM access does not authorize users to transfer the Pure loading rule to the XL. Keep cold-stage work outside this Level 1 run sheet.
