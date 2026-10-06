# Manisha Dhar — Biology & Career Guidance

## Product direction

A single-page portfolio for Manisha Dhar, positioned as a calm, trusted biology educator and post-NEET career guide. The site borrows the reference’s editorial restraint and movement-like sequencing without copying its brand, content, or artwork.

## Design system

- **Design movement:** quiet editorial modernism with a natural-science sensibility.
- **Core principles:** spacious pacing, precise typography, human warmth, and small moments of visual curiosity.
- **Color philosophy:** white keeps the page bright and personal; sunflower yellow brings optimism and a study-light warmth; purple becomes the ownable signal for confidence, imagination, and guidance; ink remains a quiet editorial counterpoint.
- **Layout paradigm:** a vertical narrative punctuated by full-width horizontal bands and asymmetric editorial columns rather than centered card grids.
- **Signature elements:** spaced-out all-caps section labels, oversized sentence fragments that read like a manifesto, and a line-drawn cell/orbit motif that becomes a recurring visual anchor.
- **Interaction philosophy:** interactions feel like gentle invitations—horizontal reading bands, understated underlines, and low-friction anchored navigation instead of noisy widgets.
- **Animation:** small entrance fades and translate-ups on scroll; a looping 2D orbit around the hero cell; floating cell dots, a gentle portrait-slot bob, and understated hover underlines. Respect `prefers-reduced-motion` by removing transforms and infinite movement.
- **Typography system:** display headlines use Instrument Serif for a soft, reflective voice; interface and body text use DM Sans for crisp educational clarity. Headings are large and occasionally letter-spaced, but body copy stays compact and readable.
- **Brand essence:** Biology made legible, and next steps made less overwhelming, for students and families navigating NEET. Personality: grounded, luminous, reassuring.
- **Brand voice:** specific, calm, and never performative. Example lines: “Good guidance makes the next question easier to ask.” / “After the result, you still deserve a map.”
- **Wordmark & logo:** a compact “MD” monogram built from two intersecting orbital paths, paired with a small sunflower dot; the mark is used as a simple inline SVG rather than default text alone.
- **Signature brand color:** purple `#6d43a8`, balanced by white `#fffdf8` and sunflower yellow `#f5d447`.

## Implementation approach

- **Frontend:** no-framework static HTML/CSS/JavaScript for a fast, portable portfolio.
- **Files:** `index.html` contains the semantic page and inline SVG mark; `styles.css` holds the visual system and responsive behavior; `script.js` handles navigation, scroll reveal, reduced-motion-safe ambient interactions, and the enquiry form; `public/manus-routes.json` describes the single route.
- **Serving:** a tiny Node server listens on `0.0.0.0:3000` for Preview and serves the committed static files.
- **Assets:** abstract biology visuals are built from CSS and inline SVG geometry; the hero includes a clearly labelled personal portrait slot so Manisha’s real photo can be added without inventing a likeness.
- **Future-ready contact:** the enquiry form provides a complete front-end interaction and a clear place to connect an inbox or form backend later; no server or database is required for this first version.
