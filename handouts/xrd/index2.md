X-ray Diffraction (XRD) — MIT Breakerspace Tutorial

Audience: MIT undergraduate students (materials science, physics, chemistry, engineering) using the Breakerspace Panalytical Aeris Research XRD.
Assumed background: Introductory crystallography (Bragg’s law, Miller indices) and basic lab safety.
Goal: Provide a clear, student-friendly single-page tutorial suitable for GitHub Pages and classroom use. This page mixes SOP (must follow in lab) with optional theory and analysis guidance.

Note (Breakerspace): This tutorial augments manufacturer documentation and course materials. Follow all lab safety procedures and Breakerspace booking policies. If anything here conflicts with the instrument manual or staff instruction, follow staff/manual.

⸻

Table of contents
	1.	Quickstart / One-page cheat sheet
	2.	Safety and lab policies
	3.	Why XRD? (Big picture) — optional reading
	4.	Materials & sample preparation
	5.	Instrument SOP — step-by-step (startup → measurement → shutdown)
	6.	Data processing & analysis (HighScore Plus workflow)
	7.	Interpreting results: worked example
	8.	Common failure modes & troubleshooting
	9.	Exercises and deliverables
	10.	Cheat sheet & quick references
	11.	Appendices & further reading

⸻

Quickstart / One-page cheat sheet

Use this as a printable checklist while at the instrument.

Before you start
	•	Training complete and equipment booked.
	•	Lab PPE: safety glasses, closed-toe shoes.
	•	Sample labeled (name, date, user initials).

Startup
	•	Verify sample is properly prepared and loaded in sample holder.
	•	Power on instrument (follow SOP below).
	•	Confirm cover closed, interlocks engaged.
	•	Check default program (Cu Kα, 2θ range, step size, time).

Measurement
	•	Name measurement carefully (Lastname_sampleID_date).
	•	Run empty/standard reference (optional) for QA.
	•	Queue sample(s) and start scan.
	•	Monitor counts and instrument status.

Shutdown
	•	Stop queue when done.
	•	Power down per SOP.
	•	Export raw data + processed files, save to Breakerspace folder & your GitHub (if required).
	•	Log instrument use and any issues in Breakerspace logbook.

⸻

Safety and lab policies
	•	High voltage & X-rays: Do not defeat interlocks. Never open the instrument while the X-ray tube is on or ramping.
	•	Radiation safety: If you detect interlock faults or unshielded radiation, immediately power down and notify staff.
	•	Chemical safety / sample prep: Wear appropriate PPE when preparing powders or grinding samples to avoid inhalation. Use a fume hood when using solvents.
	•	Data & instrument etiquette: Delete only your own data. Report instrument errors and any unusual noises in the Breakerspace issue tracker. Clean sample holders after use.

⸻

Why XRD? (Big picture — optional)

XRD reports how atoms are arranged in a crystalline material by measuring constructive interference of X-rays scattered from lattice planes. Common uses:
	•	Phase identification (what crystalline phases are present)
	•	Lattice parameter measurement and strain
	•	Crystallite size (via peak broadening; Scherrer approximation)
	•	Texture and preferred orientation (advanced)
	•	Quantitative phase analysis (Rietveld refinement; advanced)

Key equation (reminder): Bragg’s law, n\lambda = 2d\sin\theta.

⸻

Materials & sample preparation

Good sample prep → better data. Short checklist:

Powder samples
	•	Grind to fine powder (typical grain ≪ X-ray penetration depth; aim for a few micrometers).
	•	Avoid large particles and preferred orientation: gently press into a holder or use a back-loading holder to minimize texture.
	•	If sample is air-sensitive, seal in a low-background holder or use Kapton tape (note: tape adds background).

Thin films / flat plates
	•	Use a flat sample stage; beware substrate peaks dominating the pattern. Consider grazing-incidence geometry (advanced).

