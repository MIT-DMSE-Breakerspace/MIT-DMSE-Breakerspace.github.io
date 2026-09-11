---
published: false
---

# Provisional Staff-Guide Work Orders

This rolling ledger bounds the 2026-08-10 provisional staff-guide pass. Read [`provisional-draft-procedure.md`](provisional-draft-procedure.md) first. Add detail here only when an instrument enters active drafting; do not pre-design the second wave before the first-wave prototypes show what breaks.

## Status

| Order | Instrument | Prototype | Composition status | Principal review gap |
| --- | --- | --- | --- | --- |
| 1 | FTIR | `_staff-training/ftir.md` | Reviewed 2026-08-11; released to the Trainer Portal 2026-08-31 | None for the trainer guide; the compact Quick Guide redesign remains separate. |
| 2 | Phenom XL | `_staff-training/phenom-xl-trainer-prototype.md` | Lab-manager review in progress; EDS boundary approved 2026-08-20 | Define image quality; verify save/export, final state, interface evidence, and participant Quick Guide. |
| 3 | Phenom Pure | `_staff-training/phenom-pure-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable | Define image quality; verify save/export, final state, and participant Quick Guide. |
| 4 | XRD | `_staff-training/xrd-trainer-prototype.md` | Prototype drafted; source/handoff audit corrected participant-artifact claims; build passed; external HTML validation unavailable | Decide HighScore and stored programs; verify workstation access, export, final changer-cover state, and participant Quick Guide. |
| 5 | Instron | `_staff-training/instron-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable; structural exception | Decide method, end condition, result gate, export, hardware states, and two-view participant artifact. |

FTIR was released after lab-manager review. The other four prototypes remain blocked for routine delivery until their guide pairs, operational checks, and practice gates are complete. Composition order is a starting queue, not a command to wait on a blocked instrument.

**Recommended review sequence:** FTIR review is complete. Compare Phenom XL and Phenom Pure together so shared SEM categories do not erase their different physical loading actions; review XRD next because its session crosses the instrument touchscreen, companion workstation, and paper log; then review Instron separately as the deliberate multi-surface structural exception. This is a document-review sequence, not a change to the co-equal first-wave rollout priority.

**Review revalidation — 2026-08-11:** after the participant-artifact source/handoff correction, normal and unpublished Jekyll builds passed and the rendered checklist totals remained unchanged. The word measurements below were refreshed for the corrected prototype-only closeout include and XRD gap. `script/validate-html` was rerun, but the external W3C service again returned HTTP 429; HTML validation remains environmentally unverified.

## FTIR Compact Guide {#ftir-compact-prototype}

**Sources:** [`ftir.md`](ftir.md), [`../instruments/ftir.md`](../instruments/ftir.md), [`../quick-guides/ftir-sop-map-prototype.md`](../quick-guides/ftir-sop-map-prototype.md), and the shared trainer references.

**Purpose:** preserve the useful operational coverage in a short guide that a trainer can run during the session. The reviewed compact artifact replaced the older live guide on 2026-08-31.

**Target composition:**

* 17 FTIR-specific checks;
* six checks in `checklist-safety-compact-prototype.md` while preserving every current safety point;
* seven separately checkable actions in `checklist-closeout-compact-prototype.md`, with explanatory prose cut substantially;
* approximately 30 rendered checks total;
* broad phases: before session; welcome/safety; scope/startup/background; two sample cycles and comparison; shutdown; closeout;
* no more than about 100 words of instrument-specific trainer notes.

**Combine:**

* equipment, artifact, supplies, and two-sample readiness into two before-session gates;
* welcome and printed-Quick-Guide handoff into one item;
* FTIR capability/contact/compatibility and canonical-page navigation into two items;
* login, OMNIC, and System Status into one startup item;
* uncovering, cleaning, and the first glove transition into one item;
* bare/unclamped background, preview behavior, and Start Collection into one item that is explicitly conditional on preview being enabled;
* first-sample loading/contact/clutch, collection/quality, saving, and unloading/cleaning into four consequential checks;
* comparison and data-retention confirmation into one check;
* shutdown into data/software and physical-end-state checks;
* sample/supply/guide reset into one instrument closeout item.

