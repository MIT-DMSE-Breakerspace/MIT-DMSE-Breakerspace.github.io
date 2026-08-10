---
layout: quick-guide
title: Instron 68TM-50 SOP and Visual Map Prototype
description: Unpublished two-sided provisional composition combining the canonical Instron 68TM-50 SOP with the intended Level 1 Bluehill and handset map.
published: false
permalink: /quick-guides/instron-sop-map-prototype/
instrument_url: /instruments/instron.html
---

<section class="instrument-quick-guide quick-guide-sop-map" id="quick-guide" aria-labelledby="instron-sop-map-title">
  <div class="quick-guide-screen-bar">
    <div>
      <strong>Provisional composition draft — incomplete</strong>
      <span>Print on Letter paper at 100%, two-sided, flipping on the long edge.</span>
    </div>
    <div class="quick-guide-screen-actions">
      <a href="{{ page.instrument_url | relative_url }}">Current Instron page</a>
      <button type="button" onclick="window.print()">Print provisional draft</button>
    </div>
  </div>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet" aria-labelledby="instron-sop-map-title">
    <header class="quick-guide-sop-map-sheet-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - Trained-user reference</p>
        <h1 id="instron-sop-map-title">Instron 68TM-50 Universal Testing System: Mechanical testing SOP</h1>
        <p class="quick-guide-sop-map-sheet-subtitle">The canonical normal-use sequence in one place. Use the Bluehill and handset visual map on the reverse to locate controls taught in Level 1.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Provisional composition draft — incomplete</strong>
    </header>

    <aside class="quick-guide-sop-map-trained-user-note">
      For users who have completed hands-on Instron training. This sheet does not replace training or authorize independent use.
    </aside>

    <div class="quick-guide-sop-map-sop-grid">
      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-primary">
        <h2 class="quick-guide-sop-map-sop-column-title">Standard Operating Procedure <span>(SOP)</span></h2>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>1</span> Instrument startup</h3>
          <ul>
            <li>Log on to the instrument workstation using your MIT Kerberos.</li>
            <li>Open the Bluehill Universal software.</li>
            <li>If the event log opens, you can close it.</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>2</span> Operation</h3>
          <ul>
            <li>Set up the mechanical test appropriate for your sample (see detailed operating instructions for each test type).</li>
            <li>Confirm the correct load cell connector (5 kN or 50 kN) is inserted and plugged in.</li>
            <li>Select or create the appropriate test method in Bluehill (see setting up a test method).</li>
            <li>Enter the required specimen information and set travel limits so the crosshead and fixtures cannot collide with anything (see set travel and transducer limits).</li>
            <li>Position and load the sample, zero displacement, and balance the force reading.</li>
            <li>On the testing page, press <strong>unlock</strong> then <strong>start</strong> on the hand controller in quick succession. The ready-to-test window lasts about two seconds.</li>
            <li>Perform the mechanical characterization appropriate for the sample and method. To stop the test, press <strong>stop</strong> on the hand controller; use the red emergency stop button for an emergency.</li>
            <li>When every specimen is done, select <strong>Finish sample</strong> to save the sample.</li>
          </ul>
        </section>

        <section class="quick-guide-sop-map-sop-section">
          <h3><span>3</span> Instrument shutdown</h3>
          <ul>
            <li>Save your data and export it, keeping a copy on your own storage (see saving and exporting results).</li>
            <li>Remove your sample and any fragments. If a sample did not break, relieve the load before opening the grips.</li>
            <li>Disassemble your test setup and return all parts to the boxes they came from.</li>
            <li>Wipe up any debris.</li>
            <li>Close the Bluehill Universal software and log off the computer.</li>
            <li>Confirm the Instron is in disabled mode.</li>
          </ul>
        </section>
      </div>

      <div class="quick-guide-sop-map-sop-column quick-guide-sop-map-sop-column-secondary">
        <aside class="quick-guide-sop-map-critical-rule">
          <h2>Moving crosshead and stored-energy rule</h2>
          <p>Keep the enclosure area clear, know where the emergency stop is before starting, and never place hands between the grips while the machine is enabled.</p>
          <p>Keep every test within the limits of the frame, load cell, adapters, fixtures, and specimen; use the red emergency stop for an emergency.</p>
        </aside>

        <aside class="quick-guide-sop-map-before-leaving">
          <h2>Before you leave</h2>
          <ul>
            <li>Data saved, exported, and copied</li>
            <li>Sample, fragments, and debris removed</li>
            <li>Setup disassembled; parts returned</li>
            <li>Bluehill closed; computer logged off</li>
            <li>Instron in disabled mode</li>
          </ul>
        </aside>

        <aside class="quick-guide-sop-map-stop-help">
          <div>
            <h2>Stop and ask staff</h2>
            <p>Unclear test, load cell, fixture, sample limit, travel limit, or method; collision risk; sample likely to shatter dangerously; loose load-string component; unexpected motion or force; or any task needing heavy tooling or added precautions.</p>
          </div>
          <figure>
            <div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--qr"
                 role="img"
                 aria-label="Image placeholder: QR code for the canonical Instron instrument page">
              <strong>Image placeholder</strong>
              <span>Capture needed: QR code for the canonical Instron instrument page</span>
              <small>Release gate: Generate and verify the Instron page QR asset at print resolution.</small>
            </div>
            <figcaption>Detailed instructions, troubleshooting, and help<br><strong>breakerspace.mit.edu/instruments/instron.html</strong></figcaption>
          </figure>
        </aside>

        <div class="quick-guide-sop-map-review-gap">
          <strong>Review gap</strong>
          <p>Decision required: Select the named saved method or <strong>Run a QuickTest</strong>, define the approved end condition, and confirm the initial and final 50 kN tensile-test machine states.</p>
        </div>
      </div>
    </div>

    <footer class="quick-guide-footer">
      <span>Content derived from the canonical Instron SOP - Owner: lab manager</span>
      <span>Provisional 2026-08-10 - Page 1 of 2</span>
    </footer>
  </section>

  <section class="quick-guide-sheet quick-guide-paged quick-guide-sop-map-sheet quick-guide-sop-map-map-sheet" aria-labelledby="instron-map-title">
    <header class="quick-guide-sop-map-sheet-header quick-guide-sop-map-map-header">
      <div>
        <p class="quick-guide-kicker">DMSE Breakerspace - Instron 68TM-50 Universal Testing System</p>
        <h2 id="instron-map-title">Bluehill and handset visual map</h2>
        <p class="quick-guide-sop-map-sheet-subtitle">Use this side to find the controls needed for the proposed Level 1 50 kN tensile test. Follow the SOP on the reverse for the canonical workflow.</p>
      </div>
      <strong class="quick-guide-sop-map-review-badge">Provisional composition draft — incomplete</strong>
    </header>

    <div class="quick-guide-sop-map-map-body">
      <section class="quick-guide-sop-map-map-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>Required Bluehill and handset views</h3>
          <p>The confirmed teaching sequence needs two control surfaces; their readable layout is not approved.</p>
        </div>

        <figure class="quick-guide-sop-map-toolbar-figure">
          <div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--map"
               role="img"
               aria-label="Image placeholder: clean native-resolution Bluehill test state and unannotated handset view for the proposed Level 1 50 kN tensile workflow, with the multi-view layout still to be approved">
            <strong>Image placeholder</strong>
            <span>Capture needed: Clean native-resolution Bluehill test state and unannotated handset view for the proposed Level 1 50 kN tensile workflow. Label to verify: jog controls used to position the crosshead. Label to verify: zero displacement. Label to verify: unlock and start sequence. Label to verify: stop. Label to verify: approved saved-method or Run a QuickTest entry route. Label to verify: specimen-information and limit checkpoint. Label to verify: force balance. Label to verify: Finish sample / save.</span>
            <small>Release gate: Capture both current control surfaces, the travel-limit prompt, and the verified 50 kN Level 1 fixture state; then approve a readable Instron-specific two-view layout before annotation.</small>
          </div>
        </figure>

        <div class="quick-guide-sop-map-review-gap">
          <strong>Review gap</strong>
          <p>Decision required: Lock an Instron-specific two-view Bluehill/handset layout after the method decision. Do not reduce the map to one surface or invent an inset or composite.</p>
        </div>
      </section>

      <section class="quick-guide-sop-map-map-section quick-guide-sop-map-quality-section">
        <div class="quick-guide-sop-map-map-heading">
          <h3>Proposed setup-quality decision</h3>
          <p>The work order proposes one matched question about a soft curved toe from slack or grip slip; staff approval is still required.</p>
        </div>

        <div class="quick-guide-sop-map-quality-grid">
          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-stop">
            <div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--quality"
                 role="img"
                 aria-label="Image placeholder: force-displacement curve showing the canonical soft curved toe caused by slack or grip slip in the selected Level 1 setup">
              <strong>Image placeholder</strong>
              <span>Capture needed: Force-displacement curve showing the canonical soft curved toe caused by slack or grip slip in the selected Level 1 setup.</span>
              <small>Release gate: Capture a matched pair and obtain staff approval of the at-instrument quality question and caption.</small>
            </div>
            <figcaption><strong>Proposed stop state:</strong> A soft curved toe may indicate slack or grip slip; take up slack, seat the specimen correctly, and re-run. Do not use this as an approved criterion until staff review.</figcaption>
          </figure>

          <figure class="quick-guide-sop-map-quality-card quick-guide-sop-map-quality-ready">
            <div class="quick-guide-sop-map-quality-image">
              <div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--quality"
                   role="img"
                   aria-label="Image placeholder: matched repeat force-displacement curve after correcting the selected Level 1 setup with the soft curved toe absent">
                <strong>Image placeholder</strong>
                <span>Capture needed: Matched repeat force-displacement curve after correcting the selected Level 1 setup, with the soft curved toe absent.</span>
                <small>Release gate: Capture a matched pair and obtain staff approval of the at-instrument quality question and caption.</small>
              </div>
            </div>
            <figcaption><strong>Proposed continue state:</strong> Continue only after staff approves the matched example and confirms the observable setup-quality decision.</figcaption>
          </figure>
        </div>
      </section>

      <aside class="quick-guide-sop-map-map-reminders">
        <div>
          <h3>Start sequence</h3>
          <p>On the testing page, press <strong>unlock</strong> then <strong>start</strong> in quick succession; the ready-to-test window lasts about two seconds.</p>
        </div>
        <div>
          <h3>Before unloading</h3>
          <p>Select <strong>Finish sample</strong>, save and export needed data, relieve any remaining load, then remove the sample and fragments.</p>
        </div>
        <figure>
          <div class="quick-guide-sop-map-placeholder quick-guide-sop-map-placeholder--qr"
               role="img"
               aria-label="Image placeholder: QR code for the canonical Instron instrument page">
            <strong>Image placeholder</strong>
            <span>Capture needed: QR code for the canonical Instron instrument page</span>
            <small>Release gate: Generate and verify the Instron page QR asset at print resolution.</small>
          </div>
          <figcaption>Full instructions<br><strong>breakerspace.mit.edu/instruments/instron.html</strong></figcaption>
        </figure>
      </aside>

      <div class="quick-guide-sop-map-review-gap">
        <strong>Review gap</strong>
        <p>Decision required: Approve the method and end condition, confirm the 50 kN fixture and initial/final states, verify every control, approve the toe-artifact pair, and confirm save/export location and naming. This draft remains blocked for technical completion, publication, printing for use, and installation.</p>
      </div>
    </div>

    <footer class="quick-guide-footer">
      <span>Visual map, not a replacement for training or the detailed operating instructions</span>
      <span>Provisional 2026-08-10 - Page 2 of 2</span>
    </footer>
  </section>
</section>
