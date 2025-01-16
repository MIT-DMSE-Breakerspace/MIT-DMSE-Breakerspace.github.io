---
layout: default
---
# Microtrac Sync Particle Size Analyzer Tutorial

## Overview

This instrument gives particle size distribution data for dry powder samples with particles between 0.01 and 4,000 microns using laser diffraction.

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

* [Power on the instrument](../assets/img/tutorials/psa/power-switch.JPG) [if needed](../assets/img/tutorials/psa/status-light.JPG)
* Log on to instrument workstation using your MIT Kerberos
* Open Mictrotrac FLEX software
* From the [_Open Analyzer_ menu select _Sync Analyzer_](../assets/img/tutorials/psa/connect.png)
* Wait while the instrument initializes

<a name="operation"></a> 
#### Operation:

* [Check the active database](../assets/img/tutorials/psa/database.png), [change/create new](../assets/img/tutorials/psa/database-change.png) if needed
* [Load measurement SOP](../assets/img/tutorials/psa/load-sop.png), if no SOP exists ask lab staff for assistance
* Clean loose particles from sample chamber 
* Load sample, 1/4 tsp for small sample tray
* Run Auto-Sequence
* Repeat as needed

<a name="shutdown"></a> 
#### Instrument shut down:

* Export data as needed
* Close the FLEX software
* Log off Windows workstation
* Instrument may be left powered on

#### Detailed operating instructions:

The sequence of steps to run a measurement is very straightforward: start the software, connect to the instrument, let it initialize, verify you are saving into the correct database, load a measurement SOP, clean the sample tray if needed and load a sample, run the auto-sequence, save your data, and close the software. Since the organization of the software can be confusing, this screen capture video focuses on the sequence of steps needed to initial a measurement. Don't forget, of course, to load your sample!

<div class="container-video">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/TvgfB1BDVO4?si=zmK_IY1oiU3FRg6B"></iframe>
</div>

 If the tray is contaminated with particles from a previous sample, remove them before starting the sequence. The tray can be removed to be cleaned separately, and debris tends to get trapped between the tray and the slab that it sits on. Once the tray is clean use the ¼ tsp measure next to the machine to load your sample into the slot. Keep your sample behind the the marker at the front, so that a background test can be run before the sample is processed. Next, click Auto-Sequence in the top left. You will be prompted to title your sample and add a note. When the test is finished, name your file and save it. 

