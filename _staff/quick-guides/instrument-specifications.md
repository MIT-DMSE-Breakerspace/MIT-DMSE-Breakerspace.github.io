---
published: false
---

# Instrument-Specific Quick Guide Work Orders

These are bounded work orders for the two-sided SOP-and-visual-map model. They specify the intended beginner workflow, image plan, callouts, quality decision, guidance-box topic, exclusions, and blockers. They do not authorize publication or technical invention.

Read [`README.md`](README.md) first. A **BLOCKED** status means no instrument candidate should be created until every release gate in that entry is resolved. Existing assets are candidates, not proof that the displayed interface or workflow is current.

## Source And Proposal Discipline

This file records both facts already established by a canonical instrument page and choices that still need staff approval. Keep those categories separate.

* Copy each instrument identity from the canonical page's H1. Do not infer a model from a photo, manual, similar instrument, prior facility, or remembered product line.
* Record the **canonical SOP spine**, **Level 1 teaching workflow**, and **software-map scope** separately. Detailed instructions and exercises can establish valid procedures or teaching content, but they do not become canonical SOP steps merely by appearing on the public page.
* A **proposed drafting decision** is not policy and must remain visibly labeled as a proposal until staff approves it.
* Use an exact software or hardware control name only when the canonical page states it and the approved source image visibly supports it. If either source is missing, keep the guide blocked.
* An existing asset may be a composition reference without being a publishable source. Reject or recapture assets with baked-in arrows or boxes, private names, usernames, sample identifiers, file paths, obsolete interface states, or unreadable print text.
* A result or readiness panel must ask one observable question and use only a corrective action stated on the canonical page. Do not turn a plausible-looking result into an acceptance standard.

## Status Summary

| Instrument | Drafting status | Principal reason |
| --- | --- | --- |
| Thermo Scientific Nicolet iS5 FTIR Spectrometer | **REFERENCE PROTOTYPE** | Content is suitable for lab-assistant review; still needs physical proof and operational review before publication. |
| Thermo Fisher Phenom XL SEM | **BLOCKED** | The loading/height pair, current LiveSEM/NavCam captures, top-panel control verification, and save/export end state are unresolved. |
| Thermo Fisher Phenom Pure SEM | **BLOCKED** | The loading/height pair, current LiveSEM/NavCam captures, top-panel control verification, and save/export end state are unresolved. |
| Malvern Panalytical Aeris Research XRD | **BLOCKED** | The HighScore teaching boundary, stored-program curation, data handoff, native queue capture, and changer-cover pair are unresolved. |
| Instron 68TM-50 Universal Testing System | **BLOCKED** | The Level 1 method/end condition, Bluehill and handset captures, multi-view layout, result gate, and export convention are unresolved. |
| Olympus DSX-1000 Digital Optical Microscope | **BLOCKED** | The confirmed Level 1 capture controls span more functions than the old brief; current interface states and matched focus evidence need capture. |
| Horiba XploRA Confocal Raman Microscope | **BLOCKED** | The confirmed training path spans TopCam, internal camera, RTD, and AutoCalibration states; exact controls, multi-view layout, settings boundary, and calibration evidence remain unresolved. |
| Innovatest Nemesis 5100G2 Hardness Tester | **BLOCKED** | Installed scales/indenter configuration and current software views require staff verification. |
| Microtrac Sync Particle Size Analyzer | **BLOCKED** | Database/export convention, sanitized interface captures, and tray-loading evidence are unresolved. |
| Horiba Duetta Fluorescence And Absorbance Spectrometer | **BLOCKED** | The Level 1 exercise needs editorial cleanup before settings, captures, quality evidence, and save/export can be finalized. |
| Technoorg-Linda SEMPrep 2 Broad Beam Ion Mill | **BLOCKED** | Semi-automatic operation is settled; the Level 1 holder/process parameters, approved control state, and readiness evidence remain unresolved. |

The statuses are intentionally conservative. A visually plausible draft made before these decisions would turn unknowns into apparent policy.

## Shared Visual Rules

For every instrument:

