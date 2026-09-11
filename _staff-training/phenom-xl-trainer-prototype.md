---
title: Phenom XL Trainer Guide — Provisional Draft
description: Published trainer-run-sheet draft advisory for staff review.
permalink: /trainer/phenom-xl/
guide_status: Draft advisory
guide_revision: 2026-09-11
interactive_checklist: true
instrument_name: Thermo Fisher Phenom XL SEM
moira_group: dmse-brkrspc-sem
---

# Phenom XL Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. The review gap below is a release blocker, not an instruction for the trainer to improvise around.

> **REVIEW GAP — final tray/chamber state**
>
> **Decision or evidence required:** Confirm the final tray position, compartment state, and meaning of “stored correctly.”
>
> **Sources checked:** Canonical [Instrument Shutdown]({% link instruments/phenom-xl.md %}#shutdown), [Sample Unloading]({% link instruments/phenom-xl.md %}#unloading), and Phenom XL work order.
>
> **Release effect:** Canonical unloading is represented; final hardware state remains blocked.

## Session checklist

Work in order. Plan to start five minutes after the scheduled hour and complete the session in 50 minutes; timing is approximate. Refer to the [Phenom XL instrument page]({% link instruments/phenom-xl.md %}) or [Phenom XL manuals]({% link instruments/phenom-xl.md %}#manuals) if needed.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the normal XL starting condition: tray inside the closed sample compartment, Phenom software closed, Windows at the sign-in screen, and microscope in standby. Confirm the tray and loading area are clean, log in to the workstation, start the Phenom User Interface, and confirm the microscope connects and functions normally. Open the canonical operating page and prepare the printed Quick Guide.
* [ ] At the sample-preparation table, have gloves, stub tweezers, carbon stickers, stubs or other approved mounts, and known-good trainer-selected demonstration samples ready. Confirm each sample is non-hazardous, dry, compatible with high vacuum and the XL stage, and suitable for comparing BSD and SED imaging while refining an image at several magnifications.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask whether there is anything specific they are hoping to image, and give each person a Quick Guide to use during the workflow. Do not require participants to arrive with a sample or choose one before they understand the instrument's capabilities; use the prepared demonstration samples for the training workflow.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and loading</p>

* [ ] Explain what this training covers: prepare and load high-vacuum-compatible samples on the XL stage; navigate with NavCam; image with BSD and SED; and test and refine magnification, focus, brightness/contrast, accelerating voltage, beam intensity, detector selection, vacuum mode, Scan Size, and averaging to obtain a clean, useful SEM image. The trainer gives a brief EDS demonstration and may offer additional EDS training if time allows.
* [ ] Show the [SOP]({% link instruments/phenom-xl.md %}#sop), [detailed instructions]({% link instruments/phenom-xl.md %}#details), and [common failure modes]({% link instruments/phenom-xl.md %}#failures) on the XL operating page. State the stop conditions: a loose, wet, shedding, over-height, uncertain, or incompatible sample; unexpected sample or stage motion; connection failure; persistent charging, drift, washout, outgassing, beam damage, or poor focus; or an unfamiliar error.
* [ ] Tell participants you logged in before the session because their shared SEM Moira access begins after closeout. Show the connected instrument status and explain that trained users should use **Settings / Phenom / Status** to connect if the microscope does not connect automatically.
* [ ] Orient participants to the sample-preparation table, glove supply, stub-tweezer drawer, carbon stickers, stubs, and other approved mounting supplies. At the table, a participant puts on gloves, prepares and secures the sample to its mount, and removes loose particles away from the microscopes and electronics.
* [ ] Participant carries the prepared mount to the XL, opens the compartment with the software eject control, and removes the tray. Using stub tweezers, participant seats each mounted stub firmly, then uses the height-setting dial and turns it **5–7 notches in the direction that lowers the sample** to establish the required clearance. Never substitute the Pure holder-edge rule. Participant rechecks attachment and height, inserts the tray, closes with the software control, and waits for NavCam.
* [ ] Participant removes gloves before using the computer, sets a useful image label in **Settings / Customize**, and selects the `Breakerspace Files` shared drive as the recommended active save location. Another external storage location controlled by the participant may be used when appropriate; do not save needed data to the workstation's local hard drive.

<p class="trainer-phase"><span>18–40 minutes</span> Navigation, imaging, and data</p>

* [ ] In NavCam, participant confirms the expected sample is visible and did not shift, then uses the controls with mouse-over labels **magnification**, **brightness/contrast**, and **focus** until the view supports navigation. Saving a NavCam image is optional and useful only if the participant wants the optical overview for their documentation; it is not required for the later SEM workflow.
* [ ] Participant uses the upper-left icon immediately below the eject/open-close icon—the two circles with plus signs and an arrow between them, with mouse-over label **move to SEM**. SEM view opens at the center of the tray. Participant then uses the NavCam overview to navigate to a region of interest before beginning the brightness, contrast, and focus routine.
* [ ] Participant practices focus techniques: right-click and drag horizontally for quick manual focus, use autofocus only when the center has enough contrast, increase magnification gradually, and refocus after changes to magnification or imaging settings.
* [ ] Participant compares BSD and SED, confirms high-vacuum mode, and tries multiple combinations of accelerating voltage, beam intensity, and brightness/contrast to see what best reveals the feature of interest. Use automatic brightness/contrast only as a starting point, then refine it manually. Start with lower accelerating voltage and beam intensity and increase them only as needed, because beam-sensitive samples can be damaged by higher settings. Discuss how each setting changes contrast, surface detail, signal, resolution, charging, and beam-damage risk.
* [ ] For general live navigation, participant sets **Live Scan Size** to **960 × 540** and **Averaging** to **Medium**. Explain that these are the recommended navigation defaults and should be changed only when the sample or imaging task benefits from a different balance of speed, noise, and detail.
* [ ] Participant uses the camera control to acquire images at several magnifications with acquisition Scan Size and Averaging appropriate to the sample and purpose. Evaluate each test image for useful focus and detail, appropriate brightness and contrast, charging, drift, washout, outgassing, vibration, or beam damage; change one relevant setting at a time and reacquire until the image is clean and useful or stop and use the common failure guidance.
* [ ] Participant finds the acquired images in Gallery and keeps original files when adding measurements, notes, or an annotated copy.
* [ ] Trainer gives a brief EDS capability demonstration, keeps EDS operation trainer-led, and stops the EDS acquisition before returning to normal SEM observation. If the core imaging workflow is complete and time remains, offer additional EDS instruction relevant to participants' interests.
* [ ] Participant stops any running image or EDS acquisition and confirms every needed file is saved and retrievable from the `Breakerspace Files` shared drive or another external storage location controlled by the participant before unloading. The workstation's local hard drive is not a backup.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led unloading and shutdown</p>

* [ ] Participant returns to normal SEM view if needed, uses the eject/unload control to bring the tray to loading position, and puts gloves on before touching it.
* [ ] Participant opens the compartment, removes the sample, returns the tray to the sample compartment, and closes the door. If the tray is dirty, ask staff before cleaning; flag the unresolved final tray/chamber state rather than improvising.
* [ ] Participant confirms data retention, exits fullscreen with **F11** if needed, closes the Phenom software, and watches the trainer log off Windows; confirm the microscope enters standby.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return samples, stubs, tweezers, mounts, and prep supplies; leave the prep and loading areas clear and record any replenishment, damage, connection, motion, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Rotate loading, NavCam, SEM, acquisition, and unload roles while keeping the complete sequence visible. Hair is not a required sample. Keep the Pure loading rule out of this session even though both instruments share a Moira group. The trainer, not a participant, operates EDS during the Level 1 preview.
