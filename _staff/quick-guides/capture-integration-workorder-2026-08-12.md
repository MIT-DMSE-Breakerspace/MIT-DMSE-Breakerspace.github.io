---
published: false
---

# Quick Guide Field-Capture Integration Work Order — 2026-08-12

This document preserves the filename-level review of the field captures collected for the Quick Guide project. It is the mechanical handoff for selecting and copying those captures; it supplements, but does not replace, [`instrument-specifications.md`](instrument-specifications.md), the canonical instrument pages, or the release procedure in [`README.md`](README.md).

An image marked **use** is a strong source candidate, not an approval to publish it or a resolution of the instrument's other release gates. The canonical instrument page remains authoritative for procedure and safety. The instrument work order remains authoritative for curriculum, map controls, quality question, and release blockers.

## Source And Integration Rules

The reviewed originals are outside the repository at:

```text
<Dropbox>/DMSE Breakerspace/admin/screenshots/
```

Use the folder and filename exactly as listed below. Do not rename, delete, crop, annotate, or otherwise alter the Dropbox original. Copy each selected source into `assets/img/quick-guides/<instrument-slug>/` with the proposed descriptive name, then add HTML/SVG callouts in the include-backed guide. The repository copy must remain an unannotated raster source.

Process one instrument at a time and use one commit per instrument. For each instrument:

1. Read its complete entry in [`instrument-specifications.md`](instrument-specifications.md) and its canonical instrument page.
2. Confirm the source file has not changed since this review. If it has changed, inspect only that changed file again; do not repeat the full capture triage without cause.
3. Copy only the selected sources. Do not bulk-import the capture folder.
4. Reconcile every callout with the exact visible label or a staff-verified icon function. A good-looking screenshot does not resolve an unverified control.
5. Preserve any multi-state-layout, matched-pair, workflow, export, or final-state blocker stated below. Do not force several states into the one-image template or substitute an unrelated bad/good pair.
6. Run `script/check-quick-guide-sources`, the relevant page checks, a site build, paginated PDF rendering, color and grayscale inspection, QR testing, and the physical-proof gates in [`README.md`](README.md).

The terms below mean:

* **Use:** preferred Quick Guide source candidate.
* **Supporting only:** useful for the canonical page, staff guide, detailed instructions, verification, or a later task card; normally do not import it into the compact Quick Guide.
* **Exclude:** not relevant to the approved normal Quick Guide, duplicative, an obsolete/wrong method state, a progress-only screen, or a privacy/clutter risk. Keep the original archive unless a separate housekeeping task authorizes deletion.

## Processing Status

| Instrument | Capture triage | Next mechanical action | Important remaining blocker |
| --- | --- | --- | --- |
| FTIR | **Integrated** | No more capture selection; retain as the reference implementation | Side 1 layout, staff media/callout review, and physical proof |
| Phenom XL SEM | **Ready for selective import** | Copy the two LiveSEM states and matched height pair | Reviewed multi-state map, exact control verification, EDS boundary, save/export, final state |
| Phenom Pure SEM | **Ready for selective import** | Copy the two Pure LiveSEM states and matched height pair | Reviewed multi-state map, exact control verification, save/export, final state |
| Aeris XRD | **Ready for selective import** | Copy the queue screen and changer-cover pair | HighScore boundary, program curation, sign-in/handoff policy, exact position control |
| Instron | **Partially ready for selective import** | Copy the actual-run Bluehill screen and enabled handset only after the two-view layout is approved | Method/end condition, layout, toe-artifact pair, travel-limit prompt, final state |
| DSX-1000 optical | **Ready for layout review** | Use the listed interface states to approve a compact multi-state layout; then import only the approved subset | Multi-state layout, exact controls, save/final-state review |
| Innovatest hardness tester | **Partially ready for selective import** | Copy the HV0.3 result screen as the main candidate | Exact Single Point state, bad-indent pair, hardware/scale reconciliation, export/final state |

The `raman/` folder now present beside these sets was not part of this completed image-review sequence and has not been triaged here. Treat it as new work; do not infer selections from this document.

## Thermo Scientific Nicolet iS5 FTIR Spectrometer

**Source folder:** `FTIR/1080/`

