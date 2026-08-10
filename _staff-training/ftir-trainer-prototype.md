---
title: FTIR Trainer Guide — Provisional Draft
description: Unpublished trainer-run-sheet composition draft for review.
published: false
guide_status: Provisional composition draft — incomplete
guide_revision: 2026-08-10
interactive_checklist: true
instrument_name: Thermo Scientific Nicolet iS5 FTIR Spectrometer
moira_group: dmse-brkrspc-ftir
---

# Nicolet iS5 FTIR Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

> **REVIEW GAP — background quality decision**
>
> **Decision or evidence required:** Define the observable acceptance criterion for a good iD7 ATR background preview; do not substitute “clean background” or a guessed spectrum shape.
>
> **Sources checked:** Canonical [Background Collection]({% link instruments/ftir.md %}#background), [Common Failure Modes]({% link instruments/ftir.md %}#failures), and FTIR work order.
>
> **Release effect:** Background collection is runnable, but a participant-facing quality decision is not approved.

> **REVIEW GAP — connection state**
>
> **Decision or evidence required:** Record the System Status states that distinguish normal from failed connection.
>
> **Sources checked:** Canonical [Instrument Startup]({% link instruments/ftir.md %}#startup), [Common Failure Modes]({% link instruments/ftir.md %}#failures), and FTIR work order.
>
> **Release effect:** System Status remains required, but failed-state recognition cannot be assessed.

> **REVIEW GAP — background recovery cycle**
>
> **Decision or evidence required:** Canonically document the complete unload, clean, new-background, reload, and recollect cycle.
>
> **Sources checked:** Canonical [Background Collection]({% link instruments/ftir.md %}#background), [Sample Collection]({% link instruments/ftir.md %}#sample), [Common Failure Modes]({% link instruments/ftir.md %}#failures), and FTIR work order.
>
> **Release effect:** The draft cannot teach background recovery as a runnable sequence.

> **REVIEW GAP — participant artifact**
>
> **Decision or evidence required:** Review, proof, approve, and install the compact Quick Guide.
>
> **Sources checked:** Canonical [Quick Actions]({% link instruments/ftir.md %}#quick-actions), current [FTIR Quick Guide]({% link quick-guides/ftir.md %}), and FTIR work order.
>
> **Release effect:** Participants must use the current approved printed guide, not the compact prototype.

## Session checklist

Work in order. Timing bands are hypotheses for a maximum of three participants within 50 participant-facing minutes. The canonical [FTIR operating page]({% link instruments/ftir.md %}) is authority for every technical step.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the FTIR is powered on and functioning normally, with a clean, dry, covered, and clamped crystal; if it is unexpectedly off or abnormal, use the canonical [startup]({% link instruments/ftir.md %}#startup) or ask staff. Put the current approved printed Quick Guide and canonical page at the instrument.
* [ ] Prepare nitrile gloves, Kimwipes, isopropyl alcohol, and appropriate pressure tips. Select two approved, non-hazardous solids that are clean, dry, stable, able to contact the diamond, and expected to show visibly different overall patterns; run them beforehand unless you already know their good and bad measurement states.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask their measurement goal, and hand them the current approved printed Quick Guide for the hands-on sequence.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–18 minutes</span> Scope, startup, and background</p>

* [ ] Set the Level 1 boundary: two trainer-selected solids using routine iD7 ATR. Compare overall spectral patterns and measurement quality; do not make database identification the core outcome. Liquids, the volatiles cover, and other accessories are later or staff-guided. Review [compatibility limits]({% link instruments/ftir.md %}#materials).
* [ ] Show the canonical SOP, detailed instructions, and failure modes. State the stop conditions: uncertain or incompatible sample, damaged or persistently dirty crystal, failed connection, unfamiliar error, or an unresolved weak or unusual spectrum.
* [ ] **Trainer logs in while participants watch** because their Moira-controlled workstation access begins after closeout. Start OMNIC and use **System Status** to verify the instrument connection; do not invent a failed-state appearance.
* [ ] With gloves on for samples, crystal, tower, tips, wipes, and solvent—and off for keyboard, mouse, and screen—the participant removes the cover, cleans center-outward with isopropyl alcohol on a Kimwipe, dries the crystal and plate, and confirms no residue, powder, fibers, or droplets remain.
* [ ] Participant collects the background on the clean, dry, bare, **unclamped** crystal. If preview is enabled, **Start Collection** commits the full scan; if preview is disabled, collection runs without that extra action. *Check: the participant distinguishes preview from committed collection without applying an undefined background threshold.*

<p class="trainer-phase"><span>18–40 minutes</span> Two solid-sample cycles and comparison</p>

* [ ] Participant chooses the appropriate sampling approach and pressure tip, covers the crystal with the first solid, centers the pressure tower, and tightens only until the clutch slips. *Check: contact is made and the clutch is not forced.*
* [ ] Participant collects the first spectrum. With preview enabled, use the live signal to check contact and select **Start Collection**; without preview, the full collection starts directly. Judge quality before unloading: correct weak contact using the canonical options, and stop for staff if the signal or any unexpected feature remains unresolved.
* [ ] After OMNIC prompts, participant gives the finished spectrum a descriptive name, selects it, and saves it individually. *Check: the needed spectrum is saved and retrievable before unloading.*
* [ ] Wearing gloves again, participant unloads the first solid, then cleans and dries the crystal and surrounding plate completely before the next sample.
* [ ] Participant repeats the full cycle on the second material with less prompting.
* [ ] Compare the two spectra at the level of overall patterns and measurement quality, not material identification. Confirm every needed spectrum was individually saved, can be retrieved, and was copied off the workstation; the workstation is not a backup.

<p class="trainer-phase"><span>40–46 minutes</span> Participant-led shutdown</p>

* [ ] Participant confirms data retention, closes OMNIC, and watches the trainer log off the workstation; explain that users log off their own account on later visits.
* [ ] Gloved participant cleans and dries the crystal and plate, replaces and clamps the cover with the pressure tower, removes samples, wipes, and waste, and leaves the FTIR **powered on**. *Check: the complete physical end state is restored with reduced prompting.*

<p class="trainer-phase"><span>46–50 minutes</span> Instrument reset and closeout</p>

* [ ] Return the two solids, tips, solvent, wipes, and current approved printed Quick Guide to their proper locations; record replenishment, damage, or guide issues after the session.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Participants may divide roles, but everyone should see the full background → sample → save → clean cycle. Rotate handling, software, and quality decisions. Keep bench explanations tied to the current printed Quick Guide and canonical page; this prototype is not approved for delivery.
