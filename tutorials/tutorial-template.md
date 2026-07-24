---
layout: default
title: Legacy Instrument Tutorial Template
published: false
---

# Legacy Instrument Tutorial Compatibility Guide

This unpublished file documents how to maintain a legacy page in `tutorials/` while its consolidated replacement is being developed. It is not the template for new instrument pages.

New and migrated instrument content belongs under `instruments/` and should follow [`instruments/readme.md`](../instruments/readme.md). The canonical user-facing catalog is [`instruments/index.md`](../instruments/index.md).

## Current Transition Model

* Keep an existing tutorial URL available until its consolidated instrument page is complete and inbound links have been reviewed.
* Do not create a new legacy tutorial when an integrated instrument page can serve as the canonical destination.
* Do not maintain conflicting operating instructions in both locations. Once the integrated page is promoted, the legacy URL should point users to it or contain only deliberately maintained compatibility content.
* Keep incomplete or unresolved policy out of public instructions. Track cross-site decisions in [`_staff/site-todo.md`](../_staff/site-todo.md).

## Minimum Legacy Tutorial Structure

When a legacy tutorial still carries the active workflow, preserve stable anchors and include enough information for safe use:

1. Overview and intended use.
2. Standard operating protocol with startup, operation, and shutdown.
3. Compatible materials, sample limits, preparation, and instrument-specific PPE.
4. Detailed operating instructions.
5. Data saving, export, and basic interpretation.
6. Common failure modes and stop conditions.
7. Manufacturer manuals and supporting links.
8. Exercises and active instrument-specific improvement notes.

Lab-wide training, reservations, safety, access, files, and contact guidance should link to the current top-level pages rather than being copied into the tutorial.

## Migration Checklist

When moving a tutorial into `instruments/`:

* [ ] Preserve and improve the substantive operating guidance rather than wrapping old text in a new page.
* [ ] Add concise, fully linked Quick Actions for training, direct reservations, trained operation, detailed learning, manuals, and exercises; group instrument-page actions under **Get started** and **Learn and reference**.
* [ ] Add accessible educational context explaining what the instrument shows, common uses, result interpretation, and limits.
* [ ] Keep the trained-user reference concise and place the detailed training guide below it.
* [ ] Review compatible samples, unusual-sample routing, PPE, cleanup, and stop conditions against current lab-wide policy.
* [ ] Add data-saving, export, and file-location guidance.
* [ ] Add troubleshooting that distinguishes documented recovery from stop-and-contact-staff conditions.
* [ ] Connect the Level 1 exercise to a sample-library item or prepared kit when that system is ready.
* [ ] Identify useful example results that can also support future educational Materials Showcases.
* [ ] Update `instruments/index.md` only after the consolidated page is ready to replace the legacy destination.
* [ ] Check all local links, image paths, heading fragments, alternative text, and image dimensions.
* [ ] Decide whether the old tutorial should redirect, point to the new page, or retain limited compatibility content.

## Media Guidance

Use the established `.page-figure`, `.media-pair`, and related responsive styles instead of embedding new one-off width and float rules. Provide descriptive alternative text, useful captions, intrinsic width and height, and lazy loading for non-critical images.

Prefer controlled video for instructional motion. Existing GIFs may remain during migration, but new autoplaying animation should not be the only way to understand an essential step. Add missing source video, captions, transcripts, and reduced-motion improvements to the appropriate to-do list.

## Supporting Systems

The planned [sample library](../sample-library.html) will connect standard samples, cabinet locations, expected results, exercises, and replenishment. The planned Materials Showcase will build educational themes from approved samples, observations, instrument results, projects, courses, and events. Neither should duplicate the instrument's operating instructions.
