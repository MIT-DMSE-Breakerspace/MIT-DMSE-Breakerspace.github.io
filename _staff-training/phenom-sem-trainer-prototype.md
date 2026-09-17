---
title: Phenom SEM Trainer Guide — Provisional Draft
description: Combined availability-flexible Phenom Pure and XL trainer run sheet for staff review.
permalink: /trainer/sem/
guide_status: Draft advisory
guide_revision: 2026-09-16
interactive_checklist: true
instrument_name: Thermo Fisher Phenom Pure and Phenom XL SEMs
moira_group: dmse-brkrspc-sem
---

# Phenom SEM Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Training may use the Phenom Pure, the Phenom XL, or both; it does not depend on both instruments being available.

## Session checklist

Work in order. Start about five minutes after the scheduled hour and allow about 50 participant-facing minutes. Select one primary instrument for the complete hands-on workflow. If both are available, compare both loading systems without repeating every shared imaging step.

Participants perform the hands-on steps with trainer coaching; trainer demonstrations are identified explicitly. Rotate sample handling, instrument control, and data review so everyone participates and sees the complete workflow. Use the selected Quick Guide throughout, with less prompting during unloading and shutdown.

<p class="trainer-phase"><span>Before the session</span> Instrument and sample readiness</p>

* [ ] Select **Pure** or **XL** and check that its holder or tray and loading area are clean. For XL, confirm the tray starts inside the closed compartment, software closed, Windows at sign-in, and microscope in standby. Log in, open Phenom, and verify connection and normal function; contact staff if neither instrument is ready.
* [ ] Set out mounting supplies and the selected Quick Guide at the prep table. Prepare a compatible lab sample with features suitable for BSD/SED comparison and imaging at several magnifications; run it beforehand unless you know its usable results and common problems. Keep it ready even when participants bring a sample.

<p class="trainer-phase"><span>Welcome</span> Goals and room safety</p>

* [ ] Ask what participants hope to image and hand out the selected Quick Guide. Participant samples are welcome but not required; keep the lab fallback ready.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>Scope</span> Shared workflow and instrument differences</p>

Use this comparison to keep the two physical workflows distinct:

|  | Phenom Pure | Phenom XL |
| --- | --- | --- |
| Routine Level 1 use | Room-temperature imaging of one small mounted sample | High-vacuum imaging of larger or multiple mounted samples |
| Loading system | One **18 mm or smaller** stub in the labeled holder; sample below the holder's top edge | Removable tray; tallest sample point approximately **5–7 mm below the tray's top edge** |
| Additional capability | Temperature-controlled stage is introduced, not demonstrated; no EDS | EDS is previewed by the trainer when the XL is available |

* [ ] Explain the goal: prepare and load a compatible sample, find a feature with NavCam and SEM, compare detector and beam settings, acquire useful images at several magnifications, save retrievable files, and unload and shut down correctly.
* [ ] Show the [SEM overview]({% link instruments/sem.md %}), [Pure page]({% link instruments/phenom-pure.md %}), and [XL page]({% link instruments/phenom-xl.md %}). On the selected page, point to the SOP, details, failures, and Quick Guide. Stop for unexpected motion, loading/connection errors, persistent image problems, outgassing/beam damage, or unfamiliar errors.
* [ ] Explain that the trainer logged in because participant access begins after closeout. Show the connected status and **Settings / Phenom / Status**, where users connect if the microscope does not connect automatically.
* [ ] Show the prep-table gloves, stub tweezers, carbon stickers, stubs, and approved supplies. Have participants screen and mount the sample there: non-hazardous, dry, secure, free of loose particles, and compatible with the selected mount and vacuum. Remove loose particles away from the microscopes and electronics; use the lab sample if compatibility is uncertain.

<p class="trainer-phase"><span>Load</span> Follow one instrument branch</p>

