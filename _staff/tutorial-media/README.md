# Tutorial Media Production Guide

This is the shared standard for recording, reviewing, processing, and publishing instructional media for the DMSE Breakerspace website. It is written for lab staff, student employees, site maintainers, and Codex.

The goal is not cinematic production. The goal is a clear, accurate demonstration that loads quickly, works with keyboard and assistive technology, remains understandable when paused, and does not expose private or security-sensitive information.

## The Short Version

For most tutorial motion:

* Record the original as a normal video, not a GIF.
* Use landscape orientation, 1920 × 1080 capture, and 24 or 30 frames per second when possible.
* Keep the camera stable and make one short clip per action.
* Move deliberately, pause at important states, and leave enough context in frame to show where the action happens.
* Do not record credentials, personal information, private sample data, browser history, notifications, or unapproved people.
* Preserve the original source outside the production repository.
* Publish an MP4, a WebM, and a useful JPEG poster frame through the shared video include.
* Publish static images as responsive AVIF, WebP, and JPEG sets through the shared image include.
* Do not autoplay tutorial motion. Give users native controls and load video data only when requested.
* Add adjacent written instructions and a descriptive caption. Add timed captions whenever meaningful audio is present.

If a processed clip clearly communicates the action, slight motion choppiness is acceptable. Re-record or reprocess a clip when missing motion makes a gesture, control movement, safety boundary, or sequence hard to understand.

## Who Does What

### Lab staff or the person recording

Staff own the technical and safety accuracy of the source:

* Decide the one action or concept the clip must teach.
* Prepare the instrument and an approved sample.
* Record a clean master with adequate context and detail.
* Identify the intended page and section.
* Supply the proposed caption, safety notes, and expected result.
* Confirm that the recording contains no private data or unapproved access information.
* Arrange review by an instrument trainer before publication.

### Codex or the site maintainer

The maintainer owns the web derivatives and implementation:

* Inspect the source before processing.
* Confirm that the source is technically usable and safe to publish.
* Trim only irrelevant lead-in, lead-out, mistakes, or repeated waiting.
* Preserve the complete instructional sequence and natural timing.
* Generate MP4, WebM, and poster output with the repository helper.
* Generate responsive static-image derivatives when needed.
* Add the media manifest entry, visible caption, accessible label, and page include.
* Build and validate the site at desktop and mobile widths.
* Confirm that no old GIF or obsolete source reference remains.
* Commit only the reviewed production derivatives unless staff explicitly approve another source-retention plan.

Codex should not infer an operating step, safety limit, instrument setting, or scientific interpretation from an ambiguous recording. Ask an instrument trainer when the recording and supplied notes disagree.

## Plan Before Recording

Write a one-sentence objective before touching the camera:

> Show a trained user how to lower the DSX stage before loading a sample.

If the objective contains “and,” consider separate clips. Short, focused clips are easier to understand, replace, caption, and keep small.

For each clip, identify:

1. The starting state.
2. The user action.
3. The control, sample, or software element that must remain visible.
4. The expected end state.
5. Any stop condition or safety boundary.

Record a second take when the first take includes hesitation, blocked sight lines, accidental motion, or an unclear result. Do not plan to repair a fundamentally unclear demonstration during compression.

## Recording Physical Instrument Actions

### Recommended capture

| Setting | Preferred standard | Notes |
| --- | --- | --- |
| Orientation | Landscape | Matches the site and most workstation displays. |
| Resolution | 1920 × 1080 | 4K is unnecessary unless a small physical detail cannot otherwise be read. |
| Frame rate | 24 or 30 fps | Use 60 fps only for genuinely fast motion that will be reviewed in slow motion. |
| Camera | Rear phone camera or dedicated camera | Clean the lens before recording. |
| Stability | Tripod, clamp, or firmly braced camera | Avoid handheld panning when the action can occur within a fixed frame. |
| Focus and exposure | Lock when the device allows it | Prevent focus hunting or brightness pumping during hand movement. |
| Lighting | Even, diffuse, and bright enough for controls | Avoid strong glare on screens, polished samples, and instrument covers. |
| Audio | Usually unnecessary | The adjacent page text should carry routine instructions. |

Frame the shot tightly enough to see the action but widely enough to identify the instrument area. If both context and a fine detail matter, record a wide establishing clip and a separate close-up instead of using digital zoom.

Perform the action at a deliberate training pace:

* Hold the starting state for about one second.
* Keep hands clear of the important control until the action begins.
* Move smoothly without blocking the contact point.
* Pause briefly when a control reaches the intended position.
* Hold the result for one or two seconds.

Wear the personal protective equipment appropriate to the actual task. Remove gloves before touching clean keyboards, mice, touchscreens, or other controls when the operating procedure requires it.

## Recording Software and Workstation Actions

Use the operating system’s screen recorder when possible. A direct screen recording is more legible than filming a monitor.

Before recording:

* Close email, chat, calendars, file browsers, password managers, and unrelated applications.
* Disable visible notifications and hide bookmarks or browser history.
* Use a demonstration file with a neutral name.
* Remove real names, Kerberos IDs, email addresses, sample identifiers, research data, and network paths.
* Set the application to its normal workstation scale. Do not shrink the interface merely to fit more on screen.
* Position the pointer away from the control that will be demonstrated.

Record at the display’s native resolution and 30 fps when available. If the complete workstation display is very large, capture the relevant application window or crop during processing. Keep enough application chrome visible that a user can orient themselves.

Move the pointer slowly and pause before clicking. After a menu, dialog, graph, or result appears, leave it visible long enough to read. Do not accelerate waiting periods so aggressively that state changes become confusing.

## Audio, Captions, and Written Equivalents

Most short Breakerspace tutorial clips should be silent. The surrounding HTML instructions are easier to maintain, search, translate, and review than narration embedded in a video.

If meaningful speech, alarms, tones, or other audio must be published:

* Retain the audio in the production encodes.
* Provide synchronized English WebVTT captions.
* Describe meaningful non-speech audio in the captions.
* Provide an adjacent transcript or equivalent step-by-step text when the audio carries instructional content.
* Add a `captions` path to the video manifest entry.

The standard conversion helper intentionally removes audio. A narrated source therefore requires a custom reviewed encode rather than the default silent workflow.

All motion instruction, including silent clips, needs:

* Adjacent written steps that communicate the essential procedure.
* A visible `<figcaption>` explaining what the clip demonstrates.
* A concise `aria-label` in the video manifest.

Do not use the accessible label as a substitute for written instructions.

## Safety, Privacy, and Publication Review

Do not publish media containing:

* Passwords, access codes, private usernames, authentication tokens, or recovery information.
* Personal contact information or identifiable student records.
* Unapproved research data, sample labels, filenames, or project names.
* Faces or voices without publication permission.
* Copyrighted figures, manuals, or training material that the Breakerspace cannot redistribute.
* Unsafe behavior presented without immediate and unambiguous correction.
* Instrument states that contradict the current operating procedure.

It is acceptable to identify a credential type, such as a Kerberos login, when that is part of the approved public operating guidance. Do not record an actual credential being entered.

An instrument trainer must review technical steps, safety-critical motion, settings, limits, and expected results. The site maintainer should separately review privacy, accessibility, performance, naming, and layout.

## Source Files and Handoff

### Preserve the master outside the production repository

Keep the highest-quality original in approved lab-managed storage. Do not use the public production repository as the archive for raw camera files.

Reasons:

* Raw video can exceed GitHub’s file limits.
* Committing and later deleting a large source does not remove it from Git history.
* Unreviewed source may contain private or unsuitable material.
* A retained master allows later reprocessing with better codecs or accessibility features.

Codex can process a local absolute path, such as a file in Downloads or a mounted staff folder, without first copying the master into the repository. If a source was already uploaded to GitHub, review it before merging and decide whether it belongs in repository history.

### Source formats

Preferred master formats are the original `.mov` or `.mp4` produced by the camera or screen recorder. H.264, HEVC, or ProRes sources are acceptable when the local processing tools can decode them.

Do not convert a video into GIF before handoff. GIF discards color and timing efficiency and may already have removed frames. If only a GIF survives, it can still be converted, but the video output cannot recover detail or motion that the GIF no longer contains.

### Naming

Use lowercase, descriptive, hyphenated names:

```text
instrument-action-take01.mov
ftir-load-powder-take02.mov
optical-lower-stage-take01.mp4
```

Published output drops the take number:

```text
assets/media/tutorials/optical/lower-stage.mp4
assets/media/tutorials/optical/lower-stage.webm
assets/media/tutorials/optical/lower-stage-poster.jpg
```

### Handoff template

Supply this information with every source:

