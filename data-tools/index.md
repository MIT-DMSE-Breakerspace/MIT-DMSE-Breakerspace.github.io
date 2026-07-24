---
layout: default
title: Data Exploration Tools
permalink: /data-tools/
---

# Data Exploration Tools

<p class="data-tools-status"><strong>Prototype for review:</strong> These tools and teaching materials are under development and are not yet part of the primary Breakerspace navigation.</p>

Use these browser-based workspaces to look closely at characterization data, try common processing steps, and learn how those choices affect what you see. They are intended for teaching, exploration, and preliminary review—not as replacements for validated research workflows, reference databases, or advanced quantitative-analysis software.

<div class="data-tool-device-note">
  <strong>Laptop or desktop computer recommended</strong>
  <p>These interactive workspaces are designed for a larger screen and work best with a keyboard and mouse or trackpad. You will need to select data files stored on your device. Phones and tablets may be able to open the tools, but their workflows and layouts are not currently supported.</p>
</div>

## Choose a tool

<div class="data-tool-grid">
  <article class="data-tool-card">
    <p class="data-tool-technique">X-ray diffraction</p>
    <h2><a href="{{ "/data-tools/xrd.html" | relative_url }}">Explore an XRD pattern</a></h2>
    <p>Open one or more diffraction patterns, crop and compare scans, explore background subtraction and smoothing, and perform introductory peak fitting.</p>
    <dl class="data-tool-facts">
      <div><dt>Input</dt><dd><code>.xrdml</code> and <code>.csv</code></dd></div>
      <div><dt>Processing</dt><dd>In your browser</dd></div>
      <div><dt>Status</dt><dd>Prototype</dd></div>
    </dl>
    <a class="data-tool-primary-link" href="{{ "/data-tools/xrd.html" | relative_url }}">View the XRD learning workspace <span aria-hidden="true">&rarr;</span></a>
  </article>

  <article class="data-tool-card">
    <p class="data-tool-technique">Raman spectroscopy</p>
    <h2><a href="{{ "/data-tools/raman.html" | relative_url }}">Explore a Raman spectrum</a></h2>
    <p>Open and compare spectra, try baseline correction and smoothing, overlay references, and explore introductory band fitting.</p>
    <dl class="data-tool-facts">
      <div><dt>Input</dt><dd><code>.h5</code>, <code>.hdf5</code>, <code>.xml</code>, and two-column text</dd></div>
      <div><dt>Processing</dt><dd>In your browser; optional RRUFF lookup uses the network</dd></div>
      <div><dt>Status</dt><dd>Prototype</dd></div>
    </dl>
    <a class="data-tool-primary-link" href="{{ "/data-tools/raman.html" | relative_url }}">View the Raman learning workspace <span aria-hidden="true">&rarr;</span></a>
  </article>

  <article class="data-tool-card data-tool-card-future">
    <p class="data-tool-technique">Scanning electron microscopy</p>
    <h2>SEM/EDS summary tool</h2>
    <p>The ScienceScripts SEM/EDS summarizer is currently a Python application. A browser version can be added here after its interface and educational workflow have been developed.</p>
    <p><strong>Status:</strong> Future development</p>
  </article>
</div>

## How to use these tools

1. Start with an example or a familiar dataset whose important features you already understand.
2. Make one processing change at a time.
3. Compare the processed result with the original rather than replacing it.
4. Record the settings and sequence you used.
5. Treat automated fitting or reference matching as evidence to evaluate, not a final identification.

## About the prototype

The analysis applications are developed in the open-source [ScienceScripts project](https://github.com/feranick/ScienceScripts) by Feranick and are being evaluated for educational use by the DMSE Breakerspace. This prototype hosts reviewed local snapshots so that application updates can be tested before they are incorporated into the site.

Questions, accessibility barriers, or suggestions can be sent to [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu).
