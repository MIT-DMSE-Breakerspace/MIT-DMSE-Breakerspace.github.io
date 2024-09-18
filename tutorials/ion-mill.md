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
* Tilt the sample back to 0&deg; milling angle
* Open the shutter plate
* Turn the camera and illumination(s) off
* Ensure that the needle valve is closed
* Turn the TMP's standby ON
* Close the argon cylinder
* Turn off the monitor

<a name="materials"></a> 
### Compatible materials and sample prep: 

* Samples should be non-hazardous and safe to handle in the Breakerspace
* Samples should be free of volatiles (dry)
* Samples must be free of loose particles (“flush” with compressed air)
* Samples that are carefully polished or prepared before being ion milled will need less time to polish and yield better results

___If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab.___

#### Types of milling:

**Polishing:** polishing is primarily done on metallographic samples that have been sectioned, mounted in a resin puck, ground, and mechanically polished to a reflective finish. Polishing can also be performed on other flat samples, though degree of success will depend on the initial preparation of the sample surface. During a polishing operation the sample is continuously rotated and the ion beam contacts the surface at a low angle (3&deg; to 10&deg;), for gentle sputtering of material from a larger spot, approximately the size of a pencil eraser. Starting at 10 kV and 4&deg;, results can be obtained on a well-prepared sample in as little as 10-30 minutes.

**Slope cutting:** 



<a name="details"></a> 
### Detailed operating instructions: 

* include sample loading/unloading
* as needed explanations of each step, eg. collecting background, sample loading, etc.
* software features
* images/videos inline as needed

<a name="data"></a>
### Data processing and analysis:

We recommend imaging your sample(s) in the SEM before ion milling. Before and after comparisons are interesting to have, and can also help troubleshoot the process in case the results are not as expected (surface not polished, surface damaged, etc.).

<a name="failures"></a>
### Common failure modes:

* coming soon

<a name="manuals"></a>
### Manufacturer's manuals:

* [SEMPrep2 ion mill manual](https://www.dropbox.com/scl/fi/50x7hl7x68mmfu5ypkt5g/SC-2100_manual_v2.6-2105.pdf?rlkey=d1ivx4xdfuvc14v36bllvusoh&dl=0)
* [Sample alignment microscope manual](https://www.dropbox.com/scl/fi/4bxxm6zr7q0elwqqvx5a0/Sample-Alignment-Tool-manual.pdf?rlkey=ltp97kascl3a2wrx785xmj749&dl=0)

<a name="links"></a>
### Links:

* [Technoorg Linda - making of  100th SEMPrep ion milling system](https://www.youtube.com/watch?v=HaZ6fGmBUhc)

<a name="exercises"></a>
### Exercises:

* coming soon


