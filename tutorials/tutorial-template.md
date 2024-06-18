---
layout: default
---
# Breakerspace Instrument Tutorial Template - tutorial title is \<h1>

## Overview - main overhead is \<h2>

Matches info/image for instrument on lab page, brief description of what it does/how it works/what materials it's used for

### Index: - sections are \<h3>

* [Standard operating protocol](#sop) - ([startup](#startup), [operation](#operation), [shutdown](#shutdown))
* [Materials and sample prep](#materials)
* [Detailed operating instructions](#details)
* [Data processing and analysis](#data)
* [Common failure modes](#failures)
* [Manufacturer manuals](#manuals)
* [Links](#links)
* [Exercises](#exercises)

<a name="sop"></a>
### Standard operating protocol 

<a name="startup"></a> 
##### Instrument startup: - subsections are \<h5> to set them off more 

* sequence of powering on, logging in, starting softare, homing/tilt position etc.
* these steps should only need to be completed once per session
* no images on page in this section, just text bullets, [text can link to image if needed](../assets/img/tutorials/template/ftir-switch.JPG)

<a name="operation"></a>
##### Operation: 

* steps to characterize - sample loading, data capture and saving, etc. - whatever might be repeated, characterization sequence
* for instruments like SEM with multiple, independent characterization techniques (eg. EDS, imaging), make technique a top-level bullet and indent for steps
	* this is tabbed in to be a sub-set of the above bullet

<a name="shutdown"></a>
#####  Instrument shut down 

* sequence to close/log off/power down as needed - whatever is done once at the conclusion of a session
* highlight important steps in bold (ie. __make sure UV-Vis lamp is OFF__)
* these steps should need to be performed once at the end of a characterization session

<a name="materials"></a> 
### Compatible materials and sample prep: 

* compatible materials
* incompatible materials
* safety/handling related info

##### Sample Prep may be own sub-section

* sample prep
	* break into sub-sections as relevant, 
	* ie. solid vs. powder vs. liquid

<a name="details"></a> 
### Detailed operating instructions: 

* include sample loading/unloading
* as needed explanations of each step, eg. collecting background, sample loading, etc.
* software features

<a name="data"></a>
### Data processing and analysis 

* what softare we recommend
* typical steps
* fill in with more detail as time allows, and/or add standalone data processing tutorials

<a name="failures"></a>
### Common failure modes

* these are where people frequently get stuck
* example may include starting DSX software before microscope powered up

<a name="manuals"></a>
### Manufacturer's manuals 

* Links to manual files in dropbox

<a name="links"></a>
### Links

* list of links, ie. good video tutorials, some student project, anything relevant

<a name="exercises"></a>
### Exercises

* intro for anyone - eg honey bee on optical
* beginner exercise for course 3 subjects - identify and measure types of grain in metal sample, 
* advanced exercise - deconvolution of compound sample from spectrometer, etc.


Full width image embedded using markdown, with caption, link to open image full screen:

<figure>
	<a href="../assets/img/tutorials/template/ai-scientist.JPG" target="_parent"><img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="An AI generated image."></a>
	<figcaption> An AI generated image. </figcaption>
</figure>


32% width images using html image tags:

<figure>
	<img src="../assets/img/raman.JPG" alt="Raman microscope" style="width:32%; margin:0"> 
	<img src="../assets/img/ftir.JPG" alt="FTIR spectrometer" style="width:32%; margin:0">
	<img src="../assets/img/sem2.JPG" alt="SEM" style="width:32%; margin:0">  
	<figcaption> Raman microscope, FTIR spectrometer, and scanning electron microscope. </figcaption>
</figure>



<img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="AI generated scientist" style="width:33%; float:right; margin-left:10px; margin-bottom:1.4em;"> FLOAT RIGHT - Floating image with text. Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.  
<div style="clear:both;"></div>  
  

<img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="AI generated scientist" style="width:33%; float:left; margin-right:10px; margin-bottom:1.4em;"> FLOAT LEFT - Floating image with text. Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.  
<div style="clear:both;"></div>  
  

### <a name="loading"></a> Sample loading

Prepared samples, properly mounted in sample holder, are loaded using the following procedure...

### <a name="feature1"></a> Instrument feature

A key feature of this instrument is eg. focus stacking to create 3d image with height data

GIF embedded using image tag:

![GIF test](../assets/video/raman-display-flip.GIF)

### <a name="tutorial"></a> Tutorial

Take the tutorial sample in drawer and load it in to the instrument. Find feature X and measure the dimensions. Perform operation Y and catalog results. What can be concluded from this data?

Video embedded with video tag, width set to 100%:

<video width="100%" controls>
  <source src="../assets/video/raman-display-flip.MOV" type="video/mp4">
Your browser does not support the video tag.
</video>

