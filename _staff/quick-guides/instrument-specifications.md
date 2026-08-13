---
published: false
---

# Instrument-Specific Quick Guide Work Orders

These are bounded work orders for the two-sided SOP-and-visual-map model. They specify the intended beginner workflow, image plan, callouts, quality decision, guidance-box topic, exclusions, and blockers. They do not authorize publication or technical invention.

Read [`README.md`](README.md) first. A **BLOCKED** status means the instrument is blocked for technical completion and release until every release gate in that entry is resolved. It normally also blocks drafting. The only exception is an explicitly commissioned [provisional placeholder pass](README.md#provisional-placeholder-draft-mode), which may create a visibly incomplete, unpublished composition draft while preserving every blocker. Existing assets are candidates, not proof that the displayed interface or workflow is current.

The provisional set produced on 2026-08-10 was audited; see [`audit-2026-08-10.md`](audit-2026-08-10.md) for per-instrument findings, including which drafts stated a proposal in settled voice and which release gates disappeared from the artifact. The audit found that the **FTIR reference prototype had its own blockers**: unprintable source images, two control-key entries that did not match the visible labels, and an acceptance criterion the canonical page did not define. Those specific findings were addressed in the 2026-08-11 canonical reconciliation and 2026-08-12 native-capture follow-up, but the FTIR draft still needs layout correction, staff media/callout review, and physical proof. **Instron, Raman, and optical each still lack the reviewed layout variant** their confirmed curriculum requires.

For filename-level selection from the 2026-08-12 field captures, read [`capture-integration-workorder-2026-08-12.md`](capture-integration-workorder-2026-08-12.md). It is the canonical triage record for the reviewed FTIR, Phenom XL, Phenom Pure, XRD, Instron, optical, Raman, and hardness capture folders. Its selections do not supersede this file's technical and release gates.

## Source And Proposal Discipline

This file records both facts already established by a canonical instrument page and choices that still need staff approval. Keep those categories separate.

* Copy each instrument identity from the canonical page's H1. Do not infer a model from a photo, manual, similar instrument, prior facility, or remembered product line.
* Record the **canonical SOP spine**, **Level 1 teaching workflow**, and **software-map scope** separately. Detailed instructions and exercises can establish valid procedures or teaching content, but they do not become canonical SOP steps merely by appearing on the public page.
* A **proposed drafting decision** is not policy and must remain visibly labeled as a proposal until staff approves it.
* Use an exact software or hardware control name only when the canonical page states it and the approved source image visibly supports it. If either source is missing, keep the guide blocked.
* An existing asset may be a composition reference without being a publishable source. Reject or recapture assets with baked-in arrows or boxes, private names, usernames, sample identifiers, file paths, obsolete interface states, or unreadable print text.
* A result or readiness panel must ask one observable question and use only a corrective action stated on the canonical page. Do not turn a plausible-looking result into an acceptance standard.
* During an authorized provisional pass, use each entry's image requirement and release-gate wording as the objective description inside the standardized placeholder or review-gap block. Do not convert a proposal into settled copy merely so the page appears complete.

## Status Summary

| Instrument | Release status | Principal reason |
| --- | --- | --- |
| Thermo Scientific Nicolet iS5 FTIR Spectrometer | **REFERENCE PROTOTYPE** | Composition is the drafting model. Native 1920x1080 OMNIC control and contact captures now replace the failed poster frames, the key uses the visible toolbar labels, and the contact caption follows the canonical criterion. Still needs Side 1 layout correction, physical proof, and operational review before publication. |
| Thermo Fisher Phenom XL SEM | **BLOCKED** | Current LiveSEM states and a loading/height pair are captured and triaged; the multi-state layout, top-panel control verification, EDS boundary, save/export, and final state remain unresolved. |
| Thermo Fisher Phenom Pure SEM | **BLOCKED** | Current Pure LiveSEM states and a loading/height pair are captured and triaged; the multi-state layout, control verification, save/export, and final state remain unresolved. |
| Malvern Panalytical Aeris Research XRD | **BLOCKED** | Queue and changer-cover candidates are captured and triaged; the HighScore boundary, stored-program curation, sign-in/data handoff, and exact position control remain unresolved. |
| Instron 68TM-50 Universal Testing System | **BLOCKED** | Actual-run Bluehill and handset candidates are captured; the Level 1 method/end condition, two-view layout, toe-artifact pair, travel-limit prompt, and export/final-state implementation remain unresolved. |
| Olympus DSX-1000 Digital Optical Microscope | **BLOCKED** | Current interface states and a matched focus pair are captured; the required multi-state layout, exact controls, save/copy treatment, and final-state review remain unresolved. |
| Horiba XploRA Confocal Raman Microscope | **BLOCKED** | Current captures cover the camera selector, TopCam/internal views, RTD, an acquired spectrum, save, and AutoCalibration completion/PASS; the multi-view layout, exact icons/settings, Maintenance entry, quality question, and final state remain unresolved. |
| Innovatest Nemesis 5100G2 Hardness Tester | **BLOCKED** | The Level 1 Vickers 300 gf / HV 0.3 method is settled and a primary software candidate is identified; the exact Single Point state, bad-indent pair, hardware reconciliation, export, and final state remain unresolved. |
| Microtrac Sync Particle Size Analyzer | **BLOCKED** | Database/export convention, sanitized interface captures, and tray-loading evidence are unresolved. |
| Horiba Duetta Fluorescence And Absorbance Spectrometer | **BLOCKED** | The Level 1 exercise needs editorial cleanup before settings, captures, quality evidence, and save/export can be finalized. |
| Technoorg-Linda SEMPrep 2 Broad Beam Ion Mill | **BLOCKED** | Semi-automatic operation is settled; the Level 1 holder/process parameters, approved control state, and readiness evidence remain unresolved. |

The statuses are intentionally conservative. A release candidate made before these decisions would turn unknowns into apparent policy. The authorized provisional pass avoids that failure only by labeling the entire artifact incomplete and representing each unknown as a conspicuous descriptive frame or review gap.

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

**Primary image:** `assets/img/quick-guides/ftir/omnic-main-system-status-good.png`, an unannotated 1920x1080 current OMNIC view with the iD7 ATR experiment, routine toolbar, and green **System Status** visible. HTML/SVG callouts preserve the raster source.

**Primary callouts, in this order:**

1. `Col Bkg` (the visible control for **Collect Background**)
2. `Col Smp` (the visible control for **Collect Sample**)
3. `Save` (the selected spectrum)
4. `System Status`

**Quality images:** `assets/img/quick-guides/ftir/omnic-sample-preview-no-contact.png` and `assets/img/quick-guides/ftir/omnic-sample-preview-contact-established.png`, both unannotated 1920x1080 OMNIC sample previews. They retain the full interface context and open at native resolution from the screen guide.

**Secondary callout:** `Start Collection` on the usable live-preview image.

**Immediate decision:** no or weak sample contact that calls for contact correction versus contact established. A change from a near-zero trace to a sample spectrum confirms that ATR is detecting the sample; it is not a universal spectrum-shape or signal-strength acceptance standard and is not spectral identification. If the signal remains weak or negative or unexpected features remain unresolved, stop and ask staff.

**Do not add:** band assignments, atmospheric peak positions, a named sample, method-parameter tables, liquids, or accessory workflows.

**Resolved technical decisions (2026-08-11):** **System Status** must show a green check; the routine Level 1 workflow uses **Preview Data Collection** enabled; the live background preview is not a pass/fail test; and the complete contaminated-background recovery cycle is unload, clean and dry, collect a complete new background on the bare and unclamped crystal, then reload and recollect. These decisions are now on the canonical page.

**Remaining release gates:** resolve the Side 1 SOP/footer collision by first reducing the **Standard Operating Procedure (SOP)** heading and corresponding Side 2 visual-map heading consistently, without reducing SOP/body type or content; remeasure footer clearance and confirm Chrome remains exactly two Letter pages at 100%; complete final staff review of the capture states and callout geometry; verify color and grayscale physical output and label legibility at 100%; and approve a physical duplex proof. The QR codes decoded successfully from the 100% Chrome physical printout on 2026-08-12, so the FTIR print-QR gate is satisfied. Safari's current four-page pagination is a browser-specific limitation, not the physical-proof path. The separate current printed Quick Guide is sufficient for trainer-guide release and remains unchanged.

**Audit disposition recorded 2026-08-11:** the failed raster images and their annotations were removed from the provisional artifact and replaced with explicit capture gates. The control specification used the visible `Col Bkg`/`Col Smp` labels, and the contact caption was derived from the canonical page's reviewed contact cue. Restoring every prior canonical bullet while adding the confirmed contaminated-background cycle exposed an additional Side 1 layout exception; content was not weakened to hide it. At that handoff, native recapture, capture-to-label verification, annotation geometry, pagination, and physical proof remained open. See [`audit-2026-08-10.md`](audit-2026-08-10.md).

**Native-capture follow-up (2026-08-12):** three selected 1920x1080 captures replace the placeholders: the clean main window with a green `System Status`, the near-zero/no-contact preview, and the clamped/contact-established preview with `Start Collection`. The repository copies are byte-identical to the Dropbox sources and remain unannotated; callouts are HTML/SVG overlays. The visible `Col Bkg`, `Col Smp`, `Save`, `System Status`, and `Start Collection` labels have been reconciled against the captures. Redundant intermediate-contact, setup-dialog, missing-background, error-status, and contaminated-background captures were deliberately excluded from the compact normal-workflow map.

**Current provisional render (2026-08-12):** the unpublished include-backed artifact renders as exactly two Letter pages in Chrome, retains all 24 canonical SOP bullets verbatim and in order, and loads all three native 1920×1080 OMNIC captures. Its targeted HTML-Proofer check passes. Browser checks at 1440, 1024, 768, and 700 px widths show no horizontal overflow and preserve native image dimensions; paginated color and grayscale renders preserve the interface states and callouts. The unreviewed compact display-title trial, **Nicolet iS5 FTIR Spectrometer**, plus the shared 0.04 in advisory spacing leaves a 0.016 px positive trained-user-note/SOP-title gap in automated print measurement without changing SOP content or type size. Side 1 remains overfull: the final shutdown bullet overlaps the footer by 46.828 px and extends 0.906 px past the sheet. The QR codes decoded successfully from the 100% Chrome physical printout; that gate is complete. Final staff media/callout review, corrected locked pagination, remaining color and grayscale physical proofing, and duplex approval remain unmet.

## Thermo Fisher Phenom XL SEM

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/phenom-xl.md`](../../instruments/phenom-xl.md). Do not substitute the SEM hub or Pure page.

**Canonical SOP spine:** prepare and load a dry, secured sample under the XL height rule; confirm the NavCam view is usable for navigation; enter LiveSEM; characterize and save as appropriate; stop any acquisition; unload; clean; and return the microscope to standby.

**Level 1 teaching workflow:** navigate with NavCam, obtain a usable LiveSEM image, adjust focus and brightness/contrast, inspect the top-panel voltage/beam/resolution/averaging state, change magnification, and acquire/save images at several magnifications. Hair is the sample currently named in the public exercise, not required Quick Guide content.

**EDS curriculum boundary proposed for approval:** give a short capability preview during general Phenom XL training, analogous to the optical LEXT preview, but require a separate Level 2 EDS add-on before independent EDS operation. The primary SEM Quick Guide does not map EDS controls; a later EDS task card can support the add-on if staff approve this boundary.

**Side 1 critical box:** **Sample and holder clearance** — use the XL-specific canonical sample-height rule, secure loose particles, and remove gloves before using the computer. Do not reuse the Pure height rule.

**Primary image candidates captured:** use external `PhenomXL/SEM-right-panel.PNG` as the base routine LiveSEM state and `PhenomXL/SEM-top-panel.PNG` for the essential top-panel state; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#thermo-fisher-phenom-xl-sem). No one captured state provides every planned function legibly, so the reviewed multi-state-layout gate remains. `assets/img/tutorials/sem/FocBri.PNG` is only a composition reference because it has baked-in annotation.

**Screenshot coverage as of 2026-08-12:** the imaging-controls map image and the matched height pair are integrated at `assets/img/quick-guides/phenom-xl/`, and the page QR is at `assets/img/qr/phenom-xl-page.svg`. Four callouts are mapped from visible on-screen labels only — Magnification, Focus, Contrast, Brightness — drawn as an HTML/SVG overlay so the source screenshot stays unannotated. The top-panel state was **not** imported, so callout 5 below and the icon-only left-rail functions remain unmapped and are carried as explicit review gaps in the draft.

**Primary callouts proposed, with exact labels/icons still to verify:**

1. focus control, using the exact visible label or verified icon function — **mapped 2026-08-12** from the visible `Focus` label
2. brightness/contrast and automatic adjustment, grouped only if they are visibly adjacent — **partially mapped**: the visibly adjacent `Contrast` and `Brightness` sliders are mapped; the automatic-adjustment icon is unmapped pending icon-function verification
3. magnification control or readout used during training — **mapped 2026-08-12** from the visible `Magnification` label
4. acquisition camera control — **unmapped**; icon-only, function not verified at the instrument
5. the top status/control panel as one grouped region: accelerating voltage, beam/intensity, resolution, and averaging — **unmapped**; requires the reviewed multi-state layout

Place the canonical NavCam-to-LiveSEM transition in the SOP or a compact reminder; do not imply that `NavCam`, `Move to SEM`, and all LiveSEM controls coexist in one screenshot.

**Readiness panel candidates captured:** external `PhenomXL/sample-height-incorrect.JPG` and `PhenomXL/sample-height-correct.JPG` form the preferred matched pair, safely staged outside the chamber, and were **integrated 2026-08-12** with identical framing so the clearance difference is scale-comparable. The correct sample is visibly **5–7 mm below the XL tray top**. `sample-over-height.JPG` is a stronger but less closely matched stop-state alternative. Both panels state that the trays were photographed outside the microscope, and the stop card never presents the insufficient-clearance state as loadable. Keep focus, charging, drift, washout, outgassing, and beam damage in the SOP/stop-help language rather than combining unrelated diagnoses.

**Do not add:** independent EDS operation, accelerating-voltage or detector-setting tables, coating recipes, extended image interpretation, or Pure/cold-stage instructions. A brief EDS capability preview belongs in the staff guide only if the proposed boundary is approved.

**Release gates:** approve the EDS training boundary; select, copy, integrate, and staff-approve the triaged XL loading and LiveSEM candidates (**image selection and integration completed 2026-08-12; staff approval still outstanding**); review and lock the multi-state layout; verify the top panel and every mapped icon/label; confirm save/export and the final tray/chamber state.

## Thermo Fisher Phenom Pure SEM

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/phenom-pure.md`](../../instruments/phenom-pure.md). Do not substitute the SEM hub or XL page.

