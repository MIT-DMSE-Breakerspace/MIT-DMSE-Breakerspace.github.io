---
layout: quick-guide
title: "[INSTRUMENT] SOP and Visual Map Prototype"
description: "Unpublished two-sided prototype combining the canonical [INSTRUMENT] SOP with an annotated [SOFTWARE OR HARDWARE] visual map."
published: false
permalink: /quick-guides/[SLUG]-sop-map-prototype/
instrument_url: /instruments/[SLUG].html
---

<!--
  LOCKED TEMPLATE.
  Copy this file; do not edit it in place.
  Replace bracketed fields and the instrument-specific content authorized by
  README.md and instrument-specifications.md. Do not alter structure/classes.
-->
<section class="instrument-quick-guide quick-guide-sop-map" id="quick-guide" aria-labelledby="[SLUG]-sop-map-title">
  <div class="quick-guide-screen-bar">
    <div>
      <strong>Review prototype - not approved for instrument use</strong>
      <span>Print on Letter paper at 100%, two-sided, flipping on the long edge.</span>
    </div>
    <div class="quick-guide-screen-actions">
      <a href="{{ page.instrument_url | relative_url }}">Current [SHORT INSTRUMENT NAME] page</a>
      <button type="button" onclick="window.print()">Print prototype</button>
    </div>
  </div>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet" aria-labelledby="[SLUG]-sop-map-title">
    <header class="quick-guide-sop-map-sheet-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - Trained-user reference</p>
        <h1 id="[SLUG]-sop-map-title">[INSTRUMENT]: [ROUTINE WORKFLOW] SOP</h1>
        <p class="quick-guide-sop-map-sheet-subtitle">The complete normal-use sequence in one place. Use the [VISUAL MAP NAME] on the reverse to locate controls.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Prototype<br>Review only</strong>
    </header>

    <aside class="quick-guide-sop-map-trained-user-note">
      For users who have completed hands-on [SHORT INSTRUMENT NAME] training. This sheet does not replace training or authorize independent use.
    </aside>

    <div class="quick-guide-sop-map-sop-grid">
      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-primary">
        <h2 class="quick-guide-sop-map-sop-column-title">Standard Operating Procedure <span>(SOP)</span></h2>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>1</span> Instrument startup</h3>
          <ul>
            <li>[COPY CANONICAL STARTUP STEP]</li>
            <li>[COPY CANONICAL STARTUP STEP]</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>2</span> Operation</h3>
          <ul>
            <li>[COPY CANONICAL ROUTINE OPERATION STEP]</li>
            <li>[COPY CANONICAL ROUTINE OPERATION STEP]</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>3</span> Instrument shutdown</h3>
          <ul>
            <li>[COPY CANONICAL SHUTDOWN STEP]</li>
            <li>[COPY CANONICAL SHUTDOWN STEP]</li>
          </ul>
        </section>
      </div>

      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-secondary">
        <aside class="quick-guide-sop-map-critical-rule">
          <h2>[INSTRUMENT-SPECIFIC CRITICAL RULE HEADING]</h2>
          <p>[CANONICAL CRITICAL BOUNDARY]</p>
          <p>[CANONICAL PHYSICAL OR DIGITAL HANDLING RULE, IF SPECIFIED]</p>
        </aside>

        <aside class="quick-guide-sop-map-before-leaving">
          <h2>Before you leave</h2>
          <ul>
            <li>[DATA END STATE]</li>
            <li>[SAMPLE END STATE]</li>
            <li>[CLEANING END STATE]</li>
            <li>[SOFTWARE / WORKSTATION END STATE]</li>
            <li>[INSTRUMENT / AREA END STATE]</li>
          </ul>
        </aside>

        <aside class="quick-guide-sop-map-stop-help">
          <div>
            <h2>Stop and ask staff</h2>
            <p>[CANONICAL STOP CONDITIONS FOR THE ROUTINE WORKFLOW]</p>
          </div>
          <figure>
            <img src="{{ '/assets/img/qr/[SLUG]-page.svg' | relative_url }}" alt="QR code linking to the full [INSTRUMENT] page at breakerspace.mit.edu/instruments/[SLUG].html">
            <figcaption>Detailed instructions, troubleshooting, and help<br><strong>breakerspace.mit.edu/instruments/[SLUG].html</strong></figcaption>
          </figure>
        </aside>
      </div>
    </div>

    <footer class="quick-guide-footer">
      <span>Content derived from the canonical [SHORT INSTRUMENT NAME] SOP - Owner: lab manager</span>
      <span>Prototype [YYYY-MM-DD] - Page 1 of 2</span>
    </footer>
  </section>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet quick-guide-sop-map-map-sheet" aria-labelledby="[SLUG]-map-title">
    <header class="quick-guide-sop-map-sheet-header quick-guide-sop-map-map-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - [INSTRUMENT]</p>
        <h2 id="[SLUG]-map-title">[SOFTWARE OR HARDWARE] visual map</h2>
        <p class="quick-guide-sop-map-sheet-subtitle">Use this side to find the controls. Follow the SOP on the reverse for the workflow.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Prototype<br>Review only</strong>
    </header>

    <div class="quick-guide-sop-map-map-body">
      <section class="quick-guide-sop-map-map-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>[PRIMARY INTERFACE OR HARDWARE VIEW]</h3>
          <p>[ONE SENTENCE LOCATING THE ROUTINE CONTROLS; CANONICAL OR DIRECTLY VISIBLE ONLY]</p>
        </div>

        <figure class="quick-guide-sop-map-toolbar-figure">
          <div class="quick-guide-sop-map-toolbar-crop">
            <img src="{{ '/[APPROVED PRIMARY IMAGE PATH]' | relative_url }}" alt="[OBJECTIVE DESCRIPTION OF THE UNANNOTATED SOURCE IMAGE]">
            <svg class="quick-guide-sop-map-callout-overlay" pointer-events="none" viewBox="0 0 [SOURCE WIDTH] [CROPPED VIEW HEIGHT]" preserveAspectRatio="none" aria-hidden="true">
              <g class="quick-guide-sop-map-image-callout">
                <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="[X]" y="[Y]" width="[WIDTH]" height="[HEIGHT]" rx="2" />
                <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M[START X] [START Y] L[END X] [END Y]" />
                <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="[NUMBER X]" cy="[NUMBER Y]" r="11" />
                <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="[NUMBER X]" y="[NUMBER Y]">1</text>
              </g>
              <!-- Duplicate only for the exact callouts in the instrument specification. -->
            </svg>
          </div>
          <figcaption class="quick-guide-sop-map-control-key">
            <span><b>1</b> [EXACT VISIBLE CONTROL NAME]</span>
            <span><b>2</b> [EXACT VISIBLE CONTROL NAME]</span>
            <span><b>3</b> [EXACT VISIBLE CONTROL NAME]</span>
            <span><b>4</b> [EXACT VISIBLE CONTROL NAME]</span>
          </figcaption>
        </figure>
      </section>

      <section class="quick-guide-sop-map-map-section quick-guide-sop-map-quality-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>[IMMEDIATE QUALITY OR READINESS DECISION]</h3>
          <p>[WHAT THE USER MUST DECIDE BEFORE SAVING, UNLOADING, OR STARTING; NO EXTENDED INTERPRETATION]</p>
        </div>

        <div class="quick-guide-sop-map-quality-grid">
          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-stop">
            <img src="{{ '/[APPROVED STOP-STATE IMAGE PATH]' | relative_url }}" alt="[OBJECTIVE STOP-STATE DESCRIPTION]">
            <figcaption><strong>[STOP-STATE LABEL]:</strong> [CANONICAL CORRECTIVE ACTION OR ASK-STAFF DIRECTION].</figcaption>
          </figure>

          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-ready">
            <div class="quick-guide-sop-map-quality-image">
              <img src="{{ '/[APPROVED READY-STATE IMAGE PATH]' | relative_url }}" alt="[OBJECTIVE READY-STATE DESCRIPTION]">
              <!-- Add an SVG overlay here only when the specification names a control in this image. -->
            </div>
            <figcaption><strong>[READY-STATE LABEL]:</strong> [CANONICAL CONTINUE ACTION].</figcaption>
          </figure>
        </div>
      </section>

      <aside class="quick-guide-sop-map-map-reminders">
        <div>
          <h3><span>[N]</span> [KEY ACQUISITION CONTROL]</h3>
          <p>[ONE ROUTINE CONTROL RELATIONSHIP THAT PREVENTS A COMMON ERROR]</p>
        </div>
        <div>
          <h3>[FINAL CHECK BEFORE UNLOADING OR LEAVING]</h3>
          <p>[QUALITY, SAVE, OR SYSTEM-STATE REMINDER]</p>
        </div>
        <figure>
          <img src="{{ '/assets/img/qr/[SLUG]-page.svg' | relative_url }}" alt="QR code linking to the full [INSTRUMENT] page at breakerspace.mit.edu/instruments/[SLUG].html">
          <figcaption>Full instructions and troubleshooting</figcaption>
        </figure>
      </aside>
    </div>

    <footer class="quick-guide-footer">
      <span>Visual map, not a replacement for training or the detailed operating instructions</span>
      <span>Prototype [YYYY-MM-DD] - Page 2 of 2</span>
    </footer>
  </section>
</section>