**Status:** already selected, copied, and integrated in commit `dd1b1e9`. The 1080 captures made at 150% Windows scaling were preferred because they keep the OMNIC controls more legible at print size. The 4K series did not add useful Quick Guide detail and showed small UI elements or scaling artifacts at the tested settings.

### Use — completed mappings

| Dropbox source | Repository copy | Purpose |
| --- | --- | --- |
| `omnic-1080-status-good.png` | `assets/img/quick-guides/ftir/omnic-main-system-status-good.png` | Main OMNIC map with green **System Status** |
| `smp-prev-bad.png` | `assets/img/quick-guides/ftir/omnic-sample-preview-no-contact.png` | Near-zero/no-contact state |
| `smp-prev-clamped.png` | `assets/img/quick-guides/ftir/omnic-sample-preview-contact-established.png` | Contact-established state with **Start Collection** |

### Supporting only

The remaining 1080 background, collection, setup, naming, progress, and intermediate-contact screens can support canonical or staff troubleshooting if a later task needs them: `bkg-add.png`, `bkg-col.png`, `bkg-prep.png`, `bkg-prev.png`, `bkg-win.png`, `exp-setup.png`, `omnic-1080.png`, `smp-add.png`, `smp-col-name.png`, `smp-col-prep.png`, `smp-collecting.png`, `smp-prev-partial.png`, and `smp-window.png`.

### Exclude from the compact Quick Guide

* The entire `FTIR/4k-archive/` set. Keep it as archive material; do not reintroduce it into the Quick Guide.
* `omnic-1080-status-bad.png`: error/status troubleshooting is outside the normal map.
* `bkg-contaminate.png`, `smp-prev-cont-bkg.png`, and `smp-win-contaminated-bkg.png`: useful evidence for the contaminated-background recovery procedure, not primary normal-workflow images.
* `smp-window-no-bkg.png`: missing-background troubleshooting, not the normal state.

### Preserved decisions and open work

The compact guide intentionally uses the mechanics of good solid-sample contact, not a catalogue of solid forms. The selected no-contact/contact pair is sufficient for that immediate decision. The contaminated-background captures were collected deliberately and retained for the canonical/staff explanation. No further FTIR image selection is needed. Do not treat this as publication approval: the known Side 1 overflow, staff review, print, QR, and duplex-proof gates remain.

## Thermo Fisher Phenom XL SEM

**Source folder:** `PhenomXL/`

### Use

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `SEM-right-panel.PNG` | `assets/img/quick-guides/phenom-xl/livesem-imaging-controls.png` | Best clean routine LiveSEM state for magnification, focus, contrast, brightness, rotation, acquisition/navigation context |
| `SEM-top-panel.PNG` | `assets/img/quick-guides/phenom-xl/livesem-system-settings.png` | Essential second state for accelerating voltage, beam intensity, detector, vacuum, averaging, and scan size |
| `sample-height-incorrect.JPG` | `assets/img/quick-guides/phenom-xl/sample-height-insufficient-clearance.jpg` | Preferred stop half of the matched XL clearance question |
| `sample-height-correct.JPG` | `assets/img/quick-guides/phenom-xl/sample-height-correct.jpg` | Preferred continue half; the sample is visibly 5–7 mm below the tray top |

Use `SEM-right-panel.PNG` as the base software image and `SEM-top-panel.PNG` as the required second interface state. The five planned functions do not coexist legibly in one capture. Do not improvise a two-view design: retain the layout blocker until a specific variant is reviewed, then copy only the views that variant uses.

The height pair is safely photographed outside the chamber and asks the correct question. `sample-over-height.JPG` is a stronger, obviously unsafe example, but `sample-height-incorrect.JPG` is the closer composition match to `sample-height-correct.JPG` and better represents insufficient clearance. Staff may choose the stronger stop image if clarity matters more than matching composition.

### Supporting only

