---
layout: default
---
# Breakerspace FTIR Tutorial

## Overview:

<img src="../assets/img/ftir.JPG" alt="FTIR spectrometer" style="width:33%; float:right; margin-left:10px; margin-bottom:1.4em;">
The Nicolet iS5 FTIR Spectrometer Fourier-transform infrared (FTIR) spectrometer provides an infrared spectrum of absorption or transmission of a solid, liquid, or gas, for identification, primarily, of organic or polymeric materials. This tutorial focuses primarily on use of the instrument with an attenuated total reflectance (ATR) accessory, which allows for easy sampling of materials in solid, semi-solid, powder, paste, and liquid forms. 
<div style="clear:both;"></div>

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
##### Instrument startup:

* [Power on instrument](../assets/img/tutorials/ftir/ftir-switch.JPG), [if needed](../assets/img/tutorials/ftir/ftir-power.JPG)
* Log on to instrument workstation using your MIT Kerberos
* [Start OMNIC software](../assets/img/tutorials/ftir/ftir-desktop.JPG)
* Verify instrument connection via [system status](../assets/img/tutorials/ftir/omnic-status.PNG)
* Remove protective cover from ATR crystal plate
* [Clean ATR crystal](#crystal)
* Collect background (background will need to be refreshed periodically)

<a name="sample"></a> 
##### Operation:

* [Clean ATR crystal](#crystal)
* Collect sample
* Save sample spectrum  

Repeat steps as needed

<a name="shutdown"></a> 
##### Instrument shut down:

* Save all data (each spectrum must be indvidually selected and saved)
* Close OMNIC
* Log off workstation
* Clean ATR crystal
* Put cover on crystal plate and clamp in place using pressure tower
* Do not switch off (the manufacturer recommends leaving the instrument powered when not in use)

<a name="materials"></a> 
### Compatible materials and sample prep: 

* Any non-hazardous solid, semi-solid, powder, paste, and liquid materials
* Solvents needed to clean a sample off the instrument must also be non-hazardous 
* Only sensitive to molecules that absorb IR radiation and transition to excited vibrational state
* Complementary information to Raman spectroscopy, often

_**If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab.**_

<a name="sample-prep"></a> 
##### Sample preparation and loading:

To maximize signal strength, it is important that the sample is in good contact with the entire ATR window. 

##### Solid samples:

* Select self leveling pressure tip
* Solid samples should be smooth and free of contaminants on the face to be tested
* Cover the diamond window with the sample
* Position the pressure tower over the window
* Tighten the turn the knob until the clutch slips to provide clamping pressure to the sample 
* Click "collect sample" in OMNIC , clean, repeat as needed

Although many solid samples will not contaminate the window, it is still a good idea to wipe the window with isopropyl alcohol and a Kimwipe between samples.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/ftir/sample-load.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/sample-load.GIF" alt="Solid sample loading." style="width:32%;"></a>
  <figcaption> Loading a solid sample</figcaption>
</figure>

##### Powder samples:

It is especially important that powders contact the surface of the diamond window as completely as possible, so it is helpful that they are ground as finely as possible. Plan to run powder samples multiple times to verify you are getting a good signal.

* Select the concave pressure tip
* Position the pressure tower over the window
* Tighten the turn the knob until the clutch slips
* Click "collect sample" in OMNIC, clean, repeat as needed

_insert powder samples gif_

##### Liquid samples:

* Place droplet of sample on ATR crystal
  * Non-volatile liquids can be run uncovered, without the use of the pressure tower
  * Volatile samples can be covered with the volatiles cover to prevent evaporation. Clamp volatiles cover with the pressure tower
* Click "collect sample" in OMNIC, clean, repeat as needed

_insert liquid samples gif_

<a name="details"></a> 
### Detailed operating instructions: 

<a name="crystal"></a> 
##### Cleaning the ATR crystal:

* apply a few drops of isopropyl alcohol to a Kimwipe
* wipe with wetted portion of the Kimwipe, starting in the center and working outwards
* using a dry portion of the Kimwipe, or a new Kimewipe, dry the crystal and surrounding area

_insert gif of process_

<a name="background"></a> 
##### Background collection:

Before collecting spectra, it is necessary to collect a background spectrum. A background spectrum is a single-beam spectrum obtained without a sample in place. The background spectrum is the result of the output of the source; the response of the beamsplitter, optics, sampling accessory or holder, and detector; and any atmospheric absorptions inside the spectrometer. A single-beam sample spectrum can be ratioed against the background spectrum to remove the effects of the background and produce a transmission spectrum.

* iD7 ATR accessory background collection is run with the cleaned diamond crystal exposed to air (no pressure clamp)
* iD1 transmission accessory background is run with no sample in the compartment
* EasiDiff diffuse reflectance background collection is run on a sample cup holding pure KBr powder
* set instrument up per above for your experiment and click "collect background"

##### _Negative absorbance in an ATR spectrum indicate the crystal was not clean during background collection_

_insert image with collect background highlighted_

##### Volatiles cover
<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/ftir/volatile-cover.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/volatile-cover.GIF" alt="Volatile cover use." style="width:32%;"></a>
  <figcaption> Use of the volatile cover </figcaption>
</figure>

##### Swapping pressure tip:

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/ftir/pressure-tip.GIF" target="_parent"><img src="../assets/img/tutorials/ftir/pressure-tip.GIF" alt="Swapping pressure tips." style="width:32%;"></a>
  <figcaption> Swapping pressure tips</figcaption>
</figure>

<a name="analysis"></a> 
### Data processing and analysis:

Data processing is beyond the scope of this tutorial, but we recommend the use of the [Wiley KnowItAll Spectroscopy Software & Libraries available through the MIT Libraries](https://libguides.mit.edu/knowitall).

<a name="failures"></a>
### Common failure modes:

* ATR Signal to noise is low if sample is not in intimate contact with ATR crystal
* If instrument is connected into different USB port on workstation it will not connect
* Negative features in an ATR spectrum indicate the crystal was not clean during background collection

<a name="manuals"></a> 
### Manufacturer's manuals:

* [iS5 spectrometer user guide](https://www.dropbox.com/scl/fi/rfba0x3swuhi4affsytv6/2638_iS5-UG.pdf?rlkey=mnjpwg72rbau8dsaw8jwg9flk&dl=0)
* [iD7 ATR User Guide](https://www.dropbox.com/scl/fi/j24msyzbfpqahhk66z5y8/3021_-iD7_UG.pdf?rlkey=xf1sw5yoydqomsmcs1hxhrf5y&dl=0)
* [OMNIC software _Getting Started_ guide](https://www.dropbox.com/scl/fi/nhx1fk2ov5fpkz4og1guf/2640_OMNIC_GS.pdf?rlkey=93wld38wdscvv94o177jylilu&dl=0)
* [Complete set of manufacturer's manuals](https://www.dropbox.com/scl/fo/n0zv4090ncohz1yd53zyp/AEk8_3vo2JuCcHDSDBEEjck?rlkey=haqbguq12kbmh8fi7jmi8wzvg&dl=0)

<a name="links"></a>
### Links:

* list of links, ie. good video tutorials, some student project, anything relevant

<a name="exercise"></a> 
### Exercises:

Test solid polymer samples and determine which is acrylic and which is polypropylene through a library search. Measure samples of caffeinated and decaffeinated ground coffee and determine which is which by comparing the height of the peak at 1650.

