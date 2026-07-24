# ScienceScripts web accessibility prototype

This directory contains local, review-only copies of the ScienceScripts XRD and
Raman HTML applications. The copies were imported from:

- Repository: <https://github.com/feranick/ScienceScripts>
- Upstream commit: `4992fc9ae7bbb1ca0ea43f3442abbedb60b32370`
- Import date: 2026-07-23
- XRD application version: `v2026.06.26.2`
- Raman application version: `raman-v2026.07.22.1`

The purpose of this prototype is to test site integration and candidate
accessibility improvements before proposing equivalent changes upstream. These
changes are not a WCAG conformance certification.

## Product position

The applications are intended for laptop and desktop computers. The surrounding
Breakerspace teaching pages state that a larger screen and a keyboard with a
mouse or trackpad are recommended. Phones and tablets are not currently
supported.

The applications are not blocked on small screens. Viewport width is not a
reliable proxy for device type: a desktop user at high browser zoom can have the
same CSS viewport width as a phone. Instructions and controls therefore stack at
narrow widths, while the plot and result table retain the two-dimensional space
their meaning requires.

This follows the scope of WCAG 2.2 Success Criterion 1.4.10: two-dimensional
interfaces may require two-directional presentation, but that exception should
not be extended to headings, instructions, form controls, or other content that
can reflow.

Reference:
<https://www.w3.org/WAI/WCAG22/Understanding/reflow.html>

## Changes applied to both applications

### Keyboard access

- Added a skip link from the beginning of the document to the plot and results.
- Added a numeric peak/band-center field and an **Add peak** or **Add band**
  button. This provides an alternative to right-clicking a location on the
  Plotly chart.
- Replaced clickable `span` elements used to remove layers with native
  `button` elements.
- Added visible `:focus-visible` outlines to buttons, inputs, selects, and the
  file-picker label.
- Changed the low-contrast white text on teal and orange controls to dark text,
  and darkened the low-contrast version label.
- Added Escape-key handling to close the reference-subtraction dialog.
- Returned focus to the control that opened the dialog after it closes.

### Names, roles, and relationships

- Connected terse numeric-control labels to their inputs with `for` and `id`.
- Added labels for Raman adjustment and RRUFF search controls.
- Added `role="status"` and `aria-live="polite"` to scan/spectrum counts and the
  RRUFF status message.
- Marked the reference-subtraction overlay as a dialog with `aria-modal` and an
  accessible heading.
- Labeled checkbox groups for plotted layers and subtraction targets.
- Added an accessible name to the interactive plot region.
- Added visually hidden captions to peak-fit result tables.
- Added explicit landmark and heading relationships for the control sidebar and
  the main plot area.

### Reflow and zoom

- Changed the body from a fixed `100vh` height to `min-height: 100vh`.
- At narrow CSS widths, stacked the control panel above the plot rather than
  allowing controls to disappear horizontally.
- Preserved a minimum plot height and placed wide fit-result tables in their own
  horizontal scrolling region.
- Constrained dialog width to the available viewport.

### Safer dynamic content

- Replaced result-row templates that inserted file-derived labels through
  `innerHTML` with cells populated through `textContent`.
- Replaced status and cursor templates with `textContent`.

This reduces the chance that a crafted filename or file metadata value will be
interpreted as HTML. Remaining `innerHTML` uses should still be reviewed. Most
remaining instances clear a container or insert fixed application-authored
messages.

## Raman-specific changes

- Added labels for the spectrum adjustment target, offset step, and scale step.
- Added a programmatic label to the RRUFF query and results controls.
- Added an accessible name to the icon-only RRUFF search button.
- Kept the existing on-screen plus/minus buttons as alternatives to mouse-wheel
  spectrum adjustment.

## Suggested upstream porting procedure

1. Compare each prototype file with its upstream source:

   ```sh
   diff -u src/XRD/plotter/xrd_plotter.html \
     path/to/breakerspace/assets/tools/sciencescripts/xrd/index.html

   diff -u src/Raman/raman_plotter.html \
     path/to/breakerspace/assets/tools/sciencescripts/raman/index.html
   ```