* `navcam-sample.PNG`: useful current NavCam loading/navigation state.
* `navcam-empty.PNG`: acceptable representation of the clean end state; the clean empty XL tray is normally stored inside the instrument.
* `SEM.PNG` and `SEM-bottom-panel.PNG`: clean alternate interface states, but the essential controls are less complete than the chosen pair.
* `SEM-select-focus1.PNG`, `SEM-select-focus-2.PNG`, and `SEM-select-focus-not-Fine.PNG`: detailed focus-mode evidence for canonical or trainer material.
* `sample-over-height.JPG`: stronger stop example if staff chooses it over the matched pair.
* `sample-height-correct-detail.JPG`: close-up of the correct condition, useful in detailed instructions.
* `SEM-too-bright.PNG`: usable image-quality teaching example, but the Quick Guide's immediate pair is the physical clearance decision.
* `navcam-menus.PNG`, `moving-to-navcam.PNG`, and `phenom-status.PNG`: transition/status evidence rather than the primary map.

### Exclude from the primary Quick Guide

* `SEM-EDS.PNG` and `SEM-Live-EDS.PNG`: EDS is outside the primary SEM Quick Guide. Retain for a future Level 2 task card if that curriculum boundary is approved.
* `SEM-gallery.PNG`, `customize.PNG`, and `help.PNG`: gallery/customization/help states do not map the routine Level 1 controls.
* `instrument-standby.PNG`: not needed; the visible Snipping Tool overlay also makes it a poor final source. There is no recapture requirement because standby is not expected to be mapped.

### Preserved decisions and open work

The NavCam empty view may stand for the normal clean tray stored inside the XL. No new, more perfectly aligned height pair is required unless staff rejects the current clarity. Still unresolved: the reviewed multi-state map layout; exact visible icon/label verification; EDS training boundary; save/export; and final tray/chamber state approval.

## Thermo Fisher Phenom Pure SEM

**Source folder:** `PhenomPure/`

### Use

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `SEM-right-panel.PNG` | `assets/img/quick-guides/phenom-pure/livesem-imaging-controls.png` | Best current Pure LiveSEM state for magnification, focus, contrast, brightness, rotation, gamma, histogram, acquisition/navigation context |
| `SEM-top-panel.PNG` | `assets/img/quick-guides/phenom-pure/livesem-system-settings.png` | Essential second state for voltage, beam, resolution, averaging, and related top-panel settings |
| `sample-too-high.JPG` | `assets/img/quick-guides/phenom-pure/sample-height-too-high.jpg` | Stop half; sample protrudes above the holder edge |
| `sample-height-correct2.JPG` | `assets/img/quick-guides/phenom-pure/sample-height-correct.jpg` | Continue half; best matched frontal view with the sample below the holder edge |

Use only Pure captures for the Pure guide. The software family resembles the XL, but the visible options are not identical. As with the XL, the right-panel and top-panel functions require a reviewed multi-state layout; do not reuse the XL design or screenshot by assumption.

### Supporting only

* `navcam.PNG`: separate navigation state.
* `SEM.PNG` and `SEM-bottom-panel.PNG`: clean alternate LiveSEM states.
* `sample-height-correct.JPG`: correct-state alternative, but its ruler/composition is less well matched than `sample-height-correct2.JPG`.
* `holder-storage-gray=charge-reduction-black=high-vac.JPG`: useful canonical/staff reference for the gray charge-reduction and black high-vacuum holders.
* `gallery.PNG`, `gallery-measurement.PNG`, and `settings.PNG`: detailed software/reference states.

### Exclude from the primary Quick Guide

* `SEM-capture.PNG`: acquisition/progress state, not the clean routine map.
* `temp-control-holder.JPG`: cold-stage/temperature-control hardware belongs to Level 2, not the primary room-temperature guide.

### Preserved decisions and open work

The current height pair is sufficient; no XL-specific 5–7 mm language belongs here. Still unresolved: reviewed multi-state layout, exact Pure control verification, save/export, and final holder/chamber state approval.

## Malvern Panalytical Aeris Research XRD

**Source folder:** `AerisXRD/`

### Use

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `sample-id.png` | `assets/img/quick-guides/xrd/aeris-queue-fields.png` | Best filled queue screen for measurement program, Sample ID, file name, changer-position context, and **Add to Queue** |
| `cover-off.JPG` | `assets/img/quick-guides/xrd/changer-cover-off.jpg` | Stop half; changer loaded with the removable cover absent |
| `cover-on2.JPG` | `assets/img/quick-guides/xrd/changer-cover-on.jpg` | Continue half; closest, clearest view of the cover restored |

