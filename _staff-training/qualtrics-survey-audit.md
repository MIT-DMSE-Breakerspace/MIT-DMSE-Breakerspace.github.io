# Qualtrics Survey Audit And Revision Plan

This document is a complete content and structure review of the active **DMSE Breakerspace Lab intro** survey. It supports a manual revision of the existing Qualtrics survey so the current survey ID and public link can remain in use.

Use [Qualtrics Manual Editing Guide](qualtrics-manual-edit-guide.md) as the canonical copy deck while working in Qualtrics. This audit remains the rationale and source-survey record.

Source reviewed: `assets/survey/DMSE_Breakerspace_Lab_intro.qsf`

Export reviewed: July 15, 2026  
SHA-256: `60edd66fad9fcd1faf74973ce17ac7d550044546ccdc408386bc0760af4f902d`

The source QSF was not modified. Local `.qsf` files under `assets/survey/` are excluded from Git and the Jekyll build because they contain internal survey metadata and are working exports rather than public website assets.

## Executive Recommendation

Keep the survey as a short, one-time Breakerspace onboarding and access record. Revise the active survey manually in Qualtrics after testing the new flow in a copy. This preserves the existing public link while allowing the production website and survey to change together.

The revised survey should:

* Explain that the online record is required once but does not replace instrument-specific in-person training.
* Teach the few decisions every lab user must make correctly: do not operate before training, stop when equipment behaves unexpectedly, and ask before bringing an uncertain sample.
* Point to current website pages instead of testing a numbered step on one instrument.
* Collect only the information required for onboarding and tap access.
* Give staff a completed-response record that is easy to act on.
* End with an explicit account of what happens next.

Do not import a hand-edited QSF as the production replacement. Qualtrics imports a QSF as a new survey, which would create a new survey ID and public link. An edited QSF may be useful as an experimental draft, but Qualtrics does not officially support hand-editing QSF contents.

## Current Survey At A Glance

| Property | Current value | Assessment |
| --- | --- | --- |
| Status | Active | Preserve the current survey and link. |
| Survey elements | 16 questions across 7 displayed blocks | Longer and more fragmented than the amount of required content warrants. |
| Instructional elements | 9 descriptive-text questions | Several duplicate information now maintained more accurately on the website. |
| Response elements | 6 multiple-choice questions and 1 three-field form | The operational record is small and can remain small. |
| Branch/display logic | None | Dropbox instructions appear for everyone regardless of their answer. |
| Protection | Public survey; no duplicate-response prevention | No inappropriate responses have been observed during the survey's first year. Keep this configuration for launch and evaluate MIT SSO later as optional hardening. |
| Search indexing | Disabled | Appropriate. |
| Save and continue | Enabled | Reasonable, though it should be tested with MIT users and assistive technology. |
| Back button | Disabled | Enable it so users can review and correct entries. |
| Progress indicator | None | Add a simple progress bar after shortening the flow. |
| Partial responses | Recorded after one week | Staff workflows must use completed responses only. Review whether partial records are needed. |
| Completion message | Default Qualtrics message | Replace with Breakerspace-specific next steps. |
| Browser title and metadata | Generic Qualtrics language | Replace with a descriptive Breakerspace title and description. |

## Current Flow And Questions

Block boundaries and explicit page breaks create the sequence below. Question IDs are retained here to support manual editing and historical-response review.

### 1. Intro

**QID1, display text:** Welcomes users and says the survey covers tutorials, SOPs, Dropbox, Slack, policies, and tap-access information.

Assessment:

* Correctly says completion is required once before the first in-lab instrument training.
* Does not clearly say the survey is not instrument training and does not authorize independent use.
* Uses outdated tutorial terminology and does not clearly distinguish the trainee-managed Dropbox request from the staff-sent Slack invitation.
* Uses yellow highlighting as emphasis and asks users to "please finish" instead of explaining the operational consequence of an incomplete response.

### 2. Seeking Help

**QID14, display text:** Lists tutorials/SOPs, manufacturer manuals, paper cheat sheets, software help, Slack, email, and in-person staff.

Assessment:

* Contains the typo "cheet sheets."
* Claims a staff-hours calendar appears on the homepage; the redesigned homepage does not make that promise.
* Does not distinguish an urgent instrument problem from a general question.
* Should match the current path: stop and stabilize when necessary, ask staff in the lab, then use `#breakerspace-help` or email.

