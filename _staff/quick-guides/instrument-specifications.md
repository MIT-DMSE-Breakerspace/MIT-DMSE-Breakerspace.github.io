---
published: false
---

# Instrument-Specific Quick Guide Work Orders

These are bounded work orders for the two-sided SOP-and-visual-map model. They specify the intended beginner workflow, image plan, callouts, quality decision, guidance-box topic, exclusions, and blockers. They do not authorize publication or technical invention.

Read [`README.md`](README.md) first. A **BLOCKED** status means no instrument candidate should be created until every release gate in that entry is resolved. Existing assets are candidates, not proof that the displayed interface or workflow is current.

## Status Summary

| Instrument | Drafting status | Principal reason |
| --- | --- | --- |
| Nicolet iS5 FTIR | **REFERENCE PROTOTYPE** | Content is suitable for lab-assistant review; still needs physical proof and operational review before publication. |
| Phenom XL SEM/EDS | **BLOCKED** | Level 1 EDS scope and loading/height visual are unresolved. |
| Phenom Pure SEM | **BLOCKED** | Primary-versus-cold-stage scope and routine loading/height visual are unresolved. |
| PANalytical X'Pert Pro XRD | **BLOCKED** | Approved stored programs and companion-workstation data handoff are unresolved. |
| Instron 5984 | **BLOCKED** | Default method, end condition, result quality gate, and export convention are unresolved. |
| Olympus DSX100 optical microscope | **BLOCKED** | Exact routine capture/save interface and Level 1 output need selection and capture. |
| Horiba Raman microscope | **BLOCKED** | Routine controls, laser procedure, settings boundary, and quality evidence require staff verification. |
| Innovatest hardness tester | **BLOCKED** | Installed scales/indenter configuration and current software views require staff verification. |
| Microtrac particle size analyzer | **BLOCKED** | Database/export convention and immediate quality evidence are unresolved. |
| Horiba Duetta UV-Vis | **BLOCKED** | Beginner absorbance method, required settings, and save/export convention are unresolved. |
| Hitachi IM4000 ion mill | **BLOCKED** | Beginner boundary, approved recipe, and stop-state evidence are unresolved. |

The statuses are intentionally conservative. A visually plausible draft made before these decisions would turn unknowns into apparent policy.

## Shared Visual Rules

For every instrument:

* The primary Side 2 image should answer “where are the few controls I need during this routine workflow?” It is not a linear screenshot tutorial.
* Use no more than four callouts on the primary image unless this file explicitly authorizes a fifth. If more controls are essential, use a better interface state or narrow the workflow.
* The two quality panels answer one immediate decision: stop/correct versus continue. They are not a worked interpretation example.
* Use one full-width software image when software drives the workflow. Use one full-width hardware image when physical loading or alignment is the dominant risk. A small inset is permitted only where specified.
* Do not use hero images, manufacturer marketing images, or decorative result images merely to fill space.
* Existing video poster frames may be used as review candidates, but final software maps should be recaptured at native resolution when the existing text is soft at print scale.

## Nicolet iS5 FTIR — Reference Prototype

**Candidate:** [`../../quick-guides/ftir-sop-map-prototype.md`](../../quick-guides/ftir-sop-map-prototype.md)

**Canonical source:** [`../../instruments/ftir.md`](../../instruments/ftir.md).

**Default workflow:** routine iD7 ATR background and sample collection.

**Side 1 critical box:** **The glove rule** — gloves for sample, crystal, pressure tower/tips, wipes, and solvent; no gloves on keyboard, mouse, or screen.

**Primary image:** `assets/media/tutorials/ftir/preview-omnic-poster.jpg`.

**Primary callouts, in this order:**

1. `Collect Background`
2. `Collect Sample`
3. save selected spectrum
4. `System Status`

**Quality images:** `assets/img/prototypes/ftir-preview-weak.jpg` and `assets/img/prototypes/ftir-preview-usable.jpg`.

**Secondary callout:** `Start Collection` on the usable live-preview image.

**Immediate decision:** weak/nearly flat contact versus plausible live signal before starting the full collection. This is contact triage, not spectral identification.

**Do not add:** band assignments, atmospheric peak positions, a named sample, method-parameter tables, liquids, or accessory workflows.

**Remaining release gates:** staff review of the background/quality language, native-resolution final screenshots if the prototype strategy is endorsed, and physical duplex proof.

