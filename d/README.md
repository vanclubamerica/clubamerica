# Club América — Van High School

> Official club website for Club América at Van High School, Van, TX.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server (opens at http://localhost:5173)
npm run dev
```

---

## 🛠️ Tech Stack

| Tool            | Purpose                          |
|-----------------|----------------------------------|
| **React 18**    | UI components (functional)       |
| **Vite 5**      | Lightning-fast dev + build       |
| **Tailwind CSS**| Utility-first styling            |
| **React Router**| Client-side routing (HashRouter) |
| **Lucide React**| Clean icon set                   |

---

## 📁 Project Structure

```
club-america-van/
├── index.html              ← Root HTML entry
├── vite.config.js          ← Vite config (base: './')
├── tailwind.config.js      ← Tailwind theme + custom colors
├── postcss.config.js       ← PostCSS (Tailwind + Autoprefixer)
├── package.json
│
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Routes + layout
    ├── index.css           ← Global styles + Tailwind directives
    │
    ├── components/
    │   ├── Navbar.jsx          ← Sticky nav + hamburger menu
    │   ├── Footer.jsx          ← Three-column footer
    │   ├── AnnouncementCard.jsx ← Reusable announcement card
    │   └── CalendarEmbed.jsx   ← Google Calendar iframe wrapper
    │
    └── pages/
        ├── Home.jsx            ← Hero + quick nav + events + CTA
        ├── About.jsx           ← Mission, values, officers, how to join
        ├── Announcements.jsx   ← Searchable + filterable cards
        └── Calendar.jsx        ← Google Calendar embed
```

---

## 🎨 Custom Design Tokens

Defined in `tailwind.config.js` and used throughout:

| Token          | Value     | Usage               |
|----------------|-----------|---------------------|
| `ca-red`       | `#B91C1C` | Primary brand color |
| `ca-gold`      | `#D97706` | Accent / CTA        |
| `ca-dark`      | `#0F172A` | Hero backgrounds    |
| `ca-cream`     | `#FDFCF8` | Page background     |
| Font `display` | Barlow Condensed | Headlines  |
| Font `heading` | Barlow           | UI labels  |
| Font `body`    | Outfit           | Body text  |

---

## 🚀 Build for Production

```bash
npm run build
```

Outputs to `/dist`. The site uses `base: './'` in `vite.config.js`, making all assets use relative paths — safe for GitHub Pages at any subpath.

---

## 🌐 Deploy to GitHub Pages

### Option A — Manual (Simple)

1. Run `npm run build`
2. Push the `/dist` folder contents to the `gh-pages` branch of your repo
3. In GitHub repo → Settings → Pages → select `gh-pages` branch → Save

### Option B — Automated (Recommended)

Install the deploy package:

```bash
npm install -D gh-pages
```

Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then deploy:

```bash
npm run deploy
```

> **Note:** The site uses `HashRouter` so URLs like `/#/about` work without server config.
> If you use a **custom domain** (e.g., `clubamericavan.com`), you can switch to `BrowserRouter`
> and set `base: '/'` in `vite.config.js`.

---

## ✏️ Updating Content

| What                  | Where to edit                              |
|-----------------------|--------------------------------------------|
| Announcements         | `src/pages/Announcements.jsx` → `ANNOUNCEMENTS` array |
| Upcoming events       | `src/pages/Home.jsx` → `UPCOMING_EVENTS` array |
| Officers              | `src/pages/About.jsx` → `OFFICERS` array |
| Google Calendar URL   | `src/components/CalendarEmbed.jsx` → `CALENDAR_SRC` |
| Contact email         | Search `contact@tpvan.com` across files   |
| Colors / fonts        | `tailwind.config.js` + `src/index.css`   |

---

## 📬 Contact

**Club América — Van High School**  
985 N Maple St, Van, TX 75790  
contact@tpvan.com  
Career Center A — Win Time Fridays