Retain verbatim: **“Participant repeats the full cycle on the second material with less prompting.”**

Delete as live checkboxes: viewing/crowding setup, unobstructed room-safety equipment, LibCal-list review, repository privacy/accommodation reminders, repeated navigation/reservation checks, and the duplicated seven-item success checklist.

**Explicit performance observations:** glove transition; clean/dry crystal; bare/unclamped background; tip/contact/clutch; preview versus committed collection; quality decision before unloading; individually saved and retrievable data; second cycle and shutdown with reduced prompting.

**Resolved during review — 2026-08-11:** Level 1 does not use the complex background-preview shape as an acceptance test. Correct setup means a clean, dry, bare, unclamped crystal; contamination is recognized later from negative or unexpected features in a collected sample spectrum.

**Resolved during review — 2026-08-11:** A green **System Status** check means the instrument is ready. Any other state prevents background and sample collection, so the trainer stops and asks staff; no catalog of failed appearances is needed to prevent flawed results.

**Resolved during review — 2026-08-11:** If negative features suggest a contaminated background, release the pressure tower and unload the sample while gloved; clean and dry the crystal and plate; remove gloves; collect a complete new background on the bare, unclamped crystal; then reload and recollect the sample. Stop and ask staff if negative features remain.

**Resolved during review — 2026-08-11:** The available printed FTIR Quick Guide is the participant artifact for this trainer guide. Review, proof, and installation of the separate compact Quick Guide redesign do not block the trainer guide.

**Review requirements satisfied:**

* the trainer confirms **Preview Data Collection** is enabled at startup, and the session assumes that expected state;
* use “save each needed spectrum individually,” not the unsupported absolute “group-saving does not exist”;
* do not use “clean background” or “recognizable spectrum” as undefined pass criteria;
* comparison of the two spectra remains Level 1, but material identification and database searching do not.

**Do not edit during composition:** the current live FTIR guide, the canonical FTIR page, the published Quick Guide, or the production shared includes. Record canonical corrections separately.

**Composition result — 2026-08-10:**

* **Checks:** 17 FTIR-specific + 6 compact safety + 7 compact closeout = **30 rendered checks**.
* **Words:** `wc -w` reports 1,087 in the prototype source, 216 in the compact safety include, and 228 in the compact closeout include (1,531 source words across the three files). The unpublished render contains **944 runnable-checklist words**, **1,218 total content words**, and **44 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` passed; `bundle exec jekyll build --unpublished` also rendered the prototype and all 30 controls. `script/validate-html` was run, but its external W3C service was unreachable in the sandbox and then returned HTTP 429 with network access; HTML validation remains unverified for environmental reasons.
* **Review status:** all trainer-guide release gaps carried from composition were resolved during lab-manager review on 2026-08-11. The guide was released to the Trainer Portal on 2026-08-31.
* **Structural lesson:** the continuous run sheet can reach the 30-check target by grouping around omission risks. Six safety checks and seven administrative actions preserve the shared coverage without using production includes. The exact review-gap blocks add visible release burden but still keep the rendered page near the editorial word range; do not retrofit this reduction into live guides during this pass.

**Release-candidate revalidation — 2026-08-11:**

* **Checks:** 19 FTIR-specific + 6 compact safety + 7 compact closeout = **32 rendered checks**.
* **Words:** `wc -w` reports 963 in the trainer-guide source, 203 in the compact safety include, and 214 in the compact closeout include (**1,380 source words** total). The unpublished render contains **1,069 runnable-checklist words**, **1,111 total content words**, and **33 trainer-note words**.
* **Validation:** `bundle exec jekyll build --unpublished` passed and both the trainer index and FTIR candidate returned HTTP 200 from the port 4174 preview. On 2026-09-11 the four incomplete prototypes were published and linked from the portal with a **Draft advisory** state; their visible release gaps remain unresolved.

## Phenom XL Prototype

**Sources:** [`../instruments/phenom-xl.md`](../instruments/phenom-xl.md) and the complete [Phenom XL Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-xl-sem).

Draft the supported core SEM imaging session: XL-specific sample preparation and height/clearance, NavCam navigation, SEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Do not name hair as a required default sample.

**Curriculum decision — reviewed 2026-08-20:** Level 1 includes a brief trainer-operated EDS capability preview and advertises optional Level 2 EDS-focused training. Level 2 is not a prerequisite for independent EDS use. The primary participant Quick Guide remains scoped to SEM imaging and does not map EDS controls.

**Operating fact — lab-manager confirmed 2026-08-20:** The normal starting condition is the XL tray inside the closed sample compartment, Phenom software closed, Windows at the sign-in screen, and the microscope in standby. This was confirmed as the expected state, not recorded as a direct instrument observation.

**Direct observation — 2026-08-20:** At the XL, the complete normal loading sequence matched the canonical page: start and connect the Phenom software; use the software eject control to open the compartment; remove the tray; load with stub tweezers and verify secure attachment and the XL-specific approximately 5–7 mm-below-tray-top clearance; reinsert the tray; use the same software control to close the compartment; and wait for NavCam. The existing matched clearance photographs remain supporting evidence; tray-removal and stub-loading motion media are still uncaptured.

**Terminology decision and interface evidence — reviewed 2026-08-20:** Visible XL guidance uses **SEM** or **SEM view**, not “LiveSEM.” Direct observation confirmed that the transition control is an icon with the mouse-over label **move to SEM**. The sanitized native-resolution NavCam source candidate shows the icon in the upper left immediately below the eject/open-close icon; its symbol is two circles with plus signs and an arrow between them. Direct observation also confirmed the three lower-left NavCam mouse-over labels: **magnification**, **brightness/contrast**, and **focus**. The shared public section now uses the `#sem-view` anchor.