## Phenom XL SEM/EDS

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/phenom-xl.md`](../../instruments/phenom-xl.md). Do not substitute the SEM hub or Pure page.

**Default workflow proposed for decision:** routine SEM navigation, focus/brightness/contrast, image acquisition, and saving. Include EDS only if staff explicitly confirm that it is part of the default Level 1 workflow; otherwise commission an XL-only EDS task card later.

**Side 1 critical box:** **Sample and holder clearance** — use the XL-specific canonical sample-height rule, secure loose particles, and keep contaminated gloves off controls. Do not reuse the Pure height rule.

**Primary image candidate:** `assets/img/tutorials/sem/FocBri.PNG`, if a current-machine check confirms that it clearly shows the routine SEM imaging controls. Use `assets/img/tutorials/sem/navcam.PNG` instead if it provides the clearer single workflow view.

**Primary callouts proposed:**

1. `NavCam`
2. `Move to SEM`
3. focus / autofocus control using the exact visible label
4. brightness/contrast or auto brightness/contrast using the exact visible label
5. acquisition camera control, only if it is visible in the same approved view

If five controls cannot be shown without crowding, combine focus and brightness/contrast in the numbered key only when a single visible control group supports that grouping. Do not squeeze five overlapping annotations into the image.

**Specified hardware inset:** a new, clear photo of a sample correctly secured in the XL holder and measured **5–7 mm below the tray top**, with the relevant clearance visible. No suitable current asset was found.

**Quality panels required:** a staff-approved pair showing (a) a stop/correct image with charging, drift, severe washout, poor focus, or evidence of outgassing/beam damage and (b) a usable, stable, focused image of the same or comparable training specimen. The caption must state only the observable decision and canonical corrective action.

**EDS variant, only if approved as Level 1:** use `assets/img/optimized/phenom-xl-eds-interface-540.jpg` as a candidate and call out the exact verified live-spectrum start/stop control and save/export control. The guide must state the canonical rule to stop live EDS before moving. Do not add element-identification interpretation.

**Do not add:** accelerating-voltage or detector-setting tables, EDS quantification lessons, coating recipes, charging explanations beyond the immediate stop/adjust decision, or Pure/cold-stage instructions.

**Release gates:** decide EDS scope; capture the XL loading/height image; verify the current interface and exact labels; approve the bad/usable image pair; confirm save/export and final chamber state.

## Phenom Pure SEM

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/phenom-pure.md`](../../instruments/phenom-pure.md). Do not substitute the SEM hub or XL page.

**Default workflow proposed for decision:** routine room-temperature SEM navigation, focus/brightness/contrast, image acquisition, and saving. Treat cold-stage work as a separate task-specific card unless staff explicitly make it the default Level 1 workflow.

**Side 1 critical box:** **Sample and holder clearance** — use the Pure-specific canonical rule that the sample remains below the holder edge, with dry or properly frozen material as applicable. Do not reuse the XL's 5–7 mm rule.

**Primary image candidate and callouts:** the same SEM control-finding plan as the Phenom XL, using `assets/img/tutorials/sem/navcam.PNG` or `assets/img/tutorials/sem/FocBri.PNG` only after verifying the Pure interface matches the image.

**Specified hardware inset:** a new, clear Pure holder photo showing a correctly secured sample below the holder edge. No suitable routine-loading asset was found.

**Quality panels required:** a staff-approved stop/correct versus usable SEM image pair, using the same observable categories as the XL but verified on the Pure.

**Cold-stage extension:** do not place cold-stage connector, sample-holder, temperature, or refill media in the primary Quick Guide. Existing files under `assets/media/tutorials/sem/cold-stage-*` and `assets/img/tutorials/sem/cold_stage_*` are source candidates for a later, separately scoped card.

**Do not add:** EDS, XL height rules, cold-stage setup in the primary guide, coating recipes, or settings tables.

**Release gates:** decide cold-stage scope; capture the Pure loading/height image; verify the current interface; approve the quality pair; confirm save/export and final chamber state.

