---
title: Instron Trainer Guide — Provisional Draft
description: Unpublished trainer-run-sheet composition draft for review.
published: false
guide_status: Provisional composition draft — incomplete
guide_revision: 2026-08-10
interactive_checklist: true
instrument_name: Instron 68TM-50 Universal Testing System
moira_group: dmse-brkrspc-instron
---

# Instron 68TM-50 Trainer Guide — Provisional Draft

> **Provisional composition draft — incomplete.** Not approved for training delivery. Review gaps below are release blockers, not instructions for the trainer to improvise around.

> **REVIEW GAP — Level 1 method**
>
> **Decision or evidence required:** Choose a named saved tensile method or **Run a QuickTest**; if saved, record the exact approved method name.
>
> **Sources checked:** Canonical [Running The Test]({% link instruments/instron.md %}#running), [Exercises]({% link instruments/instron.md %}#exercises), and Instron work order.
>
> **Release effect:** Method selection, specimen inputs, limits, calculations, and session timing cannot be approved as a runnable training.

> **REVIEW GAP — end condition**
>
> **Decision or evidence required:** Define the approved Level 1 test end condition and confirm its behavior on the selected specimen and method.
>
> **Sources checked:** Canonical [Setting Up A Test Method]({% link instruments/instron.md %}#method), [Running The Test]({% link instruments/instron.md %}#running), and Instron work order.
>
> **Release effect:** The test must not be run from this draft without a staff-approved method and end condition.

> **REVIEW GAP — result quality decision**
>
> **Decision or evidence required:** Approve the matched soft-curved-toe example and the observable repeat/stop decision for slack or grip slip.
>
> **Sources checked:** Canonical [Reading A Force-Displacement Curve]({% link instruments/instron.md %}#reading-curves), [Common Failure Modes]({% link instruments/instron.md %}#failures), and Instron work order.
>
> **Release effect:** The canonical symptom and correction may be discussed, but no participant performance gate is approved.

> **REVIEW GAP — save/export**
>
> **Decision or evidence required:** Confirm Bluehill save/export location, file naming, raw/calculated output, and participant copy convention.
>
> **Sources checked:** Canonical [Saving And Exporting Results]({% link instruments/instron.md %}#saving), [Instrument Shutdown]({% link instruments/instron.md %}#shutdown), and Instron work order.
>
> **Release effect:** Saving and copying remain required; exact destinations and retrieval cannot be approved.

> **REVIEW GAP — hardware states**
>
> **Decision or evidence required:** Verify the 50 kN Level 1 tensile fixture and the complete initial and final frame, crosshead, load-string, and grip states.
>
> **Sources checked:** Canonical [Setup Diagrams]({% link instruments/instron.md %}#setup-diagrams), [Instrument Shutdown]({% link instruments/instron.md %}#shutdown), and Instron work order.
>
> **Release effect:** Disabled mode is required, but the full hardware reset cannot be approved.

> **REVIEW GAP — participant artifact and layout**
>
> **Decision or evidence required:** Capture current Bluehill, travel-limit prompt, handset, fixture, and toe-artifact evidence; approve a two-view layout; then review, proof, approve, and install the Quick Guide.
>
> **Sources checked:** Canonical [Bluehill]({% link instruments/instron.md %}#bluehill), [Running The Test]({% link instruments/instron.md %}#running), unpublished Instron Quick Guide prototype, and Instron work order.
>
> **Release effect:** Do not substitute the unpublished prototype or collapse Bluehill and handset actions into one control surface.

## Session checklist

Work in order. Timing bands are hypotheses for a maximum of three participants within 50 participant-facing minutes. The canonical [Instron operating page]({% link instruments/instron.md %}) is authority for every technical step.

<p class="trainer-phase"><span>Before the session</span> Readiness gates</p>

* [ ] Confirm the frame is **DISABLED**, the crosshead is stationary, the load is relieved, and the current 50 kN load cell/load-string/fixture state has been checked by staff. Open the canonical page; do not place or describe the unpublished Quick Guide prototype as approved.
* [ ] Prepare safety glasses and one compatible trainer-selected tensile specimen whose expected load is within every frame, cell, adapter, and grip limit. Know how the specimen behaves in the approved method; exclude wet, fouling, or dangerously shattering material.

<p class="trainer-phase"><span>0–8 minutes</span> Welcome and room orientation</p>

* [ ] Welcome participants, ask their mechanical-testing goal, and state that this incomplete run sheet cannot replace the missing approved printed Quick Guide.

{% include trainer/checklist-safety-compact-prototype.md %}

<p class="trainer-phase"><span>8–17 minutes</span> Scope, safety, and startup</p>

* [ ] Set the supported boundary: one 50 kN tensile-test spine. Do not add method creation, **Admin**, arbitrary rates or limits, video-extensometer work, other test modes, material-property calculations, or the staff-guided pumpkin example.
* [ ] Everyone wears safety glasses. Show the handset stop and red emergency stop before motion; use the red stop only for an emergency. Keep hands out of the grips while enabled, the frame area clear during motion, and use a shield or staff review for material that could throw fragments.
* [ ] **Trainer logs in while participants watch** because Moira-controlled workstation access begins after closeout. Open Bluehill Universal and close the event log if it appears.
* [ ] Show that Bluehill and the indicator panel expose the operating mode. Confirm **DISABLED** before hardware checks; explain that only one person operates the frame and that Bluehill and handset actions remain distinct.

<p class="trainer-phase"><span>17–34 minutes</span> Method, limits, specimen, and zero</p>

* [ ] Verify the 50 kN connector, active transducer, load cell, adapters, grips, and specimen all match the intended tensile test and that no component limit will be exceeded. Stop for loose components, collision risk, unexpected force/motion, or uncertain hardware.
* [ ] In Bluehill **Test**, select only the staff-approved saved method or **Run a QuickTest** route named by the unresolved decision above. Do not enter **Method** authoring or **Admin**.
* [ ] Enter the required information for this specimen, measuring its requested dimensions individually. Confirm the selected method, required inputs, and proposed end condition with staff; do not invent missing fields or values.
* [ ] Position physical travel stops and set transducer limits for the approved method so the crosshead and fixtures cannot collide and the weakest load-string component is protected. Treat Bluehill's travel-limit prompt as a real physical check, not a dialog to dismiss.
* [ ] Center and align the specimen in the load path, engage at least 75% of the available jaw-face length, and hand-tighten the lower then upper wedge grip evenly. Keep fingers out of the jaw gap and do not over-tighten.
* [ ] On the handset, jog until slack is taken up without loading the specimen, then press **zero displacement**. *Check: participants identify this as a handset action, not a Bluehill control.*
* [ ] In Bluehill, balance the force transducer with the specimen installed but unloaded so the run does not begin with a standing offset.

<p class="trainer-phase"><span>34–43 minutes</span> Start, observe, finish, and save</p>

* [ ] Confirm the frame area is clear, nobody is reaching into the load string, and the travel limits and stop controls are understood. On the testing page, press handset **unlock** then **start** in quick succession; the CAUTION window lasts about two seconds.
* [ ] Watch the specimen and live curve together through the staff-approved end condition. Use handset **stop** for a routine early stop and the red emergency stop only for an emergency; do not leave a running test unattended.
* [ ] After the test ends and the frame returns to SET UP, compare the physical event with the force-displacement curve. Flag a soft curved toe for staff and discuss taking up slack, reseating, and re-running without treating the unapproved example as a pass criterion.
* [ ] If the specimen did not break, jog to relieve the load before opening the grips. Remove the specimen and fragments only when safe; use **unlock** then **return** only when the approved final-state plan requires returning to the start position.
* [ ] In Bluehill, select **Finish sample** when the sample group is complete and verify it is written to disk before closing. Export raw data and any calculated results/report, record necessary test conditions, and copy needed files to participant-controlled storage.

<p class="trainer-phase"><span>43–50 minutes</span> Participant-led shutdown and closeout</p>

* [ ] Use the documented handset stop behavior to leave the frame **DISABLED** and confirm the white indicator before disassembling hardware.
* [ ] Confirm data retention, remove remaining fragments, disassemble the approved test setup, return every part to its box, and wipe up debris. Preserve the unresolved hardware reset as a review gap.
* [ ] Close Bluehill and watch the trainer log off. Return the specimen, safety glasses, tools, and supplies; leave the frame area clear and record any motion, load, grip, limit, method, result, export, or guide issue.

{% include trainer/checklist-closeout-compact-prototype.md moira=page.moira_group access="access-and-comms" %}

## Trainer notes

Keep one operator at the frame and rotate observation, Bluehill, and handset roles without splitting their sequence. The run sheet is intentionally longer than the SEM and XRD prototypes because both control surfaces and the physical load string remain consequential. Do not compress an unresolved end condition into a generic “run to completion.”
