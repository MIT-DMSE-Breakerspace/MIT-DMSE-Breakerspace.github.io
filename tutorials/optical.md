---
layout: default
---
# Breakerspace Optical Microscope Tutorial

## Overview:

Matches info/image for instrument on lab page, brief description of what it does/how it works/what materials it's used for

### Index:

* [Standard operating protocol](#sop) - ([startup](#startup), [operation](#operation),[features](#features), [shutdown](#shutdown))
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
#### Instrument startup:

* Switch the microscope on __link to image of power switch on rear__
* Log on to instrument workstation using your MIT Kerberos
* Start the DSX Software __link to screenshot showing software, maybe__
* Use the manual focusing knob to lower the microscope stage __link to image__
* Load/change [objectives](#objectives) if needed
* Put the microscope head into the tilt position (lower it) using the button on the console or the software button

<a name="operation"></a>
##### Operation: 

* Put your sample on stage
* Use the manual focusing knob to bring sample into focus
* Move stage back/forth and left/right to position desired sample area under observation
* Fine-tune focus by moving the zoom head with the console buttons/wheel or softare buttons
* Select observation mode by clicking the best image button, select all modes, select desired image, and click apply
* Characterize! For a list of features see the [detailed operating instructions](#details)
* Verify files are saved where you intend
* Repeat as needed

<a name="shutdown"></a>
#####  Instrument shut down: 

* Close the DSX software - when you exit the software the microscope head should raise into a retracted position
* Switch the microscope off
* Log out of Windows
* Place the dust cover over the microscope

<a name="materials"></a> 
### Compatible materials and sample prep: 

* Materials should be non-hazardous and safe to handle in the Breakerspace
* Any liquids should be contained so they do not spill on the stage
* Loading capacity of the stage is 5 kg

#### Sample Prep

The instrument has no particular sample prep requirements. As long as a sample is non-hazardous and safe to handle, weighs less than 5 kg, is not so tall as to prevent achieving focus, and can be place under observation without contaminating the microscope (ie spilling), it is possible to observe on the microscope. However, additional care in sample preparation may improve imaging results, depending on sample type and characterization goals. 

<a name="details"></a> 
### Detailed operating instructions

<a name="features"></a>
#### Features:

* Quick preview of and switching between six observation modes (brightfield, oblique, darkfield, brightfield/darkfield mix, simple polarization, and differential interference contrast)
* Capture 2D and 3D images
* Automated capture and stitching of images in 2D or 3D mode to show larger regions
* Tilt the microscope head to observe your sample from different angles
* Rotatable stage
* Many post-processing and analysis tools to annotate images with dimensions, calculate surface roughness, export 3d mesh data, etc.

<a name="objectives"></a>
#### Objectives:

* Long working distance: 5x (cannot be used in polarized observation mode), 10x, 20x, 40x 
* Extra long working distance: 1x, 5x, 10x __double check these!!__
* Instructions to replace objective unit are on page 11 of the [Quick Reference Guide](https://www.dropbox.com/scl/fi/npmn40ndidrc329ev1eze/DSX1000_QRG_EN_AX9342_03.pdf?rlkey=qwg423vnbo5o3811uyjbzhmlh&dl=0)

There is an internal optical lens system that boost magnification from 14-140x, so total magnification will be (external objective) * (internal magnfication), for a range of about 14x to 5600x depending on configuration used.

#### Lighting

Many different lighting modes are available and can be selected in the desktop application or on the console. Every mode can be seen simultaneously by selecting the best image button in the software. Some lenses are not suited for the PO or polarity mode. DF or dark field typically produces the highest quality results.

<figure>
  <a href="../assets/img/tutorials/optical/BestImage.gif" target="_parent"><img src="../assets/img/tutorials/optical/BestImage.gif" alt="Bets image" style="width:32%;"></a>
</figure>


#### Acquisition

In this program, 2-D acquisition captures a photo of the sample. A 3-D acquisition will take images across a range of focuses to create a 3-D render of the sample. These 3-D renders can be used to measure the sample. To create a 3-D aquisition navigate to the “Live” section of the program. In the bottom right corner of the screen, there will be a large gray button labeled either 2-D or 3-D Acquisition. Above this button, there will be options for 2-D, Quick Scan, Range, and Start/End. 

##### 2-D

2-D acquisition takes a photo of whatever is currently on the live display. This photo cannot be used to create a 3-D render of the sample.

##### 3-D

Quick Scan, Range, and Start/End are the three modes of 3-D acquisition and all three follow a similar process. For each of them you will set a range and the objective will shift the focus upwards towards the lens according to that range. For each of them you will start by focusing the objective on the part of the sample farthest away from the lens.


###### Quick Scan

Quick scan is the quickest and simplest to execute of the three modes, but also the least precise. To execute a quick scan, focus the microscope on the part of the sample farthest away from the lens and click 3-D Acquisition. The lens will zoom out automatically and prepare a 3-D render.

<figure>
  <a href="../assets/img/tutorials/optical/QuickScan.gif" target="_parent"><img src="../assets/img/tutorials/optical/QuickScan.gif"alt="Quick Scan" style="width:32%;"></a>
</figure>

###### Range

This mode allows for more customization of the range of focal lengths that the lens moves through. Choose the range that suits the sample and focus the lens on the part of the sample farthest away from the lens. Click 3-D Acquisition and the lens will begin to focus on the parts of the sample closer to the lens. When it is finished, check the 3-D render and ensure that all of the sample is in focus. If a portion of the sample is not in focus, choose a different range and try again or use the Start/End mode.

<figure>
  <a href="../assets/img/tutorials/optical/Range.gif" target="_parent"><img src="../assets/img/tutorials/optical/Range.gif"alt="Range Scan" style="width:32%;"></a>
</figure>

###### Start/End

This is the most precise method of 3-D acquisition, but harder to execute. To begin, focus the lens on the part of the sample farthest from the lens and press start. Then, turn the wheel on the console the other way and focus closer than the closest part of the sample, and click end. Finally, click 3-D acquisition and a render will be created.

<figure>
  <a href="../assets/img/tutorials/optical/StartEnd.gif" target="_parent"><img src="../assets/img/tutorials/optical/StartEnd.gif"alt="Start/End scan" style="width:32%;"></a>
</figure>

##### Stitching

The Stitch feature allows for the creation of a 3-D acquisition over a large area. This is done by creating a low quality map of the area you would like to render, and then selecting the area on the map you would like to make a higher quality acquisition. The microscope will take multiple 3-D acquisitions of the sample and then combine them into one larger model of the sample.

To create the map, select stitching mode and select live panorama. In the box labeled acquisition, click 2-D simple. In the box labeled 2D simple settings, select auto, then change the size of the array to suit the size of your sample. Make sure that “Use it as a map image” is selected, then click 2D simple. The resulting map can then be used to create a high quality panorama.

<figure>
  <a href="../assets/img/tutorials/optical/LivePanorama.gif" target="_parent"><img src="../assets/img/tutorials/optical/LivePanorama.gif"alt="Live Panorama" style="width:32%;"></a>
</figure>

Go back to the stitching feature and select high quality panorama. In the menu that appears, select “number of pieces” in the top left. Adjust the dimensions to fit your sample and drag the yellow box on the map to the right. Adjust the autofocus (AF) settings as needed, and click 3-D acquisition. A message may appear that says the z-position is out of range. If this happens simply click OK and the program will proceed.

<figure>
  <a href="../assets/img/tutorials/optical/HighQuality.gif" target="_parent"><img src="../assets/img/tutorials/optical/HighQuality.gif"alt="High quality stitching" style="width:32%;"></a>
</figure>

<a name="data"></a>

### Data processing and analysis 

The measurement feature allows the user to determine a variety of information about the sample. This includes the change in elevation, horizontal distance, and angle between two points or along a shape. The volume of the sample can be calculated, along with the volumes of any divots or troughs along the sample. To perform these measurements, click on the measurement tab next to imaging, and then click the measurement option located directly below the reports tab. To check the distance, change in elevation, or angle between two points, select the profile option. To make a wire frame model, click the button with the arrow pointing from 2D to 3D. To find the volume of a crest or trough, select the volume option.

<figure>
	<img src="../assets/img/tutorials/optical/WireFrame.gif" alt="Wire Frame" style="width:32%; margin:0"> 
	<img src="../assets/img/tutorials/optical/Volume.gif" alt="Finding the volume" style="width:32%; margin:0">
</figure>



<a name="failures"></a>
### Common failure modes

* If any part of your sample is resting on a part of the stage that cannot move, as you move the stage your sample will rotate on the stage.
* You will not be able to access the software if it is started before the microscope is turned on.

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

# HTML examples to control layout, etc.


Full width image , with caption, link to open image full screen:  

<figure>
	<a href="../assets/img/tutorials/template/ai-scientist.JPG" target="_parent"><img src="../assets/img/tutorials/template/ai-scientist.JPG" alt="An AI generated image."></a>
	<figcaption> An AI generated image. </figcaption>
</figure>


32% width images using html image tags, one links to full screen:

<figure>
	<img src="../assets/img/raman.JPG" alt="Raman microscope" style="width:32%; margin:0"> 
	<img src="../assets/img/ftir.JPG" alt="FTIR spectrometer" style="width:32%; margin:0">
	<a href="../assets/img/sem2.JPG" target="_parent"><img src="../assets/img/sem2.JPG" alt="SEM" style="width:32%; margin:0"></a>
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

<figure>
  <a href="../assets/img/tutorials/ftir/sample-load.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/sample-load.GIF" alt="Solid sample loading." style="width:32%;"></a>
  <figcaption> Loading a solid sample</figcaption>
</figure>
  
Embedded video with controls:

<video width="100%" controls>
  <source src="../assets/video/raman-display-flip.MOV" type="video/mp4">
Your browser does not support the video tag.
</video>