## PANalytical X'Pert Pro XRD

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/xrd.md`](../../instruments/xrd.md).

**Default workflow:** load one prepared powder sample into the automatic changer, select an approved stored measurement program, add it to the queue, collect, export, and restore the enclosure.

**Side 1 critical box:** **X-ray enclosure and sample-cover rule** — use the canonical locked/interlocked enclosure language, match physical and software changer positions, and replace the sample cover before operation.

**Primary image candidate:** `assets/media/tutorials/xrd/queue-sample-poster.jpg`, recaptured at native resolution for the final guide if print text is soft.

**Primary callouts, in this order:**

1. changer position / slot field
2. measurement-program drop-down
3. sample ID and file-name fields, grouped only if visually adjacent
4. `Add to Queue`

**Specified hardware inset:** `assets/media/tutorials/xrd/add-sample-poster.jpg`, if staff confirm it clearly shows the physical changer position and restored cover. Otherwise capture a new overhead photo with the slot number and cover state legible.

**Quality panels required:**

* stop/correct: physical changer position and software position do not match, cover is absent, or required fields are incomplete;
* ready: physical and software positions match, cover is restored, approved program and identifiers are present, and the enclosure is ready to close.

These are pre-run readiness states. A diffraction pattern is not the primary immediate quality gate unless staff define an observable pass/fail rule appropriate for a new user.

**Bottom reminder:** export/copy data before leaving, using `assets/media/tutorials/xrd/export-results-poster.jpg` or `assets/img/tutorials/xrd/xrd-data-in-folder.png` only after the exact destination and companion-workstation sequence are confirmed.

**Do not add:** scan parameters for stored programs, phase identification, peak indexing, crystallite-size interpretation, or instructions to bypass an interlock.

**Release gates:** approve the routine stored-program list and names; resolve workstation sign-in and export/copy sequence; verify queue field labels; verify shutdown/end state; approve or recapture the physical slot/cover image.

## Instron 5984 Universal Testing Machine

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/instron.md`](../../instruments/instron.md).

**Default workflow proposed for decision:** run one approved stored Bluehill method with the installed fixture and load cell, establish safe limits/zeros, acquire a test, save/export the result, and return the machine to the approved idle state. Do not attempt to cover tension, compression, and flexure as parallel beginner workflows.

**Side 1 critical box:** **Moving crosshead and stored-energy rule** — hands clear during motion/testing, remain within fixture/load-cell/specimen limits, and use emergency stop only as the canonical page directs.

**Primary image candidate:** `assets/img/optimized/instron-bluehill-test-1080.jpg`. If method selection is the more error-prone beginner decision, use `assets/img/optimized/instron-bluehill-method-1080.jpg` instead and put the live-test screen in the decision panels.

**Primary callouts proposed, subject to visible-label verification:**

1. approved method / `Browse Methods` or equivalent exact control
2. force reading / balance control
3. displacement reading / zero control
4. start/stop test control

**Specified hardware inset:** `assets/img/tutorials/instron/ANNOTATED_hand_controller_in_set_up.JPG`, with a paired reference to `ANNOTATED_hand_controller_when_disabled.JPG` only if the exact `DISABLED` → `SET UP` → `CAUTION` → `TESTING` sequence remains current. Call out controller unlock, start, and stop without obscuring the buttons.

**Quality panels required:**

* stop/correct: current interface state displaying a travel-limit, transducer-limit, overload, or setup warning that the canonical workflow tells a user not to bypass;
* ready/result: an approved force-displacement curve with the minimum observable completion/sanity criteria a beginner can check before unloading.

**Do not add:** method creation, `Admin`, arbitrary test rates or limits, material-property calculations, tensile/compression/flexure variants not selected for Level 1, or a pumpkin example as the generic quality standard.

**Release gates:** choose the one Level 1 method and fixture; record its exact stored-method name; verify initial and final machine state; define the end condition; capture the warning and approved curve; confirm save/export location and naming; verify controller labels and the roughly two-second unlock/start behavior.

## Olympus DSX100 Optical Microscope

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/optical.md`](../../instruments/optical.md).

**Default workflow proposed for decision:** load a dry stable sample, establish stage/objective clearance, obtain and focus a live 2D image in one approved observation mode, capture, save/copy, lower/clear the stage, and shut down. Treat 3D capture and stitched imaging as detailed operating instructions or later task-specific cards.

**Side 1 critical box:** **Protect the objective and sample** — establish clearance before motion or tilt, keep gloved sample handling separate from controls, and stop on collision risk or control errors.

**Primary image required:** a new native-resolution screenshot of the routine DSX acquisition window after startup, showing the actual controls a Level 1 user touches. `assets/media/tutorials/optical/best-image-poster.jpg` is a composition candidate, not yet an approved final software map.

**Primary callouts proposed:**

1. `Best Image`, if it remains the approved beginner starting control
2. approved observation-mode selector
3. 2D capture/acquisition control
4. save or destination control using its exact visible label

**Specified hardware inset:** `assets/media/tutorials/optical/focus-wheel-poster.jpg` or `assets/media/tutorials/optical/joystick-poster.jpg`, whichever best supports the one physical action that is hardest to locate after training. Do not use both unless staff identify two independent critical controls.

**Quality panels required:** the same field in visibly poor focus/collision-risk state and in a sharp usable 2D state. The current example result assets `assets/img/optimized/optical-bee-color-1200.jpg`, `optical-bee-height-1200.jpg`, and `optical-scored-glass-750.jpg` demonstrate capabilities but do not by themselves provide a matched immediate quality gate.

**Do not add:** 3D reconstruction, volume rendering, stitched capture, extended observation-mode comparison, surface interpretation, or a named training specimen.

**Release gates:** confirm the one Level 1 observation/capture path; capture the full native interface and exact controls; define save/copy; produce the matched focus pair; confirm shutdown/clearance state. Retrofit the existing published optical guide only in a separately authorized task.

## Horiba Raman Microscope

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/raman.md`](../../instruments/raman.md).

