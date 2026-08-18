---
published: false
review_date: 2026-08-18
target_branch: codex/quick-guide-rollout
target_commit: ec78694a29ec6539c4b73ba9bf07f55761483d07
target_guide: quick-guides/phenom-xl-sop-map-prototype.md
implementation_status: revision_requested
---

# Phenom XL Quick Guide review and implementation brief

This brief records lab-manager feedback on the Phenom XL provisional Quick Guide at commit `ec78694`. It is intended to be sufficient input for a later Claude CLI or Codex CLI implementation through Parley API. It records requested changes; it does not approve the current artifact for printing, publication, or installation.

## Review outcome

The current composition satisfies the provisional two-page structure in principle, but Side 2 does not explain how trained users should operate the instrument in practice. Its dominant image and numbered key highlight the coarse `Magnification`, `Focus`, `Contrast`, and `Brightness` sliders in the upper/right imaging-controls panel. Those are not the controls students are normally advised to use. The more useful lower-left control group, its mouse-wheel selection behavior, automatic functions, focus-in-area workflow, fine-focus toggle, navigation actions, capture action, mode rail, and practical acquisition-setting guidance are absent.

The guide therefore needs an instrument-specific Side 2 layout rather than another attempt to satisfy the one-image formula literally.

## General change: review gaps must not consume guide space

Review gaps are production metadata, not trained-user content. Do not render `quick-guide-sop-map-review-gap` blocks inside either printable sheet. They compete directly with the operational content and make layout evaluation unreliable because the eventual guide will not contain them.

Use this model instead:

1. Keep each guide's unresolved items in a sidecar review ledger under `_staff/quick-guides/`, with stable IDs, status, source location, and release consequence.
2. Put a non-rendering HTML comment such as `<!-- review-id: phenom-xl.focus-controls -->` at the affected source location when a precise anchor is useful.
3. Keep the visible, compact `Provisional composition draft — incomplete` badge while the artifact is under review. That badge communicates status without enumerating internal gaps.
4. If in-browser comments are later desirable, generate a screen-only off-canvas review drawer or overlay from the sidecar ledger. It must sit outside `.quick-guide-sheet`, occupy no sheet layout space, and be hidden in print. Do not make that optional UI a prerequisite for this revision; a sidecar ledger plus source anchors is sufficient.
5. Update the production procedure and content template so future provisional drafts use the sidecar model. Do not migrate every existing prototype in the Phenom XL revision unless that broader migration is explicitly requested.

### Phenom XL review ledger

| ID | Status | Release consequence | Note |
| --- | --- | --- | --- |
| `phenom-xl.save-export` | Open | Blocks technical completion | Confirm the routine image label, save, export, and copy convention. |
| `phenom-xl.final-state` | Open | Blocks technical completion | Confirm the final XL tray/chamber state and exact shutdown handoff. |
| `phenom-xl.control-captures` | Open | Blocks final Side 2 | Capture or select sanitized states that show the recommended lower-left controls and focus-in-area behavior. |
| `phenom-xl.settings-copy` | Open | Blocks final Side 2 | Staff-review the concise accelerating-voltage, beam-intensity, resolution, and averaging primer. |
| `phenom-xl.eds-boundary` | Open | Blocks curriculum sign-off, not primary SEM map drafting | Approve or revise the proposed brief Level 1 capability preview plus separate Level 2 independent-operation boundary. Do not teach EDS operation on this guide. |
| `phenom-xl.print-proof` | Open | Blocks printing/installation | Repeat 100% Letter color, grayscale, duplex, clipping, footer, and QR checks after the layout changes. |

## Required correction: remove the coarse-slider map

Do not use `assets/img/quick-guides/phenom-xl/livesem-imaging-controls.png` as the primary control map, and remove its four current callouts and key from Side 2. The visible sliders offer very coarse adjustment and are not the recommended student workflow. The asset may remain in the repository as supporting/archive evidence, but the guide must not imply that students should operate magnification, focus, brightness, or contrast with those sliders.

The replacement should prioritize the lower-left control group and explain the actual recommended interaction model.

## Recommended Side 2 information architecture

Use **three visual groups**, even if each group contains more than one tightly cropped source state:

1. **Whole-screen orientation map** — one complete LiveSEM screenshot, displayed at roughly 45–50% of printable page width, with zone-level callouts rather than tiny control-by-control labels.
2. **Recommended imaging controls and focus sequence** — the dominant instructional group, using a legible lower-left control crop plus small, adjacent focus-state details.
3. **Navigation, settings, and capture primer** — a compact workflow strip and a shallow top-panel crop, with concise decision guidance.

This is likely four to six source captures assembled into three coherent groups. Count visual groups, not files. Do not force one screenshot to represent controls or states that do not coexist.

The existing sample-height pair is useful, but it should not displace the operational map. Side 1 already states the XL clearance rule in the SOP and critical box. If Side 2 becomes crowded, move the pair to the detailed instrument page or omit it from the two-sided guide before shrinking the recommended-control content. If it remains, treat it as a small supporting strip after the three operational groups, not the dominant Side 2 decision.

### Suggested page reading order

1. **Find your way around LiveSEM** — whole-screen orientation image plus a short legend.
2. **Routine image-control workflow** — the primary student path, with the lower-left controls large enough to recognize.
3. **When autofocus is not enough** — focus-in-area and fine-focus sequence.
4. **Choose live and capture settings deliberately** — starting state and short acquisition-quality primer.
5. **Navigate, move, and capture** — NavCam double-click, `Move to SEM`, and the camera action, either as part of the overview legend or a compact flow strip.

## Visual group 1: whole-screen orientation map

Use one sanitized, complete, normal LiveSEM screenshot. It does not need to make every software label readable; its job is spatial orientation. At approximately half-page width, the large buttons and major zones should remain recognizable.

Use HTML/SVG overlays and an adjacent legend to identify the general purpose of these regions:

- the lower-left imaging controls used for magnification, focus, and automatic brightness/contrast;
- the top `System` / `Live` settings area;
- the persistent right-side mode area for imaging, gallery, Live EDS, EDS on the Phenom XL, and stitching;
- the camera control used to capture an image;
- load/unload and `Move to SEM` controls;
- the NavCam/right-panel navigation area when that state is shown.

Explain that interface panels slide in and out and that the edge chevrons reveal or hide them. The whole-screen legend should describe organization, not attempt to teach every button.

Do not suggest that NavCam, LiveSEM, every settings panel, and every mode are simultaneously open if they are separate states. Use a small NavCam inset where necessary.

The overview or NavCam inset must call out that **double-clicking a location on the NavCam image in the right slide-out panel moves the SEM view to that location**.

The mode rail can be identified for orientation, including the XL's Live EDS and EDS locations, without teaching independent EDS operation.

## Visual group 2: recommended lower-left controls

Use a close crop large enough for the control icons, their lower-right triangles, selection state, and `F` indicator to be seen at a 100% Letter print. Preserve enough surrounding screen edge that the user can connect the crop to the whole-screen map.

The guide must explain this interaction grammar:

- A blue-highlighted control is the current **mouse-wheel target**.
- Leave the mouse wheel assigned to **magnification** during routine navigation.
- A lower-right triangle on a control tile means **right-click for additional modes/options**.
- For focus and brightness/contrast, a normal **left-click performs the automatic function** unless a manual mode has been selected.
- A manual mode changes the mouse-wheel target so the wheel adjusts focus, brightness, or contrast. Those manual brightness/contrast paths are not recommended for routine student use.
- Use **automatic brightness/contrast**. Manual brightness/contrast adjustment is not expected to improve routine results for new users and should not be presented as the normal path.
- Try autofocus first. When autofocus does not give a good result, use **Focus in Area**, not the coarse focus slider.

A compact interaction legend can carry the repeated gestures without long paragraphs:

- blue = mouse-wheel target;
- left-click = auto;
- triangle + right-click = choose mode;
- recommended = wheel on magnification, auto brightness/contrast, Focus in Area when needed.

Verify the exact icon names and visible labels against the instrument before finalizing the callouts. Do not fabricate or redraw the interface; use clean source captures with external overlays.

## Focus-in-area sequence

Focus in Area is important enough to receive its own short sequence within Visual Group 2. A two- or three-state strip is preferable to prose wrapped around one screenshot.

Show and explain:

