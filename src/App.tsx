import { Routes, Route, Outlet } from "react-router-dom";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import { Wizard } from "./components/Wizard";
import { Video } from "./components/Video";
import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

function Layout() {
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
            description="Guess Wizard what the wizard is showing!"
          />
        </div>
        <div className="right-half">
          <Video src="flag_video.mp4" />
        </div>
      </section>
      <section className="footer-section">
        <Footer />
      </section>
      <Outlet />
    </div>
  );
}