**Default workflow proposed for decision:** run the approved LabSpec 6 calibration/reference check, position a compatible sample, acquire one routine spectrum using approved stored/default settings, save/copy, stop emission, and restore the enclosure.

**Side 1 critical box:** **Laser enclosure rule** — doors closed and interlocks respected before emission; emission stopped before opening or changing the sample; staff decides any exception.

**Primary image required:** a new native-resolution LabSpec 6 main-window screenshot in the exact Level 1 state.

**Primary callouts proposed only after staff verification:**

1. `Stop All`
2. real-time display / `RTD`
3. `AutoCalibration`
4. routine acquisition/start control

If those labels or roles are not exactly current, replace the proposal with staff-verified controls before drafting.

**Specified hardware inset:** a clear photo of the laser-emission remote/status and the closed-door/interlock state that a trainee must recognize.

**Quality panels required:** failed/unacceptable versus passing silicon calibration or other approved reference check, with the exact observable criterion supplied by staff. `assets/media/tutorials/raman/display-flip-poster.jpg` is not sufficient evidence for this decision.

**Do not add:** laser power, grating, objective, slit, hole, integration-time, or accumulation recommendations unless the canonical page defines the approved routine setting; no peak assignment or material identification.

**Release gates:** verify laser-safety sequence; select stored/default Level 1 settings; confirm every control; capture interface and remote/interlock; define calibration pass/fail; confirm save/export and shutdown.

## Innovatest Nemesis 5100G2 Hardness Tester

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/hardness-tester.md`](../../instruments/hardness-tester.md).

**Default workflow proposed for decision:** select one installed and approved scale/method, focus and position a prepared specimen, make one single-point indent, verify measurement quality, save, unload, and restore the tester.

**Side 1 critical box:** **Scale, indenter, and turret rule** — the selected scale must match installed hardware and specimen limits; hands remain clear of turret and moving components.

**Primary image required:** a new native-resolution camera/software view in the current routine state.

**Primary callouts proposed:**

1. `IN FOCUS`
2. `SCALE SELECT`
3. `SINGLE POINT`
4. `START`
5. `SAVE` only if visible without crowding; otherwise place it in the bottom reminder

`TEST PATTERN` belongs only if staff explicitly make a pattern part of the default Level 1 workflow.

**Quality panels required:** a staff-approved pair showing a good square/symmetric indent with accepted diagonals and a rejected/problematic indent or the software's red diagonal-difference warning. State the threshold only if it is canonical and current.

**Do not add:** unsupported scales, arbitrary loads/dwell times, conversion tables, metallographic interpretation, or maintenance/calibration procedures.

**Release gates:** inventory fitted indenter/load hardware and offered scales; choose the Level 1 method; capture all current controls; define specimen limits/preparation; approve the indent quality pair and warning rule; confirm save/export and final state.

## Microtrac Particle Size Analyzer

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/psa.md`](../../instruments/psa.md).

**Default workflow:** connect/synchronize the analyzer, verify the active database, load an approved stored measurement SOP, load loose dry powder in the tray, run setzero and the sample sequence, review immediate validity, export/copy, clean, and shut down.

**Side 1 critical box:** **Load dry powder loosely** — use the canonical shallow amount, keep it behind the line, distribute it evenly, do not compress it, and keep contamination out of the tray.

**Primary image candidate:** `assets/img/tutorials/psa/AutoSequence.png`, if it shows the complete routine run state at legible print scale. Use `SyncAnalayzer.png` or `MeasurementSOP.png` only if staff decide connection or SOP selection is the higher-risk control map.

**Primary callouts proposed across the one approved view:**

1. `Sync Analyzer`
2. active database
3. `Load measurement SOP`
4. `Auto-Sequence`

If these controls do not coexist in one useful view, the primary map may use one screenshot plus one explicitly approved small software inset. Do not construct a multi-page screenshot tutorial.

**Quality panels required:** a new matched tray-loading pair showing clumped/compressed/overfilled material versus the approved shallow, even, uncompressed load. A distribution plot may replace one panel only if staff define a simple immediate repeat/accept decision visible in that plot.

