---
published: false
---

# Provisional Staff-Guide Work Orders

This rolling ledger bounds the 2026-08-10 provisional staff-guide pass. Read [`provisional-draft-procedure.md`](provisional-draft-procedure.md) first. Add detail here only when an instrument enters active drafting; do not pre-design the second wave before the first-wave prototypes show what breaks.

## Status

| Order | Instrument | Prototype | Composition status | Principal review gap |
| --- | --- | --- | --- | --- |
| 1 | FTIR | `_staff-training/ftir-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable | Background acceptance, failed-connection appearance, background-redo cycle, and compact Quick Guide approval/installation remain open. |
| 2 | Phenom XL | `_staff-training/phenom-xl-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable | Approve EDS and image-quality boundaries; verify save/export, final state, and participant Quick Guide. |
| 3 | Phenom Pure | `_staff-training/phenom-pure-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable | Define image quality; verify save/export, final state, and participant Quick Guide. |
| 4 | XRD | `_staff-training/xrd-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable | Decide HighScore and stored programs; verify workstation access, export, and final changer-cover state. |
| 5 | Instron | `_staff-training/instron-trainer-prototype.md` | Prototype drafted; build passed; external HTML validation unavailable; structural exception | Decide method, end condition, result gate, export, hardware states, and two-view participant artifact. |

All five remain blocked for routine delivery until their guide pair, operational checks, and practice gates are complete. Composition order is a starting queue, not a command to wait on a blocked instrument.

**Recommended review sequence:** review FTIR first to decide whether the compact prototype-only safety and closeout reductions preserve usable coverage; compare Phenom XL and Phenom Pure together so shared SEM categories do not erase their different physical loading actions; review XRD next because its session crosses the instrument touchscreen, companion workstation, and paper log; then review Instron separately as the deliberate multi-surface structural exception. This is a document-review sequence, not a change to the co-equal first-wave rollout priority.

## FTIR Compact Prototype

**Sources:** [`ftir.md`](ftir.md), [`../instruments/ftir.md`](../instruments/ftir.md), [`../quick-guides/ftir-sop-map-prototype.md`](../quick-guides/ftir-sop-map-prototype.md), and the shared trainer references.

**Purpose:** preserve the useful operational coverage while testing whether a trainer can actually run the session from a short guide. Leave the current live FTIR guide unchanged for side-by-side review.

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

**Required review gaps:**

* no canonical acceptance criterion for a good background preview;
* no canonical appearance criterion for a failed System Status connection;
* incomplete canonical background-redo cycle;
* the compact Quick Guide remains unpublished and uninstalled;
* the prototype wording must not imply that Start Collection is required when preview is disabled;
* use “save each needed spectrum individually,” not the unsupported absolute “group-saving does not exist”;
* do not use “clean background” or “recognizable spectrum” as undefined pass criteria;
* comparison of the two spectra remains Level 1, but material identification and database searching do not.

**Do not edit during composition:** the current live FTIR guide, the canonical FTIR page, the published Quick Guide, or the production shared includes. Record canonical corrections separately.

**Composition result — 2026-08-10:**

