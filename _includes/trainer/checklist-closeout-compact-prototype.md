{%- comment -%}
Prototype-only compact closeout checklist. The trainer workflow is in
_staff-training/run-a-training.md. The first four actions are
participant-facing; the last three are administrative closeout checks.

Parameters:
  moira  — exact instrument Moira group
  reservations — false when the training does not use a reservation workflow
{%- endcomment -%}
* [ ] Confirm who attended and each attendee's Kerberos username. Tell them you will add them to `{{ include.moira }}` after the session.
* [ ] Say tap access is separate: the lab manager processes it after the one-time Qualtrics record; the trainer does not grant it.
* [ ] Confirm first-time users know how to create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership; staff cannot add a nonexistent account.
* [ ] Point to {% unless include.reservations == false %}reservations, {% endunless %}the operating page, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] **Administrative closeout:** confirm every attendee appears in [`{{ include.moira }}`](https://groups.mit.edu/webmoira/list/{{ include.moira }}) and add anyone not already present. Record no participant names, usernames, or private identifiers here.
* [ ] **After attendees leave:** invite each attendee's `@mit.edu` address to Breakerspace Slack; include `#breakerspace-help` in the follow-up.
* [ ] **After attendees leave:** record surfaced instrument, guide, exercise, or sample issues.
