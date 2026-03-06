# 🎬 MoodWatch

> Movies for every mood.

MoodWatch is an AI-powered movie recommendation app. Pick how you're feeling, optionally describe your vibe, and get 5 movie recommendations tailored to your mood

---

## ✨ Features

- 8 mood cards to match how you're feeling
- Optional free-text input to give Claude more context
- AI-generated movie recommendations via Claude API
- Real movie posters and data via TMDB API
- Dark mode toggle
- Fully responsive

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [Claude API](https://www.anthropic.com/) — Mood to movie matching
- [TMDB API](https://www.themoviedb.org/) — Movie data and posters
- [Vercel](https://vercel.com/) — Deployment

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/moodwatch.git
cd moodwatch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
ANTHROPIC_API_KEY=your_claude_api_key
TMDB_API_KEY=your_tmdb_api_key
```

### 4. Run the dev server

```bash
npm run dev
```
