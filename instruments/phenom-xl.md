---
layout: default
title: Phenom XL SEM
---
# Thermo Fisher Phenom XL SEM

## Overview

<img src="../assets/img/sem.JPG" alt="Thermo Fisher Phenom XL SEM." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Phenom XL is the Breakerspace SEM for large samples, multiple stubs, and EDS elemental analysis. It has a 100 mm x 100 mm stage, BSD and SED detectors, low-vacuum imaging for non-conductive samples, and energy dispersive spectroscopy (EDS).

This page is the operating page for the Phenom XL only. For the Phenom Pure, use the [Phenom Pure operating page](./phenom-pure.html). For help choosing between the two SEMs, use the [shared SEM hub](./sem.html).

<div style="clear:both;"></div>

### Quick Actions {#quick-actions}

<div class="quick-actions-grid">
<section markdown="1">
#### Get started

* [New to SEM? Register for training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0)
* [Reserve time on the Phenom XL SEM](https://breakerspace.libcal.com/seat/174786)
* [Operating the Phenom XL now? Follow the standard operating protocol](#sop)
* [Learn the complete operating workflow](#details)
</section>
<section markdown="1">
#### Learn and reference

* [Compare the Phenom XL and Pure](./sem.html)
* [Learn what makes this Phenom XL different](#xl-different)
* [Check Phenom XL sample and loading limits](#xl-limits)
* [Learn about EDS and Live EDS](#eds)
* [View Phenom XL manuals](#manuals)
* [Try the practice exercises](#exercises)
</section>
</div>

### What Makes This Phenom XL Different {#xl-different}

The shared [SEM hub](./sem.html#science) explains what scanning electron microscopy can show in general. This Phenom XL page focuses on the capabilities that distinguish the Breakerspace XL configuration from the Phenom Pure in this lab.

The XL is the better choice when you need a larger stage, multiple mounted samples in one session, or elemental information from EDS. It accepts a 100 mm x 100 mm sample tray and can hold several stubs at once, which makes it useful for comparing related samples without repeatedly unloading the microscope.

#### EDS Elemental Analysis

EDS, or energy dispersive spectroscopy, uses X-rays produced when the electron beam hits the sample. Different elements tend to emit X-rays at characteristic energies, so the detector can estimate which elements are present in a spot, line, or mapped region.

This is useful when the SEM image alone is not enough. A bright particle, dark inclusion, coating, residue, corrosion product, or unexpected region may look different because of shape, charging, or composition. EDS helps ask whether that region also has a different elemental signature.

Common XL questions include:

* Is this particle mostly metal, mineral, glass, salt, polymer filler, or something else elemental?
* Does this coating or residue contain elements that are absent from the surrounding material?
* Are bright and dark SEM regions different elements, or mainly topography and detector contrast?
* Where are specific elements concentrated across a particle, fracture surface, filter, or cross section?

EDS is most convincing when it is interpreted with the SEM image, sample history, mounting material, coating, voltage, and working distance. It estimates elements; it does not directly identify molecules, crystal structure, oxidation state, or exact composition without a more careful method.

### Standard Operating Protocol {#sop}

#### Instrument Startup {#startup}

* Log on to the instrument workstation using your MIT Kerberos.
* Start the Phenom User Interface software.
* Wake the instrument if needed.
* If the instrument does not connect automatically, open [Settings / Phenom / Status](../assets/img/tutorials/sem/connect.PNG) and connect to the microscope.

#### Operation {#operation}

* Wear nitrile gloves when handling samples, stubs, sample holders, stages, and sample-prep tools.
* [Prepare samples](#prep) externally at the sample prep table.
* Confirm that the sample is dry, firmly attached, free of loose particles, and below the XL height limit.
* Set the tallest point of the sample approximately 5-7 mm below the top edge of the XL sample tray unless staff instruct otherwise.
* [Load](#loading) the sample tray into the instrument.
* Remove gloves before using the computer.
* Set the image [label and save location](#customize).
* Use NavCam to navigate, move to SEM view, adjust imaging settings, focus, and acquire images.
* For EDS or Live EDS, stop acquisition before moving to another area or returning to SEM observation.
* Wear gloves again, unload samples, and leave the tray clean and stored correctly.

#### Instrument Shutdown {#shutdown}

* Save and copy any data you need.
* Close the Phenom software. Press F11 if you need to exit fullscreen view.
* Log off Windows.
* The microscope will put itself in standby.

{% include sem/common-safety.md %}

### Phenom XL Sample Limits {#xl-limits}

* Maximum sample footprint: 100 mm x 100 mm.
* Maximum sample height: 35 mm absolute instrument limit, but normal loaded samples should sit approximately 5-7 mm below the top edge of the sample tray unless staff instruct otherwise.
* Use stub tweezers when loading mounted stubs into the tray.
* For EDS, a working distance around 4-7 mm is usually a useful target after the sample is loaded and in SEM view.
* Never load a loose, wet, shedding, or over-height sample.

{% include sem/sample-prep-at-a-glance.md %}

For EDS samples, prefer conductive mounting and avoid coating materials that interfere with the elements of interest. Gold coating is excellent for imaging but can complicate EDS; carbon coating is often better for inorganic EDS.

{% include sem/quick-imaging-settings.md %}

For EDS, start with 15 kV, Map intensity, and a working distance around 4-7 mm. Stop EDS before moving to another area.

### Detailed Operating Instructions {#details}

{% include sem/detailed-training-intro.md %}

#### Phenom XL Sample Loading {#loading}

1. Open the sample compartment using the software eject button.
2. Remove the sample tray.
3. Using stub tweezers, push each stub pin into an open hole in the tray.
4. Confirm that every sample is firmly attached and no loose particles are present.
5. Set the tallest point of the tallest sample approximately 5-7 mm below the top edge of the sample tray unless staff instruct otherwise.
6. Insert the sample tray into the loading bay.
7. Close the compartment using the software eject button.
8. Wait for the stage to move to the optical NavCam position.

The height rule is instrument-critical. Do not use the Phenom Pure holder-edge rule on the XL, and do not estimate height by eye if a sample is tall or irregular.

{% include sem/live-sem-workflow.md %}

#### EDS And Live EDS {#eds}

[Energy dispersive spectroscopy (EDS)](https://www.thermofisher.com/blog/materials/edx-analysis-with-sem-how-does-it-work/) uses X-rays generated by the electron beam to estimate which elements are present in a region of the sample. On the Phenom XL, use EDS for elemental spot checks, line scans, maps, and reports.

Start with:

* 15 kV accelerating voltage.
* Map beam intensity.
* Working distance between about 4 mm and 7 mm.
* A stable, well-focused image before starting analysis.
* Conductive mounting or low-vacuum/coating strategy appropriate for the sample.

Live EDS is useful for quick spot checks. Formal EDS/EID projects are better when you need saved spectra, maps, reports, or raw CSV data.

Always stop EDS or Live EDS before navigating to another area, returning to normal SEM observation, or unloading. If the software complains when you try to leave EDS, return to the EDS interface and press stop.

For EDS data:

* Save EDS/EID projects if you need to return to the analysis later.
* Export reports, maps, spectra, and CSV data as needed.
* Be cautious with automatic peak labels. Check whether peaks overlap and whether coating, tape, stub, or mounting materials contributed elements.

<figure class="page-figure">
  {% include responsive-image.html id="phenom-xl-eds-interface" alt="Phenom software interface during EDS analysis." %}
  <figcaption>Live EDS is good for quick checks; EDS/EID projects are better for saved spectra, maps, and reports.</figcaption>
</figure>

#### Phenom XL Sample Unloading {#unloading}

1. Stop EDS, Live EDS, or image acquisition if any collection is running.
2. Return to the normal SEM interface if needed.
3. Use the eject/unload control to bring the sample tray back to the loading position.
4. Wear gloves before touching the sample tray.
5. Open the sample compartment.
6. Remove your sample.
7. Return the tray to the sample compartment and close the door.
8. If the tray is dirty, ask staff whether it should be cleaned before storage.

{% include sem/data-and-analysis.md %}

{% include sem/common-failure-modes.md %}

#### Phenom XL Specific Failure Modes

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| Sample appears too close to the detector or stage will not move as expected | Sample may be too tall for the XL tray position | Stop, unload if safe, and verify the sample is approximately 5-7 mm below the top edge of the tray. Ask staff before retrying. |
| EDS has low or no counts | Working distance, voltage, intensity, or geometry is wrong | Use 15 kV, Map intensity, and working distance about 4-7 mm; confirm the detector is collecting before a long map. |
| Cannot leave EDS or Live EDS | Acquisition is still running | Return to the EDS interface and press stop before navigating away. |

### Manufacturer Manuals {#manuals}

* [Phenom XL user manual](https://www.dropbox.com/scl/fi/iyd538gtkj79kg0bc8113/2020-MS-Phenom-XL_User-Manual.pdf?rlkey=0yk985nvgz3lckqnrtxwo7afv&dl=0)
* [Phenom XL tensile stage manual](https://www.dropbox.com/scl/fi/fu39pi9pamr2top97cv6m/Tensile-Stage-Training-Manual.pdf?rlkey=xs9dkadn6k16f9vpo3vc3y2h7&dl=0)
* [Phenom XL all docs](https://www.dropbox.com/scl/fo/mk2sedrkfsvpllralaj4c/AMh_Ma2bU_Tl8Ul0u6xmiG4?rlkey=962g3kifk9bll59jv1ib9w86d&dl=0)

### Exercises {#exercises}

* **Level 1 - General Phenom XL training:** Prepare and image a small piece of hair. Load it on the XL tray, navigate with NavCam, focus in LiveSEM, acquire images at several magnifications, and compare a cut end with a torn or broken end.
* **Level 2 - EDS practice:** Prepare salt and sugar on the same stub. Use morphology first, then EDS on the Phenom XL, to decide which is which.
* **Level 2 - Non-conductive sample comparison:** Image an uncoated non-conductive sample in low vacuum, then sputter coat a similar sample and compare resolution, charging, and surface contrast.
* **Level 3 - Specialist training:** Prepare a powder sample sparse enough for particle sizing. Acquire images suitable for measuring particle diameter and compare the result with a poorly dispersed sample.
