{%- comment -%}
Shared administrative closeout checklist, identical at the end of every
instrument training. The canonical sequence and its reasoning live in
_staff-training/access-and-logistics.md#trainer-closeout-sequence; this file is
only the checkable steps.

Takes one parameter:
  moira — the instrument's Moira group name, e.g. dmse-brkrspc-ftir

Instrument-specific closeout items (returning a sample kit, confirming a covered
crystal) belong in the guide, not here.
{%- endcomment -%}
* [ ] Add every attendee to `{{ include.moira }}`. Do this even if the group grants no workstation login — the mailing-list role depends on it. Do **not** record attendee Kerberos usernames in this repository.
* [ ] Send every attendee a Breakerspace Slack invitation at their `@mit.edu` address, and point them to `#breakerspace-help`.
* [ ] Remind attendees that physical tap access is separate, and is processed by the lab manager after their one-time Qualtrics record is complete. The trainer does not grant tap access.
* [ ] For first-time users, confirm they created an MIT Dropbox for Business account and requested DMSE Breakerspace Team membership, or walk them through the self-service steps. Staff cannot add someone before the account exists.
* [ ] Point attendees to the reservation calendar, the operating page and its Quick Guide, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] Record any instrument, guide, exercise, or sample issue the session surfaced.
