---
layout: default
title: Phenom Pure SEM
---
# Thermo Fisher Phenom Pure SEM

## Overview

<img src="../assets/img/sem2.JPG" alt="Thermo Fisher Phenom Pure SEM." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Phenom Pure is the Breakerspace SEM for small mounted samples, straightforward imaging, low-vacuum imaging, and cold-stage work. It accepts one sample on an 18 mm or smaller stub, has BSD and SED detectors, and can use a temperature-controlled cold stage for frozen or beam-sensitive samples. It does not have EDS.

This page is the operating page for the Phenom Pure only. For the Phenom XL, use the [Phenom XL operating page](./phenom-xl.html). For help choosing between the two SEMs, use the [shared SEM hub](./sem.html).

<div style="clear:both;"></div>

### Quick Actions {#quick-actions}

<div class="quick-actions-grid">
<section markdown="1">
#### Get started

* [New to SEM? Register for training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0)
* [Reserve time on the Phenom Pure SEM](https://breakerspace.libcal.com/seat/174787)
* [Operating the Phenom Pure now? Follow the standard operating protocol](#sop)
* [Learn the complete operating workflow](#details)
</section>
<section markdown="1">
#### Learn and reference

* [Compare the Phenom Pure and XL](./sem.html)
* [Learn what makes this Phenom Pure different](#pure-different)
* [Check Phenom Pure sample and loading limits](#pure-limits)
* [Learn about the Phenom Pure cold stage](#cold-stage)
* [View Phenom Pure manuals](#manuals)
* [Try the practice exercises](#exercises)
</section>
</div>

### What Makes This Phenom Pure Different {#pure-different}

The shared [SEM hub](./sem.html#science) explains what scanning electron microscopy can show in general. This Phenom Pure page focuses on the capabilities that distinguish the Breakerspace Pure configuration from the Phenom XL in this lab.

The Pure is the simpler choice for routine imaging of one small mounted sample when EDS is not needed. It also has the Breakerspace temperature-controlled stage, which makes it the SEM to consider when the sample may need to be cooled or frozen during imaging.

#### Temperature-Controlled Stage

The temperature-controlled stage can cool a small sample while it is inside the SEM. This can help with samples that might dry, deform, soften, move, or change under vacuum or under the electron beam. In practice, cold-stage SEM is often more method-development work than routine dry imaging, but it can make otherwise difficult samples possible to explore.

This capability is useful for questions like:

* Can a wet, soft, or hydrated sample be frozen well enough to see its surface structure?
* Does a gel, food, biological material, polymer, or coating change shape when it dries?
* Can cooling reduce beam damage, softening, or motion during imaging?
* Is the feature of interest still visible after freezing, vacuum exposure, and SEM imaging?

The cold stage does not make every wet sample safe or easy to image. Freezing can create artifacts, frost can hide the surface, water can sublime away in vacuum, and samples can still charge or move. Use cold-stage workflows with staff guidance until the sample behavior is understood.

### Standard Operating Protocol {#sop}

#### Instrument Startup {#startup}

* Log on to the instrument workstation using your MIT Kerberos.
* Start the Phenom User Interface software.
* Wake the instrument if needed.
* If the instrument does not connect automatically, open [Settings / Phenom / Status](../assets/img/tutorials/sem/connect.PNG) and connect to the microscope.
* If using the cold stage, switch on the chiller unit about 30 minutes before imaging so the cooling water reaches operating temperature.

#### Operation {#operation}

* Wear nitrile gloves when handling samples, stubs, sample holders, stages, and sample-prep tools.
* [Prepare samples](#prep) externally at the sample prep table.
* Confirm that the sample is dry or fully frozen, firmly attached, free of loose particles, and below the Pure holder height limit.
* The highest part of the sample must sit below the top edge of the Phenom Pure holder.
* [Load](#loading) the sample holder into the instrument.
* Remove gloves before using the computer.
* Set the image [label and save location](#customize).
* Use NavCam to navigate, move to SEM view, adjust imaging settings, focus, and acquire images.
* Wear gloves again, unload samples, and leave the holder clean and stored correctly.

#### Instrument Shutdown {#shutdown}

* Save and copy any data you need.
* Close the Phenom software. Press F11 if you need to exit fullscreen view.
* Log off Windows.
* The microscope will put itself in standby.
* If you used the cold stage, turn cooling off at the controller, allow the stage to return toward room temperature, then switch off the chiller unit.

{% include sem/common-safety.md %}

### Phenom Pure Sample Limits {#pure-limits}

* Mount one sample on an 18 mm or smaller stub.
* The highest part of the sample must sit below the top edge of the sample holder.
* Use the holder or stage appropriate for the intended vacuum mode.
* Do not use the Phenom XL tray-height rule on the Pure.
* Never load a loose, wet-unfrozen, shedding, or over-height sample.

{% include sem/sample-prep-at-a-glance.md %}

{% include sem/quick-imaging-settings.md %}

The Phenom Pure does not have EDS. Use the [Phenom XL](./phenom-xl.html) if elemental analysis is required.

### Detailed Operating Instructions {#details}

{% include sem/detailed-training-intro.md %}

#### Phenom Pure Sample Loading {#loading}

1. Use the holder or stage appropriate for your intended vacuum mode. Follow the labels on the actual holders and ask staff if the holder choice is unclear.
2. Mount one sample on an 18 mm or smaller stub.
3. Adjust height so the highest part of the sample is below the top edge of the holder.
4. Unlock the sample compartment with the software eject button.
5. Open the door manually and insert the holder.
6. Close the door firmly and wait for the sample to move to the optical NavCam position.

The sample must never sit above the holder edge. An over-height sample can be destroyed during loading and can damage the microscope.

#### Phenom Pure Cold Stage {#cold-stage}

Use the cold stage for wet, vacuum-sensitive, or heat-sensitive samples that need to be frozen or cooled during imaging. Smaller samples usually work better because they freeze faster and are less likely to deform or frost over.

##### Cold Stage Setup

1. Switch on the chiller unit about 30 minutes before use.
2. Confirm the chiller has airflow around it and is not against a heat source.
3. Check whether the [water reservoir](../assets/img/tutorials/sem/cold_stage_refilling_water.jpeg) needs refilling. Use deionized water only.
4. Place the cold-stage sample holder in its stand.
5. Mount the sample on the metal stub using [cryo-embedding compound](../assets/img/tutorials/sem/cold_stage_cryo_embedding_fluid.jpeg), not normal SEM adhesive.
6. Use a 1.5 mm Allen wrench to [adjust sample height](../assets/img/tutorials/sem/cold_stage_adjusting_sample_height.jpeg). The sample must sit below the top edge of the holder.
7. Insert the [connector block](#cold-stage-connector-video) into the SEM.
8. Turn on the [main unit](../assets/img/tutorials/sem/cold_stage_on_switch.jpeg), then use the controller to set the target temperature.

<div class="instructional-media-grid">
  <figure class="page-figure" id="cold-stage-connector-video">
    {% include instructional-video.html id="sem-cold-stage-connector" %}
    <figcaption>Insert the cold-stage connector block.</figcaption>
  </figure>
  <figure class="page-figure">
    {% include instructional-video.html id="sem-cold-stage-sample-holder" %}
    <figcaption>Load the cold-stage sample holder.</figcaption>
  </figure>
</div>

##### Freezing Workflow

1. Remove excess liquid from the outside of the sample. Extra water encourages frost.
2. Keep the feature of interest away from the cryo gel, because the gel can obscure surface features.
3. Find the warmest temperature that reliably freezes your sample. Lower temperatures are not automatically better; excessive cooling can promote ice growth.
4. Wait until the cryo gel turns fully white before loading. Unfrozen gel can bubble or splatter in vacuum.
5. If your sample is thick, wait until the top surface is also frozen, but avoid leaving it exposed long enough to accumulate condensation.
6. Load the cold stage into the SEM.
7. After you find an area of interest, use photo mode on the controller before acquiring a final image to reduce drift.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/sem/cold_stage_achieving_minus20C.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/cold_stage_achieving_minus20C.jpeg" alt="Cold-stage controller reaching minus 20 C." style="width:32%; margin:0"></a>
  <a href="../assets/img/tutorials/sem/cold_stage_glued_sample.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/cold_stage_glued_sample.jpeg" alt="Sample mounted with cryo gel." style="width:32%; margin:0"></a>
  <a href="../assets/img/tutorials/sem/cold_stage_frozen_sample.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/cold_stage_frozen_sample.jpeg" alt="Frozen sample after cryo gel turns white." style="width:32%; margin:0"></a>
  <figcaption>Cold-stage controller, mounted sample, and frozen cryo gel.</figcaption>
</figure>

If the image flickers, bright bands streak across the field of view, or the sample appears to bubble, boil, collapse, or drift rapidly, eject the sample immediately and ask staff for help. These are signs that the sample may be outgassing or changing under the beam.

{% include sem/live-sem-workflow.md %}

#### Phenom Pure Sample Unloading {#unloading}

1. Stop image acquisition if any collection is running.
2. Return to the normal SEM interface if needed.
3. Use the eject/unload control to bring the sample back to the loading position.
4. Wear gloves before touching the sample holder.
5. Open the sample compartment.
6. Remove your sample.
7. Return the holder to its drawer or stand.
8. If a holder is dirty, ask staff whether it should be cleaned before storage.

{% include sem/data-and-analysis.md %}

{% include sem/common-failure-modes.md %}

#### Phenom Pure Specific Failure Modes

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| "Place sample holder correctly" or similar holder error | Holder seal/contact may be dirty or mis-seated | Remove and reseat the holder; check the seal; ask staff before cleaning or disassembling anything. |
| Cold-stage image flickers or bright bands streak across the image | Wet sample outgassing or not fully frozen | Eject immediately; use a fresh smaller sample, freeze more carefully, remove excess water, or use a lower target temperature. |
| Sample holder will not load smoothly | Sample may be above the holder edge or holder may not be seated correctly | Stop, unload if safe, and verify the sample is below the top edge of the holder. Ask staff before retrying. |

### Manufacturer Manuals {#manuals}

* [Phenom Pure user manual](https://www.dropbox.com/scl/fi/7ju8ldfdm0p04m6n81men/Phenom-ProX-G6-User-Manual.pdf?rlkey=l6gg1ld4zpmtxgrsxfgw00jpb&dl=0)
* [Phenom Pure temperature controlled stage manual](https://www.dropbox.com/scl/fi/nqcrhb3axctk6782k5hqk/User-Manual_Phenom_Temperature-Stage.pdf?rlkey=r01r9dl6k1km22to13s0nir24&dl=0)
* [Phenom Pure all docs](https://www.dropbox.com/scl/fo/th7xj2e2ul1sed2vobibt/ACVAySN_rjR_JnEXtPfs3_8?rlkey=3j90cjbe0akxyu7o3fanrxvn5&dl=0)

### Exercises {#exercises}

* **Level 1 - General Phenom Pure training:** Prepare and image a small piece of hair. Load it on the Pure holder, navigate with NavCam, focus in LiveSEM, acquire images at several magnifications, and compare a cut end with a torn or broken end.
* **Level 2 - Non-conductive sample comparison:** Image an uncoated non-conductive sample in low vacuum, then sputter coat a similar sample and compare resolution, charging, and surface contrast.
* **Level 2 - Cold-stage observation:** Use a staff-approved small wet or heat-sensitive sample. Document the freezing temperature, imaging behavior, and signs of frost, outgassing, or beam damage.
* **Level 3 - Specialist training:** Prepare a beam-sensitive sample and compare image quality at different voltage/intensity combinations.