**Canonical SOP spine:** prepare and load one dry, secured sample below the Pure holder edge; confirm the NavCam view is usable for navigation; enter LiveSEM; characterize and save as appropriate; stop any acquisition; unload; clean; and return the microscope to standby.

**Level 1 teaching workflow:** room-temperature imaging only: navigate with NavCam, obtain a usable LiveSEM image, adjust focus and brightness/contrast, inspect the top-panel voltage/beam/resolution/averaging state, change magnification, and acquire/save images at several magnifications. Hair is the sample currently named in the public exercise, not required Quick Guide content. Cold-stage observation remains Level 2.

**Side 1 critical box:** **Sample and holder clearance** — for this room-temperature Level 1 workflow, the sample must be dry, secure, free of loose particles, and below the holder edge. Do not reuse the XL's 5–7 mm rule or add cold-stage conditions.

**Primary image candidates captured:** use external `PhenomPure/SEM-right-panel.PNG` as the base routine LiveSEM state and `PhenomPure/SEM-top-panel.PNG` for the essential top-panel state; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#thermo-fisher-phenom-pure-sem). Apply the same proposed functions as the XL only after verifying the Pure interface: focus; brightness/contrast plus automatic adjustment if adjacent; magnification; acquisition; and the grouped top panel for voltage, beam/intensity, resolution, and averaging. Do not reuse an XL capture merely because the software looks similar. A reviewed multi-state layout is still required.

