import { NoiseBackground } from "@/components/noise-background";
import { Particles } from "@/components/particles";
import { TeaserHero } from "@/components/teaser-hero";
import { TVGlitch } from "@/components/tv-glitch";

export default function Home() {
  return (
    <main className="relative min-h-screen h-screen overflow-hidden">
      <NoiseBackground />
      <Particles />
      <TeaserHero />
      <TVGlitch />
    </main>
  );
}
