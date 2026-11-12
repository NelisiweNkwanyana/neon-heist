# NEON HEIST: put it on GitHub and your portfolio

This folder has three parts:

| Folder | What it is | Where it goes |
|---|---|---|
| `neon-heist/` | The full Godot project (latest version: guns + character select), with README, screenshots and `.gitignore` | GitHub repo **neon-heist** |
| `neon-heist-play/` | The game exported for the web | GitHub repo **neon-heist-play** → GitHub Pages (the play link) |
| `portfolio/` | Text, images and a ready-made card for your portfolio site | Your portfolio website |

Replace `YOUR-USERNAME` with your GitHub username (and `YOUR NAME` with your name) in
`neon-heist/README.md`, `neon-heist-play/README.md` and `portfolio/NeonHeistCard.tsx` first.

---

## Step 1: Put the code on GitHub
1. On github.com click **New repository**. Name it `neon-heist`, set it to **Public**, and do NOT tick "Add a README".
2. In Terminal (the `neon-heist` folder already contains your git history):
```bash
cd ~/Downloads/NEON-HEIST-portfolio/neon-heist
git add .
git commit -m "NEON HEIST: playable mission, combat, crew select, web + Mac builds"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/neon-heist.git
git push -u origin main
```
When it asks for a password, use a GitHub **personal access token** (GitHub → Settings → Developer settings →
Personal access tokens), not your normal password. Or install GitHub Desktop and use "Add existing repository".

## Step 2: Make the play link (GitHub Pages)
1. New repository: `neon-heist-play`, **Public**.
2. In Terminal:
```bash
cd ~/Downloads/NEON-HEIST-portfolio/neon-heist-play
git init
git add .
git commit -m "Web build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/neon-heist-play.git
git push -u origin main
```
3. On GitHub, open the repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → Save.
4. After 1–2 minutes your game is live at **https://YOUR-USERNAME.github.io/neon-heist-play/**. Anyone can open it, no login.

## Step 3: Add the Mac download (optional)
In the `neon-heist` repo: **Releases → Create a new release** → tag `v0.3` → drag in
`~/Documents/neon-heist/build/NEON HEIST.zip` → Publish.

## Step 4: Your portfolio
See `portfolio/PORTFOLIO-TEXT.md` for the project description, and `portfolio/NeonHeistCard.tsx` for a
ready-made card component (Next.js + Tailwind). Copy `portfolio/images/` into your site's `public/projects/neon-heist/`.

## Updating your own project folder
Your `~/Documents/neon-heist` folder still has the older version. When you're happy, you can replace it with this
`neon-heist` folder (keep `build/` from the old one if you want the Mac app), then open it in Godot.