**Control-label refinement — reviewed 2026-08-20:** The XL UI labels the image-resolution control **Scan Size**. XL guidance uses that exact label and may clarify it parenthetically as image resolution. A sanitized native-resolution SEM source candidate is now available and visibly supports the label; selection of the complete Level 1 top-panel control set remains under review.

Remaining review gaps include the exact save/export convention, final tray/chamber state, interface evidence, and any observable image-quality decision not defined canonically. Do not reuse the Pure loading rule merely because the interfaces are similar.

**Composition result — 2026-08-10:**

* **Checks:** 18 XL-specific + 6 compact safety + 7 compact closeout = **31 rendered checks**.
* **Words:** `wc -w` reports 1,184 prototype-source words (1,628 with the 216-word safety and 228-word closeout prototype includes). The unpublished render contains **992 runnable-checklist words**, **1,311 total content words**, and **46 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 31 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried at composition:** EDS teaching boundary; observable Level 1 image-quality decision; save/export and naming convention; final tray/chamber state; approved and installed participant Quick Guide. The EDS boundary was resolved during lab-manager review on 2026-08-20; the other gaps remain open.
* **Structural lesson:** NavCam, SEM view, and the grouped top-panel inspection fit one chronological trainer checklist even though they are distinct interface states. Five specific release gaps push total page prose above the FTIR editorial range while the runnable checklist remains within it; retaining those gaps is preferable to disguising them. The XL height check must stay instrument-specific despite shared SEM access.

## Phenom Pure Prototype

**Sources:** [`../instruments/phenom-pure.md`](../instruments/phenom-pure.md) and the complete [Phenom Pure Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-pure-sem).

Draft the supported room-temperature SEM session using the Pure-specific below-holder-edge loading rule, NavCam, LiveSEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Cold-stage work remains Level 2. Do not name hair as a required default sample.

Required review gaps include save/export, final holder/chamber state, and any unsupported quality threshold. Do not reuse the XL 5–7 mm rule or create shared SEM wording that erases the loading distinction.

**Composition result — 2026-08-10:**

* **Checks:** 18 Pure-specific + 6 compact safety + 7 compact closeout = **31 rendered checks**.
* **Words:** `wc -w` reports 1,133 prototype-source words (1,577 with the 216-word safety and 228-word closeout prototype includes). The unpublished render contains **996 runnable-checklist words**, **1,273 total content words**, and **45 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 31 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** observable Level 1 image-quality decision; save/export and naming convention; final holder/chamber state; approved and installed participant Quick Guide.
* **Structural lesson:** the imaging-control categories can resemble XL without sharing the physical run sheet. Pure requires one 18 mm-or-smaller stub below the holder edge, software unlock plus manual door motion, and holder return to a drawer or stand. Keeping those actions explicit prevents shared access and interface similarity from erasing the loading distinction.

