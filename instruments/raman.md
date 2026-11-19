---
layout: default
title: Horiba XploRA Confocal Raman Microscope
---
# Horiba XploRA Confocal Raman Microscope

## Overview

<img src="../assets/img/raman.JPG" alt="Horiba XploRA confocal Raman microscope." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Horiba XploRA is a confocal Raman microscope: it combines an optical microscope with a Raman spectrometer, so you can focus on a specific spot of a sample and collect a spectrum that helps identify what it is made of. It works on solids, powders, liquids, and gases, and is especially useful for organics, polymers, and many inorganic compounds.

Three lasers and four diffraction gratings let you balance signal strength, spectral resolution, and fluorescence for different samples; see [collection settings](#collection-parameters).

<div style="clear:both;"></div>

## Quick Actions {#quick-actions}

<div class="quick-actions-grid">
<section markdown="1">
### Get started

* [New to the Raman microscope? Register for training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0)
* [Reserve time on the Raman microscope](https://breakerspace.libcal.com/seat/174794)
* [Operating the Raman now? Follow the standard operating protocol](#sop)
* [Learn the complete operating workflow](#standard-workflow)
* [Troubleshoot a spectrum](#failures)
</section>
<section markdown="1">
### Learn and reference

* [Learn what Raman spectroscopy can show you](#science)
* [Choose collection settings](#collection-parameters)
* [Locate the LabSpec 6 main controls](#main-controls)
* [Map measurements across an area](#mapping)
* [Measure depth in a clear sample with confocal z-depth profiling](#z-profiling)
* [Analyze and process your data](#data)
* [Try the practice exercises](#exercises)
</section>
</div>

## Compatible Materials And Sample Prep {#materials}

* All materials must be non-hazardous and safe to handle in the Breakerspace.
* The instrument can measure solids, powders, liquids, and gases.
* It works well for organics, polymers, acids and bases, metal oxides, and semiconductors.
* It is not useful for metals, ionic salts such as NaCl, or strongly fluorescing materials.

<p class="guidance-note"><em>If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab.</em></p>

### Sample Prep

* Place the sample on a glass microscope slide.
* The objectives have a short working distance, so grind powders finely and keep the surface level and smooth.
* For a solid without a flat face, mount it to the slide with the sample press and Plastilina mounting clay to create a stable surface to focus on.

## Standard Operating Protocol {#sop}

<p class="guidance-note" id="alignment-notice"><strong>Alignment notice — November 18, 2026.</strong> The laser/detector alignment is currently imperfect. The laser hits the sample slightly above and to the left of the crosshair center. With the enclosure closed and the laser on, use the <strong>internal camera</strong> to identify the brightest part of the actual laser spot. Position your intended measurement area at that spot and optimize focus there, rather than at the crosshair. Then refine focus against the Raman peaks in RTD.</p>

### Instrument Startup {#startup}

* Log on to the instrument workstation using your MIT Kerberos.
* Open the LabSpec 6 software.
* Confirm the instrument is powered on. It should always be left powered on.
* Turn the laser emission remote-control power to on if needed. This enables the lasers but does not fire one.

### Operation {#operation}

* Prepare your sample on a glass microscope slide (see [compatible materials and sample prep](#materials)).
* Lower the microscope stage with the coarse focus knob.
* Load the slide into the slide holder on the stage and switch to the **external (top) camera**.
* Choose brightfield or darkfield viewing, whichever shows your sample more clearly, and adjust **White light level** for a clear camera image.
* Find approximate focus with the coarse knob.
* Refine the focus by rotating the joystick, continuing to adjust **White light level** as needed to avoid washing out the view.
* Close the doors on the microscope enclosure.
* Switch to the **internal camera**, turn on the laser, and verify that its spot appears on the sample, confirming emission and satisfied interlocks.
* Refine focus to make the actual laser spot as small and clear as possible, following the [alignment notice](#alignment-notice).
* Stop the camera view, start **RTD**, and refine focus against the Raman peaks.
* Collect Raman spectra as appropriate for your sample (see [detailed operating instructions](#details)).
* Repeat as needed.

### Instrument Shutdown {#shutdown}

* Remove your sample from the stage and close the doors.
* Turn the laser emission remote-control power to off.
* Save all data. Each spectrum must be selected and saved individually.
* Close LabSpec 6.
* Log off the workstation.

## Detailed Operating Instructions {#details}

### Standard Workflow {#standard-workflow}

Complete [instrument startup](#startup), then calibrate with silicon before measuring your sample. Both runs follow the same sequence: camera focus → laser-spot check → live spectrum → Raman focus → collection.

<figure class="page-figure raman-main-controls" id="main-controls">
  <a class="raman-image-link" href="{{ '/assets/img/tutorials/raman/raman-main-controls.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-resolution LabSpec 6 main-controls image in a new tab">
    {% include responsive-image.html id="raman-main-controls" alt="LabSpec 6 toolbar and bottom status bar with labeled spectrum and video controls, saving, laser and grating selections, power, objective and AutoCalibration." %}
  </a>
  <figcaption><strong>LabSpec 6 main controls.</strong> Control locations; displayed values are examples. <a href="{{ '/assets/img/tutorials/raman/raman-main-controls.png' | relative_url }}" target="_blank" rel="noopener">Open full-resolution image (new tab)</a>.</figcaption>
</figure>

**Changing modes.** Use ["stop all"](#main-controls) when moving between camera video, the real-time display (**RTD**), and spectrum collection. Wait for the current function to stop before starting the next. You can switch directly between the external and internal cameras while viewing video.

**Objectives.** Use **10x for general Raman measurements** and **100x for specific small particles or features**. The 100x has a very short working distance: check clearance before changing objectives or moving the stage, and approach focus carefully to avoid a collision. The **5x is for wayfinding only**, not Raman collection. Select the matching objective in **Acquisition → Instrument Setup**.

**Camera viewing.** Choose **<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#video' target="_blank" rel="noopener" aria-label="brightfield or darkfield — annotated Acquisition panel (opens in a new tab)">brightfield or darkfield</a>** to make the sample's features visible. Adjust **White light level** as you approach focus; maximum brightness usually washes out the image. Keep the laser's brightest region distinguishable in the internal camera. Camera brightness does not measure laser power at the sample; the [ND filter](#laser-power) controls that power.

#### Part 1: Calibrate With The Silicon Standard

Silicon's strong reference peak near **520 cm<sup>-1</sup>** lets you check the Raman-shift calibration before trusting measurements of your sample.

1. **Lower the stage and load the silicon calibration sample.**
2. **Focus on the edge of the Sharpie mark with the <a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#video' target="_blank" rel="noopener" aria-label="external (top) camera — annotated Acquisition panel (opens in a new tab)">external (top) camera</a> and 10x objective.** Silicon is very reflective: it is easy to focus on dust on or inside the objective reflected by the silicon, instead of the sample surface. The Sharpie mark provides a surface feature to focus on. Bring its edge into sharp focus, then jog sideways to clean silicon with no Sharpie visible, keeping the focus height unchanged. Calibrate on this unmarked area.
3. **Set the ND filter to 1% transmission, close the enclosure doors, switch to the internal camera, and turn on the laser.** This is a conservative starting power for the silicon standard. Seeing the spot on the silicon confirms laser emission and satisfied interlocks. Use the brightest part of the actual spot, following the [alignment notice](#alignment-notice), and refine focus until the spot is small and clear. If no spot appears, check that the doors are fully closed and the laser emission remote-control power is on; ask staff if it still does not appear.
4. **Use "stop all" to stop video, set RTD time to 1 second, and start [RTD](#main-controls).** This continuously refreshes a live spectrum. RTD currently accepts only whole seconds on this workstation, so **1 second is the minimum**. Set **Spectro** (the center of the detector window) to cover the silicon peak. If counts approach saturation, **reduce ND transmission**.
5. <span id="raman-focus"></span>**Find Raman focus with small Z adjustments.** A sharp camera image is only the starting point; optimize against the Raman peaks:
   * In **Acquisition → XYZ stage**, use the **lightning-bolt icon button** to zero Z at the starting focus position; optionally zero X and Y too. Entering **Z = 0** lets you return to that starting height.
   * Type nearby Z positions in small increments for more control than twisting the joystick. Search on both sides of the starting focus while maintaining safe objective-to-sample clearance. Keep laser power, exposure, hole, slit and grating fixed, and wait for a complete RTD exposure at each position.
   * Compare peak height above the local background using fixed display scaling or numerical counts. When peaks weaken, reverse direction and use smaller adjustments around the best position. Keep the clearest peaks, even if the camera image would look less sharp. If no peaks appear within safe fine-focus travel, return to the starting height; do not keep moving blindly toward the sample. For silicon, check transmission in the next step. For your own sample, use [weak-signal troubleshooting](#weak-signal).

   **Repeat this focus search after changing laser, objective, or measurement position.** Wavelength-dependent (chromatic) focal shift is especially noticeable at **785 nm**: its Raman focus can differ substantially from camera focus and visible-laser focus. There is no universal offset or direction to apply.
6. **Adjust counts for a clear, unsaturated silicon peak.** You may need more than 1% transmission to provide enough counts for AutoCalibration. If the focused peak is weak, increase ND transmission one available setting at a time and wait for a complete RTD exposure before comparing. If the silicon remains stable at **100% transmission** and counts are still low and well below saturation, **increase RTD time in whole-second increments**. Wait for each longer exposure to finish before judging it. Keep the highest counts comfortably below approximately **65,000**; reduce transmission if they approach this limit. Ask staff if you still cannot obtain a usable silicon peak.
7. **Stop RTD and run AutoCalibration** in the Maintenance tab.
8. **Verify calibration passes.** If it does not, ask staff before proceeding.

<p class="guidance-note"><em>System AutoAlignment is handled by Breakerspace staff for each laser before use. Ask staff about failed calibration or suspected misalignment; do not adjust alignment yourself.</em></p>

#### Part 2: Load And Measure Your Sample

<p id="first-find-a-spectrum" markdown="1">**Starting settings for a first look:** **638 nm**, **600 gr/mm**, **500 µm hole**, **200 µm slit**, and an **RTD time of 1 second**, unless your sample calls for another laser. Use a low ND transmission appropriate to the material; there is no universally safe percentage. These generous collection openings help find weak signals, including from uneven powders. The [settings reference](#collection-parameters) explains when to change them; ask staff if you are unsure what suits your sample.</p>

1. **Lower the stage, remove the silicon, and load your prepared sample.**
2. **Focus with the external camera.** Use 10x for general collection or 100x for a small feature, with particular care for clearance. Select the matching objective in the software and adjust White light level for a clear view.
3. **Set the initial collection settings and low laser power. Close the doors, switch to the internal camera, and turn on the laser.** Verify that the spot appears, confirming emission and satisfied interlocks. Position your measurement region at the actual brightest spot and make it small and clear. If absent, check door closure and emission power; ask staff if it remains absent.
4. **Stop video with "stop all", set RTD time to 1 second, and start RTD.** Set Spectro to cover the expected peaks; a window outside their range can look empty.
5. **Repeat the [Raman focus method](#raman-focus)** with small Z adjustments and compare the peaks above background. If peaks remain weak or background dominates, follow [troubleshooting](#failures).
6. **Stop RTD, configure the [collection parameters](#collection-parameters), and start spectrum collection.** Measure several representative spots if the sample is non-uniform.
7. **Select and [save each spectrum individually](#main-controls)** in LabSpec 6, keeping the raw data and settings. Save processed versions separately and copy your data to your own storage. Follow [shutdown](#shutdown) when finished.

#### AutoFocus: An Optional Alternative {#autofocus}

LabSpec 6's <a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#acquisition-parameters' target="_blank" rel="noopener" aria-label="AutoFocus — annotated Acquisition panel (opens in a new tab)">AutoFocus</a> samples a range of Z positions and selects the strongest signal. It can help when manual focusing is unreliable on polished or featureless surfaces, or track a rough surface during mapping. It is slow because it measures many positions. **Use manual Raman focusing for routine measurements**; reserve AutoFocus for cases that need it. See the [AutoFocus guide](../assets/img/tutorials/raman/LabSpec6-AutoFocus-Quick-Start-Guide.pdf) for setup.

## Choosing Collection Settings {#collection-parameters}

<div class="raman-panel-reference" markdown="1">

**<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}' target="_blank" rel="noopener" aria-label="View the annotated Acquisition panel (opens in a new tab)">View the annotated Acquisition panel</a>** (opens in a new tab) to locate camera, timing, range, mapping, and hole/slit controls.

</div>

### Laser {#laser-grating}

<span id="choosing-a-laser"></span>Shorter wavelengths have higher photon energy and generally give stronger Raman scattering. Longer wavelengths may avoid the absorption that excites fluorescence; the response depends on the material. Any of the lasers can heat or damage a sample, depending on absorption and focused power.

<div class="raman-selection-tables" markdown="1">

| Laser | Relative photon energy | When to use it |
| --- | --- | --- |
| 638&nbsp;nm | Medium | Starting point for most samples. |
| 532&nbsp;nm | Highest | Try for weak peaks on a low background; avoid for delicate, dark, or temperature-sensitive samples that could burn. |
| 785&nbsp;nm | Lowest | Try for fluorescence with visible excitation. Raman scattering is generally weaker; carefully re-find Raman focus. |

</div>

**When changing lasers:** stop acquisition, return to low transmitted power and an **RTD time of 1 second**, confirm calibration for the selected laser, and repeat [Raman focusing](#raman-focus). Equal filter percentages on different lasers do not imply equal power at the sample. The lasers are three discrete choices; there is no continuously adjustable wavelength that guarantees excitation just below a sample's fluorescence threshold.

### Grating {#choosing-a-grating}

A diffraction grating spreads the scattered light so the detector can measure its intensity at different wavelengths. Finer gratings separate nearby peaks better, but reduce signal and cover less spectral range in one detector window.

<div class="raman-selection-tables" markdown="1">

| Grating (gr/mm) | Resolution / signal strength | Note |
| --- | --- | --- |
| 600 | Lower / higher | Good for a first look; usually captures the whole spectrum in one detector position. Closely spaced peaks may merge. |
| 1200 | Medium / medium | A balance between resolution and signal. |
| 1800 / 2400 | Higher / lower | May need five or more grating positions to cover the full spectrum. |

</div>

When the dispersed spectrum is wider than the detector, the instrument steps the grating to measure successive segments. Use the extended **Range** setting below to specify the coverage. See the [grating-dispersion technical note](https://www.dropbox.com/scl/fi/0kcumhfxxhycy8b47l32d/Raman-Spectral-Resolution-Tech-Note.pdf?rlkey=321k53nqc9jn6cdqkqhpb0rzd&st=dr66nh85&dl=0) for more detail.

### Confocal Hole And Slit {#choosing-the-confocal-hole-and-slit}

These apertures control returning light, so opening them can improve collection without increasing laser power at the sample—particularly useful for laser-sensitive materials such as iron oxides.

| Control | Settings (µm) | Smaller opening |
| --- | --- | --- |
| Confocal hole | 500, 300, 100 | Better depth selection; rejects more out-of-focus background. |
| Spectrometer slit | 200, 100, 50 | Can separate nearby bands and reduce instrumental broadening. |

Reducing either aperture can lower useful Raman counts.

Select Hole and Slit in <a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#instrument-setup' target="_blank" rel="noopener" aria-label="Acquisition → Instrument Setup — annotated Acquisition panel (opens in a new tab)">Acquisition → Instrument Setup</a>. If a control is disabled during RTD or a change is not applied, stop RTD, change it, and restart. Otherwise, allow the mechanism to settle before judging a fresh exposure.

<span id="then-improve-the-information-you-need"></span>Start with the [generous collection openings](#first-find-a-spectrum), then adjust one aperture for a specific goal. For **depth selection or out-of-focus background**, hold the slit fixed and reduce the hole **500 → 300 → 100 µm**, comparing peak contrast or spectra at different Z positions. For **spectral resolution**, use the grating/slit procedure below. Their effects also depend on objective, optical image size, grating, and wavelength; changes are not necessarily proportional.

A wider hole may admit substrate signal or fluorescence along with Raman light. A smaller hole cannot remove fluorescence from the same sampled region. Confocal selection applies to the Raman path: changing the hole does not sharpen the camera image or illuminate a larger field. Only the laser-targeted region needs focus. See [depth profiling](#z-profiling) for sample and depth-resolution limits.

#### Improving Spectral Resolution {#spectral-resolution}

1. **Save a usable starting spectrum and its settings.** Identify which nearby peaks you need to separate.
2. **Try 600 → 1200 gr/mm**, then 1800 or 2400 if useful. Recenter the narrower detector window on your peaks.
3. **With grating and hole fixed, narrow the slit 200 → 100 → 50 µm.** Compare peak separation and width using the method below; keep the hole generous unless you also need depth selection.
4. **Keep only useful improvements.** Intrinsically broad bands may stay broad. Stop when lost counts outweigh useful separation; longer exposures or more accumulations can recover signal-to-noise if the sample stays stable and each exposure remains unsaturated.

#### Comparing Settings Fairly {#compare-settings-fairly}

Change one setting at a time, keeping position, focus, laser power, exposure, and other collection settings fixed for the initial comparison. Wait for a complete fresh exposure. Compare identifiable peaks above their local background and noise using fixed display scaling or numerical counts; higher total counts alone may just mean more fluorescence. Recheck Raman focus afterward, especially with a smaller hole. For subtle differences, compare saved acquisitions with equal exposure times and accumulation counts.

### Laser Power, Spectral Range, And Collection Time

* <span id="laser-power"></span>**[ND filter (laser power)](#main-controls):** the percentage is **transmission through the filter**, not the amount blocked. **10% transmits 10% of the incoming light; 100% gives maximum transmission.** Lower percentages send fewer photons to the sample without changing their energy. Start low for unfamiliar, dark, delicate, or temperature-sensitive samples. Persistent spectral changes or discoloration can indicate damage: stop exposure, lower power, and ask staff if damage is suspected.
* **Spectro / spectral range:** Spectro sets the center of one detector window; hover over the box to see its width. For broader coverage, enable extended **<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#acquisition-parameters' target="_blank" rel="noopener" aria-label="Range — annotated Acquisition panel (opens in a new tab)">Range</a>**, then enter start and stop values.
* **RTD time:** start at **1 second**, the current minimum; this setting accepts only whole seconds. Longer RTD exposures collect more counts but slow the live refresh. Increase time if counts remain low at 100% transmission, or at the highest power appropriate for your sample, while keeping the sample stable and the spectrum unsaturated. Reduce ND transmission if counts approach saturation.
* **<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#spectrum' target="_blank" rel="noopener" aria-label="Acquisition (exposure) time — annotated Acquisition panel (opens in a new tab)">Acquisition (exposure) time</a>:** longer exposures collect more light and improve signal-to-noise, but take longer. Keep maximum intensity comfortably below the approximately **65,000-count** saturation limit, including background and strong peaks. Start short and increase only while the sample stays stable.
* **<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#spectrum' target="_blank" rel="noopener" aria-label="Accumulations — annotated Acquisition panel (opens in a new tab)">Accumulations</a>:** full spectrum acquisition averages repeated spectra over your chosen range. More accumulations improve signal-to-noise and allow cosmic-ray rejection, at the cost of time. **RTD is for setup and does not average accumulations.**

## Troubleshooting {#failures}

| What you see | What to do |
| --- | --- |
| Cameras do not connect | Restart the workstation, then reopen LabSpec 6. |
| No spectrum or weak peaks | Check laser emission, the detector window, and focus using the [weak-signal sequence](#weak-signal). |
| Broad hump or sloping background | Follow the [fluorescence sequence](#fluorescence). |
| Flat-topped or clipped spectrum near 65,000 counts | Stop and lower ND transmission; see [saturation recovery](#fluorescence) for exposure settings. |
| Sample changes or looks damaged | Stop exposure and lower power; ask staff if damage is suspected. |

### Weak Or Missing Raman Peaks {#weak-signal}

Use this sequence after silicon calibration passes, following the [comparison method](#compare-settings-fairly).

1. **Check the target and signal path.** Select the matching objective in software. With the enclosure closed, verify the actual laser spot on the intended material—not the slide or mounting clay. If absent, check door closure and emission power, then ask staff if unresolved. Use "stop all" between video and RTD.
2. **Check collection and focus.** Use the [starting settings](#first-find-a-spectrum) appropriate to your sample and put expected peaks inside the Spectro window. Repeat the [Raman focus search](#raman-focus), particularly after a laser change.
3. **Increase power cautiously.** With collection and focus optimized, try the next higher ND transmission only while the sample stays stable and the spectrum remains unsaturated. Stop when peaks are usable; do not jump to full power. If the sample changes, stop exposure and lower power. If background grows without useful peaks, follow the fluorescence sequence instead.
4. **Choose the next laser from the spectrum.** For weak peaks on a low background, consider 532 nm only if the sample tolerates it. For a broad fluorescent background, try a longer wavelength. Follow the [laser-change procedure](#laser-grating), including low power, calibration, and refocusing.
5. **Collect longer if counts remain low.** If you are at 100% transmission—or the highest power appropriate for the sample—and still well below saturation, increase exposure time while checking sample stability and counts. For RTD, use whole-second increments and wait for each refresh. For saved spectra, longer exposures or more accumulations can improve signal-to-noise. Save the raw spectrum and settings.
6. **If peaks remain absent, separate sample problems from instrument problems.** Try another representative spot and recheck silicon with the selected laser. If silicon fails, ask staff. If silicon works but the sample does not, ask about sample suitability or another method instead of continuing to raise power.

### Fluorescence And Saturation {#fluorescence}

A broad, sloping background often indicates fluorescence. A flat-topped or clipped spectrum indicates detector saturation, which can come from either background or strong Raman peaks. Restore an unsaturated measurement before judging fluorescence.

1. **Recover from saturation.** Stop acquisition and reduce ND transmission, then reacquire. You can also shorten a longer exposure, but **RTD cannot go below its current 1-second minimum**; at that limit, lower transmission. Check numerical counts against the **65,000-count** limit; automatic display scaling can hide clipping. Saturated data cannot be recovered by processing.
2. **Try a longer wavelength: 532 → 638 → 785 nm.** Follow the [laser-change procedure](#laser-grating). If the sample is known to fluoresce strongly with visible light, it can start at 785 nm. Refocus before comparing results; leaving focus unchanged can make reduced fluorescence look like a loss of all signal.
3. **Recover useful peaks.** Optimize collection and focus before increasing power, using the weak-signal sequence above. Lower power usually reduces both Raman and fluorescence, so it can prevent saturation without improving their ratio. Choose the clearest peaks above background and noise, not simply the lowest background or highest counts.
4. **Check the background's source.** Target the intended material rather than slide, clay, or contamination; try another representative location. A [smaller confocal hole](#choosing-the-confocal-hole-and-slit) may reject out-of-focus background, but cannot remove fluorescence from the same sampled region.
5. **Average unsaturated spectra.** If background limits exposure time, use more short accumulations. Averaging cannot guarantee visible peaks beneath strong fluorescence; baseline subtraction cannot remove fluorescence shot noise or undo saturation.
6. **Stop if the trade-off no longer works.** If 785 nm still gives overwhelming fluorescence or no identifiable peaks after refocusing and collection optimization, ask staff about another method, such as FTIR. Do not try to burn away fluorescence with prolonged or high-power illumination.

For more explanation, see [HORIBA's laser-wavelength guidance](https://www.horiba.com/usa/scientific/technologies/raman-imaging-and-spectroscopy/raman-spectrometer-presentation/) and [Edinburgh Instruments' fluorescence technical note](https://www.edinst.com/resource/technical-note-how-to-reduce-fluorescence-in-raman-spectroscopy/).

## Mapping And Depth Profiling

### Mapping And Area Scanning {#mapping}

A map collects a grid of spectra to show where materials occur—for example, ingredients across a combination tablet or contamination on a surface.

1. **Acquire a video image** of the region. Video Montage can stitch frames for areas larger than one field of view.
2. In **<a href='{{ "/instruments/raman-acquisition-controls.html" | relative_url }}#map' target="_blank" rel="noopener" aria-label="Map — annotated Acquisition panel (opens in a new tab)">Acquisition → Map</a>**, choose X and Y for a surface map, Z for depth, or a combination.
3. **Choose the area and step size.** Map tools support rectangles, circles, lines, or selected points. Smaller steps provide finer detail but many more measurements.
4. **Set collection parameters** as for a single spectrum. A map may contain hundreds or thousands of points; favor a single detector window and shorter per-point times. Estimate total time from point count and time per point before starting.

[AutoFocus](#autofocus) can follow a rough surface during mapping, but adds time.

### Confocal Z-Depth Profiling {#z-profiling}

A Z scan records spectra at successive depths within a transparent or translucent sample. The [confocal hole](#choosing-the-confocal-hole-and-slit) rejects light from above and below the focal region, helping distinguish layers without physically sectioning them. Examples include multilayer polymer films, coatings, inclusions in a transparent matrix, or samples under transparent covers.

* First obtain a usable spectrum, then adjust the hole for depth selection using the aperture guidance above.
* Set a **Z** or **XYZ** map with a Z step suited to the expected layer thickness.
* Expect signal to fall with depth as light passes through more material and the focal volume distorts; the objective affects this behavior.
* The hole diameter is an internal aperture size, **not the thickness of the sampled layer**. Actual depth resolution depends on objective and sample optics. Plan quantitative depth measurements, including hole size and Z step, with staff.

<p class="guidance-note"><em>Closing the confocal hole does not enable measurement through an opaque particle.</em></p>

## Data Processing And Analysis {#data}

Keep your raw spectra and settings alongside any processed versions (see [saving in the workflow](#part-2-load-and-measure-your-sample)). Typical analysis includes:

* **Baseline correction:** subtract a sloping background from a usable, unsaturated spectrum to make peaks easier to see.
* **Peak identification:** note the main peak positions in Raman shift (cm<sup>-1</sup>).
* **Comparison and matching:** compare with reference spectra, a database, or a known control. A useful identification matches several peaks, not just one.

Try the browser-based [Data Exploration Tools]({{ "/data-tools/" | relative_url }}) for an introduction to viewing and processing Raman spectra. Ask staff for help with further analysis, database searching, or export.

## What This Instrument Shows You {#science}

### The Basic Idea

Raman spectroscopy identifies materials by how their molecules vibrate. When you shine a laser on a sample, almost all the light bounces off unchanged, but a tiny fraction exchanges a little energy with the molecule's vibrating bonds and comes back at slightly shifted wavelengths. Measuring those small shifts produces a spectrum with peaks at characteristic positions, a molecular "fingerprint" that often identifies a compound outright.

Because the XploRA is a *microscope*, you aim that laser through an objective lens at a specific spot, often just a few micrometers across. You can see the sample on screen, pick the exact feature you care about, and collect a spectrum from that point.

It is also a *confocal* Raman microscope, but with an important detail: the confocality applies only to the Raman signal path, not to the optical camera image. A confocal hole in the Raman path rejects light from above and below the focal plane, which lets the instrument probe specific depths within a transparent or layered sample. The optical microscope image itself is not confocal, so what you see on the camera is a normal (widefield) view.

Raman is often described as complementary to FTIR. Both probe molecular vibrations, but they respond to different kinds of bonds, so a feature that is weak in one is frequently strong in the other. A material that is difficult in the FTIR may be straightforward in the Raman, and vice versa.

### What Scientists Use It For

* A chemist or materials scientist can identify an unknown solid, powder, or liquid by matching its Raman fingerprint to reference spectra.
* A pharmaceutical scientist can tell apart the active ingredients in a combination tablet, and even map where each is distributed across the surface.
* A geologist or gemologist can identify minerals and gemstones nondestructively, without cutting or dissolving the sample.
* An art conservator or forensic examiner can identify pigments, inks, fibers, or residues from a tiny spot without damaging the object.
* A semiconductor or 2D-materials researcher can measure strain, layer number, and quality in materials such as silicon, diamond, and graphene.
* A curious student can compare everyday plastics (is this container PET, HDPE, or polystyrene?), check whether two white powders are actually the same thing, or probe the layers of a snack-bag film.

### What To Look For In The Results

Start with the peak positions. Raman peaks are plotted against "Raman shift" in wavenumbers (cm<sup>-1</sup>), and their positions are the primary fingerprint. Matching that pattern of positions against reference spectra is how compounds are identified, and a good match lines up several peaks rather than one.

Watch for a broad, sloping background swamping the peaks. That usually means fluorescence, where the sample re-emits light far more strongly than it Raman-scatters. It is the most common reason a Raman measurement fails, and the usual fix is a longer-wavelength laser (see [laser and grating selection](#laser-grating)).

Finally, judge peak sharpness and signal strength against your settings. Sharp, well-separated peaks may need a finer grating to resolve; a weak signal may need a shorter-wavelength laser or longer collection. The [detailed instructions](#details) explain these trade-offs.

### What This Instrument Cannot Tell You

* It does not work well on metals, which do not produce a useful Raman signal, or on simple ionic salts such as NaCl.
* Strongly fluorescing materials can overwhelm the Raman signal entirely; if a sample still fluoresces with the 785 nm laser, it may simply not be suitable.
* It reports which molecules or bonds are present, not a full quantitative composition by default.
* It samples a tiny spot. That is powerful for targeting a feature, but it means one spectrum may not represent a non-uniform sample; sample several spots.
* Higher-energy lasers can heat or burn delicate, dark, or temperature-sensitive samples, so the "strongest signal" setting is not always safe to use.

## Exercises {#exercises}

* **Level 1 - System check and routine spectrum:** Follow the [standard workflow](#standard-workflow) to calibrate with silicon, then collect and save a spectrum from a compatible sample. Practice camera focusing, verifying the laser spot with the enclosure closed, and optimizing Raman focus in RTD before collection.
* **Level 2 - Laser and grating comparison:** Collect a spectrum from one sample using different laser and grating combinations. Describe how each choice changed signal strength, resolution, and fluorescence.
* **Level 2 - Combination-tablet mapping:** Perform a spatial map on an [aspirin/paracetamol/caffeine tablet](https://en.wikipedia.org/wiki/Aspirin/paracetamol/caffeine) and identify the different compounds present.
* **Level 3 - Confocal depth profiling:** Use the confocal capability to collect spectra at different depths within a layered material, such as a snack-bag film, and identify the layers.
* **Level 3 - Fluorescence troubleshooting:** Take a sample that fluoresces under the 532 nm laser and work through the laser choices to recover a usable Raman spectrum, or determine that the sample is not suitable.

## Manufacturer Manuals {#manuals}

* [LabSpec 6 general use quick-start guide](../assets/img/tutorials/raman/LabSpec6-General-Use-Quick-Start-Guide.pdf)
* [LabSpec 6 AutoFocus quick-start guide](../assets/img/tutorials/raman/LabSpec6-AutoFocus-Quick-Start-Guide.pdf)
* [The importance of confocality (Horiba technical note RA-TN 15)](../assets/img/tutorials/raman/RA-TN15-Importance-of-Confocality.pdf)
* [Slit width, pixel size and spectral resolution (Andor)](https://andor.oxinst.com/learning/view/article/slit-width-pixel-size-and-spectral-resolution)
* [Raman spectral resolution technical note (grating dispersion)](https://www.dropbox.com/scl/fi/0kcumhfxxhycy8b47l32d/Raman-Spectral-Resolution-Tech-Note.pdf?rlkey=321k53nqc9jn6cdqkqhpb0rzd&st=dr66nh85&dl=0)
* [Full Horiba XploRA and LabSpec 6 documentation folder:](https://www.dropbox.com/scl/fo/ppao3nkalsx14dyhnlryo/ADc_wEUGXbfb9_MfXPeQ9PM?rlkey=3xm38dmwhua13nhfar3ffepjl&dl=0) additional manuals, reference guides, and Horiba application notes.

## Links {#links}

* [Horiba: what is Raman spectroscopy?](https://www.horiba.com/int/scientific/technologies/raman-imaging-and-spectroscopy/raman-spectroscopy/)
* [Horiba XploRA PLUS product page](https://www.horiba.com/int/scientific/products/detail/action/show/Product/xplora-plus-1528/)
