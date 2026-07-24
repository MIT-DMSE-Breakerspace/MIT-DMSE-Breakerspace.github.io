---
layout: default
title: Explore a Raman Spectrum
permalink: /data-tools/raman.html
data_tool_workspace: true
---

<p class="data-tool-breadcrumb"><a href="{{ "/data-tools/" | relative_url }}">&larr; All data exploration tools</a></p>

# Explore a Raman Spectrum

<p class="data-tools-status"><strong>Prototype for review:</strong> Do not use this version as the sole basis for research conclusions.</p>

This workspace is an education-first introduction to viewing and processing Raman spectra. It can help you compare spectra, distinguish bands from baseline and noise, and examine how common processing choices affect interpretation.

<div class="data-tool-device-note">
  <strong>Laptop or desktop computer recommended</strong>
  <p>The workspace is designed for a larger screen and works best with a keyboard and mouse or trackpad. Phones and tablets are not currently supported. The explanatory material remains available at narrow widths and high browser zoom.</p>
</div>

<div class="data-tool-summary">
  <div><strong>Accepted files</strong><span><code>.h5</code>, <code>.hdf5</code>, <code>.xml</code>, <code>.txt</code>, <code>.csv</code>, <code>.dat</code>, and <code>.asc</code></span></div>
  <div><strong>Data handling</strong><span>Selected files are read and processed in this browser tab. Optional RRUFF searches contact <code>rruff.info</code>.</span></div>
  <div><strong>Source version</strong><span>ScienceScripts Raman <code>raman-v2026.07.22.1</code>, imported from commit <code>4992fc9</code></span></div>
</div>

## A useful first exploration

1. Open an unprocessed spectrum and identify its strongest bands, baseline shape, noisy regions, and any obvious fluorescence.
2. Crop to a region containing several bands of interest.
3. Apply smoothing once and compare the result with the unprocessed spectrum.
4. Try baseline subtraction and check whether broad or weak features were changed unintentionally.
5. Add approximate band centers using either the plot or the numeric peak-entry control, then inspect the fitted centers and widths.
6. If you use a RRUFF reference, compare several features rather than relying on a single matching band.

A reviewed Raman teaching dataset has not yet been bundled with this prototype. Selecting that example—and documenting its expected observations—should be part of the joint review with the ScienceScripts maintainer.

<p class="guidance-note"><strong>Interpret carefully:</strong> Raman band positions and intensities can change with focus, laser wavelength and power, orientation, fluorescence, mixtures, and processing choices. A reference overlay or mathematical fit is supporting evidence rather than a definitive identification. Use the <a href="{{ "/instruments/raman.html#data" | relative_url }}">Raman data guidance</a> and consult staff for research-critical conclusions.</p>

<div class="data-tool-launch-row">
  <a class="data-tool-primary-link" href="{{ "/assets/tools/sciencescripts/raman/" | relative_url }}" target="_blank" rel="noopener">Open the Raman workspace in a new window <span aria-hidden="true">&nearr;</span></a>
  <a href="https://github.com/feranick/ScienceScripts/tree/main/src/Raman">View source and project documentation</a>
</div>

## Interactive workspace

<p>The embedded workspace below is the same application as the new-window version. If the available area feels constrained, use the new-window link above.</p>

<div class="data-tool-frame-wrap">
  <iframe
    class="data-tool-frame"
    src="{{ "/assets/tools/sciencescripts/raman/" | relative_url }}"
    title="Raman spectrum exploration workspace"
    loading="lazy"
    sandbox="allow-scripts allow-downloads"
  ></iframe>
</div>

## Scope and help

This prototype is intended for exploration, teaching, and preliminary review. It does not replace LabSpec, a validated reference library, advanced chemometric analysis, or expert review. If this interface prevents you from completing your work, contact [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) for assistance or an alternative workflow.

The application is distributed under the [GNU General Public License version 3](https://github.com/feranick/ScienceScripts/blob/main/LICENSE.txt). See the local [accessibility and integration notes]({{ "/assets/tools/sciencescripts/ACCESSIBILITY-README.md" | relative_url }}) for changes made in this prototype.
