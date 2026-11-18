# Breakerspace website development guidance

This repository is the canonical source for the public MIT DMSE Breakerspace website. Read `README.md` before substantial work and follow the more specific planning or authoring guide it identifies for the area being changed.

## Execution environment

- On this workstation, open the WSL-native clone as a WSL Codex project and run all Ruby, Bundler, Jekyll, script, and Git commands inside Ubuntu 24.04.
- Use the repository through its Linux path inside WSL. Do not operate on the Windows checkout from WSL, because Windows line-ending behavior can make the worktree appear broadly modified. Do not run this site's Ruby/Jekyll workflow in native Windows.
- Use the rbenv-managed Ruby environment already configured for WSL login shells. The verified baseline is Ruby 3.4.11, Bundler 4.0.23, and Jekyll 4.4.1; prefer versions selected by the repository and lockfile if they change later.
- If a task starts outside the saved WSL project or cannot access the Linux worktree, reopen it in the WSL project rather than changing Windows sandbox or WSL security policy.

## Development workflow

- Begin routine work from an up-to-date, clean `main`, create a task-specific branch, and use a reviewed pull request. Do not push directly to `main` or publish the site unless the user explicitly authorizes that release action.
- Run `script/bootstrap` only when dependencies need installation or repair.
- Build with `bundle exec jekyll build`. The repository's existing Dart Sass `@import` deprecation messages are warnings, not build failures.
- Preview with `bundle exec jekyll serve --host 127.0.0.1` when interactive browser testing is useful.
- Use Chrome through the ChatGPT extension for responsive, interactive, authenticated, or user-visible verification. Use the Codex in-app browser for background read-only research that does not require the user's browser session.

## Required verification

- Run `git diff --check` and `bundle exec jekyll build` before final handoff for site changes.
- Run `script/check-sop-contract` when an instrument page changes and `script/check-quick-guide-sources` when a Quick Guide changes.
- Check internal links and heading fragments when navigation or anchors change. Review responsive behavior, alternative text, media dimensions, and lazy loading when media or layout changes.
- For publication-package changes, follow the importer contract and cross-repository deployment order documented in `README.md`; never copy the operational database, upload tree, native instrument files, internal notes, identities, or other private fields into this public repository.

## Public-repository safety

- Treat every tracked file, including underscore-prefixed planning directories, as potentially public. Never commit credentials, access codes, private student information, sensitive physical-security details, proprietary identifying fixtures, or workstation-specific secrets.
- Keep unrelated refactors out of focused changes and preserve existing public URLs, safety requirements, accessibility behavior, and established site patterns.