* The primary Side 2 image should answer “where are the few controls I need during this routine workflow?” It is not a linear screenshot tutorial.
* Use no more than four callouts on the primary image unless this file explicitly authorizes a fifth or one grouped interface region. If more controls are essential, use a better interface state. Do not silently narrow an approved Level 1 workflow to make it fit.
* The two quality panels answer one immediate decision: stop/correct versus continue. They are not a worked interpretation example.
* Use one full-width software image when software drives the workflow. Use one full-width hardware image when physical loading or alignment is the dominant risk. The locked template has no inset; use the two decision panels for one matched physical state when necessary. If an approved curriculum genuinely requires two control surfaces or several interface states, keep the guide blocked until a named multi-view variant has been reviewed and locked.
* Never create an unsafe or damaging state merely to photograph it. Stage incorrect loading on a removed holder/tray or use a clearly labeled safe mockup; do not insert an over-height sample, defeat an interlock, trigger an overload, or run outside approved conditions.
* Do not use hero images, manufacturer marketing images, or decorative result images merely to fill space.
* Existing video poster frames may be used as review candidates, but final software maps should be recaptured at native resolution when the existing text is soft at print scale.

## Thermo Scientific Nicolet iS5 FTIR Spectrometer — Reference Prototype

**Candidate:** [`../../quick-guides/ftir-sop-map-prototype.md`](../../quick-guides/ftir-sop-map-prototype.md)

**Canonical source:** [`../../instruments/ftir.md`](../../instruments/ftir.md).

**Default workflow:** routine iD7 ATR background and sample collection.

**Level 1 teaching workflow:** compare two trainer-selected solid samples through the same background, contact, preview, collection, cleaning, and saving cycle. The map controls are the same for both samples; the sample comparison belongs in the trainer guide rather than Side 1.

**Side 1 critical box:** **The glove rule** — gloves for sample, crystal, pressure tower/tips, wipes, and solvent; no gloves on keyboard, mouse, or screen.

**Primary image:** `assets/media/tutorials/ftir/preview-omnic-poster.jpg`.

**Primary callouts, in this order:**

1. `Collect Background`
2. `Collect Sample`
3. `Save` (the selected spectrum)
4. `System Status`

**Quality images:** `assets/img/prototypes/ftir-preview-weak.jpg` and `assets/img/prototypes/ftir-preview-usable.jpg`.

**Secondary callout:** `Start Collection` on the usable live-preview image.

**Immediate decision:** a weak live signal that calls for contact correction versus a visibly stronger live signal after re-seating or changing the pressure tip. This is contact triage, not a universal spectrum-shape acceptance standard or spectral identification.

**Do not add:** band assignments, atmospheric peak positions, a named sample, method-parameter tables, liquids, or accessory workflows.

**Remaining release gates:** staff review of the background/quality language, native-resolution final screenshots if the prototype strategy is endorsed, and physical duplex proof.

