{%- comment -%}
Shared closeout checklist, identical at the end of every instrument training.
The concise trainer workflow lives in _staff-training/run-a-training.md; this
file contains only the instrument-guide checkboxes.

Takes one parameter:
  moira — the instrument's Moira group name, e.g. dmse-brkrspc-ftir

The first four items are participant-facing and belong inside the advertised
training window. The final three are trainer administration that can continue
after attendees leave. Instrument-specific closeout items (returning a sample
kit, confirming a covered crystal) belong in the guide, not here.
{%- endcomment -%}
* [ ] Confirm who attended and each attendee's Kerberos username. Tell them you will add them to `{{ include.moira }}` after the session.
* [ ] Remind attendees that physical tap access is separate, and is processed by the lab manager after their one-time Qualtrics record is complete. The trainer does not grant tap access.
* [ ] For first-time users, confirm they know how to create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership. Walk them through the self-service steps when time allows, or include the steps in the follow-up; staff cannot add someone before the account exists.
* [ ] Point attendees to the reservation calendar, the operating page and its Quick Guide, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] **After attendees leave:** add every attendee to [`{{ include.moira }}`](https://groups.mit.edu/webmoira/list/{{ include.moira }}). Do **not** record attendee Kerberos usernames in this repository.
* [ ] **After attendees leave:** send every attendee a Breakerspace Slack invitation at their `@mit.edu` address and include `#breakerspace-help` in the follow-up.
* [ ] **After attendees leave:** record any instrument, guide, exercise, or sample issue the session surfaced.
