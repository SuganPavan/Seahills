# Sea Hills Hotels & Resorts — Homepage (First Two Sections)

A luxury tourism and hospitality web experience for **Sea Hills Hotels & Resorts**, Andaman & Nicobar Islands. Designed and built strictly following the supplied reference template.

---

## 🌴 Project Architecture

This project is built using:
- **Astro 4.x** (Static site generation, zero unnecessary JavaScript)
- **TypeScript** (Strict type checking)
- **Tailwind CSS** (Utility-first styling with customized luxury brand palette)
- **Playfair Display & Plus Jakarta Sans** (Google Fonts for high-end hospitality typography)

```
D:\SEA_SHELL_HOTEL_ANDAMAN/
├── public/
│   └── favicon.svg                  # Brand sun & palm crest icon
├── src/
│   ├── components/
│   │   ├── Header.astro             # Frosted glass header, logo, nav & Book Now CTA
│   │   ├── Hero.astro               # Section 1: Discover the Magic of Andaman
│   │   └── ExploreDestinations.astro# Section 2: Explore Andaman & 6 Island Cards
│   ├── layouts/
│   │   └── Layout.astro             # Root HTML layout, SEO tags, typography
│   └── pages/
│       └── index.astro              # Homepage containing ONLY Section 1 & Section 2
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── index.html                       # Standalone high-fidelity preview (open directly in browser)
```

---

## 🧭 Implemented Sections (As Requested)

### 1. Navigation / Header
- **Brand Identity**: Sea Hills palm & sun emblem, serif wordmark, and `"HOTELS & RESORTS"` subtitle.
- **Menu Items**: Home (active), Destinations (with dropdown for all 6 islands), Packages, Experiences, Gallery, Reviews, Contact.
- **CTA**: `"Book Now →"` pill button in warm amber gold gradient with hover elevation.
- **Mobile Menu**: Responsive hamburger toggle with full-screen frosted glass flyout.

### 2. SECTION 1: Discover the Magic of Andaman (Hero)
- **Cinematic Visuals**: Full-bleed panoramic Andaman turquoise sea, lush tropical headland, and crystal-clear waters.
- **Readability**: Multi-stop dark gradient overlay preserving text legibility.
- **Typography**: Display serif heading *"Discover the Magic of Andaman"* with subtle amber accents.
- **Tagline Badge**: *"Two Islands • Distinct Experiences • One Unforgettable Stay"*.
- **Supporting Copy**: *"Experience the breathtaking beauty of turquoise waters, pristine beaches, tropical islands and unforgettable adventures in the Andaman Islands."*
- **Primary CTA**: `"Explore Destinations ↓"` with smooth scroll to Section 2.
- **Interactive Feature**: Floating circular frosted glass `"Watch Video"` trigger matching the template.

### 3. SECTION 2: Explore Andaman (Destination Exploration)
- **Title**: *"— Explore Andaman —" / "Choose Your Destination"*.
- **Nautical Aesthetic**: Subtle spinning compass rose watermark and curved sea transition.
- **Island Map & Catamaran Bridge**:
  - Interactive pill markers for **Port Blair** (*City • Heritage • Culture*) and **Havelock** (*Beaches • Adventure*).
  - High-speed catamaran cruise route indicator showcasing inter-island transfers.
- **6 Destination Cards Grid**:
  1. **Havelock Island (Swaraj Dweep)** — Asia's best Radhanagar Beach, Elephant Beach, scuba diving.
  2. **Neil Island (Shaheed Dweep)** — Natural Rock Bridge, relaxed vibe, shallow coral reefs, sunset at Laxmanpur.
  3. **Port Blair (Sri Vijaya Puram)** — Historic Cellular Jail Memorial, Corbyn's Cove, capital heritage.
  4. **Baratang Island** — Dense mangrove creek boat safari, limestone caves, mud volcanoes.
  5. **Ross Island (Netaji Subhas Chandra Bose Island)** — Colonial ruins reclaimed by banyan roots & spotted deer sanctuary.
  6. **North Bay Island** — Iconic lighthouse from the ₹20 currency note, coral reefs, sea walking & glass boats.

---

## 🚀 How to Run & Preview

### Option A: Immediate Direct Preview
Double click or open `D:\SEA_SHELL_HOTEL_ANDAMAN\index.html` directly in Google Chrome, Microsoft Edge, or any modern web browser.

### Option B: Run with Astro & Node.js
```bash
cd D:\SEA_SHELL_HOTEL_ANDAMAN
npm install
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.
