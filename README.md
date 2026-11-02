# Zhe Dong · 董哲

Personal academic website: https://adam-thu.github.io/

A minimal, responsive Jekyll site, hosted on GitHub Pages. The main pages share a small CSS stylesheet. Core content renders without JavaScript; an optional icon button switches between a soft Light palette (default) and Dark mode and remembers the choice locally. The Manrope font is served locally under the SIL Open Font License (see `assets/fonts/manrope-OFL.txt`). The homepage uses a lightly retouched graduation portrait (`images/portrait.webp`); the earlier illustrated avatar is kept in the repository.

## Edit content

- `_pages/about.md`: introduction and news.
- `_data/profile.yml`: research interests and education, shared by the homepage and CV.
- `_config.yml`: name, affiliation, email, and GitHub profile.
- `_data/navigation.yml`: navigation links.
- `_pages/cv.md`: CV structure; `/cv-json/` redirects here.
- `_publications/`: publication entries with YAML front matter. The Publications page lists them automatically.
- `_posts/`: dated blog posts. The Writing page lists them automatically.
- `_data/cv.json`: machine-readable CV; keep it in sync when updating biographical information.
- `assets/css/site.css`: layout, typography, mobile styles, and print styles.

## Preview locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/. The CV also has print styles for browser printing or saving as PDF.

Pull requests run a GitHub Pages Jekyll build and save a `website-preview` artifact. Merging into the configured Pages source branch publishes through the repository's existing GitHub Pages configuration.

## Credits

Originally based on [AcademicPages](https://github.com/academicpages/academicpages.github.io) and Minimal Mistakes. The original MIT license is retained. The current visual design uses custom layouts and styles.