2. Port changes by feature rather than copying the entire file. ScienceScripts
   may have changed since commit `4992fc9`.
3. Keep the keyboard peak-entry controls and the chart-context-menu behavior
   connected to the same `peakGuessesX` state.
4. Preserve native HTML controls instead of recreating their behavior with
   clickable generic elements.
5. Retain `textContent` or explicit DOM construction for values derived from
   filenames, file metadata, reference databases, or other external data.
6. Run the manual tests below before merging upstream.

## Manual test checklist

### Keyboard-only

- Tab from the skip link through every control in a logical order.
- Open files using the focused file-selection label and keyboard activation.
- Turn on peak selection, enter a numeric center, add it, and run a fit without
  using a pointer.
- Remove a plotted layer with its keyboard-focusable remove button.
- Open the subtraction dialog, operate all controls, close with Escape, and
  confirm focus returns to the opener.
- In Raman, change offset and scale using the on-screen buttons rather than the
  mouse wheel.

### Browser zoom and narrow viewport

- At a 1280-pixel-wide desktop window, test browser zoom through 400%.
- Confirm that headings, instructions, controls, and status messages do not
  require horizontal scrolling to be read.
- Confirm that the plot remains available and that any two-dimensional
  scrolling is confined to the plot or results region as much as practical.
- Test at approximately 320, 768, 1024, and 1440 CSS pixels.

### Screen reader

- Confirm the application title, control-panel region, main region, plot region,
  field labels, status changes, dialog name, checkbox groups, and result-table
  caption are announced.
- Confirm rapidly moving cursor-position updates are not announced on every
  pointer movement; the cursor display intentionally is not a live region.
- Confirm errors are understandable. The current use of JavaScript `alert()`
  should be evaluated in the browsers and screen readers the project supports.

### Data and regression

- Load each supported file type.
- Compare processing and fitted results against the unmodified upstream version
  using the same test files and settings.
- Test labels containing spaces, punctuation, non-ASCII characters, and HTML-like
  text.
- Test malformed, empty, unusually large, and duplicate files.
- Confirm CSV downloads still work both directly and from the sandboxed
  Breakerspace iframe.

## Known gaps requiring further work

- Plotly's own toolbar, graph interaction, and screen-reader behavior require
  separate testing; the surrounding application changes do not establish that
  the chart itself is fully accessible.
- The reference-subtraction dialog restores focus and closes with Escape but
  does not yet implement a full focus trap.
- JavaScript `alert()` remains the principal error mechanism.
- Color contrast has not yet been measured systematically.
- Touch, switch-control, speech-input, and multiple screen-reader/browser
  combinations have not yet been tested.
- Neither application currently provides a complete textual summary of the
  plotted raw data. Exported CSV and the fit-results table provide partial
  nonvisual alternatives.
- Plotly and, for Raman HDF5 support, `h5wasm` are loaded from third-party CDNs.
  Production hosting should consider reviewed local copies with license notices
  and a restrictive Content Security Policy.
- Raman's optional RRUFF features make external network requests and may fail
  because of CORS or network policy. Core teaching activities should not depend
  on that connection.
- The iframe currently uses `sandbox="allow-scripts allow-downloads"`. Supported
  browsers must be tested to confirm file selection, HDF5 WebAssembly loading,
  Plotly, RRUFF requests, and downloads work with those minimum permissions.

## Recommended acceptance threshold

Before these applications are described as production Breakerspace resources:

1. Resolve any keyboard blockers.
2. Verify reflow at 400% desktop zoom.
3. Test at least one current version each of Safari, Chrome, Firefox, and Edge.
4. Test VoiceOver with Safari and one Windows screen-reader/browser combination.
5. Compare numerical output against known reference datasets.
6. Document external requests and the supported data-size range.
7. Have both the ScienceScripts maintainer and Breakerspace content owner review
   the final changes.

## License

The application code remains licensed under GNU GPLv3. Preserve the upstream
copyright and license information and make the complete corresponding source of
any distributed modified version available. The copied license is stored as
`LICENSE.txt` in this directory.
