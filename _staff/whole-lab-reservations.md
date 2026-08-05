# Whole-Lab Reservation Policy And Staff Workflow

Last reviewed: 2026-08-04

This is the internal operating procedure for teaching exercises, orientations, organized group activities, maintenance, and other approved activities that require coordinated or exclusive use of the Breakerspace instrument lab, lounge, or both.

## Reservation Scope

Choose the physical scope before creating the shared event or room reservation:

* **Lab only:** Use the `Lab reserved for activity` event template. The physical activity location is Room 8-102A, and all eleven individual instrument calendars must be blocked for the complete setup-through-cleanup interval.
* **Lounge only:** Use the `Lounge reserved for activity` event template. The physical activity location is Room 8-102. Do not apply a lab-wide instrument block; the instrument lab remains subject to its ordinary individual calendars.
* **Lab and lounge:** Use the `Lab and lounge reserved for activity` event template. The physical activity locations are Rooms 8-102A and 8-102, and all eleven individual instrument calendars must be blocked for the complete interval.

The event titles are intentionally safe defaults. Add a short qualifier only when it helps users understand the closure without exposing participant names, private class information, or internal notes.

## Policy

* Whole-lab reservations are staff-mediated and are not available through the public self-service instrument calendars.
* Requests must arrive at `dmse-breakerspace@mit.edu` at least one week in advance. Encourage earlier planning for recurring sessions, large groups, multi-instrument activities, or work requiring staff support, training, access changes, or sample review.
* A request is not a reservation until Breakerspace staff have reviewed it and sent written confirmation.
* Approval depends on existing reservations, staffing, safety, access, the proposed activity, and whether exclusive use is actually necessary.
* Routine instrument use and individual project work remain subject to normal instrument reservations.
* Include setup and cleanup in the blocked period. Add additional buffer when room reset, sample staging, or equipment changes require it.

## Information Required From The Organizer

1. Course, program, or activity name.
2. Requested date and full time range, including setup and cleanup.
3. Expected attendance.
4. Instruments and parts of the lab involved.
5. Responsible instructor or organizer and participating teaching staff.
6. Participant training and access status.
7. Samples, hazards, unusual workflows, and staff-support needs.
8. Alternative dates or times when possible.

## Scheduling Workflow

1. Acknowledge the request and collect any missing information.
2. Check every instrument calendar for existing reservations, as well as other teaching, maintenance, and staffing commitments.
3. Resolve conflicts before approval. Do not displace an existing user without direct staff coordination and notice.
4. Confirm the activity, staffing model, trained operators, sample compatibility, room capacity, and setup or reset requirements.
5. Create the applicable LibCal room reservation or reservations for the complete interval. A Room 8-102A reservation blocks new reservations for the instrument seats assigned to the lab. A lounge-only activity must use the Room 8-102 scope and must not use the lab room as a substitute. If LibCal does not provide a separate lounge reservation resource, record that deviation and use the shared lounge event for the public notice rather than creating an unintended instrument block.
6. Add the activity to the shared calendar using `Lab reserved for activity`, `Lounge reserved for activity`, or `Lab and lounge reserved for activity` as appropriate.
7. Verify the signed-out public reservation view against the selected scope. For lab-only and combined reservations, every instrument must be unavailable for the complete interval; if the room reservation did not block an instrument, add a staff-controlled instrument block and investigate the resource assignment. For lounge-only reservations, confirm that no unintended lab-wide instrument block was introduced.
8. Send written confirmation stating the approved date and time, setup access, responsible staff contacts, participant preparation, and any conditions.
9. If the activity changes or is canceled, update every applicable room reservation and the shared event, remove any supplemental instrument blocks, then verify the public grids again.

## LibCal Configuration To Verify

Confirmed behavior: reserving Room 8-102A blocks new reservations for all eleven instrument seats assigned to the lab. On 2026-08-04, a 3:00–4:00 PM lab reservation was verified in the signed-out accessible view: all eleven calendars stopped offering times at 3:00 PM and resumed at 4:00 PM.

The remaining collision behavior must be tested before relying on the room hierarchy without manual conflict review:

* Does LibCal refuse or warn about a room reservation that overlaps an existing seat reservation?
* If it permits the room reservation, does the existing seat reservation remain valid, become canceled, or become hidden while still active?
* Does either the seat holder or the room organizer receive an automatic conflict or cancellation message?
* How does the overlap appear in staff and signed-out public views?

Until that test is complete, always inspect existing seat reservations before creating or confirming the room reservation. Resolve any overlap directly rather than relying on LibCal to decide what should happen.

## Active Seat-Reservation Horizon

LibCal is configured so public instrument-seat reservations open three calendar days ahead, with the next eligible day becoming available at midnight. The coordinated planning model is:

* whole-lab requests are due at least seven calendar days ahead;
* staff review and enter approved room reservations promptly, ideally no later than four days ahead; and
* public instrument-seat reservations open three days ahead.

This creates a planning gap in which the room can be reserved before users can claim its instrument seats. Staff should process an on-time whole-lab request promptly and enter the approved room reservation before the three-day seat window opens.

The setting does not eliminate the need to check for conflicts from older bookings, late whole-lab requests, maintenance closures, or manually created future reservations. Review reservation patterns after launch to confirm that three days gives ordinary users enough time for planned experiments and project coordination.
