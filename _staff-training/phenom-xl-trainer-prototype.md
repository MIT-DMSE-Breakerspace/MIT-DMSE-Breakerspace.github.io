---
title: Phenom XL Trainer Guide — Provisional Draft
description: Published trainer-run-sheet draft advisory for staff review.
permalink: /trainer/phenom-xl/
guide_status: Draft advisory
guide_revision: 2026-08-20
interactive_checklist: true
instrument_name: Thermo Fisher Phenom XL SEM
moira_group: dmse-brkrspc-sem
---

# Phenom XL Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

> **REVIEW GAP — image quality decision**
>
> **Decision or evidence required:** Define the observable SEM image state adequate for Level 1 acquisition without collapsing distinct failure modes into one threshold.
>
> **Sources checked:** Canonical [SEM View]({% link instruments/phenom-xl.md %}#sem-view), [Common Failure Modes]({% link instruments/phenom-xl.md %}#failures), and Phenom XL work order.
>
> **Release effect:** Control practice is supported; an assessable quality pass is not.

> **REVIEW GAP — save/export**
>
> **Decision or evidence required:** Verify the project-label, save-folder, copy/export, and file-naming convention.
>
> **Sources checked:** Canonical [Project Label And Save Location]({% link instruments/phenom-xl.md %}#customize), [Data Processing And Analysis]({% link instruments/phenom-xl.md %}#data), and Phenom XL work order.
>
> **Release effect:** Saving and copying remain required; exact destinations and names are unapproved.

> **REVIEW GAP — final tray/chamber state**
>
> **Decision or evidence required:** Confirm the final tray position, compartment state, and meaning of “stored correctly.”
>
> **Sources checked:** Canonical [Instrument Shutdown]({% link instruments/phenom-xl.md %}#shutdown), [Sample Unloading]({% link instruments/phenom-xl.md %}#unloading), and Phenom XL work order.
>
> **Release effect:** Canonical unloading is represented; final hardware state remains blocked.

> **REVIEW GAP — participant artifact**
>
> **Decision or evidence required:** Review, proof, approve, and install a printed Phenom XL Quick Guide.
>
> **Sources checked:** Canonical [Quick Actions]({% link instruments/phenom-xl.md %}#quick-actions), unpublished Phenom XL Quick Guide prototype, and Phenom XL work order.
>
> **Release effect:** The unpublished prototype cannot be used or described as installed.

## Session checklist

Work in order. Plan to start five minutes after the scheduled hour and complete the session in 50 minutes; timing is approximate. Refer to the [Phenom XL instrument page]({% link instruments/phenom-xl.md %}) or [Phenom XL manuals]({% link instruments/phenom-xl.md %}#manuals) if needed.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the normal XL starting condition: tray inside the closed sample compartment, Phenom software closed, Windows at the sign-in screen, and microscope in standby. Confirm the tray and loading area are clean and open the canonical page; do not place or describe the unpublished Quick Guide prototype as an approved instrument aid.
* [ ] Prepare gloves, stub tweezers, approved mounts, and trainer-selected samples. Confirm each sample is non-hazardous, dry, firmly attached, free of loose particles, compatible with the XL, and suitable for showing navigation and imaging at several magnifications. Run unfamiliar samples before the session.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask what they hope to image, and state that this incomplete run sheet cannot replace the missing approved printed Quick Guide.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and loading</p>

* [ ] Set the supported boundary: XL core imaging with NavCam and SEM view includes a brief trainer-operated EDS capability preview. Advertise optional Level 2 EDS-focused training, but do not describe it as a prerequisite for independent EDS use. Review sample limits and stop for loose, wet, shedding, over-height, uncertain, or incompatible material; unexpected motion; connection failure; persistent imaging problems; or unfamiliar errors.
* [ ] **Trainer logs in while participants watch** because their shared SEM Moira access begins after closeout. Start the Phenom User Interface, wake the microscope if needed, and use **Settings / Phenom / Status** to connect if it does not connect automatically.
* [ ] At the external sample-prep table, participant wears gloves, mounts the sample securely, removes loose particles away from the microscope and electronics, and measures the tallest point approximately **5–7 mm below the top edge of the XL tray** unless staff instruct otherwise. Never substitute the Pure holder-edge rule.
* [ ] Participant uses stub tweezers for mounted stubs, opens the compartment with the software eject control, removes the tray, seats each sample firmly, rechecks attachment and height, inserts the tray, closes with the software control, and waits for NavCam.
* [ ] Participant removes gloves before the computer and sets a useful image label and active save folder in **Settings / Customize**; use only the current approved local convention pending the save/export decision above.

<p class="trainer-phase"><span>18–40 minutes</span> Navigation, imaging, and data</p>

* [ ] In NavCam, participant confirms the expected sample is visible and did not shift, then uses the icon controls with mouse-over labels **magnification**, **brightness/contrast**, and **focus** until the view supports navigation. Save a NavCam image only when useful for documenting later image locations.
* [ ] Participant selects a region and uses the upper-left icon immediately below the eject/open-close icon—the two circles with plus signs and an arrow between them, with mouse-over label **move to SEM**—then starts zoomed out on a recognizable feature in SEM view. Do not imply that NavCam and SEM controls share one screen.
* [ ] Participant practices SEM focus and brightness/contrast, uses automatic adjustment only as a starting point, and inspects the top-panel voltage, beam intensity, **Scan Size** (image resolution), and averaging state without changing to an invented default. *Check: the participant can locate each function; image acceptance remains blocked above.*
* [ ] Participant increases magnification gradually and refocuses as needed after changes. Stop and use the canonical failure guidance for persistent charging, drift, washout, outgassing, beam damage, or poor focus rather than forcing an acquisition.
* [ ] Participant uses the camera control to acquire images at several magnifications with the current **Scan Size** and **Averaging** settings, then finds the images in Gallery. Keep original files when adding measurements, notes, or an annotated copy.
* [ ] Trainer gives the brief EDS capability preview, keeps EDS operation trainer-controlled, stops the EDS acquisition before returning to normal SEM observation, and points participants to the optional Level 2 EDS-focused training.
* [ ] Participant stops any running image or EDS acquisition, confirms needed files are saved in the active folder, and copies needed data off the workstation before unloading; do not invent the unresolved export convention.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led unloading and shutdown</p>

* [ ] Participant returns to normal SEM view if needed, uses the eject/unload control to bring the tray to loading position, and puts gloves on before touching it.
* [ ] Participant opens the compartment, removes the sample, returns the tray to the sample compartment, and closes the door. If the tray is dirty, ask staff before cleaning; flag the unresolved final tray/chamber state rather than improvising.
* [ ] Participant confirms data retention, exits fullscreen with **F11** if needed, closes the Phenom software, and watches the trainer log off Windows; confirm the microscope enters standby.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return samples, stubs, tweezers, mounts, and prep supplies; leave the prep and loading areas clear and record any replenishment, damage, connection, motion, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Rotate loading, NavCam, SEM, acquisition, and unload roles while keeping the complete sequence visible. Hair is not a required sample. Keep the Pure loading rule out of this session even though both instruments share a Moira group. The trainer, not a participant, operates EDS during the Level 1 preview.
