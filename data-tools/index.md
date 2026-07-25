---
layout: default
title: Data Exploration Tools
permalink: /data-tools/
---

# Data Exploration Tools

Use these browser-based workspaces to look closely at characterization data, try common processing steps, and learn how those choices affect what you see. Each tool opens on the MIT-hosted Carbonio server in a new browser tab.

<div class="data-tool-device-note">
  <strong>Laptop or desktop computer recommended</strong>
  <p>These interactive workspaces are designed for a larger screen and work best with a keyboard and mouse or trackpad. You will need to select data files stored on your device. Each tool loads a reference library; the Raman and XRD libraries are especially large, so allow extra time on a slower connection.</p>
</div>

## Choose a tool

<div class="data-tool-grid">
  <article class="data-tool-card">
    <p class="data-tool-technique">Infrared spectroscopy</p>
    <h2><a href="https://carbonio.mit.edu/tools/ftir-plotter/" target="_blank" rel="noopener" aria-label="Explore an FTIR spectrum on Carbonio (opens in a new tab)">Explore an FTIR spectrum</a></h2>
    <p>Open and compare spectra, try common processing steps, explore introductory band fitting, and compare marked bands with reference spectra.</p>
    <dl class="data-tool-facts">
      <div><dt>Input</dt><dd><code>.jdx</code>, <code>.dx</code>, <code>.csv</code>, and common text formats</dd></div>
      <div><dt>Processing</dt><dd>In your browser</dd></div>
      <div><dt>Host</dt><dd><code>carbonio.mit.edu</code></dd></div>
    </dl>
    <a class="data-tool-primary-link" href="https://carbonio.mit.edu/tools/ftir-plotter/" target="_blank" rel="noopener">Open the FTIR tool on Carbonio (new tab) <span aria-hidden="true">&nearr;</span></a>
  </article>

  <article class="data-tool-card">
    <p class="data-tool-technique">Raman spectroscopy</p>
    <h2><a href="https://carbonio.mit.edu/tools/raman-plotter/" target="_blank" rel="noopener" aria-label="Explore a Raman spectrum on Carbonio (opens in a new tab)">Explore a Raman spectrum</a></h2>
    <p>Open and compare spectra, try baseline correction and smoothing, explore introductory band fitting, and compare marked bands with reference spectra.</p>
    <dl class="data-tool-facts">
      <div><dt>Input</dt><dd><code>.h5</code>, <code>.hdf5</code>, <code>.xml</code>, and two-column text</dd></div>
      <div><dt>Processing</dt><dd>In your browser</dd></div>
      <div><dt>Host</dt><dd><code>carbonio.mit.edu</code></dd></div>
    </dl>
    <a class="data-tool-primary-link" href="https://carbonio.mit.edu/tools/raman-plotter/" target="_blank" rel="noopener">Open the Raman tool on Carbonio (new tab) <span aria-hidden="true">&nearr;</span></a>
  </article>

  <article class="data-tool-card">
    <p class="data-tool-technique">X-ray diffraction</p>
    <h2><a href="https://carbonio.mit.edu/tools/xrd-plotter/" target="_blank" rel="noopener" aria-label="Explore an XRD pattern on Carbonio (opens in a new tab)">Explore an XRD pattern</a></h2>
    <p>Open one or more diffraction patterns, crop and compare scans, explore background subtraction and smoothing, and perform introductory peak fitting.</p>
    <dl class="data-tool-facts">
      <div><dt>Input</dt><dd><code>.xrdml</code> and <code>.csv</code></dd></div>
      <div><dt>Processing</dt><dd>In your browser</dd></div>
      <div><dt>Host</dt><dd><code>carbonio.mit.edu</code></dd></div>
    </dl>
    <a class="data-tool-primary-link" href="https://carbonio.mit.edu/tools/xrd-plotter/" target="_blank" rel="noopener">Open the XRD tool on Carbonio (new tab) <span aria-hidden="true">&nearr;</span></a>
  </article>
</div>

## How to use these tools

1. Start with an example or a familiar dataset whose important features you already understand.
2. Make one processing change at a time.
3. Compare the processed result with the original rather than replacing it.
4. Record the settings and sequence you used.
5. Treat automated fitting or reference matching as evidence to evaluate, not a final identification.

<p class="guidance-note"><strong>Interpret carefully:</strong> These tools are intended for teaching, exploration, and preliminary review. They do not replace validated research workflows, complete reference databases, advanced quantitative-analysis software, or expert review.</p>

## Hosting and maintenance

The analysis applications and their associated reference libraries are hosted on `carbonio.mit.edu` and maintained separately from the Breakerspace website. Features, availability, reference-library content, and application updates are therefore outside the maintenance scope of this site.

The applications are developed in the open-source [ScienceScripts project](https://github.com/feranick/ScienceScripts) by Feranick. Breakerspace provides these links as a convenient starting point for learning and exploratory analysis.

Questions about Breakerspace teaching materials or accessibility barriers on this page can be sent to [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu).