Mounting
	•	Use recommended sample holders for the Aeris. Make sure sample surface is flat and centered under the X-ray beam path. Clean holders between users.

Labeling & documentation
	•	Label physically and in measurement name. Keep a log of sample ID, prep method, date, and operator.

⸻

Instrument SOP — step-by-step (startup → measurement → shutdown)

The following is written as a lab SOP. Follow it in the lab; images/screenshots should be placed next to the steps on the hosted page.

Before you arrive
	•	Confirm instrument reservation and training status.
	•	Bring prepared sample(s) and a USB or network location to save data.

Startup (power on)
	1.	Confirm sample changer is empty or has correct samples loaded. Verify no loose objects inside chamber.
	2.	Turn on main instrument power switch (location: front/side — annotated image placeholder). Wait for initial self-tests to complete.
	3.	Open the software (Aeris control / measurement software). Confirm software establishes connection with hardware.
	4.	If required, start X-ray tube warmup program (some instruments ramp current slowly). Do not open the cover while ramping.
	5.	Run a quick system check or standard sample (if available).

Loading samples
	1.	Wear gloves for clean handling. Place sample in holder; center it and secure.
	2.	Label holder physically and in the software (use the naming convention Lastname_sampleID_YYYYMMDD).
	3.	If using the sample changer, place sample in the desired slot and note slot number.

Measurement setup (typical undergraduate settings)
	•	Radiation: Cu Kα (λ = 1.5406 Å) — default for most labs.
	•	2θ range: Beginner: 10°–80°. For specific phases, narrow ranges are OK.
	•	Step size (Δ2θ): 0.02° (typical). Smaller step → better resolution but longer time.
	•	Count time / point: 0.5–2 s/step (adjust for intensity). Higher counts → better signal-to-noise.
	•	Divergence slit / optics: Use lab defaults unless trained otherwise.

Procedure
	1.	In the software, create a new measurement, set geometry (θ/2θ), range, step size, and time.
	2.	Save measurement with full metadata (sample ID, operator, notes).
	3.	Start the measurement and monitor the run (watch for unusual drop in counts or interlock trips).

After the scan
	1.	Stop X-ray tube if you’re the last user. Follow warmdown procedure as needed by manufacturer.
	2.	Remove sample and clean holder. Return holder to storage.
	3.	Export raw data and a copy of processed plots (PNG, CSV, or vendor format). Save to the Breakerspace network folder and your personal backup (e.g., GitHub).
	4.	Log usage and any anomalies in the Breakerspace logbook.

⸻

Data processing & analysis — HighScore Plus workflow

This section assumes you have basic familiarity with HighScore Plus. If not, follow the step-by-step screenshots (place images on the site).

1) Import / open data
	•	File → Open → select your scan. Save a copy in your working folder.

2) Inspect raw pattern
	•	Check background, peak shapes, and signal-to-noise. Are there spikes (cosmic), dead channels, or background hum? If so, re-run with adjusted parameters.

3) Background subtraction
	•	Use automated background routines as a first pass; visually inspect and adjust the points used for background. Improper background → false peaks.

4) Peak search
	•	Use the Search Peaks tool with conservative thresholds (e.g., S/N ≥ 3). Manually add/remove peaks that are false/hidden.

5) Phase identification (PDF search)
	•	Use the ICDD PDF database (licensed at Breakerspace or via HighScore).
	•	Match peak positions primarily (2θ) — intensities vary with sample prep and texture. Accept matches with consistent peak sets, not single-peak matches.

6) Semi-quantitative or Rietveld (optional / advanced)
	•	For quantification use Rietveld refinement. Provide starting structural models, refine scale factors, and check goodness-of-fit (Rwp, χ²). Keep refinements simple as a beginner: background, scale, peak shape, lattice parameters.

7) Export and document
	•	Export plots with labeled peaks, matched phases, and a short methods section including instrument, range, step, and counting time. Save raw data files (.raw, .xrdml) and derived files (.txt, .csv, PNG).

