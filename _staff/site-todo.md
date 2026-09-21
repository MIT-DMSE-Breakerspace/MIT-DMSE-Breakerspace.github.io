# Breakerspace Website To-Do

Last updated: 2026-09-21 for the 24/7/365 access decision; other work retains its dated review records below.

This is the canonical unlisted list for cross-site launch work, policy decisions, and ongoing maintenance. It is organized by operational deadline rather than by page.

The redesigned site is already a substantial operational improvement. Production launch should therefore be treated as a controlled cutover, not as a requirement to finish every content idea. A task belongs in the highest tier whose criterion it meets:

| Tier | Criterion |
| --- | --- |
| **1. Must do before launch** | A wrong or incomplete item could create a safety problem, break onboarding or access, misdirect users during the cutover, expose a known unfinished public page, or prevent completion of a core task. |
| **2. Urgent before the fall term** | The site can launch without it, but higher fall traffic, training volume, and course use will make the gap costly or difficult to manage. |
| **3. Ongoing fall improvement** | The work adds depth, examples, media, accessibility improvements, or maintainability without being required for safe daily operation. It is suitable for undergraduate lab employees to prepare with staff review. |

Public instrument pages should state current operating information clearly. Instrument-specific planning belongs in [the staff instrument to-do list](../instruments/staff-todo.md), while cross-site planning belongs here.

## 24/7/365 Access — September 21

The owner confirmed that lounge and instrument-lab access is available 24 hours a day, 365 days a year. This supersedes the former 8 AM–midnight schedule. Approved access, instrument training, reservations, and working-alone requirements still apply; staff support follows the calendar.

* [x] Update the shared access statements, Calendar, Lounge, Safety, and maintenance guidance. Preserve the existing `hours-and-access` fragments and include midnight–8 AM in the calendar embed's visible range.
* [x] Inspect the owner's LibCal update publicly: published hours show 24 Hours through December 2026, and all eleven instruments offer overnight slots on the inspected September 22–24 dates. See the [LibCal verification record](../_admin/libcal-247365-hours-checklist.md) for coverage and limits.
* [ ] Owner: correct the September 23 assistant shift's whole-lab location and the inspected Optical/SEM training reservations, then recheck instrument availability. See [outstanding booking coordination](../_admin/libcal-247365-hours-checklist.md#outstanding-booking-coordination).
* [ ] Owner: verify weekend/holiday booking availability as those dates enter the three-day window and confirm published-hours coverage into 2027. The public inspection could not expose those booking dates or 2027 hours.

## September 2026 Site Usability

Start with the [September revision handoff](site-revision-handoff-2026-09-17.md), updated through September 21; the [original site review](site-review-2026-09-17.md) is the dated baseline, not the current completion list. Keep the existing task-based structure and favor incremental changes. The owner has no resources for organized usability trials; use proportionate checks and ordinary user feedback.

