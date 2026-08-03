# Breakerspace Website To-Do

Last reviewed: 2026-07-27

This is the canonical unlisted list for cross-site launch work, policy decisions, and ongoing maintenance. It is organized by operational deadline rather than by page.

The redesigned site is already a substantial operational improvement. Production launch should therefore be treated as a controlled cutover, not as a requirement to finish every content idea. A task belongs in the highest tier whose criterion it meets:

| Tier | Criterion |
| --- | --- |
| **1. Must do before launch** | A wrong or incomplete item could create a safety problem, break onboarding or access, misdirect users during the cutover, expose a known unfinished public page, or prevent completion of a core task. |
| **2. Urgent before the fall term** | The site can launch without it, but higher fall traffic, training volume, and course use will make the gap costly or difficult to manage. |
| **3. Ongoing fall improvement** | The work adds depth, examples, media, accessibility improvements, or maintainability without being required for safe daily operation. It is suitable for undergraduate lab employees to prepare with staff review. |

Public instrument pages should state current operating information clearly. Instrument-specific planning belongs in [the staff instrument to-do list](../instruments/staff-todo.md), while cross-site planning belongs here.

## Current Post-Launch Priority Order

The external-review security and privacy bundle was closed on July 27, 2026:

* [x] Remove public local-workstation usernames and passwords. Public pages may identify MIT Kerberos as the workstation credential type; retain the optical microscope's low-risk DSX Guest login because it reduces avoidable staff contacts for already trained, physically present users.
* [x] Stop requesting MIT ID numbers or Kerberos usernames by ordinary email. Ask users to contact the team from their MIT email address and use that address for account identification.
* [x] Link data tools to the separately maintained MIT Carbonio deployment and exclude the retired embedded ScienceScripts copies from the production build. The Breakerspace production site now links out and no longer publishes or runs the tool code or its CDN loaders.

External follow-up: the live Carbonio applications still load Plotly and h5wasm from cdnjs, unpkg, or jsDelivr as of July 27, 2026. Self-hosting those dependencies remains a task for the separately maintained Carbonio/ScienceScripts applications rather than the Breakerspace site queue.

The first performance pass was completed July 27, 2026: the FTIR and optical GIFs were replaced with on-demand MP4/WebM video, responsive AVIF/WebP/JPEG image sets, intrinsic dimensions, and separate lightweight Quick Guide URLs.

The remaining cross-site work continues in this order:

1. **Workflow accessibility:** complete keyboard, VoiceOver, reflow, reduced-motion, and third-party workflow testing.
2. **Responsive design:** fix the intermediate-width overflow, increase body-text readability, remove focus-state layout shift, and replace fragile floated figures.
3. **Automated quality controls:** add production-equivalent build, link, accessibility, asset-budget, metadata, and sensitive-content checks.
4. **Instrument-page structure:** correct heading hierarchy and extend the standalone Quick Guide pattern beyond the FTIR and optical pilots.
5. **Discovery and belonging:** add a vivid homepage inspiration block and improve question- or sample-first instrument selection after the operational work above.

The detailed tiered and instrument-specific checklists below remain authoritative. This execution order does not override urgent safety corrections or fall-readiness dependencies.

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

* [ ] Close out the remaining coordinated Qualtrics checks in [qualtrics-launch-review.md](../_staff-training/qualtrics-launch-review.md). The revised flow and validations were implemented and reported working before the production release on July 24, 2026; verify the remaining notification, retention, response-handling, and live test items before closing this task. The implementation guide remains in [qualtrics-manual-edit-guide.md](../_staff-training/qualtrics-manual-edit-guide.md), and the original QSF extraction and rationale remain in [qualtrics-survey-audit.md](../_staff-training/qualtrics-survey-audit.md).
* [x] Confirm that LibCal training and reservation descriptions, public calendars, participant limits, cancellation links, and instrument names match the redesigned site.
* [x] Confirm the complete access handoff: trainers add the correct Moira groups and send Slack invitations during training closeout, the lab manager receives the required Qualtrics information and processes tap access, and users can create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership.
* [x] Run one end-to-end new-user test of the public path: choose an instrument, complete the survey test path, locate or request training, understand the access handoff, find the reservation calendar, locate the operating page, and find help.
* [ ] Test the core Qualtrics and LibCal workflows with keyboard-only navigation and VoiceOver. Treat an inability to register, understand an error, review a response, submit, or cancel as a launch blocker.
* [x] Confirm current lounge hours, undergraduate eligibility, access-form URL, typical processing time, food-and-drink boundary, and the equipment actually available.

### Public Content And Release Hygiene

