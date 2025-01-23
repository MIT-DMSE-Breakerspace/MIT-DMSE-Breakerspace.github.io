---
layout: default
---
# Microtrac Sync Particle Size Analyzer Tutorial

## Overview

This instrument gives particle size distribution data for dry powder samples with particles between 0.24 and 2,000 microns using laser diffraction.

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
* Load sample, 1/4 tsp for shallow sample tray
* Run Auto-Sequence
* Repeat as needed

<a name="shutdown"></a> 
#### Instrument shut down:

* Export data as needed
* Close the FLEX software
* Log off Windows workstation
* Instrument may be left powered on

<a name="materials"></a> 
### Compatible materials and sample prep: 

* Any non-hazardous, dry powders with particles between 0.24 and 2,000 microns

<a name="details"></a>
### Detailed operating instructions:

The sequence of steps to run a measurement is very straightforward: start the software, connect to the instrument, let it initialize, verify you are saving into the correct database, load a measurement SOP, clean the sample tray if needed and load a sample, run the auto-sequence, save your data, and close the software. In the instructions and videos below the steps to prepare the instrument (cleaning, sample loading, sample collection) are show independent of where they occur in the timeline of operating the instrument in software. Please refer to the SOP section, above, for the chronological sequence of the entire operation (instrument initialization, sample loading, collection, finishing).

#### Cleaning the sample area:

Loose particles in the sample area from previous samples can be pulled in to the instrument and skew your result. If there are particles to clean, lightly wet a Kimwipe with isopropanol and use it to wipe up loose particles. If needed, the sample tray and sample tray carrier can be removed for more careful cleaning. This video shows the cleaning process:

<div class="container-video">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/CEDb8fk9C0I?si=O2J6BDKxPWnC9m0C"></iframe>
</div>

#### Loading a sample:

* The instrument includes a shallow and deep sample tray. Typically, the shallow sample tray is used. If you think you may need to use the deeper tray, please talk with lab staff 
* The shallow sample tray is loaded with 1/4 tsp of dry powder (it is recommended you clean the measuring spoon with a Kimwipe wetted with isopropanol before and after loading your sample), without worrying too much if the quantity is slightly more or less than 1/4 tsp
* Keep your sample behind the line on the sample tray as much as is practical, without worrying if any falls in front of the line
* Distribute your sample as evenly as is practical along the length of the sample tray, again without worrying too much if it's not perfectly uniform. Your biggest concern should be to not compress your sample, which risks creating clumps that may be measured as single larger particles
* Once the sample is loaded, the sample compartment door must be closed before the sample can be analyzed

This video shows a typical sample loading process:

<div class="container-video">
  <iframe class="responsive-iframe" src="https://youtu.be/IbPc-y7S9tU"></iframe>
</div>

#### Full sequence of software operation:

Since the organization of the software can be confusing, this screen capture video shows the full sequence of steps needed to start the softare, initialize the instrument, and collect and export data. Don't forget, of course, to load your sample after selecting your measurement SOP and before starting the 'auto-sequence.'

<div class="container-video43">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/TvgfB1BDVO4?si=zmK_IY1oiU3FRg6B"></iframe>
</div>

#### Sample collection:

After your sample is loaded and the sample tray door is closed, and you run the auto-sequence (editing title, sample ID, and notes as appropriate), the auto-sequence will begin. The shop vacuum under the instrument will come on and run for several seconds. This is to make sure any loose particles are pulled into the instrument and cleared from the analysis chamber before the setzero is run. Next, the setzero will run. Setzero is the process that the instrument uses to determine the background signal when the instrument is collecting data but no sample is being fed into it. Once the setzero process is completed, the sample tray will begin to move under the sample collection nozzle, and the sample will be pulled in to the instrument. After the sample is pulled through the analysis chamber it is collected in the shop vacuum below the instrument, with two implications: 1. there is little to no cleanup that you will need to do, and 2. there is no way to recover the powder that you analyze.

This video shows the full sample collection process:

<div class="container-video">
  <iframe class="responsive-iframe" src="https://youtu.be/Mt9QangPK5A"></iframe>
</div>

<a name="data"></a>
### Data processing and analysis:

Data is automatically saved in the database that is active at the time the auto-sequence is started, so it will not be lost (short of a hardware failure in the workstation) and you can review it and export it at any time. The software also prompts you to automatically save the report that is generated after the sample is collected. The distribution shown in the report can be recalculated to show a distribution based on particle diameter, particle volume, or number of particles of a given size-range. The data produced by this instrument is fairly straightforward, but please ask lab staff if you have questions about data processing and analysis.

<a name="failures"></a>
### Common failure modes:

* Sample door open when connecting/initializing or running a sample will result in an error

<a name="manuals"></a>
### Manufacturer's manuals:

* Links to manual files in dropbox

<a name="links"></a>
### Links:

* [Microtrac Sync video library](https://www.microtrac.com/downloads/videos/)

<a name="exercises"></a>
### Exercises:
 