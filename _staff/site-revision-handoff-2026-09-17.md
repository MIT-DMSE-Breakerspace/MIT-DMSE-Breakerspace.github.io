# Site Revision Handoff — 2026-09-17

Read this first when continuing the website usability and content work in a new session. The complete [original site review](site-review-2026-09-17.md) preserves the initial findings, word counts, examples, and external writing guidance. The ongoing cross-site queue remains [site-todo.md](site-todo.md#september-2026-site-usability); instrument-specific work remains in [instruments/staff-todo.md](../instruments/staff-todo.md).

## Current State And Owner Decisions

The task-based site structure is sound. The priority is helping MIT undergraduates find and use existing information, while retaining a clear route for instructors and exploratory users. Prefer small, reversible improvements over a wholesale redesign or a uniform percentage reduction in words.

**Further individual instrument-page renovations are paused while the owner gathers feedback.** FTIR is the only published pilot of the new reading order. Do not propagate it, revise another instrument's presentation, or replace the shared template's existing order and educational-length guidance until the owner resumes that work. This pause concerns the page-renovation stream; it does not cancel separately authorized training-guide work or necessary safety corrections.

The owner considers the shortened Get Trained page appropriate in length for its job. Avoid reopening it for further compression without a concrete problem. The early-fall notice was removed because the calendar has sessions, with more on the way; do not restore it as a generic placeholder.

There are no resources for organized usability trials. Use automated checks, proportionate phone/desktop inspection, and feedback from normal lab interactions. The original review's proposed recruited-user testing and 20/60/20 effort split were recommendations, not adopted requirements. Routine fixes do not need a new testing program.

## Published Changes

All six changes below were merged, deployed, and verified live on 2026-09-17. They use separate merge commits so each can be reversed independently. No public-page change from this session is still awaiting publication.

| Change | Result | Pull request | Merge commit |
| --- | --- | --- | --- |
| Online training record | Prominent **Start online training & record** action with one-time wording; separate **Find a training session** action. | [#32](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/32) | `a05047a` |
| Mobile navigation | Compact, labeled Menu on phone/tablet widths; existing destinations and desktop sidebar retained. | [#33](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/33) | `5d9f8ae` |
| Training copy | Replaced the five-step pathway with Before Your Session and After Your Session; project/course support became two contextual links. Essential sample, safety, and access guidance and old section links remain. | [#34](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/34) | `ca0e83b` |
| Calendar notice | Removed the early-fall notice from Training and Calendar and deleted its unused include; retained both calendar embeds. | [#35](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/35) | `01bb069` |
| FTIR pilot | Short purpose and task navigation, sample requirements, SOP, task-specific help, results, troubleshooting, exploration/practice, and manuals. | [#36](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/36) | `969d4f9` |
| Find an Instrument | Plain-language group headings, common instrument names before models, useful outcomes/sample examples, staff-help link, and explicit SEM elemental analysis (EDS) under identification. | [#37](https://github.com/MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io/pull/37) | `97b5c9f` |

The triggering observation was a student unable to locate the one-time online training record on a phone after being shown its location on a desktop. Before the changes, the first survey link was roughly 1,180 pixels down the phone page. The updated action was verified on the first phone screen. This is a layout/destination verification, not a measured student success rate.

### FTIR Pilot Boundaries

The short SOP and instructional media were preserved, as were all 34 prior section anchors. Detailed operating instructions are labeled by task rather than by the user's experience level. Interpretation sits with analysis; troubleshooting uses readable symptom sections; exploratory material remains directly reachable from the opening. The page no longer requires an extended science introduction before the operating reference.

The pilot uses shared styles in `assets/css/style.scss`, but their presence is not approval to convert other instrument pages. The note in [instruments/readme.md](../instruments/readme.md#standard-page-order) identifies the exception. Reviewed Quick Guides and trainer materials retain their separate source contracts and review gates; reorganizing FTIR did not approve any draft guide.

### Instrument Finder Boundaries

The existing stacked list, all prior instrument destinations, and all seven heading anchors were retained. The Phenom XL appears under imaging and elemental identification because it serves both purposes. Fluorescence remains staff-guided; the particle-size description notes that analyzed powder is not recovered. Model names remain normal-size secondary text: a trial of `<small>` was discarded because the theme made them difficult to read.

## Comparable Before And After Counts

The original review's counts remain a historical baseline. The table below applies the same original counting method to the final generated pages at production commit `97b5c9ff78b318a827f840b1f6bb50c13170dd7e`, after the calendar notice was removed.

| Main-content measure | Before today's changes | Published result |
| --- | ---: | ---: |
| Get Trained | 872 | 318 |
| Calendar | 376 | 312 |
| FTIR entire page | 3,275 | 3,043 |
| FTIR before the SOP | 1,012 | 184 |
| Find an Instrument | 230 | 291 |

Count rendered main-content text, including headings, lists, tables, and captions; exclude navigation/footer, scripts/styles, explicitly hidden content, external embeds, PDFs, and text in images. The original tokenizer counts letter/number/underscore or µ sequences and retains internal apostrophes and hyphens; it does not count standalone punctuation. For reproducibility, its Python regex was `r"[\wµ]+(?:['’−-][\wµ]+)*"`. For pre-SOP counts, stop at the `sop` heading.

Progress replies sometimes used simple whitespace counts at intermediate stages: the training pathway went from 511 to 117 words, FTIR pre-SOP text from 1,007 to 185, and the finder from 227 to 302. Those figures use a different method, and the whole training-page comparison preceded the final notice removal. Use the consistent table above for future baseline comparisons. The finder intentionally gained a little text to explain usefulness; the FTIR improvement chiefly reduces reading before action rather than deleting its reference material.

## Best Next Work

Start with any feedback the owner brings, keeping the instrument-renovation pause in effect. If continuing non-instrument copy work, **Reserve Time is the clearest next candidate**: put individual instrument booking first and move the substantial whole-lab/lounge request material below it or behind a short contextual link to its authoritative procedure. This is a recommendation, not a change already made.

After that, simplify Get Help's access/files explanations, consolidate Teach With Us planning and repeated whole-lab guidance, and consider a shorter homepage opening with location/hours visible earlier. Preserve the instructor partnership summary and useful scientific limits. Treat the original review's word targets as editing aids, not limits on safety or reference content.

The cross-site queue records unresolved decisions: charges/consumables, access-processing expectations, accessible arrival/accommodations, and what supervised course participants may do before independent-use training. Obtain actual policy from the operational owner before writing those answers. It also tracks draft Quick Guide labels, public editorial to-do text, and reusable course/sample examples. Do not treat an absence found in the review as proof of a policy or a completed remediation.

## Files And Validation

| Area | Main sources |
| --- | --- |
| Shared navigation | `_layouts/default.html`, `assets/js/site-navigation.js`, `assets/css/style.scss`; destinations remain in `_data/navigation.yml` |
| Training/calendar | `training.md`, `calendar.md`, `_includes/breakerspace-calendar.html` |
| FTIR pilot | `instruments/ftir.md`, pilot styles in `assets/css/style.scss`, exception in `instruments/readme.md` |
| Instrument finder | `instruments/index.md` |
| Planning and history | This handoff, the archived review, `_staff/site-todo.md`, `instruments/staff-todo.md` |

Validation already completed: Jekyll builds, internal links/HTML, site quality and applicable SOP checks, accessibility checks, representative phone/desktop inspection, and live deployment verification. The finder was checked at 320, 390, and 1280 pixels without horizontal overflow. These checks do not claim complete accessibility conformance or replace feedback. No authenticated survey submissions or bookings were made as part of these revisions. Temporary preview servers were stopped.

Follow the root README's branch-and-reviewed-PR workflow for further changes, keeping releases small and preserving anchors. The remote uses the `github-mit` SSH alias; specify `--repo MIT-DMSE-Breakerspace/MIT-DMSE-Breakerspace.github.io` with GitHub CLI commands. The last public revision before this documentation handoff is `97b5c9f`. Inspect current Git status before starting; do not assume an older branch or preview process still exists.

To reverse an individual published change, make a reviewed revert of its merge commit using mainline parent 1, check subsequent dependencies, and validate before merging. Do not reset shared history. For ordinary copy adjustments, a new focused change is usually simpler.

## Suggested Starting Prompt

> Continue the Breakerspace website usability work. Read `_staff/site-revision-handoff-2026-09-17.md` and the September usability section of `_staff/site-todo.md`; consult the linked original review only as needed. Further instrument-page renovations remain paused pending feedback. Build on the published mobile, Training, FTIR pilot, and instrument-finder changes. Use incremental changes and ordinary feedback; organized user trials are not required. Discuss the next non-instrument page improvement or apply the new feedback I provide.