**Readiness panel candidates captured:** external `PhenomPure/sample-too-high.JPG` and `PhenomPure/sample-height-correct2.JPG` form the preferred matched pair with the holder outside the chamber. They show a sample protruding above the holder edge versus one correctly below it. Keep focus and other image-quality diagnoses in the SOP/stop-help language.

**Cold-stage extension:** do not place cold-stage connector, sample-holder, temperature, or refill media in the primary Quick Guide. Existing files under `assets/media/tutorials/sem/cold-stage-*` and `assets/img/tutorials/sem/cold_stage_*` are source candidates for a later, separately scoped card.

**Do not add:** EDS, XL height rules, cold-stage setup in the primary guide, coating recipes, or settings tables.

**Release gates:** select, copy, integrate, and staff-approve the triaged Pure loading and LiveSEM candidates; review and lock the multi-state layout; verify the top panel and every mapped icon/label; confirm save/export and the final holder/chamber state.

## Malvern Panalytical Aeris Research XRD

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/xrd.md`](../../instruments/xrd.md).

**Canonical SOP spine:** load one prepared sample holder into a free changer position, replace the plastic sample-changer cover, match the software position to the physical slot, choose an appropriate stored program, enter identifiers, start or queue the measurement, save/export, complete the log book, remove the holder, and shut down.

**Level 1 boundary still to decide:** the current public Level 1 exercise continues through HighScore background/peak work and Search Match phase identification. The proposed primary map covers the Aeris queue and measurement controls only. Before drafting the staff guide, decide whether HighScore is an independently taught Level 1 operation, a short capability preview, or a later analysis exercise; do not force it into Side 2 by assumption.

**Side 1 critical box:** **X-ray enclosure and changer-cover rule** — never defeat an enclosure interlock or open the enclosure during a measurement; separately, replace the removable plastic sample-changer cover and match the physical slot to the software position before starting.

**Primary image candidate captured:** external `AerisXRD/sample-id.png` is the preferred native, unannotated filled queue state; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#malvern-panalytical-aeris-research-xrd). It provides the program, identifier, file-name, and queue controls without private information. Verify the exact numbered changer-position control before annotation.

**Primary callouts, in this order:**

1. changer position / slot field
2. measurement-program drop-down
3. sample ID and file-name fields, grouped only if visually adjacent
4. `Add to Queue`

**Readiness panel candidates captured:** external `AerisXRD/cover-off.JPG` and `AerisXRD/cover-on2.JPG` show the removable changer cover absent versus restored over the loaded changer. The primary queue map locates the software position control; the SOP/critical box tells the user to match it to the physical slot and complete the identifiers/program checks. A diffraction pattern is not the primary immediate quality gate unless staff defines an observable pass/fail rule appropriate for a new user.

**Bottom reminder:** export/copy data before leaving. External `AerisXRD/file-transfer-location.png` now documents the companion folder and its older visible filenames were reviewed as non-private, but it is supporting evidence rather than a required Quick Guide image. Confirm the sign-in and export/copy sequence before locking the reminder.

**Do not add:** scan parameters for stored programs, phase identification, peak indexing, crystallite-size interpretation, or instructions to bypass an interlock.

**Release gates:** decide the HighScore/phase-identification training boundary; curate and document the routine stored-program list (until then retain the canonical “choose a stored program; ask staff if none looks right” direction); resolve workstation sign-in and export/copy sequence; verify queue field labels and numbered changer-position control; select, copy, integrate, and staff-approve the triaged queue and changer-cover candidates.

## Instron 68TM-50 Universal Testing System

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/instron.md`](../../instruments/instron.md).

