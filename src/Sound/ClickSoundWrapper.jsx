import React from "react";
import useSound from "use-sound";
import pop from "/public/pop.mp3";

function ClickSoundWrapper({ children }) {
  const [playClickSound] = useSound(pop, { volume: 0.25 });

  const handleClick = () => {
    playClickSound();
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}

export default ClickSoundWrapper;
