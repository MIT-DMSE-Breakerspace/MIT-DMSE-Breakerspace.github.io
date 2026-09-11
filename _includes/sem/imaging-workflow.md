{% assign sem_view_label = include.view_label | default: "SEM" %}
{% assign sem_navcam_image = include.navcam_image | default: "../assets/img/tutorials/sem/navcam.PNG" %}

#### Project Label And Save Location {#customize}

While the sample is loading, open Settings / Customize and set a useful image label and save location. Do this before you start collecting images so your files land in a project folder that will still make sense later.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/sem/customize.PNG" target="_parent"><img src="../assets/img/tutorials/sem/customize.PNG" alt="Phenom customize settings." style="width:70%; margin:0"></a>
  <figcaption>Use the Customize settings to set project labels and save locations before acquisition.</figcaption>
</figure>

#### NavCam {#navcam}

When the sample finishes loading, the software shows the NavCam view. This is an optical overview of the sample stage that helps you choose regions of interest before switching to SEM imaging.

Use this moment to:

* Confirm that the expected sample or stub is visible.
* Check that the sample did not shift during loading.
{% if include.navcam_controls_verified %}
* Use the **magnification**, **brightness/contrast**, and **focus** controls as needed for navigation.
{% else %}
* Adjust NavCam brightness, contrast, and focus if you will use it for navigation.
{% endif %}
* Save a NavCam image if it will help document where later SEM images were taken.

<figure style="margin-left:0; margin-right:0;">
  <a href="{{ sem_navcam_image }}" target="_parent"><img src="{{ sem_navcam_image }}" alt="Phenom NavCam view." style="width:80%; margin:0"></a>
  <figcaption>NavCam is the optical overview used to select a region before moving to SEM view.</figcaption>
</figure>

#### {{ sem_view_label }} View {#sem-view}

{% if include.move_to_sem_icon_verified %}
Select the upper-left icon immediately below the eject/open-close icon. It shows two circles with plus signs and an arrow between them; its mouse-over label is **move to SEM**. This enters the {{ sem_view_label }} view. Start zoomed out, find a recognizable feature, focus, then increase magnification gradually.
{% else %}
Click **Move to SEM** to enter the live SEM view. Start zoomed out, find a recognizable feature, focus, then increase magnification gradually.
{% endif %}

Useful controls:

* Mouse wheel changes the selected control, usually magnification, focus, brightness, or contrast.
* Right-click and drag horizontally on the live image to adjust focus quickly.
* Use auto brightness/contrast as a starting point, then adjust manually if the image looks washed out or too dark.
* Use autofocus only when there is enough contrast near the center of the image.
* At higher magnification, refocus after changing magnification, voltage, detector, vacuum mode, or working distance.
* Press F11 to leave fullscreen mode if you need access to the Windows taskbar.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/sem/FocBri.PNG" target="_parent"><img src="../assets/img/tutorials/sem/FocBri.PNG" alt="Phenom focus and brightness controls." style="width:70%; margin:0"></a>
  <figcaption>Focus, brightness, and contrast controls are the main adjustments in {{ sem_view_label }} view.</figcaption>
</figure>

##### Choosing Detector, Voltage, Vacuum, And Intensity

| Setting | Use it when | Practical note |
| --- | --- | --- |
| SED | You want surface/topographic detail | Usually best for conductive, high-vacuum samples. |
| BSD | You want composition/atomic-number contrast or low-vacuum imaging | Heavy elements appear brighter than light elements. |
| 5 kV | You care about surface-sensitive features or beam-sensitive samples | Lower signal, but less penetration and often less damage. |
| 10 kV | You want a general imaging starting point | Good default for many samples. |
| 15 kV | You need stronger signal or more beam penetration | More beam interaction and more chance of beam damage. |
| Low intensity | High magnification or beam-sensitive samples | Slower/noisier, but gentler. |
| Image intensity | General imaging | Good default for most SEM images. |
| Point intensity | Lower magnification spot work | Useful when signal is low and fine resolution is less critical. |

Try more than one appropriate combination to see what best reveals the feature of interest. For beam-sensitive samples, begin with lower accelerating voltage and beam intensity and increase them only as needed; higher settings can damage or change the sample.

For general live navigation, use a **Scan Size of 960 × 540** with **Medium Averaging**. Change those live-view settings only when the sample or imaging task benefits from a different balance of speed, noise, and detail.

#### Image Acquisition And Gallery {#acquisition}

{% if include.scan_size_label_verified %}
Press the camera icon to acquire an image. Images are saved with the **Scan Size** (image resolution) and **Averaging** selected in the acquisition settings. Start with the default settings, take a test image, then increase Scan Size or Averaging only if the sample is stable.
{% else %}
Press the camera icon to acquire an image. Images are saved with the resolution and averaging set in the acquisition settings. Start with the default settings, take a test image, then increase resolution or averaging only if the sample is stable.
{% endif %}

Higher averaging improves signal-to-noise but takes longer. If the sample is charging, drifting, vibrating, or degrading, longer acquisition can make the final image worse.

The Gallery shows images in the active folder. You can add measurements and notes in the gallery. If you annotate an image, save the annotated version as a new file so the original remains unchanged.
