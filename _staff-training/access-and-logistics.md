# Trainer Access And Logistics Reference

Last reviewed: 2026-07-31

This file holds the shared operational facts that every instrument training guide needs: which MIT Moira group covers each instrument, what the trainer does at closeout, and how training sessions are scheduled.

Individual guides should **link to this file rather than restate its contents**. When a group name, closeout step, or scheduling rule changes, change it here once. A per-guide copy of these facts will drift.

This directory is unpublished, but the repository may still be publicly readable. Moira group *names* are recorded here because they are administrative list identifiers rather than credentials, and one of them is already published on the public Help page. Do not add Kerberos usernames, attendee names, MIT ID numbers, passwords, or workstation login details to this file.

## Moira Groups By Instrument

A Moira group serves two separate purposes here, and they do not always coincide:

* **Workstation access.** Most instrument workstations are on the [MIT WIN domain](https://ist.mit.edu/winmitedu) with permissions managed through [Moira group lists](https://groups.mit.edu/webmoira/). Membership is what lets a trained user log in with their own Kerberos account.
* **Targeted communication.** The group is also the mailing list for reaching exactly the users trained on one instrument — for an outage, a consumable change, a method update, or a maintenance window — without mailing the whole lab.

Not every instrument uses both. Three instruments — the XRD, hardness tester, and ion mill — are not domain-managed, so their groups serve only the communication purpose.

**The trainer's closeout step is the same either way: add every attendee to the instrument's group.** Do that even when the group grants no login, because the communication role still depends on the membership being accurate and current.

### Naming Rule

The group name is the public page slug with a `dmse-brkrspc-` prefix:

```text
dmse-brkrspc- + <instrument page slug>
```

So `instruments/ftir.md` uses `dmse-brkrspc-ftir`, and `instruments/hardness-tester.md` uses `dmse-brkrspc-hardness-tester`. There are no abbreviations and no exceptions to the pattern. The one structural irregularity is the SEM family, where two pages share a single group.

Keep this rule intact when adding an instrument. A group name that merely resembles its page slug is worse than one that obviously differs, because it invites a guess that is wrong just often enough to cause a silent access failure.

| Instrument | Public operating page | Moira group | Group role |
| --- | --- | --- | --- |
| Olympus DSX-1000 optical microscope | [`optical.md`](../instruments/optical.md) | `dmse-brkrspc-optical` | Access + comms |
| Thermo Scientific Nicolet iS5 FTIR | [`ftir.md`](../instruments/ftir.md) | `dmse-brkrspc-ftir` | Access + comms |
| Horiba Duetta fluorescence and absorbance | [`uv-vis.md`](../instruments/uv-vis.md) | `dmse-brkrspc-uv-vis` | Access + comms |
| Horiba XploRA confocal Raman microscope | [`raman.md`](../instruments/raman.md) | `dmse-brkrspc-raman` | Access + comms |
| Microtrac Sync particle size analyzer | [`psa.md`](../instruments/psa.md) | `dmse-brkrspc-psa` | Access + comms |
| Instron 68TM-50 universal testing system | [`instron.md`](../instruments/instron.md) | `dmse-brkrspc-instron` | Access + comms |
| Phenom XL SEM | [`phenom-xl.md`](../instruments/phenom-xl.md) | `dmse-brkrspc-sem` | Access + comms |
| Phenom Pure SEM | [`phenom-pure.md`](../instruments/phenom-pure.md) | `dmse-brkrspc-sem` | Access + comms |
| Malvern Panalytical Aeris Research XRD | [`xrd.md`](../instruments/xrd.md) | `dmse-brkrspc-xrd` | **Comms only** |
| Innovatest Nemesis 5100G2 hardness tester | [`hardness-tester.md`](../instruments/hardness-tester.md) | `dmse-brkrspc-hardness-tester` | **Comms only** |
| Technoorg-Linda SEMPrep 2 ion mill | [`ion-mill.md`](../instruments/ion-mill.md) | `dmse-brkrspc-ion-mill` | **Comms only** |

The three **Access + comms** rows whose groups were renamed — optical, Duetta, and Instron — were verified on their workstations on 2026-08-03. The remaining Access + comms rows are inherited from `../resources.md`, which describes Moira as the general mechanism, rather than individually confirmed; treat one as verified when someone has actually logged in after being added. Re-check a row if a workstation is rebuilt or re-imaged.

Two details that the naming rule does not cover:

* **Both SEMs share one group.** `dmse-brkrspc-sem` covers the Phenom XL and the Phenom Pure together, even though the two instruments have separate operating pages and different sample-height rules. A trainee trained on one SEM receives workstation access to both. Keep the instrument-specific loading and height instruction distinct in training even though the access grant is shared. This is the one case where the group cannot match a single page slug.
* **Three groups are communication-only.** See below.

### Comms-Only Groups: XRD, Hardness Tester, And Ion Mill

Three of the eleven instruments are not access-managed through Moira. **Adding someone to these groups grants no permission and removes no barrier.** Do not treat membership as an access grant, and do not tell a trainee that being added is what will let them operate the instrument.

They reach that state in two different ways:

* **XRD and ion mill: no access control at all.** The Aeris is driven by a custom control touchscreen that boots directly into instrument operation, so there is no sign-in step of any kind. The ion mill is the same.
* **Hardness tester: a local workstation account** rather than a user's own Kerberos login. Ask the lab manager for the current local sign-in arrangement and cover it at the instrument during training. Do not record local workstation account details in this repository.

Add trained users to all three groups anyway. The purpose is to give staff a way to reach the users of one instrument as that user base grows, rather than mailing the entire lab for an instrument-specific notice. That only works if trainers populate the lists from the first session onward — a list assembled retroactively, after the first notice is needed, will be incomplete.

These three closeout steps fail differently from every other instrument. Elsewhere a forgotten Moira add surfaces on its own: the trainee cannot log in, emails staff, and it gets fixed. Here nothing visibly breaks. The user simply never receives an instrument notice, and no one finds out. Treat all three as unverifiable by the trainee and therefore the trainer's responsibility alone.

Because these instruments have no per-user sign-in, they also produce no electronic record of who used them and when. The XRD is the partial exception: its **X-ray safety log book** is filled in at the instrument, so it carries a paper usage record the other two lack. Keep that difference in mind when an instrument problem needs to be traced back to a session, and reinforce the log-book step during XRD training, since it is the only usage record that exists for that instrument.

### XRD's Companion Workstation

The XRD is the one comms-only instrument with a **second computer involved in the normal workflow**. The instrument touchscreen has no access control, but data export, HighScore Plus phase matching, and XRDMP Creator all happen on the separate XRD workstation to the right of the instrument.

[`instruments/xrd.md`](../instruments/xrd.md#export) currently tells users to "use the current workstation sign-in and export-folder instructions provided during training or posted at the instrument," which implies that companion workstation has some sign-in of its own.

**Open question:** confirm what governs sign-in on the XRD companion workstation, and whether `dmse-brkrspc-xrd` has any role there. Until that is settled, an XRD guide should describe the touchscreen as having no access control while treating the companion workstation's sign-in as something the trainer covers in person. This is the one instrument where "the instrument has no access control" and "the user needs no credentials to finish the workflow" may not be the same statement.

### Ion Mill

In practice the ion mill is close to staff-assisted-only, which is a consequence of how rarely it is used rather than a stated policy. Do not document it to users as a restriction. If demand increases, revisit whether the workstation should become access-managed and whether the right artifact is a training guide or a staff-assisted-use protocol.

### If You Need To Rename A Group

Five groups were renamed between 2026-07-31 and 2026-08-03 to bring every name in line with the rule above. All are complete and verified, so the table is the only thing to read — but the process is recorded here because it will be needed again when an instrument is added or a page slug changes.

Renaming is safe and cheap:

* WebMoira renames a list without error, and accepts a 28-character name. `dmse-brkrspc-hardness-tester` is the longest name in the scheme, so no name that follows the rule can hit a length limit.
* **The Windows `Allow log on locally` security setting follows the rename automatically.** The `gpedit.msc` policy picks up the new group name without being retyped. This was verified on the Instron, optical, and Duetta workstations — all three access-controlling renames — so a rename does not silently strip workstation access.

Still confirm the new name in [WebMoira](https://groups.mit.edu/webmoira/) and check `Allow log on locally` on the affected workstation afterward. The failure this guards against is invisible at rename time and surfaces later as a trained user who cannot log in.

The former names, should one appear in an old document or a posted note: `-hrdnss` (now `-hardness-tester`), `-ionmill` (now `-ion-mill`), `-utm` (now `-instron`), `-dsx` (now `-optical`), and `-duetta` (now `-uv-vis`).

The unchanged groups — `-ftir`, `-raman`, `-xrd`, `-psa`, and `-sem` — already satisfy the rule and need no action.

## Trainer Closeout Sequence

Every standard instrument training ends with the same steps. Instrument guides should reference this list and add only instrument-specific items, such as returning a particular sample kit or confirming a covered ATR crystal.

1. **Moira.** Add each attendee to the instrument's group from the table above, whether or not that group grants a workstation login. Do not record attendee Kerberos usernames in this repository.
2. **Workstation sign-in.** For a domain-managed instrument, the Moira add in step 1 is what enables login with the trainee's own Kerberos account. For the XRD, hardness tester, and ion mill, the Moira add grants nothing — cover the actual sign-in arrangement at the instrument instead, and do not describe the Moira add as the thing that grants access. The XRD touchscreen needs no sign-in at all, but its companion export/analysis workstation may.
3. **Slack.** Send each attendee an invitation to the Breakerspace Slack workspace at their `@mit.edu` address, and point them to `#breakerspace-help`.
4. **Tap access.** Remind attendees that physical tap access is separate and is processed by the lab manager after their one-time Qualtrics record is complete. The trainer does not grant tap access.
5. **Dropbox.** Dropbox is trainee-managed. First-time users create an MIT Dropbox for Business account, then request membership in the DMSE Breakerspace Team. Help them through the self-service steps; staff cannot add someone before the account exists.
6. **Where to get help.** Point attendees to the reservation calendar, the public operating page and its Quick Guide, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
7. **Report problems found.** Record any instrument, guide, exercise, or sample-library issue the session surfaced.

There is currently no skills demonstration, no training expiration, and no recurring retraining requirement.

## Scheduling And Enrollment

Standard sessions are **60 minutes** with a **maximum of three participants**. The three-participant limit is confirmed: every LibCal instrument-training template sets maximum in-person registrations to 3.

Per-instrument LibCal training events **do exist** — there are eight instrument training templates, so a guide can name its own template rather than pointing at a general calendar. Note that all twelve public instrument pages currently link the same general registration URL (calendar `19408`, category `69558`) rather than a per-instrument event, so the public link and the underlying event structure are not aligned.

Two instruments have no template: the **hardness tester** and the **ion mill**. Neither can be advertised as a scheduled training until that is resolved.

The templates themselves are outdated and contain factual errors, including an automated follow-up email that promises instrument login access to attendees of instruments that have no access control. **Do not copy content out of them into a guide.** Their pre-revision state and the planned rewrite are recorded in [`libcal-event-templates.md`](libcal-event-templates.md); the rewrite is tracked in [`../_staff/site-todo.md`](../_staff/site-todo.md).

Two operational rules appear in the current LibCal reminder email but nowhere on the website: sessions start and end five minutes before and after the posted time, and attendees must stay for the whole session to be cleared. Both need a decision before a guide repeats them.

## Guide Owners

Each guide needs a named owner responsible for keeping it accurate and for approving changes.

**The lab manager owns every guide as of 2026-07-31.** This is the current state rather than the intended end state: a single owner for eleven guides does not scale, and the point of writing these guides is that many people can deliver the same session. Reassign individual guides to student staff as they take ownership of particular instruments, and record the assignment in each guide's Guide Control table.

Two roles are worth keeping distinct even while one person holds both:

* **Guide owner** keeps the staff guide accurate, reviews it after a workflow change, and approves edits. A student staff member can hold this.
* **Operational owner** confirms that the instrument's stated workflow, limits, safety claims, and stop conditions are correct. This requires the authority to make an operational call and should stay with the lab manager or another staff member with that standing.

A guide's `Status` row referring to "operational-owner review" means the second role, not the first. When a guide is reassigned to a student owner, the operational-owner sign-off stays where it is.

## Open Items Tracked Elsewhere

* Approved Level 1 training samples, identifiers, cabinet locations, and replenishment plans: [`../_staff/site-todo.md`](../_staff/site-todo.md), Tier 2.
* Trainer readiness and who may deliver training: not yet written.
* Instrument-page media and verification work: [`../instruments/staff-todo.md`](../instruments/staff-todo.md).