### 3. Tutorials And SOPs

**QID7, display text:** Describes the old tutorial index and a fixed tutorial-page structure.

**QID8, display text:** Explains startup, operation, and shutdown sections.

**QID9, optional multiple choice with custom validation:** Asks for the last startup step on the Olympus DSX-1000 page. The validated answer is "Move the microscope head into the tilt position."

**QID10, display text:** Describes common failure modes.

**QID11, optional multiple choice with custom validation:** Asks for the most common focusing problem on the Olympus page. The validated answer is "The microscope is in the lens exchange position and needs to be moved to the tilt position."

Assessment:

* The `/sop.html` link and fixed tutorial description are obsolete.
* Both checks are optional despite having correct-answer validation.
* Both checks depend on one instrument and on details likely to change as its guide improves.
* The educational intent is sound: students should practice finding current operating and troubleshooting information. The checks should test durable decisions rather than page archaeology.

### 4. File Management

**QID4, display text:** Describes the shared workstation drive, file server, and DMSE Breakerspace Dropbox Team.

**QID3, required yes/no:** Asks whether the user has an MIT Dropbox Enterprise account.

**QID5, display text:** Directs everyone to enroll at `dropbox.mit.edu`.

**QID12, required yes/no:** Asks whether enrollment was completed. Either answer is accepted.

**QID6, display text:** Directs everyone to find the DMSE Breakerspace Team and request to join.

**QID13, required yes/no:** Asks whether the join request was submitted. Either answer is accepted.

Assessment:

* There is no display logic, so users who already have Dropbox still receive enrollment instructions.
* Required yes/no questions record a "No" but do not provide a recovery path or affect completion.
* The self-service join process is operationally correct: students must first create their own MIT Dropbox for Business account, then request membership in the DMSE Breakerspace Team.
* Display logic should skip enrollment for existing MIT Dropbox users and show the team-request step only after an account exists.
* The shared nature of the drive and prohibition on private or sensitive data should be stated.
* Dropbox is an optional convenience, not an access prerequisite. Account and team status may be recorded for context, but an unresolved setup does not require follow-up and must not prevent submission of the safety and tap-access record.

### 5. Slack

**QID15, display text:** Describes the Slack workspace and says an invitation will arrive after training.

Assessment:

* The workspace and `#breakerspace-help` destinations should be tested from a normal user account.
* The trainer is responsible for sending the invitation to every attendee during training closeout; the revised survey and trainer guide should state this explicitly.
* Slack and email must not be presented as emergency channels.

### 6. Policies

**QID19, required yes/no with custom validation:** Lists five policies and accepts only "yes."

Current statements cover kindness, undergraduate focus, non-hazardous materials, training before use, and glove use.

Assessment:

* "I am an undergrad" prevents an accurate acknowledgment by faculty, staff, instructors, and other users who have coordinated directly with the lab.
* The material rule is too general to help users identify wet, loose, dusty, reactive, biological, vacuum-sensitive, magnetic, sharp, heavy, or unknown samples that require advance discussion.
* The list omits guests, credential sharing, food and drink, cleanup, reservations, problem reporting, and task-specific PPE.
* A one-time survey should acknowledge stable principles and link to the maintained Safety and Reservations pages rather than duplicate every detailed policy.
* The lowercase "yes" and absent validation message make the interaction look unfinished and provide poor guidance to someone who cannot agree.

### 7. Tap Access Information

**QID2, required text-entry form:** Collects name, MIT Kerberos username, and MIT ID number.

Assessment:

* These are the only fields currently used for physical tap access and should remain together.
* MIT ID uses generic numeric validation. Store it as a nine-character text identifier so a leading zero cannot be lost and require exactly nine digits after staff confirm the expected format.
* Add a short notice describing why the information is collected, who uses it, and the applicable retention or deletion practice.
* Add MIT role/status so staff can distinguish undergraduate public-training users from directly coordinated instructors, faculty, staff, or other MIT users.
* MIT authentication could reduce typos and unrelated submissions, but the public, unindexed survey has not received inappropriate responses during its first year. Authentication is therefore optional later hardening rather than a launch dependency.

## Proposed Revised Flow

Aim for six short pages and approximately five minutes. Use a simple progress bar, allow users to go back, and keep each page focused on one decision.

