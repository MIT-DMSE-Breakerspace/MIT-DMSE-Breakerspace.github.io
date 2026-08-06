---
published: false
---

# [Instrument Name] Staff Training Guide

Use this template to build a trainer-facing guide for a standard Breakerspace instrument training. Replace bracketed prompts and remove sections that do not apply.

A staff training guide is an **outline and checklist for the trainer**, not a manual. It assumes a person is present to instruct. Its job is to make different trainers deliver the same session: the same opening, the same core operations in the same order, the same closeout.

Six things follow from that:

* **The canonical instrument page is the operating authority.** Every workflow step here cites the section it comes from, and the trainer names that connection out loud during the session so participants learn to navigate the page rather than depend on the trainer.
* **Do not restate operating steps.** A step here is a pointer plus whatever the trainer needs to say about it, never a duplicate procedure that can drift out of date. This guide maps and verifies the SOP; it must not become an alternate technical SOP.
* **This guide and the Quick Guide are siblings**, both derived from the instrument page. The Quick Guide supplies the physical routine-workflow aid participants hold during the session; this guide supplies the Level 1 exercise, trainer prompts, pacing, success criteria, and closeout. Develop them in parallel; neither gates the other.
* **Take the shared sections as given.** [Access and logistics](access-and-logistics.md), the [lab safety orientation](lab-safety-orientation.md), and [trainer readiness](trainer-readiness.md) apply to every training. Reference them; do not restate them.
* **Guides are sample-agnostic.** State the criteria a training sample must meet, never a specific material, sample-library identifier, or cabinet location. The trainer chooses the material per session; sample-library readiness never blocks a guide. See [sample-agnostic guides](README.md#sample-agnostic-guides).
* **Work on one instrument at a time.** Build this guide and its Quick Guide against real, verifiable content for this instrument. When a decision here generalizes, record it in this template — do not apply it to the other instrument guides in the same pass. See [scope of work](README.md#scope-of-work-one-instrument-at-a-time).

## Guide Control

| Field | Value |
| --- | --- |
| Instrument | [Name and model] |
| Public instrument page and SOP | [Relative links] |
| Quick Guide | [Standalone URL, review date, and physical location at the instrument] |
| LibCal training | [Template or event link] |
| Session length | 60 minutes |
| Maximum enrollment | 3 participants |
| Level 1 exercise | [Exercise name and public-page anchor] |
| Training sample | **Trainer-selected.** [The properties a suitable sample must have. Do not name a material or cabinet location] |
| Moira group | `dmse-brkrspc-[page slug]` |
| Guide owner | Lab manager unless reassigned; see [guide owners](access-and-logistics.md#guide-owners) |
| Status | [Draft, pilot, or ready for routine delivery] |
| Last reviewed | [YYYY-MM-DD] |

## Training Outcome

By the end of the session, participants should be able to:

* Locate the exit route, campus phone, fire alarm pull, sharps container, and sink-area emergency equipment, and know to dial 100 from a campus phone or 617-253-1212 otherwise.
* Explain what the instrument measures and what its output can show.
* Identify compatible samples and know when to ask staff before proceeding.
* Find and use the trained-user quick reference and detailed guide.
* Follow the standard setup, measurement, data-saving, cleanup, and shutdown sequence with the written reference available.
* Recognize the most important stop-and-ask-for-help conditions.

This session does not currently require a separate skills demonstration. Participants may divide the Level 1 workflow. The trainer should make the complete sequence visible to everyone, have participants use the printed Quick Guide during the hands-on work, and involve each participant in at least one meaningful part of sample handling, instrument control, data collection, or interpretation. Participant-led cleanup and shutdown should use the Quick Guide with as little trainer prompting as is safely practical.

## Before The Session

### Instrument And Space

* [ ] Confirm that the instrument is available, functioning normally, and left in the expected starting state.
* [ ] Confirm that the exit route, emergency shower and eyewash, first-aid cabinet, spill kit, and sharps container are unobstructed and that nothing has moved since the last session.
* [ ] Open the public instrument page and any software or method needed for the Level 1 exercise.
* [ ] Prepare required holders, tools, PPE, wipes, solvents, consumables, and cleanup materials.
* [ ] Confirm that the training area can safely accommodate the registered participants.

### Training Sample

Guides are **sample-agnostic**: state the criteria, not a material. See [sample-agnostic guides](README.md#sample-agnostic-guides).

* [ ] Select and retrieve a sample meeting the stated criteria.
* [ ] Confirm that it is usable and that consumable materials are sufficiently stocked.
* [ ] **Confirm you have run this sample yourself**, so you can recognize a setup or data-quality problem during the session. If you have not, run it first.
* [ ] If a participant was invited to bring a project sample, confirm that staff approved it before the session.

### Participants

* [ ] Review the LibCal registration list; the standard maximum is three participants.
* [ ] Remind first-time Breakerspace users to complete the one-time Qualtrics online training record.
* [ ] Note any project-specific goals or accommodations shared in advance.

## Suggested 60-Minute Agenda

Adapt the timing to the instrument while preserving the full workflow and enough time for cleanup.

| Time | Activity |
| --- | --- |
| 0-3 minutes | Welcome, participant goals, and where to find the public instrument page and help. |
| 3-8 minutes | [Lab safety orientation](lab-safety-orientation.md): exit route, eyewash and shower, sharps, campus phone, alarm pull, food boundary, gloves. Run this every session. |
| 8-14 minutes | What the instrument measures, compatible samples, and instrument-specific stop conditions. |
| 14-22 minutes | Trainer-guided setup and introduction to the controls used in the Level 1 exercise. |
| 22-45 minutes | Participants complete the Level 1 exercise, dividing and rotating through steps as practical. |
| 45-53 minutes | Review the result, data quality, file saving, and common failure modes. |
| 53-60 minutes | Shutdown, cleanup, reservations, access follow-up, and final questions. |

Take compression out of the instrument-overview discussion rather than out of cleanup, shutdown, or closeout.

## SOP Coverage Map

This table is an audit and teaching plan, not an alternate SOP. Link to the canonical SOP and use short labels rather than rewriting technical instructions. Expand the table so **every startup and shutdown bullet appears individually**. Routine operation may map to a Level 1 workflow section when the grouping remains clear. Do not use "follow the Quick Guide" as the only evidence that a phase was taught.

| Canonical SOP item | Quick Guide step | How training covers it | Participant check |
| --- | --- | --- | --- |
| Startup: [short label and canonical anchor] | [Quick Guide location] | [Trainer demonstrates or participant performs] | [What the trainer observes or asks] |
| Startup: [one row for each remaining startup item] | [Quick Guide location] | [Coverage] | [Check] |
| Operation: [routine workflow or linked group] | [Quick Guide location] | [Level 1 workflow steps] | [Check] |
| Saving/export: [short label and canonical anchor] | [Quick Guide location] | [Coverage] | [Check] |
| Shutdown: [short label and canonical anchor] | [Quick Guide location] | [Trainer demonstrates or participant performs] | [What the trainer observes or asks] |
| Shutdown: [one row for each remaining shutdown item] | [Quick Guide location] | [Coverage] | [Check] |
| Stop and ask: [critical condition or linked group] | [Quick Guide location] | [Prompt or scenario] | [Expected response] |

**Quick Guide layout and step-citation format are under revision as of 2026-08-05 and are not settled.** Cite whatever locator the current Quick Guide actually supports, and expect this column's convention to change. Avoid citing a physical page or side: which side a step lands on is a layout outcome that moves whenever content does.

A canonical SOP item with no matching page section is a gap in the instrument page, not a reason to write the procedure out here. Record it in [`../instruments/staff-todo.md`](../instruments/staff-todo.md).

## Level 1 Exercise

### Question Or Goal

[State the concrete question participants will answer or the result they will produce.]

### Sample Selection Criteria

**Guides are sample-agnostic.** State the properties a sample must have to run safely and produce a usable result on this instrument, what disqualifies one, and what the exercise's result must demonstrate. Do not name a material, sample-library identifier, or cabinet location — the trainer chooses the sample so the session can be matched to a subject exercise or research project. See [sample-agnostic guides](README.md#sample-agnostic-guides).

Always include the trainer's own obligation: **the trainer must know what a bad result looks like on the material they chose.** If they have not run it, they run it before the session. That judgment is what a printed guide cannot supply, and it does not depend on which material is used.

Do not state expected results — band positions, feature sizes, curve shapes — for a material this guide does not name. Where a trainer wants specifics, they come from a measurement the trainer actually made on this instrument.

### Which Operations This Training Covers

**This is the decision that has to be made before the rest of the guide can be written**, and it is shared with the Quick Guide: the routine workflow the Quick Guide documents is the workflow this training teaches. An instrument can do far more than a beginner needs, and a training that tries to cover everything covers nothing well. Name the small set of core operations a new user must be able to perform independently, and name what is deliberately excluded.

| Taught in this training | Deliberately excluded |
| --- | --- |
| [Core operation a beginner needs] | [Capability left for later, staff-guided work, or a Level 2 exercise] |
| [Core operation a beginner needs] | [Capability left for later] |

Excluding something is not hiding it — say where it lives instead, such as the detailed operating instructions or a staff conversation. The exclusions matter as much as the inclusions, because they are what keeps a session finishable in an hour and what stops different trainers from teaching different things.

### Participant Workflow

Use the Quick Guide as the mechanical spine of this exercise. Add the Level 1 sample, question, expected result, role rotation, and trainer checkpoints here; do not alter the baseline operating sequence merely to make the exercise more distinctive.

Each step also cites the section of the public instrument page it comes from. **The trainer should say the connection out loud** — "this is the loading step in the SOP" — so participants learn to navigate the page, not just follow a person. That is what makes them able to work independently afterward.

Anchors are stable by convention, so a link like `../instruments/xrd.md#loading` keeps working when heading text changes.

| # | Step | SOP reference |
| --- | --- | --- |
| 1 | [Inspect or prepare the sample] | [`#materials`](../instruments/[slug].md#materials) |
| 2 | [Start up the instrument] | [`#startup`](../instruments/[slug].md#startup) |
| 3 | [Load or position the sample] | [`#loading`](../instruments/[slug].md#loading) |
| 4 | [Select the standard method or program] | [`#operation`](../instruments/[slug].md#operation) |
| 5 | [Collect the standard result] | [`#operation`](../instruments/[slug].md#operation) |
| 6 | [Save or export the data] | [`#export`](../instruments/[slug].md#export) |
| 7 | [Unload, clean, and shut down] | [`#shutdown`](../instruments/[slug].md#shutdown) |

If a step has no matching SOP section, that is a finding about the instrument page rather than a reason to write the step out here. Record it in [`../instruments/staff-todo.md`](../instruments/staff-todo.md) and link the closest section meanwhile.

### Suggested Roles For Three Participants

Participants may divide the workflow. Rotate roles when the instrument and time allow.

* Sample and setup lead: handles preparation, loading, and holder or stage setup.
* Instrument lead: operates the controls with the public quick reference available.
* Data and quality lead: records settings, saves files, and checks the result against the exercise goal.

### Success Criteria

* [The expected result was collected and saved.]
* [Participants can identify the main feature or conclusion.]
* [Participants know which settings and preparation details must be recorded.]
* [Participants can find the SOP, detailed guide, troubleshooting, and help pathways.]

### Stop And Ask For Help

* [Instrument-specific unsafe or damaging condition.]
* [Sample-compatibility concern.]
* [Unexpected software, vacuum, motion, force, temperature, or detector behavior.]
* [Data-quality symptom that should not be solved by changing untrained settings.]

## Post-Training Checklist

Complete these tasks before considering the session closed.

* [ ] Confirm that all samples are removed and the instrument is clean and in its expected state.
* [ ] Confirm that participants know where their files were saved and how to access them.
* [ ] Ask participants to locate the SOP, detailed operating guidance, and common failure modes on the public instrument page.
* [ ] Confirm that the printed Quick Guide is returned to its place at the instrument, is legible and undamaged, and carries the same review state as the web version.
* [ ] Add every attendee directly to the instrument's MIT Moira group: `dmse-brkrspc-[page slug]`. Confirm the name in [access and logistics](access-and-logistics.md#moira-groups-by-instrument); the SEM family shares one group and some renames may still be pending.
* [ ] Send every attendee an invitation to the Breakerspace Slack workspace.
* [ ] Remind participants that physical tap access is processed separately by the lab manager after the one-time Qualtrics record is complete.
* [ ] For first-time users, confirm that they created an MIT Dropbox for Business account and requested membership in the DMSE Breakerspace Team, or help them complete the self-service steps.
* [ ] Point participants to reservations, the public operating reference, `#breakerspace-help`, and the staff email.
* [ ] Return the training sample and supplies to their locations and note anything that needs replenishment.
* [ ] Record any instrument, guide, exercise, or sample-library issue discovered during the session.

## Trainer Notes And Common Variations

[Document safe variations in pacing, participant roles, sample choice, or method without duplicating the public operating instructions.]

## Guide Maintenance

When this guide changes, review the public instrument page, Level 1 exercise, sample-library record, LibCal template, and Moira information for corresponding updates.