**Canonical SOP spine:** open Bluehill; choose the appropriate load cell, fixture, and method; enter specimen information and limits; load and zero/balance the specimen; unlock and start from the handset; characterize using the approved method; finish/save/export; unload and clean; and leave the frame disabled.

**Level 1 teaching workflow:** run one 50 kN tensile test. Staff must still decide whether the training uses a named saved method or `Run a QuickTest`, define the approved end condition, and confirm the initial and final machine states.

**Side 1 critical box:** **Moving crosshead and stored-energy rule** — hands clear during motion/testing, remain within fixture/load-cell/specimen limits, and use emergency stop only as the canonical page directs.

**Control-surface candidates captured:** both Bluehill and the handset are necessary to understand the taught workflow. External `instron/Screenshot (29).png` is the preferred actual-run Bluehill state and `instron/handset-enabled.JPG` is the preferred unannotated handset view; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#instron-68tm-50-universal-testing-system). Do not reduce the map to the handset or add an improvised inset. Review and lock an Instron-specific two-view layout before integration. The screenshot shows a QuickTest path but does not settle the saved-method-versus-QuickTest decision.

**Handset callouts proposed, subject to visible-label verification:**

1. jog controls used to position the crosshead
2. zero displacement
3. unlock and start sequence
4. stop

