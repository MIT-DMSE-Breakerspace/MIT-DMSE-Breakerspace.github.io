---
published: false
---

# Provisional Staff-Guide Work Orders

This rolling ledger bounds the 2026-08-10 provisional staff-guide pass. Read [`provisional-draft-procedure.md`](provisional-draft-procedure.md) first. Add detail here only when an instrument enters active drafting; do not pre-design the second wave before the first-wave prototypes show what breaks.

## Status

| Order | Instrument | Prototype | Composition status | Principal review gap |
| --- | --- | --- | --- | --- |
| 1 | FTIR | `_staff-training/ftir-trainer-prototype.md` | Authorized; not started | Compact the completeness-first guide without inventing background or connection criteria. |
| 2 | Phenom XL | `_staff-training/phenom-xl-trainer-prototype.md` | Authorized; not started | Approve the EDS boundary; verify save/export and final state. |
| 3 | Phenom Pure | `_staff-training/phenom-pure-trainer-prototype.md` | Authorized; not started | Verify save/export and final state; keep Pure loading distinct from XL. |
| 4 | XRD | `_staff-training/xrd-trainer-prototype.md` | Authorized; not started | Decide the HighScore boundary, stored programs, and companion-workstation handoff. |
| 5 | Instron | `_staff-training/instron-trainer-prototype.md` | Authorized; not started | Decide method, end condition, result gate, and export convention. |

All five remain blocked for routine delivery until their guide pair, operational checks, and practice gates are complete. Composition order is a starting queue, not a command to wait on a blocked instrument.

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

## Phenom XL Prototype

**Sources:** [`../instruments/phenom-xl.md`](../instruments/phenom-xl.md) and the complete [Phenom XL Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-xl-sem).

Draft the supported core SEM imaging session: XL-specific sample preparation and height/clearance, NavCam navigation, LiveSEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Keep the proposed brief EDS preview visibly labeled as a review gap; do not teach or imply independent EDS operation. Do not name hair as a required default sample.

Required review gaps include the EDS boundary, exact save/export convention, final tray/chamber state, and any observable image-quality decision not defined canonically. Do not reuse the Pure loading rule merely because the interfaces are similar.

## Phenom Pure Prototype

**Sources:** [`../instruments/phenom-pure.md`](../instruments/phenom-pure.md) and the complete [Phenom Pure Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#thermo-fisher-phenom-pure-sem).

Draft the supported room-temperature SEM session using the Pure-specific below-holder-edge loading rule, NavCam, LiveSEM focus and brightness/contrast, magnification, acquisition/saving, cleanup, and standby. Cold-stage work remains Level 2. Do not name hair as a required default sample.

Required review gaps include save/export, final holder/chamber state, and any unsupported quality threshold. Do not reuse the XL 5–7 mm rule or create shared SEM wording that erases the loading distinction.

## XRD Prototype

**Sources:** [`../instruments/xrd.md`](../instruments/xrd.md) and the complete [XRD Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#malvern-panalytical-aeris-research-xrd).

Draft the supported physical loading, changer-cover, position matching, stored-program queue, identifiers, log-book, data-handoff, unloading, and shutdown sequence. Treat the instrument touchscreen and companion workstation as distinct surfaces.

Do not choose the HighScore/Search Match teaching boundary. Represent the current mismatch as a review gap: independently taught Level 1, capability preview, or later analysis exercise. Also flag stored-program curation, companion-workstation sign-in, and exact export/copy behavior. Never record local credentials.

## Instron Prototype

**Sources:** [`../instruments/instron.md`](../instruments/instron.md) and the complete [Instron Quick Guide work order](../_staff/quick-guides/instrument-specifications.md#instron-68tm-50-universal-testing-system).

Draft only the supported 50 kN tensile-test spine: Bluehill startup, appropriate load cell/fixture/method, specimen information and limits, loading/zeroing, handset start, run, data handling, unloading/cleanup, and disabled-frame end state.

Keep saved method versus QuickTest, the exact end condition, result-quality decision, export convention, and any unresolved initial/final hardware state as review gaps. Both Bluehill and handset participation must remain visible; do not simplify the teaching sequence to protect a one-surface pattern.

## Second-Wave Queue

Do not elaborate second-wave work orders until the first-wave composition pass is reviewed. The current scope and blockers remain in the [workflow-scope handoff](README.md#workflow-scope-handoff--2026-08-07) and [Quick Guide work orders](../_staff/quick-guides/instrument-specifications.md). When an instrument becomes active, add one bounded section here before drafting it.
