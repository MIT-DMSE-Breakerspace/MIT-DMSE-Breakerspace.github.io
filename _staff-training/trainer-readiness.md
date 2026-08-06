---
title: Trainer Readiness And Qualification
description: Qualification, practice-training, and escalation expectations for Breakerspace instrument trainers.
guide_status: Current shared reference
guide_revision: 2026-08-05
trainer_links:
  - label: Training access and closeout
    url: /trainer/access-and-logistics/
  - label: Lab safety orientation
    url: /trainer/lab-safety-orientation/
  - label: Public training pathway
    url: /training.html
---

# Trainer Readiness

Last reviewed: 2026-07-31

Breakerspace instrument training is delivered mostly by Breakerspace Lab Assistants. This file defines who may deliver a training, how someone becomes qualified on an instrument, and what a trainer does when a session does not go as planned.

**Breakerspace Lab Assistant** is the role name for the lab's hourly undergraduate student positions. **Trainer** describes a function: a qualified Lab Assistant, the lab manager, or another designated person may deliver a particular instrument training.

It exists because the [public training page]({% link training.md %}) tells users their session will be led by "Breakerspace staff or another designated trainer" without defining what makes someone designated. The corresponding practice-training work is tracked in the repository's `_staff/site-todo.md`; the private qualification record remains outside the site.

Do not put private student information in this repository. Keep the trainer roster and any individual's progress in the staff-facing system described under [Recording Readiness](#recording-readiness), not here. Do not record physical-clearance names, account credentials, or personal Kerberos identifiers in this file.

## Three Different Onboardings

These are routinely discussed together and are easy to conflate. They have different owners, different contents, and different failure modes.