* [ ] Prepare the selected loading system. Before insertion, have the participant identify and check its height limit:
  * **[Pure loading]({% link instruments/phenom-pure.md %}#loading):** Select the labeled room-temperature holder for the vacuum mode; ask staff if the holder choice is unclear. With stub tweezers, seat one **18 mm or smaller** mount and keep the highest sample point **below the holder edge**.
  * **[XL loading]({% link instruments/phenom-xl.md %}#loading):** Eject and remove the tray. Seat mounts with stub tweezers, then turn the height dial **5–7 notches in the direction that lowers the sample**. Confirm the tallest sample point is approximately **5–7 mm below the tray's top edge**.
* [ ] Recheck secure attachment and height, then load and wait for NavCam:
  * **Pure:** Unlock in software, open the door manually, insert the holder, and close firmly.
  * **XL:** Insert the tray and close in software.

<p class="trainer-phase"><span>Image</span> NavCam, SEM, and data</p>

* [ ] Remove gloves. In **Settings / Customize**, set a descriptive image label and select the active save folder on `Breakerspace Files` or participant-controlled external storage before acquisition. The local hard drive is not a backup.
* [ ] In NavCam, confirm the expected sample is visible and has not shifted; use magnification, brightness/contrast, and focus as needed to make the overview useful for navigation. Save the overview only if wanted for documentation.
* [ ] Select **Move to SEM**. SEM opens at the holder or tray center; have the participant use the NavCam overview to navigate to a recognizable feature for the imaging comparisons.
* [ ] Set the **live navigation** controls to **Scan Size 960 × 540** and **Medium Averaging**. Explain the balance between responsiveness, noise, and detail; change these defaults only when the sample or task benefits.
* [ ] Use **automatic brightness/contrast** for the SEM display; it normally gives excellent results. Explain that it changes how the data is drawn, while accelerating voltage and beam intensity affect the data collected.
* [ ] Practice focus on the chosen feature: start at low magnification, use right-click and horizontal drag for manual focus, and try autofocus with a contrasting feature near the center. Increase magnification gradually, refocusing after imaging changes.
* [ ] **Compare detectors:** view the same feature with BSD and SED. Ask what changed and which view better reveals the feature of interest. Use high vacuum for XL Level 1, or the mode appropriate to the Pure holder and sample.
* [ ] **Compare beam settings:** vary accelerating voltage and beam intensity one at a time and discuss changes in visible detail, signal, charging, or sample damage. For beam-sensitive samples, begin with lower voltage and intensity and increase only as needed. Refocus and run automatic brightness/contrast after changes.
* [ ] **Acquire and assess:** use the camera control and default **acquisition** Scan Size and Averaging to take a test image. Check focus, useful detail, charging, drift, washout, vibration, or sample changes. Increase Scan Size or Averaging only if useful and the sample is stable; longer acquisitions can worsen problems. Acquire at several magnifications; stop and consult the failure guidance for persistent problems, outgassing, or beam damage.
* [ ] Have the participant find the images in Gallery and confirm they are retrievable from the chosen storage. The trainer may demonstrate measurements or notes if useful; save annotations as a new file and retain the original.
* [ ] Cover the instrument-specific capability boundary:
  * **Pure:** Introduce but do not demonstrate the temperature-controlled stage; it needs additional training. Pure has no EDS.
  * **XL:** If available, the trainer previews EDS and stops it before returning to SEM. Otherwise, explain it from the XL page and offer focused instruction later.

<p class="trainer-phase"><span>Unload</span> Follow the same instrument branch</p>

* [ ] Stop image or EDS acquisition, return to SEM if needed, and select eject/unload. Put on gloves before touching the holder or tray.
* [ ] Use the Quick Guide to unload and restore the selected loading system; have the participant confirm its final state:
  * **[Pure unloading]({% link instruments/phenom-pure.md %}#unloading):** Open manually, remove the sample, and return the holder to its drawer or stand.
  * **[XL unloading]({% link instruments/phenom-xl.md %}#unloading):** Open, remove the samples, return the tray to the compartment, and close.
  * **Either:** Ask staff before cleaning dirty hardware.

<p class="trainer-phase"><span>Finish</span> Shutdown and closeout</p>

* [ ] Reconfirm data retention, press **F11** if needed, close the Phenom software, and watch the trainer log off Windows. Confirm the microscope enters standby.
* [ ] Reset samples, mounts, tools, and prep supplies; clear the work areas and record any supply, instrument, sample, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" reservations=false %}

## Trainer notes

When only one instrument is available, use the comparison and the other instrument's Quick Guide or operating page to teach its different loading and unloading rules. If time is short, shorten the capability discussion while preserving saving, unloading, shutdown, and closeout.
