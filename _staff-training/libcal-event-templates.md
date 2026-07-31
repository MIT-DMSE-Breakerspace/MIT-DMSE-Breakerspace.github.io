# LibCal Event Templates — Archival Record

Last reviewed: 2026-07-31

**Status: historical reference only. Do not use this file as a source for current training content.**

This is a record of the ten LibCal event templates as they existed on 2026-07-31, captured from the LibCal admin **Edit Template** forms before any revision. It exists so that a future editor can see what the templates said, identify what changed, and understand why.

The templates are **outdated and contain factual errors** (see [Known Problems](#known-problems)). They predate the redesigned website, the consolidated instrument pages, the Quick Guides, and the access facts recorded in [`access-and-logistics.md`](access-and-logistics.md). Where this file and any current staff guide disagree, **the current guide is correct and the template is wrong.**

The intended direction is the reverse of how these templates were built: rather than restating training content inside LibCal, each template should carry the minimum needed to register for a session and link to the website for everything else. See [Revision Direction](#revision-direction).

Source PDFs are kept outside the repository. They are print-to-PDF captures of an admin UI, roughly 10 MB total, not diffable, and they include LibCal's own preview placeholder data. Ask the lab manager for the current copy.

## Why Manual Editing Is The Only Option

The [LibCal Public API 1.1](https://ask.springshare.com/libcal/faq/1407) cannot edit events or templates. Reviewed against the full OpenAPI specification on 2026-07-31:

* Every event route is read-only: `GET /events`, `GET /events/{id}`, `GET /event_search`, `GET /events/bookings`, `GET /events/{id}/registrations`, `GET /events/form/{id}`.
* The only event writes are end-user booking actions: `POST /events/{id}/register` and `POST /events/{id}/cancel/{booking_id}`.
* **Event templates are not exposed by the API at all.** The word "template" does not appear anywhere in the specification.
* The eleven write endpoints in the entire API are all reservation or registration actions across spaces, equipment, passes, and events. None create or modify event content.

So template edits must be made by hand in the LibCal admin web forms, and there is no automation path. **This is the main argument for keeping LibCal content minimal**: every field removed from ten templates is a field that never needs hand-editing again. Website content is version-controlled, diffable, and reviewable; LibCal content is not.

The API is still useful read-only, with OAuth2 client-credentials auth at `/1.1/oauth/token`. Two plausible uses: reading an upcoming session's roster so a trainer can prepare, and auditing whether live event settings still match what the guides claim. If those are pursued, generate a client ID and secret in LibCal admin and keep them out of this repository.

This reflects API version 1.1 as of 2026-07-31. Re-check if Springshare publishes a write API later.

## The Ten Templates

Eight instrument trainings, plus two informational hours templates that are a different kind of event.

| Template name | Instrument | Notes |
| --- | --- | --- |
| Fourier Transform Infrared (FTIR) Spectrometer Training | Nicolet iS5 | |
| Optical Microscope Training | Olympus DSX-1000 | |
| Scanning Electron Microscope (SEM) Training | Phenom XL **and** Phenom Pure | One combined template for both, matching the shared `dmse-brkrspc-sem` group |
| X-Ray Diffractometer (XRD) Training | Aeris Research | Description wrongly promises login access |
| Particle Size Analyzer (PSA) Training | Microtrac Sync | Heading says "Scanning Electron Microscopes" |
| Fluorescence and Absorbance Spectrometer Training | Horiba Duetta | Contains unfilled placeholder text |
| Raman Spectrometer Training | Horiba XploRA | |
| Universal Testing Machine (UTM) Training | Instron 68TM-50 | Featured image is `utm.JPG` |
| Staffed Open Hours | — | No registration; informational |
| Subject Lab Hours | — | No registration; informational |

**No template exists for the hardness tester or the ion mill.** Both need a decision before either instrument's training can be advertised. For the ion mill, first decide whether the right artifact is a training event at all or a staff-assisted-use arrangement.

## Shared Settings

Identical across all eight instrument training templates as captured:

| Setting | Value |
| --- | --- |
| Start / End time | Not set in template |
| Setup / Teardown padding | No padding |
| Registration required | Yes |
| Maximum in-person registrations | 3 |
| Maximum online registrations | 0 |
| Registration form | Instrument Trainings |
| LibAuth authentication | Massachusetts Institute of Technology |
| Registrations open | 2 weeks before event |
| Registrations close | At event start time |
| Attendance price | 0 USD |
| QR-code check-ins | Yes |
| Maximum guests | No guests |
| Waitlist | Allowed, seat limit 1 |
| Campus | No campus |
| Event organizer | Event Creator |
| Presenter / Audiences / Internal tags | Not set |
| Category | Instrument Training |
| Color | `#B4F0C3` |
| Event note | Empty |
| Email reminder | 1 day before event |
| Follow-up email | 1 hour after event |
| More Info field | Empty on every template |

The **maximum of 3 in-person registrations** matches the 60-minute, three-participant model in the current guides. That is the one shared setting confirmed to still be correct.

Both hours templates differ: no registration required, no waitlist, no emails. `Staffed Open Hours` uses its own category of the same name and describes first-come, first-served access to a lab assistant. `Subject Lab Hours` has no category set and notes that certain instruments may be unavailable during subject support hours.

## Description Structure

Every instrument template followed the same three-part shape:

1. **A shared opening paragraph** — identical across all eight. Stated that trainings take place one-on-one or in small groups with a Breakerspace laboratory assistant, that completing a session provides login access to that instrument via reservation or walk-in during open hours, and that a first training provides tap access to the lab, lounge, and coffee machines.
2. **A per-instrument "provides instruction on the following" list** — a broad overview, sample preparation, formal procedures, basic operations, and sometimes advanced operations.
3. **A per-instrument "More about" block** — model name and a manufacturer webpage link.

The instruction lists are the most reusable content here, but they overlap heavily with the Training Outcome sections already written in the staff guides and with the public instrument pages. Treat them as a checklist of topics rather than as text to carry forward.

## Email Content

Both emails were identical across the eight instrument templates apart from the instrument name.

**Reminder, 1 day before.** Contained three operational details, two of which appear nowhere in the current guides or on the website:

* Sessions "start and end 5 minutes before and after the posted times, respectively (MIT time schedule)."
* "You must attend the entire training session to be cleared to use the instrument without the oversight of a Breakerspace Laboratory assistant."
* A request to cancel if unable to attend, plus a link to the one-time Qualtrics survey for first-time users.

**Follow-up, 1 hour after.** Asserted that the attendee now has login access to the instrument, that a first session provides tap access to lab/lounge/coffee machines, that changes "may take up to 48 hours," and gave the Slack workspace and Dropbox links, closing with `{{OWNER_NAME}}` / `{{OWNER_EMAIL}}`.

## Known Problems

Reasons not to treat these templates as a content source:

1. **The follow-up email promises access that does not exist for three instruments.** It is sent automatically an hour after every session and states the attendee now has login access to the instrument. Per [`access-and-logistics.md`](access-and-logistics.md#comms-only-groups-xrd-hardness-tester-and-ion-mill), the XRD and ion mill have no access control at all and the hardness tester uses a local account. The XRD *description* makes the same false claim. This is the most consequential error: it is automated, outbound, and wrong.
2. **The 48-hour access window is unsourced.** No current page states it. Tap access is processed by the lab manager after the Qualtrics record is complete, with no published turnaround.
3. **Unfilled placeholder text is publicly visible.** The Duetta description contains `**********ADD OPERATIONS**********` twice.
4. **PSA has a copy-paste error** — its "More about" heading reads "Scanning Electron Microscopes."
5. **Two operational rules are undocumented elsewhere.** The 5-minute early start/end convention and the full-attendance requirement are real and trainers should know them, but they contradict the guides' current "no separate skills demonstration" framing and need a decision rather than a copy.
6. **Featured images are inconsistent and fragile.** FTIR, optical, XRD, Raman, and Instron point at `breakerspace.mit.edu/assets/img/*.JPG`; SEM and PSA use LibCal-hosted CloudFront URLs. The site-hosted links break if assets are renamed or moved.
7. **The Instron image is `utm.JPG`**, the same brand-versus-family naming inconsistency resolved for the Moira lists.
8. **Descriptions duplicate the website.** Instruction lists, model names, and manufacturer links all restate content that now lives on the consolidated instrument pages — in a system with no API and no version control.
9. **The `More Info` field is empty on all ten templates**, so there is currently no obvious place a link block would live.
10. **Captures include LibCal preview placeholder data.** The reminder and follow-up previews render sample values such as `John` and `sdoe@gmail.com`, and one preview subject reads "General Meeting." These are LibCal's own placeholders, not lab data.

## Revision Direction

The goal is the least content in LibCal that still lets a student register for the right session and arrive prepared, because LibCal is the only surface here that cannot be automated or version-controlled.

Principles for the rewrite:

* **Keep in LibCal** what LibCal alone can do: title, date and time, the 3-person limit, registration form, LibAuth, waitlist, reminder and follow-up scheduling, category, and enough description to confirm the right session was booked.
* **Move to the website** anything that explains, instructs, or is likely to change: what the instrument does, what the session covers, sample preparation, model details, manufacturer links, and access consequences. Link to the instrument page, its Quick Guide, and the training pathway instead.
* **Never restate access mechanics in an automated email.** They differ by instrument and have already gone stale once. Link to the training pathway and let one page carry the current rule.
* **Write the shared opening paragraph once** and keep it genuinely identical, so future edits are a find-and-replace across ten forms rather than ten separate rewrites.
* **Verify each instrument's claims against its own facts** before pasting shared copy. The current templates are wrong precisely because shared text was cloned without checking whether it applied.

Tracked as a task in [`../_staff/site-todo.md`](../_staff/site-todo.md).