## Thermo Fisher Phenom XL SEM

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/phenom-xl.md`](../../instruments/phenom-xl.md). Do not substitute the SEM hub or Pure page.

**Canonical SOP spine:** prepare and load a dry, secured sample under the XL height rule; confirm the NavCam view is usable for navigation; enter LiveSEM; characterize and save as appropriate; stop any acquisition; unload; clean; and return the microscope to standby.

**Level 1 teaching workflow:** navigate with NavCam, obtain a usable LiveSEM image, adjust focus and brightness/contrast, inspect the top-panel voltage/beam/resolution/averaging state, change magnification, and acquire/save images at several magnifications. Hair is the sample currently named in the public exercise, not required Quick Guide content.

**EDS curriculum boundary proposed for approval:** give a short capability preview during general Phenom XL training, analogous to the optical LEXT preview, but require a separate Level 2 EDS add-on before independent EDS operation. The primary SEM Quick Guide does not map EDS controls; a later EDS task card can support the add-on if staff approve this boundary.

**Side 1 critical box:** **Sample and holder clearance** — use the XL-specific canonical sample-height rule, secure loose particles, and remove gloves before using the computer. Do not reuse the Pure height rule.

**Primary image required:** a new native-resolution LiveSEM screenshot in the current routine state. `assets/img/tutorials/sem/FocBri.PNG` is a composition reference, but it has baked-in annotation and does not visibly provide every proposed control name. `assets/img/tutorials/sem/navcam.PNG` documents the navigation state but cannot serve as the same control map.

**Primary callouts proposed, with exact labels/icons still to verify:**

1. focus control, using the exact visible label or verified icon function
2. brightness/contrast and automatic adjustment, grouped only if they are visibly adjacent
3. magnification control or readout used during training
4. acquisition camera control
5. the top status/control panel as one grouped region: accelerating voltage, beam/intensity, resolution, and averaging

Place the canonical NavCam-to-LiveSEM transition in the SOP or a compact reminder; do not imply that `NavCam`, `Move to SEM`, and all LiveSEM controls coexist in one screenshot.

**Readiness panels required:** a matched loading pair staged on the removed tray, showing an over-height/incorrect state versus a correctly secured sample measured **5–7 mm below the XL tray top**, with the clearance visible. Never load the incorrect state into the microscope. This uses the template's existing two panels for the dominant physical safety decision. Keep focus, charging, drift, washout, outgassing, and beam damage in the SOP/stop-help language rather than combining unrelated diagnoses.

**Do not add:** independent EDS operation, accelerating-voltage or detector-setting tables, coating recipes, extended image interpretation, or Pure/cold-stage instructions. A brief EDS capability preview belongs in the staff guide only if the proposed boundary is approved.

**Release gates:** approve the EDS training boundary; capture and approve the matched XL loading/height pair plus current unannotated NavCam and LiveSEM views; verify the top panel and every mapped icon/label; confirm save/export and the final tray/chamber state.

## Thermo Fisher Phenom Pure SEM

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/phenom-pure.md`](../../instruments/phenom-pure.md). Do not substitute the SEM hub or XL page.

**Canonical SOP spine:** prepare and load one dry, secured sample below the Pure holder edge; confirm the NavCam view is usable for navigation; enter LiveSEM; characterize and save as appropriate; stop any acquisition; unload; clean; and return the microscope to standby.

**Level 1 teaching workflow:** room-temperature imaging only: navigate with NavCam, obtain a usable LiveSEM image, adjust focus and brightness/contrast, inspect the top-panel voltage/beam/resolution/averaging state, change magnification, and acquire/save images at several magnifications. Hair is the sample currently named in the public exercise, not required Quick Guide content. Cold-stage observation remains Level 2.

**Side 1 critical box:** **Sample and holder clearance** — for this room-temperature Level 1 workflow, the sample must be dry, secure, free of loose particles, and below the holder edge. Do not reuse the XL's 5–7 mm rule or add cold-stage conditions.

**Primary image and callouts:** capture a separate current Pure LiveSEM view and use the same five-callout/grouped-panel plan as the Phenom XL only after verifying the Pure interface: focus; brightness/contrast plus automatic adjustment if adjacent; magnification; acquisition; and the grouped top panel for voltage, beam/intensity, resolution, and averaging. Do not reuse an XL capture merely because the software looks similar. The existing `navcam.PNG` and `FocBri.PNG` files are composition references, not approved final sources.

**Readiness panels required:** a matched Pure loading pair staged with the holder outside the chamber, showing an over-height/incorrect state versus a correctly secured sample below the holder edge. Never load the incorrect state into the microscope. Keep focus and other image-quality diagnoses in the SOP/stop-help language.

**Cold-stage extension:** do not place cold-stage connector, sample-holder, temperature, or refill media in the primary Quick Guide. Existing files under `assets/media/tutorials/sem/cold-stage-*` and `assets/img/tutorials/sem/cold_stage_*` are source candidates for a later, separately scoped card.

**Do not add:** EDS, XL height rules, cold-stage setup in the primary guide, coating recipes, or settings tables.

**Release gates:** capture and approve the matched Pure loading/height pair plus current unannotated NavCam and LiveSEM views; verify the top panel and every mapped icon/label; confirm save/export and the final holder/chamber state.