**Bluehill callouts to finalize after the method decision:** the approved saved-method or `Run a QuickTest` entry route; the specimen-information and limit checkpoint; force balance; and `Finish sample`/save. `assets/img/optimized/instron-bluehill-test-1080.jpg` is an operating-page reference, not automatically an approved map source. Do not use `instron-bluehill-method-1080.jpg`; it is the excluded method-authoring screen.

**Quality panels proposed for staff approval:** a matched pair asking one question about setup quality: a curve with the canonical soft, curved toe caused by slack or grip slip versus a repeat after correcting the setup with that artifact absent. The canonical corrective action is to take up slack, seat the specimen correctly, and re-run. Do not add a generic warning, overload state, or an idealized material curve. Keep the travel-limit prompt as a required SOP check and capture it for the canonical page, but do not mix it into this result comparison.

**Do not add:** method creation, `Admin`, arbitrary test rates or limits, material-property calculations, tensile/compression/flexure variants not selected for Level 1, or a pumpkin example as the generic quality standard.

**Release gates:** decide saved method versus QuickTest and, if applicable, record the exact stored-method name; verify the 50 kN Level 1 fixture image and initial/final machine state; define the end condition; decide and lock the two-view Bluehill/handset layout; select, copy, integrate, and staff-approve the triaged control candidates; capture the still-missing travel-limit prompt and matched toe-artifact pair; implement the settled **always export raw data** rule without adding broader data-management prescriptions. The controller modes and roughly two-second unlock/start sequence are documented on the canonical page but still need a current-machine visual check before annotation.

