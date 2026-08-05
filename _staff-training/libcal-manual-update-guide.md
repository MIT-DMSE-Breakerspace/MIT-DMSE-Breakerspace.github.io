# LibCal Manual Event Template Update Guide

Last reviewed: 2026-08-04

**Status: completed 2026-08-04; retained as the as-built runbook and maintenance reference.**

This guide records the procedure used to revise the eight existing instrument-training templates, create templates for the hardness tester and ion mill, rename the staff-support template, and replace the subject-hours template with three scope-specific reserved-activity templates. The completed result is fourteen maintained templates:

* ten instrument-training templates;
* one **Lab Assistant on duty** template; and
* three reserved-activity templates covering the lab, lounge, or both.

The [archival template audit](libcal-event-templates.md) records what existed before this revision, why it changed, and the verified live outcome. Its pre-revision copy is evidence, not content to paste into LibCal.

## Confirmed Decisions

These decisions were applied in the completed revision and remain the maintenance baseline:

* A training event remains scheduled as a one-hour MIT calendar block. For internal planning, trainers should assume that the block provides **50 minutes of usable session time**.
* Do not explain, reinterpret, or restate MIT's calendar-time convention in the public event description, reminder, or follow-up email. The posted event time remains the only public time statement.
* Use this attendance wording: **Plan to attend the full session. If you arrive late or need to leave early, ask the trainer whether you need to register for another session.**
* Standard enrollment remains three in-person participants, with no guests and a one-person waitlist.
* Maintain instrument-training templates for the **Innovatest Nemesis 5100G2 hardness tester** and **Technoorg-Linda SEMPrep 2 broad beam ion mill**, created on 2026-08-04.
* Use **Breakerspace Lab Assistant** for the hourly student role. Use **trainer** only when describing the training function, which may also be performed by the lab manager or another qualified instructor.
* Use **Lab Assistant on duty** for the former `Staffed Open Hours` function. These entries identify support availability, not the lab's opening hours.
* Use the three scope-specific reserved-activity templates for the instrument lab, lounge, or both. Lab-only and combined reservations block instrument availability; lounge-only reservations do not.
* LibCal should not summarize an instrument's operations, training exercise, access mechanics, or Quick Guide. Link to the canonical instrument page and the public training pathway instead.

## Before Editing