## Malvern Panalytical Aeris Research XRD

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/xrd.md`](../../instruments/xrd.md).

**Canonical SOP spine:** load one prepared sample holder into a free changer position, replace the plastic sample-changer cover, match the software position to the physical slot, choose an appropriate stored program, enter identifiers, start or queue the measurement, save/export, complete the log book, remove the holder, and shut down.

**Level 1 boundary still to decide:** the current public Level 1 exercise continues through HighScore background/peak work and Search Match phase identification. The proposed primary map covers the Aeris queue and measurement controls only. Before drafting the staff guide, decide whether HighScore is an independently taught Level 1 operation, a short capability preview, or a later analysis exercise; do not force it into Side 2 by assumption.

**Side 1 critical box:** **X-ray enclosure and changer-cover rule** — never defeat an enclosure interlock or open the enclosure during a measurement; separately, replace the removable plastic sample-changer cover and match the physical slot to the software position before starting.

**Primary image required:** a new native-resolution, unannotated queue screen. `assets/media/tutorials/xrd/queue-sample-poster.jpg` is a soft video frame with a hand over the changer control; use it only to plan composition, not as the final map.

**Primary callouts, in this order:**

1. changer position / slot field
2. measurement-program drop-down
3. sample ID and file-name fields, grouped only if visually adjacent
4. `Add to Queue`

**Readiness panels required:** a matched overhead pair showing the plastic sample-changer cover absent versus restored over a loaded holder. The primary queue map locates the software position control; the SOP/critical box tells the user to match it to the physical slot and complete the identifiers/program checks. `assets/media/tutorials/xrd/add-sample-poster.jpg` shows a hand loading the changer with the cover removed and is not a complete matched source. A diffraction pattern is not the primary immediate quality gate unless staff defines an observable pass/fail rule appropriate for a new user.

**Bottom reminder:** export/copy data before leaving. Recapture the exact companion-workstation destination after the sequence is confirmed. `assets/media/tutorials/xrd/export-results-poster.jpg` shows the instrument measurement screen rather than the export destination, and `assets/img/tutorials/xrd/xrd-data-in-folder.png` exposes old sample filenames; neither is an approved final source.

**Do not add:** scan parameters for stored programs, phase identification, peak indexing, crystallite-size interpretation, or instructions to bypass an interlock.

**Release gates:** decide the HighScore/phase-identification training boundary; curate and document the routine stored-program list (until then retain the canonical “choose a stored program; ask staff if none looks right” direction); resolve workstation sign-in and export/copy sequence; verify queue field labels and numbered changer-position control; capture and approve the matched changer-cover pair.

## Instron 68TM-50 Universal Testing System

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/instron.md`](../../instruments/instron.md).

**Canonical SOP spine:** open Bluehill; choose the appropriate load cell, fixture, and method; enter specimen information and limits; load and zero/balance the specimen; unlock and start from the handset; characterize using the approved method; finish/save/export; unload and clean; and leave the frame disabled.

**Level 1 teaching workflow:** run one 50 kN tensile test. Staff must still decide whether the training uses a named saved method or `Run a QuickTest`, define the approved end condition, and confirm the initial and final machine states.

**Side 1 critical box:** **Moving crosshead and stored-energy rule** — hands clear during motion/testing, remain within fixture/load-cell/specimen limits, and use emergency stop only as the canonical page directs.

**Control surfaces required:** both Bluehill and the handset are necessary to understand the taught workflow. Do not reduce the map to the handset or add an improvised inset. Capture a clean native Bluehill test-state view and a new unannotated handset photo, then review and lock an Instron-specific two-view layout before drafting. The existing `ANNOTATED_hand_controller_in_set_up.JPG` and `ANNOTATED_hand_controller_when_disabled.JPG` are composition references only, and their baked-in prose/arrows make them unsuitable as final sources.

**Handset callouts proposed, subject to visible-label verification:**

1. jog controls used to position the crosshead
2. zero displacement
3. unlock and start sequence
4. stop

**Bluehill callouts to finalize after the method decision:** the approved saved-method or `Run a QuickTest` entry route; the specimen-information and limit checkpoint; force balance; and `Finish sample`/save. `assets/img/optimized/instron-bluehill-test-1080.jpg` is an operating-page reference, not automatically an approved map source. Do not use `instron-bluehill-method-1080.jpg`; it is the excluded method-authoring screen.

