---
title: "X-ray Diffraction (XRD) — Tutorial"
layout: default
permalink: /handouts/xrd/
summary: "Practical, student-level guide to using the Panalytical Aeris Research XRD at MIT Breakerspace."
author: "Breakerspace, MIT"
last_modified: 2025-10-07
tags: [xrd, diffraction, tutorials, breakerspace, mit]
---

# X-ray Diffraction (XRD) — MIT Breakerspace Tutorial

**Audience:** MIT undergraduate students (materials science, physics, chemistry, engineering).  
**Assumed background:** Introductory crystallography and lab safety.  
**Goal:** Step-by-step guidance for using the Panalytical Aeris Research XRD at Breakerspace.

> **Note:** This complements manufacturer documentation and Breakerspace training. Follow all lab safety procedures.

---

## Table of contents
1. [Quickstart / One-page cheat sheet](#quickstart--one-page-cheat-sheet)
2. [Safety and lab policies](#safety-and-lab-policies)
3. [Why XRD? (Big picture)](#why-xrd-big-picture)
4. [Materials & sample preparation](#materials--sample-preparation)
5. [Instrument SOP — startup → measurement → shutdown](#instrument-sop--startup--measurement--shutdown)
6. [Data processing & analysis (HighScore Plus)](#data-processing--analysis-highscore-plus)
7. [Interpreting results](#interpreting-results)
8. [Troubleshooting](#troubleshooting)
9. [Exercises](#exercises)
10. [References & files](#references--files)

---

## Quickstart / One-page cheat sheet

**Before starting**
- [ ] Training complete & instrument booked  
- [ ] PPE worn  
- [ ] Samples labeled  

**Startup**
- [ ] Verify sample mounted, instrument powered  
- [ ] Software connected  
- [ ] Tube warming complete  

**Measurement**
- [ ] Check parameters (range, step, time)  
- [ ] Start scan, monitor counts  

**Shutdown**
- [ ] Save & export data  
- [ ] Power down if last user  
- [ ] Log usage  

---

## Safety and lab policies

- Never open instrument while X-ray tube is on.  
- Follow all MIT radiation safety requirements.  
- Use gloves and safety glasses during sample prep.  
- Report any issues in the Breakerspace logbook.

---

## Why XRD? (Big picture)

X-ray diffraction reveals how atoms are arranged in a crystal.  
It enables:
- Phase identification  
- Lattice parameter & strain measurement  
- Crystallite size (via peak broadening)

**Bragg's law:** nλ = 2d sin θ

---

## Materials & sample preparation

**Powders**
- Grind finely to avoid preferred orientation.  
- Mount evenly in holder.

**Thin films**
- Use flat stage or grazing incidence.  

**Mounting**
- Clean holders between uses.  
- Label samples properly.

---

## Instrument SOP — startup → measurement → shutdown

### Startup
1. Ensure chamber clear.  
2. Power on main switch.  
3. Launch software; connect to instrument.  
4. Warm up tube (if required).  
5. Run standard sample if needed.

### Measurement
- Geometry: θ–2θ  
- Cu Kα radiation  
- Range: 10–80°, step 0.02°, 1 s/step  
- Start scan and monitor.

### Shutdown
1. Stop tube, close software.  
2. Power off if last user.  
3. Clean holders, save data, log usage.

---

## Data processing & analysis (HighScore Plus)

### 1) Import data
File → Open → select `.xrdml` or `.raw`.

### 2) Inspect & subtract background
Visualize peaks, remove background.

### 3) Search peaks
Use signal/noise threshold ~3.

### 4) Match to database
Use ICDD PDF; confirm by peak positions.

### 5) Export
Save processed plot and results.

---

## Interpreting results

- Label major peaks and matched phases.  
- Discuss likely compounds and impurities.  
- Mention resolution and uncertainties.

---

## Troubleshooting

| Issue | Likely cause | Fix |
|-------|---------------|-----|
| No peaks | Tube off | Verify X-rays on |
| High background | Dirty optics | Clean sample holder |
| Random peaks | Contamination | Run blank holder |

---

## Exercises

**Exercise A: Phase identification**  
Use provided `exercise_A_raw.csv`. Identify phases and annotate peaks.

**Exercise B: Rietveld refinement (advanced)**  
Use HighScore or GSAS-II. Include fit metrics.

---

## References & files

- Cullity & Stock, *Elements of X-ray Diffraction*  
- ICDD PDF Database  
- Breakerspace XRD SOP (PDF)

**Data files**
- [`exercise_A_raw.csv`](./data/exercise_A_raw.csv)

---

**Credits:** MIT Breakerspace staff and contributors.  
**License:** CC BY 4.0.