## Olympus DSX-1000 Digital Optical Microscope

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

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

**Primary image candidates captured:** the external `DSX1000/` set contains clean states for the confirmed controls. The recommended core is `DSX-home.PNG`, `best-image.PNG`, `stitching-selection.PNG`, and `hq-pano-setup.PNG`, with `3d-capture.PNG` retained if an explicit 3D state is required; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#olympus-dsx-1000-digital-optical-microscope). No one image provides every function legibly. Keep the guide blocked until an optical-specific multi-state variant is reviewed; do not import the entire sequence as a screenshot tutorial.

**Map functions required, with exact visible labels/icons still to verify:**

1. `Best Image`
2. quick 2D stitch/map-image function
3. normal 2D capture
4. the **Use as map image** selection used to distinguish the higher-quality area stitch
5. 3D capture

Saving remains a Side 1/bottom-reminder requirement unless its exact control can be included without displacing a taught acquisition control. Do not map LEXT; the trainer only previews its capabilities.

**Quality panel candidates captured:** external `DSX1000/oof.PNG` and `DSX1000/in-focus.PNG` show the same field in visibly poor focus and in a sharp, usable 2D state. Keep collision risk in the critical/stop box rather than mixing a physical clearance decision into the focus comparison.

**Do not add:** LEXT analysis steps, report-building steps, 3D high-quality stitching as a performed exercise, volume rendering, extended interpretation, or a named training specimen. The normal 2D stitch, high-quality 2D area stitch, and 3D capture are included because they are explicitly taught in Level 1.

