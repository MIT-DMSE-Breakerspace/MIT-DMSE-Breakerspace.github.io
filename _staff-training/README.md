# Breakerspace Staff Training Guides

This directory contains staff-facing guides for delivering consistent instrument training. Jekyll does not publish this underscore-prefixed directory, and it is not linked from the public website navigation.

The repository may still be publicly readable. Do not store credentials, physical-security details, private student information, access codes, or other sensitive information here.

Cross-site launch and maintenance work is tracked in [`../_staff/site-todo.md`](../_staff/site-todo.md). Keep this directory focused on training delivery and trainer resources.

## Current Status

The public training pathway is implemented in [`../training.md`](../training.md). Pilot instrument-specific guides now exist for the optical microscope and FTIR. Both require operational-owner review, an approved training sample or kit and location, an assigned guide owner, and a practice training before they are marked ready for routine use. Their Moira groups are now confirmed. The guide template reflects the current operating model:

* Standard sessions are 60 minutes with a maximum of three participants.
* Participants may divide the Level 1 workflow, provided the trainer makes the full sequence visible and involves everyone meaningfully.
* The trainer adds attendees directly to the appropriate MIT Moira group after the session.
* The trainer sends each attendee a Breakerspace Slack invitation as part of training closeout.
* The lab manager processes physical tap access separately after the one-time Qualtrics training record is complete.
* Dropbox access is trainee-managed: the trainee creates an MIT Dropbox for Business account and requests membership in the DMSE Breakerspace Team. Trainers should help first-time users with the process when needed rather than attempting to invite an account that may not exist.
* There is currently no separate skills demonstration, training expiration, or recurring retraining requirement.

The current Qualtrics survey remains coordinated with the active production website until the redesigned site launches. Make survey changes from `qualtrics-manual-edit-guide.md`. Its release status is tracked in `qualtrics-launch-review.md`; the complete July 2026 extraction and rationale are in `qualtrics-survey-audit.md`.

## Files In This Directory

* `access-and-logistics.md` is the shared reference for Moira groups by instrument, the trainer closeout sequence, and scheduling rules. Guides link to it instead of restating these facts.
* `libcal-event-templates.md` is an archival record of the ten LibCal event templates as of 2026-07-31, kept for historical comparison. The templates are outdated and contain errors; do not use them as a content source.
* `instrument-training-template.md` is the starting point for each instrument-specific staff guide.
* `optical.md` is the pilot DSX-1000 optical-microscope curriculum and completion checklist.
* `ftir.md` is the pilot Nicolet iS5 FTIR ATR curriculum and completion checklist.
* `qualtrics-launch-review.md` tracks updates that should be coordinated with the launch of the redesigned website.
* `qualtrics-manual-edit-guide.md` is the canonical page-by-page copy deck and Qualtrics editing checklist.
* `qualtrics-survey-audit.md` inventories the current QSF and records the rationale behind the revision.
* New instrument guides should use the public instrument slug, such as `ftir.md`, `optical.md`, or `phenom-xl.md`.

## Training Guide Goals

Each guide should help different trainers deliver the same essential experience while leaving room to respond to the participants and their questions.

A complete guide should define:

* The learning goals for a standard one-hour session.
* The Level 1 exercise used during training.
* The sample-library item, sample kit, or approved training sample used for that exercise.
* Instrument setup, supplies, and trainer preparation.
* A suggested agenda for a maximum of three participants.
* Safe ways for participants to divide the workflow.
* The public operating-page sections participants should learn to use.
* Shutdown, cleanup, data-saving, and post-training access tasks.
* The exact MIT Moira group the trainer must update after the session, taken from [`access-and-logistics.md`](access-and-logistics.md).

Group names follow one rule: `dmse-brkrspc-` plus the public page slug. Every instrument has a group and the trainer adds attendees to it after every session. Two irregularities: both SEMs share `dmse-brkrspc-sem`, and the XRD, hardness tester, and ion mill are not domain-managed, so their groups are for targeted communication only and grant no access.

## Coordinating Changes

When a training workflow changes, review every related surface:

1. Public instrument overview and compatibility guidance.
2. Trained-user quick reference or SOP.
3. Detailed operating instructions.
4. Level 1 exercise.
5. Staff training guide in this directory.
6. Sample-library record, cabinet location, and replenishment needs.
7. LibCal training description, duration, and enrollment limit.
8. Moira access instructions.
9. Qualtrics onboarding language when the change affects all new users.

Changes should be written once in the most authoritative location and linked or summarized elsewhere. Avoid maintaining competing versions of the same operating steps.

## Planned Guide Rollout

Create a staff guide after the corresponding public instrument workflow and Level 1 exercise are stable enough to train consistently. Each guide should then be paired with a real sample-library item or prepared kit, an expected result, a cabinet location, and a replenishment plan. Track cross-instrument rollout in [`../_staff/site-todo.md`](../_staff/site-todo.md), not by adding placeholder guide files for every instrument at once.
