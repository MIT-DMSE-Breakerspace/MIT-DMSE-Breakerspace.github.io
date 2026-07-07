---
layout: default
---
# Thermo Fisher Phenom Scanning Electron Microscopes (SEM)

## Overview

The Breakerspace has two scanning electron microscopes (SEM): a Thermo Fisher [Phenom XL](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-xl.html) and a Thermo Fisher [Phenom Pure](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-pure.html).

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/sem.JPG" target="_parent"><img src="../assets/img/sem.JPG" alt="Thermo Fisher Phenom XL SEM." style="width:49%; margin:0"></a>
  <a href="../assets/img/sem2.JPG" target="_parent"><img src="../assets/img/sem2.JPG" alt="Thermo Fisher Phenom Pure SEM." style="width:49%; margin:0"></a>
  <figcaption>Phenom XL SEM and Phenom Pure SEM in the Breakerspace lab.</figcaption>
</figure>

[SEMs](https://www.thermofisher.com/blog/materials/what-is-sem-scanning-electron-microscopy-explained/) use a focused beam of electrons to image materials at much higher magnification than can be achieved with an optical microscope. In good conditions, the Phenom instruments can resolve features on the order of 100 nm.

This page is the shared SEM hub. Use it to choose an instrument, review common SEM sample-prep concepts, and find training or reservation links. For instrument operation, use the page for the SEM you are physically using:

* [Phenom XL SEM operating page](./phenom-xl.html)
* [Phenom Pure SEM operating page](./phenom-pure.html)

<a name="quick-actions"></a>
### Quick Actions

| Need | Use this link |
| --- | --- |
| New lab user or untrained SEM user | [Register for a Breakerspace lab training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0) |
| Reserve instrument time | [Open Breakerspace LibCal instrument reservations](https://breakerspace.libcal.com/space/168610) |
| Operate the Phenom XL | [Open the Phenom XL operating page](./phenom-xl.html) |
| Operate the Phenom Pure | [Open the Phenom Pure operating page](./phenom-pure.html) |
| Need manufacturer documentation | [Manufacturer manuals](#manuals) |
| Need practice tasks | [Exercises](#exercises) |

SEM users must complete Breakerspace lab training and SEM-specific training before working independently. If your sample is hazardous, wet, very magnetic, loose, reactive, biological, vacuum-sensitive, or otherwise unusual, ask staff before bringing it to the lab.

<a name="chooser"></a>
### Interactive SEM Chooser

Use this quick chooser if you are not sure which SEM to reserve. The recommendation is a starting point; ask staff if your sample is unusual or the result seems ambiguous.

<div id="sem-chooser" style="border:1px solid #d0d0d0; padding:1em; margin:1em 0;">
  <p><label><input type="checkbox" id="sem-eds"> I need EDS elemental analysis.</label></p>
  <p><label><input type="checkbox" id="sem-large"> My sample is larger than an 18 mm stub, unusually shaped, or I want to load multiple stubs.</label></p>
  <p><label><input type="checkbox" id="sem-cold"> My sample is wet, frozen, heat-sensitive, or needs the cold stage.</label></p>
  <p><label><input type="checkbox" id="sem-routine"> I only need routine imaging of a small, dry, mounted sample.</label></p>
  <button type="button" id="sem-chooser-button">Recommend an SEM</button>
  <div id="sem-chooser-result" style="margin-top:1em;"></div>
</div>

<script>
(function () {
  var button = document.getElementById('sem-chooser-button');
  var result = document.getElementById('sem-chooser-result');
  if (!button || !result) return;

  button.addEventListener('click', function () {
    var needsEds = document.getElementById('sem-eds').checked;
    var needsLarge = document.getElementById('sem-large').checked;
    var needsCold = document.getElementById('sem-cold').checked;
    var routine = document.getElementById('sem-routine').checked;
    var html = '';

    if (needsCold && (needsEds || needsLarge)) {
      html = '<strong>Ask staff before reserving.</strong> Cold-stage needs point toward the Phenom Pure, but EDS or large-sample needs point toward the Phenom XL. You may need to adjust sample prep or split the work into two sessions.';
    } else if (needsCold) {
      html = '<strong>Recommended: Phenom Pure.</strong> The Pure has the temperature-controlled cold stage for frozen, wet, or heat-sensitive samples. <a href="./phenom-pure.html">Open the Phenom Pure operating page</a>.';
    } else if (needsEds || needsLarge) {
      html = '<strong>Recommended: Phenom XL.</strong> The XL has EDS and the larger sample stage. <a href="./phenom-xl.html">Open the Phenom XL operating page</a>.';
    } else if (routine) {
      html = '<strong>Either SEM may work.</strong> Choose based on availability and the holder that matches your sample. For the simplest page at the instrument, open either the <a href="./phenom-xl.html">Phenom XL operating page</a> or <a href="./phenom-pure.html">Phenom Pure operating page</a>.';
    } else {
      html = '<strong>Start with the comparison table below.</strong> If you are still unsure, ask Breakerspace staff before preparing or loading the sample.';
    }

    result.innerHTML = html;
  });
})();
</script>

<a name="choose"></a>
### Choose An SEM

| Use case | Recommended instrument | Notes |
| --- | --- | --- |
| Large samples, multiple stubs, or awkward geometry | [Phenom XL](./phenom-xl.html) | Stage accepts samples up to 100 mm x 100 mm x 35 mm. Confirm height before loading. |
| Elemental analysis | [Phenom XL](./phenom-xl.html) | Use EDS for spot checks, maps, reports, and CSV exports. |
| Fast imaging of ordinary dry samples | [Phenom XL](./phenom-xl.html) or [Phenom Pure](./phenom-pure.html) | Choose based on availability and holder compatibility. |
| Frozen, wet, or beam-sensitive samples | [Phenom Pure](./phenom-pure.html) | Use the temperature-controlled cold stage after staff-approved sample prep. |
| One small mounted stub | [Phenom Pure](./phenom-pure.html) | Useful for straightforward imaging when EDS is not needed. |
| Non-conductive samples | Phenom XL or Phenom Pure | Use low vacuum, sputter coating, or conductive mounting depending on the goal. |

<a name="page-index"></a>
### Page Index

* [Quick actions](#quick-actions)
* [Interactive SEM chooser](#chooser)
* [Choose an SEM](#choose)
* [Compatible materials and shared sample rules](#materials)
* [Sample prep at a glance](#prep)
* [Quick imaging settings](#quick-settings)
* [Shared sample preparation details](#prep-details)
* [Data processing and analysis](#data)
* [Manufacturer manuals](#manuals)
* [Exercises](#exercises)
* [Tutorial to-do list](#todo)

{% include sem/common-safety.md %}

{% include sem/sample-prep-at-a-glance.md %}

For EDS samples on the Phenom XL, prefer conductive mounting and avoid coating materials that interfere with the elements of interest. Gold coating is excellent for imaging but can complicate EDS; carbon coating is often better for inorganic EDS.

{% include sem/quick-imaging-settings.md %}

<a name="prep-details"></a>
### Shared Sample Preparation Details

SEM sample preparation has two goals: protect the microscope and make the sample electrically and mechanically stable enough to image. The most common preventable SEM problems are loose debris, incorrect height, poor grounding, wet samples, and over-prepared samples that no longer show the surface you wanted to study.

#### Basic Solid Samples

1. Place a clean bare stub in a sample prep tray.
2. Attach a double-sided carbon pad or another approved adhesive.
3. Attach the sample firmly to the pad.
4. If useful, add conductive tape, conductive paint, or graphite/silver paint to connect the sample surface to the metal stub.
5. Use stub tweezers to hold the stub, then gently tap and blow with compressed air to remove loose particles.
6. Confirm the sample is not taller than the instrument-specific height limit before loading.

Do not prepare samples inside an SEM sample holder. Loose particles can fall into the holder or loading area and later contaminate the detector, chamber, or column.

#### Powder And Particle Samples

Powders should be sparse, well attached, and mostly one layer thick.

1. Attach a carbon pad to a clean stub.
2. Pick up a very small amount of powder with a toothpick, spatula, or tweezers.
3. Gently brush or flick particles onto the exposed carbon pad.
4. Press particles lightly into the adhesive if needed.
5. Hold the stub with stub tweezers, tap the side of the stub, then blow with compressed air to remove loose grains.

If you care about particle size or shape, thick piles are a problem because particles overlap and hide each other. Use less material than feels natural; SEM needs a visible population of particles, not a mound.

#### Non-Conductive Samples

Non-conductive samples can charge under the electron beam. Charging often appears as a region that gets brighter over time, streaks, distorted features, drifting image position, or a field of view that washes out to white.

You have three main options:

1. **Low vacuum:** fastest and non-destructive. Useful for paper, polymers, ceramics, many organics, and samples where coating is not acceptable. Resolution and signal-to-noise will usually be worse than high vacuum.
2. **Sputter coating:** best for high-resolution imaging of insulating surfaces. Gold is common and highly conductive, but it adds a coating that can hide very fine surface features and complicate elemental analysis.
3. **Conductive bridge:** copper tape, carbon tape, graphite paint, or silver paint can provide a partial path to ground. This works best when the area of interest is close to the conductive bridge.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/sem/sputter_coater.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/sputter_coater.jpeg" alt="SEM sputter coater." style="width:49%; margin:0"></a>
  <a href="../assets/img/tutorials/sem/sputter_coater_gold_setting.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/sputter_coater_gold_setting.jpeg" alt="Sputter coater gold coating setting." style="width:49%; margin:0"></a>
  <figcaption>Sputter coating can reduce charging and improve high-vacuum imaging of non-conductive samples.</figcaption>
</figure>

#### Wet, Moist, And Biological Samples

Wet samples are risky in an SEM because water and other volatile liquids outgas under vacuum. Outgassing can cause poor images, vacuum errors, contamination, and microscope damage.

Common strategies:

* **Dry the sample** if preserving the wet structure is not important.
* **Use the sputter coater drying/vacuum mode** to test whether a sample visibly changes under vacuum before loading it into the SEM.
* **Freeze the sample** on the Phenom Pure cold stage if you need to preserve wet or heat-sensitive structure.
* **Use a very small amount in low vacuum** only when staff agree that the sample is appropriate and low moisture enough.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/sem/sutter_coater_drying_setting.jpeg" target="_parent"><img src="../assets/img/tutorials/sem/sutter_coater_drying_setting.jpeg" alt="Sputter coater drying mode setting." style="width:50%; margin:0"></a>
  <figcaption>The sputter coater drying mode can help dry samples or test vacuum sensitivity before SEM imaging.</figcaption>
</figure>

{% include sem/data-and-analysis.md %}

<a name="manuals"></a>
### Manufacturer Manuals

* [Phenom XL user manual](https://www.dropbox.com/scl/fi/iyd538gtkj79kg0bc8113/2020-MS-Phenom-XL_User-Manual.pdf?rlkey=0yk985nvgz3lckqnrtxwo7afv&dl=0)
* [Phenom XL tensile stage manual](https://www.dropbox.com/scl/fi/fu39pi9pamr2top97cv6m/Tensile-Stage-Training-Manual.pdf?rlkey=xs9dkadn6k16f9vpo3vc3y2h7&dl=0)
* [Phenom XL all docs](https://www.dropbox.com/scl/fo/mk2sedrkfsvpllralaj4c/AMh_Ma2bU_Tl8Ul0u6xmiG4?rlkey=962g3kifk9bll59jv1ib9w86d&dl=0)
* [Phenom Pure user manual](https://www.dropbox.com/scl/fi/7ju8ldfdm0p04m6n81men/Phenom-ProX-G6-User-Manual.pdf?rlkey=l6gg1ld4zpmtxgrsxfgw00jpb&dl=0)
* [Phenom Pure temperature controlled stage manual](https://www.dropbox.com/scl/fi/nqcrhb3axctk6782k5hqk/User-Manual_Phenom_Temperature-Stage.pdf?rlkey=r01r9dl6k1km22to13s0nir24&dl=0)
* [Phenom Pure all docs](https://www.dropbox.com/scl/fo/th7xj2e2ul1sed2vobibt/ACVAySN_rjR_JnEXtPfs3_8?rlkey=3j90cjbe0akxyu7o3fanrxvn5&dl=0)

<a name="links"></a>
### Links

* [Nanoscience Instruments Phenom Desktop SEM YouTube Playlist](https://www.youtube.com/watch?v=Tuvu79IPFa8&list=PLSK7wbUBb88knCedT9BvlILTanNkLh38q)
* [Thermo Fisher SEM YouTube playlist](https://www.youtube.com/watch?v=jFO5AnYnn2c&list=PLoxdPzacxPYjwqELAD8XQGsygUYse2gmB)

<a name="exercises"></a>
### Exercises

These exercises are shared SEM examples. The instrument-specific pages identify which exercise is best for training on each SEM.

* **Level 1 - General training:** Prepare and image a small piece of hair. Use the Phenom Pure or XL to load the sample, navigate with NavCam, focus in LiveSEM, acquire images at several magnifications, and compare a cut end with a torn or broken end.
* **Level 2 - EDS practice:** Prepare salt and sugar on the same stub. Use morphology first, then EDS on the Phenom XL, to decide which is which.
* **Level 2 - Non-conductive sample comparison:** Image an uncoated non-conductive sample in low vacuum, then sputter coat a similar sample and compare resolution, charging, and surface contrast.
* **Level 2 - Image analysis:** Cut a thin slice of a roasted coffee bean, sputter coat it, and image pore structure. Estimate average cavity size from several images.
* **Level 3 - Specialist training:** Prepare a powder sample sparse enough for particle sizing. Acquire images suitable for measuring particle diameter and compare the result with a poorly dispersed sample.
* **Level 3 - Specialist training:** Use the Phenom Pure cold stage on a staff-approved wet or heat-sensitive sample. Document the freezing temperature, imaging behavior, and signs of frost, outgassing, or beam damage.

<a name="todo"></a>
### Tutorial To-Do List

* Add a complete level 1 training example using a specific material-library sample, including bin number/location once the cabinet is organized.
* Add a level 2 EDS exercise using specific stocked samples or standards, including bin number/location once available.
* Add a level 2 non-conductive-sample exercise using a specific material-library sample suitable for low-vacuum and sputter-coated comparison.
* Add photos or GIFs showing a gloved hand placing a stub in a prep tray and mounting a sample with stub tweezers.
* Add photos or GIFs showing powder transfer to carbon tape, tapping/removing loose particles, and a good vs overloaded powder stub.
* Add before/after image examples of charging mitigation: uncoated high vacuum, low vacuum, conductive bridge, and sputter coating.
* Add before/after image examples of beam damage or sample degradation on a sensitive sample.
