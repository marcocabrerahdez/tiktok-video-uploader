// App.tsx
import "./App.css"; // Import BrowserRouter and other necessary components
import { Wizard } from "./components/Wizard";
import { Video } from "./components/Video";
import Footer from "./components/Footer";

function App() {
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
        <section className="footer-section">
          <Footer />
        </section>
      </div>
  );
}

export default App;