## XRD Prototype

**Sources:** [`../instruments/xrd.md`](../instruments/xrd.md) and the complete [XRD Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#malvern-panalytical-aeris-research-xrd).

Draft the supported physical loading, changer-cover, position matching, stored-program queue, identifiers, log-book, data-handoff, unloading, and shutdown sequence. Treat the instrument touchscreen and companion workstation as distinct surfaces.

Do not choose the HighScore/Search Match teaching boundary. Represent the current mismatch as a review gap: independently taught Level 1, capability preview, or later analysis exercise. Also flag stored-program curation, companion-workstation sign-in, and exact export/copy behavior. Never record local credentials.

**Composition result — 2026-08-10:**

* **Checks:** 17 XRD-specific + 6 compact safety + 7 compact closeout = **30 rendered checks**.
* **Words:** `wc -w` reports 1,185 prototype-source words (1,629 with the 216-word safety and 228-word closeout prototype includes). The unpublished render contains **881 runnable-checklist words**, **1,310 total content words**, and **55 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 30 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** HighScore/Search Match teaching boundary; stored-program curation and timing; companion-workstation sign-in; exact export/copy and participant handoff; final removable sample-changer cover position; operational review, retrofit, and print proof for the participant Quick Guide.
* **Structural lesson:** XRD's normal path crosses an access-free instrument touchscreen, a separate companion workstation with unresolved sign-in, and a paper safety log. The shared closeout therefore must state that Moira is communications-only. The canonical shutdown does not state the removable changer cover's final position after holder removal, so this prototype adds that specific final-state gap instead of inferring it.
* **Source/handoff audit — 2026-08-11:** the central inventory and controlled Quick Guide work order both mark the XRD participant artifact as blocked, but the trainer prototype called the current printed guide approved in three runnable checks. Those claims were removed, an explicit participant-artifact review gap was added, and the prototype-only shared closeout was corrected so it no longer implies that every instrument already has an approved Quick Guide. No release gate was resolved.

## Instron Prototype

**Sources:** [`../instruments/instron.md`](../instruments/instron.md) and the complete [Instron Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#instron-68tm-50-universal-testing-system).

Draft only the supported 50 kN tensile-test spine: Bluehill startup, appropriate load cell/fixture/method, specimen information and limits, loading/zeroing, handset start, run, data handling, unloading/cleanup, and disabled-frame end state.

Keep saved method versus QuickTest, the exact end condition, result-quality decision, export convention, and any unresolved initial/final hardware state as review gaps. Both Bluehill and handset participation must remain visible; do not simplify the teaching sequence to protect a one-surface pattern.

**Composition result — 2026-08-10:**

* **Checks:** 22 Instron-specific + 6 compact safety + 7 compact closeout = **35 rendered checks**.
* **Words:** `wc -w` reports 1,439 prototype-source words (1,883 with the 216-word safety and 228-word closeout prototype includes). The unpublished render contains **1,109 runnable-checklist words**, **1,539 total content words**, and **53 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 35 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** saved method versus QuickTest and exact method name; end condition; approved soft-toe result decision; save/export convention; verified 50 kN fixture and complete initial/final hardware states; Bluehill/handset evidence, two-view layout, and approved installed Quick Guide.
* **Structural exception:** Instron reaches the 35-check ceiling and exceeds the provisional word ranges. Its supported spine crosses a physical load string, Bluehill, and the handset, and it must distinguish routine stop from emergency stop while ending in disabled mode. Grouping those into the SEM or XRD pattern would hide consequential surface changes and safety checks. Keep this longer review artifact and do not retrofit earlier prototypes during this pass.

## Second-Wave Queue

Do not elaborate second-wave work orders until the first-wave composition pass is reviewed. The current scope and blockers remain in the [workflow-scope handoff](README.md#workflow-scope-handoff--2026-08-07) and [Quick Guide work orders](../_staff/quick-guides/instrument-specifications.md). When an instrument becomes active, add one bounded section here before drafting it.
