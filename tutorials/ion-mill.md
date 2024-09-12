---
layout: default
---
# Breakerspace SEMPrep Ion Mill Tutorial

## Overview:

Our ion mill enables damage free sample prep for SEM imaging. It is equipped with two ion guns: a high-energy gun with a 2-16 keV range, and a low-energy gun with a 0.1-2 keV range. We have sample holders for polishing, and for 30° and 90° slope cutting, with a handy microscope to help with sample alignment. Our LN2 cooling option allows milling of heat-sensitive samples with good temperature control.

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

* Turn the display on
* Turn the TMP's standby OFF
* In case the TMP's current consumption at 1500 Hz is higher than the usual, or >1 A, open the forevacuum pump's bypass valve for approximately 10 minutes
* Open the argon cylinder (in closet to left of instrument)
* Press _Purge (5s)_ four times, waiting five seconds between each click
* Needle valve _Semi-automatic_ control should be selected
* Open the needle valve for the ion gun you will use to allow it to reach the preset pressure, then let it close automatically
* Open the other ion source's needle valve if it will be used during today's operation

<a name="operation"></a>
#### Operation: 

##### Operation in semi-automatic operation mode:
* Prepare sample for [polishing](#polishing) or [slope cutting](#slope-cutting)
* Load sample
* Sample motion to be set
* Milling angle to be set
* Accelerating voltage to be set
* Milling time to be set
* Pressure must be <5x10<sup>-6</sup> mbar before turning on the ion source
* Turn the ion source on and the sample will be prepared
* Upon completion, [unload sample](#unload). Note that cooled samples should be allowed to return to ambient temperature before unloading

##### Operation in automatic operation mode:
* Prepare sample for [polishing](#polishing) or [slope cutting](#slope-cutting)
* Load sample
* Switch to the automated thinning mode in Settings\Thinning
* Open a recipe from the library, or create one
* Pressure must be <5x10<sup>-6</sup> mbar before a recipe is run
* Click "Run all steps" and the sample will be prepared according to the set steps
* Upon completion, [unload sample](#unload). Note that cooled samples should be allowed to return to ambient temperature before unloading

<a name="shutdown"></a>
####  Instrument shut down:

* Ensure that all high-voltages are turned off
* Turn the sample movement off
* Tilt the sample back to 0&deg milling angle

<a name="materials"></a> 
### Compatible materials and sample prep: 

* compatible materials
* incompatible materials
* safety/handling related info
* images/videos inline as needed

#### Sample Prep may be own sub-section:

* sample prep
	* break into sub-sections as relevant, 
	* ie. solid vs. powder vs. liquid

<a name="details"></a> 
### Detailed operating instructions: 

* include sample loading/unloading
* as needed explanations of each step, eg. collecting background, sample loading, etc.
* software features
* images/videos inline as needed

<a name="data"></a>
### Data processing and analysis:

* what softare we recommend
* typical steps
* fill in with more detail as time allows, and/or add standalone data processing tutorials
* images/videos inline as needed

<a name="failures"></a>
### Common failure modes:

* these are where people frequently get stuck
* example may include starting DSX software before microscope powered up
* images/videos inline as needed

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