`sample-id.png` is preferred over the blank queue form because the generic quick-guide identifiers make the fields easy to see without exposing private information. The exact numbered changer-position control still needs label/function verification before annotation.

### Supporting only

* `measurement-program-selector.png`: clean blank queue-form alternative.
* `measurement-program-selector-dropdown.png`: evidence for program-list curation; do not use as the final map while the list appears crowded and uncurated.
* `cover-on1.JPG`: wider alternate view of the cover restored.
* `sample-queued.png` and `second-sample-queue.png`: queue-state/detail evidence.
* `sample-export.png`, `copy-results.png`, and `file-transfer-location.png`: export/copy and destination evidence for canonical or trainer instructions. The old transferred filenames visible in `file-transfer-location.png` were reviewed by the lab manager and do not create a privacy concern, but the file-browser view is unnecessary on the compact Quick Guide.
* `sample-result.png`: example diffraction pattern/capability evidence. There is no staff-defined beginner pass/fail rule that would make it the immediate quality panel.

### Exclude from the primary Quick Guide

* `sample-starting.png`, `sample-starting2.png`, `sample-running.png`, and `sample-2-run.png`: transient progress states.
* `incidents-log.png`: troubleshooting/administrative record, outside the normal workflow map.

### Preserved decisions and open work

The capture set now contains a good queue candidate, a changer-cover pair, and export/destination evidence; do not leave those items recorded merely as “capture needed.” The screenshots do not settle the HighScore teaching boundary, stored-program curation, companion-workstation authentication, or exact handoff policy. The user resolved the privacy concern about older filenames, not those workflow decisions.

## Instron 68TM-50 Universal Testing System

**Source folder:** `instron/`

The screenshots made before approximately 15:14 were exploratory. The files from `Screenshot (26).png` onward were captured after 15:20 during an actual loaded-sample test and are preferred whenever they show the same function. Treat `Screenshot (2).png` through `Screenshot (25).png` as superseded by a later equivalent unless a specific missing state requires separate review.

### Use after layout approval

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `Screenshot (29).png` | `assets/img/quick-guides/instron/bluehill-quicktest-setup.png` | Best clean actual-run Bluehill state: tension QuickTest, specimen information, speed, output toggles including raw-data export, zero displacement, and balance controls |
| `handset-enabled.JPG` | `assets/img/quick-guides/instron/handset-enabled.jpg` | Best current handset control-map candidate with illuminated controls |

Both control surfaces are required by the current Level 1 workflow. Do not import them into a final composition until the Instron-specific two-view layout is reviewed. The actual capture shows a QuickTest route, but that does not decide the still-open saved-method-versus-QuickTest policy.

### Supporting only

* `Screenshot (26).png` and `Screenshot (27).png`: video-extensometer transducer settings and pant-mark finding from the actual run. Retain for detailed/staff or later Level 2 material; they are not primary Level 1 controls unless the curriculum explicitly expands.
* `Screenshot (28).png`: clean generic QuickTest setup, less complete than `(29)`.
* `Screenshot (30).png` and `Screenshot (31).png`: zero-displacement and force-balance prompts.
* `Screenshot (32).png`: current crush-hazard warning. This is not the travel-limit prompt and must not be labeled as one.
* `Screenshot (33).png` through `Screenshot (41).png`: actual-test progress states.
* `Screenshot (42).png`: clean completed force-displacement curve. It is a valid result example but not the required matched soft-toe decision pair.
* `Screenshot (43).png`: sample-file save dialog and output-path evidence for canonical/staff instructions.
* `handset-disabled.JPG`: exact disabled end state; use for final-state verification rather than the main annotated surface.
* `tensilte-test-ready.JPG`, `tensile-test-run.JPG`, `tensile-grip-setup.JPG`, `test-complete.JPG`, `finished-test.JPG`, `broken-closeup-normal-lighting.JPG`, `broken-finished.JPG`, and `broken-specimen.JPG`: setup, run, completion, and specimen-failure references for canonical/staff material.
* `instron-clean-end-of-day.JPG` and `instron-tooling-storage.JPG`: important final-state and storage references, but not Side 2 primary images.

### Exclude from the primary Quick Guide

