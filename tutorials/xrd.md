---
layout: default
---
# Breakerspace XRD Tutorial

## Overview:

Use our [Panalytical Aeris Research XRD](https://www.malvernpanalytical.com/en/products/product-range/aeris-range) ([X-ray diffractometer](https://www.malvernpanalytical.com/en/products/technology/xray-analysis/x-ray-diffraction)) to analyze properties such as phase composition, crystal structure, and orientation of solid samples, with precise results in less than five minutes.

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

* Make sure at least [one position in the sample changer is free](../assets/img/tutorials/xrd/sample-changer.JPG) (no sample holder in place)
* Turn the mains power switch at the rear of the instrument
* Make sure that the cover is closed
* [Press the power button to switch on the instrument](../assets/img/tutorials/xrd/power-button.JPG)
* Turn the [HT keyswitch](../assets/img/tutorials/xrd/keyswitch.JPG) to switch on the HT generator


<a name="operation"></a>
#### Operation: 

* Prepare your sample externally at the sample prep table
* Put the sample holder in a loading position on the sample changer
* Select a measurement program from the drop-down list
* Put in a descriptive sample name
* Start the measurement
* Export results to networked workstation or USB drive
* Fill out your information in the X-ray safety log book
* Repeat as needed - additional samples can be loaded and added to the queue while current sample is being measured

<a name="shutdown"></a>
####  Instrument shut down:

* Press the Power button to switch off the instrument
* Turn the HT Keyswitch counter-clockwise to switch off the HT generator
* If the instrument will be switched off for a long period of time, you can also switch off the mains power supply

<a name="materials"></a> 
### Compatible materials and sample prep: 

The Aeris has a Cu _Kα_ x-ray generator with penetration on the order of 100 µm. For powder samples, grain size should be on the order of 5-10 µm to ensure sufficient grains of various compounds contribute to the reflection of the beam. This source will cause fluorescence in samples with iron and manganese, and may not provide suitable results for samples with those elements.

Panalytical provides an excellent sample preparation guide, available in paper form in the lab and [here in pdf form](https://www.dropbox.com/scl/fi/17o43bqhe52u49kkecvrf/xrd-sample-holders-preparation.pdf?rlkey=vxi65kwyeqrcr62jbcxa5rqvq&dl=0), please refer to it for instructions on use of the different types of sample holders and associated sample prep techniques.

Page 1.4 lists all the various types of sample holders that can be obtained. Of those, we have:

* PW1811/00 and PW1811/27 for back or front loading of powders
* PW1812/00 for odd shapes (fixed with plasticine or wax)
* PW1813/26 for metal plates, membrane filters, pressed pellets, etc.

XRD sample holders are stored in a drawer at the sample prep table. The adjacent cabinet has small supplies you may need, such as spatulas. Perform all sample loading steps at the table and transfer sample holders to the instrument on the tray once complete.

<a name="details"></a> 
### Detailed operating instructions: 

#### Sample Loading:

* Remove plastic sample changer cover
* Place a prepared sample in any of the six positions on the sample changer
* Replace plastic sample changer cover

__*GIF of sample loading*__

#### Running a measurement program:

__*GIF of selecting and running a program*__

#### Exporting data:

__*GIF of data export*__

Data can be saved on a [USB drive](../assets/img/tutorials/xrd/usb.JPG), or exported to a shared network drive on the XRD workstation to the right of the instrument. The workstation can be accessed using a common login. The user name is XRD __double check!__ and the password is xrd-password. Data can be found in the folder C:\ __*fill in folder path*__

__*Screenshot of folder showing path*__

#### New measurement programs:

New measurement programs can be created using the software _XRDMP Creator_ on the workstation that supports the XRD, though programs stored on the instrument should cover most basic analysis needs. Documentation on the use of _XRDMP Creator_ is available in the _XRDMP Creator Help_ menu. If you need to create new programs and need assistance, please contact Breakerspace staff.

#### Advanced mode:

Advanced mode is used to change optical components, manage data (including importing programs, and deleting programs and results), and other advanced configuration tools. Lab users typically will not need to access advanced mode, and instruction of its use is beyond the scope of this tutorial.

#### Hardware configuration:

The incident beam path includes a fixed divergence slit, beta-filter, soller slits, and a beam mask. The diffracted beam path includes large soller slits and a large beta-filter. The typical configuration is:

* Divergence slit - 
* Beta-filter - 
* Soller slits - 
* Beam Mask - 
* Large soller slits - 
* Large beta-filter - 

Our instrument has a [PIXcel<sup>3D</sup>](https://www.malvernpanalytical.com/en/products/category/x-ray-components/detectors/pixcel3d), which can provide scanning or static area detection in 2D mode, and scannning or static line detection in 1D mode. 

<a name="data"></a>
### Data processing and analysis:

* Data from the Aeris can be processed using [HighScore Plus 5.0](https://www.malvernpanalytical.com/en/products/category/software/x-ray-diffraction-software/highscore-with-plus-option) or newer
* To get started, please see the [HighScore Plus Quickstart Guide](https://www.dropbox.com/scl/fi/0vaijznxsfaa05xfqwxd2/highscore_plus_quickstart_guide.pdf?rlkey=kx900yxwi5dtxug5ng1do8tyv&dl=0)

<a name="failures"></a>
### Common failure modes:

* Booting the instrument with all sample changer positions occupied will result in a somewhat [opaquely worded error](../assets/img/tutorials/xrd/sample-changer-full.JPG)

<a name="manuals"></a>
### Manufacturer's manuals:

* [Aeris quick start guide](https://www.dropbox.com/scl/fi/gqd44xvmv9q5660bk5gs4/aeris_quickstart_guide.pdf?rlkey=zj5qv5ajbxf80865fnh939r5g&dl=0)
* [Aeris user guide](https://www.dropbox.com/s/sw476m00qq3c7jr/aeris_user_guide.pdf?dl=0)
* [Highscore Plus quickstart guide](https://www.dropbox.com/scl/fi/0vaijznxsfaa05xfqwxd2/highscore_plus_quickstart_guide.pdf?rlkey=kx900yxwi5dtxug5ng1do8tyv&dl=0)
* [Sample holders and sample prep guide](https://www.dropbox.com/scl/fi/17o43bqhe52u49kkecvrf/xrd-sample-holders-preparation.pdf?rlkey=vxi65kwyeqrcr62jbcxa5rqvq&dl=0)
* [XRD for the analyst](https://www.dropbox.com/scl/fi/0e8vioulematgbd1yluzb/x-ray_powder_diffraction.pdf?rlkey=eae3hs1ispi1fi7vruh8oq9az&dl=0)

<a name="links"></a>
### Links:

* [Panalytical XRD YouTube playlist](https://www.youtube.com/watch?v=YujXF6NKORM&list=PL2wIBTZfZRjdxVJYhan7PHbz_hyStiGgH)
* [Panalytical Aeris videos](https://www.youtube.com/@MalvernPanalytical/search?query=aeris)

<a name="exercises"></a>
### Exercises:

* coming soon



<figure style="margin-left:0; margin-right:0;">
	<img src="../assets/img/tutorials/xrd/Queue.gif" alt="Adding a sample to the queue" style="width:33%; margin:0"> 
	<img src="../assets/img/tutorials/xrd/Export.gif" alt="Copying results to desktop folder" style="width:33%; margin:0">
</figure>