1. Open LibCal administration and the template list in separate tabs.
2. Keep the pre-revision PDF captures described in the [archival audit](libcal-event-templates.md) available for comparison.
3. Record the edit date and editor in the [completion record](#completion-record) at the end of this guide.
4. Do not delete an existing template until its replacement has been created and tested. Prefer renaming and revising in place when practical so scheduled workflows are not disrupted.
5. Do not assume that changing a template updates events already created from it. After the templates are correct, audit every future event on the public calendar and update stale descriptions, emails, categories, links, and registration settings separately.
6. Revise the FTIR template first and create a temporary test event from it. Continue with the other templates only after that test passes.

## Shared Instrument-Training Settings

Apply these settings to all ten instrument-training templates. Values marked **preserve** were present in the captured templates and remain appropriate; confirm rather than re-create them blindly.

| LibCal field | Required value | Notes |
| --- | --- | --- |
| Template name | Use the [template map](#instrument-template-map) | Use the same instrument name as the canonical website page. |
| Start and end time | Leave unset in the template | Set a one-hour block when creating each event. Do not add public MIT-time explanatory text. |
| Registration required | Yes | In-person registration only. |
| Maximum in-person registrations | 3 | Confirm on every template. |
| Maximum online registrations | 0 | No online attendance option. |
| Registration form | `Instrument Trainings` | Preserve the existing form. |
| Authentication | Massachusetts Institute of Technology LibAuth | Require MIT authentication. |
| Registration opens | 2 weeks before the event | Preserve. |
| Registration closes | At the event start time | Preserve. |
| Attendance price | 0 USD | Preserve. |
| Maximum guests | No guests | Preserve. Each participant registers individually. |
| Waitlist | Enabled; maximum 1 | Preserve. |
| QR-code check-ins | Preserve the current enabled setting | Do not make check-in data an access-control record. |
| Campus | None | Preserve unless the public calendar later requires a campus filter. |
| Organizer | Event Creator | Preserve. |
| Presenter, audiences, and internal tags | Empty | Add only if there is a demonstrated administrative use. |
| Category | `Instrument Training` | Use the existing category consistently. |
| Category color | `#B4F0C3` | Preserve the existing light-green category color. Titles and category text must carry the meaning without color. |
| Featured image | Remove | Instrument images are unnecessary here and add a fragile manual dependency. |
| More Info | Canonical instrument-page URL | Use the URL from the template map. |
| Reminder email | Enabled; 1 day before | Use the approved copy below. |
| Follow-up email | Enabled; 1 hour after | Use the approved copy below. It must not claim that access was granted. |
| Event note | Empty | Use only for an internal, event-specific operational note. Never put attendee information here. |

## Instrument Template Map

The first eight rows revise existing templates. The final two rows create new templates. Use the **public name** in the copy blocks below and the canonical URL in both the description and **More Info** field.

| Action | Template name | Public name used in copy | Canonical instrument page |
| --- | --- | --- | --- |
| Revise | `Nicolet iS5 FTIR Spectrometer Training` | Nicolet iS5 FTIR spectrometer | `https://breakerspace.mit.edu/instruments/ftir.html` |
| Revise | `DSX-1000 Digital Optical Microscope Training` | DSX-1000 digital optical microscope | `https://breakerspace.mit.edu/instruments/optical.html` |
| Revise | `Phenom Scanning Electron Microscopes (SEM) Training` | Phenom scanning electron microscopes | `https://breakerspace.mit.edu/instruments/sem.html` |
| Revise | `Aeris Research X-Ray Diffractometer (XRD) Training` | Aeris Research X-ray diffractometer | `https://breakerspace.mit.edu/instruments/xrd.html` |
| Revise | `Microtrac Sync Particle Size Analyzer Training` | Microtrac Sync particle size analyzer | `https://breakerspace.mit.edu/instruments/psa.html` |
| Revise | `Duetta Fluorescence and Absorbance Spectrometer Training` | Duetta fluorescence and absorbance spectrometer | `https://breakerspace.mit.edu/instruments/uv-vis.html` |
| Revise | `XploRA Confocal Raman Microscope Training` | XploRA confocal Raman microscope | `https://breakerspace.mit.edu/instruments/raman.html` |
| Revise | `Instron 68TM-50 Universal Testing System Training` | Instron 68TM-50 universal testing system | `https://breakerspace.mit.edu/instruments/instron.html` |
| Create | `Nemesis 5100G2 Hardness Tester Training` | Nemesis 5100G2 hardness tester | `https://breakerspace.mit.edu/instruments/hardness-tester.html` |
| Create | `SEMPrep 2 Broad Beam Ion Mill Training` | SEMPrep 2 broad beam ion mill | `https://breakerspace.mit.edu/instruments/ion-mill.html` |

The SEM template continues to cover both the Phenom XL and Phenom Pure. The shared SEM page routes users to the correct operating page and reservation calendar.

## Paste-Ready Instrument-Training Copy

Replace `[INSTRUMENT]` and `[INSTRUMENT PAGE URL]` with the values from the template map. For **Description** and **More Info**, switch the LibCal rich-text editor to **Source** mode, paste the HTML below, then switch back and verify the rendered structure and links. Paste the reminder and follow-up HTML directly into their body fields and confirm the generated preview contains the expected clickable links. If a preview does not refresh after a paste, type and remove one harmless character in the field. Keep every destination visible and correct. Do not add a Quick Guide link.

### Event Description

```html
<p>This is a small-group, hands-on training for the [INSTRUMENT]. Complete the relevant Breakerspace training before reserving or using an instrument independently.</p>
<p><strong>Before attending:</strong></p>
<ul>
  <li>Review the instrument page: <a href="[INSTRUMENT PAGE URL]">[INSTRUMENT PAGE URL]</a></li>
  <li>Before your first in-person Breakerspace instrument training, complete the one-time online training and training record: <a href="https://mit.co1.qualtrics.com/jfe/form/SV_084N36wCErKsgjc">https://mit.co1.qualtrics.com/jfe/form/SV_084N36wCErKsgjc</a></li>
  <li>Do not bring an unusual or project-specific sample unless you have discussed it with Breakerspace staff.</li>
</ul>
<p><strong>Plan to attend the full session.</strong> If you arrive late or need to leave early, ask the trainer whether you need to register for another session.</p>
<p>Training takes place in the DMSE Breakerspace instrument lab, MIT Building 8, Room 8-102A. Enter through the Breakerspace Lounge.</p>
<p>Public calendar sessions currently prioritize MIT undergraduates. MIT faculty, staff, and other community members interested in training should email <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a> to discuss their needs.</p>
```

Use this **More Info** source:

```html
<p><strong>Instrument page:</strong><br />
<a href="[INSTRUMENT PAGE URL]">[INSTRUMENT PAGE URL]</a></p>
```

### Reminder Email

Set the reminder for one day before the event. If LibCal provides system fields for the event title, date, time, or registration-management link, insert them using the administrative editor; do not type or guess merge-tag syntax.

Suggested subject:

```text
Reminder: upcoming Breakerspace instrument training
```

Body:

```html
<p>This is a reminder about your upcoming Breakerspace instrument training. Confirm the instrument, date, time, and location in your registration.</p>
<p><strong>Before attending:</strong></p>
<ul>
  <li>Review the instrument page: <a href="[INSTRUMENT PAGE URL]">[INSTRUMENT PAGE URL]</a></li>
  <li>Before your first in-person Breakerspace instrument training, complete the one-time online training and training record: <a href="https://mit.co1.qualtrics.com/jfe/form/SV_084N36wCErKsgjc">https://mit.co1.qualtrics.com/jfe/form/SV_084N36wCErKsgjc</a></li>
  <li>Do not bring an unusual or project-specific sample unless you have discussed it with Breakerspace staff.</li>
</ul>
<p><strong>Plan to attend the full session.</strong> If you arrive late or need to leave early, ask the trainer whether you need to register for another session.</p>
<p>If you cannot attend, use the cancellation or registration-management link in your LibCal confirmation as soon as possible so another student can use the place. There is no penalty for cancelling, missing a session, or registering again.</p>
<p>Questions: <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a></p>
```

### Follow-Up Email

Set the follow-up for one hour after the event.

Suggested subject:

```text
After your Breakerspace instrument training
```

Body:

```html
<p>Thank you for attending a Breakerspace instrument training.</p>
<p>Use the instrument page for the current operating guidance, reservation link, and support resources:<br />
<a href="[INSTRUMENT PAGE URL]">[INSTRUMENT PAGE URL]</a></p>
<p>The current training and access pathway is:<br />
<a href="https://breakerspace.mit.edu/training.html">https://breakerspace.mit.edu/training.html</a></p>
<p><strong>This automated message does not itself confirm instrument-login permission or physical tap access.</strong> If an expected permission, invitation, or access step is missing, follow:<br />
<a href="https://breakerspace.mit.edu/resources.html#access-and-account-problems">https://breakerspace.mit.edu/resources.html#access-and-account-problems</a></p>
<p>Questions: <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a></p>
```

## Lab Assistant On Duty Template

Rename the existing `Staffed Open Hours` template and its category to **Lab Assistant on duty**.

| LibCal field | Required value |
| --- | --- |
| Template name | `Lab Assistant on duty` |
| Registration | Not required |
| Waitlist | Disabled |
| Reminder and follow-up emails | Disabled |
| Category | `Lab Assistant on duty` |
| More Info | `https://breakerspace.mit.edu/calendar.html` |
| Featured image | Remove |

Use this description:

```html
<p>A Breakerspace Lab Assistant will be in the instrument lab for drop-in project questions and ad-hoc support. <strong>No registration is required.</strong></p>
<p>These hours are not a substitute for required instrument training or instrument reservations. Individual instrument availability is shown separately in LibCal.</p>
<p><strong>Breakerspace calendar and related actions:</strong><br />
<a href="https://breakerspace.mit.edu/calendar.html">https://breakerspace.mit.edu/calendar.html</a></p>
```

The event title should remain **Lab Assistant on duty** unless a short, user-relevant qualifier is necessary. Do not put an assistant's name in the public title.

## Reserved Activity Templates

Use three scope-specific templates for confirmed teaching sessions, organized group activities, maintenance, and other work that affects ordinary use. Keep `Reserved activity or availability notice` as the shared category, but use the straightforward baked-in event titles below. A creator may add a short useful qualifier, but an untouched title must still communicate the affected space clearly.

Shared settings:

| LibCal field | Required value |
| --- | --- |
| Registration | Not required in the template editor; see the LibCal inheritance note below |
| Waitlist | Disabled |
| Reminder and follow-up emails | Disabled |
| Category | `Reserved activity or availability notice` |
| More Info | `https://breakerspace.mit.edu/calendar.html` |
| Featured image | Remove |

### Lab Reserved For Activity

Template name and default event title: `Lab reserved for activity`

```html
<p>The Breakerspace instrument lab is reserved for a confirmed activity.</p>
<p><strong>Individual instrument reservations are unavailable across the lab for the full listed period, including setup and cleanup.</strong></p>
<p><strong>Physical activity location:</strong> MIT Building 8, Room 8-102A.</p>
<p>This reservation does not include the Breakerspace Lounge in Room 8-102.</p>
<p>Check individual instrument availability in LibCal:<br />
<a href="https://breakerspace.libcal.com/space/168610">https://breakerspace.libcal.com/space/168610</a></p>
<p>Questions: <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a></p>
```

### Lounge Reserved For Activity

Template name and default event title: `Lounge reserved for activity`

```html
<p>The Breakerspace Lounge is reserved for a confirmed activity.</p>
<p><strong>The lounge is unavailable for the full listed period, including setup and cleanup.</strong></p>
<p><strong>Physical activity location:</strong> MIT Building 8, Room 8-102.</p>
<p>This lounge-only reservation does not block individual instrument reservations in the instrument lab. Check instrument availability separately in LibCal:<br />
<a href="https://breakerspace.libcal.com/space/168610">https://breakerspace.libcal.com/space/168610</a></p>
<p>Questions: <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a></p>
```

### Lab And Lounge Reserved For Activity

Template name and default event title: `Lab and lounge reserved for activity`

```html
<p>The Breakerspace instrument lab and lounge are reserved for a confirmed activity.</p>
<p><strong>Individual instrument reservations are unavailable across the lab, and the lounge is unavailable, for the full listed period, including setup and cleanup.</strong></p>
<p><strong>Physical activity location:</strong> MIT Building 8, Rooms 8-102A and 8-102.</p>
<p>Check individual instrument availability in LibCal:<br />
<a href="https://breakerspace.libcal.com/space/168610">https://breakerspace.libcal.com/space/168610</a></p>
<p>Questions: <a href="mailto:dmse-breakerspace@mit.edu">dmse-breakerspace@mit.edu</a></p>
```

Do not expose participant names, private class information, organizer contact details, or internal notes. Reserve Room 8-102A for the full setup-through-cleanup interval for lab-only events; this must block all eleven individual instrument calendars. Reserve Room 8-102 only for lounge-only events and do not apply a lab-wide instrument block. For combined events, reserve both rooms for the same interval and verify that all eleven instrument calendars are blocked. The shared calendar notice communicates the closure but does not replace the applicable room reservation.

LibCal currently shows registration disabled in all informational template editors but may restore a 15-seat registration form when an event is created from one of them. This behavior was accepted on 2026-08-04: event creators may leave it enabled as an optional signal of intent or disable it before publication. Registration has no effect on the room reservation or instrument-calendar block.

## Editing Sequence

1. **Revise FTIR as the pilot.** Apply the shared settings, mapped title and URL, description, reminder, and follow-up.
2. **Create and inspect a temporary FTIR event.** Use a nonpublic/test calendar or unpublished state if the administrative interface provides one. Otherwise remove the temporary event immediately after verification.
3. **Revise the other seven existing training templates.** Work from the settings table rather than copying prose from the old templates.
4. **Create the hardness-tester and ion-mill templates.** Duplicate the revised FTIR template if LibCal offers a reliable duplicate action, then replace every title, public name, and URL. Otherwise create each from the shared settings table.
5. **Rename and revise the informational templates.** Apply the approved Lab Assistant copy and create the three scope-specific reserved-activity templates above.
6. **Audit future events already on the calendar.** Correct any event that still carries an old title, description, category, image, reminder, follow-up, registration rule, or access promise.
7. **Run the verification procedure below.** Do not delete the pre-revision captures until the new state has been captured and reviewed.

## Template Completion Checklist

Mark a row only after the template itself and one event created from it have been checked.

| Template | Settings | Description and More Info | Emails | Test event |
| --- | --- | --- | --- | --- |
| Nicolet iS5 FTIR Spectrometer Training | [x] | [x] | [x] | [x] |
| DSX-1000 Digital Optical Microscope Training | [x] | [x] | [x] | [x] |
| Phenom Scanning Electron Microscopes (SEM) Training | [x] | [x] | [x] | [x] |
| Aeris Research X-Ray Diffractometer (XRD) Training | [x] | [x] | [x] | [x] |
| Microtrac Sync Particle Size Analyzer Training | [x] | [x] | [x] | [x] |
| Duetta Fluorescence and Absorbance Spectrometer Training | [x] | [x] | [x] | [x] |
| XploRA Confocal Raman Microscope Training | [x] | [x] | [x] | [x] |
| Instron 68TM-50 Universal Testing System Training | [x] | [x] | [x] | [x] |
| Nemesis 5100G2 Hardness Tester Training | [x] | [x] | [x] | [x] |
| SEMPrep 2 Broad Beam Ion Mill Training | [x] | [x] | [x] | [x] |
| Lab Assistant on duty | [x] | [x] | N/A | [x] |
| Lab reserved for activity | [x] | [x] | N/A | [x] |
| Lounge reserved for activity | [x] | [x] | N/A | [x] |
| Lab and lounge reserved for activity | [x] | [x] | N/A | [x] |

## Verification Procedure

For each instrument-training template, create or inspect an event and verify:

* The public title identifies the correct instrument and includes `Training`.
* The event appears in the `Instrument Training` category.
* The event uses a one-hour calendar block and contains no prose about starting early, ending early, or MIT time conventions.
* Registration requires MIT authentication, allows three in-person participants, allows no guests, and has a one-person waitlist.
* Registration opens two weeks before the event and closes at the event start.
* The description includes the approved full-session wording, room and arrival information, current Qualtrics link, correct canonical instrument-page URL, and contact address.
* The description contains no instrument operations, training-outcome list, access promise, 48-hour claim, Quick Guide link, placeholder text, or stale manufacturer link.
* The reminder contains preparation, attendance, and cancellation guidance but no MIT-time explanation.
* The follow-up points to the website and explicitly avoids confirming login or tap access.
* The **More Info** destination opens the correct canonical instrument page.
* The event has no fragile featured image.
* The public event works in the normal calendar view and remains understandable without category color.

For **Lab Assistant on duty**, verify that the description distinguishes support availability from lab opening hours. The template editor should keep registration disabled, but the accepted LibCal inheritance behavior above may enable it on a created event.

For the three **reserved activity** templates, verify that the baked-in title, room number, and scope agree. A lab-only or combined event must block all eleven instrument calendars for the same setup-through-cleanup interval. A lounge-only event must reserve Room 8-102 without applying a lab-wide instrument block.

Finally:

1. Register for a temporary training event with a test MIT account when practical.
2. Confirm the registration confirmation, reminder, cancellation path, and follow-up contain the expected links and no old access claims.
3. Check the event in both embedded views — `https://breakerspace.mit.edu/calendar.html` and `https://breakerspace.mit.edu/training.html#upcoming-training-sessions` — and in the full LibCal calendar.
4. Check one event on a narrow/mobile viewport and one keyboard-only path through registration.
5. Remove the temporary registration and event.
6. Capture the revised template settings and email previews as PDFs or screenshots for the next audit.
7. Update the archival record and site task list with the completion date, any deliberate deviations, and any future events that still need correction.

## Completion Record

| Field | Record |
| --- | --- |
| Editor | Justin Lavallee |
| Revision started | 2026-08-04 |
| Revision completed | 2026-08-04 |
| Ten instrument-training templates verified | Yes — template forms reopened after save and ten unpublished test events created, inspected, and removed on 2026-08-04 |
| Four informational templates verified | Yes — all four verified through unpublished test events that were removed after inspection |
| Future events audited through | 2027-12-31 — event 17324794 was created after the initial no-results audit, corrected to `Lab reserved for activity`, and verified to block all eleven instrument calendars from 3:00–4:00 PM on 2026-08-04 |
| Test registration completed | Yes — on 2026-08-05 a keyboard-only path in Firefox reached the embedded calendar from the Breakerspace site and completed LibCal event registration; Safari keyboard traversal was separately confirmed with `Option-Tab` |
| Revised captures stored | Yes — `~/.codex/visualizations/2026/08/04/019fcd80-7d8d-7182-b13b-3e6671ac0745/libcal-revised-captures/` (outside the repository; copy to the lab's permanent capture archive when convenient) |
| Deviations or follow-up work | Description and More Info fields were entered in Source mode as semantic HTML so links and emphasis publish correctly. LibCal may restore a 15-seat registration form when an informational event is created even though registration is disabled in its template; this was accepted as harmless and potentially useful. The generic reserved-activity template was replaced by lab-only, lounge-only, and combined templates with baked-in titles and room scopes. Both public embeds and the full LibCal event page display the corrected live lab reservation. Notifications, cancellation/follow-up behavior, and complete live registration were subsequently verified by the operational owner. Formal VoiceOver conformance testing was not performed; Breakerspace relies on MIT-supported services and vendor conformance documentation for platform code, remains responsible for authored content and configuration, provides an email alternative, and will respond to or escalate reported barriers. |
