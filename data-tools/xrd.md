---
layout: default
title: Explore an XRD Pattern
permalink: /data-tools/xrd.html
data_tool_workspace: true
---

<p class="data-tool-breadcrumb"><a href="{{ "/data-tools/" | relative_url }}">&larr; All data exploration tools</a></p>

# Explore an XRD Pattern

<p class="data-tools-status"><strong>Prototype for review:</strong> Do not use this version as the sole basis for research conclusions.</p>

This workspace is an education-first introduction to viewing and processing X-ray diffraction patterns. It can help you recognize peaks and backgrounds, compare related scans, and see how common processing choices change a pattern.

<div class="data-tool-device-note">
  <strong>Laptop or desktop computer recommended</strong>
  <p>The workspace is designed for a larger screen and works best with a keyboard and mouse or trackpad. Phones and tablets are not currently supported. The explanatory material remains available at narrow widths and high browser zoom.</p>
</div>

<div class="data-tool-summary">
  <div><strong>Accepted files</strong><span><code>.xrdml</code> and <code>.csv</code></span></div>
  <div><strong>Data handling</strong><span>Selected files are read and processed in this browser tab; this prototype does not upload them to Breakerspace.</span></div>
  <div><strong>Source version</strong><span>ScienceScripts XRD <code>v2026.06.26.2</code>, imported from commit <code>4992fc9</code></span></div>
</div>

## A useful first exploration

1. Open an unprocessed pattern and identify its strongest peaks, broad background, and any noisy regions.
2. Crop to a region that contains several peaks.
3. Try smoothing once and compare the result with the original shape.
4. Try background subtraction and look for peaks that became clearer—or features that may have been distorted.
5. Add approximate peak centers using either the plot or the numeric peak-entry control, then inspect the fitted centers and widths.
6. Export the plotted data only after documenting what you changed.

If you do not have a file handy, [download the small practice CSV]({{ "/assets/tools/examples/xrd-exercise-a.csv" | relative_url }}), then select it in the workspace. It contains a deliberately simple five-point pattern for testing the interface rather than realistic scientific interpretation.

<p class="guidance-note"><strong>Interpret carefully:</strong> A fitted peak is a mathematical description, not a phase identification. Background subtraction, smoothing, sample displacement, preferred orientation, overlapping phases, and the selected peak model can all change the apparent result. Use the <a href="{{ "/instruments/xrd.html#data" | relative_url }}">XRD data guidance</a> and consult staff for quantitative or research-critical analysis.</p>

<div class="data-tool-launch-row">
  <a class="data-tool-primary-link" href="{{ "/assets/tools/sciencescripts/xrd/" | relative_url }}" target="_blank" rel="noopener">Open the XRD workspace in a new window <span aria-hidden="true">&nearr;</span></a>
  <a href="https://github.com/feranick/ScienceScripts/tree/main/src/XRD/plotter">View source and project documentation</a>
</div>

## Interactive workspace

<p>The embedded workspace below is the same application as the new-window version. If the available area feels constrained, use the new-window link above.</p>

<div class="data-tool-frame-wrap">
  <iframe
    class="data-tool-frame"
    src="{{ "/assets/tools/sciencescripts/xrd/" | relative_url }}"
    title="XRD pattern exploration workspace"
    loading="lazy"
    sandbox="allow-scripts allow-downloads"
  ></iframe>
</div>

## Scope and help

This prototype is intended for exploration, teaching, and preliminary review. It does not replace HighScore Plus, GSAS-II, Profex/BGMN, a validated reference database, or expert review. If this interface prevents you from completing your work, contact [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) for assistance or an alternative workflow.

The application is distributed under the [GNU General Public License version 3](https://github.com/feranick/ScienceScripts/blob/main/LICENSE.txt). See the local [accessibility and integration notes]({{ "/assets/tools/sciencescripts/ACCESSIBILITY-README.md" | relative_url }}) for changes made in this prototype.
