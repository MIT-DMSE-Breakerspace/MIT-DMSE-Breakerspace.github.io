---
title: FTIR Trainer Guide
description: Reviewed session checklist and teaching outline for Thermo Scientific Nicolet iS5 FTIR training.
guide_status: Current
guide_revision: 2026-08-31
interactive_checklist: true
instrument_name: Thermo Scientific Nicolet iS5 FTIR Spectrometer
moira_group: dmse-brkrspc-ftir
---

# Nicolet iS5 FTIR Trainer Guide

## Session checklist

Work in order. Plan to start five minutes after the scheduled hour and complete the session in 50 minutes; timing is approximate. Refer to the [FTIR instrument page]({% link instruments/ftir.md %}) or [FTIR manuals]({% link instruments/ftir.md %}#manuals) if needed.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the FTIR is powered on and functioning normally; if not, use the [startup instructions]({% link instruments/ftir.md %}#startup) or ask staff. Log in to the workstation, verify the [FTIR instrument page]({% link instruments/ftir.md %}) is open in the browser, and take out the printed FTIR Quick Guide.
* [ ] Prepare nitrile gloves, Kimwipes, and isopropyl alcohol, and confirm the self-leveling pressure tip is installed. Select two approved, non-hazardous solids that are clean, dry, stable, able to contact the diamond, and expected to show visibly different overall patterns; run them beforehand unless you already know their good and bad measurement states.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask their measurement goal, and make sure everyone has a Quick Guide.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and background</p>

* [ ] Explain what this training covers: measure two trainer-selected solids with routine iD7 ATR, compare their overall spectral patterns, and check measurement quality. Database identification, liquids, the volatiles cover, and other accessories are not covered; those require later or staff-guided training. Review [compatibility limits]({% link instruments/ftir.md %}#materials).
* [ ] Show the SOP, detailed instructions, and failure modes sections on the instrument page. State the stop conditions: uncertain or incompatible sample, damaged or persistently dirty crystal, failed connection, unfamiliar error, or an unresolved weak or unusual spectrum.
* [ ] Tell participants you logged in before the session because their own login starts working after closeout. Have one participant operate the workstation, start OMNIC, confirm **System Status** has a green check, and confirm **Preview Data Collection** is enabled. If the status is not a green check, stop and ask staff.
* [ ] With gloves on for samples, crystal, tower, pressure tip, wipes, and solvent—and off for keyboard, mouse, and screen—the participant removes the cover, cleans center-outward with isopropyl alcohol on a Kimwipe, dries the crystal and plate, and confirms no residue, powder, fibers, or droplets remain.
* [ ] Participant selects **Collect Background** on the clean, dry, bare, **unclamped** crystal, observes the live preview, then selects **Start Collection** for the full background scan. *Check that the participant can tell when OMNIC is showing a live preview and when the full background collection is running.*

<p class="trainer-phase"><span>18–40 minutes</span> Two solid-sample cycles and comparison</p>

* [ ] Participant selects **Collect Sample** to begin the live preview, covers the crystal with the first solid, centers the pressure tower and self-leveling tip over the sample, and tightens only until the clutch slips. *Check that the preview changes from near zero to a spectrum, confirming crystal contact, and that the clutch is not forced.*
* [ ] Participant uses the live preview to judge contact, makes adjustments if the signal is weak, then selects **Start Collection** for the full spectrum. Judge quality before unloading and stop for staff if the signal or any negative or unexpected feature remains unresolved.

**If negative features suggest a contaminated background:** gloves on → release the pressure tower and unload the sample → clean and dry the crystal and plate → gloves off → select **Collect Background**, confirm the crystal is bare and unclamped, and select **Start Collection** → reload and collect the sample again. If negative features remain, stop and ask staff.

* [ ] After OMNIC prompts, participant gives the finished spectrum a descriptive name, selects it, and saves it individually. *Check: the needed spectrum is saved and retrievable before unloading.*
* [ ] Wearing gloves again, participant unloads the first solid, then cleans and dries the crystal and surrounding plate completely before the next sample.
* [ ] Participant repeats the full cycle on the second material with less prompting.
* [ ] Compare the two spectra at the level of overall patterns and measurement quality, not material identification. Confirm every needed spectrum was individually saved and can be retrieved from the `Breakerspace Files` drive (the Dropbox-synced shared folder) or another external storage location chosen by the participant; the workstation itself is not a backup.
* [ ] Briefly introduce other FTIR sampling options—nonvolatile and volatile liquids, transmission, diffuse reflectance, and other accessories—and let participants know they can arrange additional training with staff as needed.
* [ ] If time allows, run any staff-approved participant samples they brought.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led shutdown</p>

* [ ] Participant confirms data retention, closes OMNIC, and watches the trainer log off the workstation; explain that users log off their own account on later visits.
* [ ] Gloved participant cleans and dries the crystal and plate, replaces and clamps the cover with the pressure tower, removes samples, wipes, and waste, and leaves the FTIR **powered on**. *Check: the complete physical end state is restored with reduced prompting.*

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return the two solids, solvent, wipes, and printed FTIR Quick Guide to their proper locations; record replenishment, damage, or guide issues after the session.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Participants may divide roles, but everyone should see the full background → sample → save → clean cycle. Rotate handling, software, and quality decisions. Use the printed FTIR Quick Guide and [FTIR instrument page]({% link instruments/ftir.md %}) as needed.
