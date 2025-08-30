import Hero from "./layouts/hero";
import Ucapan from "./layouts/ucapan";
import UcapanUtama from "./layouts/ucapanutama";
import Gridfoto from "./layouts/gridfoto";
import ReactLenis from "lenis/react";

export default function App() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <UcapanUtama />
        <Ucapan />
        <Gridfoto />
      </div>
    </ReactLenis>
  );
}
