---
layout: default
---
# Agilent Cary 60 UV-Vis Spectrophotometer Tutorial

## Overview

<figure>
    <img src="../assets/img/tutorials/uv-vis/cary-60-front.jpg" alt="Cary 60 UV-Vis" style="width:32%; margin:0">
</figure>

<!-- TODO: photo of the Cary 60 from the front, showing the sample compartment lid and power button -->

The Cary 60 is a UV-Vis spectrophotometer that measures how much light a sample absorbs across ultraviolet and visible wavelengths (190–1100 nm). It can be used for quantifying concentrations, identifying compounds, tracking reactions over time, and characterizing optical materials. It is operated using the Cary WinUV software on the connected computer.

### Index:

* [Standard operating protocol](#sop) - ([startup](#startup), [operation](#operation), [shutdown](#shutdown))
* [Data processing and analysis](#data)
* [Materials and sample prep](#materials)
* [Common failure modes](#failures)
* [Manufacturer manuals](#manuals)
* [Exercises](#exercises)

<a name="sop"></a>
### Standard Operating Protocol:

<a name="startup"></a>
#### Start Up
* Press the power button on the front of the instrument (lower left)
* The indicator light should turn solid green within about 2 minutes — do not use the instrument until it is green
* Log on to the desktop with your Kerberos credentials
* Open the **Cary WinUV** software by double-clicking its icon on the desktop
* The software will automatically find the instrument; the status bar at the bottom should say **Idle**

<figure style="margin-left:0; margin-right:0;">
    <img src="../assets/img/tutorials/uv-vis/cary-60-power-button.jpg" alt="Cary 60 power button and indicator light" style="width:50%; margin:0">
</figure>

<!-- TODO: close-up photo of the Cary 60 front panel showing the power button and the indicator light (glowing green) -->

**Indicator light guide:**
* **Solid green** — ready to use
* **Flashing green** — scan in progress
* **Solid orange** — still initializing, wait for green
* **Solid or flashing red** — something went wrong, see [Common failure modes](#failures)

<a name="operation"></a>
#### Operation
* In the Cary WinUV software, select **Scan** from the application menu
* Set your wavelength range (e.g. 200–800 nm covers most UV and visible) and leave other settings at default unless told otherwise
* Place your **blank** (usually the same solvent your sample is dissolved in, with nothing else in it) in the cuvette holder and click **Zero**
  * This step is important because it tells the instrument what "no sample" looks like so it can subtract out the background

<figure>
    <a href="../assets/img/tutorials/uv-vis/cary-zero-button.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/cary-zero-button.png" alt="Zero button in Cary WinUV" style="width:50%; margin:0"></a>
    <figcaption></figcaption>
</figure>

<!-- TODO: screenshot of Cary WinUV showing the Zero button highlighted and the Scan application open -->

* Remove the blank, put your sample in the cuvette, and place it in the holder. Close the lid.
* Name your sample and choose where to save your file
* Click **Start**
* The green light will flash while the scan runs; this usually takes 10–30 seconds
* Your spectrum will appear automatically when the scan is done

<figure style="margin-left:0; margin-right:0;">
    <img src="../assets/img/tutorials/uv-vis/cary-60-open-lid.gif" alt="Opening the Cary 60 sample compartment" style="width:50%; margin:0">
    <img src="../assets/img/tutorials/uv-vis/cary-60-insert-cuvette.gif" alt="Inserting a cuvette into the Cary 60" style="width:50%; margin:0">
</figure>

<!-- TODO: short GIFs or photos showing (1) opening the sample compartment lid and (2) inserting a cuvette into the holder -->

<a name="data"></a>
#### Data Analysis
* Once your scan finishes, the spectrum is shown in the graphics window. The y-axis is absorbance and the x-axis is wavelength in nm.
* You can toggle between **Absorbance** and **Transmission** using the buttons in the toolbar

<figure>
    <a href="../assets/img/tutorials/uv-vis/cary-spectrum-view.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/cary-spectrum-view.png" alt="Example absorbance spectrum in Cary WinUV" style="width:50%; margin:0"></a>
    <figcaption></figcaption>
</figure>

<!-- TODO: screenshot of the Cary WinUV graphics window showing an example absorbance spectrum with a visible peak -->

* Under the **Process** tab you can smooth your data, find and label peaks, take derivatives, and more
* Under the **Reports** or **Export** option you can save your data as a CSV or text file for use in Excel or other software

<a name="shutdown"></a>
#### Shut Down
* Remove your sample from the cuvette holder
* Close the sample compartment lid
* Quit the Cary WinUV software
* **Press and hold the power button until the indicator light turns off.** THIS IS IMPORTANT!! Leaving the lamp running shortens its life significantly.
* Log out of the desktop

<a name="materials"></a>
### Materials
* Cuvettes are stored [INSERT LOCATION]
* Deionized water for blanks and dilutions is available at [INSERT LOCATION]
* **Do not touch the clear sides of the cuvette with your fingers**; oil from your skin will show up in your data. Handle cuvettes by the frosted or ribbed sides only.
* If you are not sure what to use as your blank, use whatever solvent your sample is dissolved in (water, ethanol, etc.) with nothing else added
* The standard cuvette holds about 1 mL and has a 1 cm path length; make sure you fill it enough to cover the beam (at least ~700 µL)

<a name="failures"></a>
### Common Failure Modes
* **The indicator light is red or the software shows an error on startup** — check that the sample compartment is empty and nothing is blocking the beam. Try turning the instrument off, waiting 30 seconds, and turning it back on. If it keeps happening, contact the lab manager.
* **The "Start" button is grayed out or the software says "Connect"** — the instrument is still initializing. Wait for the status bar to say Idle. If it never does, try restarting the software.
* **Your peaks are flat or cut off at the top** — your sample is too concentrated. Dilute it and remeasure. Readings above about 2–3 absorbance units are not reliable.
* **Your spectrum is really noisy** — try zeroing again with a fresh blank, and make sure the cuvette is clean and seated properly in the holder.
* **Absorbance reads a huge number and jumps around** — the cuvette is probably not in the holder, or the detector cable is loose. Make sure the cuvette is fully inserted and the lid is closed.
* **The software can't find the instrument** — check that the USB cable is plugged in to both the computer and the back of the Cary 60. Try restarting both the software and the instrument.

<a name="manuals"></a>
### Manufacturer Manuals
* [Agilent Cary 60 UV-Vis product page](https://www.agilent.com/en/product/molecular-spectroscopy/uv-vis-uv-vis-nir-spectroscopy/uv-vis-uv-vis-nir-systems/cary-60-uv-vis-spectrophotometer)
* [Cary 60 User's Guide (G6860-90001)](https://www.agilent.com/cs/library/usermanuals/public/G6860-90001.pdf)
* [Cary 60 Installation Guide (G6860-90005)](https://www.agilent.com/cs/library/usermanuals/public/G6860-90005.pdf)
* [Agilent Molecular Spectroscopy Safety Information](https://www.agilent.com/cs/library/usermanuals/public/5971-6659_Molecular_Safety_Info_EN.pdf)
* [Measuring Baseline-Corrected Spectra on a Cary 60 (technical overview)](https://www.agilent.com/cs/library/technicaloverviews/public/5990-7947EN.pdf)

<a name="exercises"></a>
### Exercises
* **Intro:** Dissolve a few drops of food coloring in water and measure its spectrum. Find the absorbance peak and see if it matches the color you'd expect.
* **Intro:** Measure the same dye at a few different concentrations and see how the absorbance changes. Does doubling the concentration double the absorbance?
* **Beginner:** Compare the spectra of a few different colored beverages (e.g. juice, sports drink). Can you identify which wavelengths each one absorbs?
* **Intermediate:** Make a calibration curve by measuring known concentrations of a dye and plotting absorbance vs. concentration. Use it to find the concentration of an unknown sample.
* **Advanced:** Measure a mixture of two dyes with overlapping spectra and try to figure out how much of each is present.