* **Checks:** 17 FTIR-specific + 6 compact safety + 7 compact closeout = **30 rendered checks**.
* **Words:** `wc -w` reports 1,087 in the prototype source and 216 in each compact include (1,519 source words across the three files). The unpublished render contains **932 runnable-checklist words**, **1,206 total content words**, and **44 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` passed; `bundle exec jekyll build --unpublished` also rendered the prototype and all 30 controls. `script/validate-html` was run, but its external W3C service was unreachable in the sandbox and then returned HTTP 429 with network access; HTML validation remains unverified for environmental reasons.
* **Review gaps carried:** no good-background acceptance criterion; no failed-System-Status appearance criterion; no complete canonical background-redo cycle; compact Quick Guide not reviewed, proofed, approved, or installed.
* **Structural lesson:** the continuous run sheet can reach the 30-check target by grouping around omission risks. Six safety checks and seven administrative actions preserve the shared coverage without using production includes. The exact review-gap blocks add visible release burden but still keep the rendered page near the editorial word range; do not retrofit this reduction into live guides during this pass.

## Phenom XL Prototype

**Sources:** [`../instruments/phenom-xl.md`](../instruments/phenom-xl.md) and the complete [Phenom XL Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-xl-sem).

Draft the supported core SEM imaging session: XL-specific sample preparation and height/clearance, NavCam navigation, LiveSEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Keep the proposed brief EDS preview visibly labeled as a review gap; do not teach or imply independent EDS operation. Do not name hair as a required default sample.

Required review gaps include the EDS boundary, exact save/export convention, final tray/chamber state, and any observable image-quality decision not defined canonically. Do not reuse the Pure loading rule merely because the interfaces are similar.

**Composition result — 2026-08-10:**

* **Checks:** 18 XL-specific + 6 compact safety + 7 compact closeout = **31 rendered checks**.
* **Words:** `wc -w` reports 1,184 prototype-source words (1,616 with both 216-word prototype includes). The unpublished render contains **980 runnable-checklist words**, **1,299 total content words**, and **46 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 31 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** EDS teaching boundary; observable Level 1 image-quality decision; save/export and naming convention; final tray/chamber state; approved and installed participant Quick Guide.
* **Structural lesson:** NavCam, LiveSEM, and the grouped top-panel inspection fit one chronological trainer checklist even though they are distinct interface states. Five specific release gaps push total page prose above the FTIR editorial range while the runnable checklist remains within it; retaining those gaps is preferable to disguising them. The XL height check must stay instrument-specific despite shared SEM access.

## Phenom Pure Prototype

**Sources:** [`../instruments/phenom-pure.md`](../instruments/phenom-pure.md) and the complete [Phenom Pure Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-pure-sem).

Draft the supported room-temperature SEM session using the Pure-specific below-holder-edge loading rule, NavCam, LiveSEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Cold-stage work remains Level 2. Do not name hair as a required default sample.

Required review gaps include save/export, final holder/chamber state, and any unsupported quality threshold. Do not reuse the XL 5–7 mm rule or create shared SEM wording that erases the loading distinction.

**Composition result — 2026-08-10:**

* **Checks:** 18 Pure-specific + 6 compact safety + 7 compact closeout = **31 rendered checks**.
* **Words:** `wc -w` reports 1,133 prototype-source words (1,565 with both prototype includes). The unpublished render contains **984 runnable-checklist words**, **1,261 total content words**, and **45 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 31 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** observable Level 1 image-quality decision; save/export and naming convention; final holder/chamber state; approved and installed participant Quick Guide.
* **Structural lesson:** the imaging-control categories can resemble XL without sharing the physical run sheet. Pure requires one 18 mm-or-smaller stub below the holder edge, software unlock plus manual door motion, and holder return to a drawer or stand. Keeping those actions explicit prevents shared access and interface similarity from erasing the loading distinction.

## XRD Prototype

**Sources:** [`../instruments/xrd.md`](../instruments/xrd.md) and the complete [XRD Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#malvern-panalytical-aeris-research-xrd).

Draft the supported physical loading, changer-cover, position matching, stored-program queue, identifiers, log-book, data-handoff, unloading, and shutdown sequence. Treat the instrument touchscreen and companion workstation as distinct surfaces.

Do not choose the HighScore/Search Match teaching boundary. Represent the current mismatch as a review gap: independently taught Level 1, capability preview, or later analysis exercise. Also flag stored-program curation, companion-workstation sign-in, and exact export/copy behavior. Never record local credentials.

**Composition result — 2026-08-10:**

* **Checks:** 17 XRD-specific + 6 compact safety + 7 compact closeout = **30 rendered checks**.
* **Words:** `wc -w` reports 1,122 prototype-source words (1,554 with both prototype includes). The unpublished render contains **880 runnable-checklist words**, **1,245 total content words**, and **55 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 30 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** HighScore/Search Match teaching boundary; stored-program curation and timing; companion-workstation sign-in; exact export/copy and participant handoff; final removable sample-changer cover position.
* **Structural lesson:** XRD's normal path crosses an access-free instrument touchscreen, a separate companion workstation with unresolved sign-in, and a paper safety log. The shared closeout therefore must state that Moira is communications-only. The canonical shutdown does not state the removable changer cover's final position after holder removal, so this prototype adds that specific final-state gap instead of inferring it.

## Instron Prototype

**Sources:** [`../instruments/instron.md`](../instruments/instron.md) and the complete [Instron Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#instron-68tm-50-universal-testing-system).

Draft only the supported 50 kN tensile-test spine: Bluehill startup, appropriate load cell/fixture/method, specimen information and limits, loading/zeroing, handset start, run, data handling, unloading/cleanup, and disabled-frame end state.

Keep saved method versus QuickTest, the exact end condition, result-quality decision, export convention, and any unresolved initial/final hardware state as review gaps. Both Bluehill and handset participation must remain visible; do not simplify the teaching sequence to protect a one-surface pattern.

**Composition result — 2026-08-10:**

* **Checks:** 22 Instron-specific + 6 compact safety + 7 compact closeout = **35 rendered checks**.
* **Words:** `wc -w` reports 1,439 prototype-source words (1,871 with both prototype includes). The unpublished render contains **1,097 runnable-checklist words**, **1,527 total content words**, and **53 instrument-specific trainer-note words**.
* **Validation:** `bundle exec jekyll build` and `bundle exec jekyll build --unpublished` passed; the unpublished render contains all 35 controls. `script/validate-html` was run with network access and stopped at the external W3C service's HTTP 429 response; HTML validation remains environmentally unverified.
* **Review gaps carried:** saved method versus QuickTest and exact method name; end condition; approved soft-toe result decision; save/export convention; verified 50 kN fixture and complete initial/final hardware states; Bluehill/handset evidence, two-view layout, and approved installed Quick Guide.
* **Structural exception:** Instron reaches the 35-check ceiling and exceeds the provisional word ranges. Its supported spine crosses a physical load string, Bluehill, and the handset, and it must distinguish routine stop from emergency stop while ending in disabled mode. Grouping those into the SEM or XRD pattern would hide consequential surface changes and safety checks. Keep this longer review artifact and do not retrofit earlier prototypes during this pass.

## Second-Wave Queue

Do not elaborate second-wave work orders until the first-wave composition pass is reviewed. The current scope and blockers remain in the [workflow-scope handoff](README.md#workflow-scope-handoff--2026-08-07) and [Quick Guide work orders](../_staff/quick-guides/instrument-specifications.md). When an instrument becomes active, add one bounded section here before drafting it.
