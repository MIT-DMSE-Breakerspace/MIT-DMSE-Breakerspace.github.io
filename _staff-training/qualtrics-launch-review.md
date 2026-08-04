# Qualtrics Review For Website Launch

The Qualtrics onboarding survey is coordinated with the active site at `breakerspace.mit.edu`. The redesigned website and revised survey were released together on July 24, 2026 so new users are not sent between incompatible versions.

Survey: <https://mit.co1.qualtrics.com/jfe/form/SV_084N36wCErKsgjc>

## Production Status

The production site now has stable task pages for instrument selection, training, reservations, safety, help and support, lounge use, and teaching. The public training page describes the one-time Qualtrics record as one part of training, followed by an in-person instrument session. It also documents trainer-managed Moira access and separately processed physical tap access.

The survey was updated before the production release, and its new flow and validations were reported working as expected. Keep the remaining checklist items below open until their notification, retention, response-handling, and live-path details have been explicitly verified.

The remaining operating decisions were resolved July 23, 2026. The final manual guide now specifies nine-digit MIT ID handling, access-ready response filtering, a no-PII staff notification, 30-day deletion of unfinished responses, duplicate handling, restricted response access, need-based retention with annual review, and use of the custom completion page without an email receipt.

## Completed Survey Audit

The QSF exported on July 15, 2026 has now been fully extracted and reviewed. Make the revision from the [Qualtrics Manual Editing Guide](qualtrics-manual-edit-guide.md). See [Qualtrics Survey Audit And Revision Plan](qualtrics-survey-audit.md) for the current question order, response fields, validation, survey settings, and rationale.

The export is valid JSON and the active survey contains 16 question elements in seven displayed blocks. Nine elements are instructional text, six are multiple-choice questions, and one is a three-field tap-access form. The survey has no branch or display logic. It is public and unindexed, allows save-and-continue, has no progress indicator, and stores partial responses after one week.

Highest-priority updates:

* Require respondents to review the current Safety And Lab Use page and record an explicit acknowledgment before `ACCESS_READY` can be set to `1`.
* Replace the retired `/sop.html` tutorial index with the new instrument catalog and integrated instrument pages.
* Direct users to `/training.html` for the current training pathway and `/calendar.html` for the Breakerspace calendar.
* Replace old "tutorial" terminology with the final language used by the new site.
* Update the description of instrument-page organization to match the two-speed model: concise trained-user reference plus detailed learning guidance.
* Remove the claim that staff hours appear on the homepage unless that calendar returns before launch.
* Correct "paper cheet sheets" to "paper cheat sheets" or remove the reference if printed copies are no longer maintained.
* Retire both optical-microscope knowledge checks. Replace them with durable scenario checks about independent-use eligibility, unexpected instrument behavior, and uncertain samples.
* Confirm that Slack links use the intended workspace and `#breakerspace-help` destination, and explain that the trainer sends the invitation during training closeout.
* Present Dropbox as an optional convenience rather than an onboarding gate. Use fresh Yes/No questions and simple forward skip logic: existing account holders skip optional enrollment information; existing team members or people who already requested membership skip optional team-request information. Neither No answer blocks completion or access.
* Explain that instrument trainers add trainees to the appropriate Moira group after the in-person session.
* Explain that the lab manager processes physical tap access after the one-time Qualtrics record is complete.
* Confirm that the survey identifies the Breakerspace instrument lab as Building 8, Room 8-102A, entered through the Breakerspace Lounge, wherever arrival information is needed.
* Add a specific completion message explaining that the online record does not itself authorize independent instrument use.
* Add a short privacy and operational-use notice for the name, Kerberos username, and MIT ID number collected for tap access.
* Change MIT ID validation from a generic number to a nine-character text pattern so a leading zero cannot be lost.
* Delete responses that remain unfinished for 30 days and clean up existing unfinished records only after exporting the current response data.
* Notify `dmse-breakerspace@mit.edu` when a response is access-ready without putting names, MIT IDs, response reports, or other survey answers in email.
* Leave MIT authentication out of the launch revision because the public, unindexed survey has not received inappropriate responses during its first year. Evaluate SSO later as optional hardening with the MIT Qualtrics brand administrator.

## Recommended Survey Structure

1. Welcome, audience, location, and what the online record does and does not accomplish.
2. Training pathway and how instrument pages support preparation and trained operation.
3. Safe response to uncertain samples, unexpected behavior, damage, spills, and other problems.
4. Files, self-service Dropbox enrollment and membership, workstation access, Slack, and support channels.
5. Stable lab-wide rules and acknowledgment.
6. MIT role and information required for physical tap access.
7. Completion message with in-person training, Moira, tap-access, Dropbox-request, and Slack-invitation next steps.

Retain three short, required knowledge checks: completing the survey does not authorize independent use; a trained user who forgets a routine step should use the instrument page rather than guess; and unexpected instrument behavior requires stopping and asking for help. Give explanatory feedback. Instrument-specific training should then require participants to locate that instrument's SOP, detailed guidance, and common failure modes in context.

The exact question text, choices, data export tags, custom-validation messages, placement, and test paths are ready in [qualtrics-manual-edit-guide.md](qualtrics-manual-edit-guide.md#implementing-the-three-knowledge-checks).

## Preferred Production Editing Strategy

Preserve the current survey ID and public link by making the approved changes as an unpublished draft in the existing Qualtrics survey. A copied project receives a different survey ID and cannot be converted back to the production ID; importing its QSF also creates a new project. First export the current responses and QSF and confirm that the original survey shows **Published**, not legacy **Changes Live**. Build and Preview the original draft without publishing. Afterward, export the current-draft QSF and import it as a release candidate for the limited live-link tests that Preview cannot perform. Apply any findings to the original draft and publish the original in the website launch window.

The current responses have been fully exported, and changes to their presentation inside Qualtrics have been accepted as operationally and administratively inconsequential. Retire replaced questions by deleting them into Qualtrics' restorable Trash / Unused Questions container, but do not permanently empty the Trash during the revision. Delete QID2 into Trash rather than changing its validation in place; add new, separately tagged full-name, Kerberos, and MIT ID questions, with the new MIT ID field using the confirmed nine-digit text pattern.

## Coordinated Launch Checklist

* [x] Final production URLs and page anchors are stable.
* [ ] Every survey link has been updated and tested against the production site.
* [ ] Survey language matches the published training, resources, safety, and access policies.
* [ ] Required questions and display logic have been reviewed.
* [ ] The 30-day unfinished-response deletion setting and one-time cleanup of exported unfinished records have been verified.
* [ ] The access-ready staff notification sends no personal data or response report and does not fire on non-ready or unfinished paths.
* [ ] A complete clean test response has been submitted and checked.
* [ ] Tap-access information arrives in the format needed by the lab manager.
* [ ] Moira and Slack closeout responsibilities are clear to instrument trainers.
* [x] The active survey and redesigned website are released in the same window.
* [x] Old website links resolve to their intended production destinations through redirects.
