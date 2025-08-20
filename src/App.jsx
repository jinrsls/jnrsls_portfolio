import { useState } from "react";
import DarkVeil from "./DarkVeil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.05}
          scanlineIntensity={0.2}
          scanlineFrequency={80}
          warpAmount={0.15}
          speed={0.6}
          resolutionScale={1}
        />
      </div>
    </div>
  );
}

export default App;