```text
Instrument:
Action or concept:
Intended page and section:
Required starting state:
Expected ending state:
Proposed visible caption:
Safety notes or stop conditions:
Does the source contain meaningful audio?:
Have names, credentials, notifications, and research data been checked?:
Instrument trainer and review date:
Master source location:
```

Do not put a private storage link, private individual name, or other internal-only metadata into a public page or public issue.

## Published Video Standard

Every normal tutorial clip should produce:

| Output | Purpose |
| --- | --- |
| `.webm` | Efficient VP9 source offered first to supporting browsers. |
| `.mp4` | H.264 compatibility fallback with web streaming metadata. |
| `-poster.jpg` | Useful still shown before the user requests video data. |
| `.vtt` when needed | Timed captions for meaningful audio. |

### Resolution and frame rate

Do not upscale the source.

* Physical demonstrations: normally publish at no more than 1280 pixels wide.
* Software demonstrations: use 1280 pixels when controls remain legible; use up to 1920 when smaller interface text genuinely requires it.
* Keep the source aspect ratio.
* Use even pixel dimensions for broad codec compatibility.
* Preserve 24 or 30 fps source motion for normal demonstrations.
* Fifteen fps can be adequate for slow, deliberate hand motion or screen-state changes.
* Avoid reducing below 12 fps unless the result has been reviewed and every action remains clear.

High frame rate does not compensate for an unclear recording. A stable 24 fps source is preferable to shaky 60 fps footage.

### Duration

* Aim for 5–30 seconds for one physical action.
* Longer screen workflows may run up to about 90 seconds when breaking them apart would remove useful context.
* Remove idle lead-in and lead-out.
* Preserve pauses that help users see the starting state, result, or safety boundary.
* Do not remove every other frame merely to reduce size; use video compression first.

### File-size targets

These are review thresholds, not reasons to damage clarity:

| Asset | Preferred target | Review required |
| --- | --- | --- |
| Poster JPEG | Under 150 KB | Over 300 KB |
| Individual MP4 or WebM | Under 5 MB | Over 10 MB |
| Both video encodes plus poster | Under 10 MB | Over 20 MB |
| Individual responsive image derivative | Under 400 KB | Over 750 KB |
| Any production file | — | Over 25 MB |

GitHub’s technical maximum is not the performance budget. A file that GitHub accepts may still be inappropriate for a public operating page.

## Processing Video

Run processing from the repository root. The helper accepts common video formats and GIF input:

```sh
script/convert-instructional-media \
  "/absolute/path/to/optical-lower-stage-take01.mov" \
  assets/media/tutorials/optical \
  lower-stage \
  1280 \
  2.5
```

Arguments:

1. Source file.
2. production output directory.
3. lowercase hyphenated output stem.
4. optional maximum output width; defaults to `1280`.
5. optional poster-frame time in seconds; defaults to `1`.

The helper:

* Leaves smaller sources at their existing width.
* Scales larger sources to the selected maximum without upscaling.
* Produces even dimensions.
* Creates H.264 MP4 with `faststart`, VP9 WebM, and JPEG poster output.
* Removes audio and source metadata.
* Preserves the source timing and frame rate.
* Prints the output dimensions, frame rate, and duration.
* Stops if any required output is empty.

Choose a poster time that shows the instrument, control, or software state clearly. Avoid a blurred hand, transitional dialog, blank screen, or sensitive information.

### Inspect the outputs

Watch each complete MP4 and WebM. Do not approve a derivative based only on the poster.

Confirm:

* The complete intended action remains present.
* Motion speed is natural.
* Controls and software text are legible.
* No privacy issue appears in later frames.
* The poster is representative.
* Neither codec shows corruption, severe banding, or unreadable text.

Decode validation:

```sh
ffmpeg -v error -i assets/media/tutorials/optical/lower-stage.mp4 -f null -
ffmpeg -v error -i assets/media/tutorials/optical/lower-stage.webm -f null -
```

Metadata inspection:

```sh
ffprobe -v error \
  -select_streams v:0 \
  -show_entries stream=width,height,avg_frame_rate \
  -show_entries format=duration \
  -of default=noprint_wrappers=1 \
  assets/media/tutorials/optical/lower-stage.mp4
```

## Registering and Embedding Video

Add one entry to `_data/instructional-videos.yml`:

```yaml
optical-lower-stage:
  width: 1280
  height: 720
  label: Lowering the DSX optical microscope stage before loading a sample.
  poster: /assets/media/tutorials/optical/lower-stage-poster.jpg
  webm: /assets/media/tutorials/optical/lower-stage.webm
  mp4: /assets/media/tutorials/optical/lower-stage.mp4
```

