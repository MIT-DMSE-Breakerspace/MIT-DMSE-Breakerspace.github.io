# Site Revision Handoff — 2026-09-17

Last updated: 2026-09-21 for the 24/7/365 access decision. The filename is retained for existing links; the September release records below remain historical.

Read this first when continuing the website usability and content work in a new session. The complete [original site review](site-review-2026-09-17.md) preserves the initial findings, word counts, examples, and external writing guidance. The ongoing cross-site queue remains [site-todo.md](site-todo.md#september-2026-site-usability); instrument-specific work remains in [instruments/staff-todo.md](../instruments/staff-todo.md).

## Current State And Owner Decisions

The task-based site structure is sound. The priority is helping MIT undergraduates find and use existing information, while retaining a clear route for instructors and exploratory users. Prefer small, reversible improvements over a wholesale redesign or a uniform percentage reduction in words.

**Further individual instrument-page renovations are paused while the owner gathers feedback.** FTIR is the only published pilot of the new reading order. Do not propagate it, revise another instrument's presentation, or replace the shared template's existing order and educational-length guidance until the owner resumes that work. This pause concerns the page-renovation stream; it does not cancel separately authorized training-guide work or necessary safety corrections.

The owner approved a further Get Trained revision on September 18 to focus on registration: a short training-process overview, the one-time online-record action, and a compact live list of upcoming sessions. Preparation, access-setup, and project/course support sections were removed by request; do not restore them as generic onboarding guidance. Access setup is conveyed during training, and instrument-page review is not expected preparation. The early-fall notice was removed because the calendar has sessions, with more on the way; do not restore it as a generic placeholder.

There are no resources for organized usability trials. Use automated checks, proportionate phone/desktop inspection, and feedback from normal lab interactions. The original review's proposed recruited-user testing and 20/60/20 effort split were recommendations, not adopted requirements. Routine fixes do not need a new testing program.

The owner will review the live pages following the September 18 homepage and shared-layout releases. The prior all-page review was interrupted; do not treat the limited spot-check below as its completion. Use subagents for graphical page reviews and have them return concise findings and coverage, keeping screenshots and large page-rendering payloads out of the main task.

## 24/7/365 Access — September 21

The owner confirmed that the lounge and instrument lab permit access **24 hours a day, 365 days a year**. This supersedes the former **8 AM–midnight** schedule and instructions below to preserve that schedule. Dated release and validation records describe the policy at the time of those releases.

The repository update uses `_data/lab.yml` for the compact `24/7/365` statement and its full wording. The shared footer and mobile homepage identify access, Calendar distinguishes access from staff support and reservations, and Lounge explains access activation without repeated open-hours qualifications. Lounge retains `#hours-and-access`; Safety removes the unnecessary hours link label and after-hours-exception language. Training, reservations, working-alone rules, eligibility, and access-processing expectations are unchanged.

The calendar embed now includes midnight–8 AM by changing its minimum visible time to `00:00:00`; the maximum remains `24:00:00`, and `08:00:00` remains only the initial scroll position.

Public inspection after the owner's LibCal update confirmed 24 Hours in the weekly display and monthly dates through December 2026, plus overnight slots for all eleven instruments on the inspected September 22–24 dates. Two event/reservation discrepancies remain: the September 23 assistant shift coincides with a whole-lab block, and inspected Optical/SEM training sessions leave their instruments bookable. The [LibCal verification record](../_admin/libcal-247365-hours-checklist.md) preserves exact dates, links, corrective actions, and the limits of public verification. No LibCal settings or bookings were changed during that inspection.

Validation passed: frozen-bundle Jekyll build, HTMLProofer across 72 files, the site-quality check, whitespace checks, and WCAG2AA checks on the homepage, Calendar, and Lounge. Generated HTML contains the new shared footer on 34 pages, preserves the homepage and Lounge access anchors, and has no old daily-hours or after-hours-exception wording. Phone inspection at 320×740 and desktop homepage inspection at 1440×1000 found readable access information without horizontal overflow or footer overlap. The embed parameters were verified in generated HTML; cross-origin interactive overnight rows were not fully inspected.

The owner explicitly authorized completion and publication on September 21. This release follows the repository's reviewed-pull-request workflow to `main`; GitHub Pages publishes that branch. The release pull request and deployment history record the publication result.

## Published Changes

The six releases below were merged, deployed, and verified live on 2026-09-17. They use separate merge commits so each can be reversed independently.

| Change | Result | Pull request | Merge commit |
| --- | --- | --- | --- |
| Online training record | Prominent **Start online training & record** action with one-time wording; separate **Find a training session** action. | [#32](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/32) | `a05047a` |
| Mobile navigation | Compact, labeled Menu on phone/tablet widths; existing destinations and desktop sidebar retained. | [#33](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/33) | `5d9f8ae` |
| Training copy | Replaced the five-step pathway with Before Your Session and After Your Session; project/course support became two contextual links. Essential sample, safety, and access guidance and old section links remain. | [#34](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/34) | `ca0e83b` |
| Calendar notice | Removed the early-fall notice from Training and Calendar and deleted its unused include; retained both calendar embeds. | [#35](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/35) | `01bb069` |
| FTIR pilot | Short purpose and task navigation, sample requirements, SOP, task-specific help, results, troubleshooting, exploration/practice, and manuals. | [#36](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/36) | `969d4f9` |
| Find an Instrument | Plain-language group headings, common instrument names before models, useful outcomes/sample examples, staff-help link, and explicit SEM elemental analysis (EDS) under identification. | [#37](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/37) | `97b5c9f` |

The triggering observation was a student unable to locate the one-time online training record on a phone after being shown its location on a desktop. Before the changes, the first survey link was roughly 1,180 pixels down the phone page. The updated action was verified on the first phone screen. This is a layout/destination verification, not a measured student success rate.

### September 18: Homepage And Shared Layout

These changes are merged into `main`. GitHub Pages deployment and the live stylesheet were verified after PR #42; no part of the width correction remains unpublished.

| Change | Result | Pull request | Merge commit |
| --- | --- | --- | --- |
| Compact homepage | Six task links replace verbose rows; shared location/hours data supplies the footer and a compact mobile homepage summary. | [#39](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/39) | `b22ef69` |
| Homepage sample previews | Brief invitation followed by three curated sample previews; compact image/text rows on phones. | [#40](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/40) | `9a770bd` |
| Shared public layout | Centered desktop frame up to 1320px, aligned sidebar/content, and footer beneath desktop navigation; the whole sidebar sticks only when it fits. Mobile and print retain the footer after content. | [#41](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/41) | `52c7ce1` |
| Consistent content width | Removes PR #41's automatic 72ch prose cap so text, tables, and calendars share the content column, up to 960px. | [#42](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/42) | `985dded` |

Do not restore automatic width caps on individual paragraphs/lists: the narrower text alongside wider tables and calendars made Help and Calendar feel disconnected. Any future reading-width adjustment should cover a whole page or coherent section. Standalone trainer and printable Quick Guide layouts keep their separate shells.

### FTIR Pilot Boundaries

The short SOP and instructional media were preserved, as were all 34 prior section anchors. Detailed operating instructions are labeled by task rather than by the user's experience level. Interpretation sits with analysis; troubleshooting uses readable symptom sections; exploratory material remains directly reachable from the opening. The page no longer requires an extended science introduction before the operating reference.

The pilot uses shared styles in `assets/css/style.scss`, but their presence is not approval to convert other instrument pages. The note in [instruments/readme.md](../instruments/readme.md#standard-page-order) identifies the exception. Reviewed Quick Guides and trainer materials retain their separate source contracts and review gates; reorganizing FTIR did not approve any draft guide.

### Instrument Finder Boundaries

The existing stacked list, all prior instrument destinations, and all seven heading anchors were retained. The Phenom XL appears under imaging and elemental identification because it serves both purposes. Fluorescence remains staff-guided; the particle-size description notes that analyzed powder is not recovered. Model names remain normal-size secondary text: a trial of `<small>` was discarded because the theme made them difficult to read.

## Comparable Before And After Counts

The original review's counts remain a historical baseline. The table below applies the same original counting method to the final generated pages at production commit `97b5c9ff78b318a827f840b1f6bb50c13170dd7e`, after the calendar notice was removed.

| Main-content measure | Before September 17 changes | September 17 published result |
| --- | ---: | ---: |
| Get Trained | 872 | 318 |
| Calendar | 376 | 312 |
| FTIR entire page | 3,275 | 3,043 |
| FTIR before the SOP | 1,012 | 184 |
| Find an Instrument | 230 | 291 |

Count rendered main-content text, including headings, lists, tables, and captions; exclude navigation/footer, scripts/styles, explicitly hidden content, external embeds, PDFs, and text in images. The original tokenizer counts letter/number/underscore or µ sequences and retains internal apostrophes and hyphens; it does not count standalone punctuation. For reproducibility, its Python regex was `r"[\wµ]+(?:['’−-][\wµ]+)*"`. For pre-SOP counts, stop at the `sop` heading.

Progress replies sometimes used simple whitespace counts at intermediate stages: the training pathway went from 511 to 117 words, FTIR pre-SOP text from 1,007 to 185, and the finder from 227 to 302. Those figures use a different method, and the whole training-page comparison preceded the final notice removal. Use the consistent table above for future baseline comparisons. The finder intentionally gained a little text to explain usefulness; the FTIR improvement chiefly reduces reading before action rather than deleting its reference material.

## Best Next Work

Start with feedback from the owner's live review of the September 18 layout, keeping the instrument-renovation pause in effect. Reserve Time's focused editorial revision is tracked in [PR #45](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/45), with the booking-scope follow-up in [PR #46](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/46); see its record below.

Get Help's editorial pass is complete and approved for release; see the Help & Support record below. The next non-instrument copy candidate is Teach With Us planning and repeated whole-lab guidance. Keep `reservations.html#whole-lab-reservations` as the group-request destination when consolidating Teaching. The homepage opening and location/hours work is already published. Preserve the instructor partnership summary and useful scientific limits. Treat the original review's word targets as editing aids, not limits on safety or reference content.

The cross-site queue records unresolved decisions: charges/consumables, access-processing expectations, accessible arrival/accommodations, and what supervised course participants may do before independent-use training. Obtain actual policy from the operational owner before writing those answers. It also tracks draft Quick Guide labels, public editorial to-do text, and reusable course/sample examples. Do not treat an absence found in the review as proof of a policy or a completed remediation.

## Training Registration Review — September 18

The owner approved the local preview for publication. `training.md` now opens with the arc from one-time online training through hands-on instrument training to independent use. The no-session/registration-help contact note follows the session-length and participant-limit explanation. The instrument-exploration bullet and Before Your Session, After Your Session, and Project And Course Support sections are removed. Those removed fragments had no remaining repository references; the registration and upcoming-session fragments remain.

`_includes/training-sessions.html` and `assets/js/training-sessions.js` replace the training page's large calendar with five upcoming events from the owner-supplied LibCal widget URL, filtered to Instrument Training (calendar `19408`, category `69558`). The public endpoint permits cross-origin requests. The script renders only event links and date text using the site's typography; it does not import vendor styles or arbitrary HTML. Static links to all training sessions and the full Calendar page remain usable without JavaScript or if the feed fails. The full calendar on `calendar.md` is retained.

Local validation passed: Jekyll build, HTML/internal links, JavaScript syntax, Training-page Pa11y, desktop and 320/390px phone inspection, and temporary fixtures for empty, failed, and no-JavaScript states. The live feed loaded five sessions; the list wrapped without horizontal overflow. No event registration was submitted. The owner reviewed the concise final page and authorized push, pull request, merge, and deployment. Consult the associated pull request and GitHub Pages run for release status.

## Calendar Editorial Review — September 18

The `calendar.md` revision is tracked in [PR #44](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/44). The opening now gives the training-registration action and a short, separate instrument-booking link. The Calendar heading precedes the embed so `#calendar` reaches the schedule. One availability guide replaces the repeated explanations and training/reservation reminder, retaining shared opening hours, drop-in support, the full lab-reservation interval including setup/cleanup, and the lounge-only distinction. Existing fragments, destinations, the shared calendar include, and other public pages are unchanged. No policy question remains from this edit.

The live Calendar review at 390×844 and 1440×1000 found that LibCal loads at both sizes, but the phone's seven-column week view clips event titles and the full-calendar fallback sits below the 600px embed. Track that existing shared-embed issue in the usability checklist; it is outside this page-copy edit.

Validation passed: Jekyll build (existing Sass deprecation warnings), Calendar-only HTML/internal-link and Pa11y checks, preserved fragments/destinations, shared hours, and `git diff --check`. A subagent inspected the local first screen and lower availability guide at the same phone/desktop sizes: readable actions and text, no horizontal page overflow, and the mobile calendar starting roughly 120px earlier. LibCal loaded in both local views; the existing phone clipping remained. No event registration or booking was attempted. The temporary preview server was stopped.

## Reserve Time Editorial Review — September 18

The first `reservations.md` revision is tracked in [PR #45](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/45). It leads with individual booking, short preparation guidance, and the LibCal steps. Short lists replace the rules and help tables, which required sideways scrolling at 320px on the live page. The shortened lab/lounge request procedure follows the individual workflow and is reachable from an opening jump link; `#whole-lab-reservations` remains its destination. Staff review/calendar administration and repeated guest/credential reminders are removed; Safety remains the source for shared lab policy. Existing fragment IDs and link destinations are preserved.

The edit retains instrument training, sample screening, the one-hour starting norm, three-day booking window and midnight opening, 15-minute blocks, own-account booking, presence/late-arrival/handoff/cancellation rules, and problem escalation. Group requests retain their required details, whole-lab lead time, written confirmation, and lab-versus-lounge effects on instrument availability. No policy question remains from this edit. Teaching's duplicate request instructions remain queued for that page's review. When reviewing Safety, update its Reserve Time link description, which still lists guest rules now kept on Safety.

Validation passed: Jekyll build (existing Sass deprecation warnings), Reservations-only HTML/internal-link and Pa11y checks, preserved fragments/destinations, and `git diff --check`. Subagents inspected the live baseline and local revision at 320×740, 390×844, and 1440×1000. The final local check used headless browser screenshots after the interactive browser became unavailable; it covered the first-screen actions, preparation/booking, rules/help, and lab/lounge request. Text and actions wrap without horizontal overflow, and the opening group-request link reaches its section at all three sizes. Authenticated LibCal booking, screen-reader use, and other pages were not tested. The temporary preview server was stopped. Consult the pull request and its deployment checks for release status.

### Owner Follow-up — Booking Scope

The owner clarified that Reserve Time should assume trained users already know lab policy and sample requirements. The follow-up in [PR #46](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/46) removes Before You Book, Booking Problems, the opening training reminder, and the opening lab/lounge jump link. The page now proceeds from the booking links to LibCal instructions, reservation rules, and lab/lounge requests. Keep general sample, safety, access, and instrument-help guidance on its existing task pages rather than repeating it in this workflow.

The one-hour starting norm, including time for setup and cleanup and the staff route for longer uninterrupted sessions, moves into Reservation Rules. Booking requirements and the lab/lounge request procedure are unchanged. The booking, rules, and group-request fragments remain; anchors belonging to the two deleted sections are removed, with no public-page references found in the repository. This is an editorial scope decision, not a change to training or lab policy.

Jekyll build, Reservations-only HTML/internal-link checks, and `git diff --check` passed. A subagent inspected headless Chromium screenshots at 320×740, 390×844, and 1440×1000: booking actions appear immediately, all sections wrap without horizontal overflow, and direct loads of `#whole-lab-reservations` reach the visible heading. External booking, other pages, and assistive technology behavior were not tested. The temporary preview server was stopped. Consult PR #46 and its deployment checks for release status.

## Help & Support Editorial Review — September 18

After reviewing the recommendations, the owner authorized a local edit of `resources.md` and requested a hosted preview. Contact options now follow a concise emergency note. Access guidance leads with user actions; files guidance brings recommended folders forward as wrapping folder sequences. Internal account/server administration, repeated onboarding explanations, the training detour, and duplicate contact/emergency prose are removed. Shared layout, navigation, footer, and other public pages are unchanged.

On reviewing the preview, the owner requested removal of the entire Quick Links section: the shortened page is easy to scan, and a second list of its sections delays useful content. The heading and four jump links are removed; the former `#quick-links` fragment remains as an invisible compatibility target above Instrument Problems. Treat quick-link sections as optional in future page reviews, retaining them only when they help readers reach useful actions faster. After removal, Jekyll build, Help-only HTML/internal-link checks, preserved-fragment comparison, and `git diff --check` passed again.

The edit preserves all 13 existing content fragments, Kerberos login and MIT-email guidance, Dropbox enrollment and approval steps, shared-folder privacy, safe instrument-problem response and reporting, and advance discussion of unusual samples. Lab tap-access processing time remains unspecified; the existing policy question is still open.

The initial preview passed Jekyll build (existing Sass deprecation warnings), Help-only HTML/internal-link checks, Pa11y, preserved-fragment comparison, and `git diff --check`. Subagents inspected the complete local page at 390×844 and 1440×1000 using isolated headless browsers after the interactive browser tool failed. Contact options appeared in the first phone viewport, and folder sequences wrapped without horizontal scrolling. No clipping or page-wide overflow was found, and topic/contact anchors worked. These graphical and accessibility checks preceded the Quick Links removal. Other widths, screen-reader use, and external account workflows were not tested. The owner approved the final local revision and authorized publication on September 18. Consult the pull request from `codex/help-support-editorial` and its GitHub Pages deployment for release status.

## Files And Validation

| Area | Main sources |
| --- | --- |
| Shared layout/navigation/footer | `_layouts/default.html`, `assets/js/site-layout.js`, `assets/js/site-navigation.js`, `assets/css/style.scss`; destinations remain in `_data/navigation.yml` |
| Homepage and visit details | `index.md`, `_data/homepage-feature.yml`, `_includes/homepage-feature.html`, `_data/responsive-images.yml`, `_data/lab.yml` |
| Training/calendar | `training.md`, `calendar.md`, `_includes/training-sessions.html`, `assets/js/training-sessions.js`, `_includes/breakerspace-calendar.html` |
| FTIR pilot | `instruments/ftir.md`, pilot styles in `assets/css/style.scss`, exception in `instruments/readme.md` |
| Instrument finder | `instruments/index.md` |
| Planning and history | This handoff, the archived review, `_staff/site-todo.md`, `instruments/staff-todo.md` |

September 17 validation included Jekyll builds, internal links/HTML, site quality and applicable SOP checks, accessibility checks, representative phone/desktop inspection, and live deployment verification. The finder was checked at 320, 390, and 1280 pixels without horizontal overflow. These checks do not claim complete accessibility conformance or replace feedback. No authenticated survey submissions or bookings were made as part of these revisions.

September 18 validation: a fresh Jekyll build and `git diff --check` passed. PR #42 and the merged `main` revision passed the build, links, accessibility, content, and secret checks. A subagent graphically checked Start Here, Get Help, Calendar, and FTIR at 1440×1000 and 390×844: consistent content widths, no document-level horizontal overflow, expected footer placement, and working mobile Menu. The external calendar remained blank in the local preview, so its contents and registration behavior were not verified; this did not establish a regression. Intermediate widths, short desktop windows, printing, keyboard traversal, and lower sections of long pages were not audited in that spot-check. Temporary preview servers were stopped.

GitHub Pages deployed merge `985dded`; the live homepage referenced that revision's stylesheet, which no longer contained the 72ch cap and retained the 1320px frame. This confirms publication, while the owner's broader live-page review remains open.

Follow the root README's branch-and-reviewed-PR workflow for further changes, keeping releases small and preserving anchors. The remote uses the `github-mit` SSH alias; specify `--repo MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io` with GitHub CLI commands. The latest public-page change recorded here is `985dded`. Inspect current Git status before starting; do not assume an older branch or preview process still exists.

To reverse an individual published change, make a reviewed revert of its merge commit using mainline parent 1, check subsequent dependencies, and validate before merging. Do not reset shared history. For ordinary copy adjustments, a new focused change is usually simpler.

## Suggested Starting Prompt

> Continue the Breakerspace website usability work. Read `_staff/site-revision-handoff-2026-09-17.md` (updated September 18) and the September usability section of `_staff/site-todo.md`; consult the linked original review only as needed. The homepage and shared-layout changes, including the consistent-width correction, are live through PR #42. Start with my live-page feedback; Reserve Time's review and release are tracked in PRs #45 and #46. Get Help's editorial pass is complete and approved for release; consult its pull request and deployment for status. Further instrument-page renovations remain paused pending feedback. Use subagents for graphical reviews and return concise findings without page renderings in the main task. Use incremental changes and ordinary feedback; organized user trials are not required.
