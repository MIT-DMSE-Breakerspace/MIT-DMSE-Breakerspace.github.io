# Instrument Pages README

This folder is for integrated instrument pages. These pages are intended to become the main user-facing destination for each lab instrument, combining the short operational reference, training/tutorial material, reservation links, manuals, exercises, and instrument-specific to-do lists.

The older `tutorials/` pages can remain in place during the transition. The working model is:

* `instruments/sem.md`: a shared SEM hub for choosing between SEM instruments and reviewing common SEM concepts.
* `instruments/phenom-xl.md`: the Phenom XL operating page, written only for the XL.
* `instruments/phenom-pure.md`: the Phenom Pure operating page, written only for the Pure.

For instruments that do not need to be split into multiple related tools, one page such as `instruments/ftir.md` may be enough.

## Content Strategy

Instrument pages should be complete enough to use at the instrument without requiring the user to click away for basic safety, setup, loading, shutdown, or troubleshooting steps.

The top of each operating page should work as a quick reference for trained users. The detailed operating instructions should work as a training guide for new users, with images, GIFs, and practical context.

Avoid mixing instrument-specific steps when confusion could cause damage. For example, the Phenom XL and Phenom Pure have different sample-height rules, so they now have separate operating pages.

## Shared Includes

Shared SEM text lives in `_includes/sem/`. These snippets are inserted into pages using Jekyll include tags, for example:

```liquid
{% include sem/common-safety.md %}
```

Current SEM includes:

* `_includes/sem/common-safety.md`: shared material rules, glove use, loose-particle warning, and ask-staff language.
* `_includes/sem/sample-prep-at-a-glance.md`: shared sample-prep table.
* `_includes/sem/quick-imaging-settings.md`: shared imaging starting points.
* `_includes/sem/detailed-training-intro.md`: standard paragraph explaining that the lower section is training-guide content.
* `_includes/sem/live-sem-workflow.md`: shared Phenom software workflow, including project labels, NavCam, LiveSEM, and image acquisition.
* `_includes/sem/data-and-analysis.md`: shared basic image data handling.
* `_includes/sem/common-failure-modes.md`: shared SEM troubleshooting table.

Update an include when the same language should change on every page that uses it. Update the instrument page directly when the change applies only to that instrument.

## Link And Image Paths

The include files are inserted into pages before the site is built. Relative links inside an include are interpreted relative to the final page location, not relative to `_includes/`.

Because the SEM includes are currently used by pages in `instruments/`, image links inside the includes should usually start with:

```text
../assets/img/tutorials/sem/
```

If an include is later used by a page in another folder, check every relative link after moving it.

## Anchors

Many instrument pages use explicit anchors such as:

```html
<a name="materials"></a>
```

These anchors make the page index and workstation shortcuts stable even if heading text changes. Do not include the same shared snippet twice on one page, because that can create duplicate anchors.

## Adding A New Instrument Page

1. Create a new Markdown file in `instruments/`, such as `instruments/xrd.md`.
2. Start with front matter:

```yaml
---
layout: default
---
```

3. Add an overview, quick actions, page index, standard operating protocol, compatible materials, detailed operating instructions, manuals, exercises, and to-do list.
4. If several pages need the same text, create a small include under `_includes/<instrument-or-family>/`.
5. Keep instrument-specific safety-critical steps on the instrument page itself.
6. Validate local links and image paths before making the page live.

## Transition Notes

These pages are not automatically public just because they exist in this folder, but they can be accessed if someone knows the URL after the site builds. Add links from `lab.md`, `tutorials/`, or site navigation only when the page is ready for users.

The intended future pattern is that instrument workstations open the relevant instrument page directly, for example:

* Phenom XL workstation: `instruments/phenom-xl.html`
* Phenom Pure workstation: `instruments/phenom-pure.html`

The shared hub, such as `instruments/sem.html`, is best linked from the lab page and used by users who are deciding which instrument to reserve.