When meaningful audio is present, add:

```yaml
  captions: /assets/media/tutorials/optical/lower-stage-captions.vtt
```

Embed it within a figure:

```liquid
<figure class="page-figure">
  {% include instructional-video.html id="optical-lower-stage" %}
  <figcaption>Lower the stage before loading a sample.</figcaption>
</figure>
```

The shared include supplies:

* Native `controls`.
* `playsinline` behavior on mobile devices.
* `preload="none"` so the browser does not request video data before playback.
* The poster frame.
* Intrinsic width and height to prevent layout shift.
* WebM first and MP4 fallback.
* An accessible label.
* An optional caption track.
* A direct MP4 fallback link.

Do not add `autoplay`, `loop`, or a scripted custom player to routine tutorial clips.

HTML video does not have a broadly supported `loading="lazy"` attribute. `preload="none"` is the video equivalent used here; it defers the actual video transfer while still displaying the small poster.

## YouTube-Hosted Tutorials

YouTube remains appropriate for a longer demonstration when adaptive streaming, captions, playback speed, or avoiding multiple large production files is more valuable than local hosting. Preserve the original master in approved lab-managed storage even when the published video remains on YouTube.

Do not embed a YouTube iframe directly on page load. Use the shared click-to-load facade so the page initially requests only a small local poster. The privacy-enhanced `youtube-nocookie.com` player is created after the visitor selects **Play video**.

Create the poster from the original master rather than downloading a YouTube thumbnail:

```sh
ffmpeg -y -hide_banner -loglevel error \
  -ss 15 \
  -i "/absolute/path/to/source.mov" \
  -frames:v 1 \
  -map_metadata -1 \
  /tmp/instrument-action-poster-source.jpg

script/generate-responsive-image \
  /tmp/instrument-action-poster-source.jpg \
  instrument-action-poster \
  480 960 1280
```

Choose a stable, representative frame that contains no credentials, names, private data, or blurred motion. Register the JPEG, WebP, and AVIF outputs in `_data/responsive-images.yml`, then add the YouTube ID, accessible title, poster entry, and aspect-ratio dimensions to `_data/youtube-videos.yml`.

Embed the facade:

```liquid
{% include youtube-facade.html id="instrument-action" %}
```

Load the facade script once on any page that uses it:

```liquid
<script src="{{ '/assets/js/youtube-facade.js' | relative_url }}" defer></script>
```

The poster has responsive sources, intrinsic dimensions, lazy loading, and asynchronous decoding. The play control remains an ordinary YouTube link when JavaScript is unavailable. Do not place raw camera masters in the repository or locally host an unprocessed 4K recording.

## Static Images and Screenshots

Use a high-quality JPEG or PNG source. Preserve an unedited master outside the repository when it may be useful later.

### Capture

* Use the same privacy and safety review as video.
* Prefer native screenshots over photographs of monitors.
* Crop irrelevant desktop space.
* Keep enough application or instrument context for orientation.
* Do not bake long explanatory paragraphs into an image.
* Use annotations sparingly and ensure the page text repeats their meaning.

### Generate derivatives

Choose even widths appropriate to the layout:

```sh
script/generate-responsive-image \
  "/absolute/path/to/source-image.jpg" \
  optical-sample-result \
  480 960 1440
```

Typical sets:

* Page-width or hero image: `480 960 1440`.
* Large screenshot or graph: `640 1280 1920`.
* Small three-column example: `400 800 1200`.
* Source narrower than these values: select even widths no larger than the source.

The helper writes JPEG, WebP, and AVIF files under `assets/img/optimized/`.

Add an entry to `_data/responsive-images.yml` with the source image’s intrinsic aspect ratio, fallback, format-specific `srcset` values, and an accurate `sizes` rule. Then embed it:

```liquid
{% include responsive-image.html
  id="optical-sample-result"
  alt="Color optical microscope image showing a scored glass fracture surface."
%}
```

The shared include supplies:

* AVIF and WebP sources.
* Responsive JPEG fallback.
* `srcset` and `sizes`.
* Intrinsic width and height.
* `decoding="async"`.
* `loading="lazy"` by default.

Use `loading="eager"` only for an above-the-fold primary image or a compact printable Quick Guide whose images must be ready for printing:

```liquid
{% include responsive-image.html
  id="optical-hero"
  alt="Olympus DSX-1000 digital optical microscope."
  loading="eager"
  picture_class="instrument-hero"
%}
```

