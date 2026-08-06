# Qualtrics Manual Editing Guide

Use this document while revising the **DMSE Breakerspace Lab intro** survey in Qualtrics. It is the canonical editing checklist and copy deck. The [survey audit](qualtrics-survey-audit.md) explains the rationale and preserves the old survey map; the [launch review](qualtrics-launch-review.md) tracks release readiness.

## Readiness

**Ready now:** Export the current responses and QSF, confirm that the original survey uses Qualtrics publishing, and build the revision as an unpublished draft in the original survey. The production-policy decisions were resolved on July 23, 2026.

**Not ready yet:** Publish the draft. It must first pass the final production-link check, accessibility test, response-export test, notification test, and the complete test matrix below. Publish in the coordinated website release window.

The working copy cannot be converted back to production survey ID `SV_084N36wCErKsgjc`, and importing its QSF would create another new survey. A complete duplicate build would therefore create unnecessary manual work. Preserve the current survey ID and public link by editing and publishing the original project. Use a copy only as a disposable sandbox or as a release candidate for tests that Preview cannot perform. Do not hand-edit a QSF.

## Before Editing

1. Export all current response data.
2. Export a fresh QSF and record its date.
3. Open the original survey and check its status at the top of the Survey editor:
   * **Published:** proceed. Survey-builder changes become a **Draft Version** and do not reach new respondents until Publish.
   * **Changes Live:** stop before editing. This legacy state sends edits live immediately. Publish the unchanged current survey once to establish a published baseline, then confirm subsequent edits create a Draft Version.
4. In **Tools → Versions**, create a named baseline version if Qualtrics permits it in the current state.
5. Verify the current question IDs and data export tags against the exported QSF before moving or revising questions. The July 15 baseline is already recorded in the survey audit and repository QSF.
6. Edit the original survey but do not click Publish. Use its full-survey **Preview** for content, logic, validation, and accessibility testing. Never use the production anonymous link for draft testing.
7. Because the current response data has been fully exported and changes to the historical Qualtrics dataset have been accepted as operationally inconsequential, retire replaced questions by deleting them into Qualtrics' **Trash / Unused Questions** container. Do not permanently empty the Trash during this revision. Create new questions when meaning or validation changes.
8. Leave immediately effective features until final cutover. These include the Back Button, project name, survey availability, scoring, recode values, base language, and changes outside the Survey tab such as Workflows.

Preview cannot create a response in progress. After the original draft passes Preview, export its current-draft QSF and import that file as a new release-candidate survey. Activate only that release candidate to test Save and Continue, unfinished-response deletion, the anonymous-link path, and the staff notification workflow. Share its link only with named testers and close it after testing. Correct any findings in the original draft, Preview again, export the original responses and QSF once more, configure the immediately effective items, and publish the original. Publishing the original does not change its anonymous link.

After preserving the response export, clean up existing unfinished records:

1. In **Data & Analysis**, filter the recorded responses for `Finished = False`.
2. Inspect the filtered records and delete the blank or unfinished responses from Qualtrics. Keep the exported baseline as the historical record of this cleanup.
3. Do not delete a suspicious blank record marked `Finished = True` merely because it looks incomplete. Investigate its survey path and fields first; an End of Survey branch can create a finished response with `ACCESS_READY = 0`.

**Trash / Unused Questions is not a normal move destination.** To retire a question, use **Delete Question** or the red minus control. Qualtrics moves it into the expandable Trash at the bottom of the Survey tab. This removes its column from the current Data & Analysis view, but the pre-edit export preserves the historical record and the question remains restorable until the Trash is permanently emptied. Do not select **Permanently Delete** or **Empty Trash** during this revision.

## Survey-Level Settings

The current Qualtrics interface divides these controls among Project actions, Survey Options, Look and Feel, individual questions, and Survey Flow. It is normal not to find them in one settings panel.

