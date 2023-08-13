import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
  );
}
