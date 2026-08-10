{%- comment -%}
Prototype-only compact administrative closeout checklist. The canonical
sequence is in _staff-training/access-and-logistics.md. The first four actions
are participant-facing; the last three continue after attendees leave.

Parameters:
  moira  — exact instrument Moira group
  access — "access-and-comms" or "comms-only"
{%- endcomment -%}
* [ ] Say you will add attendees to `{{ include.moira }}` afterward. {% if include.access == "comms-only" %}This group is **communications only and grants no access**; cover only this instrument's verified sign-in arrangement.{% else %}Membership enables their Kerberos login next visit; the trainer logged in today.{% endif %}
* [ ] Say tap access is separate: the lab manager processes it after the one-time Qualtrics record; the trainer does not grant it.
* [ ] Confirm first-time users know how to create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership; staff cannot add a nonexistent account.
* [ ] Point to reservations, the operating page and approved Quick Guide, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] **After attendees leave:** add everyone to `{{ include.moira }}`, including comms-only groups. Record no participant names, usernames, or private identifiers here.
* [ ] **After attendees leave:** invite each attendee's `@mit.edu` address to Breakerspace Slack; include `#breakerspace-help` in the follow-up.
* [ ] **After attendees leave:** record surfaced instrument, guide, exercise, or sample issues.
