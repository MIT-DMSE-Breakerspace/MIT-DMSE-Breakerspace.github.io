---
title: Scheduling Calendar Events
description: Short staff guide for creating calendar events without unintentionally blocking instrument reservations.
guide_status: Current shared reference
guide_revision: 2026-09-17
trainer_links:
  - label: Training calendar
    url: https://breakerspace.libcal.com/calendar?cid=19408
  - label: Instrument reservations
    url: https://breakerspace.libcal.com/space/168610
---

# Scheduling Calendar Events

## Choose The Location Carefully

Selecting **Breakerspace Laboratory (Room 8-102A)** under **In-Person Location/Space** blocks reservations for all eleven instruments during the event. The location is chosen when an event or recurring series is created; it is not supplied by the event template.

| Event | Location selection | Instrument reservation |
| --- | --- | --- |
| `Lab Assistant on duty` | **No Location** | None |
| Instrument training | **No Location** | Reserve the individual instrument separately |
| Whole-lab teaching or closure | **Breakerspace Laboratory (Room 8-102A)** | The whole lab should be blocked |

The event description already tells users where the activity takes place. Do not select the whole lab merely to display its room number.

## Lab Assistant On Duty

1. Create the event or recurring series from the `Lab Assistant on duty` template.
2. Under **Event Location**, select **No Location**.
3. Save the event. Do not make a separate room or instrument reservation.

Instrument reservations should remain available while a Lab Assistant is present.

## Instrument Training

1. Create the event or recurring series from the appropriate instrument-training template.
2. Under **Event Location**, select **No Location**.
3. Save the event.
4. Open [Instrument reservations](https://breakerspace.libcal.com/space/168610) and reserve the individual instrument used in the training for the same interval.
5. For SEM training, reserve the SEM that will actually be used; reserve both only when the session requires both.

Check for an existing reservation before adding the training reservation. The separate instrument reservation prevents another user from booking the training instrument without blocking unrelated instruments.

## Check The Result

After creating or copying an event or recurring series, check the public [instrument availability](https://breakerspace.libcal.com/r/accessible?lid=19797&gid=41631):

* Lab Assistant hours should not make any instrument unavailable.
* Training should make only the reserved training instrument unavailable.
* A whole-lab teaching reservation should make all eleven instruments unavailable.

Changing a template does not update events already created from it. Correct existing events or the complete recurring series separately.