**Bottom reminder:** title/sample ID/notes and final export/copy, using exact verified field names and destination.

**Do not add:** D10/D50/D90 interpretation, second-peak interpretation, arbitrary SOP parameters, database naming guesses, or recommendations for unapproved powders.

**Release gates:** approve database and file/export conventions; verify current control labels; capture tray pair and, if used, result pair; confirm approved powders/sample limits; confirm cleanup and final state.

## Horiba Duetta UV-Vis

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/uv-vis.md`](../../instruments/uv-vis.md).

**Default workflow proposed for decision:** routine absorbance/transmission spectrum using an approved blank/reference and sample in the prompted order. Exclude fluorescence unless staff make it part of the beginner workflow.

**Side 1 critical box:** **Cuvette and liquid rule** — use compatible clean cuvettes, keep optical faces clean, contain liquid, follow the prompted blank/reference/sample order, and leave the compartment empty and clean.

**Primary image candidate:** a new native-resolution EZ Spec screen based on the states represented by `assets/img/tutorials/uv-vis/Absorbance.png`, `Both.png`, and `Acquire.png`.

**Primary callouts proposed:**

1. `New Method`
2. `Absorbance and Transmission`
3. `Spectra`
4. mode `Both`
5. `Acquire` only if it remains legible; otherwise make `Acquire` the numbered bottom reminder

**Specified hardware inset:** `assets/media/tutorials/uv-vis/load-cuvette-poster.jpg` if it clearly shows cuvette orientation and compartment placement. `open-lid-poster.jpg` is supplementary only.

**Quality panels required:** a staff-approved unclipped, plausible, repeatable spectrum versus a saturated/clipped or artifact-dominated result caused by a canonical correctable condition such as bubbles, fingerprints, wrong blank order, or poor sample range. Use matched captures when possible.

**Do not add:** fluorescence, peak assignment, concentration calculations, arbitrary wavelength ranges/integration settings, or cuvette compatibility claims absent from the canonical page.

**Release gates:** select the Level 1 absorbance method and settings; verify the prompt order and controls; confirm save/export; capture matched quality states; confirm cuvette compatibility/handling and shutdown.

## Hitachi IM4000 Ion Mill

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/ion-mill.md`](../../instruments/ion-mill.md).

**Default workflow proposed for decision:** load an approved holder/sample, close and purge, establish the approved vacuum/argon/stage state, select one approved stored recipe, run, finish safely, unload, and restore the system. Sample mounting/preparation may need to remain a separate pre-instrument instruction.

**Side 1 critical box:** **High voltage, vacuum, and argon** — use only approved recipes; do not open or unload until high voltage and sample motion are off and the canonical vent/finish state is reached; stop on abnormal pressure or motion.

**Primary image candidate:** `assets/img/tutorials/ion-mill/stage-control.JPG`, if a current check confirms it is the principal Level 1 control state. Use `purge.JPG` as the specified inset or alternate main image when purge/needle-valve handling is the dominant risk.

**Primary callouts proposed only after verification:**

1. `Purge (5s)` / purge control
2. approved semi-automatic needle-valve control
3. sample loading/removal or stage/head control
4. `Finish`
5. `Run all steps` only if the chosen recipe and exact label are approved for trainees

**Quality panels required:** stop/not-ready versus ready pre-run system state, centered on the verified base-pressure threshold, correct holder/stage state, and high-voltage/sample-motion indicators. Before/after surface images under `assets/img/instruments/ion-mill/` show capabilities but are not an immediate at-instrument acceptance criterion because final evaluation may require another microscope.

**Specified hardware inset:** select one holder/alignment photo from `assets/img/tutorials/ion-mill/` only after the Level 1 holder and mounting geometry are chosen. Do not make the primary guide cover every holder.

**Do not add:** new recipes, recipe parameters, holder variants, slope-cut and flat-polish branches together, advanced alignment, or SEM interpretation of the milled result.

**Release gates:** define the beginner boundary and one holder/recipe; verify purge count/timing and every control; confirm pressure and stop criteria; capture system-state pair; confirm safe finish/unload/final state.

## What To Capture When A Blocker Is Resolved

For any new software image, capture the whole relevant application window at native resolution with the Level 1 method loaded and no private names, identifiers, file paths, or unrelated data visible. Also capture a clean unannotated source. Annotations stay in the guide's inline SVG.

For any new result pair, use the same sample and view where feasible, deliberately capture the single observable condition the guide asks the user to judge, and have experienced staff approve both the image and caption before it becomes a release asset.

For any new hardware image, frame the hand position, clearance, orientation, interlock, or status indicator the user must recognize. A wide instrument portrait is not a loading or safety-control image.