| Setting | Location | Revision |
| --- | --- | --- |
| Project name | **Projects** page → project dropdown → **Rename project** | `DMSE Breakerspace lab onboarding and access record` |
| Browser-tab display name | **Survey** → **Survey Options** → **General** → **Display name** | `DMSE Breakerspace Lab Onboarding And Access Record` |
| Protection and search indexing | **Survey** → **Survey Options** → **Security** | Keep open/public for launch and keep search indexing disabled. |
| Back button | **Survey** → **Survey Options** → **Responses** | Enable. |
| Save and continue | **Survey** → **Survey Options** → **Responses** → **Allow respondents to finish later** | Keep enabled while the survey remains unauthenticated. |
| Incomplete survey responses | **Survey** → **Survey Options** → **Responses** → **Incomplete survey responses** | Select **Delete after 30 days**. The period is measured from the respondent's last activity. |
| Progress bar | **Survey** → **Look and feel** → **General** → **Progress Bar** | Select **Without Text** and apply the change. |
| Choice randomization | Select each new knowledge-check question → **Choice randomization** | Select **No Randomization**. This is the default; if there is no randomization icon on the question, no change may be needed. |
| End messages | **Survey Flow** → the applicable **End of Survey** element → **Customize** | Configure after all questions and branches exist, using the messages below. |
| Respondent receipt | End-of-survey options and Workflows | Do not enable a thank-you email or collect an email address for a receipt. Use the custom completion message as confirmation. |

MIT SSO is not part of the launch revision. It can be evaluated later with the MIT Qualtrics brand administrator.

## Recommended Build Order

Do not work through this document from top to bottom as though every section were an immediate editing step. Use this order:

1. Complete **Before Editing** and only the settings that are held in the unpublished draft. Leave settings identified as immediately effective until final cutover.
2. Work through **Pages 1–6 linearly** in the survey editor. Rename each retained block, revise its copy, delete retired questions into **Trash / Unused Questions**, and create the new questions. Add each question's display logic, validation, export tag, and No Randomization setting as you encounter it.
3. When Page 2 calls for Checks 1 and 2 and Page 3 calls for Check 3, use **Implementing The Three Knowledge Checks** for their exact configuration, then return to the page sequence.
4. After every block, question, answer choice, and validation rule exists, build **Target Survey Flow**. Add `ACCESS_READY`, reorder the six blocks, create both early-exit branches, and configure their End of Survey messages. Building branches last is easier because their referenced questions and choices already exist.
5. Configure the normal completion message and the staff email workflow.
6. Set or verify Look and Feel, including the progress bar.
7. Run the complete Test Matrix using Preview and, for the exceptions described above, a release-candidate copy. Do not publish the original draft until testing passes.

Editing and arranging blocks in the Survey tab does not, by itself, guarantee that Survey Flow is correct. Survey Flow is a separate final assembly and logic step.

## Target Survey Flow — Build After Pages 1–6

At the beginning of Survey Flow, add embedded data named `ACCESS_READY` with a default value of `0`. Use six displayed blocks followed by the Breakerspace completion message:

1. Welcome And Scope
2. Training And Instrument Guides
3. Samples, Problems, And Help
4. Files, Accounts, And Support
5. Lab-Wide Rules
6. Identity And Access Record

After Lab-Wide Rules, branch respondents who select **I cannot agree or need clarification** to a contact message and End of Survey. After Identity And Access Record, branch respondents who cannot confirm required non-undergraduate coordination to a contact message and End of Survey. Only after those branches, set `ACCESS_READY` to `1` and show the standard completion message.

The staff-side tap-access view or export must filter for both `Finished = 1` and `ACCESS_READY = 1`. A finished response with `ACCESS_READY = 0` is a completed non-ready path, not an access request.

Recommended reuse of the existing survey:

