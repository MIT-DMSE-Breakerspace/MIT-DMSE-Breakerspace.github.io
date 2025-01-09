---
layout: default
---
# Microtrac Sync Particle Size Analyser Tutorial

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

<a name="shutdown"></a> 
#### Instrument shut down:

* Export data as needed
* Close the FLEX software
* Log off Windows workstation
* Instrument may be left powered on

#### Detailed operating instructions:

After opening the Microtrak Flex software, click Sync Analyzer in the open analyzer tab on the left side of the screen.

<figure>
	<a href="../assets/img/tutorials/psa/SyncAnalayzer.png" target="_parent"><img src="../assets/img/tutorials/psa/SyncAnalayzer.png"  alt="Click Sync Analyzer"></a>
</figure>

Then, in the SOP menu select Measurement SOP. In the Select Saved SOP dropdown choose the SOP that suits your sample, and close the pop-up window.

<figure>
	<a href="../assets/img/tutorials/psa/MeasurementSOP.png" target="_parent"><img src="../assets/img/tutorials/psa/MeasurementSOP.png"  alt="Click Sync Analyzer"></a>
</figure>

 If the tray is contaminated with particles from a previous sample, remove them before starting the sequence. The tray can be removed to be cleaned separately, and debris tends to get trapped between the tray and the slab that it sits on. Once the tray is clean use the ¼ tsp measure next to the machine to load your sample into the slot. Keep your sample behind the the marker at the front, so that a background test can be run before the sample is processed. Next, click Auto-Sequence in the top left. You will be prompted to title your sample and add a note. When the test is finished, name your file and save it. 

<figure>
	<a href="../assets/img/tutorials/psa/AutoSequence.png" target="_parent"><img src="../assets/img/tutorials/psa/AutoSequence.png"  alt="Click Sync Analyzer"></a>
</figure>

