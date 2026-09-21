# LibCal 24/7/365 Access Verification

Last inspected: 2026-09-21. All dates and times below use the public LibCal display in Eastern Time.

The lounge and instrument lab permit access **24 hours a day, 365 days a year** for users with approved access. Training, reservations, eligibility, and working-alone requirements still apply. Lab Assistant events identify scheduled staff support.

The owner updated LibCal. This record covers public pages and selectable booking times only; it does not certify private administrative settings. No LibCal settings were changed and no registrations or reservations were submitted during this inspection. Repository changes publish website copy and the website's calendar embed independently of LibCal configuration.

## Confirmed Public Results

| Public surface | Observed result on September 21 |
| --- | --- |
| [LibCal homepage](https://breakerspace.libcal.com/) | Today's Hours displayed **24 Hours**. |
| [Weekly hours](https://breakerspace.libcal.com/hours) | All seven days of September 20–26 displayed **24 Hours**. |
| Monthly hours on the same page | Every date from September 21 through December 31, 2026 displayed **24 Hours**, including weekends, Thanksgiving, and Christmas. December's Next control was disabled. |
| [Accessible instrument booking](https://breakerspace.libcal.com/r/accessible?lid=19797&gid=41631) | The date selector offered September 21–24, consistent with the three-calendar-day booking window. |
| Instrument booking on September 22 and 24 | All eleven instruments offered 96 selectable intervals, beginning at **12:00 AM–12:15 AM** and ending at **11:45 PM–11:59 PM**. |
| Instrument booking on September 23 | All eleven instruments offered 92 intervals. The only missing interval was **6–7 PM**, matching the Lab Assistant event described below. |

These results confirm overnight availability on the inspected dates. The published hours view did not expose 2027, and the booking window did not expose later weekends or holidays. Those display limits do not establish that later dates are closed. A reservation spanning midnight was not submitted or tested.

## Outstanding Booking Coordination

### Assistant Shift Blocks The Entire Lab

The [September 23 Lab Assistant on duty event](https://breakerspace.libcal.com/event/17627899), **6–7 PM**, lists **Breakerspace Laboratory (Room 8-102A)** as its location. All eleven instrument calendars omit exactly that interval.

The [staff scheduling guide](../_staff-training/scheduling.md) and [event-template runbook](libcal-manual-update-guide.md#lab-assistant-on-duty-template) document that selecting this room blocks every instrument. The public result matches that behavior; an overlapping independent reservation cannot be excluded from the public view.

* [ ] Owner: change the event or affected recurring series to **No Location**, retaining the physical room in its description. Check other support events for the same setting.
* [ ] Recheck the public instrument calendars. Support shifts should leave instruments available except where a separate reservation or closure applies.

The event description also says no registration is required while a registration form with 15 seats appears. The runbook already records this inherited registration behavior as accepted. It is not a new access-hours issue or a request to change the registration policy.

### Training Instruments Remain Bookable

| Training event | Public booking discrepancy |
| --- | --- |
| [Optical microscope, September 22, noon–1 PM](https://breakerspace.libcal.com/event/17635220) | The optical microscope remained selectable throughout the session. |
| [SEM, September 22, 2–3 PM](https://breakerspace.libcal.com/event/17635272) | Both the Phenom Pure and Phenom XL remained selectable throughout the session. |
| [SEM, September 23, 4–5 PM](https://breakerspace.libcal.com/event/17627921) | Both the Phenom Pure and Phenom XL remained selectable throughout the session. |

* [ ] Owner: check for existing reservations, then reserve the individual instrument used for each session, including needed setup and cleanup. Reserve both SEMs only when both are needed. Check recurring sessions as well.
* [ ] Recheck that the training instrument is unavailable while unrelated instruments remain available. Keep training events set to **No Location**; selecting the lab room would block every instrument.

These are event/reservation coordination issues, separate from the successful overnight-hours update. Changing a template does not repair events or recurring series already created from it.

## Settings To Keep Coordinated

The table identifies the configuration areas to check when maintaining 24/7/365 access. Administrative menu labels, schedule assignments, and inheritance were not inspected; the public results above are the verification evidence.

| Configuration area | Required outcome / owner check |
| --- | --- |
| Published location hours | Breakerspace's regular weekly schedule displays **24 Hours** for every day. Ensure the applicable schedule dates continue into future terms and years. |
| Published exceptions and holidays | Remove obsolete reduced-hours or closed-day overrides that conflict with the access decision. Retain intentional, approved closures and communicate them accurately. |
| Space-booking hours | Check the schedule assigned to the Breakerspace booking location, lab room, and all eleven instrument seats, including any category or resource overrides. Each should permit the full day except for actual reservations or closures. A correct hours widget alone does not prove bookable hours are correct. |
| Booking exceptions and schedule dates | Check date-specific exceptions and future schedule coverage separately from published hours. Confirm weekends, holidays, and the year boundary when they enter the booking window. |
| Existing booking rules | Preserve the three-calendar-day advance window, new-date release at midnight, 15-minute intervals, and existing reservation limits. These control booking behavior independently of access hours. |
| Calendar events and resource assignments | Support events use **No Location**. Training uses **No Location** plus a separate instrument reservation. Whole-lab activities use the lab room intentionally. See the [scheduling guide](../_staff-training/scheduling.md) and [whole-lab reference](../_staff/whole-lab-reservations.md). |
| Reused copy and embeds | Check event descriptions, templates, notices, and any separately maintained embeds for obsolete opening-hours statements or visible-time limits. The repository embed now permits midnight–midnight (`mi=00:00:00`, `ma=24:00:00`); `fh=08:00:00` only sets its initial scroll position. |

## Follow-Up Verification

* [x] Confirm the homepage and weekly/monthly hours views show 24-hour access on the dates inspected above.
* [x] Inspect all eleven instruments for early-morning and late-night availability within the current booking window.
* [ ] Resolve and recheck the support-event and training-reservation discrepancies above.
* [ ] Check actual weekend and holiday instrument availability when those dates enter the three-day booking window.
* [ ] Verify the published schedule continues into 2027 when that period becomes visible, or confirm its coverage administratively.
* [ ] If confirming a continuous cross-midnight reservation is operationally necessary, have the owner test that workflow and cancel any test reservation afterward. This inspection did not create one.

The website uses `_data/lab.yml` as the source for its short **24/7/365** statement and the full **24 hours a day, 365 days a year** wording. Historical audit and release records retain the old schedule as dated evidence; current handoff and maintenance documents explicitly supersede it.