### Role Of Knowledge Checks

Do not reduce the survey to policy acknowledgment and identity fields alone. Acknowledgment is operationally useful, but it mostly establishes that a person clicked through; it does not give the learner practice recognizing the correct action. Retain a very small set of active questions, with immediate explanatory feedback, to make the most important decisions more memorable.

The survey is not an instrument competency test. Use exactly three durable checks:

1. Completing the online record does not authorize independent instrument operation.
2. A trained user who forgets a routine step should consult the concise SOP on the relevant instrument page rather than guess.
3. Unexpected instrument behavior requires the user to stop, stabilize the instrument only when safe and familiar, and ask for help.

Do not ask users to retrieve a numbered step or fact from one particular instrument. Instrument-specific resource practice belongs in the in-person training: every participant should locate that instrument's SOP, detailed operating guidance, and common failure modes before the session closes.

### Page 1: Welcome And Scope

Suggested content:

> Complete this one-time online onboarding and access record before your first in-person Breakerspace instrument training. It introduces the lab-wide rules and support resources that apply across instruments and collects the information needed for physical tap access.
>
> Completing this record does not train you to use an instrument. You may operate an instrument independently only after attending its in-person training. Public training sessions currently prioritize MIT undergraduates; faculty, staff, instructors, and other MIT community members should coordinate with the Breakerspace team directly.
>
> The instrument lab is in Building 8, Room 8-102A, entered through the Breakerspace Lounge.

Include visible links to the production Training and Safety pages. Avoid opening with a requirement to leave the survey and complete several external account tasks.

### Page 2: Training And Instrument Guides

Suggested content:

> Choose an instrument based on the question you want to answer and the sample you need to examine. Each instrument page explains what the instrument can show, sample compatibility, training and reservation links, a concise operating reference for trained users, and more detailed guidance for learning and troubleshooting.
>
> Written guidance supports in-person training; it does not replace it.

Recommended required check:

**After completing only this online record, may you operate a Breakerspace instrument independently?**

* No. I must also complete the in-person training for that instrument. **Correct**
* Yes, if I follow the written guide carefully.
* Yes, if a trained user logs in for me.

Use a clear corrective message that explains the rule and links to Training rather than merely saying an answer is wrong.

Recommended required resource check:

**You have completed training on an instrument but cannot remember part of its routine startup or shutdown sequence. What should you do?**

* Open the relevant instrument page and follow its concise SOP; ask Breakerspace staff if the correct step remains unclear. **Correct**
* Use the sequence from a different instrument because lab startup procedures are generally interchangeable.
* Try the most likely control and continue if no warning appears.

Feedback should explain that the concise SOP supports routine trained use, the detailed guide supports deeper review, and the common-failure section applies only when the situation is stable and clearly matches a documented problem.

### Page 3: Samples, Problems, And Help

Suggested content:

> Ask Breakerspace staff before bringing an unusual or uncertain sample into the lab. This includes wet, loose, dusty, reactive, biological, vacuum-sensitive, strongly magnetic, sharp, unusually heavy, or unknown samples, and anything likely to leak, spill, crumble, outgas, or contaminate an instrument.
>
> If an instrument behaves unexpectedly, stop the procedure. If it is safe and you know how, leave it in a stable condition and keep others from continuing. Check a documented failure mode only when the situation is stable and clearly matches the guide. Ask staff in the lab; when no one is available, use `#breakerspace-help` or email. Use the emergency instructions for immediate danger, not Slack or email.

Recommended required scenario check:

**An instrument makes an unfamiliar sound and displays a warning you have not seen before. What should you do?**

* Stop the procedure, leave the instrument stable if that is safe and familiar, keep others from using it, and ask for help. **Correct**
* Clear the warning and repeat the last step to see whether it happens again.
* Change settings until the warning disappears.
* Let the next user determine whether the instrument is safe.

Cover uncertain samples in the lab-wide policy acknowledgment and reinforce the decision during the relevant in-person instrument training. A fourth survey question adds less value than keeping the general onboarding concise.

### Page 4: Files, Accounts, And Support

Suggested content:

