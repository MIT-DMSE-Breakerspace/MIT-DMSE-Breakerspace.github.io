---
published: false
---

# Codex CLI Prompt — Provisional Staff-Guide Rollout

Start Codex CLI from the dedicated worktree:

```sh
cd '/Users/justinlavallee/Documents/GitHub/MIT-DMSE-Breakerspace-codex-staff-guides'
codex
```

Then paste the prompt below. It intentionally names repository files instead of relying on chat history.

```text
You are working on branch codex/staff-guide-provisional-rollout in the dedicated MIT-DMSE-Breakerspace-codex-staff-guides worktree. Do not edit or switch to the active codex/quick-guide-rollout worktree.

Objective: run the authorized 2026-08-10 provisional staff-training-guide composition pass. Produce fast, visibly incomplete, unpublished trainer-run-sheet prototypes that expose missing information and structural exceptions without turning proposals or guesses into training policy.

Before editing, read completely:
- _staff-training/provisional-draft-procedure.md
- _staff-training/provisional-draft-work-orders.md
- _staff-training/README.md
- _staff/quick-guides/README.md
- the relevant instrument entry in _staff/quick-guides/instrument-specifications.md
- the complete canonical instruments/<slug>.md page
- _staff-training/access-and-logistics.md
- _staff-training/lab-safety-orientation.md
- _includes/trainer/checklist-safety.md
- _includes/trainer/checklist-closeout.md
- the existing staff guide and Quick Guide prototype when present

Start with the FTIR compact prototype. Create:
- _staff-training/ftir-trainer-prototype.md
- _includes/trainer/checklist-safety-compact-prototype.md
- _includes/trainer/checklist-closeout-compact-prototype.md

Use published: false and the exact provisional warning/review-gap conventions in the procedure. Leave _staff-training/ftir.md and both production shared includes unchanged. Implement the FTIR reduction work order: approximately 17 FTIR-specific checks, six compact safety checks, seven separately checkable compact closeout actions, approximately 30 rendered checks total, broad timing bands, and no more than about 100 words of instrument-specific trainer notes. Preserve complete supported SOP/Level 1 coverage. Do not hit a word target by omitting a consequential action.

After FTIR, continue through the authorized first-wave prototypes in the rolling ledger: Phenom XL, Phenom Pure, XRD, and Instron. Move to the next instrument when one is blocked. Create supported portions and conspicuous review gaps; do not ask for a decision already recorded as unresolved and do not invent the answer. One instrument may break the current pattern. Record the exception instead of forcing every prototype to match FTIR or retrofitting earlier drafts during the same pass.

Hard constraints:
- The canonical instrument page is operating authority.
- Quick Guides and staff guides are sibling derivatives; neither is technical authority for the other.
- Never add a technical claim, setting, control label, quality threshold, safety rule, recovery cycle, access behavior, or final state absent from the canonical page or an explicitly approved Level 1 decision.
- A proposed curriculum boundary remains visibly proposed.
- Use review-gap blocks for missing decisions or evidence. Never use vague TODOs or plausible filler.
- Do not edit canonical instrument pages, published or provisional Quick Guides, current live staff guides, production shared includes, LibCal content, or instrument-training-template.md during prototype composition.
- Do not publish, install, or describe a prototype as approved for delivery.
- Do not record credentials, participant information, usernames, local account details, or private identifiers.
- Keep trainer prose terse. This is a live run sheet, not an alternate SOP, manual, curriculum essay, or narration script.
- Participants use the current approved printed Quick Guide. Avoid section numbers and do not imply an unpublished SOP/map prototype is installed.
- First-time trainees do not yet have Moira-controlled workstation access; preserve the trainer-login-then-closeout sequence where applicable. For comms-only groups, state no access grant.

FTIR cautions that must survive:
- Level 1 uses two trainer-selected solids; liquids and the volatiles cover are later/staff-guided.
- Compare the two spectra at the level of overall patterns and measurement quality; do not teach database identification as the core outcome.
- Gloves for sample/crystal/tower/tips/wipes/solvent; no gloves on keyboard/mouse/screen.
- Background on a clean, dry, bare, unclamped crystal.
- Start Collection is required only when preview is enabled.
- Observe contact/clutch, quality before unloading, individual saving/retrieval, cleaning between samples, participant-led shutdown, covered/clamped crystal, OMNIC closed, workstation logged off, and FTIR left powered on.
- Do not invent a good-background acceptance criterion, failed-connection appearance, atmospheric band positions, complete background-redo procedure, or “recognizable spectrum” threshold.

After each prototype:
1. compare every runnable technical instruction with the canonical page;
2. count instrument-specific, shared, and total checkboxes and report the counts;
3. report source/rendered word counts when available;
4. run bundle exec jekyll build and script/validate-html;
5. update _staff-training/provisional-draft-work-orders.md with status, counts, validation, review gaps, and structural lessons;
6. commit one instrument at a time with a descriptive commit. The FTIR commit may include its two prototype shared includes;
7. continue to another authorized first-wave prototype without trying to perfect the blocked one.

At the end, summarize prototypes created, validation results, checklist/word measurements, unresolved operational decisions, structural exceptions, and recommended review order. Do not promote or replace any live guide.
```