* [x] Review every high-consequence or operationally specific instrument claim with the appropriate staff owner. Resolve, remove, or clearly qualify unverified safety limits, interlock descriptions, sample restrictions, login requirements, and shutdown instructions. This includes the XRD enclosure/interlock description and the Instron questions above.
* [x] Review visible instrument-page to-do sections. Move internal maintenance and policy questions here; retain public items only when they are appropriate, clearly labeled contribution opportunities for trained users or student employees.
* [x] Replace the former sample-library placeholder with the generated public index and reviewed sample pages. The library can remain visible in preview and is not a production-launch dependency.
* [x] Exclude the 2024 and 2026 microscope-contest pages and gallery assets from the launch build until meaningful image descriptions are written and reviewed.
* [x] Confirm that the former lab catalog, every legacy tutorial URL, workstation shortcut, posted QR code, LibCal description, and known course link resolves to the intended canonical page.
* [x] Test the final production configuration for navigation, internal links and fragments, external links, responsive layout, images, and the core Start Here, training, reservation, safety, help, teaching, and instrument paths.
* [x] Confirm current contact information, hours, room and arrival language, access instructions, reservation links, training links, and emergency numbers.
* [ ] Complete a focused keyboard and VoiceOver smoke test on the homepage, training, reservations, safety, Help, instrument catalog, and at least one representative instrument page.
* [x] Have the operational owner review each high-consequence public page before release.

### Controlled Cutover

* [x] Name a launch owner, choose a release window, and briefly freeze policy and navigation edits while the launch checks are completed.
* [x] Preserve a deployable snapshot or tag of the current production site and write down the rollback procedure before changing the production domain.
* [x] Release the redesigned site and updated Qualtrics survey in the same window. Preserve old URLs through redirects rather than leaving two conflicting sets of instructions.
* [x] Assign someone to monitor email, #breakerspace-help, access failures, broken links, and instrument-page reports for the first week after launch. Correct operational errors immediately and record lower-priority improvements in Tier 2 or Tier 3.

## 2. Urgent Before The Fall Academic Term

These items should be complete before the first major fall training push or course use. They are not reasons to keep the current site in production if Tier 1 is complete.

### Training Capacity And Consistency