1. Right-click the focus tile's lower-right triangle and select **Focus in Area**.
2. When the focal-area box appears in the SEM image, the mouse wheel changes to focus adjustment for that area.
3. With Focus in Area selected, left-click the focus icon so an **`F`** appears. This is the hidden **fine-focus** toggle and makes the mouse-wheel focus step much smaller. It is generally needed for best focus.
4. Use the wheel to focus the selected area.
5. Click outside the focal-area box to apply that focal plane to the full SEM image.

The `F` state needs an explicit callout because the interface otherwise provides no discoverable indication that the focus-step change exists. If the focus menu, focal-area box, and `F` state cannot be shown legibly in one capture, use separate tight crops aligned as a numbered sequence.

## Visual group 3: navigation, settings, and capture

Use a compact recommended-flow diagram tied to actual UI crops:

`Load sample → NavCam: double-click target → Move to SEM → live/navigation settings → wheel for magnification → auto brightness/contrast → autofocus or Focus in Area + F → capture settings → refocus/re-run auto brightness/contrast → camera button`

Call out these controls explicitly:

- load/unload;
- `Move to SEM`;
- NavCam double-click navigation;
- the image-capture camera button;
- the persistent right-side imaging/gallery/Live EDS/EDS/stitching modes;
- top-panel accelerating voltage, beam intensity, resolution/scan size, and averaging.

### Starting state and acquisition primer

State the lab's normal live/navigation starting point clearly:

- **Beam intensity: Medium**
- **Live resolution: 960 × 540**

For captures, explain that settings should match the sample's charging behavior, magnification, stability, and required resolution. “Higher quality” settings do not necessarily produce the highest-quality image. Longer dwell, higher intensity, larger scans, or more averaging can make a charging or drifting sample look worse.

Keep the primer compact and decision-oriented rather than presenting a large parameter table. The final staff-reviewed version should cover:

- **Accelerating voltage:** what changing voltage does to surface sensitivity, interaction depth, charging, and usable signal; give directional guidance, not an unreviewed universal optimum.
- **Beam intensity:** begin at Medium for routine live work; increase only when the sample remains stable and the imaging goal benefits, and reduce when charging or beam sensitivity appears.
- **Resolution / scan size:** use 960 × 540 for live navigation; increase for a capture only when the additional pixels are useful and the sample remains stable.
- **Averaging:** more averaging can reduce random noise on a stable field, but costs time and can amplify drift, charging, or beam-damage problems.
- **Capture check:** after changing beam or capture settings, refocus and run automatic brightness/contrast again before capturing.

The voltage language needs a quick staff technical review before it is written as settled instruction. The Medium + 960 × 540 live/navigation recommendation and the warning that nominally higher-quality settings can produce worse images are approved feedback for this revision.

## Screenshot and crop plan

Prefer these sanitized source states or equivalent verified captures:

| Proposed asset/state | Required content | Display role |
| --- | --- | --- |
| `phenom-xl-livesem-overview.png` | Complete normal LiveSEM screen with all major edge bars visible | Small orientation map, about 45–50% page width |
| `phenom-xl-routine-controls.png` | Lower-left magnification, focus, automatic brightness/contrast, selection highlight, triangle indicators, and camera control | Dominant legible control crop |
| `phenom-xl-focus-menu.png` | Right-click focus options with `Focus in Area` visible | Small numbered focus inset |
| `phenom-xl-focus-in-area-fine.png` | Focal-area box plus the `F` fine-focus indication | Small numbered focus inset |
| `phenom-xl-system-live-settings.png` | Accelerating voltage, beam intensity, resolution/scan size, and averaging in a routine state | Shallow settings crop with primer |
| `phenom-xl-navcam-navigation.png` | NavCam image, load/unload, `Move to SEM`, and spatial context for double-click navigation | Small transition inset if the overview cannot carry it |

The source folder described in the capture work order already lists `SEM-select-focus1.PNG`, `SEM-select-focus-2.PNG`, `SEM-select-focus-not-Fine.PNG`, `navcam-sample.PNG`, and `SEM-top-panel.PNG` as potentially relevant. Re-triage those before requesting new captures. Existing files may document the necessary focus and settings states, but they must be checked for current UI accuracy, sensitive paths/addresses/sample names, and print legibility.

### Magnification and crop guidance