* `Screenshot (2).png` through `Screenshot (25).png` when a later actual-run equivalent exists.
* `Screenshot (44).png`: Windows output folder with unrelated historical files; do not publish it.
* Broken-specimen photos as a substitute for the required soft-toe/corrected-repeat pair. They answer a different question.

### Preserved decisions and open work

The guide-level data rule is **always export raw data**. Do not add general folder, naming, retention, or data-management prescriptions beyond what the canonical source requires. The quality pair is still missing: use the same setup's soft curved toe caused by slack or grip slip versus a corrected repeat without that artifact; do not stage an unsafe test merely to create it. The travel-limit prompt also remains uncaptured—`Screenshot (32).png` is only the crush-hazard warning. Method route, end condition, initial/final state, two-view layout, exact controller labels, and export implementation still require review.

## Olympus DSX-1000 Digital Optical Microscope

**Source folder:** `DSX1000/`

No one screenshot exposes every confirmed Level 1 function legibly. Use this set to approve a compact multi-state variant first; then import only the approved states or crops. Do not turn the sequence into a many-panel screenshot tutorial.

### Use for the layout review

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `DSX-home.PNG` | `assets/img/quick-guides/optical/dsx-main-controls.png` | Clean base interface with **Best Image**, Stitching, 2D/3D choices, and **2D Acquisition** |
| `best-image.PNG` | `assets/img/quick-guides/optical/dsx-best-image.png` | Exact Best Image selection state |
| `stitching-selection.PNG` | `assets/img/quick-guides/optical/dsx-stitching-menu.png` | Exact Stitching menu with Live panorama and High quality panorama |
| `hq-pano-setup.PNG` | `assets/img/quick-guides/optical/dsx-high-quality-panorama-setup.png` | High-quality panorama dialog with **Use it as map image** visibly deselected |
| `3d-capture.PNG` | `assets/img/quick-guides/optical/dsx-3d-acquisition.png` | Evidence for the 3D acquisition state; use only if staff accepts the progress-state view |
| `oof.PNG` | `assets/img/quick-guides/optical/focus-poor.png` | Stop half of the matched focus pair |
| `in-focus.PNG` | `assets/img/quick-guides/optical/focus-usable.png` | Continue half of the matched focus pair |

`DSX-home.PNG`, `best-image.PNG`, `stitching-selection.PNG`, and `hq-pano-setup.PNG` are the recommended core stack. `3d-capture.PNG` may be necessary to locate the 3D path, but it shows acquisition in progress and should be omitted if the core/base state can support a staff-verified 3D callout. A likely approved variant would use a base image plus a small number of tightly cropped interface states; its exact geometry and number of views still require staff review.

### Supporting only

* `live-pano.PNG`: confirms the live-panorama/map-image state; potentially useful if staff prefers it to the broader stitching menu.
* `hq-pano-run.PNG`: high-quality panorama progress evidence.
* `lext.PNG` and `lext-measurement.PNG`: LEXT analysis/report capability and save-workflow context. LEXT is previewed, not mapped as a Level 1 operation.
* `software-exit.PNG`: shutdown confirmation message for canonical/staff closeout.
* `tilt-position.PNG`: clearance/tilt reference for canonical or trainer guidance.
* `dark-field.PNG`: observation-mode result/capability example.
* `in-focus-10x.PNG`: usable in-focus alternative, but it is not as closely matched to `oof.PNG` as `in-focus.PNG`.

### Exclude from the primary Quick Guide

* `hq-pano-run.PNG` as a primary map state: it is transient progress rather than a control-finding view.
* LEXT analysis/report screens as Side 2 controls. The Quick Guide should not expand the short capability preview into a taught analysis workflow.
* A required screenshot of the startup warning. The startup message tells users to clear the stage/head before both move; it has worked adequately for years, is not readily screen-capturable, and the lab manager explicitly decided that its capture must not become a requirement.

### Preserved decisions and open work

Clicking **2D Acquisition** completes the capture and opens it in LEXT; there is no missing intermediate dialog or control-software step to capture. Users must save all captures and analysis through LEXT before leaving for the day; record that in the canonical/staff workflow and the compact reminder, not by turning LEXT into the primary map. The current `oof.PNG`/`in-focus.PNG` pair satisfies the matched focus-image need. Multi-state layout, exact visible controls, save/copy wording, shutdown/final clearance, and staff approval remain open.

