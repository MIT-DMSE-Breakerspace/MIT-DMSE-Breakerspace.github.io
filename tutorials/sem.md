---
layout: default
---
# Breakerspace SEM Tutorial

## Overview

The Breakerspace has two scanning electron microscopes (SEM), a ThermoFisher [Phenom XL](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-xl.html) and [Phenom Pure](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-pure.html. [SEMs](https://www.thermofisher.com/blog/materials/what-is-sem-scanning-electron-microscopy-explained/) use a focused beam of electrons to image materials at much higher magnification than can be achieved with an optical microscope, with our instruments able to resolve features as small as 100 nm in optimum conditions. Our Phenom XL has a large 100x100 mm sample stage, a low vacuum mode for non-conducting samples, can perform [energy dispersive spectroscopy (EDS)](https://www.thermofisher.com/blog/materials/edx-analysis-with-sem-how-does-it-work/), and also has a [tensile stage](https://assets.thermofisher.com/TFS-Assets/MSD/Flyers/desktop-sem-tensile-sample-holder-FL0116.pdf) for in-situ observation of mechanical experiments. The Phenom Pure can observe a single sample on an 18 mm or smaller stub, under either low or high vacuum, and has a cold-stage for observation of frozen samples. Both instruments have [backscatter (BSD) and secondary electron (SED) detectors](https://www.thermofisher.com/blog/materials/sem-signal-types-electrons-and-the-information-they-provide/).

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
* Start the Phenom User Interface software
* Wake the instrument up if needed
	* The first time you log on, and occasionally thereafter, you may need to connect to the instrument

<a name="sample"></a> 
#### Operation:

##### Sample prep
* Wear nitrile gloves when handling your sample, sample stages, and other sample preparation components
* Prepare samples externally at the sample prep table
* Firmly attach samples to stub
* Remove loose debris with compressed air
##### Sample Loading
* Load your sample(s) into the sample stage
	* The sample compartment on the Phenom XL can be accessed by pressing eject button in the software
	* The Phenom Pure sample compartment is manually opened and closed, but must be unlocked before opening with the eject button in the software
* Set proper sample height
	* On the Phenom XL, set the tallest part of your tallest sample level with the opening of the sample stage, then lower by 6 notches on the dial
	* On the Phenom Pure the tallest part of the sample should be just lower than the top edge of the sample stage
* Load the sample stage into the instrument
* Close the door and your sample should be visible in the NavCam
##### Characterization
* Remove your gloves while using the computer
* Perform characterization relevant to your sample (image capure, measurement, EDS)
##### Sample Unloading
* Wear nitrile gloves
* Open the sample compartment
* Remove sample(s)]
* Phenom XL
	* Return sample stage to sample compartment
	* Close door
* Phenom Pure
	* Close door
	* Place sample stage in drawer


<a name="shutdown"></a> 
#### Instrument shut down:

* Click unload sample
* Put on gloves
* Remove your sample
* Close the door
* Close the software

* Detailed operating instructions
#### Live Feed

When moving the camera around the sample, use the arrow keys for big jumps. Press control and the arrow keys for more precise movement, or click to center the camera on your cursor. To focus click the focus button in the bottom left corner. The brightness and magnification buttons are right above it. Right click the focus and brightness buttons to toggle between manual and auto adjustment. Right click and drag for precise adjustments and use the mouse wheel for large adjustments.


<figure>
	<a href="../assets/img/tutorials/SEM/FocBri.PNG" target="_parent"><img src="../assets/img/tutorials/SEM/FocBri.PNG" alt="An image showing how to change the brightness or focus"></a>
</figure>

#### Acquisition

Press the camera icon on the left side of the screen to take an acquisition of the live feed. This picture will appear in the gallery menu in the top right. This is where you can see all the photos you have taken.

<figure>
	<a href="../assets/img/tutorials/SEM/AcgGal.PNG" target="_parent"><img src="../assets/img/tutorials/SEM/AcgGal.PNG" alt="An image showing how to take a picture and where to find all the pictures you have taken."></a>
</figure>

#### EDS

To use the EDS feature click on the squiggly line icon in the top right. Select a shape to measure along or inside in the menu on the left. The map option can be used to see where each element is located within the frame. A Table showing the atomic and weight concentrations of the area designated by the shape you drew will appear.

<figure>
	<a href="../assets/img/tutorials/SEM/EDS.gif" target="_parent"><img src="../assets/img/tutorials/SEM/EDS.gif" alt="A gif showing how to use the EDS feature."></a>
</figure>

#### Live EDS

Click on the Live EDS icon in the top right. Click anywhere on the live feed to see the elemental makeup of that section by atomic and weight concentration. Click the square to stop data collection before navigating to a different section.


<figure>
  <a href="../assets/img/tutorials/SEM/LiveEDS.gif" target="_parent"><img src="../assets/img/tutorials/SEM/LiveEDS.gif" alt="Solid sample loading." style="width:75%;"></a>
  <figcaption> Loading a solid sample</figcaption>
</figure>

* Materials
	* compatible materials
		* Powders
		* Solids
	* sample prep
	* safety/handling related info

* Common failure modes
	* If you can't get the instrument to transition to SEM imaging, take your sample out and put it back in.

	* Before navigating away from an EDS make sure that it isn’t active or else the instrument might lock itself in place. To resolve the issue, go back to the EDS, start it again, and turn it off.

	* If you have a brittle sample, you may have to use a low voltage and beam intensity to prevent damage.





* Manufacturer manuals
	* software manual
	* hardware manual
* Links
	* good video tutorials, etc.
* Exercises
	* intro for anyone - eg honey bee on optical
	* beginner exercise for course 3 subjects - identify and measure types of grain in metal sample, 
	* advanced exercise - deconvolution of compound sample from spectrometer, etc.



### <a name="startup"></a> Instrument startup:

Procedure to start up the instrument

### <a name="shutdown"></a> Instrument shut down

Procedure to shut down the instrument

### <a name="materials"></a> Compatible materials

These are the categories of materials that can safely be characterized on this instrument.

These categories of materials should not be used.

### <a name="sample-prep"></a> Sample preparation

Common sample preparation techniques for solids.

Common sample preparation technique for powders.

Common sample preparation technique for liquids.

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
