# Children's Day Gift Website 💛

An animated, personal website for June 1st (Children's Day).

## Open it

Double-click `index.html`, or run a local server:

```bash
cd ~/Documents/childrens-day-gift
python3 -m http.server 8080
```

Then visit: http://localhost:8080

## Personalize

Edit the **`CONFIG`** object at the top of `script.js`:

- `herName` — her name
- `yourSign` — how you sign the letter
- `letter` — your love letter
- `reasons` — why you adore her
- `memories` — your shared moments
- `heartWords` — words revealed in the heart game
- `finaleTitle`, `finaleSub`, `modalTitle`, `modalText` — closing messages
- `musicSrc`, `musicVolume` — background song path and loudness (see `audio/README.md`)

## Deploy (free)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `childrens-day-gift` folder
3. Share the link with her 🎁

Or use GitHub Pages / Vercel — same folder, zero build step needed.

## Features

- Animated loader & hero with floating balloons
- Particle starfield background
- Interactive envelope with typewriter letter
- Scroll-triggered card & timeline animations (GSAP)
- Tap-the-hearts mini game
- Confetti surprise modal
- Looping background music (starts on first tap; 🎵 button to pause)
- Mobile-friendly & reduced-motion support