| Current block | Revision action |
| --- | --- |
| Intro | Rename to **Welcome And Scope** and rewrite QID1. |
| SOP | Rename to **Training And Instrument Guides**. Rewrite display text, retire QID9 and QID11, and add Checks 1 and 2 as new questions. |
| Block 4 | Rename to **Samples, Problems, And Help**. Rewrite QID14 and add Check 3 as a new question. |
| File management | Rename to **Files, Accounts, And Support**. Rewrite QID4, retire the old Dropbox questions and instructions, add the simpler optional Dropbox path below, and move rewritten QID15 into this block. |
| Policies | Rename to **Lab-Wide Rules**. Delete QID19 into Trash / Unused Questions and add a new acknowledgment question. |
| Tap access info | Rename to **Identity And Access Record**. Add the new MIT-role and identity questions. Delete response-bearing QID2 into Trash / Unused Questions rather than changing its validation. |
| Slack | Move QID15 into Files, Accounts, And Support; remove the empty block from the displayed flow. |
| Trash / Unused Questions | This is Qualtrics' automatic destination for deleted questions, not a normal block. Do not permanently empty it during the revision. |

## Staff Response Handling — Configure After Survey Flow

Use the following operating model:

* The lab manager is the primary response owner. A designated full-time Breakerspace staff member is the backup.
* Limit identifiable-response access to those staff members responsible for onboarding records, physical access, and access-problem resolution. Do not grant routine response access to undergraduate employees or instrument trainers.
* Process tap access only from records where `Finished = 1` and `ACCESS_READY = 1`.
* If one person submits more than once, use the newest complete, access-ready response for current follow-up. Preserve older completed responses until they are covered by the normal retention review; do not merge values silently across submissions.
* Review identifiable records at least annually and retain them only while they are needed for onboarding, access administration, or resolving access problems, following MIT records and privacy requirements.
* Handle correction requests sent to `dmse-breakerspace@mit.edu` in the survey record or the authoritative access system, as appropriate.

Configure a Qualtrics email task or workflow for newly recorded responses with the condition `ACCESS_READY = 1`:

| Field | Configuration |
| --- | --- |
| Recipient | `dmse-breakerspace@mit.edu` |
| Subject | `Qualtrics: Breakerspace access-ready response` |
| Body | `A completed Breakerspace onboarding response is ready for access review. Open Qualtrics and use the access-ready response view.` |
| Response content | Do not include a response report, name, Kerberos username, MIT ID number, or other survey answers in the email. Include only a link to the authenticated Qualtrics project or response view. |

Test that the email is sent for the standard completion path and is not sent for either early contact path or an unfinished response. Keep the email list's membership limited to the staff who are authorized to review these records.

## Implementing The Three Knowledge Checks

All three checks use the same Qualtrics configuration:

1. Add a new **Multiple Choice** question.
2. Choose **Single Answer** and a vertical answer list.
3. Enter the data export tag listed below.
4. Select the question's **Choice randomization** control and confirm **No Randomization**. The goal is guided retrieval, not a difficult test.
5. Under **Response requirements**, add **Custom validation**.
6. Set the validation condition to the correct choice **Is Selected**. Qualtrics custom validation requires a valid response before the respondent can continue, so do not also use Request Response.
7. Create and select the check-specific validation message below.
8. Preview the blank, incorrect, corrected, Back-button, keyboard-only, and screen-reader paths.

Do not reuse QID9 or QID11. Delete them into Trash / Unused Questions and let Qualtrics assign new IDs to the durable checks.

### Check 1: Training Is Still Required

**Block:** Training And Instrument Guides  
**Data export tag:** `CHECK_TRAIN_REQUIRED`

**Question**

> After completing only this online record, may you operate a Breakerspace instrument independently?

**Choices**

1. No. I must also complete the in-person training for that instrument. **Correct**
2. Yes, if I follow the written guide carefully.
3. Yes, if a trained user logs in for me.

**Custom validation message**

> Completing this online record is required, but it does not replace instrument-specific in-person training. Select the answer that requires both steps.

### Check 2: Use The Instrument Page

**Block:** Training And Instrument Guides  
**Data export tag:** `CHECK_USE_SOP`

**Question**

> You have completed training on an instrument but cannot remember part of its routine startup or shutdown sequence. What should you do?

**Choices**

1. Open the relevant instrument page and follow its concise SOP; ask Breakerspace staff if the correct step remains unclear. **Correct**
2. Use the sequence from a different instrument because lab startup procedures are generally interchangeable.
3. Try the most likely control and continue if no warning appears.

