import Image from "next/image";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
  <div className="max-w-7xl mx-auto">
    <div className="text-white">Morgana, eu te amo!</div>
    <Hero />

    {/*<Header />   
    <VideoExplanation />
    <Pricing />
    <FAQ /> */}
  </div>
  );
}