## Innovatest Nemesis 5100G2 Hardness Tester

**Source folder:** `innovatest/`

### Use

| Dropbox source | Proposed repository name | Purpose |
| --- | --- | --- |
| `Screenshot (23).png` | `assets/img/quick-guides/hardness-tester/impressions-vickers-hv0-3-result.png` | Best clean completed **176.0 HV0.3** state with visible indent, accepted green diagonals, **IN FOCUS**, test selector, **START**, **SAVE**, and measurement context |

This is the best main software candidate and may also supply the good half of the indent-quality pair through a proportional crop. It does not visibly establish the exact **SINGLE POINT** selection path. Do not claim that gate is resolved by this image alone.

### Supporting only

* `Screenshot (8).png` through `Screenshot (10).png`: clean Vickers 300 gf / HV0.3 pre-run and focus states.
* `Screenshot (3).png`: initialization warning; canonical/staff safety evidence.
* `Screenshot (11).png` through `Screenshot (22).png`: movement/progress states from the HV0.3 run.
* `Screenshot (24).png` and `Screenshot (25).png`: partial test/menu-selection context.
* `Screenshot (26).png`: save-to-archive prompt.
* `Screenshot (36).png` through `Screenshot (39).png`: report/export evidence, but from a Rockwell path and therefore unsuitable as the Level 1 map.
* `Screenshot (40).png` through `Screenshot (48).png`: scale/test-family inventory. `Screenshot (41).png` exposes the Vickers load list and shows 300 gf as an option, but its current selected header is **Vickers 200 gf**; use only to verify the menu, not as the final HV0.3 selection image.
* `Screenshot (49).png`: **Single point** menu evidence, but in the wrong DIN test state; it cannot serve as the final Level 1 source.
* `Screenshot (50).png`: pattern editor, outside the routine single-point workflow.
* `IMG_4377.JPG`, `IMG_4378.JPG`, and `IMG_4379.JPG`: useful stage/specimen/turret loading and hardware references for canonical or staff materials.
* `IMG_4388.JPG`: whole machine with head clear.
* `IMG_4390.JPG`: clean empty-stage/head-clearance end-state reference.
* `IMG_4391.JPG`: rear power-switch reference for startup/shutdown documentation.

### Exclude from the primary Quick Guide

* `Screenshot (1).png` and `Screenshot (2).png`: login/keyboard state; `(2)` also displays a username.
* `Screenshot (4).png` through `Screenshot (7).png`: obsolete Level 1 **Vickers 200 gf / HV0.2** states.
* `Screenshot (27).png` through `Screenshot (35).png`: Rockwell/other-method run states.
* `Screenshot (36).png` through `Screenshot (39).png` as Level 1 instruction images: they expose Rockwell settings, including dwell values that users are not supposed to set.
* `Screenshot (42).png` through `Screenshot (48).png` as primary Level 1 maps: they show other test families.
* `IMG_4389.JPG`: monitor displays a Windows file list and unrelated data; avoid public use.

### Preserved decisions and open work

The Level 1 default is the programmed **Vickers 300 gf** test, reported as **HV0.3**. Users select that test and leave its programmed load, dwell, and all other settings unchanged. Do not state a dwell time or instruct users to edit those settings. A fresh HV0.3 screenshot with the Pattern/Single Point selection open may still be needed unless staff can verify and map the exact control through an approved multi-state treatment. The bad half of the quality pair is also missing: no reviewed capture shows the documented red diagonal-difference warning in the correct HV0.3 context. Do not substitute a Rockwell warning or generic stop state. Fitted hardware/scale reconciliation, exact control selection, warning behavior, export, and final state still require staff approval.

## Deliberately Not Re-Triaged Here

The reviewed capture sets above are the only ones covered by this handoff. The presence of files in another folder does not mean they have been inspected, approved, or rejected. In particular, `raman/` requires a separate content-and-image review against the Raman work order before any file is copied into the repository.

When a future capture set is reviewed, append a dated section or create a new dated companion work order and link it from [`README.md`](README.md). Do not scatter filename decisions among the training README, site TODO, and unrelated handoff files.
