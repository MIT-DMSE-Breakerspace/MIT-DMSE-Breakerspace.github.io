---
layout: default
---
# Breakerspace UV-Vis Tutorial

## Overview

<figure>
    <img src="../assets/img/uv-vis.JPG" alt="UV-Vis" style="width:32%; margin:0">  
</figure>

Duetta can be used as a fluorometer, as a UV-Vis-NIR spectrometer to measure absorbance, or as an instrument that measures true molecular fingerprints, which require the acquisition of fluorescence and absorbance, correcting for IFE in real time.

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
* Flip power switch and press power button. 
* Power button must be blue to operate
* Log on to the desktop with your kerberos
* Open the EzSpec software
* Click EzSpec button

<figure style="margin-left:0; margin-right:0;">
    <img src="../assets/img/tutorials/uv-vis/duetta power front button.jpg" alt="Opening UV-Vis Lid" style="width:50%; margin:0"> 
</figure>

<a name="operation"></a>
#### Operation
* Click new method
* Click Absorbance and Transmission. There are other modes, but users are primarily focused on this mode.
* Click Spectra
* Make sure the setup conditions are adequate.
* Set mode to both

<figure>
    <a href="../assets/img/tutorials/uv-vis/Both.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Both.png" alt="Select both" style="width:50%; margin:0" ></a>
    <figcaption>  </figcaption>
</figure>

* Fill the cuvet with your sample
* Name your sample and choose where you want it to save
* For best results, wait for the lamps to warm up
* Click Acquire
  
<figure>
    <a href="../assets/img/tutorials/uv-vis/Acquire.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Acquire.png" alt="Click Acquire" style="width:50%; margin:0"></a>
    <figcaption>  </figcaption>
</figure>

* Load your sample by pressing down on the machine’s lid. Close the top.
* Load a sample of deionized water when the software instructs you to load a blank.

<figure style="margin-left:0; margin-right:0;">
    <img src="../assets/img/tutorials/uv-vis/open uv-vis lid.gif" alt="Opening UV-Vis Lid" style="width:50%; margin:0"> 
    <img src="../assets/img/tutorials/uv-vis/add in cuvette.gif" alt="Adding in cuvette" style="width:50%; margin:0">
</figure>

<a name="data"></a>
#### Data Analysis
* Under Acquire tab, you can toggle between Transmission, Absorbance, and Fluorescence.

<figure>
    <a href="../assets/img/tutorials/uv-vis/Absorbance.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Absorbance.png" alt="Absorbance and Transmission" style="width:50%; margin:0"></a>
    <figcaption>  </figcaption>
</figure>

* Under the Process tab, you have the option of processing your data in many ways, including smoothing, finding peaks, fitting a curve, and more.
* Under Export tab, you can save your data as a text, as an EzSpec file, or generate a report.

<a name="shutdown"></a>
#### Shut down
* Unload your sample
* __Push and hold power button until light shuts off.__ Shutting the machine down is important so that the lamp does not burn out.
* Log out of the desktop

<a name="materials"></a>
### Materials
* Cuvettes are in bottom drawer under sample prep bench, labeled “Spare Cuvettes”
* Deionized water for dilution or blank samples is typically available in a squeeze bottom near the sink or the sample prep bench
* When filling the cuvette, do not get the outside of the cuvette dirty (by spilling contents on it or by touching it with your fingers). This results in worse data quality and possibly dirtying the machine

<a name="failures"></a>
### Common failure modes
* If your sample is too concentrated, some peaks will be cut off. 

<a name="manuals"></a>
### Manufacturer manuals
* [Operation manual](https://www.dropbox.com/scl/fi/9bzwitjz004xd8pl5bpyl/Duetta-with-EZ-Spec-Operation-Manual-5700004252-Rev-1.4.3.pdf?rlkey=8ekvwddzdt0pk931zwpxov43l&st=yisoc2r2&dl=0)
  
<a name="exercises"></a>
### Exercises
* Intro: look at water with food coloring and identify on the spectrum the bumps or dips due to the color.
* Intro: Compare concentrations of a series of a samples
* Beginner: Identify the relative size of nanoparticles samples 
* Advanced: Deconvolution of compound sample