**Quality panels proposed for staff approval:** a matched pair asking one question about setup quality: a curve with the canonical soft, curved toe caused by slack or grip slip versus a repeat after correcting the setup with that artifact absent. The canonical corrective action is to take up slack, seat the specimen correctly, and re-run. Do not add a generic warning, overload state, or an idealized material curve. Keep the travel-limit prompt as a required SOP check and capture it for the canonical page, but do not mix it into this result comparison.

**Do not add:** method creation, `Admin`, arbitrary test rates or limits, material-property calculations, tensile/compression/flexure variants not selected for Level 1, or a pumpkin example as the generic quality standard.

**Release gates:** decide saved method versus QuickTest and, if applicable, record the exact stored-method name; verify the 50 kN Level 1 fixture image and initial/final machine state; define the end condition; decide and lock the two-view Bluehill/handset layout; capture the current Bluehill test state, travel-limit prompt, unannotated handset, and matched toe-artifact pair; confirm save/export location and naming. The controller modes and roughly two-second unlock/start sequence are documented on the canonical page but still need a current-machine visual check before annotation.

## Olympus DSX-1000 Digital Optical Microscope

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/optical.md`](../../instruments/optical.md).

**Canonical SOP spine:** start the microscope and DSX software; clear and lower the stage; establish objective/head/sample clearance; load and focus a stable sample; characterize it as appropriate; save; unload; retract and power down; log out; and replace the dust cover.

**Confirmed Level 1 teaching workflow:**

1. Use `Best Image` to choose an observation mode suited to the sample.
2. Make a quick 2D stitch for the map image.
3. Capture a normal 2D image.
4. Make a slower, higher-quality 2D stitch for area capture with **Use as map image** deselected.
5. Capture a 3D image.
6. Mention that a high-quality 3D stitch is available, but do not run it during the introductory session.
7. Briefly show that LEXT can analyze data and prepare reports; this is a capability preview, not an independently taught or assessed workflow.

**Side 1 critical box:** **Protect the objective and sample** — establish clearance before motion or tilt, keep gloved sample handling separate from controls, and stop on collision risk or control errors.

**Primary image plan:** capture the native DSX interface state or tightly related states that expose the confirmed Level 1 controls. The current one-image template may be sufficient if all five functions are present and legible in one useful state; otherwise keep the guide blocked until an optical-specific multi-state variant is reviewed. `assets/media/tutorials/optical/best-image-poster.jpg` remains a composition reference, not an approved final source.

**Map functions required, with exact visible labels/icons still to verify:**

1. `Best Image`
2. quick 2D stitch/map-image function
3. normal 2D capture
4. the **Use as map image** selection used to distinguish the higher-quality area stitch
5. 3D capture

Saving remains a Side 1/bottom-reminder requirement unless its exact control can be included without displacing a taught acquisition control. Do not map LEXT; the trainer only previews its capabilities.

**Quality panels required:** the same field in visibly poor focus and in a sharp, usable 2D state. Keep collision risk in the critical/stop box rather than mixing a physical clearance decision into the focus comparison. The current example result assets `assets/img/optimized/optical-bee-color-1200.jpg`, `assets/img/optimized/optical-bee-height-1200.jpg`, and `assets/img/optimized/optical-scored-glass-750.jpg` demonstrate capabilities but do not provide a matched immediate quality gate.

**Do not add:** LEXT analysis steps, report-building steps, 3D high-quality stitching as a performed exercise, volume rendering, extended interpretation, or a named training specimen. The normal 2D stitch, high-quality 2D area stitch, and 3D capture are included because they are explicitly taught in Level 1.

**Release gates:** operationally verify the public Level 1 exercise and staff-guide scope updated on 2026-08-07; capture the exact native interface state(s) and verify every mapped control; determine whether the default one-image layout is sufficient or lock an optical-specific variant; document the current save/copy view; produce the matched focus pair; confirm the final clearance state. Retrofit the existing published optical guide only in a separately authorized task.

## Horiba XploRA Confocal Raman Microscope

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/raman.md`](../../instruments/raman.md).

**Canonical SOP spine:** start the system, verify the enclosure/interlock state, position and focus a compatible sample, select appropriate trained settings, characterize and save as appropriate, stop acquisition/emission as required, unload, and shut down.

