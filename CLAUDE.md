# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page marketing site for Ascendant Ventures built with vanilla HTML, CSS, and JavaScript. No build tools or framework dependencies.

## Development

No build step required. Open `index.html` directly in a browser to preview changes.

All styles are inline in `<style>` tags within `index.html`. All JavaScript is inline in `<script>` tags at the bottom of `index.html`.

## External Dependencies (loaded via CDN)

- **Google Fonts**: Outfit (display) and JetBrains Mono (monospace)
- **Lucide Icons**: Icon library, initialized via `lucide.createIcons()`
- **Anime.js**: Scroll reveal animations
- **TSParticles**: Animated particle background

## Key CSS Variables

Design tokens are defined in `:root` including colors (`--accent: #00e5cc`), typography, spacing, and breakpoints. All theming should use these variables.

## Deployment

Deployed to Netlify. No build command needed; publish directory is project root (`.`).
