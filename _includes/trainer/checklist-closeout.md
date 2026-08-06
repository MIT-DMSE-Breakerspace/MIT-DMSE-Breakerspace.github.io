{%- comment -%}
Shared administrative closeout checklist, identical at the end of every
instrument training. The canonical sequence and its reasoning live in
_staff-training/access-and-logistics.md#trainer-closeout-sequence; this file is
only the checkable steps.

Takes one parameter:
  moira — the instrument's Moira group name, e.g. dmse-brkrspc-ftir

The first four items are participant-facing and belong inside the advertised
training window. The final three are trainer administration that can continue
after attendees leave. Instrument-specific closeout items (returning a sample
kit, confirming a covered crystal) belong in the guide, not here.
{%- endcomment -%}
* [ ] Tell attendees that you will add them to `{{ include.moira }}` after the session, and what that add does on this instrument. Where the group controls workstation access, their own Kerberos login starts working from their next visit onward — which is why the trainer logged in during the session. Where it does not, say what actually governs sign-in instead, and do not describe the Moira add as the thing granting access. See [comms-only groups]({% link _staff-training/access-and-logistics.md %}#comms-only-groups-xrd-hardness-tester-and-ion-mill).
* [ ] Remind attendees that physical tap access is separate, and is processed by the lab manager after their one-time Qualtrics record is complete. The trainer does not grant tap access.
* [ ] For first-time users, confirm they know how to create an MIT Dropbox for Business account and request DMSE Breakerspace Team membership. Walk them through the self-service steps when time allows, or include the steps in the follow-up; staff cannot add someone before the account exists.
* [ ] Point attendees to the reservation calendar, the operating page and its Quick Guide, `#breakerspace-help`, and dmse-breakerspace@mit.edu.
* [ ] **After attendees leave:** add every attendee to `{{ include.moira }}`. Do this even if the group grants no workstation login — the mailing-list role depends on it. Do **not** record attendee Kerberos usernames in this repository.
* [ ] **After attendees leave:** send every attendee a Breakerspace Slack invitation at their `@mit.edu` address and include `#breakerspace-help` in the follow-up.
* [ ] **After attendees leave:** record any instrument, guide, exercise, or sample issue the session surfaced.
