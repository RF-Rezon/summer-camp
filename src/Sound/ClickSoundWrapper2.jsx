import React from "react";
import useSound from "use-sound";
import pop2 from "/public/pop2.mp3";

function ClickSoundWrapper2({ children }) {
  const [playClickSound] = useSound(pop2, { volume: 0.25 });

  const handleClick = () => {
    playClickSound();
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}

export default ClickSoundWrapper2;
