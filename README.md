# Saumya Roy — portfolio (CaffineAddic.github.io)

Static site. No build step, no Jekyll. `.nojekyll` makes GitHub Pages serve as-is.

## Files (all at repo root)
- `index.html`, `style.css`, `main.js`
- `.nojekyll`, `LICENSE` (MIT)
- `assets/` — CV, headshot, favicon, and all reports/papers (PDF)

## ⚠️ Replace these 6 placeholder PDFs with your real files
The build ships labelled placeholders so no link is broken. Overwrite each in
`assets/reports/` (keep the exact filename):

| Your file                                | → save into assets/reports/ as |
|------------------------------------------|--------------------------------|
| Different clustering methonds...pdf       | clustering-methods.pdf         |
| Final/Final thesis.pdf                    | las-mogpr-thesis.pdf           |
| Final/Thesis presentation.pdf             | las-mogpr-slides.pdf           |
| Internship_CVNN/doct.pdf                  | polsar-cvnn-thesis.pdf         |
| Internship_CVNN/ISGNS_CVNN_29NOV.pdf      | polsar-cvnn-slides.pdf         |
| Review_NNP-water.pdf                      | nnp-water-review.pdf           |

Already bundled for real: opec-network.pdf, combustion-fft-wavelet.pdf,
maml-fomaml(.pdf/-slides.pdf), nanochat-mimic.pdf, hrv-stress.pdf, plus the
health-systems essays and the CV.

## Editing
- Add a project: copy an `<article class="card">` block in `index.html`.
- Timeline entries carry `edu` (left) or `exp` (right) classes.
- Colors/fonts are CSS variables at the top of `style.css`.
