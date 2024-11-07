---
layout: default
---
# Breakerspace Horiba XploRA Confocal Raman Microscope Tutorial 

## Overview:

Collect Raman spectra to idenfity compounds and observe other characteristics of a range of materials on our instrument, which is configured with 532nm, 638nm and 785nm lasers, and 600, 1200, 1800, and 2400 gr/mm gratings.

### Index:

* [Standard operating protocol](#sop) - ([startup](#startup), [operation](#operation), [shutdown](#shutdown))
* [Materials and sample prep](#materials)
* [Detailed operating instructions](#details)
* [Data processing and analysis](#data)
* [Common failure modes](#failures)
* [Manufacturer manuals](#manuals)
* [Links](#links)
* [Exercises](#exercises)

<a name="sop"></a>
### Standard operating protocol:

<a name="startup"></a> 
#### Instrument startup:


* Log on to instrument workstation using your MIT Kerberos
* Open LabSpec 6 software
* Verify instrument is powered on (it should always be left powered on) __add link to image__
* Turn laser emission remote control power to on, if needed (this does not turn the laser on)

<a name="operation"></a>
#### Operation: 

* Prepare sample externally on glass slide
* Lower microscope stage using coarse focus knob
* Load slide into slide holder on stage
* Turn brightfield light source brightness to 100%
* Find approximate focus using the coarse knob, adjusting brightness as needed
* Refine focus using joystick rotation
* Close doors on microscope enclosure
* Perform Raman spectroscopy as appropriate for your sample

Repeat steps as needed.

<a name="shutdown"></a>
####  Instrument shut down:

* Remove sample from microscope stage and close doors
* Turn laser emission remote control power to off
* Save all data (each spectrum must be indvidually selected and saved)
* Close LabSpec 6
* Log off workstation

<a name="materials"></a> 
### Compatible materials and sample prep: 

* All materials analyzed in the Breakerspace must be non-hazardous and safe to handle
* The instrument can be used to measure liquids, solids, powders, and gases
* Generally good for studying organics, polymers, acids/bases, metal oxides, and semiconductors
* Not useful for metals, ionic salts such as NaCl, or overly fluoresching materials

##### _If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab._

#### Sample Prep:

* Generally, sample should be placed on a glass microscope slide
* The working distance of the microscope objectives is quite close, so powders should be finely ground and level/smooth
* Solid samples without parallel faces may be mounted to the slide using the sample press and Plastilina mounting clay to ensure a good surface to focus on

<a name="details"></a> 
### Detailed operating instructions: 

Our Raman system includes three lasers: 532nm, 638nm, and 785nm. The shorter wavelengths are higher energy, and will therefore generate a stronger signal, which is usually desirable. However, temperature-sensitive samples can be burned by the higher energy lasers, especially the 532nm. Also, materials that fluoresce will fluoresce more with shorter wavelength lasers, and fluorescence usually overwhelms the detector, making an Raman scattering difficult or impossible to detect. We recommend starting with the 638nm laser, and moving to the 532nm if a stronger signal or higher signal/noise ratio is needed. If fluorescing is observed, switch to the 785nm laser.

Our system includes four diffraction gratings. Light scattered off the sample, including Raman scattering, needs to be diffracted before it is measured by the detector so the detector can measure signal strength at discrete wavelengths. Our system has four gratings with 600, 1200, 1800, and 2400 grooves/mm. Generally, a coarser grating will generate a narrower diffraction pattern, so the signal will be higher but the resolution will be lower, meaning sometimes narrow peaks that are close together will appear as a single peak. The finer gratings give higher resolution results, but at the expense of signal strength. The detector has a fixed width, and finer gratings create a physically wider diffraction pattern than the detector can measure at one time, therefore higher resolution spectra must be captured in multiple steps.

A typically workflow might be to load the sample, focus, and use the RTD feature (realtime display) to look for a signal using the 638nm laser and 600 gr/mm. 

<a name="data"></a>
### Data processing and analysis:

* Coming soon!

<a name="failures"></a>
### Common failure modes:

* The cameras sometimes do not connect to the software, restarting the computer is the suggested fix
* No spectrum because laser is not on, check laser is actually on using internal camera
* Spectro shift position is out of display range

<a name="manuals"></a>
### Manufacturer's manuals:

* Links to manual files in dropbox

<a name="links"></a>
### Links:

* list of links, ie. good video tutorials, some student project, anything relevant

<a name="exercises"></a>
### Exercises:

* intro for anyone - eg honey bee on optical
* beginner exercise for course 3 subjects - identify and measure types of grain in metal sample, 
* advanced exercise - deconvolution of compound sample from spectrometer, etc.

# HTML examples to control layout, etc.


Full width image , with caption, link to open image full screen:  

<figure style="margin-left:0; margin-right:0;">
	<a href="../assets/img/tutorials/template/ftir-switch.JPG" target="_parent"><img src="../assets/img/tutorials/template/ftir-switch.JPG" alt="The FTIR power switch."></a>
	<figcaption> The FTIR power switch. </figcaption>
</figure>  

33% width images using html image tags, one links to full screen:

<figure style="margin-left:0; margin-right:0;">
	<img src="../assets/img/raman.JPG" alt="Raman microscope" style="width:33%; margin:0"> 
	<img src="../assets/img/ftir.JPG" alt="FTIR spectrometer" style="width:33%; margin:0">
	<a href="../assets/img/sem2.JPG" target="_parent"><img src="../assets/img/sem2.JPG" alt="SEM" style="width:33%; margin:0"></a>
	<figcaption> Raman microscope, FTIR spectrometer, and scanning electron microscope. </figcaption>
</figure>

An image that floats to the right of text:

<img src="../assets/img/tutorials/template/ftir-switch.JPG" alt="FTIR Switch" style="width:33%; float:right; margin-left:10px; margin-bottom:1.4em;"> FLOAT RIGHT - Floating image with text. 

This tag is necessary to clear the float, or else all text below will keep floating next to image: \<div style="clear:both;"></div>
<div style="clear:both;"></div>  

Same thing with image that floats to the left of text:  

<img src="../assets/img/tutorials/template/ftir-switch.JPG" alt="FTIR Switch" style="width:33%; float:left; margin-right:10px; margin-bottom:1.4em;"> FLOAT LEFT - Floating image with text. Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.  
<div style="clear:both;"></div>  

A gif sized to 32% width, that autoplays, with link that opens it full size:

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/ftir/solid-sample.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/solid-sample.GIF" alt="Solid sample loading." style="width:32%;"></a>
  <figcaption> Loading a solid sample</figcaption>
</figure>

A full width, high resolution gif:

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/template/high-res-test.GIF" target="_parent"><img src="../assets/img/tutorials/template/high-res-test.GIF" alt="High res gif test."></a>
  <figcaption> A higher resolution gif</figcaption>
</figure>

An optimized embedded gif that links to a high resolution gif:

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/template/high-res-test.GIF" target="_parent"><img src="../assets/img/tutorials/template/optimized-750px.GIF" alt="High res gif test."></a>
  <figcaption> A 750px wide gif that opens at higher resolution</figcaption>
</figure>
  
Embedded video with controls:

<video width="100%" controls>
  <source src="../assets/video/raman-display-flip.MOV" type="video/mp4">
Your browser does not support the video tag.
</video>

