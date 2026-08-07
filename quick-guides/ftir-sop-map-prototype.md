---
layout: quick-guide
title: FTIR SOP and Software Map Prototype
description: Unpublished two-sided prototype combining the canonical FTIR SOP with an annotated OMNIC visual map.
published: false
permalink: /quick-guides/ftir-sop-map-prototype/
instrument_url: /instruments/ftir.html
---

<section class="instrument-quick-guide quick-guide-sop-map" id="quick-guide" aria-labelledby="ftir-quick-guide-sop-map-title">
  <div class="quick-guide-screen-bar">
    <div>
      <strong>Review prototype - not approved for instrument use</strong>
      <span>Print on Letter paper at 100%, two-sided, flipping on the long edge.</span>
    </div>
    <div class="quick-guide-screen-actions">
      <a href="{{ page.instrument_url | relative_url }}">Current FTIR page</a>
      <button type="button" onclick="window.print()">Print prototype</button>
    </div>
  </div>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet" aria-labelledby="ftir-quick-guide-sop-map-title">
    <header class="quick-guide-sop-map-sheet-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - Trained-user reference</p>
        <h1 id="ftir-quick-guide-sop-map-title">Nicolet iS5 FTIR: Routine iD7 ATR SOP</h1>
        <p class="quick-guide-sop-map-sheet-subtitle">The complete normal-use sequence in one place. Use the OMNIC visual map on the reverse to locate controls.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Prototype<br>Review only</strong>
    </header>

    <aside class="quick-guide-sop-map-trained-user-note">
      For users who have completed hands-on FTIR training. This sheet does not replace training or authorize independent use.
    </aside>

    <div class="quick-guide-sop-map-sop-grid">
      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-primary">
        <h2 class="quick-guide-sop-map-sop-column-title">Standard Operating Procedure <span>(SOP)</span></h2>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>1</span> Instrument startup</h3>
          <ul>
            <li>Power on the instrument, if needed.</li>
            <li>Log on to the workstation using your MIT Kerberos.</li>
            <li>Start <strong>OMNIC</strong>.</li>
            <li>Verify the instrument connection using <strong>System Status</strong>.</li>
            <li>Remove the protective cover from the ATR crystal plate.</li>
            <li>Clean and dry the ATR crystal.</li>
            <li>Collect a background before loading samples.</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>2</span> Operation</h3>
          <ul>
            <li>Wear nitrile gloves when handling samples, ATR accessories, the pressure tower, pressure tips, Kimwipes, or cleaning solvent.</li>
            <li>Remove gloves before using the keyboard, mouse, or workstation.</li>
            <li>Clean the ATR crystal before each sample or whenever contamination is possible.</li>
            <li>Choose the sampling method and pressure tip appropriate for the sample.</li>
            <li>Load the sample so it makes good contact with the ATR crystal.</li>
            <li>Collect the sample spectrum.</li>
            <li>Save each spectrum you need. Spectra must be selected and saved individually.</li>
            <li>Wear gloves again before unloading the sample or cleaning the crystal.</li>
            <li>Repeat background, sample collection, cleaning, and saving as needed.</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>3</span> Instrument shutdown</h3>
          <ul>
            <li>Save all data you need and copy it to your own storage.</li>
            <li>Close OMNIC.</li>
            <li>Log off the workstation.</li>
            <li>Clean and dry the ATR crystal.</li>
            <li>Put the cover on the crystal plate and clamp it in place with the pressure tower.</li>
            <li><strong>Leave the FTIR powered on.</strong></li>
            <li>Remove all samples, wipes, and waste.</li>
          </ul>
        </section>
      </div>

      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-secondary">
        <aside class="quick-guide-sop-map-critical-rule">
          <h2>The glove rule</h2>
          <p><strong>Gloves on:</strong> sample, crystal, tower, tips, wipes, solvent.</p>
          <p><strong>Gloves off:</strong> keyboard, mouse, and screen.</p>
        </aside>

        <aside class="quick-guide-sop-map-before-leaving">
          <h2>Before you leave</h2>
          <ul>
            <li>Data saved individually and copied</li>
            <li>Crystal and plate clean</li>
            <li>Cover on and clamped</li>
            <li>OMNIC closed; workstation logged off</li>
            <li>FTIR still powered on; area clear</li>
          </ul>
        </aside>

        <aside class="quick-guide-sop-map-stop-help">
          <div>
            <h2>Stop and ask staff</h2>
            <p>Uncertain sample, damaged or dirty crystal, failed connection, unfamiliar error, persistent poor signal, or anything outside routine iD7 ATR.</p>
          </div>
          <figure>
            <img src="{{ '/assets/img/qr/ftir-page.svg' | relative_url }}" alt="QR code linking to the full FTIR instrument page at breakerspace.mit.edu/instruments/ftir.html">
            <figcaption>Detailed instructions, troubleshooting, and help<br><strong>breakerspace.mit.edu/instruments/ftir.html</strong></figcaption>
          </figure>
        </aside>
      </div>
    </div>

    <footer class="quick-guide-footer">
      <span>Content derived from the canonical FTIR SOP - Owner: lab manager</span>
      <span>Prototype 2026-08-07 - Page 1 of 2</span>
    </footer>
  </section>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet quick-guide-sop-map-map-sheet" aria-labelledby="ftir-map-title">
    <header class="quick-guide-sop-map-sheet-header quick-guide-sop-map-map-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - Nicolet iS5 FTIR</p>
        <h2 id="ftir-map-title">OMNIC visual map</h2>
        <p class="quick-guide-sop-map-sheet-subtitle">Use this side to find the controls. Follow the SOP on the reverse for the workflow.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Prototype<br>Review only</strong>
    </header>

    <div class="quick-guide-sop-map-map-body">
      <section class="quick-guide-sop-map-map-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>Main OMNIC window</h3>
          <p>The routine controls stay in the top toolbar.</p>
        </div>

        <figure class="quick-guide-sop-map-toolbar-figure">
          <div class="quick-guide-sop-map-toolbar-crop">
            <img src="{{ '/assets/media/tutorials/ftir/preview-omnic-poster.jpg' | relative_url }}" alt="OMNIC main window with the routine toolbar across the top and the iD7 ATR experiment selected.">
            <svg class="quick-guide-sop-map-callout-overlay" pointer-events="none" viewBox="0 0 750 155" preserveAspectRatio="none" aria-hidden="true">
              <g class="quick-guide-sop-map-image-callout">
                <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="22" y="29" width="23" height="36" rx="2" />
                <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M33.5 65 L33.5 91" />
                <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="33.5" cy="105" r="11" />
                <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="33.5" y="105">1</text>
              </g>
              <g class="quick-guide-sop-map-image-callout">
                <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="45" y="29" width="22" height="36" rx="2" />
                <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M56 65 L56 113" />
                <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="56" cy="127" r="11" />
                <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="56" y="127">2</text>
              </g>
              <g class="quick-guide-sop-map-image-callout">
                <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="96" y="29" width="23" height="36" rx="2" />
                <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M107.5 65 L107.5 91" />
                <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="107.5" cy="105" r="11" />
                <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="107.5" y="105">3</text>
              </g>
              <g class="quick-guide-sop-map-image-callout">
                <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="697" y="10" width="51" height="27" rx="2" />
                <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M711 37 L689 91" />
                <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="684" cy="105" r="11" />
                <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="684" y="105">4</text>
              </g>
            </svg>
          </div>
          <figcaption class="quick-guide-sop-map-control-key">
            <span><b>1</b> Collect Background</span>
            <span><b>2</b> Collect Sample</span>
            <span><b>3</b> Save selected spectrum</span>
            <span><b>4</b> System Status</span>
          </figcaption>
        </figure>
      </section>

      <section class="quick-guide-sop-map-map-section quick-guide-sop-map-quality-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>Preview is a decision point</h3>
          <p>Judge contact before committing the scan. Spectrum shape varies by material; these are illustrative contact states from the recorded FTIR workflow.</p>
        </div>

        <div class="quick-guide-sop-map-quality-grid">
          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-stop">
            <img src="{{ '/assets/img/prototypes/ftir-preview-weak.jpg' | relative_url }}" alt="OMNIC preview showing a nearly flat, weak ATR spectrum with little usable signal.">
            <figcaption><strong>Weak or nearly flat signal:</strong> improve sample contact before committing. Re-seat the sample or use the appropriate pressure tip. Ask staff if it stays weak.</figcaption>
          </figure>

          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-ready">
            <div class="quick-guide-sop-map-quality-image">
              <img src="{{ '/assets/img/prototypes/ftir-preview-usable.jpg' | relative_url }}" alt="OMNIC preview showing a stronger ATR spectrum with multiple visible bands and the Start Collection control in the upper right.">
              <svg class="quick-guide-sop-map-callout-overlay" pointer-events="none" viewBox="0 0 750 468" preserveAspectRatio="none" aria-hidden="true">
                <g class="quick-guide-sop-map-image-callout">
                  <rect class="quick-guide-sop-map-target-outline" fill="#ffffff" fill-opacity="0.08" stroke="#ae0721" stroke-width="2" vector-effect="non-scaling-stroke" x="680" y="52" width="65" height="23" rx="3" />
                  <path class="quick-guide-sop-map-leader" fill="none" stroke="#ae0721" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M680 63.5 L640 63.5" />
                  <circle class="quick-guide-sop-map-callout-number" fill="#ae0721" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" cx="624" cy="63.5" r="13" />
                  <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" dominant-baseline="middle" text-anchor="middle" x="624" y="63.5">5</text>
                </g>
              </svg>
            </div>
            <figcaption><strong>Usable signal:</strong> when contact and the live trace look plausible, select <strong>Start Collection</strong> to run the full scan.</figcaption>
          </figure>
        </div>
      </section>

      <aside class="quick-guide-sop-map-map-reminders">
        <div>
          <h3><span>5</span> Start Collection</h3>
          <p>Collect Background or Collect Sample opens the live preview. The scan is not complete until Start Collection runs the full acquisition.</p>
        </div>
        <div>
          <h3>Before unloading</h3>
          <p>Check signal and obvious contamination while the sample is still in place. Save each finished spectrum individually.</p>
        </div>
        <figure>
          <img src="{{ '/assets/img/qr/ftir-page.svg' | relative_url }}" alt="QR code linking to the full FTIR instrument page at breakerspace.mit.edu/instruments/ftir.html">
          <figcaption>Full instructions and troubleshooting</figcaption>
        </figure>
      </aside>
    </div>

    <footer class="quick-guide-footer">
      <span>Visual map, not a replacement for training or the detailed operating instructions</span>
      <span>Prototype 2026-08-07 - Page 2 of 2</span>
    </footer>
  </section>
</section>
