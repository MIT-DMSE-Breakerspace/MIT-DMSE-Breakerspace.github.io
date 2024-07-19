---
layout: default
---
# Breakerspace SEM Tutorial

## Overview

The Breakerspace has two scanning electron microscopes (SEM), a ThermoFisher [Phenom XL](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-xl.html) and [Phenom Pure](https://www.thermofisher.com/us/en/home/electron-microscopy/products/desktop-scanning-electron-microscopes/phenom-pure.html). 

[SEMs](https://www.thermofisher.com/blog/materials/what-is-sem-scanning-electron-microscopy-explained/) use a focused beam of electrons to image materials at much higher magnification than can be achieved with an optical microscope, with our instruments able to resolve features as small as 100 nm in optimum conditions. 

Our Phenom XL has a large 100x100 mm sample stage, a low vacuum mode for non-conducting samples, can perform [energy dispersive spectroscopy (EDS)](https://www.thermofisher.com/blog/materials/edx-analysis-with-sem-how-does-it-work/), and also has a [tensile stage](https://assets.thermofisher.com/TFS-Assets/MSD/Flyers/desktop-sem-tensile-sample-holder-FL0116.pdf) for in-situ observation of mechanical experiments. The Phenom Pure can observe a single sample on an 18 mm or smaller stub, under either low or high vacuum, and has a cold-stage for observation of frozen samples. Both instruments have [backscatter (BSD) and secondary electron (SED) detectors](https://www.thermofisher.com/blog/materials/sem-signal-types-electrons-and-the-information-they-provide/).

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

<a name="operation"></a> 
#### Operation:

* Wear nitrile gloves when handling your sample, sample stages, and other sample preparation components
* [Prepare samples externally at the sample prep table](#prep)
* [Load your sample(s) into the instrument](#loading)
* Remove your gloves while using the computer
* Perform [characterization](#characterization) relevant to your sample (image capture, measurement/annotation, EDS)
* Wear nitrile gloves
* Unload samples
* Repeat as needed

<a name="shutdown"></a> 
#### Instrument shut down:

* Close the software - press F11 to switch out of fullscreen view
* Log off Windows
* The instrument will put itself in standby

<a name="materials"></a> 
### Compatible materials and sample prep:

* Samples should be free of volatiles (dry), excepting samples to be frozen on the Phenom Pure cold stage
* Samples must be free of loose particles ("flush" with compressed air)
* Samples must be well secured to a sample stub 
* Non-conductive samples can be viewed in low vacuuum mode, or sputter coated
* _Phenom XL_ maximum sample size is 100mm x 100mm x 35mm
* _Phenom Pure_ maximum sample size is a cylinder about 18mm diameter and 12mm tall

##### _If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab._

<a name="prep"></a>
#### Sample prep basics:

* Prepare samples externally at the sample prep table
* Firmly attach samples to stub
* Remove loose debris with compressed air

#### Solid sample prep (basic)

* Place a bare sample stub in a sample tray __ADD IMAGES__
* Attach a double-sided carbon pad to the stuf
* Attach the sample to the pad
* For an expanded discussion of sample prep techniques, see page 15 of [the manual](https://www.dropbox.com/scl/fi/iyd538gtkj79kg0bc8113/2020-MS-Phenom-XL_User-Manual.pdf.pdf?rlkey=0yk985nvgz3lckqnrtxwo7afv&dl=0)

<a name="details"></a> 
### Detailed operating instructions: 

<a name="loading"></a>
#### Sample loading:

* Remove sample stage from the microscope (or drawer for _Phenom Pure_)
* _Phenom XL:_ sample compartment is opened by pressing eject button in the software
* _Phenom Pure:_ sample compartment is manually opened and closed, but must be unlocked with the eject button in the software
* Using stub tweezers, push pin on stub into a hole in the sample stage
* _Phenom Pure:_ black stage sets instrument in high vacuum mode, gray stage sets instrument in low vacuum mode for charge reduction on non-conducting samples
* Set proper sample height
* _Phenom XL:_ set the tallest part of your tallest sample level with the opening of the sample stage, then lower by 6 notches on the dial
* _Phenom Pure:_ the tallest part of the sample should be just lower than the top edge of the sample stage
* Load the sample stage into the instrument
* Close the door and your sample should be visible in the NavCam

<a name="loading"></a>
#### Characterization:

__NavCam:__ When you first load a sample into the SEM you see your sample(s) on the NavCam. This is an optical image of the sample stage that can be used for navigation once you are in SEM observation mode. 

__Live Feed:__ When moving the camera around the sample, use the arrow keys for big jumps. Press control and the arrow keys for more precise movement, or click to center the camera on your cursor. To focus click the focus button in the bottom left corner. The brightness and magnification buttons are right above it. Right click the focus and brightness buttons to toggle between manual and auto adjustment. Right click and drag for precise adjustments and use the mouse wheel for large adjustments.

<figure>
	<a href="../assets/img/tutorials/SEM/FocBri.PNG" target="_parent"><img src="../assets/img/tutorials/SEM/FocBri.PNG" alt="An image showing how to change the brightness or focus"></a>
</figure>

__Acquisition:__ Press the camera icon on the left side of the screen to take an acquisition of the live feed. This picture will appear in the gallery menu in the top right. This is where you can see all the photos you have taken.

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

<a name="unloading"></a>
#### Sample unloading:

* Open the sample compartment
* Remove sample(s)
* _Phenom XL:_ return sample stage to sample compartment, close door
* _Phenom Pure:_ close door, place sample stage in drawer




<a name="failures"></a>
### Common failure modes:

* If you can't get the instrument to transition to SEM imaging, take your sample out and put it back in.
* Before navigating away from an EDS make sure that it isn’t active or else the instrument might lock itself in place. To resolve the issue, go back to the EDS, start it again, and turn it off.
* Sensitive sample may experience [degredation]](https://www.thermofisher.com/us/en/home/materials-science/learning-center/applications/sample-degradation-scanning-electron-microscope-sem.html), often in the form of cracks on the surface, or the sample may appear to be melting or boiling. Lowering acceleration voltage, beam intensity, and magnification will all help slow the rate of degredation.



<a name="manuals"></a> 
### Manufacturer's manuals:

* software manual
* hardware manual

<a name="links"></a>
### Links:

* good video tutorials, etc.


<a name="exercise"></a> 
### Exercises:

* intro for anyone - eg honey bee on optical
* beginner exercise for course 3 subjects - identify and measure types of grain in metal sample, 
* advanced exercise - deconvolution of compound sample from spectrometer, etc.