* [ ] Create a minimum staff training guide from [instrument-training-template.md](../_staff-training/instrument-training-template.md) for every instrument that will be offered for training early in the fall. Instruments not yet documented should receive a guide before their next training is advertised.
* [ ] Select a stable Level 1 sample or prepared kit, expected result, cabinet location, and replenishment plan for each fall training guide.
* [ ] Connect each fall Level 1 exercise, public operating page, staff training guide, LibCal description, and Moira group to the same workflow.
* [ ] Complete the two remaining Moira list renames so every group name is `dmse-brkrspc-` plus the instrument's page slug: `-dsx` → `-optical` and `-duetta` → `-uv-vis`. Both are access-controlling lists; verify the name in WebMoira and confirm the workstation's `Allow log on locally` setting picked up the new group afterward. Three renames are done: the comms-only `-hrdnss` → `-hardness-tester` and `-ionmill` → `-ion-mill` on 2026-07-31, and the access-controlling `-utm` → `-instron` on 2026-08-03. Those confirmed that WebMoira renames cleanly, accepts a 28-character name, and that the Windows `Allow log on locally` policy follows a rename automatically without being retyped. When all five are done, mark the rows and delete the rename-status section in [access-and-logistics.md](../_staff-training/access-and-logistics.md).
* [ ] Run at least one staff or student-staff practice training from each new guide and revise steps that produce inconsistent outcomes. Trainer qualification is per instrument and is defined in [trainer-readiness.md](../_staff-training/trainer-readiness.md); a guide's first practice run validates the document, while later runs qualify the trainer.
* [ ] Maintain the trainer roster in the private staff channel's Slack canvas, recording the stage reached, practice date, and observer per staff member and per instrument. It stays out of the repository because it holds individual names. Trim workflow text from the canvas that [trainer-readiness.md](../_staff-training/trainer-readiness.md) now covers, and link there instead so the process is documented once.
* [ ] Choose one public-facing term for student staff and use it consistently. LibCal says "laboratory assistant," the website says "student staff," and the staff guides say "trainer." Fold the LibCal side into the template rewrite.
* [ ] Confirm that the fall LibCal schedule provides enough sessions and that session limits match the available staffing and physical space.
* [ ] **Rewrite the ten LibCal event templates.** They predate the redesigned site and contain errors, the most consequential being an automated follow-up email that tells every attendee they now have instrument login access — false for the XRD and ion mill, misleading for the hardness tester. Also fix the Duetta's visible `ADD OPERATIONS` placeholder text, the PSA's "Scanning Electron Microscopes" heading, and the unsourced 48-hour access claim. Rewrite each to hold the minimum LibCal needs — title, time, 3-person limit, registration form, LibAuth, waitlist, email scheduling, category, and enough description to confirm the right session — and link to the instrument page, its Quick Guide, and the training pathway for everything explanatory. The [LibCal API cannot edit events or templates](../_staff-training/libcal-event-templates.md#why-manual-editing-is-the-only-option), so every field left in LibCal is a permanent manual-maintenance cost. The pre-revision state is recorded in [libcal-event-templates.md](../_staff-training/libcal-event-templates.md).
* [ ] Decide the 5-minute early start/end convention and the "must attend the entire session" requirement. Both appear in the current LibCal reminder email but on no website page, and the second sits awkwardly beside the guides' "no separate skills demonstration" language. Resolve, then state it in one place.
* [ ] Create LibCal templates for the hardness tester and ion mill, or decide that neither is offered as a scheduled training. For the ion mill, first decide whether a training event or a staff-assisted-use arrangement is the right model.

### Instrument Verification And High-Traffic Depth

* [ ] Finish the remaining XRD operational verification: export path, actual export formats, supported off-workstation analysis tools, stocked sample holders and special capabilities, and representative stored-program scan durations. Keep workstation authentication details in training or at the instrument.
* [ ] Confirm the particle-size analyzer's approved training powders, workstation access handoff, default database/export conventions, and any pre-term consumable needs. Keep authentication details out of public documentation.
* [ ] Confirm the Raman training samples and obtain the current XploRA and LabSpec 6 manuals or an equivalent staff reference.
* [x] Complete the Instron operating deep-dive: Bluehill method setup, load-cell and fixture changes, travel limits, each offered test type, video extensometer, saving and export. Written 2026-07-29 with page-level citations to Instron's official 6800 operator guide. Follow-ups remain in [instruments/staff-todo.md](../instruments/staff-todo.md), including a verified replacement photo of the 5 kN load cell with the actual 5 kN grips, the reviewed example force-displacement curve, and staff confirmation of the workstation's actual method names, export conventions, and recommended end-of-test condition.
* [ ] Confirm the hardness tester's available scales, load and sample-size limits, safe scale/material pairings, and approved conversion reference.
* [ ] Prioritize screenshots, photographs, and examples that prevent a likely fall operating error. Leave purely illustrative or cosmetic media work in Tier 3.

### Safety Communication And Accessibility

* [ ] Photograph the verified exit route, campus phone, alarm pull, fire extinguisher, emergency and first-aid cabinet, shower and eyewash, spill kit, sharps container, and waste bins.
* [ ] Create one compact annotated emergency-equipment and egress visual from real photographs or an accurate plan, then obtain staff or EHS approval before publication. `safety.md` now states every location in text, including the corridor alarm pulls, the campus phone on the desk by the lab doors, and the extinguisher by the sink; the visual should match that text and make the single exit route legible at a glance.
* [ ] Complete the broader keyboard and VoiceOver pass on the production build, including image-heavy and table-heavy instrument pages, animations, and authenticated third-party workflows.
* [ ] Test the Dropbox enrollment, team-membership request, approval, and shared-file workflow for keyboard and screen-reader access, or document an accessible alternative.
* [ ] Confirm accurate captions for instructional videos needed in fall training and provide transcripts where captions cannot be corrected promptly.
* [ ] Identify essential PDF manuals and ensure that critical operating information is also available in accessible HTML even when a tagged manufacturer PDF is unavailable.
* [ ] Ask MIT Digital Accessibility for a launch-candidate or early-production consultation, with emphasis on instructional media and third-party workflows.

### Fall Operations

* [ ] Decide whether the site needs a small current-notices mechanism for outages, temporary access changes, or schedule interruptions. If implemented, assign an owner, require an expiration date, and provide a clean empty state.
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
* [ ] Rebuild the excluded instrument handouts as accessible, reviewed companions before returning them to the public build.
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

* [ ] Add current student-staff names, roles, areas of support, and photographs when a maintainable roster is ready.
* [ ] Assign an owner and review interval for staff names, roles, and photographs.
* [ ] Decide whether a corridor or entrance photograph or MIT map link would materially help first-time visitors.
* [ ] If the lounge changes after the fall launch period, update every affected page together and replace photographs that no longer represent the space.
* [ ] Decide whether external links should follow MIT's convention of opening in new tabs. If adopted, provide a consistent visible and screen-reader indication.

### Recurring Quality Checks

* [ ] Check contact details, hours, access forms, training links, reservation links, emergency references, and external services at least once each term.
* [ ] Re-run the internal-link, fragment, responsive-layout, keyboard, and representative screen-reader checks after major structural changes.
* [ ] Review public contribution notes and [`../instruments/staff-todo.md`](../instruments/staff-todo.md) each term so completed tasks do not accumulate and internal planning stays off operating pages.
* [ ] Route operational reports from email and #breakerspace-help into the appropriate page task, staff training guide, sample record, or policy review.

## Implemented Foundation

The following work supports launching before every enhancement is complete:

* [x] Intent-based Start Here homepage and task-ordered navigation.
* [x] Homepage location, arrival, hours, and access distinction.
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
