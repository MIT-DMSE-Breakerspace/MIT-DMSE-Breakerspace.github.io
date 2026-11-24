---
title: Raman training with Codex
description: A shared student, Lab Assistant, and Codex checklist for a supervised Level 1 Raman training pilot.
guide_status: Pilot draft for staff review
guide_revision: 2026-11-24
interactive_checklist: true
instrument_name: Horiba XploRA Confocal Raman Microscope
---

# Raman training with Codex

**Pilot draft for staff rehearsal.** The student operates the XploRA, first on the silicon standard and then on a compatible sample. Codex coaches one step at a time and takes the controls briefly to check a result or help solve a problem. A Raman-qualified Lab Assistant (LA) observes in person. Staff decide when each live check is ready to try with a student.

## Start here

Open the [Raman operating page]({% link instruments/raman.md %}#standard-workflow) beside this checklist. Paste this prompt into the Raman workstation’s Codex project.

> Train me on the Raman using <https://breakerspace.mit.edu/trainer/agentic-trainer-raman-guide/>. I’ll operate LabSpec first. When I say “check my work” or “I’m stuck,” follow the guide’s handover.

**For Codex.** Ask what the student wants to measure and confirm that the LA is present. Give one cue, then wait. Ask what the student sees before offering a hint. Offer a check after silicon focus and again after the first sample spectrum. Keep coaching available with the bridge stopped. Use only the configured LabSpec MCP for instrument readings, camera frames, acquisitions and control. A human marks each completed checkpoint.

### Before a live rehearsal

* [ ] **LA:** Prepare the silicon standard and a screened, stable sample with a repeatable spectrum. Keep a known-good sample available. Check the current [alignment notice]({% link instruments/raman.md %}#alignment-notice) and [sample limits]({% link instruments/raman.md %}#materials). Use the operating page and its annotated controls during this pilot. The Raman Quick Guide is provisional.
* [ ] **Workstation maintainer (initial setup).** Install the translator for the training account. Register its MCP server with `ls6t connect codex`, restart Codex and check the connection with `ls6t connect check codex`. Register the matching `ls6t_bridge.vbs` in LabSpec under **Processing → Scripts**. Verify the live profile, operator confirmations and simulator/live distinction. Keep the Codex connection available between handovers. [Translator installation and profile setup](https://github.com/feranick/labspec_translator/blob/155c2730a35cf7d430449e2a094b808d8779db88/INSTALL.md)

**Open bench questions for staff.** Try the LabSpec main data bar script shortcut, then time a status read, one spectrum, and one bounded focus comparison through release and return to student-operated RTD. On silicon at 10×, establish the permitted Z range, step, exposure, signal repeatability and a tested return to the student’s starting Z. The translator normally leaves a successful focus scan at its fitted best Z. Until the return and limits work on this workstation, use a stationary spectrum for signal quality and leave focus verification to the student and LA. Record observed times over successive trials. [Translator focus routine](https://github.com/feranick/labspec_translator/blob/155c2730a35cf7d430449e2a094b808d8779db88/labspec_translator/runner.py#L1393-L1465)

## Student at the controls

* [ ] **Welcome and startup.** The LA gives the [in-person safety orientation]({% link _staff-training/lab-safety-orientation.md %}) and arranges workstation sign-in. The student opens LabSpec 6, checks instrument power and identifies the laser-emission remote. Follow [instrument startup]({% link instruments/raman.md %}#startup). Wear gloves for sample handling and remove them before touching workstation controls.
* [ ] **Find clean silicon.** Lower the stage, load the standard, and check clearance and the physical 10× objective. Select the matching objective in LabSpec. Use the external camera and white light to focus on the edge of the Sharpie mark, then move sideways onto unmarked silicon at the same height.
* [ ] **Find the laser spot.** Start silicon at 1% ND transmission. Close the enclosure, switch to the internal camera, turn the laser on and identify the brightest part of the actual spot. Refine focus there. If the spot is missing, check door closure and emission power. Ask the LA if it remains absent. [Silicon workflow and control diagram]({% link instruments/raman.md %}#standard-workflow)
* [ ] **Find Raman focus.** Stop video with **Stop all**, wait, then start the real-time display (RTD) at one second with the silicon peak near 520 cm⁻¹ in the window. Use small Z changes with clearance, keeping optics and exposure fixed. Wait for each refresh. Compare peak height above the nearby background and watch the numerical counts. Follow the [focus and transmission guidance]({% link instruments/raman.md %}#raman-focus) for a weak or near-saturated peak.
* [ ] **Check the decision.** The student explains why they chose this Z. Codex offers [Check my focus](#check-my-focus). Use the [handover sequence](#hand-over-for-a-check) and let the student try any refinement after handback.
* [ ] **Calibrate.** With RTD stopped, the student runs **AutoCalibration** in the Maintenance tab and verifies that LabSpec reports a pass. A failed calibration or suspected misalignment goes to staff. System AutoAlignment is staff work.

## Hand over for a check

Use this sequence each time. Say who has control aloud. The student can use **“I’m stuck”** at any checkpoint.

1. **Student → Codex.** Agree on the question. Stop the current video, RTD or acquisition with **Stop all** and wait for it to finish. The LA confirms the sample, physical objective, clearance and closed enclosure for the proposed action. The student starts the registered bridge in **Processing → Scripts**, or uses the shortcut once staff have tested it. Leave the LabSpec controls to Codex until handback. The operator answers LabSpec’s exposure confirmation in person.
2. **Codex reads first.** Use `study_format` to check mode, profile and bridge state, `jobs` to check for an active request, then `instrument(action="status")` for fresh readings. Check that the live bridge matches the installed translator, is idle and belongs to this session. Record starting XYZ, optics and acquisition settings relevant to the question. If the bridge is unavailable, halted, mismatched or busy with someone else’s job, pause and involve the LA. Announce the proposed observation or change.
3. **Run the agreed check.** For a measurement, use `get_inputs` to preview moves and settings, then `validate_studies`. Proceed with `run_studies` only for the agreed action. Follow it with `study_status` and read the actual spectrum or scan data, settings, warnings and reliability flags. Keep the operator’s stop available.
4. **Codex → student.** Finish the request, restore the agreed training state and read it back. Report what you observed, what changed and the final Z. With the instrument free, call `instrument(action="end_bridge")` and check for a stopped bridge before saying “You have the controls.” Ask the student to resume the next step in LabSpec.

**Interrupted handover.** **Halt** interrupts work and leaves the bridge running. If a request times out, check its status before issuing another. If the bridge stops responding during exposure or motion, keep the enclosure closed and alert the LA immediately. Staff secure emission and establish the physical instrument state. If position or release is uncertain, pause for staff before handing back.

### Check my focus {#check-my-focus}

On silicon, keep XY, laser, grating, ND, hole, slit and exposure fixed. Use the staff-tested comparison at the student’s Z and nearby positions. Compare the silicon peak above local background, report the difference, and explain whether it exceeds the variation seen in repeat measurements. Return to the student’s Z and verify it. If the signal is weak, clipped, or strongest at the edge of the permitted scan, report “I couldn’t verify focus from this scan.” Keep the scan within the rehearsed bounds.

### I’m stuck {#im-stuck}

Ask what the student expected. Check the laser, grating, ND, hole, slit, exposure, XYZ and last error against the [troubleshooting sequence]({% link instruments/raman.md %}#failures). For a missing peak, inspect the actual spectrum axis. For a targeting question, use a native MCP camera snapshot. The objective selection is a software record, and the reported camera can differ from the displayed view. Ask the LA to verify unresolved physical observations.

Give the student the first chance to make the correction. If a demonstration would help, agree on one change, measure its effect, explain it and hand back. Stop for uncertain clearance, suspected sample damage, or an unresolved interlock or instrument error.

## Repeat on the sample and close out

* [ ] **Student leads.** Lower the stage, exchange the silicon for the screened sample, and repeat external focus, enclosure closure, internal spot check and Raman focus. Use [first-look settings]({% link instruments/raman.md %}#first-find-a-spectrum) and low ND transmission appropriate for the material. Stop RTD, set the acquisition parameters and collect a spectrum. Codex gives fewer cues on this pass.
* [ ] **Judge and save.** The student points out a peak or explains what limits the result. Offer a handover for one fixed-spot MCP spectrum if it would settle a question about signal, background or clipping. Compare like settings. Select and save each wanted raw spectrum individually with its settings, copy to the student’s storage, and reopen a file to verify retrieval. Keep processed copies separate.
* [ ] **Student leads shutdown.** Follow [Raman shutdown]({% link instruments/raman.md %}#shutdown). Remove the sample, close the doors, switch the laser-emission remote off, confirm data are saved, close LabSpec and log off. Leave the instrument powered on. The LA checks the end state and handles [training and access closeout]({% link _staff-training/run-a-training.md %}).
* [ ] **Debrief.** Ask the student to name one sign that a spectrum is usable and one reason to stop. In private staff notes, record which handovers helped, elapsed hand-to-hand time, where control or evidence was unclear, and one change to try next time. The LA owns any qualification decision.
