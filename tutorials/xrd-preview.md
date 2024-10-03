---
layout: default
---
# Breakerspace Instrument Tutorial Template - \<h1>

## Overview: - \<h2>

Matches info/image for instrument on lab page, brief description of what it does/how it works/what materials it's used for

### Index: - \<h3>

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

##### Instrument startup: - \<h5> 

* Press the power button
* __One of the six loading ports must be empty when the machine is booted on__
* Turn the key to turn on the generator 


<a name="operation"></a>

##### Operation: 

* Select a measurement program
* Make sure your sample is level with the edge of the sample holder
* Name your sample
* Press "add to queue"
* Put the length of use, date, and user’s name in log book
* Copy results in the data management tab
* Log onto desktop and open the shortcut folder
* Open the analysis software

<figure style="margin-left:0; margin-right:0;">
	<img src="../assets/img/tutorials/xrd/Queue.gif" alt="Adding a sample to the queue" style="width:33%; margin:0"> 
	<img src="../assets/img/tutorials/xrd/Export.gif" alt="Copying results to desktop folder" style="width:33%; margin:0">
</figure>

<a name="shutdown"></a>

#####  Instrument shut down:

* Clean sample holder
* Put glass covering back down
* Turn key
* Press power button

<a name="materials"></a> 

### Compatible materials and sample prep: 

* compatible materials
* incompatible materials
* safety/handling related info
* images/videos inline as needed

##### Sample Prep may be own sub-section:

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
	<a href="../assets/img/tutorials/template/ai-scientist.JPG" target="_parent"><img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="An AI generated image."></a>
	<figcaption> An AI generated image. </figcaption>
</figure>  

33% width images using html image tags, one links to full screen:

<figure style="margin-left:0; margin-right:0;">
	<img src="../assets/img/raman.JPG" alt="Raman microscope" style="width:33%; margin:0"> 
	<img src="../assets/img/ftir.JPG" alt="FTIR spectrometer" style="width:33%; margin:0">
	<a href="../assets/img/sem2.JPG" target="_parent"><img src="../assets/img/sem2.JPG" alt="SEM" style="width:33%; margin:0"></a>
	<figcaption> Raman microscope, FTIR spectrometer, and scanning electron microscope. </figcaption>
</figure>

An image that floats to the right of text:

<img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="AI generated scientist" style="width:33%; float:right; margin-left:10px; margin-bottom:1.4em;"> FLOAT RIGHT - Floating image with text. 

This tag is necessary to clear the float, or else all text below will keep floating next to image: \<div style="clear:both;"></div>
<div style="clear:both;"></div>  

Same thing with image that floats to the left of text:  

<img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="AI generated scientist" style="width:33%; float:left; margin-right:10px; margin-bottom:1.4em;"> FLOAT LEFT - Floating image with text. Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.Floating image with text.  
<div style="clear:both;"></div>  

A gif sized to 32% width, that autoplays, with link that opens it full size:

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/ftir/sample-load.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/sample-load.GIF" alt="Solid sample loading." style="width:32%;"></a>
  <figcaption> Loading a solid sample</figcaption>
</figure>
  
Embedded video with controls:

<video width="100%" controls>
  <source src="../assets/video/raman-display-flip.MOV" type="video/mp4">
Your browser does not support the video tag.
</video>

### Using High Score Plus:

##### Determine background
* Treatment > Determine Background
* Automatic usually does the job.
* Granularity changes the distance between points of inflection on the background curve. A value around 20 is typically good. 
* Bending factor determines how bendy the background is (as the name suggests). 
* Click Accept.

## Determine peaks
* Treatment > Search Peaks
* Play with the significance until the peaks reflect what you think are peaks. 
* Under Peak List, go through the peaks detected to make sure the software didn’t make any mistakes. Delete peaks by Right Click > Delete Peak. 
Insert peaks by 
  * Option 1: Treatment > Insert Peak (Ctrl+R). Click on the tip of each peak you want to add. 
  * Option 2: In Peak Lists > Right Click > Add Peak…  and manually enter the data. 




