# Ali Beydoun - Professional Website

Personal professional website for Ali Beydoun, Technology Director specialising in enterprise Salesforce solutions.

**Live:** [alibeydoun.info](https://alibeydoun.info)

---

## Site Architecture

```
alibeydoun.info/
├── index.html              # Home - Hero, highlights, expertise
├── about.html              # Career philosophy & journey
├── experience.html         # Industry timeline, capabilities
├── blog/
│   ├── index.html          # Blog landing page
│   └── posts/
│       ├── _template.html  # Blog post template (copy for new posts)
│       ├── welcome.html    # First post
│       └── *.html          # Individual blog posts
├── assets/
│   ├── ali-headshot.png    # Profile photo
│   ├── logo.png            # Official AB logo (dark version for light backgrounds)
│   └── logo-white.png      # White logo variant (for dark backgrounds)
├── favicon (uses logo.png) # Browser tab icon
├── styles.css              # Complete design system
├── app.js                  # Mobile nav, scroll behaviour, blog feed
├── CNAME                   # Custom domain config
├── robots.txt              # SEO crawl directives
└── README.md               # This file
```

---

## Brand Identity & Design System

The visual identity for **Ali Beydoun** reflects a modern, professional, and technical persona, suited for Enterprise Salesforce Solutions.

### Brand Positioning
**"Technology Director | Enterprise Salesforce Solutions"**

Tone: Approachable Leader — warm, professional, team-focused, technically credible.

### Color Palette

| Color Name | Hex Code | CSS Variable | Usage |
|:-----------|:---------|:-------------|:------|
| **Navy** | `#001f3f` | `--brand-navy` | Primary backgrounds, main headings |
| **Electric Blue** | `#0074D9` | `--brand-blue` | Accents, links, buttons, CTAs |
| **Cool Grey** | `#AAAAAA` | `--brand-grey` | Secondary text, borders, subtitles |
| **White** | `#FFFFFF` | `--brand-white` | Card backgrounds, inverted text |

### Typography

**Primary Font:** Montserrat (Geometric Sans-Serif)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap" rel="stylesheet">
```

| Weight | Usage |
|--------|-------|
| **700-800** (Bold/ExtraBold) | Main headers (h1, h2), logo text |
| **400** (Regular) | Body text |
| **300** (Light) | Taglines, secondary details |

### Logo Assets

The AB monogram logo features the letters interlocked with a cloud element:

| File | Usage |
|------|-------|
| `assets/logo.png` | Navigation on light backgrounds |
| `assets/logo-white.png` | Hero sections on dark backgrounds |

**Brand Lockup Format:**
```
[LOGO]  ALI BEYDOUN
        Technology Director | Enterprise Salesforce Solutions
```

- Name: Montserrat Bold, uppercase, white on dark backgrounds
- Subtitle: Montserrat Regular, Cool Grey (#AAAAAA)
- Separator: Pipe character `|`

### CSS Variables

```css
:root {
    /* Brand Colors */
    --brand-navy: #001f3f;
    --brand-blue: #0074D9;
    --brand-grey: #AAAAAA;

    /* Typography */
    --font-brand: 'Montserrat', sans-serif;

    /* Accent (Electric Blue replaces gold) */
    --accent-warm: #0074D9;
    --accent-warm-dark: #005bb5;
}
```

### Extended Palette

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Navy | `#1a365d` | `--primary` | Hero backgrounds, footer |
| Medium Blue | `#2c5282` | `--secondary` | Secondary elements |
| Bright Blue | `#3182ce` | `--accent` | Links, info accents |
| Text Primary | `#1a202c` | `--text-primary` | Body text |
| Text Secondary | `#4a5568` | `--text-secondary` | Descriptions |
| Surface | `#f7fafc` | `--surface` | Cards, sections |
| Border | `#e2e8f0` | `--border` | Dividers |

---

## CSS Architecture

### Design Tokens
All design values are CSS custom properties in `:root`:
- Colors: `--primary`, `--accent`, `--accent-warm`, etc.
- Spacing: `--space-xs` (0.5rem) through `--space-3xl` (6rem)
- Typography: `--text-xs` (0.75rem) through `--text-5xl` (3rem)
- Shadows: `--shadow-sm` through `--shadow-xl`
- Radius: `--radius-sm` (4px) through `--radius-full` (9999px)

### Key CSS Classes

#### Layout
- `.container` — Max-width 1200px, centered
- `.container-narrow` — Max-width 800px (blog posts)
- `.section` — Standard section padding
- `.section-alt` — Section with gray background

#### Buttons
- `.hero-cta` — Navy button (default)
- `.hero-cta-warm` — Electric Blue button (primary CTAs)

#### Blog
- `.blog-card` — Post card in grid
- `.blog-featured-card` — Large featured post
- `.blog-featured-card-warm` — Featured with blue accent border
- `.callout` + `.callout-info|warning|success` — Highlight boxes
- `.blog-post-illustration` — SVG illustration container

#### Badges
- `.badge-featured` — Blue "Latest/Featured" badge
- `.badge-new` — Blue "New" badge
- `.blog-category` — Blue category label

#### Utilities
- `.text-warm` — Electric Blue accent text
- `.bg-warm` — Electric Blue accent background
- `.text-center`, `.mb-md`, `.mt-lg`, etc. — Common utilities

---

## Creating Blog Posts

### Quick Start
1. Copy `blog/posts/_template.html` to `blog/posts/your-slug.html`
2. Update all `[PLACEHOLDER]` values
3. Add your content
4. Add a card to `blog/index.html`
5. Add post to `blogPosts` array in `app.js` for homepage feed

### SEO Checklist
Each post should have:
- [ ] Unique `<title>` (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Article meta (published_time, section, tags)
- [ ] JSON-LD structured data
- [ ] Semantic HTML (article, header, h1-h2)

### Post Illustration
Add custom SVG illustrations after the header:
```html
<div class="blog-post-illustration">
    <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Use these classes for brand colors:
             blog-illustration-primary (navy #1a365d)
             blog-illustration-secondary (medium blue #2c5282)
             blog-illustration-accent (electric blue #0074D9)
             blog-illustration-light (cool grey #AAAAAA)
        -->
    </svg>
</div>
```

### Callout Boxes
```html
<div class="callout callout-info">
    <p class="callout-title">Info Title</p>
    <p>Content here.</p>
</div>

<!-- Variants: callout-info (blue), callout-warning (amber),
     callout-success (green) -->
```

---

## Deployment

### GitHub Pages
- Hosted on GitHub Pages
- Custom domain: `alibeydoun.info` (configured in CNAME)
- Auto-deploys on push to `main` branch

### To Deploy
```bash
git add -A
git commit -m "Your commit message"
git push origin main
```

Changes typically go live within 1-2 minutes.

---

## Development Notes

### Mobile Responsiveness
- Mobile-first approach
- Breakpoints: 640px, 768px
- Navigation collapses to hamburger on mobile
- Blog category pills scroll horizontally on mobile

### Performance
- No build step required (vanilla HTML/CSS/JS)
- Minimal JavaScript (nav toggle, scroll effects, blog feed)
- Montserrat font via Google Fonts (preconnect for fast loading)
- System fonts as fallback
- PNG logo assets with favicon from logo.png

### Homepage Blog Feed
The homepage displays the latest 2 blog posts dynamically from the `blogPosts` array in `app.js`. To add a new post to the feed:

```javascript
// In app.js, add to the beginning of blogPosts array:
{
    title: 'Your Post Title',
    slug: 'your-post-slug',  // matches filename without .html
    category: 'Category Name',
    date: 'Month YYYY',
    excerpt: 'Short description for the card.',
    readTime: 'X min read',
    featured: true  // true for first/latest post
}
```

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties required
- Flexbox and Grid layout

---

## Contact

- **Website:** [alibeydoun.info](https://alibeydoun.info)
- **LinkedIn:** [linkedin.com/in/ali-beydoun-salesforce](https://www.linkedin.com/in/ali-beydoun-salesforce/)