* [x] Make the one-time online training record prominent and distinct from booking an in-person session ([PR #32](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/32)).
* [x] Replace expanded phone/tablet navigation with a compact, accessible Menu while retaining the destinations and desktop sidebar ([PR #33](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/33)). Broader content/media accessibility work remains open below.
* [x] Shorten Get Trained to actionable preparation and access expectations, and remove repeated support explanations ([PR #34](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/34)). The owner considers the resulting length appropriate.
* [x] Remove the early-fall notice from Training and Calendar after sessions were posted ([PR #35](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/35)); see the Fall Operations record below.
* [x] Complete the Calendar page's focused editorial pass (September 18, [PR #44](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/44)): lead with registration and individual instrument booking, place `#calendar` above the embed, and consolidate lab/support/lounge availability guidance. Preserve access information, reservation effects, existing destinations, and the shared include; see the handoff for checks and limits.
* [ ] Improve the shared LibCal calendar's phone presentation when the embed is in scope. The September 18 Calendar review at 390×844 found clipped event titles in the seven-column week view and the full-calendar fallback below the 600px embed; desktop at 1440×1000 was readable. Review a usable phone view and fallback placement across both Calendar and Training.
* [x] Publish the FTIR reading-order pilot with operating steps, media, and prior anchors preserved ([PR #36](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/36)). **Further individual instrument-page renovations are paused pending owner feedback.** Do not replace the shared template or expand the pilot until that work is resumed.
* [x] Clarify the instrument finder with useful outcomes, familiar names, plain-language groups, and an explicit SEM elemental-analysis entry ([PR #37](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/37)).
* [x] Complete Reserve Time's focused editorial pass (September 18, [PR #45](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/45)): put individual preparation and booking first, replace the rules/help tables with short lists, and move the shortened lab/lounge request procedure below the individual workflow with an opening jump link. Preserve existing fragments, destinations, and operational requirements; keep `reservations.html#whole-lab-reservations` as the request destination when Teaching is reviewed. See the handoff for checks and limits.
* [x] Apply the owner's Reserve Time follow-up (September 18, [PR #46](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/46)): assume trained users know general lab policy; remove Before You Book, Booking Problems, the training reminder, and the opening group-request jump link. Keep booking links, LibCal steps, reservation rules, and lab/lounge requests; move the one-hour starting norm into the rules. See the handoff's Booking Scope record for checks and release status.
* [x] Complete Get Help's focused editorial pass (September 18): put contact options first, simplify access/files guidance to user actions, remove internal administration, and use wrapping folder sequences. The owner removed Quick Links because the shortened page is easy to scan, then approved the final preview for publication. Existing anchors, operational safeguards, and shared-folder privacy guidance are preserved. See the handoff's Help & Support record for checks, limits, and release status.
* [ ] Consolidate Teach With Us Quick Actions and planning details, especially repeated whole-lab requests; preserve the opening partnership summary and instructor route.
* [x] Revisit the homepage opening, location/hours prominence, and task emphasis after the compact navigation change (September 18, [PR #39](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/39)). Replace the repeated title/intro and verbose task rows with six compact links matching navigation labels; retain a short mobile introduction, bring the sample feature and images forward, and place the recruitment invitation after it. Move arrival details and hours into the shared footer, with a compact mobile homepage summary. `_data/lab.yml` is the shared source for these details and for Calendar/Lounge hours; the 8 AM–midnight schedule recorded at that release was superseded by the September 21 decision above. Preserve the existing homepage anchors and keep training/safety policy on its task pages.
* [x] Refine the compact homepage after desktop feedback (September 18, [PR #40](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/40)): add a modest introductory heading and sentence, show three equal sample previews (diamond grains, a diatom, and acrylic fibers), widen the desktop homepage image area, and place its footer beneath the sidebar navigation. Keep all six actions ahead of the previews; use compact image-and-text rows on phones. Maintain the curated selection in `_data/homepage-feature.yml` and use responsive derivatives of already published sample images.
* [x] Extend the approved homepage frame to the shared public layout (September 18, [PR #41](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/41)): use the same centered 1320px maximum width and sidebar alignment, and place the footer directly after desktop navigation. The initial 72ch prose cap was superseded by PR #42 below. Keep the complete sidebar sticky only when its measured height fits; short windows and enlarged text scroll normally. Preserve the compact mobile Menu and footer after main content, including keyboard order and print. The standalone trainer and Quick Guide shells remain separate; page copy, instrument SOPs, and fragment IDs are unchanged.
* [x] Correct the mixed content widths after desktop feedback (September 18, [PR #42](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/42), published as `985dded`): remove the automatic 72ch caps on individual paragraphs/lists and related prose blocks. Help's Quick Links table and the Calendar looked disconnected from their narrower surrounding text. Keep the shared outer frame and responsive sidebar/footer; use one consistent content column and assess any future reading-width limits at the page or coherent-section level.
* [ ] Complete the broader live-page layout review and apply the owner's feedback after the September 18 releases. The owner will review on the live site. The handoff records the limited four-page desktop/phone spot-check and its exclusions; do not treat it as an all-page audit. Use subagents for further graphical reviews and return concise findings without page renderings in the main task.
* [ ] Recheck earlier presentation candidates when the relevant pages are in scope: intermediate-width reflow, body-text readability, focus-state layout shift, and fragile floated figures. The homepage sample-preview block is already published. Verify what remains after existing fixes rather than treating the old July list as a fresh redesign mandate.
* [ ] Decide how links indicate provisional Quick Guide status before users click. Readiness remains governed by the existing guide inventories and release gates; the page-renovation pause does not approve or cancel separate guide work.
* [ ] Remove author-facing work-in-progress explanation from the public pumpkin showcase and the Instron annotated-curve promise when those pages are next in scope. Preserve scientific limitations and keep unfinished work in staff checklists. Instron presentation edits remain subject to the renovation pause.
* [ ] Confirm and state actual charges/consumable arrangements, lab-access processing expectations and escalation timing, and accessible arrival/accommodation guidance. These were gaps in the review, not facts the editor may infer.
* [ ] Clarify the policy for supervised course participants handling or controlling instruments before independent-use training, reconciling Teaching and Safety with the operational owner.
* [ ] Add a small number of complete teaching examples (objective, duration, group size, preparation, staffing, and output) and reviewed sample/results examples. Use existing sample-library and media queues instead of creating a parallel collection.

## Current Post-Launch Priority Order

The external-review security and privacy bundle was closed on July 27, 2026:

* [x] Remove public local-workstation usernames and passwords. Public pages may identify MIT Kerberos as the workstation credential type; retain the optical microscope's low-risk DSX Guest login because it reduces avoidable staff contacts for already trained, physically present users.
* [x] Stop requesting MIT ID numbers or Kerberos usernames by ordinary email. Ask users to contact the team from their MIT email address and use that address for account identification.
* [x] Link data tools to the separately maintained MIT Carbonio deployment and exclude the retired embedded ScienceScripts copies from the production build. The Breakerspace production site now links out and no longer publishes or runs the tool code or its CDN loaders.

External follow-up: the live Carbonio applications still load Plotly and h5wasm from cdnjs, unpkg, or jsDelivr as of July 27, 2026. Self-hosting those dependencies remains a task for the separately maintained Carbonio/ScienceScripts applications rather than the Breakerspace site queue.

The first performance pass was completed July 27, 2026: the FTIR and optical GIFs were replaced with on-demand MP4/WebM video, responsive AVIF/WebP/JPEG image sets, intrinsic dimensions, and separate lightweight Quick Guide URLs.

The July priority list is superseded by the September usability queue above and the more recent operational records below. Automated build, links/HTML, accessibility, content/asset, SOP/Quick Guide contract, and secret-scanning checks already run in CI; maintain them rather than starting that work again. Core external-workflow accessibility decisions are recorded under Training, Access, And External Systems; broader media and first-party accessibility work remains open.

Keep safety corrections and training readiness ahead of optional editorial work. For this usability stream, start with feedback from the owner's live-page review; Reserve Time's editorial pass is complete, and the next non-instrument copy candidates are Help and Teaching. The homepage changes are published and the FTIR template rollout is paused. The detailed tiered and instrument-specific checklists retain their operational authority; the September work did not re-review or close unrelated guide, physical-accessibility, or media tasks.

## 1. Must Do Before Launch

Every item in this section is a launch gate. Do not waive a safety, onboarding, or core-access item merely to meet a preferred date. If an unfinished feature is not required for operation, unpublish it or label and isolate it rather than delaying the whole site.

### Physical Safety And Policy Sign-Off

* [x] Complete one on-site safety and arrival walk. Confirm the public arrival route, room signage, the complete egress path, the nearest campus phone, fire alarm pull, fire extinguisher, emergency and first-aid cabinet, shower and eyewash, spill kit, sharps container, and ordinary waste locations.
* [x] Confirm that the website and posted emergency signs use the correct emergency numbers: dial **100** from a campus phone or **617-253-1212** from a mobile or other phone.
* [x] Confirm that the public emergency-equipment and egress wording matches the physical space. Correct any inaccurate location or route before launch; the full annotated visual can follow in Tier 2.
* [x] Review Safety And Lab Use, the incident-reporting workflow, and the relevant instrument safety language with the DMSE EHS contact.
* [x] Assign the Breakerspace staff role responsible for helping with or following up on Non-Employee Incident Reports.
* [x] Resolve the open Instron policy questions: whether any operation should not be performed alone and whether heavy tooling requires protective footwear, handling aids, or a stricter transfer procedure. Update the Safety and Instron pages together.
* [x] Compare posted lab signs with the website for PPE, food and drink, samples, guests, emergencies, incident reporting, and working alone. Resolve contradictory instructions before launch.

### Training, Access, And External Systems

* [x] Close out the coordinated Qualtrics checks in [qualtrics-launch-review.md](../_admin/qualtrics-launch-review.md). On 2026-08-05 the operational owner verified notifications, retention, response handling, validation, tap-access data, and complete live test submissions. Qualtrics ExpertReview reported no accessibility errors or warnings; its synthetic-panel compatibility tip is unrelated to human respondents or accessibility. The implementation guide remains in [qualtrics-manual-edit-guide.md](../_admin/qualtrics-manual-edit-guide.md), and the original QSF extraction and rationale remain in [qualtrics-survey-audit.md](../_admin/qualtrics-survey-audit.md).
* [x] Confirm that LibCal training and reservation descriptions, public calendars, participant limits, cancellation links, and instrument names match the redesigned site.
* [x] Confirm the complete access handoff: trainers add the correct Moira groups and send Slack invitations during training closeout, the lab manager receives the required Qualtrics information and processes tap access, and users can create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership.
* [x] Run one end-to-end new-user test of the public path: choose an instrument, complete the survey test path, locate or request training, understand the access handoff, find the reservation calendar, locate the operating page, and find help.
* [x] Complete proportionate accessibility verification of the core Qualtrics and LibCal workflows. In Firefox, keyboard-only testing covered readable Qualtrics validation errors, complete survey submission, navigation from the Breakerspace site to the embedded calendar, and LibCal event registration. Safari keyboard navigation was confirmed with `Option-Tab`; its initial `Tab` behavior was the browser's full-keyboard-navigation preference rather than a service failure. Formal VoiceOver conformance testing was not performed: Breakerspace relies on MIT-supported services and vendor conformance documentation for platform code, remains responsible for its authored content and configuration, provides an email support alternative, and will correct local barriers or escalate reported platform defects.
* [x] Confirm current lounge access information, undergraduate eligibility, access-form URL, typical processing time, food-and-drink boundary, and the equipment actually available.

### Public Content And Release Hygiene

* [x] Review every high-consequence or operationally specific instrument claim with the appropriate staff owner. Resolve, remove, or clearly qualify unverified safety limits, interlock descriptions, sample restrictions, login requirements, and shutdown instructions. This includes the XRD enclosure/interlock description and the Instron questions above.
* [x] Review visible instrument-page to-do sections. Move internal maintenance and policy questions here; retain public items only when they are appropriate, clearly labeled contribution opportunities for trained users or student employees.
* [x] Replace the former sample-library placeholder with the generated public index and reviewed sample pages. The library can remain visible in preview and is not a production-launch dependency.
* [x] Exclude the 2024 and 2026 microscope-contest pages and gallery assets from the launch build until meaningful image descriptions are written and reviewed.
* [x] Confirm that the former lab catalog, every legacy tutorial URL, workstation shortcut, posted QR code, LibCal description, and known course link resolves to the intended canonical page.
* [x] Test the final production configuration for navigation, internal links and fragments, external links, responsive layout, images, and the core Start Here, training, reservation, safety, help, teaching, and instrument paths.
* [x] Confirm current contact information, access availability, room and arrival language, access instructions, reservation links, training links, and emergency numbers.
* [x] Complete the focused public-path keyboard accessibility smoke test. Keyboard-only navigation in Firefox successfully reached the Breakerspace site, embedded calendar, and completed LibCal registration; Safari `Option-Tab` navigation was also confirmed. Existing automated and production-path checks cover the core public pages. Formal VoiceOver testing was waived under the documented proportionate third-party reliance and barrier-response decision; broader media- and instrument-page accessibility improvement remains in Tier 2.
* [x] Have the operational owner review each high-consequence public page before release.

### Controlled Cutover

* [x] Name a launch owner, choose a release window, and briefly freeze policy and navigation edits while the launch checks are completed.
* [x] Preserve a deployable snapshot or tag of the current production site and write down the rollback procedure before changing the production domain.
* [x] Release the redesigned site and updated Qualtrics survey in the same window. Preserve old URLs through redirects rather than leaving two conflicting sets of instructions.
* [x] Assign someone to monitor email, #breakerspace-help, access failures, broken links, and instrument-page reports for the first week after launch. Correct operational errors immediately and record lower-priority improvements in Tier 2 or Tier 3.

## 2. Urgent Before The Fall Academic Term

These items should be complete before the first major fall training push or course use. They are not reasons to keep the current site in production if Tier 1 is complete.

### Training Capacity And Consistency

**Active late-August priority:** complete dependable Quick Guide/staff-guide pairs for student-led training. The first wave is SEM/EDS, XRD, FTIR, and Instron as co-equal immediate priorities. After those four, proceed through optical microscopy, Raman, hardness tester, particle size analyzer, UV-Vis, and ion mill in that order. Raman follows optical because planned use in fall lab subjects raises it above its historically lower general-interest priority. Move around blocked operational questions rather than stalling a wave, and prioritize safety, accurate workflows, practice, and trainer handoff over cosmetic polish or additional media.

* [x] Inventory the existing first- and second-wave guide pairs and assign a visible readiness state in [_staff-training/README.md](../_staff-training/README.md#late-august-guide-pair-inventory).
* [ ] Review the authorized 2026-08-10 provisional Quick Guide composition set as one evidence-and-layout inventory. For each instrument, confirm the canonical SOP copy, required control views, proposed immediate decision, descriptive image frames, review gaps, rendered page count, and remaining release gates. Use the inventory to prioritize captures and layout variants; do not publish, print for use, or install a provisional draft. **This review was performed on 2026-08-10 and is recorded in [`quick-guides/audit-2026-08-10.md`](quick-guides/audit-2026-08-10.md): 3 blocker, 7 major, and 8 minor findings across all eleven prototypes, with per-finding sources, required corrections, and validation evidence. Work from that document; instrument-specific corrections are tracked in [the instrument to-do list](../instruments/staff-todo.md#cross-instrument-quick-guide-rollout).**
* [ ] Review and close the audit's cross-cutting header-layout finding. An unreviewed 2026-08-11 trial gives the prototypes one-line instrument-name titles, moves workflow qualifiers and any displaced manufacturer text into the smaller subtitle, and reduces advisory top spacing to 0.04 in. Automated print-media measurement reports `0 px` trained-user-note/SOP-title overlap on all eleven prototypes without shrinking type or dropping identity content. This commit is a backup, not approval: open the complete rendered set for visual review at the start of the next session before checking off the finding.
* [x] **Standardize the Quick Guide source location before promoting any prototype.** On 2026-08-11 all published and provisional guides were standardized on thin `quick-guides/<name>.md` wrappers with matching `_includes/quick-guides/<name>.html` content sources. The reusable template and production procedure now use the same paired contract, and `script/check-quick-guide-sources` runs in CI to prevent mixed or orphaned source locations from returning.
* [x] Run and review the authorized 2026-08-10 provisional staff-guide composition pass using the [controlled procedure and rolling work orders](../_staff-training/provisional-draft-procedure.md). The pass initially produced unpublished FTIR, Phenom XL, Phenom Pure, XRD, and Instron trainer-run-sheet prototypes plus prototype-only compact safety and closeout includes. FTIR was later released as current; on 2026-09-11 the other four were published for staff review. On 2026-09-14 the separate Phenom drafts were replaced by one combined SEM draft, leaving three published **Draft advisory** guides. The [completed rolling ledger](../_staff-training/provisional-draft-work-orders.md) records validation, review gaps, and structural decisions. Draft publication does not resolve any gap or approve a guide for training delivery.
* [x] Review and release the compact FTIR trainer guide. Its operational gaps were resolved with the lab manager on 2026-08-11, and the guide was released to Lab Assistant Resources on 2026-08-31. The available printed FTIR Quick Guide supports the session; its compact redesign remains a separate project.
* [x] Implement the unlisted Lab Assistant Resources landing page at `/lab-assistant/` for selected staff-training guides, with `/trainer/` retained as a compatibility redirect and guide URLs remaining under `/trainer/`. It uses a standalone shell without the public site header, navigation, or footer and provides tablet-friendly session checklists whose state remains only in the current browser tab. The resources are `noindex`, not private: keep credentials, attendee information, and qualification records out of them; keep the official trainer roster in the approved private staff system; and keep planning files, templates, and `_admin/` excluded from publication. The publishing contract and current guide inventory are in [_staff-training/README.md](../_staff-training/README.md#lab-assistant-resources-deployment).
* [ ] Complete usable Quick Guide/staff-guide pairs for the four first-wave systems, reconciling each pair with the canonical operating page, LibCal description, and access closeout.
    * **SEM rewrite — 2026-09-14:** One availability-flexible guide now replaces the separate Phenom XL and Pure drafts. It shares the common imaging workflow and uses explicit loading, unloading, and capability branches so training can proceed on either working instrument. It allows a screened participant sample or lab-provided sample with a known-good lab fallback and retains the canonical unload actions. Review the rewrite from the beginning and run a practice session before promotion.
* [ ] Walk through each first-wave critical workflow at the instrument, run a practice training when feasible, and state any unvalidated or excluded workflow explicitly.
* [ ] Assemble the late-August student-trainer handoff as the guides mature: readiness by instrument, material and document locations, out-of-scope work, and escalation paths for sessions conducted without in-person lab-manager support.
* [ ] After the first wave is usable, complete the second-wave guide pairs in the recorded order as time permits.

Keep current guide status, layout measurements, and training-model decisions in [_staff-training/README.md](../_staff-training/README.md). This cross-site list should link to that inventory rather than copy volatile word counts, page states, or superseded guide structures.

* [ ] Create a minimum staff training guide from [instrument-training-template.md](../_staff-training/instrument-training-template.md) for every instrument that will be offered for training early in the fall. Instruments not yet documented should receive a guide before their next training is advertised.
* [ ] As an enhancement after guide readiness, develop approved sample or prepared-kit options, expected results, cabinet locations, and replenishment plans where repeatability would help. Guides may use screened participant samples or lab-provided samples and are not blocked on that work.
* [ ] Connect each fall Level 1 exercise, canonical public operating page, Quick Guide, staff training guide, LibCal description, and Moira group into one coherent teaching strategy while preserving their distinct roles: the public SOP is the minimal trained-user state-transition spine, Quick Guide Side 1 reproduces that SOP, Quick Guide Side 2 maps the approved Level 1 controls, and the staff guide carries the teaching/checklist layer. Quick Guides and staff guides may be written in parallel; routine delivery requires both to be reviewed against the SOP and Level 1 decision.
* [x] Structurally retrofit and operationally review the optical trainer checklist. Completed 2026-09-11: the guide codifies an established training sequence used more than once—Best Image, quick 2D map stitch, map navigation, the 3x-to-10x objective switch, normal 2D capture, high-quality 2D area stitch with **Use as map image** deselected, and 3D capture—with high-quality 3D stitching and LEXT analysis introduced as optional extensions. Ordinary Windows save controls require no special control-map treatment; the guide names the recommended destination and requires retrievability. Head retraction is the known final clearance action and requires no additional final-state gate.
* [ ] **Review and print-proof the compact FTIR SOP/visual-map prototype on Letter duplex.** The unpublished 2026-08-07 candidate puts the complete SOP on Side 1 and the annotated OMNIC map/quality decision on Side 2. Test 100% print-scale legibility, grayscale reproduction, QR scanning, and long-edge flip; collect lab-assistant feedback before replacing the published guide.
* [ ] Audit, print-test, laminate, and install the XRD Quick Guide during the first wave and the optical Quick Guide during the second wave under the [content contract](../instruments/readme.md#quick-guide-content-contract). Use the [locked SOP/visual-map procedure and instrument work orders](quick-guides/README.md); do not retrofit either published guide until its blockers are resolved and the task is explicitly authorized.
* [ ] After late-August guide readiness is secure, demote the current Quick Guide link on instrument pages from the at-instrument decision path to a clearly labeled Quick Actions link for at-instrument use, printing, accessibility, and fallback. Keep the canonical page and SOP as the primary web starting point.
* [x] Standardize the Moira list names so every group is `dmse-brkrspc-` plus the instrument's page slug. All five renames are complete: `-hrdnss` → `-hardness-tester` and `-ionmill` → `-ion-mill` on 2026-07-31, then `-utm` → `-instron`, `-dsx` → `-optical`, and `-duetta` → `-uv-vis` on 2026-08-03. The three access-controlling renames were verified on their workstations. WebMoira renames cleanly, accepts a 28-character name, and the Windows `Allow log on locally` policy follows a rename automatically without being retyped. The current table and rename procedure are in the [manager reference](../_admin/training-access-and-logistics.md#moira-groups-by-instrument).
* [ ] Run at least one practice training with a qualified Breakerspace Lab Assistant or other designated trainer from each new guide and revise steps that produce inconsistent outcomes. Trainer qualification is per instrument and is defined in [trainer-readiness.md](../_staff-training/trainer-readiness.md); a guide's first practice run validates the document, while later runs qualify the trainer.
* [ ] Maintain the trainer roster in the private staff channel's Slack canvas, recording the stage reached, practice date, and observer per staff member and per instrument. It stays out of the repository because it holds individual names. Trim workflow text from the canvas that [trainer-readiness.md](../_staff-training/trainer-readiness.md) now covers, and link there instead so the process is documented once.
* [x] Choose one public-facing term for student staff and use it consistently. Use `Breakerspace Lab Assistant` for the hourly student role and keep `trainer` for the training function; the LibCal category and template now use `Lab Assistant on duty`.
* [x] Record the early-fall training schedule model. Recurring public sessions are not expected during the first week: Breakerspace Lab Assistants post them after returning to campus, settling their academic schedules, and confirming their lab hours. Courses, subjects, and labs that require training coordinate it directly with Breakerspace staff, while individual requests during the early weeks are handled through ad-hoc sessions. Do not treat an initially empty public calendar as a readiness or capacity failure.
* [x] **Complete the live LibCal event-template revision.** The ten instrument-training templates use minimal semantic HTML, canonical instrument-page links, and the public training pathway; registration templates do not link to trained-user Quick Guides. `Lab Assistant on duty` and the three scope-specific reserved-activity templates were verified through unpublished test events. LibCal's tendency to restore a 15-seat registration form on informational events was accepted as harmless and potentially useful. The [LibCal API cannot edit events or templates](../_admin/libcal-event-templates.md#why-manual-editing-is-the-only-option), so every field left in LibCal is a permanent manual-maintenance cost. The pre-revision state and final verification are recorded in [libcal-event-templates.md](../_admin/libcal-event-templates.md).
* [x] Decide the 5-minute early start/end convention and the "must attend the entire session" requirement. A one-hour calendar block provides 50 participant-facing minutes internally; do not publish MIT's informal time convention. Breakerspace Lab Assistants schedule setup before the attendee window and finish Moira, Slack, documentation, and equipment closeout afterward. Guide phase timings remain hypotheses until practice runs measure them. The approved attendance wording is maintained in the LibCal update guide.
* [x] Create LibCal templates for the hardness tester and ion mill. Both now use the standard instrument-training settings and approved minimal HTML copy.

### Instrument Verification And High-Traffic Depth

* [ ] Finish the remaining XRD operational verification: export path, actual export formats, supported off-workstation analysis tools, stocked sample holders and special capabilities, and representative stored-program scan durations. Keep workstation authentication details in training or at the instrument.
* [ ] Confirm the particle-size analyzer's approved training powders, workstation access handoff, default database/export conventions, and any pre-term consumable needs. Keep authentication details out of public documentation.
* [ ] Confirm the Raman training samples and starting settings, exact Level 1 controls, silicon AutoCalibration pass criterion, save/export path, and a readable multi-state map treatment for TopCam, internal camera/laser focus, RTD, and AutoCalibration. Obtain the current XploRA and LabSpec 6 manuals or an equivalent staff reference.
* [x] Complete the Instron operating deep-dive: Bluehill method setup, load-cell and fixture changes, travel limits, each offered test type, video extensometer, saving and export. Written 2026-07-29 with page-level citations to Instron's official 6800 operator guide. Follow-ups remain in [instruments/staff-todo.md](../instruments/staff-todo.md), including a verified replacement photo of the 5 kN load cell with the actual 5 kN grips, the reviewed example force-displacement curve, and staff confirmation of the workstation's actual method names, export conventions, and recommended end-of-test condition.
* [ ] Confirm the hardness tester's available scales, load and sample-size limits, safe scale/material pairings, and approved conversion reference. The 2026-08-12 Impressions capture set records the offered on-screen tests and turret state, and the Level 1 method is settled as the programmed `Vickers 300 gf` test (`HV 0.3`) with load, dwell, and other settings left unchanged; reconcile those captures against the fitted hardware, then finish the remaining limits/pairings/reference review.
* [ ] Prioritize screenshots, photographs, and examples that prevent a likely fall operating error. Leave purely illustrative or cosmetic media work in Tier 3.

### Safety Communication And Accessibility

* [ ] Photograph the verified exit route, campus phone, alarm pull, fire extinguisher, emergency and first-aid cabinet, shower and eyewash, spill kit, sharps container, and waste bins.
* [ ] Create one compact annotated emergency-equipment and egress visual from real photographs or an accurate plan, then obtain staff or EHS approval before publication. `safety.md` now states every location in text, including the corridor alarm pulls, the campus phone on the desk by the lab doors, and the extinguisher by the sink; the visual should match that text and make the single exit route legible at a glance.
* [ ] Complete the broader keyboard and screen-reader improvement pass on image-heavy and table-heavy instrument pages and animations. The core public task path and authenticated Qualtrics/LibCal workflows were closed out under the proportionate verification record in Tier 1; this remaining work concerns deeper first-party content and media rather than re-auditing vendor platforms.
* [ ] Test the Dropbox enrollment, team-membership request, approval, and shared-file workflow for keyboard and screen-reader access, or document an accessible alternative.
* [ ] Confirm accurate captions for instructional videos needed in fall training and provide transcripts where captions cannot be corrected promptly.
* [ ] Identify essential PDF manuals and ensure that critical operating information is also available in accessible HTML even when a tagged manufacturer PDF is unavailable.
* [ ] Ask MIT Digital Accessibility for a launch-candidate or early-production consultation, with emphasis on instructional media and third-party workflows.

### Fall Operations

* [x] Add a temporary early-fall guidance banner above the embedded calendars on `training.md` and `calendar.md`, then remove it once sessions are posted. Added 2026-08-31; removed 2026-09-17 after the lab manager confirmed the calendar is populated, with more sessions on the way. Owner: lab manager. Use the same pattern later only for genuine temporary schedule interruptions.
* [ ] If the lounge configuration will change before or during the fall term, make the decision and coordinate the homepage, Lounge, Safety, Teaching, 3.000, Help, and access language before students return. If no change is imminent, retain the accurate current-state page and schedule a later review.
* [ ] Confirm which coffee and roasting equipment will remain available for the fall and update operating or cleanup guidance if needed.

### Sample Library Pilot

* [ ] Publish at least **25 reviewed sample records before the fall academic term**, prioritizing useful coverage of Level 1 exercises, common material classes, and multiple instruments. Treat **50 records as a stretch target**, not a reason to publish weak or incomplete entries.
* [ ] Review the initial collection as a whole for useful photographs, captions, search terms, material-class coverage, availability states, and links to relevant instrument pages or exercises.

## 3. Non-Urgent Fall Improvement Work

These are appropriate ongoing projects for undergraduate lab employees. Student employees may inventory, photograph, test, draft, annotate, and propose edits. Breakerspace staff must approve changes involving policy, safety, instrument limits, official training, publication permission, or scientific interpretation.

### Instrument Pages And Training Media

Use the [Tutorial Media Production Guide](tutorial-media/README.md) for all new tutorial photography, screen capture, motion recording, processing, accessibility, and publication work.

* [ ] Work through the instrument-specific checklist in [`../instruments/staff-todo.md`](../instruments/staff-todo.md): standardized setup photography, software screenshots, annotated controls, example data, troubleshooting detail, and clearer data-export instructions.
* [x] Replace FTIR and optical instructional GIFs with non-autoplaying MP4/WebM video, controls, poster frames, and descriptive captions; remove the superseded GIFs from the production tree.
* [ ] Add captions or transcripts for any remaining instructional media that contains meaningful audio or visual information not already explained in adjacent text.
* [ ] Improve abbreviated alternative text and screenshot descriptions in consolidated instrument pages with review from an instrument trainer.
* [ ] Inventory linked manuals and request accessible versions from manufacturers; record which operating information still needs an HTML equivalent.
* [ ] Harvest the excluded legacy handouts and 3.000 activity packets for control screenshots, sequencing, quality cues, and worked examples. Publish new accessible Quick Guides under the current content contract rather than restoring the legacy PDFs as parallel operating sources. Note that two legacy handouts print workstation credentials, so do not copy content forward without review.
* [ ] Review the Help page after major instrument updates and move instrument-specific material back to the appropriate operating page.
* [ ] Add a short screenshot or rendered example of the recommended Breakerspace Files folder structure.

### Sample Library

* [x] Establish the internal record model, stable sample/specimen IDs, physical-location hierarchy, availability states, per-field and per-file visibility, review workflow, and audit history.
* [x] Implement the administrator publication preview, versioned allowlisted export package, public-site importer, generated sample pages, and screen-sized JPEG conversion.
* [x] Import the first package containing the two approved test records and verify the generated pages, JPEG conversion, and file integrity checks.
* [x] Editorially review the initial records, correct the coffee-bean entry, omit the generic `BS-000002` test record, and publish the first two useful records (`BS-000001` and `BS-000003`).
* [x] Implement and production-test Olympus DSX/REP upload processing: durable background jobs, metadata-free PNG derivatives, LEXT-validated exposure and X/Y calibration, schema-version-3 export, and public import.
* [x] Limit automatically published microscope metadata to instrument name, readable observation mode with the Olympus abbreviation, and field width. Keep the original source and all other parsed metadata in the private application; do not restore the former detailed capture-settings panel.
* [ ] Add editor-reviewed calibrated scale bars to separate Olympus publication derivatives, then reprocess existing successful jobs without requiring source re-upload.
* [ ] Add successful Olympus-job reprocessing plus asset replacement/removal workflows with audit events before treating generated derivatives as permanently maintainable.
* [ ] Inventory the physical sample cabinet, assign stable identifiers and locations, and photograph each approved sample.
* [ ] Extend the Level 1 collection beyond the pre-fall minimum and connect additional exercises and observations to the same records.
* [ ] Define and test a simple way for users to report a missing, damaged, contaminated, or nearly depleted sample.
* [ ] Add confirmed public URLs and publication completion to the internal audit workflow.
* [ ] Add a revision model so the current public version remains available while a changed record is reviewed.
* [x] Link the preview sample library from top-level navigation so staff and early users can find it and provide feedback while the collection grows.
* [ ] Replace free-text instrument association fields in the internal catalog with checkbox or multi-select controls backed by the canonical instrument list, while preserving support for records and assets associated with multiple instruments.

### Materials Showcase

* [ ] Complete the pumpkin demonstration with the exact scoring rule, stable pumpkin identifiers, masses, peak loads, force-displacement curves, test notes, and design comparisons.
* [ ] Align showcase sample and observation identifiers with the production sample-library schema.
* [ ] Draft publication permission, attribution, privacy, scientific-review, accessibility-review, and editorial-ownership rules for staff approval.
* [ ] Identify additional educational themes from 3.000, 3.010, 3.042, training exercises, fracture surfaces, cross-instrument sample comparisons, and microscope-image contests.
* [ ] Prototype scheduled theme suggestions and preview pull requests from publication-eligible records. Keep publication human-reviewed and skip cycles without a strong educational story.
* [ ] Establish an approximately monthly editorial review without promising a fixed public publication schedule.
* [ ] Add a featured-showcase and archive index only after several strong entries exist.
* [ ] Decide whether microscope-contest archives become a source within the showcase system or remain separate seasonal pages.

### About, Lounge, And Recurring Content

* [ ] Add current Breakerspace Lab Assistant names, roles, areas of support, and photographs when a maintainable roster is ready.
* [ ] Assign an owner and review interval for staff names, roles, and photographs.
* [ ] Decide whether a corridor or entrance photograph or MIT map link would materially help first-time visitors.
* [ ] If the lounge changes after the fall launch period, update every affected page together and replace photographs that no longer represent the space.
* [ ] Decide whether external links should follow MIT's convention of opening in new tabs. If adopted, provide a consistent visible and screen-reader indication.

### Recurring Quality Checks

* [ ] After the staff-training worktree is merged and removed, run a repository-wide terminology audit. Replace remaining uses of "student staff," "student-staff," "lab assistant," and "laboratory assistant" with "Breakerspace Lab Assistant" when they refer to the hourly student role; preserve historical quotations and keep "trainer" for the training function.
* [ ] Check contact details, access information, access forms, training links, reservation links, emergency references, and external services at least once each term.
* [ ] Re-run the internal-link, fragment, responsive-layout, keyboard, and representative screen-reader checks after major structural changes.
* [ ] Review public contribution notes and [`../instruments/staff-todo.md`](../instruments/staff-todo.md) each term so completed tasks do not accumulate and internal planning stays off operating pages.
* [ ] Route operational reports from email and #breakerspace-help into the appropriate page task, staff training guide, sample record, or policy review.

## Implemented Foundation

The following work supports launching before every enhancement is complete:

* [x] Intent-based Start Here homepage and task-ordered navigation.
* [x] Homepage location, arrival, access availability, and eligibility distinction.
* [x] Canonical instrument catalog grouped by capability.
* [x] Consolidated operating pages for all eleven instruments.
* [x] Redirects from the former lab catalog and every legacy tutorial route.
* [x] Consolidated training pathway and embedded LibCal training calendar.
* [x] Practical reservation page with direct calendars and operating rules.
* [x] Lab-wide safety, sample, guest, working-alone, cleanup, emergency, and incident-reporting guidance.
* [x] Help routing for instrument problems, access, files, data, and advanced work.
* [x] Teaching collaboration pathways, executive summary, staffing model, planning guidance, and course examples.
* [x] Current-state Lounge page.
* [x] About page covering purpose, development, team model, and contact pathways.
* [x] Materials Showcase concept, workflow documentation, authoring template, and pumpkin demonstration.
