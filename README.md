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
│   └── ali-headshot.png    # Profile photo
├── favicon.svg             # AB monogram favicon
├── styles.css              # Complete design system
├── app.js                  # Mobile nav, scroll behaviour, blog feed
├── CNAME                   # Custom domain config
├── robots.txt              # SEO crawl directives
└── README.md               # This file
```

---

## Brand Guidelines

### Positioning
**"Enterprise Salesforce Architect & Technology Leader"**

Tone: Approachable Leader — warm, professional, team-focused, technically credible.

### Brand Mark: AB Lettermark

The site uses a bold AB lettermark as the primary brand mark. The design represents:
- **Personal brand** — Initials unmistakably identify the owner
- **Integration** — Letters share space intelligently
- **Technology leadership** — Clean, modern, Apple-inspired aesthetic

**Design Principles:**
- **Clear** — One focal point, visible at 16×16px
- **Obvious** — Letters are universally understood, no interpretation needed
- **Intentional** — Every stroke has purpose, gold accent adds warmth
- **Modern** — Geometric precision, contemporary confidence

**Design Elements:**
- Navy rounded square container (rx="7" for smooth corners)
- Bold white "A" — Geometric triangle with negative space counter
- Bold white "B" — Two bumps sharing vertical stem, matching weight
- Gold crossbar on "A" (#d69e2e) — Signature touch of warmth

**Usage:**
- Navigation logo (36px mark + text)
- Favicon (`favicon.svg`)
- Mobile: Shows only mark on very small screens (< 480px)

**Files:**
- `favicon.svg` — SVG favicon
- Inline SVG in navigation across all pages

### Color Palette

#### Primary (Navy & Blue)
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Navy | `#1a365d` | `--primary` | Headings, footer, primary buttons |
| Navy Dark | `#0f2744` | `--primary-dark` | Hover states |
| Medium Blue | `#2c5282` | `--secondary` | Secondary elements |
| Bright Blue | `#3182ce` | `--accent` | Links, informational accents |
| Light Blue | `#4299e1` | `--accent-light` | Hover states |

#### Warm Accents (Gold & Orange)
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Gold/Amber | `#d69e2e` | `--accent-warm` | Primary CTAs, featured elements |
| Gold Dark | `#b7791f` | `--accent-warm-dark` | Text on light backgrounds |
| Light Gold | `#f6e05e` | `--accent-warm-light` | Subtle highlights, selection |
| Orange | `#ed8936` | `--accent-pop` | Hover states, badges, emphasis |
| Orange Dark | `#dd6b20` | `--accent-pop-dark` | Text/borders |

#### Neutrals
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Text Primary | `#1a202c` | `--text-primary` | Body text |
| Text Secondary | `#4a5568` | `--text-secondary` | Descriptions |
| Text Tertiary | `#718096` | `--text-tertiary` | Meta, timestamps |
| Background | `#ffffff` | `--background` | Page background |
| Surface | `#f7fafc` | `--surface` | Cards, sections |
| Border | `#e2e8f0` | `--border` | Dividers, card borders |

### Color Usage Ratios
- **80%** Navy/Blue family (foundation)
- **15%** Gold/Amber (warmth, key actions)
- **5%** Orange (pop, emphasis)

### Typography
- **Font:** System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...`)
- **Base size:** 18px (`--text-lg`)
- **Line height:** 1.6 body, 1.8 blog content
- **Code:** `'Fira Code', 'Consolas', monospace`

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
- `.hero-cta-warm` — Gold/amber button (primary CTAs)

#### Blog
- `.blog-card` — Post card in grid
- `.blog-featured-card` — Large featured post
- `.blog-featured-card-warm` — Featured with gold accent border
- `.callout` + `.callout-info|warning|success|warm` — Highlight boxes
- `.blog-post-illustration` — SVG illustration container

#### Badges
- `.badge-featured` — Gold "Latest/Featured" badge
- `.badge-new` — Orange "New" badge
- `.blog-category` — Blue category label
- `.blog-category-warm` — Gold category variant

#### Utilities
- `.text-warm`, `.text-pop` — Warm accent text colors
- `.bg-warm`, `.bg-pop` — Warm accent backgrounds
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
             blog-illustration-primary (navy)
             blog-illustration-secondary (medium blue)
             blog-illustration-accent (bright blue)
             blog-illustration-warm (gold)
             blog-illustration-pop (orange)
             blog-illustration-light (gray)
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

<!-- Variants: callout-info (blue), callout-warning (yellow),
     callout-success (green), callout-warm (gold) -->
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
- System fonts (no external font loading)
- SVG illustrations and favicon (no image dependencies for branding)

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