- Whole-screen overview: approximately 3.4–3.8 inches wide on the printed page. It is for spatial recognition, not reading fine labels.
- Primary lower-left control crop: approximately 4.5–5.5 inches wide, or otherwise large enough that icons and the `F` marker are immediately recognizable at 100% print.
- Focus insets: approximately 1.6–2.2 inches wide each, tightly cropped but with enough shared context to show that they are states of the same focus control.
- Top settings strip: near full content width if shallow; prioritize readable values and labels over showing a large amount of the electron image.
- Avoid a wide crop dominated by the specimen image when the teaching target is a small control cluster.
- Keep the original screenshots unannotated. Use HTML/SVG callouts so positioning can be tuned without degrading source evidence.

## Content priority when the page does not fit

Preserve content in this order:

1. recommended lower-left control interaction model;
2. focus-in-area plus `F` fine focus;
3. NavCam / `Move to SEM` / capture workflow;
4. live and capture settings primer;
5. whole-screen orientation map;
6. sample-height photographs.

Do not shrink essential control crops below recognition size to retain review notes or the sample-height pair. Review notes leave the sheet first. If necessary, move sample-height photographs to the detailed instrument page while retaining the concise clearance rule on Side 1.

## Files that should be reconciled during implementation

- `_includes/quick-guides/phenom-xl-sop-map-prototype.html`
- `_staff/quick-guides/README.md`
- `_staff/quick-guides/sop-visual-map-content-template.html`
- `_staff/quick-guides/instrument-specifications.md`
- `_staff/quick-guides/capture-integration-workorder-2026-08-12.md`
- `assets/css/style.scss` only as needed for the Phenom-specific multi-view layout and non-print review mechanism
- new or re-triaged sanitized captures under `assets/img/quick-guides/phenom-xl/`

Do not modify the published Quick Guides, publish the prototype, broaden EDS authorization, or change the canonical instrument SOP merely to make Side 2 fit.

## Acceptance criteria for the next revision

- No `Review gap` cards or unresolved-decision prose occupy either printable sheet.
- The unresolved items remain discoverable in a staff-side review ledger with stable IDs.
- The coarse-slider crop is no longer the primary map and is not presented as the recommended student control path.
- Side 2 clearly identifies the lower-left controls and explains blue mouse-wheel selection, left-click auto behavior, right-click triangle options, automatic brightness/contrast, and the recommendation to leave the wheel on magnification.
- The focus sequence explains autofocus, Focus in Area, the focal-area box, the hidden `F` fine-focus toggle, wheel focusing, and clicking outside the box to apply the focal plane.
- A complete-screen orientation view identifies the interface's major zones and explains that the panels slide in and out.
- NavCam double-click navigation, load/unload, `Move to SEM`, the camera button, and the persistent right-side mode organization are all findable.
- EDS modes may be named for orientation but independent EDS operation is not taught or implied.
- The guide states Medium beam intensity and 960 × 540 for live/navigation.
- The settings primer warns that higher nominal quality can produce worse images on charging, drifting, or beam-sensitive samples.
- Every mapped control and state is verified against an actual sanitized capture; no synthetic interface is introduced.
- Critical screenshots remain recognizable in a 100% Letter print and in grayscale.
- The artifact still produces exactly two Letter pages without clipping, overlap, or footer collision. Do not omit required operational content merely to preserve two pages; adjust the instrument-specific Side 2 layout first.
- Repeat repository checks, unpublished-page HTML/accessibility checks, QR decoding, color/grayscale render inspection, and physical duplex proof after the final layout is locked.

## Concise Parley implementation prompt

> Revise the unpublished Phenom XL SOP-and-visual-map Quick Guide using `_staff/quick-guides/phenom-xl-review-2026-08-18.md` as the authoritative review brief. Work from `codex/quick-guide-rollout` at or after `ec78694`. Remove rendered review-gap blocks and preserve their unresolved items in a staff-side ledger with stable source anchors. Replace the coarse-slider map with an instrument-specific multi-view Side 2 that teaches the lower-left control workflow, Focus in Area plus hidden `F` fine focus, NavCam/Move to SEM/capture actions, the full-screen control organization, and a compact settings primer. Re-triage the listed source captures before requesting new ones. Keep the prototype unpublished, do not expand EDS authorization, render and inspect the result at 100% Letter, and report any content/layout conflict rather than shrinking essential controls below legibility.