**Release gates:** operationally verify the public Level 1 exercise and staff-guide scope updated on 2026-08-07; verify every mapped control against the triaged states; lock an optical-specific multi-state variant; select, copy, integrate, and staff-approve only that variant's sources plus the matched focus pair; confirm the LEXT save-before-leaving reminder and final clearance/shutdown state. Clicking **2D Acquisition** opens the result directly in LEXT, so no missing intermediate control-software dialog is required. The startup motion warning also has no screenshot requirement. Retrofit the existing published optical guide only in a separately authorized task.

## Horiba XploRA Confocal Raman Microscope

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/raman.md`](../../instruments/raman.md).

**Canonical SOP spine:** start the system, verify the enclosure/interlock state, position and focus a compatible sample, select appropriate trained settings, characterize and save as appropriate, stop acquisition/emission as required, unload, and shut down.

**Confirmed Level 1 teaching workflow:** load the silicon calibration sample; focus with TopCam; close the doors and confirm the interlocks lock; use the internal camera and laser to focus; start `RTD` and refine focus by making small up/down adjustments to optimize counts; run `AutoCalibration` to verify system function; then load the actual sample and repeat the applicable focusing and acquisition path. The approved starting laser/acquisition settings and exact calibration pass criterion remain unresolved.

**Side 1 critical box:** **Laser enclosure rule** — close the enclosure doors before verifying the laser or collecting; respect the door interlock and key; if the laser is not visible, check the documented door/interlock/key conditions rather than bypassing anything. Do not state a sample-change/emission sequence until staff verifies it on the actual system.

**Multiple interface states captured:** TopCam focusing, internal-camera/laser focusing, `RTD`, routine acquisition/display, and `AutoCalibration` are distinct parts of the confirmed teaching sequence and do not coexist in one useful screen. The external `raman/` set contains candidates for each state; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#horiba-xplora-confocal-raman-microscope). Review and lock a Raman-specific multi-state layout before copying or drafting. Use tight crops so the 4K interface remains legible and captured settings are not mistaken for approved defaults.

**Primary image candidates captured:** `Screenshot (35).png` is the best acquired-spectrum/current-toolbar base candidate; `(6)` locates the Top/Internal camera selector; `(28)` is the preferred TopCam state; `(31)` is the best internal-camera candidate subject to staff verifying the intended focus/spot state; `(19)` is the preferred strong-silicon RTD state; and `(27)` visibly reports **AutoCalibration finished** and **PASS**. Import only the minimum subset selected by the reviewed layout, not the entire sequence. The Maintenance-tab `AutoCalibration` entry point itself remains uncaptured.

**Acquisition-state callouts proposed only after staff verification:**

1. `Stop All`
2. real-time display / `RTD`
3. routine acquisition/start control
4. save control, if it is visible in the same approved view

The multi-state plan must also locate the TopCam focus controls, internal camera/laser focus state, and the Maintenance-tab `AutoCalibration` entry without implying they coexist. If any label or role is not exactly current, replace the proposal with staff-verified controls before drafting.

**Quality-panel decision required:** the capture set has no failed AutoCalibration result, although `Screenshot (27).png` clearly provides a finished/PASS state. `Screenshot (18).png` and `(19).png` are the best prospective matched pair for weak versus strong silicon RTD response if staff confirms that only focus changed and approves relative count optimization as the immediate Side 2 question. Staff must choose between that RTD-focus pair with a separate textual AutoCalibration stop rule, or the originally planned calibration-fail/calibration-pass pair, whose failed half remains missing. Do not invent a count threshold, call an RTD trace a calibration pass, or fabricate a failure. `assets/media/tutorials/raman/display-flip-poster.jpg` is not sufficient evidence for this decision.

**Do not add:** laser power, grating, objective, slit, hole, integration-time, or accumulation recommendations unless the canonical page defines the approved routine setting; no peak assignment or material identification.

**Release gates:** verify the laser-safety, interlock, and sample-change sequence; select the Level 1 starting configuration and routine AutoCalibration scope; confirm every toolbar icon/control name and role; capture or otherwise verify the Maintenance-tab `AutoCalibration` entry point; decide and lock the multi-state layout; choose and approve the RTD-focus or calibration-result quality question; verify the silicon reference criterion and exact AutoCalibration stop/pass language; select and import only the approved captures; confirm save/export and shutdown.

## Innovatest Nemesis 5100G2 Hardness Tester

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

**Canonical source:** [`../../instruments/hardness-tester.md`](../../instruments/hardness-tester.md).

**Canonical SOP spine:** start the instrument and software; confirm the installed indenter/scale and specimen are compatible; load, focus, and position the specimen; characterize as appropriate; save; unload; clean; and restore the tester.

**Level 1 teaching workflow:** perform one single-point Vickers measurement using the programmed `Vickers 300 gf` test, reported as `HV 0.3`: select the test without changing its programmed load, dwell, or other settings; focus and position a prepared specimen; make the indent; verify the measured diagonals/quality state; save; unload; and restore the tester.

**Side 1 critical box:** **Scale, indenter, and turret rule** — the selected scale must match installed hardware and specimen limits; hands remain clear of turret and moving components.

**Primary image candidate captured:** external `innovatest/Screenshot (23).png` is the preferred native completed `176.0 HV0.3` state; see the [capture-integration work order](capture-integration-workorder-2026-08-12.md#innovatest-nemesis-5100g2-hardness-tester). It visibly supports the main focus, test, start, save, and accepted-indent context, but does not by itself verify the exact **SINGLE POINT** selection path.

**Primary callouts proposed:**

1. `IN FOCUS`
2. `SCALE SELECT`
3. `SINGLE POINT`
4. `START`
5. `SAVE` only if visible without crowding; otherwise place it in the bottom reminder

`TEST PATTERN` belongs only if staff explicitly make a pattern part of the default Level 1 workflow.

**Quality panels required:** a staff-approved pair showing a good square/symmetric indent with accepted diagonals and the software's documented red diagonal box when the diagonal difference exceeds 5%. Verify that rule on the current machine before publication.

**Do not add:** unsupported scales, instructions to edit the programmed load or dwell settings during routine use, conversion tables, metallographic interpretation, or maintenance/calibration procedures.

**Resolved technical decisions (2026-08-12):** Level 1 starts with the programmed `Vickers 300 gf` test and reports results as `HV 0.3`; there is no reason to start the introductory exercise at a higher load. Users select the programmed test and leave its load, dwell, and other settings unchanged. Alternate tests remain a material-compatibility decision rather than a routine settings-editing exercise.

**Capture follow-up (2026-08-12):** the external `admin/screenshots/innovatest` set has been triaged. `Screenshot (23).png` is the primary candidate and can provide the good-indent half of the quality pair. `Screenshot (41).png` exposes the Vickers load list but is in a Vickers 200 gf state; `Screenshot (49).png` exposes Single Point but is in a DIN state. Neither is an approved final HV0.3 selection source. No reviewed image supplies the bad red diagonal-difference half of the matched pair. Relevant hardware/end-state photos are supporting evidence, not required primary map images.

**Release gates:** reconcile the fitted indenter/load hardware and offered scales against the captured turret/software state; select, copy, integrate, and staff-approve the current HV0.3 control candidate; verify or capture the exact Single Point state in the correct method; capture and approve the missing bad-indent half and current warning behavior; confirm save/export and final state. The exact Level 1 scale/method is no longer an open gate, and routine users must not be instructed to edit programmed load, dwell, or other settings.

## Microtrac Sync Particle Size Analyzer

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

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

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

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

**Release status:** **BLOCKED. Provisional composition draft authorized; technical completion and publication prohibited.**

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
