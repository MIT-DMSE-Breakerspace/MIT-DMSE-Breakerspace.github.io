---
published: false
---

# Instrument Page To-Do List

Last reviewed: 2026-08-20

This is the canonical staff checklist for instrument-specific page improvements. It consolidates the to-do items formerly shown on the public instrument pages and is excluded from the public Jekyll build.

The repository may still be publicly readable. Do not store credentials, access codes, private student information, or sensitive security details here.

Follow the [Tutorial Media Production Guide](../_staff/tutorial-media/README.md) for all new tutorial photography, screen recording, video capture, processing, and publication work.

## Cross-Instrument Quick Guide Rollout

The content contract and relationship to staff training were settled on 2026-08-03 in [`readme.md`](readme.md#quick-guide-content-contract). The canonical instrument page is the source; the Quick Guide and staff guide are sibling derivatives.

* [x] Audit the SOP/visual-map work orders against the canonical page H1s, Level 1 exercises, current staff gaps, and actual source images. False instrument identities were corrected and source-backed facts were separated from proposed drafting decisions on 2026-08-07. The same-day follow-up separated the canonical SOP spine, Level 1 teaching scope, and map controls; corrected overreaching public SOPs; and recorded the confirmed optical, Raman, particle-size, and ion-mill scope decisions. See [`instrument-specifications.md`](../_staff/quick-guides/instrument-specifications.md).
* [ ] Review the authorized 2026-08-10 cross-instrument provisional composition set. The eleven drafts were published behind conspicuous provisional warnings on 2026-09-11 so staff can review them on the web. Each remains visibly incomplete, reproduces the canonical SOP on Side 1, uses standardized descriptive frames for unavailable images, and preserves unresolved curriculum or technical choices as review gaps. Review publication does not make a blocked guide technically complete or usable at an instrument. **The audit findings and required corrections are in [`../_staff/quick-guides/audit-2026-08-10.md`](../_staff/quick-guides/audit-2026-08-10.md). Work that document rather than re-auditing the set.**
* [ ] Review and close the audit's publication-stopping header-layout finding. An unreviewed 2026-08-11 trial gives the prototypes one-line instrument-name titles, moves workflow qualifiers and any displaced manufacturer text into the smaller subtitle, and reduces advisory top spacing to 0.04 in. Automated print-media measurement reports `0 px` trained-user-note/SOP-title overlap on all eleven prototypes without shrinking type or dropping identity content. This commit is a backup, not approval: open the complete rendered set for visual review at the start of the next session before checking off the finding.
* [ ] Generate the ten missing instrument-page QR assets. Only `assets/img/qr/ftir-page.svg` exists. Separately, the `--qr` placeholder variant hides its own "Release gate" text in CSS, so the printed drafts do not disclose that a QR is outstanding — decide how that gate should surface in print.
* [ ] Audit the optical and XRD Quick Guides against the canonical SOP. Account for the complete normal-use path from the expected ready state: routine startup, operation, saving/export, cleanup, shutdown, stop conditions, and before-leaving state. Conditional recovery, maintenance, and unusual-startup steps may remain on the canonical page when the guide states the expected condition and points users there or to staff. FTIR was audited and rebuilt 2026-08-03; use `_includes/quick-guides/ftir.html` as the content model.
* [ ] Rebalance the three pilots toward at-instrument action. Reduce extended interpretation, retain only the immediate quality gate, and add selected hardware or software control-finding visuals where the paper copy prevents browser/software toggling. The unpublished [FTIR SOP/visual-map prototype](../quick-guides/ftir-sop-map-prototype.md) is the approved drafting model as of 2026-08-07; use the [locked production procedure](../_staff/quick-guides/README.md), not ad hoc propagation. The [2026-08-10 audit](../_staff/quick-guides/audit-2026-08-10.md) found the earlier FTIR image and control-key treatment unsafe to copy; on 2026-08-12 those three failed poster frames were replaced with selected native 1920x1080 captures and the exact visible OMNIC labels, while the raster sources remained unannotated.
* [ ] Print-test every guide on US Letter at 100% in duplex, grayscale, and color. Check legibility, clipping, page count, long-edge flip, and whether it can be followed while the control software remains fullscreen. The revised FTIR provisional artifact renders as two Letter pages and passes direct HTML validation. Its unreviewed compact display-title trial and the shared 0.04 in advisory spacing clear the trained-user-note/SOP-title overlap in automated measurement; open it for visual review next session before approval. Preserving the original repeat-cycle bullet while adding the confirmed contaminated-background cycle still makes the final shutdown bullet overlap the footer by 46.8 px and extend 0.9 px past the sheet. Three selected native 1920x1080 OMNIC captures now replace the failed poster frames and placeholders, with exact visible labels and non-destructive callouts. It still needs a reviewed Side 1 layout correction, final staff capture/callout review, QR decode, color and grayscale physical proofs, and a physical duplex proof. See [`../_staff/quick-guides/audit-2026-08-10.md`](../_staff/quick-guides/audit-2026-08-10.md). Optical and XRD keep their older layout until separately authorized for retrofit.
* [ ] Move the Quick Guide link out of the at-instrument decision path in Quick Actions and label it for at-instrument use, printing, accessibility, and fallback. Keep the canonical page and SOP as the apparent web starting point.
* [ ] Confirm workstation desktop shortcuts and general posted QR codes open the canonical instrument page rather than bypassing it for the Quick Guide.
* [ ] Print, laminate, label, and install the reviewed guide at each instrument. Record who checks the physical copy after workflow revisions and who replaces damaged or outdated copies.
* [ ] Resolve the explicit workflow, image, control-name, quality-gate, and end-state blockers in the [per-instrument Quick Guide work orders](../_staff/quick-guides/instrument-specifications.md). The authorized provisional pass may expose those blockers using the locked placeholder/review-gap treatment; do not let an implementation assistant invent content, conceal a blocker, or treat a provisional draft as technical completion.
* [ ] Add Quick Guides for remaining instruments in parallel with their staff guides once each canonical SOP and Level 1 workflow are stable. Use the locked template, keep each candidate unpublished, complete the continuous staff-guide checklist for the normal-use path, and run a practice training before routine delivery.
* [ ] When an additional, genuinely separate task cannot fit the primary guide, create a task-specific workflow card rather than shrinking or cramming. When the approved Level 1 workflow itself spans multiple control surfaces or states, use the reviewed layout-variant process below rather than silently splitting or narrowing the curriculum.
* [ ] Review and lock instrument-specific multi-view variants before drafting any guide that cannot be represented honestly by the default one-map composition. Instron requires Bluehill plus handset; Raman requires several LabSpec/camera states; optical may require several DSX states after capture. Do not invent insets ad hoc.

## Nicolet iS5 FTIR Spectrometer

* [x] **Resolve the background-preview and contact-quality criteria.** Lab-manager review on 2026-08-11 confirmed that the live background preview is not a pass/fail test; background readiness comes from a clean, dry, bare, unclamped crystal. The canonical page now says so. It separately defines the sample-preview contact cue as a change from a near-zero trace to a sample spectrum, explicitly not a universal spectrum-shape or signal-strength pass criterion.
* [x] **Resolve OMNIC System Status recognition.** Staff confirmed 2026-08-11 that a green check means the instrument is ready. Any other status prevents background and sample collection rather than allowing flawed results, so users stop and ask staff; no additional failed-state catalog is needed.
* [ ] **Add named atmospheric and contamination band positions to the page.** [`#failures`](./ftir.md#failures) and the science section describe water vapor, carbon dioxide, solvent, and residue features qualitatively but give no wavenumbers, so a user cannot recognize them on a spectrum. A draft Quick Guide revision cited approximately 3700 and 2350 cm<sup>-1</sup>; those numbers were not sourced from this page and were removed. Have staff confirm the positions actually seen on this instrument, add them to the page, and only then let the Quick Guide name them.
* [x] **Make the background-redo cycle explicit in the SOP.** Lab-manager review on 2026-08-11 confirmed the complete unload → clean and dry → bare/unclamped background → reload and recollect cycle and the stop condition when features remain. The canonical SOP, detailed sample workflow, and failure table now carry it.
* [ ] Replace hand/sample-loading photos or videos with versions showing appropriate glove use.
* [ ] Replace or reshoot the solid sample, powder sample, liquid sample, crystal cleaning, volatiles cover, and pressure-tip videos with gloved versions; publish future motion instruction as controlled MP4/WebM rather than GIF.
* [ ] Add one or two annotated example spectra showing major peaks and how to compare an unknown with a known reference.
* [ ] Add a teaching example contrasting a pure or simple sample with a complex mixture such as coffee, emphasizing when FTIR supports identification and when it mainly supports comparison.
* [ ] Add a short database-search walkthrough using Wiley KnowItAll or another approved reference workflow.
* [ ] Add a concise accessory-change note for iD1 transmission and EasiDiff diffuse reflectance, or mark those as staff-guided until a dedicated workflow is written.
* [ ] Add a small set of approved training samples for repeatable FTIR exercises once the sample library is ready. **Not a guide blocker:** the FTIR guide pair is sample-agnostic by decision of 2026-08-05, so it states selection criteria rather than naming materials. Adopting approved samples later is an enhancement, not a prerequisite for rollout. See [`../_staff-training/README.md`](../_staff-training/README.md#sample-agnostic-guides). Note when that work starts: `_samples/bs-000004.md` (acrylic yarn) **already carries an ATR-FTIR spectrum measured on this instrument** — a JCAMP-DX file plus an image, absorbance, 400.036–4000.001 cm<sup>-1</sup>, 1 cm<sup>-1</sup> resolution, 32 sample / 32 background scans. It is a candidate reference spectrum that nobody has reviewed as a teaching reference yet. It is also the only one of the five current sample-library entries with FTIR data, and there is no paper or cellulose specimen in the library at all.

## Innovatest Nemesis 5100G2 Hardness Tester

**2026-08-12 handoff:** Level 1 now defaults to the programmed `Vickers 300 gf` test, reported as `HV 0.3`; trainers and users leave its programmed load, dwell, and other test settings unchanged. The external `admin/screenshots/innovatest` capture set includes scale menus, routine controls, an HV 0.3 run/result, report/export views, end-state views, and hardware photos. Selection, review, descriptive naming, copying, and integration remain open, so the media tasks below are not yet complete.

* [ ] Add photos of the power switch, sample on the stage, and the turret with indenters and objectives.
* [ ] Add annotated Impressions software screenshots: the camera/focus view, the **IN FOCUS** button, the **SCALE SELECT** test button, and the **TEST PATTERN** editor.
* [ ] Add an example result showing a well-formed Vickers indent with its measured diagonals (crosslines on the corners), and a poor indent with a red diagonal box for comparison.
* [ ] Add page-level manual citations to the detailed steps now that the [manuals](./hardness-tester.md#manuals) are hosted.
* [ ] Confirm which indenters and objectives are actually fitted in the turret and note the exact scales offered, so the [available scales](./hardness-tester.md#scales) list can be made specific to this machine.
* [ ] Add or link a hardness conversion table for the common scales used in the lab.
* [ ] Confirm approved training samples (a standard hardness block and example alloys) for the exercises once the sample library is ready.

## Instron 68TM-50 Universal Testing System

The detailed operating instructions were levelled on 2026-07-29 (see the readiness table in [`readme.md`](readme.md)). Remaining items are media and staff verification.

* [ ] **Add an annotated example force-displacement (or stress-strain) curve** showing the stiff region, yield, peak, and failure point. This is the last content gap on the page; the curve is currently described in prose under [reading a force-displacement curve](./instron.md#reading-curves) and a placeholder sentence sits at the end of the worked example. Remove that sentence when the figure lands.
* [ ] **Replace the removed, incorrect 5 kN setup image.** Photograph the 5 kN load cell with the actual 5 kN tensile grips installed, have staff confirm every component and capacity label before publication, and only then add it to the 5 kN setup section. The removed image showed 1 kN grips and must not be reused as a 5 kN reference.
* [ ] Reshoot or standardize the remaining setup photos for tensile (1 kN and 50 kN), compression, and flexure so each test type has a clear, consistent figure. When the corrected 5 kN photo is ready, match it to the same format.
* [ ] Add a screenshot of the **travel-limit prompt** as it appears when starting a test. The method screen, test screen, and home screen are now published; the limit prompt is the one Bluehill screen still described only in prose.
* [ ] Capture a clean, unannotated current handset photo for the Quick Guide. The existing annotated student-worker images are composition references only and must not be reused as the final source.
* [ ] Capture a clean, native-resolution Bluehill test-state view showing the controls actually used in the selected Level 1 method. The Quick Guide must show both Bluehill and the handset; approve a readable two-view layout before annotation.
* [ ] Capture a matched force-displacement example showing the canonical soft curved toe from slack/grip slip and a repeat after correcting the setup; have staff approve the at-instrument caption and the immediate trainer decision the comparison supports.
* [ ] Consider a short MP4/WebM of the unlock-then-start sequence, since the roughly two-second CAUTION window is hard to convey in text and is a common first-run stumble.
* [ ] **Confirm whether Level 1 uses a saved method or QuickTest, then confirm the lab's default method names and export conventions.** The page deliberately describes method setup generically (templates, rate, end-of-test condition, operator inputs) because the actual path, saved method names on the workstation, default save location, and any course-specific methods were not verified. Confirm these and make the [method](./instron.md#method) and [saving](./instron.md#saving) sections specific to this machine. Keep authentication details in training or at the instrument.
* [ ] Confirm the **end-of-test condition** the lab recommends for a general tensile test to failure. The page cites the 3.000 coffee-bean method's 30% force-drop condition as an illustrative example, taken from `handouts/3.000 Instron Station .pdf`; a recommended default for independent users would be better.
* [ ] Confirm whether **load-string preload** is genuinely staff-only, as the page now states. The 6800 guide documents the `Preload Grips` method (pp. 107–109) and the page directs users to ask staff rather than loosen lock nuts; confirm this matches lab policy.
* [ ] Define and verify the complete initial and final hardware states for the 50 kN Level 1 tensile setup: installed load cell and fixtures at the start, what is removed or retained after cleanup, and the disabled-frame before-leaving state. Do not infer this from setup photos or another-capacity fixture.
* [x] Confirm grip capacities: the lab has distinct 1 kN and 5 kN tensile grips. Keep them separate in captions, worked examples, and training media. Confirmed by staff 2026-07-29.
* [ ] Add the pumpkin-compression results figure and, if useful, a labeled force-displacement curve from the event. (`assets/img/instron-pumpkin-results.jpg` exists and is used on the lounge and showcase pages but not on the instrument page.)
* [ ] Confirm approved training samples for the exercises once the sample library is ready.

## SEMPrep 2 Broad Beam Ion Mill

* [ ] Capture a current, unannotated Level 1 control view and matched not-ready/ready system states. The existing `stage-control.JPG` shows 8.96 x 10<sup>-6</sup> mbar, above the canonical below-5 x 10<sup>-6</sup> mbar run threshold, so it must not be labeled ready.
* [ ] Add a photo or GIF of a trained user opening the argon cylinder and confirming the correct regulator state.
* [ ] Add a short screen-capture GIF of the startup purge sequence and semi-automatic needle-valve setup.
* [ ] Add a screen-capture GIF of the software-guided sample loading/removal procedure.
* [ ] Add photos of the actual Breakerspace polishing holders labeled by name and use case.
* [ ] Add photos of a gloved hand loading a polishing holder with the correct tool.
* [ ] Add photos or GIFs showing sample height adjustment for the polishing holder.
* [ ] Add photos or GIFs showing a sample being bonded to a carrier plate in the gluing jig.
* [ ] Add photos or GIFs showing 30&deg; and 90&deg; alignment under the sample alignment microscope, including what the target mask gap looks like on screen.
* [ ] Add a screenshot of the automated recipe library with a safe example recipe highlighted for the detailed operating page or a later advanced card. Automated recipes are not part of Level 1 and must not enter the primary Quick Guide.
* [ ] Add one complete level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add one level 2 slope-cutting exercise using a specific layered or coated sample-library item, including bin number/location once available.
* [ ] Add before/after SEM image pairs showing successful polishing, insufficient polishing, redeposition, and sample damage.

## DSX-1000 Digital Optical Microscope

* [ ] Capture native-resolution DSX interface state(s) that show the five confirmed Level 1 functions: **Best Image**, quick 2D map stitching, normal 2D capture, the **Use as map image** choice for high-quality 2D area stitching, and 3D capture. Also capture a matched poor-focus/focused pair. Determine whether one useful state can carry all five callouts or whether a reviewed multi-state variant is needed.
* [ ] Add a complete level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add photos or videos showing the correct startup sequence: power switch, Guest login, stage/head movement acknowledgement, lowering the stage, and tilt position.
* [ ] Add photos or videos showing objective exchange and how to choose between long-working-distance and extra-long-working-distance objectives.
* [ ] Add a screenshot or video showing the recommended save-location workflow.
* [ ] Add example image sets comparing brightfield, oblique, darkfield, brightfield/darkfield mix, polarization, and DIC on the same sample.
* [ ] Add more annotated example results for stitched imaging and measurement/profile workflows.
* [ ] Add an MP4/WebM video of 2D acquisition, 3D acquisition, and stitching setup.
* [ ] Keep high-quality 3D stitching as a mention and LEXT analysis/reporting as a capability preview in Level 1. Do not map LEXT or write its analysis steps into the primary Quick Guide.
* [ ] Add example measurement outputs for profile, volume, roughness, and STL export.
* [ ] Add common sample-prep examples for flat samples, tall samples, fragile samples, and liquid-containing samples.

## Phenom Pure SEM

* [ ] Capture clean, unannotated Pure NavCam and LiveSEM views for the room-temperature Level 1 workflow. The LiveSEM source must show or support verified callouts for focus, brightness/contrast and automatic adjustment, magnification, acquisition, and the grouped top panel with voltage, beam/intensity, resolution, and averaging.
* [ ] Add a complete Pure level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add photos or GIFs showing Phenom Pure holder selection and stub loading, including a matched over-height versus correct below-holder-edge pair for the Quick Guide readiness check.
* [ ] Add a GIF of setting the image label and save location in the Phenom software.
* [ ] Add a GIF of moving from NavCam to SEM view, focusing, and acquiring the first image.
* [ ] Define the observable Level 1 image-quality decision for the room-temperature Pure workflow without inventing a universal resolution or contrast threshold.
* [ ] Confirm the exact save/export and naming convention and the final holder/chamber standby state. Keep the Pure holder-return rule distinct from the XL tray state.
* [ ] Add cold-stage photos or GIFs showing cryo gel turning fully white, acceptable vs excessive frost, and black wire/connector placement during loading.
* [ ] Add before/after image examples of cold-stage drift, frost, and sample outgassing.

## Phenom XL SEM

* [x] Confirm the expected starting state. Lab-manager confirmed 2026-08-20: tray inside the closed sample compartment, Phenom software closed, Windows at the sign-in screen, and microscope in standby. This was not recorded as a direct instrument observation.
* [x] Verify the complete normal loading sequence at the XL. Directly observed 2026-08-20: it matches the canonical software-start/connect → software eject/open → tray removal → stub loading and XL-specific clearance recheck → tray reinsertion → same software control/close → NavCam sequence. The existing matched clearance pair remains supporting evidence; tray-removal and stub-loading motion media are still uncaptured.
* [x] Identify a clean, unannotated native-resolution XL NavCam source candidate. Reviewed 2026-08-20: `assets/img/tutorials/sem/phenom-xl-navcam-empty.png` is a sanitized 3840 x 2160 capture that shows the move-to-SEM icon in the upper left below the eject/open-close icon and the three lower-left adjustment icons. Direct observation confirmed the transition icon has two plus-sign circles with an arrow between them and the mouse-over label **move to SEM**; the adjustment labels are **magnification**, **brightness/contrast**, and **focus**. Final source approval remains open.
* [x] Identify a clean, unannotated native-resolution XL SEM source candidate. Reviewed 2026-08-20: `assets/img/tutorials/sem/phenom-xl-sem-top-panel.png` is a sanitized 3840 x 2160 capture with the settings panel open and exact visible labels including **Acc. Voltage**, **Beam Intensity**, **Detector**, **Vacuum**, **Live**, **Averaging**, **Scan Size**, and **Acquisition**. Final source approval and complete Level 1 group selection remain open.
* [x] Resolve the resolution-label conflict. Lab-manager confirmed 2026-08-20 that XL guidance should use the exact UI label **Scan Size** and may clarify it as image resolution.
* [x] Integrate a reviewed multi-view XL map rather than forcing the workflow into one screenshot. The 2026-08-18 layout preserves whole-screen orientation, routine lower-left controls, Focus in Area and fine focus, NavCam navigation, and the grouped settings panel.
* [ ] Approve whether the 2026-08-20 NavCam and SEM source candidates should replace or supplement the integrated 2026-08-18 crops, select whether **Detector** and **Vacuum** join the grouped Level 1 settings-panel inspection, and verify the remaining mapped icon functions, including acquisition, automatic brightness/contrast, and the right-click **Focus in Area** menu.
* [ ] Add a complete XL level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [x] Add photos or GIFs showing XL tray removal and stub loading, including a matched over-height versus correct 5-7 mm below-tray pair for the Quick Guide readiness check. The matched clearance pair is integrated 2026-08-12; both frames were staged outside the chamber. Tray-removal and stub-loading motion media are still not captured.
* [ ] Add a GIF of setting the image label and save location in the Phenom software.
* [ ] Add a GIF of moving from NavCam to SEM view, focusing, and acquiring the first image.
* [ ] Define the observable Level 1 image-quality decision for the XL imaging workflow without inventing a universal resolution or contrast threshold.
* [ ] Confirm the exact save/export and naming convention and the final tray/chamber standby state. Do not substitute the Pure holder-return rule.
* [x] Approve the EDS curriculum boundary. Reviewed 2026-08-20: Phenom XL Level 1 includes a brief trainer-operated EDS capability preview and advertises optional Level 2 EDS-focused training. Level 2 is not a prerequisite for independent EDS use. Do not add EDS controls to the primary SEM Quick Guide.
* [ ] Add a GIF of starting and stopping Live EDS, emphasizing the stop button before navigating away, for the optional Level 2 training or later EDS task card.
* [ ] Add screenshots of a complete EDS report/export workflow and example CSV/raw-data export for the optional Level 2 training or later EDS task card.

## Microtrac Sync Particle Size Analyzer

* [ ] Recapture the routine FLEX views without baked-in red boxes, private database names, or file paths. Use one unannotated native-resolution source for the Quick Guide control map.
* [ ] Capture a matched shallow-tray loading pair showing the fill line and evenly distributed versus compressed loading for the Quick Guide. Photograph the deep tray separately only as detailed-page reference; the shallow tray is the settled Level 1 accessory and the deep tray remains staff-guided.
* [ ] Add an annotated example distribution plot showing D10/D50/D90 and a bimodal example.
* [ ] Confirm approved standard/training powders for the exercises once the sample library is ready, including cabinet location.
* [ ] Confirm the workstation access handoff and default database/export conventions. Keep authentication details in training or at the instrument rather than publishing them.

## Horiba XploRA Confocal Raman Microscope

This page was substantially expanded from a thin original and still needs verification and images. Items are grouped by type.

### Verify With Staff (Technical Accuracy)

* [ ] Confirm the exact LabSpec 6 control names used in the Level 1 path match the interface: TopCam focusing, internal camera/laser view, "stop all," RTD, AutoCalibration (Maintenance tab), routine acquisition/start, and save. Verify advanced Acquisition-tab and Map labels separately for the detailed page.
* [ ] Confirm the silicon reference peak position (page states ~520 cm<sup>-1</sup>) and the recommended starting acquisition time, accumulations, and ND filter/power for a first measurement.
* [ ] Confirm the confocal hole and slit values to recommend for routine surface work and for z-depth profiling, and add them where the page currently flags them as staff-confirm.
* [ ] Confirm the startup/interlock description (door interlock, interlock key, internal-camera laser check) matches the actual hardware and the intended laser-safety procedure.
* [ ] Confirm that AutoAlignment is staff-only and that the staff-only note reflects lab policy.

### Screenshots And Photos (Standard Workflow)

* [ ] Startup: the laser emission remote-control power and the powered-on indicator.
* [ ] Objectives: the 5x (wayfinding), 10x, and 100x, and where the objective is selected in the software.
* [ ] Focusing: TopCam view, the joystick focus control, and the silicon slide/sample on the stage.
* [ ] Laser verification: the internal-camera view showing the laser spot, plus the closed-door/interlock state used in training.
* [ ] Live setup: the RTD spectrum during small up/down focus adjustments, and the AutoCalibration routine with a passing result.
* [ ] Acquisition: the collection-parameters screen with the key fields labeled.
* [ ] Capture all Level 1 states as sanitized, unannotated native-resolution sources, then approve a multi-state Quick Guide layout. Do not imply TopCam, internal camera, RTD, and AutoCalibration coexist in one interface state.
* [ ] Mapping: a video image with a map area drawn, and an example chemical map (for example, a combination tablet).
* [ ] Z-profiling: a diagram or example depth profile showing layers resolved at different confocal hole sizes.

### Content And Examples

* [ ] Add an annotated example spectrum showing labeled peaks, and a fluorescence-dominated spectrum for comparison.
* [ ] Expand Data Processing with a LabSpec 6 baseline-correction and peak-search walkthrough, ideally with screenshots.
* [ ] Confirm approved standard/training samples (polystyrene, combination tablet, a layered film for z-profiling) for the exercises once the sample library is ready.

### Manuals And Links

* [ ] The core manuals are now hosted on the page (LabSpec 6 general use, AutoFocus, the confocality tech note, and the spectral-resolution note), plus a link to the full Dropbox documentation folder. Add the XploRA hardware manual or an AutoCalibration guide if a user-facing need comes up.
* [ ] Consider adding real student-project or example-result links to the Links section.

## Phenom Scanning Electron Microscopes (Shared SEM Hub)

* [ ] Add a complete level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Develop optional Level 2 EDS-focused training and a concise EDS task card if useful; it should cover sample/mount/coating implications, voltage and working distance, point/area/live/map choices, stop-before-moving, peak overlap, and save/export. Specific stocked samples or standards can be added later when available.
* [ ] Add a level 2 non-conductive-sample exercise using a specific sample-library item suitable for low-vacuum and sputter-coated comparison.
* [ ] Add annotated SEM and EDS example results showing how image contrast and elemental maps answer different kinds of questions.
* [ ] Add photos or GIFs showing a gloved hand placing a stub in a prep tray and mounting a sample with stub tweezers.
* [ ] Add photos or GIFs showing powder transfer to carbon tape, tapping/removing loose particles, and a good vs overloaded powder stub.
* [ ] Add before/after image examples of charging mitigation: uncoated high vacuum, low vacuum, conductive bridge, and sputter coating.
* [ ] Add before/after image examples of beam damage or sample degradation on a sensitive sample.

## Duetta Fluorescence And Absorbance Spectrometer

* [ ] Edit the public exercise list down to one standard Level 1 blank-plus-sample absorbance/transmission workflow. Move blank mismatch, concentration series, and saturation/dilution to extensions unless staff deliberately selects one for the introductory session; keep fluorescence staff-guided.
* [ ] Recapture the routine EZ Spec views without baked-in arrows/boxes, usernames, personal paths, sample names, or method names. Capture a fully seated cuvette with its optical-face orientation visible.
* [ ] Confirm the current preferred EZ Spec method settings for routine absorbance training, including wavelength range, increment, integration/acquisition settings, and save/export workflow.
* [ ] Add screenshots for New Method, Absorbance and Transmission, Spectra, wavelength-range setup, sample naming, save location, blank prompt, and export options.
* [ ] Replace or supplement the cuvette-loading videos with versions showing appropriate glove use and clearer cuvette orientation.
* [ ] Add photos showing clean vs dirty cuvette optical faces, bubbles in the beam path, and the correct liquid fill height.
* [ ] Add photos of the transmission sample holder and a correctly loaded quartz slide.
* [ ] Add a short absorbance example using a safe training dye, including the expected peak region and a dilution-series plot.
* [ ] Add an annotated sunscreen-on-quartz-slide example showing how absorbance/transmission changes across wavelength for different formulations.
* [ ] Add a fluorescence example using a safe, robust training sample if fluorescence becomes part of routine training.
* [ ] Add a combined absorbance/fluorescence inner-filter-effect example or mark that workflow as staff-guided until documented.
* [ ] Add a complete level 1 exercise using a specific sample-library item or training-kit sample, including bin number/location once the cabinet is organized.

## Aeris Research X-Ray Diffractometer

* [ ] **Pare down the stored measurement programs on the instrument.** This is instrument configuration rather than website work, but it directly determines what the operating page and Quick Guide can say. The routine user workflow is selecting a stored program, not entering scan parameters, so the program list is the real interface. Reduce it to a focused set, give each a filename that identifies what it does, and write a short description of what each is useful for. Then list them on the operating page and in the Quick Guide so a user can pick correctly without asking. Until this is done, both documents can only say "choose a stored program from the drop-down list, and ask staff if none looks right."
* [ ] Decide whether HighScore/Search Match is taught for independent Level 1 practice, shown only as a capability preview, or reserved for a later analysis exercise. The current public exercise and primary Quick Guide map imply different boundaries; do not let a prototype settle the choice implicitly.
* [ ] Confirm what governs sign-in on the **XRD companion workstation** (the export/HighScore/XRDMP computer to the right of the instrument). The Aeris itself has a custom control touchscreen that boots directly into instrument operation with no access control, and `dmse-brkrspc-xrd` is a communication-only list that grants nothing. But [the export section](./xrd.md#export) tells users to "use the current workstation sign-in ... provided during training," which implies the companion workstation has a sign-in of its own. Resolve whether that is a Kerberos/WIN login, a local account, or nothing, then make the export section specific. Keep authentication details in training or at the instrument rather than publishing them. See [`../_staff-training/access-and-logistics.md`](../_staff-training/access-and-logistics.md#xrds-companion-workstation).
* [ ] Confirm the exact export/copy and participant handoff sequence between the Aeris touchscreen and companion workstation, including where a participant verifies that the needed files were retained. Do not record credentials or private paths.
* [ ] Confirm the final position of the removable sample-changer cover after the holder is removed. The canonical shutdown does not currently say whether or where to restore it; update the canonical before-leaving state before a guide makes that action checkable.
* [ ] Add a labeled overview photo of the instrument showing the mains switch, power button, and HT keyswitch locations.
* [ ] Reshoot the loading, queue, and export media with appropriate glove use if handling guidance calls for it. For the Quick Guide, capture a native queue screen, an overhead view with loaded slot number and restored plastic changer cover visible, and the confirmed companion-workstation export destination. The current add-sample poster does not show the restored cover, and the current export poster is a measurement screen rather than an export view.
* [ ] Add a dedicated screenshot of the changer-position selection in the UI (the current step links the general queue video; a still that highlights the position selector would be clearer).
* [ ] Add one or two annotated example patterns showing background, labeled peaks, and an accepted Search Match candidate.
* [ ] Add an attention-catching example diffraction pattern to the "What this instrument shows you" section (for example, a sharp crystalline pattern next to a broad amorphous one) to illustrate the educational text.
* [ ] Cross-link the XRD handout once its cheat-sheet content is finalized and the handout returns to the public build.
* [ ] Add approved training powders and reference samples for the exercises once the sample library is ready.
