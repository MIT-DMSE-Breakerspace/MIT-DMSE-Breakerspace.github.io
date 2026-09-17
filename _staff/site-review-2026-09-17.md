# Breakerspace Overall Site Review — 2026-09-17

Archived assessment from the first reply in the “Analyze website content strategy” session. The assessment below is preserved as written, including its baseline counts, sources, examples, and recommendations. It describes the site **before** the revisions in PRs #32–#37; it is not a current checklist or a new policy decision.

**For the next session, start with [the revision handoff](site-revision-handoff-2026-09-17.md).** That note records completed changes, comparable updated counts, remaining priorities, and the owner's later decisions. In particular, further instrument-page renovations are paused pending feedback, and organized user trials are not a requirement: use proportionate checks and feedback from ordinary lab use. The original suggestion to recruit users and the 20/60/20 effort allocation below are historical recommendations, not adopted requirements.

This file is staff planning material excluded from the website by its underscore-prefixed directory. It remains readable in the repository. The original session is identified by `01a0b0a9-2495-7622-b400-2dbecd100095`; the saved assessment does not require that session to be reopened.

---

**The project has a sound overall structure and substantial useful content. Its next phase should focus on making that content easier to enter, scan, and use.** I would retain the task-based organization, make a few shared decisions about presentation, and then direct most effort toward targeted editing and completing the shorter operational references.

The feedback about wordiness is justified. Much of the burden comes from repeated explanations, information appearing before it is needed, and several audiences sharing the same reading path.

I reviewed the live site, its matching project content, all 12 main navigation destinations, the 11 instrument operating pages, and supporting guides and examples. I also inspected representative desktop and phone layouts. I made no changes to the website or project. This is an editorial and usability assessment; I did not conduct student task tests or complete authenticated registration and booking transactions.

**The strongest parts are worth preserving.** The site covers the undergraduate journey well: discovering capabilities, training, booking, safe operation, getting help, and managing results. Its language welcomes students with questions, acknowledges uncertainty, and explains what measurements can and cannot establish. The instructor page communicates meaningful collaboration options and responsibilities. Separate operating pages for the two SEMs also appropriately preserve equipment-specific distinctions.

The highest-value changes I would consider are these:

1. **Give immediate student needs more prominence, especially on phones.**

   The 12 navigation items currently have nearly equal visual weight. On a 390 × 844 phone viewport, the header and full navigation occupy about 550 pixels; the homepage’s first task choices begin below the first screen. Location and hours appear around the fourth screen.

   A compact mobile navigation, a prominent location/hours summary, and clearer emphasis on training, instrument use, reservations, and help would improve every visit. Keep “Teach With Us” readily visible as a distinct audience route. Data Tools, Sample Library, and institutional background can have secondary visual prominence.

   The homepage’s roughly 500 words are therefore only part of its length problem: layout and ordering substantially increase the distance to basic answers.

2. **Make the instrument-page template support different reading purposes more clearly.**

   The pages already provide useful jump links. However, nine of the 11 operating pages place approximately **750–1,010 words before the operating procedure**. Their educational introductions commonly run 600–820 words.

   For example, FTIR’s “What This Instrument Shows You” section contains about 820 words, while its operating procedure contains about 290. Both have value, but a returning user should encounter a very obvious route to operating instructions, sample limits, and troubleshooting.

   I would establish a consistent opening structure: a brief capability summary, essential actions, and clear routes into operation, learning, and troubleshooting. Retain the deeper science and interpretation material in clearly identified reference sections. This shared decision would improve all instrument pages more efficiently than editing each independently.