⸻

Interpreting results: worked example (student exercise)

Objective: Identify phases in an unknown powder.
	1.	Show a sample raw_pattern.png (include as figure) and a raw_pattern.csv.
	2.	Walk through background subtraction (show before/after images).
	3.	Perform peak search, list detected peak positions (table).
	4.	Use PDF search; show top 3 candidate matches for the most intense peaks and explain why we accept or reject each.
	5.	Provide a final annotated pattern with phase labels and a short interpretation paragraph (what phases, relative amounts — qualitative).

On the hosted page, include a downloadable unknown_sample.raw and a step-by-step notebook or script. (Place files in the repo data/ folder.)

⸻

Common failure modes & troubleshooting

Symptom
Possible cause
Fix
No signal or very low counts
X-ray tube off / shutter closed / sample misaligned
Ensure tube is on, shutter open, sample centered. Re-run quick standard.
High background
Dirty optics, loose holder, Kapton or tape scattering
Clean optics, remount sample, reduce stray scatter.
Unexpected peaks
Contamination, sample holder peaks, substrate peaks
Run empty holder, compare, re-prepare sample.
Peak splitting
Misalignment, instrument geometry error
Check alignment, consult staff.
Interlock trip / instrument fault
Open cover or electrical issue
Power down safely, log issue, notify staff.

Exercises and deliverables

Each exercise is tiered: Beginner → Intermediate → Advanced. For course instructors, suggested grading rubrics follow each exercise.

Exercise A — Phase ID (Beginner)
	•	Task: Identify phases in exercise_A_raw (provided).
	•	Deliverables: Single PDF containing (1) annotated XRD plot with peak labels, (2) list of top five peaks and matched phases, (3) 3–5 sentence conclusion.
	•	Hints: Focus on strongest peaks and their d-spacings.

Exercise B — Rietveld mini-refinement (Intermediate)
	•	Task: Perform a simple Rietveld refinement of a two-phase mixture.
	•	Deliverables: Refinement input and output files, annotated plot including difference curve, brief report (method, fit statistics, caveats).
	•	Rubric: Correct model choice (40%), fit convergence & residuals (30%), clear explanation (30%).

Exercise C — Report (Advanced)
	•	Task: Pick a sample from lab or literature, collect XRD, perform quantitative analysis (Rietveld), estimate crystallite size & strain, and discuss uncertainties.
	•	Deliverables: Full lab report (5–8 pages), data files, and GitHub repo with analysis scripts.

⸻

Cheat sheet & quick references

Typical settings
	•	Radiation: Cu Kα (λ = 1.5406 Å)
	•	2θ range for general phase ID: 10°–80°
	•	Step size: 0.02°–0.05°
	•	Time per step: 0.5–2 s/step
	•	Good S/N: >10 for major peaks

Useful resources
	•	Instrument manual (Panalytical Aeris Research) — see Breakerspace docs.
	•	ICDD PDF database (licensed access).
	•	Open alternatives: GSAS-II (Rietveld), FullProf, Python diffpy stack.

⸻

Appendices & further reading

Appendix A — File naming & data management (recommended)
	•	Lastname_sampleID_YYYYMMDD_xrd.raw
	•	Keep a README.txt with sample prep notes, measurement parameters, and user contact.

Appendix B — Background on peak broadening and Scherrer equation
	•	Scherrer: \tau = \frac{K \lambda}{\beta \cos\theta} — where β is FWHM (radians), K ≈ 0.9. Use with caution (strain + instrument broadening).

Appendix C — Links & references
	•	Cullity, B. D., & Stock, S. R. Elements of X-Ray Diffraction.
	•	Rietveld, H. M. (1969). A profile refinement method for nuclear and magnetic structures. Journal of Applied Crystallography.
	•	GSAS-II documentation and tutorials.

