// NEON HEIST project card for a Next.js + Tailwind portfolio.
// 1. Copy portfolio/images/* to public/projects/neon-heist/
// 2. Replace YOUR-USERNAME below
// 3. Use it in your Projects section: <NeonHeistCard />

import Image from "next/image";

const PLAY_URL = "https://YOUR-USERNAME.github.io/neon-heist-play/";
const CODE_URL = "https://github.com/YOUR-USERNAME/neon-heist";

const shots = [
  "/projects/neon-heist/02-choose-operative.jpg",
  "/projects/neon-heist/03-floor-12-combat.jpg",
  "/projects/neon-heist/04-hover-car.jpg",
];

export default function NeonHeistCard() {
  return (
    <article className="overflow-hidden rounded-2xl border border-cyan-400/30 bg-zinc-950 text-zinc-200">
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="group relative block">
        <Image
          src="/projects/neon-heist/01-title.jpg"
          alt="NEON HEIST title screen: neon Johannesburg street at night"
          width={1280}
          height={720}
          className="w-full transition duration-300 group-hover:opacity-80"
        />
        <span className="absolute inset-0 hidden items-center justify-center text-lg font-semibold text-white group-hover:flex">
          ▶ Play in browser
        </span>
      </a>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-cyan-300">NEON HEIST: The Blackout Protocol</h3>
          <p className="mt-1 text-sm text-fuchsia-300">Third-person cyberpunk stealth-action game · Johannesburg, 2077</p>
        </div>

        <p className="text-sm leading-relaxed">
          Pick one of four operatives, steal a hover car, break into a megacorp tower and escape with stolen
          files. Built in Godot 4 with GDScript and playable in the browser.
        </p>

        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Guard AI: state machine with vision, hearing and A* pathfinding</li>
          <li>Combat system with 4 weapons and enemies that fight back</li>
          <li>Flyable hover car, pursuit drones and a hacking minigame</li>
          <li>Automated headless test that plays the whole mission (49 checks)</li>
        </ul>

        <div className="grid grid-cols-3 gap-2">
          {shots.map((src) => (
            <Image key={src} src={src} alt="NEON HEIST gameplay screenshot" width={640} height={360} className="rounded-md" />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {["Godot 4.7", "GDScript", "Blender", "WebAssembly", "Git"].map((t) => (
            <span key={t} className="rounded-full border border-zinc-700 px-3 py-1">{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
             className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-zinc-950 hover:bg-cyan-300">
            ▶ Play in browser
          </a>
          <a href={CODE_URL} target="_blank" rel="noopener noreferrer"
             className="rounded-lg border border-cyan-400 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/10">
            Source code
          </a>
          <span className="text-xs text-zinc-400">Best on desktop with keyboard + mouse</span>
        </div>
      </div>
    </article>
  );
}
