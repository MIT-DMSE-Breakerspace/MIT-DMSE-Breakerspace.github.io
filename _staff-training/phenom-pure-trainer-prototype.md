---
title: Phenom Pure Trainer Guide — Provisional Draft
description: Unpublished trainer-run-sheet composition draft for review.
published: false
guide_status: Provisional composition draft — incomplete
guide_revision: 2026-08-10
interactive_checklist: true
instrument_name: Thermo Fisher Phenom Pure SEM
moira_group: dmse-brkrspc-sem
---

# Phenom Pure Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

> **REVIEW GAP — image quality decision**
>
> **Decision or evidence required:** Define the observable LiveSEM state adequate for Level 1 acquisition without collapsing focus, charging, drift, washout, outgassing, and beam damage into one threshold.
>
> **Sources checked:** Canonical [LiveSEM View]({% link instruments/phenom-pure.md %}#live-sem), [Common Failure Modes]({% link instruments/phenom-pure.md %}#failures), and Phenom Pure work order.
>
> **Release effect:** Control practice is supported; an assessable quality pass is not.

> **REVIEW GAP — save/export**
>
> **Decision or evidence required:** Verify the project-label, save-folder, copy/export, and file-naming convention.
>
> **Sources checked:** Canonical [Project Label And Save Location]({% link instruments/phenom-pure.md %}#customize), [Data Processing And Analysis]({% link instruments/phenom-pure.md %}#data), and Phenom Pure work order.
>
> **Release effect:** Saving and copying remain required; exact destinations and names are unapproved.

> **REVIEW GAP — final holder/chamber state**
>
> **Decision or evidence required:** Confirm the final holder location, compartment state, and meaning of “stored correctly.”
>
> **Sources checked:** Canonical [Instrument Shutdown]({% link instruments/phenom-pure.md %}#shutdown), [Sample Unloading]({% link instruments/phenom-pure.md %}#unloading), and Phenom Pure work order.
>
> **Release effect:** Canonical unloading is represented; final hardware state remains blocked.

> **REVIEW GAP — participant artifact**
>
> **Decision or evidence required:** Review, proof, approve, and install a printed Phenom Pure Quick Guide.
>
> **Sources checked:** Canonical [Quick Actions]({% link instruments/phenom-pure.md %}#quick-actions), unpublished Phenom Pure Quick Guide prototype, and Phenom Pure work order.
>
> **Release effect:** The unpublished prototype cannot be used or described as installed.

## Session checklist

Work in order. Plan to start five minutes after the scheduled hour and complete the session in 50 minutes; timing is approximate. Refer to the [Phenom Pure instrument page]({% link instruments/phenom-pure.md %}) or [Phenom Pure manuals]({% link instruments/phenom-pure.md %}#manuals) if needed.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the Pure is connected and functioning normally, its room-temperature holder and loading area are clean, and the microscope can reach its canonical ready state. Open the canonical page; do not place or describe the unpublished Quick Guide prototype as an approved instrument aid.
* [ ] Prepare gloves, approved mounts, and one trainer-selected room-temperature sample on an **18 mm or smaller stub**. Confirm it is non-hazardous, dry, firmly attached, free of loose particles, compatible with the Pure, and suitable for navigation and imaging at several magnifications. Run unfamiliar samples beforehand.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask what they hope to image, and state that this incomplete run sheet cannot replace the missing approved printed Quick Guide.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and loading</p>

* [ ] Set the supported boundary: room-temperature Pure imaging with NavCam and LiveSEM. Cold-stage observation remains Level 2; the Pure has no EDS. Stop for loose, wet-unfrozen, shedding, over-height, uncertain, or incompatible material; unclear holder choice; unexpected motion; connection or holder errors; persistent imaging problems; or unfamiliar errors.
* [ ] **Trainer logs in while participants watch** because their shared SEM Moira access begins after closeout. Start the Phenom User Interface, wake the microscope if needed, and use **Settings / Phenom / Status** to connect if it does not connect automatically.
* [ ] At the external sample-prep table, participant wears gloves, secures the single sample, removes loose particles away from the microscope and electronics, and confirms its highest point is **below the top edge of the Pure holder**. Never apply the XL tray-height rule.
* [ ] Participant chooses the labeled room-temperature holder appropriate for the intended vacuum mode, uses the software eject button to unlock the compartment, opens the door manually, inserts the holder, closes the door firmly, and waits for NavCam. Ask staff if holder choice is unclear.
* [ ] Participant removes gloves before the computer and sets a useful image label and active save folder in **Settings / Customize**; use only the current approved local convention pending the save/export decision above.

<p class="trainer-phase"><span>18–40 minutes</span> Navigation, imaging, and data</p>

* [ ] In NavCam, participant confirms the expected sample is visible and did not shift, then adjusts brightness, contrast, and focus until the view supports navigation. Save a NavCam image only when useful for documenting later image locations.
* [ ] Participant selects a region and uses **Move to SEM**, starts zoomed out on a recognizable feature, and enters LiveSEM without implying that NavCam and LiveSEM controls share one screen.
* [ ] Participant practices LiveSEM focus and brightness/contrast, uses automatic adjustment only as a starting point, and inspects the Pure top-panel voltage, beam/intensity, resolution, and averaging state without changing to an invented default. *Check: the participant locates each function; image acceptance remains blocked above.*
* [ ] Participant increases magnification gradually and refocuses as needed after changes. Stop and use canonical failure guidance for persistent charging, drift, washout, outgassing, beam damage, or poor focus rather than forcing an acquisition.
* [ ] Participant uses the camera control to acquire images at several magnifications with the current resolution and averaging settings, then finds them in Gallery. Keep original files when adding measurements, notes, or an annotated copy.
* [ ] Participant stops any running image acquisition, confirms needed files are saved in the active folder, and copies needed data off the workstation before unloading; do not invent the unresolved export convention.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led unloading and shutdown</p>

* [ ] Participant returns to normal SEM view if needed, uses the eject/unload control to bring the sample to loading position, and puts gloves on before touching the holder.
* [ ] Participant opens the compartment, removes the sample, and returns the holder to its drawer or stand. If the holder is dirty, ask staff before cleaning; flag the unresolved final holder/chamber state rather than improvising.
* [ ] Participant confirms data retention, exits fullscreen with **F11** if needed, closes the Phenom software, and watches the trainer log off Windows; confirm the microscope enters standby.

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return samples, stubs, mounts, and prep supplies; leave the prep and loading areas clear and record any replenishment, damage, connection, motion, holder, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Rotate loading, NavCam, LiveSEM, acquisition, and unload roles while keeping the complete sequence visible. Hair is not a required sample. Shared SEM access does not authorize users to transfer the Pure loading rule to the XL. Keep cold-stage work outside this Level 1 run sheet.
