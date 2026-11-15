# Justin’s Project Arcade

A static personal portfolio with nine interactive arcade cabinets. Runs directly on GitHub Pages with no build step or dependencies to install.

## Preview

From this directory, run `python3 -m http.server 4173`, then open http://localhost:4173.

## Update the site

- Edit the `projects` array in `arcade.js` to change project names, descriptions, categories, artwork, and repository links. Set `featured: true` to include a project in the default resume lineup; all projects remain available under All. Add `highlights` for benchmark results and their measurement context. A `null` URL displays a contact link instead.
- Edit `index.html` for the introduction, player profile, and contact links.
- Edit `arcade.css` for the layout, cabinet styling, colors, and responsive breakpoints.
- Cabinet screen illustrations are local SVGs in `images/arcade/`.
- Fonts load from Google Fonts, with local system fallbacks.

The original `projects.html` and `About.html` URLs redirect to their corresponding sections. Sound is off by default and generated locally through Web Audio when enabled. Dialogs support keyboard activation, Escape to close, focus restoration, and reduced motion preferences.

Deploy the repository through its existing GitHub Pages workflow; no generated output directory is needed.
