import React from "react";

import { Wizard } from "./Wizard";
import { Video } from "./Video";
import Footer from "./Footer";

const Home: React.FC = () => {
  const img = new Image();
  img.src = "wizard.png";

  return (
    <div id="root">
      <h1>{`Guess Wizardry`}</h1>
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
      <Footer />
    </div>
  );
};

export default Home;