> Breakerspace workstations provide a shared `Breakerspace Files` drive connected to the lab file server and Dropbox Team. Other lab users and authorized team members may be able to access files saved there. Do not use it for private or sensitive information. Know where your data will be saved before beginning a measurement.
>
> Dropbox access is trainee-managed. First create an MIT Dropbox for Business account if you do not already have one. Then, while logged in with that account, find the DMSE Breakerspace Team and request membership. Breakerspace staff approve submitted requests; trainers can help with the steps but generally should not attempt an invitation before the trainee's account exists.
>
> During training closeout, the trainer sends each attendee an invitation to the Breakerspace Slack workspace. Instrument workstation permission is separate: the trainer also adds each attendee to the relevant Moira group after the in-person session. Physical tap access is processed separately by the lab manager after this record is complete.

Retain the current Dropbox questions with the following flow:

1. Retire QID3, QID5, QID12, QID6, and QID13 into Trash / Unused Questions rather than debugging their inherited choice identities and logic.
2. Add a fresh Yes/No account-status question. **Yes** skips optional enrollment information; **No** shows how to activate MIT Dropbox and then continues.
3. Add a fresh Yes/No team-status question. **Yes** skips optional membership-request information; **No** shows how to find the DMSE Breakerspace Team and request membership, then continues.
4. State explicitly that Dropbox and team membership are optional and neither No answer blocks survey completion, training, or lab access.

### Page 5: Lab-Wide Rules And Acknowledgment

Keep the acknowledgment concise and stable. Suggested statements:

* I will use an instrument only after completing its required in-person training and will log in with my own account.
* I will not allow an untrained guest to operate or control an instrument. I will remain with guests I bring into the lab.
* I will bring only non-hazardous, compatible samples and will ask staff before bringing an unusual or uncertain sample.
* I will follow task-specific PPE instructions, use clean gloves for sample handling when required, and remove gloves before touching shared computers and controls.
* I will keep food and drink in the lounge, clean my work area, remove my samples, and return shared tools and fixtures.
* I will stop and report unexpected behavior, damage, spills, injuries, unsafe conditions, and near misses.
* I will follow the current Safety and Reservations pages and ask when the safe or correct next step is unclear.

Recommended response choices:

* I have read these rules and agree to follow them.
* I cannot agree or need clarification.

Require a response. If the second choice is selected, show contact information and end without placing the response in the tap-access processing queue.

### Page 6: Identity And Access Record

Suggested fields:

| Field | Requirement and validation |
| --- | --- |
| Name | Required. State whether this should match the MIT ID record. |
| MIT Kerberos username | Required. Ask for the username without `@mit.edu`; validate the expected character pattern. |
| MIT ID number | Required. Treat as text; after confirmation, validate exactly nine digits. |
| MIT role | Required choices: undergraduate student; graduate student; faculty/instructor; staff; other MIT affiliate. |
| Non-undergraduate coordination | Display only for non-undergraduates: confirm that the user has coordinated training with the Breakerspace team or direct them to make contact. |

Suggested privacy notice:

> The Breakerspace uses this information to maintain its onboarding record, process physical lab access, and resolve access problems. Access should be limited to staff responsible for those functions. Contact `dmse-breakerspace@mit.edu` with questions or corrections.

Before publishing, staff must confirm who can view or export responses, how long records are retained, and whether a more specific MIT privacy notice is required.

### Completion Message

Suggested content:

> Your one-time Breakerspace online onboarding record has been submitted.
>
> This submission does not authorize independent instrument use. Attend the in-person training for each instrument you plan to use. During training closeout, the trainer adds attendees to the relevant Moira group for workstation access and sends the Breakerspace Slack invitation. The lab manager processes physical tap access separately. Dropbox membership follows the self-service request introduced in this survey.
>
> If expected access is missing, use the Access and Account Problems section of the Breakerspace website or email `dmse-breakerspace@mit.edu`.

Do not promise a processing time until staff have confirmed one they can meet consistently.

## Decisions Resolved July 15, 2026

1. **Dropbox:** Use trainee-managed enrollment and membership requests. Trainers may walk users through the process, but should not spend time trying to invite someone whose MIT Dropbox for Business account may not exist.
2. **MIT role:** Coordinated non-undergraduates may use the same survey. Add a role question and a confirmation that a non-undergraduate has coordinated with the Breakerspace team.
3. **Authentication:** Keep the survey public and unindexed for launch. There has been no observed inappropriate use during its first year. Investigate MIT SSO later as optional hardening rather than introducing a new launch dependency.
4. **Slack:** The trainer sends every attendee an invitation during training closeout. Do not require Slack membership to submit the one-time online record.

