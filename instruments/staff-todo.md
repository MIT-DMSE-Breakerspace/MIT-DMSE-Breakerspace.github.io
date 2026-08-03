---
published: false
---

# Instrument Page To-Do List

Last reviewed: 2026-08-03

This is the canonical staff checklist for instrument-specific page improvements. It consolidates the to-do items formerly shown on the public instrument pages and is excluded from the public Jekyll build.

The repository may still be publicly readable. Do not store credentials, access codes, private student information, or sensitive security details here.

Follow the [Tutorial Media Production Guide](../_staff/tutorial-media/README.md) for all new tutorial photography, screen recording, video capture, processing, and publication work.

## Cross-Instrument Quick Guide Rollout

The content contract and relationship to staff training were settled on 2026-08-03 in [`readme.md`](readme.md#quick-guide-content-contract). The canonical instrument page is the source; the Quick Guide and staff guide are sibling derivatives.

* [ ] Audit the optical and XRD Quick Guides against the canonical SOP. Account for every startup and shutdown item, one routine operation, saving/export, cleanup, stop conditions, and the before-leaving state. FTIR was audited and rebuilt 2026-08-03; use `_includes/quick-guides/ftir.html` as the model.
* [ ] Rebalance the three pilots toward at-instrument action. Reduce extended interpretation, retain only the immediate quality gate, and add selected hardware or software control-finding visuals where the paper copy prevents browser/software toggling.
* [ ] Print-test every guide on US Letter at 100% in duplex, grayscale, and color. Check legibility, clipping, page count, long-edge flip, and whether it can be followed while the control software remains fullscreen. **Start with FTIR:** its Side 2 reached roughly 582 words during correctness work and is the first real test of the two-page budget.
* [ ] Move the Quick Guide link out of the at-instrument decision path in Quick Actions and label it for at-instrument use, printing, accessibility, and fallback. Keep the canonical page and SOP as the apparent web starting point.
* [ ] Confirm workstation desktop shortcuts and general posted QR codes open the canonical instrument page rather than bypassing it for the Quick Guide.
* [ ] Print, laminate, label, and install the reviewed guide at each instrument. Record who checks the physical copy after workflow revisions and who replaces damaged or outdated copies.
* [ ] Add Quick Guides for remaining instruments in parallel with their staff guides once each canonical SOP and Level 1 workflow are stable. Complete the staff-guide SOP coverage map and a practice training before routine delivery.
* [ ] When one routine workflow cannot fit legibly on two sides, keep a primary Quick Guide and create a separate task-specific workflow card rather than shrinking or cramming the guide.

## Nicolet iS5 FTIR Spectrometer

* [ ] **Define what a good background preview looks like.** [`#background`](./ftir.md#background) defines a background as a single-beam spectrum carrying the source, optics, detector, and atmospheric response — so it is structured, not flat, and the bundled preview recording shows that. The page gives no acceptance criterion, which leaves a trainee with no way to judge the live trace. A draft Quick Guide told users to check for a "clean baseline"; that was wrong and could cause repeated rejection of valid backgrounds, so it was removed in favour of confirming the crystal is bare and unclamped. Have staff describe the expected display, add it to the page, and then let the Quick Guide reference it.
* [ ] **Add named atmospheric and contamination band positions to the page.** [`#failures`](./ftir.md#failures) and the science section describe water vapor, carbon dioxide, solvent, and residue features qualitatively but give no wavenumbers, so a user cannot recognize them on a spectrum. A draft Quick Guide revision cited approximately 3700 and 2350 cm<sup>-1</sup>; those numbers were not sourced from this page and were removed. Have staff confirm the positions actually seen on this instrument, add them to the page, and only then let the Quick Guide name them.
* [ ] **Make the background-redo cycle explicit in the SOP.** [`#operation`](./ftir.md#operation) says to repeat background, collection, cleaning, and saving as needed, but never states that a background must be collected on a bare, unclamped crystal with the sample removed. A user can read "recollect the background" as something doable with the sample still loaded. The Quick Guide now spells the cycle out; the canonical page should own it.
* [ ] Replace hand/sample-loading photos or videos with versions showing appropriate glove use.
* [ ] Replace or reshoot the solid sample, powder sample, liquid sample, crystal cleaning, volatiles cover, and pressure-tip videos with gloved versions; publish future motion instruction as controlled MP4/WebM rather than GIF.
* [ ] Add one or two annotated example spectra showing major peaks and how to compare an unknown with a known reference.
* [ ] Add a teaching example contrasting a pure or simple sample with a complex mixture such as coffee, emphasizing when FTIR supports identification and when it mainly supports comparison.
* [ ] Add a short database-search walkthrough using Wiley KnowItAll or another approved reference workflow.
* [ ] Add a concise accessory-change note for iD1 transmission and EasiDiff diffuse reflectance, or mark those as staff-guided until a dedicated workflow is written.
* [ ] Add a small set of approved training samples for repeatable FTIR exercises once the sample library is ready.

## Innovatest Nemesis 5100G2 Hardness Tester

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
* [ ] Consider a short MP4/WebM of the unlock-then-start sequence, since the roughly two-second CAUTION window is hard to convey in text and is a common first-run stumble.
* [ ] **Confirm the lab's default method names and export conventions.** The page deliberately describes method setup generically (templates, rate, end-of-test condition, operator inputs) because the actual saved method names on the workstation, the default save location, and any course-specific methods were not verified. Confirm these and make the [method](./instron.md#method) and [saving](./instron.md#saving) sections specific to this machine. Keep authentication details in training or at the instrument.
* [ ] Confirm the **end-of-test condition** the lab recommends for a general tensile test to failure. The page cites the 3.000 coffee-bean method's 30% force-drop condition as an illustrative example, taken from `handouts/3.000 Instron Station .pdf`; a recommended default for independent users would be better.
* [ ] Confirm whether **load-string preload** is genuinely staff-only, as the page now states. The 6800 guide documents the `Preload Grips` method (pp. 107–109) and the page directs users to ask staff rather than loosen lock nuts; confirm this matches lab policy.
* [x] Confirm grip capacities: the lab has distinct 1 kN and 5 kN tensile grips. Keep them separate in captions, worked examples, and training media. Confirmed by staff 2026-07-29.
* [ ] Add the pumpkin-compression results figure and, if useful, a labeled force-displacement curve from the event. (`assets/img/instron-pumpkin-results.jpg` exists and is used on the lounge and showcase pages but not on the instrument page.)
* [ ] Confirm approved training samples for the exercises once the sample library is ready.

## SEMPrep 2 Broad Beam Ion Mill

* [ ] Add a photo or GIF of a trained user opening the argon cylinder and confirming the correct regulator state.
* [ ] Add a short screen-capture GIF of the startup purge sequence and semi-automatic needle-valve setup.
* [ ] Add a screen-capture GIF of the software-guided sample loading/removal procedure.
* [ ] Add photos of the actual Breakerspace polishing holders labeled by name and use case.
* [ ] Add photos of a gloved hand loading a polishing holder with the correct tool.
* [ ] Add photos or GIFs showing sample height adjustment for the polishing holder.
* [ ] Add photos or GIFs showing a sample being bonded to a carrier plate in the gluing jig.
* [ ] Add photos or GIFs showing 30&deg; and 90&deg; alignment under the sample alignment microscope, including what the target mask gap looks like on screen.
* [ ] Add a screenshot of the automated recipe library with a safe example recipe highlighted.
* [ ] Add one complete level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add one level 2 slope-cutting exercise using a specific layered or coated sample-library item, including bin number/location once available.
* [ ] Add before/after SEM image pairs showing successful polishing, insufficient polishing, redeposition, and sample damage.

## DSX-1000 Digital Optical Microscope

* [ ] Add a complete level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add photos or videos showing the correct startup sequence: power switch, Guest login, stage/head movement acknowledgement, lowering the stage, and tilt position.
* [ ] Add photos or videos showing objective exchange and how to choose between long-working-distance and extra-long-working-distance objectives.
* [ ] Add a screenshot or video showing the recommended save-location workflow.
* [ ] Add example image sets comparing brightfield, oblique, darkfield, brightfield/darkfield mix, polarization, and DIC on the same sample.
* [ ] Add more annotated example results for stitched imaging and measurement/profile workflows.
* [ ] Add an MP4/WebM video of 2D acquisition, 3D acquisition, and stitching setup.
* [ ] Add example measurement outputs for profile, volume, roughness, and STL export.
* [ ] Add common sample-prep examples for flat samples, tall samples, fragile samples, and liquid-containing samples.

## Phenom Pure SEM

* [ ] Add a complete Pure level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add photos or GIFs showing Phenom Pure holder selection, stub loading, and the correct below-holder-edge height check.
* [ ] Add a GIF of setting the image label and save location in the Phenom software.
* [ ] Add a GIF of moving from NavCam to LiveSEM, focusing, and acquiring the first image.
* [ ] Add cold-stage photos or GIFs showing cryo gel turning fully white, acceptable vs excessive frost, and black wire/connector placement during loading.
* [ ] Add before/after image examples of cold-stage drift, frost, and sample outgassing.

## Phenom XL SEM

* [ ] Add a complete XL level 1 training example using a specific sample-library item, including bin number/location once the cabinet is organized.
* [ ] Add photos or GIFs showing XL tray removal, stub loading, and the correct 5-7 mm below-tray height check.
* [ ] Add a GIF of setting the image label and save location in the Phenom software.
* [ ] Add a GIF of moving from NavCam to LiveSEM, focusing, and acquiring the first image.
* [ ] Add a GIF of starting and stopping Live EDS, emphasizing the stop button before navigating away.
* [ ] Add screenshots of a complete EDS report/export workflow and example CSV/raw-data export.

## Microtrac Sync Particle Size Analyzer

* [ ] Add labeled photos or annotated stills of the sample trays (shallow vs. deep), the fill line, and evenly distributed vs. compressed loading.
* [ ] Add an annotated example distribution plot showing D10/D50/D90 and a bimodal example.
* [ ] Confirm approved standard/training powders for the exercises once the sample library is ready, including cabinet location.
* [ ] Confirm the workstation access handoff and default database/export conventions. Keep authentication details in training or at the instrument rather than publishing them.

## Horiba XploRA Confocal Raman Microscope

This page was substantially expanded from a thin original and still needs verification and images. Items are grouped by type.

### Verify With Staff (Technical Accuracy)

* [ ] Confirm the exact LabSpec 6 control names used on the page match the interface: "stop all," RTD, AutoCalibration (Maintenance tab), the Acquisition-tab parameter labels (spectro, Range, acquisition time, accumulations, ND filter, slit, hole), and the Map section.
* [ ] Confirm the silicon reference peak position (page states ~520 cm<sup>-1</sup>) and the recommended starting acquisition time, accumulations, and ND filter/power for a first measurement.
* [ ] Confirm the confocal hole and slit values to recommend for routine surface work and for z-depth profiling, and add them where the page currently flags them as staff-confirm.
* [ ] Confirm the startup/interlock description (door interlock, interlock key, internal-camera laser check) matches the actual hardware and the intended laser-safety procedure.
* [ ] Confirm that AutoAlignment is staff-only and that the staff-only note reflects lab policy.

### Screenshots And Photos (Standard Workflow)

* [ ] Startup: the laser emission remote-control power and the powered-on indicator.
* [ ] Objectives: the 5x (wayfinding), 10x, and 100x, and where the objective is selected in the software.
* [ ] Focusing: top-camera view, the joystick focus control, and the slide/sample on the stage.
* [ ] Laser verification: the internal-camera view showing the laser spot, plus the interlock door/key locations to check when no laser appears.
* [ ] Live setup: the RTD spectrum, and the AutoCalibration routine with a passing result.
* [ ] Acquisition: the collection-parameters screen with the key fields labeled.
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
* [ ] Add a level 2 EDS exercise using specific stocked samples or standards, including bin number/location once available.
* [ ] Add a level 2 non-conductive-sample exercise using a specific sample-library item suitable for low-vacuum and sputter-coated comparison.
* [ ] Add annotated SEM and EDS example results showing how image contrast and elemental maps answer different kinds of questions.
* [ ] Add photos or GIFs showing a gloved hand placing a stub in a prep tray and mounting a sample with stub tweezers.
* [ ] Add photos or GIFs showing powder transfer to carbon tape, tapping/removing loose particles, and a good vs overloaded powder stub.
* [ ] Add before/after image examples of charging mitigation: uncoated high vacuum, low vacuum, conductive bridge, and sputter coating.
* [ ] Add before/after image examples of beam damage or sample degradation on a sensitive sample.

## Duetta Fluorescence And Absorbance Spectrometer

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
* [ ] Confirm what governs sign-in on the **XRD companion workstation** (the export/HighScore/XRDMP computer to the right of the instrument). The Aeris itself has a custom control touchscreen that boots directly into instrument operation with no access control, and `dmse-brkrspc-xrd` is a communication-only list that grants nothing. But [the export section](./xrd.md#export) tells users to "use the current workstation sign-in ... provided during training," which implies the companion workstation has a sign-in of its own. Resolve whether that is a Kerberos/WIN login, a local account, or nothing, then make the export section specific. Keep authentication details in training or at the instrument rather than publishing them. See [`../_staff-training/access-and-logistics.md`](../_staff-training/access-and-logistics.md#xrds-companion-workstation).
* [ ] Add a labeled overview photo of the instrument showing the mains switch, power button, and HT keyswitch locations.
* [ ] Reshoot the loading, queue, and export videos with appropriate glove use if handling guidance calls for it.
* [ ] Add a dedicated screenshot of the changer-position selection in the UI (the current step links the general queue video; a still that highlights the position selector would be clearer).
* [ ] Add one or two annotated example patterns showing background, labeled peaks, and an accepted Search Match candidate.
* [ ] Add an attention-catching example diffraction pattern to the "What this instrument shows you" section (for example, a sharp crystalline pattern next to a broad amorphous one) to illustrate the educational text.
* [ ] Cross-link the XRD handout once its cheat-sheet content is finalized and the handout returns to the public build.
* [ ] Add approved training powders and reference samples for the exercises once the sample library is ready.
