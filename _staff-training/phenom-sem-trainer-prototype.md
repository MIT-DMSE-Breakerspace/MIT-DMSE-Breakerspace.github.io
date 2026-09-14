---
title: Phenom SEM Trainer Guide — Provisional Draft
description: Combined availability-flexible Phenom Pure and XL trainer run sheet for staff review.
permalink: /trainer/sem/
guide_status: Draft advisory
guide_revision: 2026-09-14
interactive_checklist: true
instrument_name: Thermo Fisher Phenom Pure and Phenom XL SEMs
moira_group: dmse-brkrspc-sem
---

# Phenom SEM Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Training may use the Phenom Pure, the Phenom XL, or both; it does not depend on both instruments being available.

## Session checklist

Work in order. Start about five minutes after the scheduled hour and allow about 50 participant-facing minutes. Select one primary instrument for the complete hands-on workflow. If both are available, compare both loading systems without repeating every shared imaging step.

<p class="trainer-phase"><span>Before the session</span> Instrument and sample readiness</p>

* [ ] Select **Pure** or **XL**; name a primary if both work. Check the selected loading hardware; if XL, its tray starts inside the closed compartment. Log in, open the software, and verify function; contact staff if neither works.
* [ ] At the sample-preparation table, set out mounting supplies and the selected Quick Guide. Prepare a known-good lab sample even when a participant has brought a candidate sample.

<p class="trainer-phase"><span>Welcome</span> Goals and room safety</p>

* [ ] Ask what participants hope to image and hand out the selected Quick Guide. Participant samples are welcome but not required; keep the lab fallback ready.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>Scope</span> Shared workflow and instrument differences</p>

Use this comparison to keep the two physical workflows distinct:

|  | Phenom Pure | Phenom XL |
| --- | --- | --- |
| Routine Level 1 use | Room-temperature imaging of one small mounted sample | High-vacuum imaging of larger or multiple mounted samples |
| Loading system | One **18 mm or smaller** stub in the labeled holder; sample below the holder's top edge | Removable tray; height dial turned **5–7 notches in the direction that lowers the sample** |
| Additional capability | Temperature-controlled stage is introduced, not demonstrated; no EDS | EDS is previewed by the trainer when the XL is available |

* [ ] Explain the scope: sample preparation and screening; the correct load/unload branch; NavCam; BSD/SED imaging; focus and navigation; imaging settings; useful image acquisition; retrievable data; and shutdown.
* [ ] Show the [SEM overview]({% link instruments/sem.md %}), [Pure page]({% link instruments/phenom-pure.md %}), and [XL page]({% link instruments/phenom-xl.md %}). On the selected page, point to the SOP, details, failures, and Quick Guide. Stop for unexpected motion, loading/connection errors, persistent image problems, outgassing/beam damage, or unfamiliar errors.
* [ ] Explain that the trainer logged in because participant access begins after closeout. Show the connected status and **Settings / Phenom / Status** for reconnecting.
* [ ] At the prep table, show gloves, stub tweezers, carbon stickers, stubs, and other approved supplies. Prepare and screen the sample there: non-hazardous, dry, secure, free of loose particles, and compatible with the selected mount, vacuum, and limits. If uncertain, use the lab sample.

<p class="trainer-phase"><span>Load</span> Follow one instrument branch</p>

* [ ] Prepare one loading system; never mix the rules:
  * **Pure:** Select the labeled room-temperature holder for the vacuum mode. With stub tweezers, seat one **18 mm or smaller** mount; keep the highest sample point **below the holder edge**. Do not use the dial rule.
  * **XL:** Eject and remove the tray. Seat mounts with stub tweezers; turn the height dial **5–7 notches in the direction that lowers the sample**. Do not use the Pure rule.
* [ ] Load and wait for NavCam:
  * **Pure:** Unlock in software, open the door manually, insert the holder, and close firmly.
  * **XL:** Recheck attachment and height, insert the tray, and close in software.

<p class="trainer-phase"><span>Image</span> NavCam, SEM, and data</p>

* [ ] Remove gloves. In **Settings / Customize**, set a useful label and save to `Breakerspace Files` or participant-controlled external storage. The local hard drive is not a backup.
* [ ] In NavCam, confirm the sample is present and unmoved; adjust magnification, brightness/contrast, and focus for navigation. Save the overview only if wanted for documentation.
* [ ] Select **Move to SEM**. SEM opens at the holder or tray center; use the NavCam overview to reach a region of interest.
* [ ] Practice navigation and focus: start low, use right-drag for quick manual focus, autofocus only on a contrasting center, increase magnification gradually, and refocus after imaging changes.
* [ ] Compare BSD and SED. Use high vacuum for XL Level 1, or the mode appropriate to the Pure holder and sample. Test accelerating voltage, beam intensity, and brightness/contrast combinations; start sensitive samples low and increase as needed. Refine automatic brightness/contrast manually.
* [ ] Navigate with **Scan Size 960 × 540** and **Medium Averaging**. Deviate only when the task needs a different speed/noise/detail balance.
* [ ] Acquire at several magnifications with suitable Scan Size and Averaging. Check focus, detail, brightness/contrast, charging, drift, washout, outgassing, vibration, and damage. Change one setting at a time; use the failure guidance if problems persist.
* [ ] In Gallery, find the images and demonstrate measurements or notes if useful. Keep the original when saving an annotated copy, and confirm all needed files are retrievable before unloading.
* [ ] Cover the instrument-specific capability boundary:
  * **Pure:** Introduce but do not demonstrate the temperature-controlled stage; it needs additional training. Pure has no EDS.
  * **XL:** If available, the trainer previews EDS and stops it before returning to SEM. Otherwise, explain it from the XL page and offer focused instruction later.

<p class="trainer-phase"><span>Unload</span> Follow the same instrument branch</p>

* [ ] Stop image or EDS acquisition, return to SEM if needed, and select eject/unload. Put on gloves before touching the holder or tray.
* [ ] Unload and reset the selected loading system:
  * **Pure:** Open manually, remove the sample, and return the holder to its drawer or stand.
  * **XL:** Open, remove the samples, return the tray to the compartment, and close.
  * **Either:** Ask staff before cleaning dirty hardware.

<p class="trainer-phase"><span>Finish</span> Shutdown and closeout</p>

* [ ] Reconfirm data retention, press **F11** if needed, close the Phenom software, and watch the trainer log off Windows. Confirm the microscope enters standby.
* [ ] Reset samples, mounts, tools, and prep supplies; clear the work areas and record any supply, instrument, sample, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" reservations=false %}

## Trainer notes

Training may be completed on either working instrument. When only one is available, use the comparison and the other instrument's Quick Guide or operating page to teach its different loading and unloading rules. Rotate participant roles while keeping the complete selected path visible.