3. **Give shared policies one authoritative home and shorten their summaries elsewhere.**

   Whole-lab reservations, training/access administration, sample approval, and support channels recur across multiple pages. Some repetition is necessary, especially for safety at the point of use. Full administrative explanations rarely need repeating.

   On [Reserve Time](https://breakerspace.mit.edu/reservations.html), whole-lab and lounge reservations occupy about **279 words—one-third of the page—and precede “Before You Book” and “How To Book.”** That is a substantial diversion for the primary user reserving one instrument.

   The instructor page similarly explains whole-lab requests in both Quick Actions and Planning. A short contextual summary linked to one complete procedure would reduce reading and future maintenance.

4. **Complete the shorter reference path and make publication status clearer.**

   **Ten of the 11 linked Quick Guides currently display “Provisional composition draft — incomplete.”** FTIR is identified as the current production guide; the others remain at varying stages of review.

   The instrument pages nevertheless present a prominent “Quick Guide” button without indicating that status before the click. This creates a mismatch between the offered shortcut and the destination.

   Finishing and validating these guides—prioritized by actual instrument demand—is likely to provide substantial day-to-day value. In the meantime, students should be able to distinguish a reviewed operating aid from a document published for staff feedback.

**The word counts show that length is concentrated rather than uniform.** These approximate counts include main-content headings, lists, tables, and captions. They exclude repeated site navigation/footer text, embedded calendars and applications, PDFs, and text inside images.

| Main navigation page | Words | Assessment |
|---|---:|---|
| Safety & Lab Use | 1,910 | Substantial reference; improve retrieval while preserving necessary guidance |
| Teach With Us | 1,531 | Strong content; significant opportunity to consolidate and layer |
| Get Help | 1,164 | Useful coverage; administrative explanations add avoidable burden |
| Get Trained | 872 | Long for a recurring onboarding task |
| Reserve Time | 837 | Main opportunity is audience separation and ordering |
| About | 591 | Reasonable, with repeated mission and course descriptions |
| Use the Lounge | 527 | Reasonable; photographs add considerable scroll length |
| Start Here | 508 | Could be shorter; first-screen priorities matter more |
| Data Tools | 425 | Manageable; some hosting information could be reduced |
| Calendar | 376 | Manageable; availability distinctions are explained repeatedly |
| Find an Instrument | 230 | Short, but could provide more help choosing |
| Sample Library | 225 | Short; collection breadth matters more than copy length |

These pages total approximately **9,200 words**, with a median of **559 words**.

| Instrument operating page | Words |
|---|---:|
| Instron | 6,166 |
| Duetta absorbance/fluorescence | 3,990 |
| Raman | 3,772 |
| XRD | 3,748 |
| Hardness tester | 3,657 |
| Ion mill | 3,596 |
| FTIR | 3,275 |
| Phenom XL | 2,990 |
| Phenom Pure | 2,898 |
| Optical microscope | 2,607 |
| Particle size analyzer | 2,223 |

The instrument pages total approximately **38,900 words**, with a median of **3,596**. The separate SEM hub adds about 2,338 words. Quick Guides range from approximately 684–1,105 words; the Coffee Matters course page contains 1,179.

A useful diagnostic: only **five of the 179 prose paragraphs on the main navigation pages exceed 70 words**. That is not a formal quality threshold, and it excludes table cells and list items, but it suggests that the complaint extends beyond unusually long paragraphs. Many individually reasonable passages accumulate into too much reading.

**Best practice does not establish a universal maximum page length.** [GOV.UK’s current writing guidance](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) explicitly says there is no minimum or maximum overall length, recommends paragraphs of no more than five sentences, and suggests reviewing sentences longer than 25 words. Its [structural guidance](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/) emphasizes putting important information first and avoiding repeated summaries. [Nielsen Norman Group’s research](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) likewise supports concise, scannable writing.

For this site, I would use **editorial starting targets**, subject to testing:

- Roughly **200–350 words for routing pages**, such as the homepage.
- Roughly **300–700 words for a straightforward task page**, with exceptions clearly separated.
- A concise instructor overview followed by optional planning detail and examples.
- No arbitrary cap on complete operating manuals or necessary safety guidance.

A 6,000-word manual can serve users well when they can locate a particular answer quickly. Conversely, a 230-word instrument catalog can still leave a novice unsure which instrument to choose.

**The clearest oversharing involves internal administration and explanations of the website itself.** Specific examples:

- **Help: internal computing details.** The [Files and Data section](https://breakerspace.mit.edu/resources.html#files-and-data) explains that the server periodically reboots and Dropbox may wait for an administrator to log in. The useful student instruction is to contact staff if saved files do not appear in Dropbox. The implementation history contributes little to that action. The shared-folder privacy warning, however, is useful and should remain.

- **Training: repeated access administration.** Dropbox account creation and team approval appear in preparation, access confirmation, and Help. Students need a short checklist describing what they must do, what staff will do, and when to request help. Moira-group mechanics can largely live in staff documentation.

- **Repeated descriptions of page contents.** Phrases such as “This page combines the quick reference, detailed training notes, reservation link, manuals, and exercises” recur across instrument pages. The headings and links already communicate that. The homepage’s paragraph explaining how to choose a situation can also be shortened or removed without losing a task.

- **Public editorial work in progress.** The [pumpkin showcase](https://breakerspace.mit.edu/showcases/pumpkin-strength-to-weight.html), linked from About, opens by explaining that it is testing a proposed content model and ends with a substantial “Completing This Showcase” work list. That material is useful for authors. A visitor primarily needs the observed activity, available evidence, and scientific limitations. The [Instron page](https://breakerspace.mit.edu/instruments/instron.html) also exposes a staff-media-checklist promise for an annotated curve.

An example of the scale of possible editing: the 78-word tap-access troubleshooting paragraph could communicate its user action in about 30 words: “If you completed the online training record but still lack lab access, email us from your MIT address with your name and the approximate date of your first training.”

**The remaining gaps are mostly practical answers and concrete examples, rather than missing major sections.**

- **Cost and eligibility details.** I did not find an explicit statement about charges for student use, training, consumables, or course activities. State the actual arrangement, including any exceptions. Even if everything relevant is free, visitors benefit from knowing that.

- **Expected access timing.** Lounge access has a stated two-business-day expectation. Lab tap access and other onboarding approvals lack similarly clear expectations or escalation timing. This leaves students unable to distinguish normal processing from a problem.

- **Physical arrival and accommodations.** The room and entry route are described, but I did not find a lab-specific accessible arrival route or guidance for arranging accommodations. A labeled arrival image or map would help first-time visitors. The Safety page would also benefit from a reviewed visual showing emergency equipment and the exit route.

- **Choosing an instrument without knowing the terminology.** The catalog groups tools sensibly, but its links lead with manufacturer and model names. A small question-to-method comparison—identify a plastic, inspect a fracture, compare hardness, measure particle size—would better fulfill the promise that students can start with a materials question. The existing SEM chooser demonstrates this approach within one instrument family.

- **Supervised course participation.** Teaching describes supervised visits and guided modules; Safety says guests may observe but may not operate or control instruments. Clarify how supervised course participants fit those categories, including what they may handle before completing independent-use training. This is a policy clarification for staff to settle before copy editing.

- **Finished, reusable teaching evidence.** The course examples are persuasive descriptions, but an instructor would also benefit from one or two complete examples showing the learning objective, session duration, group size, preparation, staffing, and student output. Likewise, the Sample Library currently has five records. A modest set of well-chosen examples, including annotated results, would be more useful than expanding introductory prose.

I would preserve the teaching page’s opening partnership summary; it is one of the clearest examples of effective presentation already on the site. Its later Quick Actions and planning sections can be consolidated around that opening.

**I would direct the next work cycle roughly 20% toward shared decisions, 60% toward targeted implementation, and 20% toward validation.** That is a suggested allocation, not a measured requirement.

The shared decisions should be bounded: first-screen priorities, instrument-page order, authoritative locations for shared policies, and how draft resources appear to students. Then concentrate edits on the homepage/mobile navigation, Training, Reservations, Help, and Teaching, while completing the most-used Quick Guides.

Validate the results with a few new undergraduates, returning users, and instructors performing realistic tasks: find training, recover missing access, locate an operating step, choose an instrument, and plan a class visit. Measure whether they succeed and where they hesitate. That evidence will make subsequent page edits more focused than pursuing a uniform percentage reduction in words.