**Confirmed Level 1 teaching workflow:** load the silicon calibration sample; focus with TopCam; close the doors and confirm the interlocks lock; use the internal camera and laser to focus; start `RTD` and refine focus by making small up/down adjustments to optimize counts; run `AutoCalibration` to verify system function; then load the actual sample and repeat the applicable focusing and acquisition path. The approved starting laser/acquisition settings and exact calibration pass criterion remain unresolved.

**Side 1 critical box:** **Laser enclosure rule** — close the enclosure doors before verifying the laser or collecting; respect the door interlock and key; if the laser is not visible, check the documented door/interlock/key conditions rather than bypassing anything. Do not state a sample-change/emission sequence until staff verifies it on the actual system.

**Multiple interface states required:** TopCam focusing, internal-camera/laser focusing, `RTD`, and `AutoCalibration` are distinct parts of the confirmed teaching sequence and should not be presented as if they coexist in one screen. Capture each required state cleanly, then review and lock a Raman-specific multi-state layout before drafting.

**Acquisition-state callouts proposed only after staff verification:**

1. `Stop All`
2. real-time display / `RTD`
3. routine acquisition/start control
4. save control, if it is visible in the same approved view

The multi-state plan must also locate the TopCam focus controls, internal camera/laser focus state, and the Maintenance-tab `AutoCalibration` entry without implying they coexist. If any label or role is not exactly current, replace the proposal with staff-verified controls before drafting.

**Quality panels required:** failed/unacceptable versus passing silicon calibration or other approved reference check, with the exact observable criterion supplied by staff. `assets/media/tutorials/raman/display-flip-poster.jpg` is not sufficient evidence for this decision.

**Do not add:** laser power, grating, objective, slit, hole, integration-time, or accumulation recommendations unless the canonical page defines the approved routine setting; no peak assignment or material identification.

**Release gates:** verify the laser-safety, interlock, and sample-change sequence; select the Level 1 starting configuration; confirm every control name and role; decide and lock the multi-state layout; capture TopCam, internal-camera/laser, RTD, acquisition, and AutoCalibration states plus the matched calibration pair; verify the silicon reference criterion and define calibration pass/fail; confirm save/export and shutdown.

## Innovatest Nemesis 5100G2 Hardness Tester

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/hardness-tester.md`](../../instruments/hardness-tester.md).

**Canonical SOP spine:** start the instrument and software; confirm the installed indenter/scale and specimen are compatible; load, focus, and position the specimen; characterize as appropriate; save; unload; clean; and restore the tester.

**Level 1 teaching workflow:** perform one single-point Vickers measurement: select a verified installed scale/method, focus and position a prepared specimen, make the indent, verify the measured diagonals/quality state, save, unload, and restore the tester.

**Side 1 critical box:** **Scale, indenter, and turret rule** — the selected scale must match installed hardware and specimen limits; hands remain clear of turret and moving components.

**Primary image required:** a new native-resolution camera/software view in the current routine state.

**Primary callouts proposed:**

1. `IN FOCUS`
2. `SCALE SELECT`
3. `SINGLE POINT`
4. `START`
5. `SAVE` only if visible without crowding; otherwise place it in the bottom reminder

`TEST PATTERN` belongs only if staff explicitly make a pattern part of the default Level 1 workflow.

**Quality panels required:** a staff-approved pair showing a good square/symmetric indent with accepted diagonals and the software's documented red diagonal box when the diagonal difference exceeds 5%. Verify that rule on the current machine before publication.

**Do not add:** unsupported scales, arbitrary loads/dwell times, conversion tables, metallographic interpretation, or maintenance/calibration procedures.

**Release gates:** inventory fitted indenter/load hardware and offered Vickers scales; record the exact Level 1 scale/method; capture all current controls; approve the indent quality pair and current warning behavior; confirm save/export and final state.

## Microtrac Sync Particle Size Analyzer

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/psa.md`](../../instruments/psa.md).

**Canonical SOP spine:** open the Sync Analyzer, verify the active database, load a suitable measurement SOP, load the sample using the appropriate approved accessory, run the measurement, save/export, unload and clean, close FLEX, and log off.

