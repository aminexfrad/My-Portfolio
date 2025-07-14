import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Digital Dreamweaver",
          "Code Alchemist",
          "Pixel Sorcerer",
          "Web Whisperer",
          "Digital Architect",
          "Creative Technomancer",
          "Interface Wizard",
          "Digital Storyteller",
          "Code Poet",
          "Digital Artisan"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
