---
layout: default
---
# Instron 68TM-50 Universal Testing System

## Overview:

The Breakerspace's Instron is equipped with 50 kN and 5 kN load cells, with fixtures for tensile, compression, and flexure testing. 

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

* Log on to the instrument workstation using your MIT Kerberos.
* Open the Bluehill Universal software.
* If the event log opens up, you can click close. 

<a name="operation"></a>
#### Operation: 

* Set up your mechanical test set up. See the [detailed operation instructions](#details) for how to set up different types of samples.
* Ensure the correct load cell connector (5 kN or 50 kN) is inserted. 
* On the [home screen](../assets/img/tutorials/instron/test_method_admin.PNG), click Method. Here you can create your own method by choosing a template or look at pre-existing methods.
* Return to the [home screen](../assets/img/tutorials/instron/test_method_admin.PNG) by clicking the house icon in the top left.
* Click Test. From here, you can run a basic "QuickTest" or choose from any method.
* When prompted, set travel limits to prevent the head and attached fixtures from colliding into anything.
* Once on the testing page, press unlock then go on the [hand controller](../assets/img/tutorials/instron/ANNOTATED_hand_controller_in_set_up.JPG) to start testing.
* The test will end once sample snaps. To stop the test before that, you can press stop on the [hand controller](../assets/img/tutorials/instron/ANNOTATED_hand_controller_in_set_up.JPG) or push the red emergency [stop button](../assets/img/tutorials/instron/ANNOTATED_emergency_indicator.JPG).

<a name="shutdown"></a>
####  Instrument shut down:

* Save your data.
* Disassemble your testing set up. Return all parts to the boxes they came from.
* Wipe up any debris.
* Close the Bluehill Universal software and log off the computer.
* Ensure the Instron is in disabled mode.

<a name="materials"></a> 
### Compatible materials and sample prep: 

* Avoid samples which may shatter dangerously, i.e. glass.
* Avoid wet samples or anything that would get the machine too dirty.
* Some samples may need cutting to fit into the machine grips. The Breakerspace has scissors, razor blades, and a sectioning saw available.
* It may be good to google if there is an ASTM standard for your specific test. 

<a name="details"></a> 
### Detailed operating instructions: 
The Instron can do tensile, compressive, and flexure testing. Each test needs different grips. 
* To start all set ups, you need to choose your load cell, 50 kN or 5 kN for smaller, weaker samples.
	* The 50 kN cell always stays attached to the machine.
	* To install the 5 kN cell, insert the thin end of the 5 kN cell into the bottom of the 50 kN cell. Insert a clevis pin through the two, then attach a safety clip.
  	* Rotate the metal ring to the right until tight. 
  	* If using the 5 kN cell, it is crucial to plug the 5 kN load cell connector in the [right place](../assets/img/tutorials/instron/ANNOTATED_connection_port_instron.JPG).
* All parts will be attached in a simular fashion. Align the internal holes and insert a clevis pin. Then add a safety clip and rotate the metal ring to secure.
	* Use a [spanner wrench](../assets/img/tutorials/instron/spanner_wrench.jpeg) to tighten the metal rings if necessary.

#### Set-up diagrams for tensile, compressive, and flexure testing
* Tensile testing with mini wedge grips (max load: 1 kN) [diagram](../assets/img/tutorials/instron/FIXED_1kN_set_up.jpg)
* Tensile testing with screw action grips (max load: 5 kN) [diagram](../assets/img/tutorials/instron/ANNOTATED_screw_action_grips.JPG)
* Tensile testing with wedge grips (max:load 50 kN) [diagram](../assets/img/tutorials/instron/ANNOTATED_instron_sop_50_kN_wrench_set_up.JPG)
	* Anatomy of the 50 kN wedge grip [diagram](../assets/img/tutorials/instron/ANNOTATED_50_kN_wrench_grip.JPG)
* Compressive testing with 50 kN head [diagram](../assets/img/tutorials/instron/ANNOTATED_instron_sop_compression_set_up.JPG)
* Flexure testing with 5 kN head [diagram](../assets/img/tutorials/instron/ANNOTATED_instron_sop_flexure_set_up.JPG)
 
#### Video extensometer
* Click the [on](../assets/img/tutorials/instron/ANNOTATED_video_extensometer.JPG) button.
* Draw dots on your sample a set amount apart using a [guide and paint markers](../assets/img/tutorials/instron/ANNOTATED_drawing_dots.JPG).
* Load your sample.
* Look at [this diagram](../assets/img/tutorials/instron/ANNOTATED_extensometer_software.png). Click 1, then 2. Then in field 3, click and hold an area that includes your drawn dots. The dots should be detected automatically. Click close and proceed with your test. 

<a name="data"></a>
### Data processing and analysis:

* By default the software will output a force versus displacement graph.
* When creating a method you can input your sample dimensions and ask the software to automatically calculate a lot of properties for you.

<a name="failures"></a>
### Common failure modes:

* Unless the red light of the video extensometer appears, the video extensometer is not on. Try pressing the [on](../assets/img/tutorials/instron/ANNOTATED_video_extensometer.JPG) button again.  
* Plugging in the load cell connector is difficult and may take multiple tries. One common mistake is forgetting to to push in the [side clips](../assets/img/tutorials/instron/ANNOTATED_load_cell_connector.JPG) when inserting it. 
* If the program won't let you start a test, or if the buttons on the hand controller won't respond to you:
	* If the light next to disabled on the [indicator panel](../assets/img/tutorials/instron/ANNOTATED_emergency_indicator.JPG) is blinking, hold down the red emergency button and turn clockwise about 15 degrees or until it pops up.
	* If disabled is lit up, but not blinking, try pressing [unlock](../assets/img/tutorials/instron/ANNOTATED_hand_controller_when_disabled.JPG) on the hand controller. This will get the machine out of disabled mode and into set up mode.
* If your force-displacement curve looks wrong, make sure that all attachments are on tightly. To check, try giving your set-up a gentle shake. It should not move at all.
* If your sample keeps breaking right at the grip face, you may need to loosen the grips a little bit, or try a different grip type.


<a name="manuals"></a>
### Manufacturer's manuals:

* [Video extensometer operator guide](https://www.dropbox.com/scl/fi/rgb05cbfo30mf80uwskek/video-extensometer-ave2-2663-901-and-sve2-2663-902-operator-guide.pdf?rlkey=qfhgbcfwtsl57fdbellgg206w&st=h7hcnio8&dl=0)
* [6800 Dual Column Table Model operator guide](https://www.dropbox.com/scl/fi/jppq0ifw1ricmdghsguca/6800-Dual-Column-Table-Model-Operator-Guide.pdf?rlkey=n7sm0h9v6vqqvu9ppnk0oessj&st=7ztz947o&dl=0)
* [Miniature grips for low force testing operators guide](https://www.dropbox.com/scl/fi/zprr8ua5ma26lzqb31czo/2711-006-miniature-grips-for-low-force-testing-operators-guide.pdf?rlkey=a26sizgotrx3beaa1iujvgp0r&st=njxjs6bs&dl=0)
* [Screw action grips reference manual](https://www.dropbox.com/scl/fi/nf5pnttlapjawi8cm94ms/2710-11x-screw-action-grips-reference-manual.pdf?rlkey=7q1aeazj97xoshgy7n29297ed&st=ozgbhy08&dl=0)
* [5 kN flexure fixture reference manual](https://www.dropbox.com/scl/fi/59aeqcu8o9b7isv7gu93a/5kn-flexure-fixture-reference-manual.pdf?rlkey=f4wtjfybmg86kruq1hcp32nms&st=1u3dpdjr&dl=0)
* [5 kN, 10 kN, and 50 kN wedge grips reference manual](https://www.dropbox.com/scl/fi/3iaxhdxfo8pwxtj8t7m2i/5kn-10knand50kn-wedge-grips-reference-manual.pdf?rlkey=rjm1t839hzfv8yzly7mihjh2n&st=m76u4b4n&dl=0)

<a name="links"></a>
### Links:
* [Instron FAQ](https://www.instron.com/en/service-and-support/technical-support/faqs)

<a name="exercises"></a>
### Exercises:

* Beginner: Set up a 50 kN tensile testing set up, load a sample, and run it. You should see the sample's force-displacement curve appear.
* Advanced: Use the video extensometer to measure strain. 
