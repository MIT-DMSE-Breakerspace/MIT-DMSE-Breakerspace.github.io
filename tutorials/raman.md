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
* Not useful for metals, ionic salts such as NaCl, or overly fluorescing materials

##### _If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab._

#### Sample Prep:

* Generally, sample should be placed on a glass microscope slide
* The working distance of the microscope objectives is quite close, so powders should be finely ground and level/smooth
* Solid samples without parallel faces may be mounted to the slide using the sample press and Plastilina mounting clay to ensure a good surface to focus on

<a name="details"></a> 
### Detailed operating instructions: 

Our Raman system includes three lasers: 532nm, 638nm, and 785nm. The shorter wavelengths are higher energy, and will therefore generate a stronger signal, which is usually desirable. However, temperature-sensitive samples can be burned by the higher energy lasers, especially the 532nm. Also, materials that fluoresce will fluoresce more with higher energy lasers, and fluorescence will overwhelm the detector, making an Raman scattering difficult or impossible to distinguish from noise. When getting set up, we recommend starting with the 638nm laser, and moving to the 532nm if a stronger signal or higher signal/noise ratio is needed. If fluorescing is observed, switch to the 785nm laser. If the sample still fluoresces with the 785nm laser, the sample may not be conducive to Raman spectroscopy.

Our system includes four diffraction gratings. Light scattered off the sample, including Raman scattering, needs to be diffracted before it is measured by the detector so the detector can measure signal strength at discrete wavelengths. Our system has four gratings with 600, 1200, 1800, and 2400 grooves/mm. 

Generally, a coarser grating (600 gr/mm) will generate a narrower diffraction pattern, so the signal strength will be higher and the resolution will be lower (closely spaced peaks may merge into a single larger peak). The finer gratings give higher resolution results, but at the expense of signal strength. 

Additionally, [finer gratings produce a wider dispersion angle](https://www.dropbox.com/scl/fi/0kcumhfxxhycy8b47l32d/Raman-Spectral-Resolution-Tech-Note.pdf?rlkey=321k53nqc9jn6cdqkqhpb0rzd&st=dr66nh85&dl=0), meaning the diffraction pattern is physically wider than the CCD detector chip. This is overcome through using movable gratings that can be aimed to direct different segments of the diffracted signal onto the detector at different times. With an 1800 or 2400 gr/mm grating, it maybe necessary to reposition the grating five or more times in order to capture the full spectrum, whereas the CCD can typically capture the entire spectrum from one position when using the 600 gr/mm grating. 

A typically workflow might be to load the sample, focus, and use the RTD feature (realtime display) to look for a signal using the 638nm laser and 600 gr/mm. Make sure the spectro is covering the portion of the spectrum that is displayed and where you expect to see key peaks. With this combination, the CCD should be able to capture the full with of the spectrum from one position. Refine focus for spectroscopy by rotating the joystick knob to control fine focus and maximize spectrometer signal strength. Once you are sure you're seeing some key peaks and the general setup is working, select different laser/grating combinations based on your specific goals and collect relevant spectra.

<a name="data"></a>
### Data processing and analysis:

* Coming soon!

<a name="failures"></a>
### Common failure modes:

* The cameras sometimes do not connect to the software, restarting the computer is the suggested fix
* No spectrum because laser is not on, check laser is actually on using internal camera
* No spectrum because spectro shift position is out of display range - reposition spectro
* No identifiable peaks, spectrum appears as a large hump - this is fluorescing, try longer wavelength laser, material may not be suitable for Raman spectroscopy

<a name="manuals"></a>
### Manufacturer's manuals:

* Links to manual files in dropbox

<a name="links"></a>
### Links:

* list of links, ie. good video tutorials, some student project, anything relevant

<a name="exercises"></a>
### Exercises:

* Intro: run autocalibration routine and collect spectrum for polystyrene sample
* Intermediate: perform spatial mapping and compound indentification on [aspirin/paracetamol/caffeine tablet](https://en.wikipedia.org/wiki/Aspirin/paracetamol/caffeine)
* Use confocality to collect spectra at different depths within a layered material such as a potato chip bag