Do not mark every image eager. Do not write a `srcset` without a realistic `sizes` value; the browser needs both to choose efficiently.

## Alternative Text, Labels, and Captions

Each text field has a different job:

| Element | Purpose |
| --- | --- |
| Adjacent instructions | Complete procedure, choices, warnings, and expected result. |
| `figcaption` | Visible summary of what the media demonstrates. |
| Image `alt` | Concise visual information needed in the current context. |
| Video `label` | Concise accessible identification of the video. |
| Timed captions | Synchronized speech and meaningful audio. |
| Transcript | Full text equivalent when audio carries instruction. |

Avoid filenames, “image of,” and “video showing” when the element’s role is already clear. Avoid putting an entire operating procedure into `alt` or `aria-label`.

If motion itself communicates an essential action that the adjacent text does not explain, improve the text before publication.

## Loading and Interaction Rules

The site standard is:

* No tutorial autoplay.
* No infinite loop.
* Native browser controls.
* `preload="none"` for video.
* Poster dimensions and video dimensions specified.
* Lazy loading for below-the-fold images.
* Eager loading only for intentional above-the-fold or print use.
* Async image decoding.
* Responsive derivatives rather than scaling a large original for every device.
* No large GIF for instructional motion.

Do not add GIF assets to the production repository. Publish motion as controlled MP4/WebM video and publish a still as responsive AVIF, WebP, and JPEG derivatives.

## Final Quality Checks

### Staff review

* The action matches current training.
* The sample, PPE, and instrument state are appropriate.
* The starting and ending states are clear.
* No safety-critical step is omitted.
* Captions and surrounding text are technically accurate.
* The instrument trainer and review date are recorded in the handoff.

### Maintainer or Codex review

* MP4 and WebM both play completely.
* Poster, dimensions, labels, and paths match the files.
* No production derivative exceeds the review budget without a documented reason.
* Video uses the shared include and `preload="none"`.
* Images use the shared responsive include.
* Below-the-fold images remain lazy.
* The page works at desktop and mobile widths with no horizontal overflow.
* Keyboard users can reach and operate the native controls.
* Meaningful audio has captions and an equivalent transcript or written procedure.
* Replaced GIFs and obsolete links are removed from the current tree.
* Raw masters and private metadata are not accidentally staged.

Build and validate:

```sh
git diff --check
bundle exec jekyll build
script/validate-html
```

Run HTML-Proofer against the changed pages with external checking disabled when local network policy blocks third-party links. Review the built HTML to confirm that `width`, `height`, `srcset`, `sizes`, `loading`, `decoding`, `controls`, `poster`, and `preload` are present as applicable.

After deployment, open the public page and one representative MP4, WebM, poster, AVIF, WebP, and JPEG URL. Confirm successful responses and correct media types.

## Replacing Existing Media

When a better master becomes available:

1. Process it with the same output stem.
2. Compare clarity, pacing, file size, and accessibility with the current version.
3. Replace the MP4, WebM, and poster as one reviewed set.
4. Update manifest dimensions if they changed.
5. Rebuild and visually test the affected page.
6. Keep the old version in Git history; do not leave duplicate production files.

Starting from a larger GIF is useful only when that GIF contains meaningful detail or frames absent from the current source. Starting from the original camera or screen recording is always preferable.

## Troubleshooting

### The result is choppy

Check the source frame rate with `ffprobe`. Re-encoding cannot restore frames removed from a GIF or prior export. If every action is still clear, keep the smaller derivative. If a gesture or transition is ambiguous, return to the original camera or screen recording.

### Software text is unreadable

Reprocess at a larger maximum width, up to 1920, after confirming that the source itself is sharp. If only a small region matters, crop to that region rather than publishing an unnecessarily large full-screen video.

### The files are too large

First trim irrelevant time, crop unused space, and choose an appropriate maximum width. Then adjust codec quality cautiously. Do not delete frames or accelerate the demonstration merely to satisfy a target.

### The poster is unhelpful

Rerun the helper with a different poster time. Choose a stable frame that identifies the action before playback.

### The source includes private material

Do not attempt to hide a moving private element with a static crop unless every frame has been checked. Re-recording a clean source is usually safer.

### A clip needs narration

Pause the default workflow. Create reviewed audio-preserving MP4 and WebM outputs, an English WebVTT caption file, and an adjacent transcript. Confirm keyboard and caption behavior before publication.