**Level 1 teaching workflow:** use the shallow tray only: clean it, loosely load dry powder, and run `Auto-Sequence`, which performs setzero and sample collection. The deep tray exists but has not been needed in routine training; it remains staff-guided and is excluded from the primary Quick Guide.

**Side 1 critical box:** **Load dry powder loosely** — use the canonical shallow amount, keep it behind the line, distribute it evenly, do not compress it, and keep contamination out of the tray.

**Primary image required:** a new, unannotated native-resolution FLEX capture in the routine run state. `assets/img/tutorials/psa/AutoSequence.png`, `MeasurementSOP.png`, and `SyncAnalayzer.png` document relevant states, but they contain baked-in red boxes; `AutoSequence.png` also displays a database path/name and is not an acceptable final source.

**Primary callouts proposed across the one approved view:**

1. `Sync Analyzer`, if present in the approved state
2. active database indicator or database control, using the exact visible label
3. `Measurement SOP` or the exact visible control used to load it
4. `Auto-Sequence`

The new routine-state capture should show these locations together, as the current `AutoSequence.png` state does. If the current interface no longer does, put the connection or database step in the SOP/reminder and keep one primary screenshot; do not add a second software walkthrough or change the template.

**Quality panels required:** a new matched tray-loading pair showing compressed or mounded material versus the canonical shallow-tray load: about 1/4 teaspoon, spread along the tray, not compressed, and kept behind the line. Minor unevenness or a small amount past the line is explicitly allowed by the detailed instructions, so do not present visual perfection as a pass criterion. Do not use a distribution plot unless staff first defines a simple repeat/accept rule on the canonical page.

**Bottom reminder:** title/sample ID/notes and final export/copy, using exact verified field names and destination.

**Do not add:** the deep tray, D10/D50/D90 interpretation, second-peak interpretation, arbitrary SOP parameters, database naming guesses, or recommendations for unapproved powders.

**Release gates:** approve database and file/export conventions; capture a sanitized unannotated routine interface and verify current control labels; capture and approve the shallow-tray loading pair; confirm the current standard measurement SOP or retain the canonical ask-staff fallback. The shallow-tray Level 1 boundary and the canonical materials limits, cleanup, and final state are settled and must not be expanded.