**Custom validation message**

> Do not guess or borrow another instrument's procedure. Use the SOP on the relevant instrument page and ask staff when it does not resolve the question.

### Check 3: Stop And Ask

**Block:** Samples, Problems, And Help  
**Data export tag:** `CHECK_STOP_AND_ASK`

**Question**

> An instrument makes an unfamiliar sound and displays a warning you have not seen before. What should you do?

**Choices**

1. Stop the procedure, leave the instrument stable if that is safe and familiar, keep others from using it, and ask for help. **Correct**
2. Clear the warning and repeat the last step to see whether it happens again.
3. Change settings until the warning disappears.
4. Let the next user determine whether the instrument is safe.

**Custom validation message**

> Do not clear the warning, repeat the action, or change settings. Stop, leave the instrument stable only if that is safe and familiar, keep others from using it, and ask for help.

These questions are not evidence of instrument competence. During every in-person training, the trainer should also require participants to locate that instrument's SOP, detailed operating guidance, and common failure modes.

## Page 1: Welcome And Scope

Rewrite QID1 as display text:

> ## Welcome To The DMSE Breakerspace
>
> Complete this one-time online onboarding and access record before your first in-person Breakerspace instrument training. It introduces the lab-wide rules and support resources that apply across instruments and collects the information needed for physical tap access.
>
> Before continuing, review the [Breakerspace Safety And Lab Use page](https://breakerspace.mit.edu/safety.html). This survey records your acknowledgment of those lab-wide rules.
>
> Completing this record does not train you to use an instrument. You may operate an instrument independently only after attending its in-person training. See [Training And Access](https://breakerspace.mit.edu/training.html). Public training sessions currently prioritize MIT undergraduates; faculty, staff, instructors, and other MIT community members should coordinate with the Breakerspace team directly.
>
> The instrument lab is in Building 8, Room 8-102A, entered through the Breakerspace Lounge.

Keep both links visible and descriptive. Open them in the same browser tab unless testing identifies a clear need for a new tab.

## Page 2: Training And Instrument Guides

Rewrite the current display text in the SOP block. QID7 and QID8 may be combined or reused because neither carries response data:

> ## Training And Instrument Guides
>
> Choose an instrument based on the question you want to answer and the sample you need to examine. Each instrument page explains what the instrument can show, sample compatibility, training and reservation links, a concise SOP for routine trained use, and more detailed operating and troubleshooting guidance.
>
> Written guidance supports in-person training; it does not replace it. Use the concise SOP when you need a routine startup, operation, or shutdown reminder. Use the detailed guide when you need deeper context. Use a documented common failure mode only when the instrument is stable and the situation clearly matches the guide.
>
> Browse the [Breakerspace instrument catalog](https://breakerspace.mit.edu/instruments/) to find the relevant instrument page.

Place Checks 1 and 2 after this text. Delete QID9 and QID11 into Trash / Unused Questions. Delete QID10 into Trash as well if its content has been incorporated into the revised display text.

## Page 3: Samples, Problems, And Help

Rewrite QID14 as display text:

> ## Samples, Problems, And Help
>
> Ask Breakerspace staff before bringing an unusual or uncertain sample into the lab. This includes wet, loose, dusty, reactive, biological, vacuum-sensitive, strongly magnetic, sharp, unusually heavy, or unknown samples, and anything likely to leak, spill, crumble, outgas, or contaminate an instrument.
>
> If an instrument behaves unexpectedly, stop the procedure. If it is safe and you know how, leave it in a stable condition and keep others from continuing. Check a documented failure mode only when the situation is stable and clearly matches the guide.
>
> Ask staff in the lab when someone is available. Otherwise, use `#breakerspace-help` in the Breakerspace Slack workspace or email `dmse-breakerspace@mit.edu`. For immediate danger, follow the [Breakerspace emergency instructions](https://breakerspace.mit.edu/safety.html#emergency-or-immediate-danger) rather than using Slack or email.

Place Check 3 after this text.

## Page 4: Files, Accounts, And Support

Rewrite QID4 as display text:

> ## Files And Dropbox
>
> Breakerspace workstations provide a shared `Breakerspace Files` drive connected to the lab file server and DMSE Breakerspace Dropbox Team. Other lab users and authorized team members may be able to access files saved there. Do not use it for private or sensitive information. Know where your data will be saved before beginning a measurement.
>
> Dropbox access is trainee-managed. First create an MIT Dropbox for Business account if you do not already have one. Then, while logged in with that account, find the DMSE Breakerspace Team and request membership. Breakerspace staff approve submitted requests; trainers can help with the steps but generally should not attempt an invitation before the trainee's account exists.

Configure the current Dropbox questions as follows:

1. Delete QID3, QID5, QID12, QID6, and QID13 into Trash / Unused Questions. The old retained choice identities and logic are not worth debugging, and the pre-edit response export preserves their historical data.
2. Add a required single-answer Yes/No question with data export tag `DROPBOX_ACCOUNT`:

   > Do you already have an MIT Dropbox for Business account associated with your MIT email address?

3. Immediately after it, add Text / Graphic content:

   > ## Optional MIT Dropbox Setup
   >
   > MIT Dropbox is optional. It is not required to complete this onboarding record or receive Breakerspace access. Many users find it helpful because files saved through `Breakerspace Files` can be synced to their MIT Dropbox.
   >
   > If you would like to set it up, visit [dropbox.mit.edu](https://dropbox.mit.edu) to create or activate your MIT Dropbox for Business account. You may also do this later.

4. On `DROPBOX_ACCOUNT`, add Skip Logic: when **Yes** is selected, skip to the `DROPBOX_TEAM` question below. When **No** is selected, use the normal next-question path so the optional setup text appears.
5. Add a required single-answer Yes/No question with data export tag `DROPBOX_TEAM`:

   > Are you already a member of, or have you requested to join, the DMSE Breakerspace Dropbox Team?

6. Immediately after it, add Text / Graphic content:

   > ## Optional Breakerspace Dropbox Team Access
   >
   > Team membership is optional and a **No** answer does not block survey completion or lab access. If you would like files from the Breakerspace file system synced to your MIT Dropbox, first make sure your MIT Dropbox for Business account is active. Then visit [Dropbox Teams](https://www.dropbox.com/team), find the **DMSE Breakerspace Team**, and select **Ask to join**.
   >
   > Breakerspace staff normally approve submitted requests within one business day. If you cannot find or request the team, email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu). You may complete these steps later.

7. On `DROPBOX_TEAM`, add Skip Logic: when **Yes** is selected, skip to **Slack And Workstation Access** below. When **No** is selected, use the normal next-question path so the optional team-access text appears.

Neither No answer is an error and neither path requires Dropbox enrollment, team membership, or staff follow-up before submission.

Move QID15 into this block and rewrite it as display text:

> ## Slack And Workstation Access
>
> During training closeout, the trainer sends each attendee an invitation to the Breakerspace Slack workspace and adds each attendee to the relevant MIT Moira group for instrument-workstation access. Physical tap access is separate and is processed by the lab manager after this online record is complete.

## Page 5: Lab-Wide Rules

Delete QID19 into Trash / Unused Questions and add a new single-answer multiple-choice question with data export tag `ACK_LAB_RULES`.

**Question text**

> ## Breakerspace Lab-Wide Rules
>
> Review the current [Safety And Lab Use page](https://breakerspace.mit.edu/safety.html) before answering. By selecting the first response below, you confirm that you reviewed that page and agree to follow these rules:
>
> * I will use an instrument only after completing its required in-person training and will log in with my own account.
> * I will not allow an untrained guest to operate or control an instrument. I will remain with guests I bring into the lab.
> * I will bring only non-hazardous, compatible samples and will ask staff before bringing an unusual or uncertain sample.
> * I will follow task-specific PPE instructions, use clean gloves for sample handling when required, and remove gloves before touching shared computers and controls.
> * I will keep food and drink in the lounge, clean my work area, remove my samples, and return shared tools and fixtures.
> * I will stop and report unexpected behavior, damage, spills, injuries, unsafe conditions, and near misses.
> * I will follow the current Safety and [Reservations](https://breakerspace.mit.edu/reservations.html) pages and ask when the safe or correct next step is unclear.

**Choices**

1. I have reviewed the Safety And Lab Use page, read these rules, and agree to follow them.
2. I cannot agree or need clarification.

Force a response. Add a branch in Survey Flow: when choice 2 is selected, show the following message and end the survey while `ACCESS_READY` remains `0`:

> ## Contact Breakerspace Before Continuing
>
> Your response has been recorded, but it is not marked ready for access processing because you selected that you cannot agree or need clarification. Do not operate a Breakerspace instrument. Email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) with your question. After the issue is resolved, Breakerspace staff will tell you whether to submit this record again.

## Page 6: Identity And Access Record

Add a required single-answer question with data export tag `MIT_ROLE`:

> What is your current MIT role?

Choices:

1. Undergraduate student
2. Graduate student
3. Faculty or instructor
4. Staff
5. Other MIT affiliate

For every choice other than undergraduate student, display a required single-answer confirmation with data export tag `TEAM_COORDINATED`:

> Have you coordinated your Breakerspace training with the Breakerspace team?

Choices:

1. Yes, I have coordinated with the Breakerspace team.
2. No, I have not yet coordinated with the Breakerspace team.

Display the new identity questions when the role is undergraduate student or the coordination response is Yes. If the coordination response is No, show the following message and end the survey while `ACCESS_READY` remains `0`:

> ## Coordinate Training Before Access Processing
>
> Your response is not marked ready for access processing. Public Breakerspace training sessions prioritize MIT undergraduates. Email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) to coordinate your intended use and training. After coordination, return to this survey or submit it again as directed by Breakerspace staff.

Set `ACCESS_READY` to `1` only after an eligible respondent completes all three new identity questions.

Delete response-bearing QID2 into **Trash / Unused Questions** rather than changing its existing validation. Do not permanently empty the Trash; the pre-edit response export remains the historical record.

Add three required single-line Text Entry questions:

| Data export tag | Question |
| --- | --- |
| `FULL_NAME` | **Full name as it appears in MIT records** |
| `MIT_KERBEROS` | **MIT Kerberos username (without `@mit.edu`)** |
| `MIT_ID` | **9-digit MIT ID number** |

Add this notice above the new identity questions:

> The Breakerspace collects your full name, Kerberos username, MIT ID number, and MIT role to maintain the lab onboarding record, process physical access, and resolve access problems. Without complete information, physical tap access cannot be processed. Identifiable responses are available only to the lab manager and designated full-time Breakerspace staff responsible for these functions. Records are retained only as long as needed for these purposes and handled under MIT records policy. Contact [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) with questions or corrections.

For the new MIT ID question, use text-pattern validation that matches exactly nine digits: `^\d{9}$`. Use this custom error:

> Enter all nine digits of your MIT ID number, including a leading zero if present.

Confirm in Preview and the response export that a nine-digit value beginning with zero remains nine characters. Do not configure the field as a numeric value.

## Completion Message

Replace the Qualtrics default message with:

> ## Online Onboarding Submitted
>
> Your one-time Breakerspace online onboarding record has been submitted.
>
> This submission does not authorize independent instrument use. Attend the in-person training for each instrument you plan to use. During training closeout, the trainer adds attendees to the relevant Moira group for workstation access and sends the Breakerspace Slack invitation. The lab manager processes physical tap access separately. Dropbox membership follows the self-service request introduced in this survey.
>
> If expected access is missing, use [Access And Account Problems](https://breakerspace.mit.edu/resources.html#access-and-account-problems) or email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu).

Do not promise an access-processing time until staff have confirmed one they can meet consistently.

## Final Operational Decisions

These decisions were confirmed July 23, 2026:

| Topic | Decision |
| --- | --- |
| MIT ID | Collect exactly nine digits as text and preserve a leading zero. |
| Ready for processing | Require both `Finished = 1` and `ACCESS_READY = 1`. |
| Response notification | Email `dmse-breakerspace@mit.edu` when an access-ready response is recorded; keep personal data and response reports out of email. |
| Incomplete responses | Keep Save and Continue enabled and automatically delete responses that remain incomplete for 30 days. Clean up existing unfinished records after exporting them. |
| Duplicate responses | The newest complete, access-ready response controls current follow-up. |
| Response access | Lab manager plus designated full-time Breakerspace staff with an operational need. |
| Retention | Retain identifiable records only as long as operationally needed, review at least annually, and follow MIT records and privacy requirements. |
| Respondent confirmation | Use the custom completion message; do not collect email solely to send a receipt. |

## Test Matrix

Complete every path against the original draft in Preview or, where specifically noted, the activated release candidate:

| Test user/path | Expected result |
| --- | --- |
| Existing Dropbox account and team member/request submitted | Skips both optional instruction panels and continues. |
| No Dropbox account | Sees optional account setup, then reaches the team-status question; can continue without enrolling. |
| Not a team member and no request submitted | Sees optional team-access instructions and continues without being blocked. |
| Coordinated faculty/staff user | Confirms coordination and reaches identity fields. |
| Uncoordinated non-undergraduate | Receives contact path and does not enter tap-access processing. |
| Wrong answer on each knowledge check | Receives the specific explanatory message and cannot advance until corrected. |
| Safety acknowledgment | Cannot enter tap-access processing without confirming review of the Safety And Lab Use page and agreement with the lab-wide rules. |
| Policy clarification choice | Receives contact path and does not enter tap-access processing. |
| Blank required field | Receives a clear, associated error. |
| MIT ID validation | Accepts exactly nine digits, preserves a leading zero in the export, and rejects eight digits, ten digits, and non-digits. |
| Back-button navigation | Retains valid answers and does not bypass logic. |
| Keyboard and VoiceOver | Can read, answer, correct, and submit every intended path. |
| Completed response export | Contains role, three check fields, acknowledgment, Dropbox status, name, Kerberos, MIT ID, `ACCESS_READY = 1`, and Finished status. |
| Access-ready notification | Sends one no-PII email to `dmse-breakerspace@mit.edu` for an access-ready completion; the authenticated project or view link works for authorized staff. |
| Non-ready and unfinished notifications | Sends no access-ready email for either early contact branch or an unfinished response. |
| Incomplete-response deletion | Using only the activated release candidate's anonymous link, a test response left incomplete follows the 30-day deletion rule; when a test response is manually closed with deletion configured, it is deleted rather than recorded as a blank completion. Preview cannot perform this test. |
| Duplicate response | Staff view shows both completed records and uses the newest complete, access-ready response for current follow-up. |
| Response permissions | Only the lab manager and designated full-time staff can open identifiable response data. |
| Respondent confirmation | Shows the custom completion message and sends no respondent email receipt. |

After the release candidate passes this matrix, close its response collection, apply any final findings to the original draft, Preview the original again, and export the original responses and current-draft QSF. Configure immediately effective settings and the staff workflow during the cutover, publish the original, and submit one clean production response.

## Qualtrics Configuration References

* [Response Requirements And Validation](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/validation/) covers custom validation and validation messages.
* [Using Logic](https://www.qualtrics.com/support/survey-platform/survey-module/using-logic/) covers display logic, branches, and related survey behavior.
* [Incomplete Survey Responses](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/partial-completion/) covers recording or deleting unfinished responses.
* [Email Tasks](https://www.qualtrics.com/support/survey-platform/actions-module/email-task/) covers response-triggered staff notifications.
* [Testing And Editing Active Surveys](https://www.qualtrics.com/support/survey-platform/survey-module/testing-and-editing-an-active-survey/) covers previewing and publishing changes to an active survey.
* [MIT Privacy Of Personal Information](https://policies.mit.edu/policies-procedures/110-privacy-and-disclosure-personal-information/112-privacy-personal) and [MIT Records Retention](https://libraries.mit.edu/records-management/retention/) provide the Institute-level basis for restricted access, purpose-limited use, and retention review.
