import Hero from "./Hero";
import OurTimeline from "./OurTimeline";
import Gallery from "./Gallery";
import Proposal from "./Proposal";

export default function App() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section id="timeline">
        <OurTimeline />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Proposal Section */}
      <section id="proposal">
        <Proposal />
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        Made with ❤️ — A story created with love.
      </footer>

    </div>
  );
}