## Remaining Decisions Resolved July 23, 2026

1. **MIT ID:** Collect exactly nine digits as text so a leading zero is preserved.
2. **Response handling:** The lab manager is the primary owner and a designated full-time Breakerspace staff member is the backup. Process only records with `Finished = 1` and `ACCESS_READY = 1`. Send a no-PII notification to `dmse-breakerspace@mit.edu` when one is ready. Delete unfinished responses after 30 days; the newest complete, access-ready duplicate controls current follow-up.
3. **Privacy and retention:** Limit identifiable-response access to the lab manager and designated full-time staff responsible for onboarding and access. Retain records only while operationally needed, review them at least annually, and follow MIT records and privacy requirements.
4. **Confirmation:** Use the custom completion page. Do not collect an email address solely to send a receipt.

## Safe In-Place Editing Procedure

1. Export a fresh QSF and all existing response data immediately before editing.
2. Create a Qualtrics copy of the active survey and build the proposed flow there first.
3. Keep a mapping from current question IDs to retained, retired, and new questions.
4. The current responses have been fully exported and changes to the historical Qualtrics dataset have been accepted as operationally inconsequential. Retire replaced questions by deleting them into Qualtrics' restorable Trash / Unused Questions container; do not permanently empty the Trash during the revision.
5. Delete QID2 into Trash rather than changing its validation in place. Add new IDs and descriptive export tags for full name, Kerberos username, MIT ID, role, acknowledgment, and scenario checks.
6. Implement the resolved response-handling, privacy, retention, and confirmation decisions in the manual editing guide, then test every display branch, validation message, link, notification, and completion path in Preview.
7. Submit test responses for an undergraduate, a directly coordinated non-undergraduate, a user without Dropbox, an uncertain-policy response, and an incomplete response.
8. Verify the staff-side response export, no-PII notification, and tap-access workflow using only responses with `Finished = 1` and `ACCESS_READY = 1`.
9. Test keyboard-only completion, visible focus, screen-reader labels and errors, zoom, small-screen layout, color contrast, and link behavior.
10. Apply the tested changes manually to the active survey. Use Qualtrics version history and publish in the same release window as the redesigned website.
11. Submit one clean production response, verify its staff-side handling, and export a new QSF as the post-launch baseline.

## Experimental QSF Path

A hand-edited QSF can be created later as an experiment, using the original export as input and a new filename for output. Validate the result as JSON, verify all block and question references, and import it only as a new draft survey. Compare that draft with the manually built Qualtrics copy.

Do not use an imported experimental survey as production unless the team intentionally accepts a new survey ID, updates every public link, tests all response handling, and archives the existing survey. Preserving the current public link makes the manual in-place workflow the preferred path.

## Qualtrics References

* [Import and Export Surveys](https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/import-and-export-surveys/) explains that QSF import creates a new survey and warns against editing QSF contents.
* [Testing and Editing Active Surveys](https://www.qualtrics.com/support/survey-platform/survey-module/testing-and-editing-an-active-survey/) covers publishing changes and cautions about edits that can affect collected response data.
* [Incomplete Survey Responses](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/partial-completion/) covers recording or deleting unfinished responses.
* [Email Tasks](https://www.qualtrics.com/support/survey-platform/actions-module/email-task/) covers response-triggered staff notifications.
* [Saving and Restoring](https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/saving-and-restoring/) describes Qualtrics survey versions and restoration.
* [Anonymous Link](https://www.qualtrics.com/support/survey-platform/distributions-module/web-distribution/anonymous-link/) confirms that editing and publishing the existing survey does not change its anonymous link.
* [SSO Authenticator](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/authenticator/sso-authenticator/) describes SSO options and notes that a university SSO connection requires coordination with the institution's IT or Qualtrics brand administrator.
* [Authenticator Overview](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/authenticator/authenticator-overview/) recommends disabling save-and-continue when an authenticator is used, which would need to be evaluated against the current survey configuration.
* [Test-Enhanced Learning](https://pubmed.ncbi.nlm.nih.gov/16507066/) provides evidence that active retrieval can improve longer-term retention compared with repeated study. The survey recommendation applies that principle narrowly through a few durable, feedback-rich questions rather than treating the onboarding record as a quiz.
