{%- comment -%}
Prototype-only compact administrative closeout checklist. The canonical
sequence is in _staff-training/access-and-logistics.md. The first four actions
are participant-facing; the last three are administrative closeout checks.

Parameters:
  moira  — exact instrument Moira group
  access — "access-and-comms" or "comms-only"
{%- endcomment -%}
* [ ] Confirm an accurate accounting of everyone who attended and each attendee's Kerberos username. Explain `{{ include.moira }}` membership: {% if include.access == "comms-only" %}this group is **communications only and grants no access**; cover only this instrument's verified sign-in arrangement.{% else %}it enables their Kerberos login next visit; the trainer logged in today.{% endif %} You may open [WebMoira](https://groups.mit.edu/webmoira/list/{{ include.moira }}) on the trainer's laptop and have participants enter their own usernames while you verify the entries; otherwise, add them immediately after the session.
* [ ] Say tap access is separate: the lab manager processes it after the one-time Qualtrics record; the trainer does not grant it.
* [ ] Confirm first-time users know how to create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership; staff cannot add a nonexistent account.
* [ ] Point to reservations, the operating page, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] **Administrative closeout:** confirm every attendee appears in [`{{ include.moira }}`](https://groups.mit.edu/webmoira/list/{{ include.moira }}), including comms-only groups, and add anyone not already present. Record no participant names, usernames, or private identifiers here.
* [ ] **After attendees leave:** invite each attendee's `@mit.edu` address to Breakerspace Slack; include `#breakerspace-help` in the follow-up.
* [ ] **After attendees leave:** record surfaced instrument, guide, exercise, or sample issues.