| Onboarding | Who it is for | Who does it | Where it lives |
| --- | --- | --- | --- |
| **New lab user** | A student who just completed instrument training | Any lab staff, as training closeout | [Training access and closeout]({% link _staff-training/access-and-logistics.md %}#trainer-closeout-sequence) |
| **New staff account setup** | A newly hired Breakerspace Lab Assistant | Lab manager | [Staff Account Setup](#staff-account-setup) below |
| **Trainer qualification** | A staff member preparing to deliver training on a specific instrument | Guide owner or lab manager | [Becoming Qualified](#becoming-qualified-on-an-instrument) below |

The third is the one that has not existed in written form. Account setup makes someone *able* to add a trainee to a Moira group; it does not make them able to *teach the instrument*. Those are separate readiness questions and only the first has been tracked.

A useful consequence of the current permission model: **any lab staff member can perform the trainer-owned user-onboarding steps** — Moira adds, Slack invitations, and approval of Dropbox team requests after a trainee creates the account and submits the request. Access closeout is not gated on the lab manager. Only physical tap access is, and that is processed after the trainee's one-time Qualtrics record rather than by the trainer.

## Staff Account Setup

Completed by the lab manager when a Breakerspace Lab Assistant is hired. Each item is an access or account grant, not a competence check.

* [ ] Physical lab clearance for the instrument lab and lounge.
* [ ] LibCal administrative invitation, so the assistant can be scheduled and can create events.
* [ ] Add to the `dmse-breakerspace` staff Moira list.
* [ ] Add to the DMSE Breakerspace Dropbox team and grant admin rights.
* [ ] Add to the Breakerspace Slack workspace, add to the private staff channel, and grant admin rights.
* [ ] Invite to the website repository on GitHub.

Slack admin rights allow a staff member to send workspace invitations, and Dropbox admin rights allow approval of a trainee's self-service team request. These are prerequisites for completing training follow-up, not optional extras.

### What The New Staff Member Does

* [ ] Create an [MIT Dropbox for Business account](https://ist.mit.edu/dropbox/business) if one does not already exist. Team membership cannot be granted before the account exists — the same constraint that applies to trainees.
* [ ] Confirm scheduled shifts in LibCal.
* [ ] Schedule at least one training session per week during a shift.
* [ ] Read the [training access and closeout sequence]({% link _staff-training/access-and-logistics.md %}) and the guide for each instrument they will train on.
* [ ] Submit weekly hours through the MIT payroll system **and** email the total submitted to the lab manager and DMSE HR for approval. Submitting without the email leaves the approval incomplete.

## Becoming Qualified On An Instrument

Readiness is **per instrument**, not global. A staff member fully qualified on the FTIR is not thereby qualified on the Instron. Track it per instrument and per person.

The requirement in `site-todo.md` is that each guide gets at least one practice training before it is used routinely. That serves two purposes at once — it validates the guide, including whether the participant-facing work fits 50 minutes, and it qualifies the trainer — and those should not be confused. A guide's first practice run tests the document. Later practice runs test the trainer.

### The Four Stages

1. **Be a trained user.** Complete the instrument's own user training and use the instrument independently enough to have encountered its ordinary annoyances. Someone who has only ever seen the instrument work correctly cannot recognize a bad result.
2. **Read the guide and the public page.** Work through the staff guide, the public operating page, and the Quick Guide together. The guide deliberately contains no operating sequence of its own, so a trainer who has not read the public page does not know the workflow they are about to teach. Read the [lab safety orientation]({% link _staff-training/lab-safety-orientation.md %}) too, and confirm every location in it by walking the lab — a trainer cannot point out a campus phone they have not found.
3. **Observe a session.** Watch a qualified trainer deliver the full session, including closeout. Closeout is the part most often skipped in practice and the part with the most durable consequences.
4. **Deliver a practice session** to a qualified trainer or another staff member acting as the participant, covering the whole guide including the Level 1 exercise and closeout. The observer confirms readiness and records it.

A staff member who has completed stage 4 for an instrument may deliver that instrument's training independently.

### What The Observer Confirms

The observer is checking whether an ordinary session would go well, not conducting an exam.

* [ ] The [lab safety orientation]({% link _staff-training/lab-safety-orientation.md %}) was delivered, on foot, with each location physically pointed out.
* [ ] The full Level 1 exercise was completed and produced a recognizable, correct result.
* [ ] The trainer knew what a *bad* result looks like on this instrument and could name at least one way the session's data could have been wrong.
* [ ] The instrument's stop-and-ask-for-help conditions were stated, not skipped.
* [ ] Safety-critical and damage-critical steps specific to this instrument were covered correctly.
* [ ] The trainer could locate the Quick Guide, detailed instructions, and common failure modes on the public page while at the instrument.
* [ ] The complete closeout sequence was performed, including the correct Moira group.
* [ ] For the XRD, hardness tester, and ion mill: the trainer did **not** describe the Moira add as granting access, and knew what actually governs sign-in. See [comms-only groups]({% link _staff-training/access-and-logistics.md %}#comms-only-groups-xrd-hardness-tester-and-ion-mill).
* [ ] The instrument was left in its expected state.

### Instruments Needing Extra Care

Some instruments should not be trained by a newly qualified trainer without a second staff member available:

* **Instron** — moving crosshead, heavy tooling, and stored energy in a loaded sample.
* **Ion mill** — in practice staff-assisted. Decide whether it is trained at all before qualifying trainers on it.
* **XRD** — X-ray enclosure and interlocks, plus the safety log book that is the instrument's only usage record.
* **Raman** — laser safety and interlocks.

This is a judgment list, not a policy. Confirm it with the lab manager and EHS guidance rather than treating it as settled.

## Recording Readiness

A written record is needed because trainer qualification is per instrument, changes over time, and determines who can be scheduled for which session.

**The roster lives in the canvas of the private staff channel in the Breakerspace Slack workspace**, alongside the existing onboarding lists. It stays out of this repository because it contains individual names and progress. Revisit the choice if the canvas becomes hard to keep current or if scheduling moves somewhere else.

Record per staff member and per instrument:

* The stage reached, from the four stages above.
* The date of the practice session.
* Who observed it.

The canvas and this file describe different things, and should keep doing so. **This file defines the process; the canvas records who has completed it.** When the canvas describes a workflow that this file also covers, cut it from the canvas and link here instead, following the write-once rule used everywhere else in this directory. The canvas is the better home for anything that changes per person; this file is the better home for anything that changes per policy.

## When A Session Does Not Go As Planned

Trainers are mostly undergraduates who may be encountering these situations for the first time. Defaults matter more than completeness.

**Nobody arrives.** Wait for the reservation-holder grace period, then use the time for guide review or instrument checks. Note the no-show. There is no penalty for a missed session — the [public training page]({% link training.md %}) says so deliberately, and trainers should not improvise one.

**More people arrive than registered.** The limit is three participants. A fourth person should be asked to register for another session rather than added on the spot; the limit exists for sightlines and safe sample handling, not administrative tidiness.

**Someone arrives with an unapproved sample.** Run the session on the approved training sample. Project samples need staff review first. Offer to look at the sample afterward or route it to staff — do not evaluate an unknown sample mid-session under time pressure.

**The instrument is not working.** Do not troubleshoot beyond the documented common failure modes with participants waiting. Convert the session to a demonstration and discussion using the public page, reschedule the hands-on portion, and report the fault.

**Something is damaged, or someone is hurt.** Follow the [public safety page]({% link safety.md %}). Injuries and near misses are reported even when resolved, and the reporting path differs for unpaid students versus paid staff. Reporting is for fixing the condition, not for blame — a trainer who breaks something during a training should say so.

**A participant cannot safely do a step.** Involve them in another meaningful part of the workflow. The guides already allow dividing the Level 1 exercise; every participant needs a real role, not every step.

**The trainer does not know an answer.** Say so, and find out. Guessing at an instrument limit or a sample compatibility question is worse than deferring to `#breakerspace-help` or the lab manager. Record the question so the guide or public page can answer it next time.

## Terminology

**Breakerspace Lab Assistant** is the standard public-facing employment title. **Trainer** remains a functional term in these internal guides because a qualified trainer may be a Breakerspace Lab Assistant, the lab manager, or a trained course instructor. LibCal event templates should use Breakerspace Lab Assistant when referring to the role and trainer only when describing the training function.

The LibCal terminology changes were completed with the template revision on 2026-08-04. The live support template and category now use **Lab Assistant on duty**; the instrument-training copy uses **trainer** only for the training function.

## Open Items

* Whether the extra-care instrument list is policy or guidance, confirmed with the lab manager.
* Whether any instrument should require a second staff member present for *every* training rather than only for a new trainer's first.
* Reassigning individual guides from the lab manager to Breakerspace Lab Assistant owners as they take on particular instruments; see [guide owners]({% link _staff-training/access-and-logistics.md %}#guide-owners).