## Horiba Duetta Fluorescence And Absorbance Spectrometer

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/uv-vis.md`](../../instruments/uv-vis.md).

**Canonical SOP spine:** start the Duetta and EZ Spec; choose an appropriate trained method; handle and load a compatible blank/reference and sample in the prompted order; characterize and save as appropriate; remove the cuvette; clean the compartment; close the software; log out; and power the instrument off with the front button.

**Level 1 teaching boundary proposed for editorial review:** one core absorbance/transmission workflow in EZ Spec using a compatible blank/reference and sample in the prompted order. Treat the current public blank-mismatch comparison, concentration series, and saturation/dilution exercises as extensions until staff deliberately chooses one for the standard introductory session. Fluorescence remains staff-guided and excluded from this primary guide. Staff must still approve the routine wavelength and acquisition settings.

**Side 1 critical box:** **Cuvette and liquid rule** — use compatible clean cuvettes, keep optical faces clean, contain liquid, follow the prompted blank/reference/sample order, and leave the compartment empty and clean.

**Primary image required:** a new, sanitized, unannotated native-resolution EZ Spec screen in the approved Level 1 state. The existing `Absorbance.png`, `Both.png`, and `Acquire.png` are composition references only: they contain baked-in annotation and expose a username, user path, sample name, and/or method name.

**Primary callouts proposed for the one acquisition-state image:**

1. sample-name field, using the exact current label (shown as `Data Name` in the existing reference)
2. save-folder field, using the exact current label (shown as `Save data folder to` in the existing reference)
3. selected-method field, using the exact current label (shown as `Current Method` in the existing reference)
4. `Acquire`

Keep `New Method`, `Absorbance and Transmission`, `Spectra`, and mode `Both` in the detailed instructions or Level 1 checklist because they occur during method setup and do not coexist with all acquisition controls in one useful screen. Do not add them to the canonical SOP or simulate a composite interface.

**Quality panels proposed:** use a matched saturated/clipped spectrum versus the same sample after dilution and recollection only if staff promotes saturation/dilution into the standard Level 1 workflow. Otherwise select a simpler immediate loading/blank decision during the UV-Vis cleanup pass. Do not combine bubbles, fingerprints, scratches, settling, and wrong-blank diagnosis into one panel.

**Do not add:** fluorescence, peak assignment, concentration calculations, arbitrary wavelength ranges/integration settings, or cuvette compatibility claims absent from the canonical page.

**Release gates:** clean up and approve one standard Level 1 exercise; approve its wavelength/acquisition settings and immediate quality decision; verify the prompt order and every control; capture a sanitized interface and matched quality states; confirm save/export. The canonical cuvette handling and shutdown states are already stated and must be copied without adding unverified compatibility claims.

## Technoorg-Linda SEMPrep 2 Broad Beam Ion Mill

**Status:** **BLOCKED. Do not draft.**

**Canonical source:** [`../../instruments/ion-mill.md`](../../instruments/ion-mill.md).

**Canonical SOP spine:** complete startup/argon purge; load through the software sample-exchange procedure; choose trained settings; confirm pressure below 5 x 10<sup>-6</sup> mbar; start and monitor the semi-automatic run; turn high voltage off before motion; return tilt to 0&deg;; unload; and complete shutdown.

**Level 1 teaching workflow:** surface-polish a flat, mechanically polished metallographic sample in an approved polishing holder using **semi-automatic** needle-valve control. Staff must still select the one holder, ion source, and approved starting settings. Automated recipes are not part of Level 1.

**Side 1 critical box:** **High voltage, vacuum, and argon** — use only trained conditions or an approved recipe; do not open or unload until high voltage and sample motion are off and the canonical vent/finish state is reached; stop on abnormal pressure or motion.

**Primary image candidate:** `assets/img/tutorials/ion-mill/stage-control.JPG`, after a current-machine check. It visibly includes sample motion, stage tilt, `Sample loading/removal`, `Purge (5s)`, semi-automatic needle-valve control, pressure, and system-status areas. Do not use the low-resolution `purge.JPG` as the primary image; it may serve only as a composition reference.

**Primary callouts proposed only after verification:**

1. `Purge (5s)`
2. `Semi-automatic control`
3. `Sample loading/removal`
4. pressure/status area, using only the exact visible labels

`Finish` appears inside the sample-exchange sequence rather than on the approved main view. `Run all steps` belongs to automated-recipe operation and is excluded from the Level 1 map. Do not list either as a main-image callout unless it is visible and required in the final source.

**Quality panels required:** stop/not-ready versus ready pre-run system state centered on the canonical pressure threshold and the staff-approved high-voltage/motion/stage indicators. Do not claim that the current `stage-control.JPG` is ready: its displayed pressure is 8.96 x 10<sup>-6</sup> mbar, above the canonical below-5 x 10<sup>-6</sup> mbar run threshold. Before/after surface images under `assets/img/instruments/ion-mill/` show capabilities but are not an immediate at-instrument acceptance criterion because final evaluation may require another microscope.

**Do not add:** new recipes, recipe parameters, holder variants, slope-cut and flat-polish branches together, advanced alignment, or SEM interpretation of the milled result.

**Release gates:** select one polishing holder, ion source, and approved semi-automatic settings; verify every current control; capture the approved semi-automatic control view and system-state pair; confirm the exact finish/unload state. The semi-automatic boundary, purge count/timing, pressure threshold, high-voltage/motion ordering, and final shutdown state are settled and must not be reopened or silently changed.

## What To Capture When A Blocker Is Resolved

For any new software image, capture the whole relevant application window at native resolution with the Level 1 method loaded and no private names, identifiers, file paths, or unrelated data visible. Also capture a clean unannotated source. Annotations stay in the guide's inline SVG.

For any new result pair, use the same sample and view where feasible, deliberately capture the single observable condition the guide asks the user to judge, and have experienced staff approve both the image and caption before it becomes a release asset.

For any new hardware image, frame the hand position, clearance, orientation, interlock, or status indicator the user must recognize. A wide instrument portrait is not a loading or safety-control image.
