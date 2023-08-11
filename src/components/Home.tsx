import React from "react";

import { Wizard } from "./Wizard";
import { Video } from "./Video";

const Home: React.FC = () => {
  const img = new Image();
  img.src = "wizard.png";

  return (
    <div>
      <section className="split-section">
        <div className="left-half">
          <Wizard
            name="Guess Wizard"
            img={img}
            description="Guess Wizard is a game where you guess wizards"
          />
        </div>
        <div className="right-half">
          <Video src="flag_video.mp4" />
        </div>
      </section>
    </div>
  );
};

export default Home;
